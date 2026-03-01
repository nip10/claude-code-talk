# Superpowers Plugin Review: Claude Code's Best Plan Mode Extension

> **Source:** Transcript of Superpowers Plugin Review: Claude Code's Best Plan Mode Extension.md
> **Speaker/Channel:** Unknown (independent creator covering Claude Code, AI development tools, and workflows)
> **Summary:** A hands-on review of the Superpowers open-source Claude Code plugin, demonstrated by building a year-long procrastinated automated content pipeline for a React libraries website. The video covers the Brainstorm-Plan-Execute methodology, practical workflow benefits, and honest shortcomings including token cost, sequential execution, and mandatory TDD.

## Tips & Tricks

### Install Superpowers via the Discover Tab to Avoid Name Collision Issues
- **What:** Install the Superpowers plugin through the "Discover" tab in the Claude Code plugin menu rather than the marketplace to avoid flaky installation caused by marketplace name collisions.
- **Why it matters:** Some users report failed installations when using the marketplace method due to an upstream Claude Code issue with name collisions. The Discover tab route is more reliable.
- **How:** Open the plugin menu in Claude Code, navigate to the "Discover" tab, search for "Superpowers", install, then restart Claude Code. Verify by running `/help` and checking the "custom-commands" tab for `/superpowers:brainstorm`, `/superpowers:write-plan`, and `/superpowers:execute-plan`.
- **Tags:** `[Config]`, `[Gotcha]`

### Verify Superpowers Installation via the Custom Commands Tab
- **What:** After installing Superpowers, confirm the plugin loaded correctly by running `/help` and navigating to the "custom-commands" tab.
- **Why it matters:** If the plugin silently failed to install, you won't know until you try to use a command and get an error. Proactive verification saves debugging time.
- **How:** Run `/help` in Claude Code, go to the "custom-commands" tab, and confirm the presence of `/superpowers:brainstorm`, `/superpowers:write-plan`, and `/superpowers:execute-plan`.
- **Tags:** `[Config]`, `[Workflow]`

### Use /superpowers:brainstorm for Socratic Design Questioning Before Any Code
- **What:** Run `/superpowers:brainstorm` and describe your feature. Claude enters a Socratic questioning mode, asking detailed probing questions about architecture and requirements before any code is written.
- **Why it matters:** The brainstorming phase asks better and more thorough questions than Claude Code's built-in Plan Mode, helping you arrive at a better architecture. It also has a hard gate — it won't proceed to implementation until the design is considered complete.
- **How:** Run `/superpowers:brainstorm` and describe what you want to build. Answer the clarifying questions Claude asks. Once design is approved, the plugin automatically proceeds to planning.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Superpowers Automatically Creates a Git Worktree After Brainstorming Approval
- **What:** Once you approve the design from the brainstorming phase, Superpowers automatically creates a git worktree — an isolated workspace on a new branch.
- **Why it matters:** Your main branch stays clean throughout the entire development process. Work is fully isolated until you consciously decide to merge, create a PR, or discard.
- **How:** Simply approve the brainstorming design. Superpowers handles the worktree creation automatically. When tasks complete, you are given options to merge, create a PR, keep working, or discard — and if you merge or discard, the worktree is cleaned up automatically.
- **Tags:** `[Workflow]`, `[Config]`

### Use /superpowers:write-plan to Break Design Into Focused Sub-Agent Tasks
- **What:** After brainstorming, run `/superpowers:write-plan` to break the approved design into small, focused tasks — each around five steps — sized to fit within a single agent's context without overflow.
- **Why it matters:** Properly scoped tasks prevent context overflow in sub-agents and keep each unit of work reviewable. The tasks populate Claude Code's native Task List.
- **How:** Run `/superpowers:write-plan` after completing the brainstorm phase. The plan is generated and written into the Task List automatically.
- **Tags:** `[Workflow]`, `[Performance]`

### Monitor Context Usage After Brainstorming Before Choosing Execution Mode
- **What:** After the brainstorming and planning phase, check how much context has been consumed before deciding between same-session execution versus a parallel session on the separate branch.
- **Why it matters:** The brainstorming phase alone can consume a significant portion of context (43% in the reviewer's case). If too little remains, a fresh parallel session is safer to avoid context-related failures mid-execution.
- **How:** Note the context percentage displayed in Claude Code after `/superpowers:write-plan` completes. Superpowers presents both options. Choose same-session if over half the context remains; otherwise opt for the parallel session.
- **Tags:** `[Workflow]`, `[Performance]`

### Use /superpowers:execute-plan to Dispatch Fresh Sub-Agents Per Task
- **What:** Run `/superpowers:execute-plan` to start execution. Superpowers dispatches a fresh sub-agent per task, loading only the context relevant to that specific task.
- **Why it matters:** Fresh sub-agents per task prevent context bloat and keep each execution unit focused. Each task also receives a two-stage review: spec compliance, then code quality.
- **How:** Run `/superpowers:execute-plan` after the plan is ready. Tasks run sequentially with sub-agents automatically dispatched per task.
- **Tags:** `[Workflow]`, `[Advanced]`

### Have Sub-Agents Return File Paths, Not Full Content, to the Parent Agent
- **What:** When building pipelines or orchestrators with sub-agents, configure each sub-agent to return only file paths to their saved artifacts rather than the full content.
- **Why it matters:** If sub-agents return full content (e.g., entire newsletter HTML bodies, full article text) back to the parent orchestrator, context grows rapidly and the pipeline will hit token limits mid-run.
- **How:** In each sub-agent's instructions or skill definition, explicitly instruct it to save output to a file and return only the file path. The reviewer had to fix every agent manually after the initial pipeline run.
- **Tags:** `[Workflow]`, `[Performance]`, `[Gotcha]`, `[Advanced]`

### Structure Orchestrators to Delegate to Sub-Agents, Not Execute Inline
- **What:** When building a master orchestrator script or skill, ensure it delegates work to sub-agents rather than executing everything inline.
- **Why it matters:** An orchestrator doing everything inline causes context to grow uncontrolled. Delegating to fresh sub-agents keeps the orchestrator's context lean and allows the pipeline to run to completion.
- **How:** After initial execution, review whether your orchestrator is spawning sub-agents or doing work itself. If inline, refactor to spin up a fresh sub-agent per skill/step. The reviewer had to restructure the orchestrator after the first pipeline run revealed this pattern.
- **Tags:** `[Workflow]`, `[Performance]`, `[Gotcha]`, `[Advanced]`

### Manually Configure Model Tiers for Sub-Agent Steps to Control Token Cost
- **What:** Explicitly set the model for each sub-agent task based on the reasoning complexity required, rather than letting all steps run on the same expensive model.
- **Why it matters:** By default, when Claude Code creates a sub-agent, it uses the same model as the parent session. Routine tasks like fetching HTML or extracting library names don't need Opus — using Haiku or Sonnet for those steps significantly reduces cost.
- **How:** Set the `model` field in the agent's frontmatter for each task or skill. Suggested tiers: HTML fetching and simple extraction → Haiku; research → Sonnet; article writing or complex reasoning → Opus. Note: neither Superpowers nor Claude Code will optimize this automatically.
- **Tags:** `[Config]`, `[Performance]`, `[Advanced]`

### Add Model Tiering Instructions to CLAUDE.md as a Potential Workaround
- **What:** You may be able to encode model tiering guidance in your project's `CLAUDE.md` file so that sub-agents created during execution pick up the right model configuration automatically.
- **Why it matters:** Superpowers does not natively handle model optimization across tasks. A CLAUDE.md instruction is a lightweight workaround to influence sub-agent behavior without modifying the plugin itself.
- **How:** Add instructions in `CLAUDE.md` specifying which types of tasks should use which model tiers. The reviewer notes this as a hypothesis, not a confirmed approach.
- **Tags:** `[Config]`, `[Performance]`, `[Uncertain]`

### Use Superpowers for Medium-to-Large Tasks; Plan Mode for Small-to-Medium Tasks
- **What:** Choose the right tool for task size: Plan Mode for quick features, bug fixes, and refactors; Superpowers for multi-file features, new subsystems, or anything where structured planning genuinely matters.
- **Why it matters:** The Brainstorm-Plan-Execute overhead is overkill for quick fixes. Using Superpowers on small tasks wastes context and time. Using Plan Mode on large, complex features results in under-planned, fragile implementations.
- **How:** Evaluate the task scope before starting. For small or medium fixes that emerge mid-Superpowers session, drop to regular Plan Mode or direct prompting, fix the issue, and return to the Superpowers workflow. The two workflows coexist.
- **Tags:** `[Workflow]`

### You Do Not Need to Memorize Superpowers Documentation
- **What:** Just run `/superpowers:brainstorm` and the plugin guides you through the entire process interactively — no need to study any documentation in advance.
- **Why it matters:** Reduces adoption friction. You can start using the tool immediately without a learning curve.
- **How:** Run `/superpowers:brainstorm` and follow the prompts.
- **Tags:** `[Workflow]`

### Expect Iterative Debugging Loops Even With a Structured Framework
- **What:** No spec-driven framework, including Superpowers, will one-shot a complex system. Plan for multiple pipeline reruns with incremental fixes after the initial execution.
- **Why it matters:** Setting realistic expectations prevents frustration. The value of a structured framework is reducing total iteration time and improving architecture quality, not eliminating debugging entirely.
- **How:** After execution, run the actual system and observe failures. Fix incrementally. The reviewer required multiple reruns to fix URL patterns, database permissions, image sequencing, and artifact-wiping behavior.
- **Tags:** `[Workflow]`, `[Gotcha]`

### Be Aware That TDD Is Mandatory and Cannot Be Disabled
- **What:** Superpowers enforces a RED-GREEN-REFACTOR TDD cycle for every task. If Claude writes code before tests, the skill makes it start over. There is no easy way to disable this.
- **Why it matters:** If your project does not use TDD or you are working in a context where tests are impractical (e.g., UI-heavy projects, data pipelines), the mandatory cycle creates friction and slows execution.
- **How:** Accept TDD as a constraint when using Superpowers, or use Plan Mode / direct prompting for tasks where the TDD overhead is not appropriate.
- **Tags:** `[Config]`, `[Gotcha]`, `[Workflow]`

### Tasks Execute Sequentially, Not in Parallel — Plan Accordingly
- **What:** Superpowers executes tasks sequentially even when tasks are logically independent and could run in parallel.
- **Why it matters:** For pipelines with many independent tasks (e.g., five parallel research agents), sequential execution significantly increases total wall-clock time. This is a known limitation of the current implementation.
- **How:** Be aware of this constraint when estimating execution time for large task lists. If parallel execution is critical, you may need to manually orchestrate parallel runs outside of Superpowers.
- **Tags:** `[Performance]`, `[Gotcha]`, `[Advanced]`

### Watch for Overly Creative Skill Interpretation in Verification Steps
- **What:** Skills with broad mandates like "verification before completion" may interpret their job too liberally and take destructive actions, such as running cleanup routines that wipe generated artifacts.
- **Why it matters:** A verification step that deletes all pipeline outputs forces you to rerun expensive steps and wastes significant time and tokens.
- **How:** Review verification and cleanup skill definitions carefully. Add explicit constraints specifying what the skill is and is not allowed to delete or modify. The reviewer's verification skill wiped all artifacts, requiring a rerun of the final steps.
- **Tags:** `[Gotcha]`, `[Advanced]`

### Use AI Parsing Instead of Regex for Unstructured HTML Extraction
- **What:** When building pipelines that process newsletter HTML or other unstructured content, use an AI model (e.g., Claude via Haiku) for extraction rather than regex.
- **Why it matters:** Regex-based HTML parsing breaks on format variations and requires constant maintenance. AI extraction is more robust and requires no pattern engineering.
- **How:** In your pipeline's extraction skill, call a lightweight model (Haiku is sufficient) with the raw HTML and ask it to extract the desired structured data. This approach was surfaced during Superpowers brainstorming and led directly to a working architecture versus the prior failed attempt using regex.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

## Raw Notes

- The reviewer built a prior failed attempt at the same pipeline using Task Master AI with older models. The failure modes were instructive: Task Master guided toward parsing newsletters with regex and trying to subscribe to email newsletters instead of fetching web URLs. Superpowers' brainstorming phase surfaced better approaches.
- Superpowers is also compatible with Codex and Open Code according to the README, not just Claude Code.
- The plugin has 58,000+ GitHub stars and was officially accepted into the Anthropic Plugin Marketplace on January 15th, 2026. It is MIT licensed and free.
- Superpowers was created by Jesse Vincent.
- The reviewer's site, ReactLibs.dev, is an Astro website hosting AI-generated React library tutorials. The project was used as the real-world test bed for the pipeline.
- The reviewer draws a philosophical distinction: "Most of those tools were running on older, less capable models with older tooling. Superpowers is built directly on Claude Code's native features. It doesn't fight the platform, it extends it." This explains why it feels more natural than earlier spec-driven frameworks (BMAD, Spec Kit, Open Spec, Agent OS, Task Master).
- The reviewer notes that Skills and the Task List are newer Claude Code features, and their combination is what makes Superpowers' approach newly viable.
- The overall verdict: "It's the best 'Plan Mode Extender' available right now." Being in Anthropic's official marketplace is cited as a signal of staying power.
- The reviewer's biggest feature request is model tiering — automatically routing cheap tasks to Haiku and expensive reasoning tasks to Opus.
- The reviewer completed a year-old backlog item in approximately three hours using Superpowers, which they consider the primary success metric.
- Total pipeline results: 62 libraries found across newsletters, top five selected, five research agents run in parallel, articles and images generated and staged for review.
- The ending joke ("even the most powerful AI plugin can replace the strategic planning abilities of a cat") is non-informational filler.
