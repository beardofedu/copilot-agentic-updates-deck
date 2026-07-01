# 25-Minute SDLC Demo Walkthrough

**Objective:** Demonstrate an end-to-end GitHub SDLC workflow using Issues → Project Board → Pull Requests → Code Review → Security, with Copilot agents guiding the process.

---

## Setup (Pre-Demo, ~2 min)

- [ ] Open repo: https://github.com/beardofedu/copilot-agentic-updates-deck
- [ ] Open Project Board (Projects tab → "Copilot Agentic Updates Demo Board")
- [ ] Have browser tabs ready for: Repo, Project, Issue detail, PR detail
- [ ] Have Copilot CLI / Copilot agents ready in another window

---

## Part 1: Issue Triage & Backlog (5 min)

**Narrative:** "Starting with raw ideas—let's turn them into structured work."

1. **Show issue templates** (2 min)
   - Go to repo → Issues tab → "New Issue"
   - Show Feature Request template with Priority/Track fields
   - Mention: "Templates guide contributors to provide the right context upfront"
   - *Optional:* Create a sample issue live (e.g., "Add API rate limiting")
   - Label it with `priority-p1` and `track-platform`

2. **Link to Project Board** (2 min)
   - Go to Project Board → show the 10 seeded items
   - Point out Priority, Track, Risk, Demo Date, Effort columns
   - Explain: "Every issue automatically appears in the board for triage"
   - Show filtering: "Let me filter for P0 + In Progress items"
   - *Takeaway:* "Single source of truth—no separate tracking tool needed"

3. **Highlight status** (1 min)
   - "Notice Status column: Todo → In Progress → Done"
   - "This becomes the backbone of our review cycle"

---

## Part 2: Project Board Views & Planning (4 min)

**Narrative:** "Now let's see how we visualize the work for different stakeholders."

1. **Table View – Prioritization** (2 min)
   - Show default Table view sorted by Priority
   - Point out P0 items at top (urgent, high risk)
   - Drag to reorder Priority
   - *Takeaway:* "Leadership reviews this: What's blocking launch?"

2. **Board View – Execution Flow** (1 min)
   - Show Board grouped by Status (Todo | In Progress | Done)
   - Move one item across statuses (demo drag-and-drop)
   - *Takeaway:* "Team uses this: What's in flight? What's next?"

3. **Roadmap View – Demo Timeline** (1 min)
   - Show Roadmap grouped by Demo Date
   - Point out the upcoming dates and what's on each
   - *Takeaway:* "Executives see: When do these features ship?"

---

## Part 3: Creating & Reviewing a PR (8 min)

**Narrative:** "Now a developer picks up a P1 item and opens a PR. Let's review it with Copilot."

1. **Show PR Template** (1 min)
   - Go to any PR in the repo (or create a draft one)
   - Show PR template checklist: type, testing, security review, docs
   - Explain: "This guides the author and sets expectations for reviewers"

2. **Trigger Copilot Code Review** (3–4 min)
   - *Scenario:* "Developer pushed a PR. Let's have Copilot Code Review agent analyze it."
   - Open Copilot Code Review agent (or demo agent)
   - Point out: It scans for logic errors, security issues, test coverage
   - *Key takeaway:* "Automated review gates catch issues early—no surprises in human review"

3. **Manual Code Review** (2 min)
   - Show inline comments on the diff
   - Example: "Copilot flagged a missing null check—developer fixes it"
   - Point out: PR status checks passing (CI workflow green light)
   - Mention branch protection: "Can't merge without approval + CI passing"

4. **Merge & Auto-Link** (1 min)
   - "Approve & merge the PR"
   - Show: Issue auto-closes (via PR description), board item moves to Done
   - *Takeaway:* "One action cascades: PR → Issue → Board status"

---

## Part 4: Security & Governance (3 min)

**Narrative:** "Zooming out—how we keep the process secure and scalable."

1. **Branch Protection** (1 min)
   - Mention: Main branch requires PR review + passing CI
   - Show label: `needs-security-review` (for PRs requiring GAS scans)
   - Explain: "Governance prevents bad code from shipping"

2. **CI Pipeline** (1 min)
   - Show `.github/workflows/ci.yml` (linter, tests, security scan steps)
   - Point out: CI status check on PR ("All checks passed")
   - *Takeaway:* "Automated gates scale—no manual "run the tests" step"

3. **Labels & Traceability** (1 min)
   - Show label scheme: Priority (red/orange/yellow/green), Track (blue/purple/etc), Risk
   - Explain: "Labels enable rich filtering for compliance & audits"
   - Example filter: "Show all high-risk items in the Observability track"

---

## Part 5: Copilot Agents in Action (3–4 min)

**Narrative:** "How Copilot speeds up the entire workflow."

1. **Copilot Code Review Agent** (1–2 min)
   - Ran it on the PR → identified security/logic gaps
   - *Benefit:* Reviewers focus on architecture, not syntax

2. **Copilot Coding Agent** (1 min)
   - *Optional demo:* Show agent picking up an issue, writing a PR, running tests
   - Mention: Can reduce cycle time from hours to minutes
   - *Takeaway:* "Agents handle repetitive work; humans focus on design"

3. **Q&A** (1 min)
   - "Any questions on the flow?"

---

## Closing (1 min)

**Key takeaways:**
- ✅ **Structured intake** → Issue templates
- ✅ **Visibility** → Project board with multiple views
- ✅ **Quality gates** → CI + code review + branch protection
- ✅ **Speed** → Copilot agents automating the workflow
- ✅ **Governance** → Labels, traceability, security gates

**Call to action:** "This scales from 5 people to 500—same workflow, higher velocity."

---

## Timing Cheat Sheet

| Segment | Time | Cumulative |
|---------|------|-----------|
| Setup | 2 min | 2 min |
| Issue Triage | 5 min | 7 min |
| Board Views | 4 min | 11 min |
| PR & Review | 8 min | 19 min |
| Security & Governance | 3 min | 22 min |
| Copilot Agents | 3 min | 25 min |

---

## Demo Contingencies

**If running short:**
- Skip "Roadmap View" (show Table + Board only)
- Demo Copilot agents on a pre-recorded screen share (shows the capability without live lag)

**If questions derail timing:**
- Park deep technical questions for office hours
- Keep momentum: "Let's see that in the next section"

**If a tool fails:**
- Have a pre-demo screenshot of each view (board, PR, review agent result)
- Can narrate from slides without losing credibility

---

## Post-Demo Artifacts

- Share this walkthrough + Project Board link with attendees
- Offer: "Fork this repo as a template for your own SDLC board"
- Follow-up: Copilot agents deep-dive session (30 min, separate)
