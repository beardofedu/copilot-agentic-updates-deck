#!/bin/bash
#
# Local demo reset script
# Usage: ./scripts/reset-demo.sh
#
# This script performs the same reset as the GitHub Action but locally:
# - Resets code to the snapshot commit
# - Closes demo-created PRs
# - Reopens and unassigns demo issues (#5-#12)
#

set -e

echo "🔄 Resetting demo to snapshot state..."
echo ""

# Find the snapshot commit (the one where demo app was added)
SNAPSHOT_COMMIT=$(git log --reverse --oneline --grep="Add lightweight demo app" | head -1 | cut -d' ' -f1)

if [ -z "$SNAPSHOT_COMMIT" ]; then
  echo "⚠️  Could not find snapshot commit. Using current main as reference."
  SNAPSHOT_COMMIT=$(git rev-parse HEAD)
fi

echo "📌 Snapshot commit: $SNAPSHOT_COMMIT"
echo ""

# Reset working directory
echo "💾 Resetting code to snapshot..."
git reset --hard "$SNAPSHOT_COMMIT"
echo "✓ Code reset"
echo ""

# Close open demo PRs
echo "🔒 Closing demo-created PRs..."
prs=$(gh pr list --state open --search "created:>2026-06-29" --json number,title --jq '.[].number' 2>/dev/null || true)

if [ -z "$prs" ]; then
  echo "✓ No open demo PRs to close"
else
  for pr in $prs; do
    echo "  • Closing PR #$pr"
    gh pr close "$pr" --comment "Demo reset: closing PR created during test run." 2>/dev/null || true
  done
fi
echo ""

# Reset demo issues
echo "♻️  Resetting demo issues (#5-#12)..."
for issue in 5 6 7 8 9 10 11 12; do
  state=$(gh issue view "$issue" --json state --jq '.state' 2>/dev/null || echo "NOT_FOUND")
  
  if [ "$state" = "CLOSED" ]; then
    echo "  • Reopening issue #$issue"
    gh issue reopen "$issue" --comment "Demo reset: reopening for next run." 2>/dev/null || true
  fi
  
  # Unassign
  gh issue edit "$issue" --remove-assignee @me 2>/dev/null || true
done
echo "✓ Demo issues reset"
echo ""

echo "✅ Demo reset complete!"
echo ""
echo "Next steps:"
echo "  1. cd demo-app && npm install && npm start"
echo "  2. Open http://localhost:3000"
echo "  3. Run your demo"
echo ""
echo "To reset again after testing, run: ./scripts/reset-demo.sh"
