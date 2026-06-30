# 60-Minute Live Demo Script
## Copilot & Agentic AI Updates (Observer-Only Session)

This guide is a **fully presenter-led, no-hands-on** demonstration aligned to the slide deck topics:

1. GitHub Copilot App — Full Dev Agent  
2. Rubber Duck Agent — GA  
3. Microsoft Defender + GitHub Code Security — GA  
4. Cloud and Local Sandboxes — Public Preview  
5. Extend GitHub with Agent Apps  
6. Copilot SDK — GA

---

## Session outcomes

By the end of this demo, attendees should understand:

- What changed in the platform and why it matters now
- How autonomous development differs from assistive usage
- How security + governance are evolving alongside agentic workflows
- How extensibility (Agent Apps + SDK) changes enterprise adoption strategy

---

## Presenter prep (do this before the session)

1. **Deck readiness**
   - Open: `https://beardofedu.github.io/copilot-agentic-updates-deck/`
   - Verify all source links open correctly.

2. **Environment readiness**
   - Be signed into GitHub and GitHub Copilot.
   - Have one sample repo available (any non-sensitive demo repo is fine).
   - Have a terminal and browser ready side-by-side.

3. **Backup assets**
   - Keep screenshots of key workflows in case of network/API latency:
     - Copilot App multi-session/parallel work
     - PR review + CI feedback loop
     - Security findings + autofix flow
     - Governance/sandbox policy screens
     - Marketplace Agent App listing

4. **Presenter timing aid**
   - Keep a visible timer.
   - Target **~7–8 minutes per major segment** and protect final Q&A.

---

## 60-minute agenda (observer format)

| Time | Segment | Goal |
|---|---|---|
| 0:00–0:05 | Opening + context | Frame the “why now” for agentic development |
| 0:05–0:14 | Copilot App (Full Dev Agent) | Show end-to-end autonomous issue-to-PR loop |
| 0:14–0:22 | Rubber Duck Agent (GA) | Show second-opinion workflow and quality uplift |
| 0:22–0:31 | Defender + GitHub Code Security (GA) | Show security signal enrichment + autofix motion |
| 0:31–0:39 | Cloud + Local Sandboxes (Preview) | Explain policy boundaries for agent runtime |
| 0:39–0:47 | Agent Apps | Show marketplace extensibility and workflow value |
| 0:47–0:55 | Copilot SDK (GA) | Show architecture and integration patterns |
| 0:55–1:00 | Summary + Q&A | Consolidate key takeaways and next actions |

---

## Detailed facilitator script

## 0:00–0:05 — Opening + framing

### What to show
- Title slide + bottom-line slide preview.

### Talk track
- “Today is intentionally **observer-only**. You can focus on decisions and architecture, not setup.”
- “The pattern across all updates is: **more autonomous execution**, with **more governance** at the same time.”
- “We’ll move from execution (Copilot App), to quality (Rubber Duck), to security/governance, then extensibility (Agent Apps + SDK).”

### Key message
- Agentic AI is maturing from isolated capability demos into operational workflows.

---

## 0:05–0:14 — Topic 1: GitHub Copilot App — Full Dev Agent

### What to show (recommended flow)
1. A sample issue in a repo.
2. Copilot App starting work from issue context.
3. Parallel session concept (isolated branches, concurrent tasks).
4. PR creation and summary.
5. Agent Merge concept (review comments + CI iteration loop).

### Demo narration
- “This is not just code completion. The unit of work is now **issue to merged PR**.”
- “Notice branch isolation per session. That allows safe parallelization of unrelated tasks.”
- “Agent Merge closes the loop post-PR: comments and CI failures can be handled without manual ping-pong.”

### Suggested pacing
- 2 min: context + issue setup
- 4 min: autonomous run and resulting PR artifacts
- 3 min: parallelization + Agent Merge implications

### Key message
- Primary productivity gain comes from reducing orchestration overhead, not just typing faster.

---

## 0:14–0:22 — Topic 2: Rubber Duck Agent — GA

### What to show
1. Terminal with Copilot CLI prompt for a non-trivial engineering question.
2. Initial answer.
3. Rubber Duck second-opinion pass with critique.
4. Revised answer with tighter reasoning.

### Suggested prompt style
- “Design a migration plan for [feature] with rollback and observability.”
- “Find weaknesses in this approach and propose safer alternatives.”

### Demo narration
- “Rubber Duck is not another chat mode; it’s a **quality control pattern**.”
- “The multi-model flow separates generation from critique.”
- “This is especially useful for design decisions, incident analysis, and risky refactors.”

### Key message
- Use Rubber Duck when decision quality matters more than immediate speed.

---

## 0:22–0:31 — Topic 3: Microsoft Defender + GitHub Code Security — GA

### What to show
1. Security finding view (or prepared screenshot).
2. Production-context enrichment signal (priority/severity context).
3. Copilot-assisted remediation/autofix flow.
4. Resulting PR/remediation artifact.

### Demo narration
- “The major shift is context: findings become more actionable when tied to runtime/production signals.”
- “Prioritization improves because the system highlights what is likely impactful in real environments.”
- “Copilot remediation accelerates mean time to fix while preserving review checkpoints.”

### Key message
- Security workflow is moving from “detect then triage manually” toward “detect, prioritize, and remediate in one motion.”

---

## 0:31–0:39 — Topic 4: Cloud + Local Sandboxes (Public Preview)

### What to show
1. Policy concept slide.
2. Example policy boundaries:
   - Allowed tools
   - Network/resource scope
   - Repo/data boundaries
3. Cloud sandbox vs local sandbox comparison (verbal diagram).

### Demo narration
- “This is the enterprise control plane for agent execution.”
- “Regulated teams need proof that agents run within predefined limits.”
- “Sandboxes let you choose where tasks execute and what they can touch.”

### Key message
- Governance is becoming a built-in feature of agentic delivery, not a retrofit.

---

## 0:39–0:47 — Topic 5: Extend GitHub with Agent Apps

### What to show
1. Agent Apps announcement/source page.
2. Example marketplace scenario:
   - Install app
   - App appears in workflow context
   - App contributes specialized capabilities
3. One concrete use case (e.g., compliance review, cloud cost analysis, incident triage).

### Demo narration
- “Agent Apps are to agentic workflows what integrations were to CI/CD: a force multiplier.”
- “This opens a partner ecosystem so teams can plug in domain-specific intelligence quickly.”
- “The strategic value is composability: first-party and partner agents in one platform.”

### Key message
- Extensibility is no longer optional for enterprise AI platforms; it’s core adoption infrastructure.

---

## 0:47–0:55 — Topic 6: Copilot SDK — GA

### What to show
1. SDK GA announcement.
2. Conceptual architecture:
   - Internal app/service
   - Copilot SDK agentic engine
   - Enterprise systems (tickets, docs, observability, policy)
3. Language support highlight (Node.js, Python, Go, .NET, Rust, Java).

### Demo narration
- “The SDK shifts Copilot from product to programmable platform.”
- “You can embed agentic capabilities in your own developer portals, bots, and internal tools.”
- “The implementation question changes from ‘Should we use Copilot?’ to ‘Where should we embed Copilot in our SDLC?’”

### Key message
- SDK GA enables durable platform strategy, not one-off AI experiments.

---

## 0:55–1:00 — Wrap-up + Q&A

### Closing summary script
- “Execution is becoming autonomous (Copilot App + Agent Merge).”
- “Quality control is improving (Rubber Duck).”
- “Security and governance are keeping pace (Defender integration + sandboxes).”
- “The ecosystem and programmability story is now real (Agent Apps + SDK).”

### Suggested final question prompts
- “Where in your delivery pipeline do you have the highest orchestration overhead today?”
- “Which governance constraints are mandatory for your org before broad rollout?”
- “Would your first SDK use case be internal developer portal, incident response, or secure coding workflow?”

---

## Fallback plan (if live systems are slow)

If any live surface is delayed, switch to this pattern:

1. Show the related slide.
2. Open the official source link for that announcement.
3. Use one prepared screenshot to illustrate the workflow.
4. Continue with narrative; do not wait for live tooling.

This preserves pacing and keeps the session within 60 minutes.

---

## Source links (for presenter tab set)

- Copilot App: https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview/
- Rubber Duck Agent: https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/
- Defender + GCS: https://www.microsoft.com/en-us/security/blog/2026/06/02/microsoft-build-2026-securing-code-agents-and-models-across-the-development-lifecycle/
- Sandboxes: https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/
- Agent Apps: https://github.blog/changelog/2026-06-02-extend-github-with-agent-apps/
- Copilot SDK: https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/
