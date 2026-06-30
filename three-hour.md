# Three-Hour Instructor Guide
## Copilot & Agentic AI Updates (Observer-Only, Presenter-Led)

This is the extended **3-hour** version of the session, designed for a live audience that watches the instructor demo end-to-end.

---

## High-level agenda (email-ready)

Use this block directly in calendar invites or announcement emails.

### Email copy (short)

**Session:** Copilot & Agentic AI Updates (3-hour deep dive)  
**Format:** Instructor-led live demonstration (no attendee hands-on)  
**Audience:** Engineering leaders, staff/principal engineers, platform, security, and DevEx teams

**Agenda**
- 0:00–0:15 — Opening, context, and learning goals
- 0:15–0:45 — GitHub Copilot App: issue-to-PR autonomous workflow + parallel sessions + Agent Merge
- 0:45–1:10 — Rubber Duck Agent (GA): second-opinion quality workflow for design and risk reduction
- 1:10–1:40 — Defender + GitHub Code Security (GA): enriched findings and remediation flow
- 1:40–1:50 — Break
- 1:50–2:20 — Cloud + Local Sandboxes (Preview): policy-driven runtime controls for agents
- 2:20–2:50 — Agent Apps: marketplace extensibility and enterprise integration patterns
- 2:50–3:00 — Copilot SDK (GA) + wrap-up and Q&A

**Outcomes**
- Understand what changed in agentic development workflows
- See how quality, security, and governance are evolving in parallel
- Learn practical adoption patterns for Agent Apps and the Copilot SDK

---

## Program goals and facilitation strategy

## Session goals

By the end of 3 hours, participants should be able to:

1. Explain how the Copilot App shifts work from assistive coding to autonomous execution.
2. Describe where Rubber Duck adds measurable quality and decision confidence.
3. Articulate how Defender + GitHub Code Security improves prioritization and remediation speed.
4. Distinguish cloud vs local sandbox execution models and policy implications.
5. Position Agent Apps as a composable extension model for domain-specific workflows.
6. Frame Copilot SDK as a platform embedding strategy, not just a feature API.

## Instructor delivery model (important)

- Keep the session **observer-only**: attendees should focus on architecture and operational decisions.
- Use **show → explain → translate to enterprise implications** for each segment.
- After each major topic, pause for 2–3 focused questions before moving on.
- If tooling is delayed, use the fallback assets and continue narrative pacing.

---

## Pre-session setup checklist (30–45 min before start)

1. Open presentation: `https://beardofedu.github.io/copilot-agentic-updates-deck/`
2. Verify demo app starts:
   - `cd demo-app && npm install && npm start`
   - Confirm `http://localhost:3000` loads.
3. Confirm issue backlog exists and is open:
   - #5–#12 in `beardofedu/copilot-agentic-updates-deck`
4. Confirm reset flow works:
   - `./scripts/reset-demo.sh` (or `reset-demo.yml` workflow)
5. Pre-open source links from `demo.md` in background tabs.
6. Have screenshot backups for each topic:
   - Copilot App sessions / PR
   - Rubber Duck output comparison
   - Security finding + remediation
   - Sandbox policy examples
   - Agent App marketplace example
   - Copilot SDK architecture visual

---

## Run of show (180 minutes)

| Time | Duration | Segment | Primary objective |
|---|---:|---|---|
| 0:00–0:15 | 15 min | Opening and framing | Establish mental model for agentic development |
| 0:15–0:45 | 30 min | Topic 1: Copilot App | Show autonomous issue-to-PR workflow |
| 0:45–1:10 | 25 min | Topic 2: Rubber Duck | Show second-opinion quality workflow |
| 1:10–1:40 | 30 min | Topic 3: Defender + GCS | Show security signal to fix flow |
| 1:40–1:50 | 10 min | Break | Reset attention |
| 1:50–2:20 | 30 min | Topic 4: Sandboxes | Explain policy controls and execution boundaries |
| 2:20–2:50 | 30 min | Topic 5: Agent Apps | Show extensibility and enterprise value |
| 2:50–3:00 | 10 min | Topic 6 + wrap | Position SDK + close with adoption plan |

---

## Detailed instructor notes

## 0:00–0:15 — Opening and framing

### Instructor objective
Set expectations, define terms, and explain why this is now operationally relevant.

### What to show
- Deck title slide
- Bottom-line slide preview
- Optional quick visual of today’s issue backlog (#5–#12)

### Talk track
- “Today is intentionally demonstration-first. You’ll see end-to-end workflows and decision points.”
- “The platform trend is twofold: more autonomous execution, and more explicit governance.”
- “We’ll cover execution, quality, security, runtime controls, extensibility, then platform embedding.”

### Key definitions to anchor early
- **Assistive AI:** helps when prompted.
- **Agentic AI:** plans and executes multi-step work with less micromanagement.
- **Control plane:** policies and approvals that bound what autonomous systems can do.

### Questions to ask audience
- “Where does orchestration overhead hurt your delivery flow most today?”
- “Where do you need stronger controls before broad AI adoption?”

### Time control
- Hard stop at minute 15.

---

## 0:15–0:45 — Topic 1: GitHub Copilot App — Full Dev Agent

### Instructor objective
Demonstrate the shift from “assistant in editor” to “autonomous unit of work.”

### What to show
1. Open issue #5 and assign to Copilot in Copilot App.
2. Start a second session with issue #6 to show parallel isolated branches.
3. Observe progress artifacts (plan, changes, PR output).
4. Explain Agent Merge loop (review comments + CI fixes).

### Exact presenter cue
- “Assign issue #5 to Copilot in the Copilot App.”
- “Start issue #6 in a second session to show branch isolation and parallel throughput.”

### Core narrative
- Unit of work is now **issue → implementation → PR**, not “single-file suggestion.”
- Parallel session model turns waiting time into throughput.
- Agent Merge reduces post-PR human ping-pong.

### Instructor notes (depth points)
- Emphasize that autonomy does **not** remove review accountability.
- Compare to historical CI/CD automation: autonomous coding is the new frontier.
- Mention that portfolio-level value often appears when teams run many small issues concurrently.

### Common audience concerns and responses
- **“Will this create noisy PRs?”** → Use tighter issue scopes and acceptance criteria.
- **“What about code quality drift?”** → Pair with review policies and second-opinion flows.
- **“How do we avoid merge risk?”** → Isolated branches + mandatory CI/review gates.

### If demo lags
Use existing issue descriptions and a previously generated PR screenshot; continue with architectural takeaway.

---

## 0:45–1:10 — Topic 2: Rubber Duck Agent — Now GA

### Instructor objective
Show how second-opinion workflows improve decision quality and reduce blind spots.

### What to show
1. Use issue #7 as prompt context.
2. Run initial prompt in Copilot CLI.
3. Run Rubber Duck second-opinion flow.
4. Compare initial answer vs revised/criticized answer.

### Suggested live prompt
“Design a migration plan for checkout quote reliability in `demo-app/server.js` with rollback, SLOs, and observability. Then critique your own plan for hidden risks and propose a safer revision.”

### Core narrative
- Rubber Duck separates generation from critique.
- Useful for architecture, incident response, migrations, and high-impact changes.
- Value is confidence and risk reduction, not just “better wording.”

### Instructor notes (depth points)
- Highlight tradeoff thinking: complexity, rollout blast radius, rollback speed.
- Show how critique catches missing assumptions (data migration, canary strategy, observability).
- Position as a decision-quality amplifier for senior engineers.

### Discussion prompts
- “Where does your team make expensive architectural mistakes?”
- “What decisions need structured challenge before implementation?”

---

## 1:10–1:40 — Topic 3: Microsoft Defender + GitHub Code Security — Now GA

### Instructor objective
Explain why enriched security signals improve prioritization and remediation velocity.

### What to show
1. Issue #8 (XSS) and issue #9 (weak token generation).
2. Security finding context (or screenshot) and remediation flow.
3. Example PR-level fix narrative (detect → prioritize → remediate).

### Core narrative
- Security findings become more actionable with runtime/production context.
- Teams prioritize by potential impact, not raw alert volume.
- Copilot-assisted remediation accelerates mean time to remediate while preserving review controls.

### Instructor notes (depth points)
- Explain triage hierarchy: exploitability, exposure, business criticality.
- Use #8 then #9 to show prioritization decisions between frontend and backend risk.
- Emphasize “autofix” still requires policy and human review before merge.

### Executive framing line
“Security is moving from queue management to risk-informed workflow automation.”

### Audience Q&A prompts
- “How does your team currently prioritize among dozens of findings?”
- “What evidence does leadership require before auto-remediation is trusted?”

---

## 1:40–1:50 — Break (10 minutes)

### Instructor note
Before break, state exactly what resumes afterward:
- “Next we’ll move into policy controls (sandboxes), then extensibility (Agent Apps), then SDK strategy.”

---

## 1:50–2:20 — Topic 4: Cloud + Local Sandboxes — Public Preview

### Instructor objective
Give a practical, policy-first explanation of sandbox runtime controls.

### What to show
1. Topic 4 slide.
2. Issue #10 as a policy artifact prompt.
3. Whiteboard/verbal comparison: cloud vs local sandbox choice model.

### Core explanation
- A sandbox is a policy-constrained execution boundary for agents.
- It governs tools, network, data scope, identities, and approvals.
- It enables safe autonomy for regulated or high-governance environments.

### Cloud vs local comparison (talking points)
- **Cloud sandbox:** centralized enforcement, consistency, auditability, repeatability.
- **Local sandbox:** proximity to local/private assets, constrained enterprise network access, custom local dependencies.
- Decision factor: governance and resource locality requirements, not “which is better.”

### Policy knobs to explain clearly
- Tool allow/deny lists
- Network egress controls
- Repo/path and secret boundary constraints
- Human approval gates for high-impact actions

### Practical phrasing for non-technical stakeholders
“Sandboxes are how we define what the AI agent is allowed to touch before it runs.”

### Instructor risk note
Do not imply universal defaults; frame as policy-programmable controls varying by organization.

---

## 2:20–2:50 — Topic 5: Extend GitHub with Agent Apps

### Instructor objective
Show how partner-built agents extend platform capability without rebuilding everything in-house.

### What to show
1. Topic 5 slide + Agent Apps announcement.
2. Issue #11 as a concrete evaluation scenario.
3. Example integration flow: install app → app appears in workflow → specialized output.

### Core explanation
- Agent Apps are installable, domain-specialized AI agents integrated into GitHub workflows.
- They are not just static connectors; they contribute reasoning/execution in context.
- They allow a composable ecosystem: first-party Copilot + partner expertise.

### Example use cases to narrate
- Dependency risk triage agent
- Compliance evidence/review agent
- Cloud cost impact reviewer

### Enterprise evaluation checklist (speaker-ready)
- Required permissions and scopes
- Data boundary and retention behavior
- Auditability and traceability of actions
- Failure mode and fallback process
- Operational ownership (who runs/governs the app)

### Business framing line
“Agent Apps improve time-to-value by importing specialized capability instead of custom-building every agent workflow.”

### Audience prompts
- “Where would specialized domain intelligence save your teams the most time?”
- “Which workflow is painful enough that you’d buy before building?”

---

## 2:50–3:00 — Topic 6: Copilot SDK — GA + close

### Instructor objective
Position SDK as an embedding strategy and close with actionable adoption steps.

### What to show
1. Topic 6 slide.
2. Issue #12 as the internal release-notes assistant use case.
3. Quick architecture walkthrough: internal app/service + Copilot engine + enterprise systems.

### Core explanation
- Copilot SDK enables embedding agentic capabilities in internal tools and platforms.
- This turns Copilot from “tool used by developers” into “capability integrated into SDLC systems.”
- Language support breadth lowers adoption friction across enterprise stacks.

### Close-out script (2 minutes)
- “Execution is autonomous, quality is being challenged, and security/governance are catching up.”
- “Agent Apps and SDK make this a platform strategy, not isolated product usage.”
- “Your first pilot should be narrow, high-friction, and measurable.”

### Final Q&A prompts
- “What workflow should be your first 30-day pilot?”
- “What governance prerequisite must be solved first?”
- “Which KPI will prove value to leadership?”

---

## Instructor appendix A — Demo flow by issues

| Topic | Primary issue(s) | Primary action |
|---|---|---|
| Copilot App | #5, #6 | Assign #5 to Copilot; run #6 in parallel |
| Rubber Duck | #7 | Use as second-opinion prompt |
| Defender + GCS | #8, #9 | Show prioritized security remediation sequence |
| Sandboxes | #10 | Use as policy matrix artifact request |
| Agent Apps | #11 | Use as marketplace evaluation scenario |
| Copilot SDK | #12 | Use as embedded platform prototype scenario |

---

## Instructor appendix B — Contingency and pacing controls

## If a live surface fails
1. Show the corresponding slide.
2. Open source announcement link.
3. Show backup screenshot.
4. Continue with architecture and operational takeaway.

## If you are behind time
- Drop one live Q&A cycle in Topic 3 or Topic 5.
- Keep Topics 4 and 5 high-value context intact (common audience knowledge gap).
- Preserve final 5–7 minutes for wrap-up and Q&A.

## If you are ahead of time
- Add one discussion round:
  - “What would block this in your organization?”
  - “What control policy would you mandate first?”

---

## Instructor appendix C — Source links

- Copilot App: https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview/
- Rubber Duck Agent: https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/
- Defender + GCS: https://www.microsoft.com/en-us/security/blog/2026/06/02/microsoft-build-2026-securing-code-agents-and-models-across-the-development-lifecycle/
- Sandboxes: https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/
- Agent Apps: https://github.blog/changelog/2026-06-02-extend-github-with-agent-apps/
- Copilot SDK: https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/
