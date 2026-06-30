# Demo Reset Guide

After testing your demo, use one of these methods to reset the repository to its snapshot state:

## Option 1: Local reset (fastest)

```bash
./scripts/reset-demo.sh
```

This resets your local repo and all demo issues in seconds.

**What it does:**
- Hard-resets code to the snapshot commit (where demo app was created)
- Closes any PRs created during the demo
- Reopens and unassigns demo issues (#5-#12)
- Prepares the repo for the next demo run

## Option 2: GitHub Action (remote reset)

Trigger the reset workflow from GitHub:

```bash
gh workflow run reset-demo.yml -f action=reset
```

Or use the GitHub web UI:
1. Go to **Actions** → **Reset Demo State**
2. Click **Run workflow**
3. Select `reset` from the dropdown
4. Click **Run workflow**

**What it does:**
- Same as local reset, but runs on GitHub
- Useful for remote testing or CI pipeline integration
- Takes ~1–2 minutes to complete

## Reset timing

- **Before presentation**: Run reset to ensure clean state
- **After demo test run**: Run reset immediately afterward
- **Between test iterations**: Run reset between each practice run

## Snapshot management

The workflow also supports a `snapshot` action:

```bash
gh workflow run reset-demo.yml -f action=snapshot
```

This creates/updates `.github/demo-snapshot.json` with metadata about the snapshot commit for reference.

## Verify reset success

After running reset, confirm:

1. ✅ Code has no demo changes
   ```bash
   git status
   ```

2. ✅ Demo issues are open and unassigned
   ```bash
   gh issue list --state open
   ```

3. ✅ No open demo PRs
   ```bash
   gh pr list --state open
   ```

If any of these are unexpected, check the workflow logs or script output.

## Troubleshooting

**"Could not find snapshot commit"**
- This means the workflow couldn't locate the "Add lightweight demo app" commit
- The script will use the current main as fallback
- Manually verify the state before the presentation

**Reset script fails with permissions error**
- Ensure script is executable: `chmod +x scripts/reset-demo.sh`
- Ensure `gh` CLI is authenticated: `gh auth status`

**Issues still show as closed after reset**
- The workflow/script may not have permissions to modify issues
- Verify your GitHub token has `issues:write` scope
- Manually reopen issues if needed before the presentation

## Demo app startup

After reset, start the demo app:

```bash
cd demo-app
npm install
npm start
```

Open: `http://localhost:3000`

The app will be ready for the next demo run.
