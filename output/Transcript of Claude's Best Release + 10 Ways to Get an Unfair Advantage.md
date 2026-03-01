# Claude's Best Release + 10 Ways to Get an Unfair Advantage

> **Source:** Transcript of Claude's Best Release + 10 Ways to Get an Unfair Advantage.md
> **Speaker/Channel:** AIABS (YouTube channel, team-based content)
> **Summary:** A team of daily Claude Code users shares 10 advanced workflows and techniques for getting better results, covering context management, hooks, parallelization, browser verification, and adversarial agent setups. The video focuses on practical, production-tested strategies rather than introductory usage.

## Tips & Tricks

### Use the `insights` Command to Audit Your Claude Code Sessions
- **What:** Claude Code has an `insights` command that analyzes all past sessions over a given time period and generates a report about your working style, highlighting what went right, what went wrong, and how to improve.
- **Why it matters:** Reviewing session history helps identify recurring friction points and inefficiencies you may not notice in the moment, turning past failures into actionable improvements.
- **How:** Run the `insights` command in Claude Code (e.g., `claude insights`) and specify a time period. Read the generated report for patterns and suggestions.
- **Tags:** `[Workflow]`, `[Advanced]`

### Copy Session Insights into CLAUDE.md to Prevent Recurring Mistakes
- **What:** When the insights report identifies a problematic behavior (e.g., an agent polling a task list indefinitely in a multi-agent setup), copy the suggested corrective prompt directly into `CLAUDE.md` so it applies to all future sessions.
- **Why it matters:** This creates a compounding improvement loop — each mistake you identify becomes a permanent guard rail for future workflows.
- **How:** After reviewing the insights report, extract the relevant corrective instruction and add it as a rule or note in your project's `CLAUDE.md` file.
- **Tags:** `[Config]`, `[Workflow]`, `[Prompt Technique]`

### Provide Structured Project Documentation as Context (PRD, Architecture, Decisions, Features)
- **What:** Before starting a project, generate four distinct documentation files using Claude: a PRD (project requirements and scope), an `architecture.md` (data formatting, file structure, APIs), a `decision.md` (decisions made during creation), and a `feature.json` (all features in a token-efficient JSON format with completion criteria and a `passes` tracking key).
- **Why it matters:** Giving Claude the right structured context dramatically reduces errors because the agent knows exactly what to act upon, including current state, requirements, and completion criteria.
- **How:** Prompt Claude with all project information and ask it to produce these four documents. Use a token-efficient JSON format for `feature.json` with fields for feature details, acceptance criteria, and implementation status.
- **Tags:** `[Workflow]`, `[Config]`, `[Prompt Technique]`, `[Advanced]`

### Use Context7 MCP for Up-to-Date Library and Framework Documentation
- **What:** The Context7 MCP provides documentation for libraries and frameworks and updates frequently, so agents can pull the latest docs rather than relying on potentially stale training data.
- **Why it matters:** It closes the gap between what the model knows and what the current version of a dependency actually does, preventing code errors caused by dependency mismatches.
- **How:** Install the Context7 MCP, connect it to Claude Code, and instruct Claude to fetch library documentation via Context7 before implementing features that use those libraries.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Use Hooks with Exit Codes to Control Agent Behavior
- **What:** Claude Code hooks are shell commands that fire at specific lifecycle points (session start, pre-tool use, post-tool use). Exit code `0` means success and execution continues; exit code `2` is a blocking error that stops the action and sends an error message back to Claude.
- **Why it matters:** Exit code `2` lets you enforce hard constraints on what the agent is allowed to do, effectively giving you programmatic guardrails over agent behavior.
- **How:** Configure hooks in Claude Code settings. Write shell scripts that return exit code `2` with an error message when a forbidden action is detected. Any other non-zero exit code is non-blocking and only shown in verbose mode.
- **Tags:** `[Config]`, `[Advanced]`, `[Workflow]`

### Use a Pre-Tool-Use Hook to Protect Test Files from Agent Modification
- **What:** Set up a `pre-tool-use` hook that checks if the file path Claude is trying to modify is a test directory or contains the word "test." If so, the hook returns exit code `2` with a message like "Modifications to test folders are not allowed."
- **Why it matters:** Claude Code agents tend to modify tests when they fail to meet them rather than fixing the implementation — this hook prevents that behavior entirely.
- **How:** Write a shell script that inspects the target file path. If the path includes a test directory or "test" in the name, `echo` an error message and `exit 2`. Register this as a `pre-tool-use` hook.
- **Tags:** `[Config]`, `[Workflow]`, `[Gotcha]`, `[Advanced]`

### Enable the Experimental MCP CLI Mode to Prevent Context Window Bloat
- **What:** Set the experimental `MCP_CLI` flag to `true` in Claude Code. This removes MCP tool schemas from the context window and instead routes all MCP calls through `mcpcli_info` and `mcpcli_calls` as bash commands, loading tools on demand.
- **Why it matters:** In large projects with many connected MCPs, all tool schemas accumulate in the context window and waste tokens. This flag eliminates that overhead entirely.
- **How:** Set the experimental `MCP_CLI` flag to `true` in your Claude Code configuration. Once set, Claude will call MCP tools via bash rather than loading them as in-context tools, and will only fetch a tool schema when it actually needs it.
- **Tags:** `[Config]`, `[Performance]`, `[Advanced]`

### Use Git Worktrees (Not Branches) for Parallel Agent Isolation
- **What:** When running multiple agents in parallel on different features, assign each agent its own Git worktree rather than a separate branch.
- **Why it matters:** Branches share the same working directory, which causes conflicts when multiple agents are active. Worktrees are fully isolated from each other, so agents can work simultaneously without interference, and their output can be merged cleanly afterward.
- **How:** Create a separate worktree for each feature (e.g., `git worktree add ../feature-a feature-a`). Prompt Claude with multiple features and specify that each agent should work on a separate worktree. Merge outputs after all agents complete.
- **Tags:** `[Workflow]`, `[Advanced]`

### Enable TypeScript Strict Mode to Shift Error Checking to the Compiler
- **What:** Set `"strict": true` in `tsconfig.json` for TypeScript projects. This enables null checks, implicit type checks, and strict typing enforcement.
- **Why it matters:** AI agents have no built-in way to catch runtime errors. Strict mode moves this burden to the compiler, catching bugs at build time rather than at runtime, and gives the agent reliable error logs in the terminal to fix against.
- **How:** In `tsconfig.json`, add or update `"strict": true`. Apply equivalent strict settings for other languages (e.g., `pylint`, `mypy` for Python).
- **Tags:** `[Config]`, `[Workflow]`, `[Gotcha]`

### Write User Stories Before Implementation and Use Them as Agent Test Criteria
- **What:** Before implementing a project, prompt Claude to write user stories describing all the ways a user can interact with the system. Each story includes a specific feature, its priority, and acceptance criteria. Store them in a dedicated folder.
- **Why it matters:** User stories set a standard the implementation must meet, covering best-case and edge-case scenarios. This reduces implementation gaps and allows any agent to verify its work against documented user expectations.
- **How:** Prompt Claude to generate user stories covering all interaction paths before coding begins. Once implementation is done, prompt Claude to implement the user stories one by one, starting with the optimal path and covering all edge cases.
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Advanced]`

### Use Parallel Adversarial Agents for Fact-Checking and Research Accuracy
- **What:** Set up two agents working in parallel: one to produce a research draft or implementation, and a second to critically fact-check or review the first agent's output. The fact-checker is blocked until the first agent produces its draft, then the two communicate iteratively.
- **Why it matters:** Agents hallucinate facts when doing research, and a single agent reviewing its own work is ineffective. An adversarial second agent dedicated to finding inaccuracies removes the need for manual fact-checking and catches errors the first agent misses.
- **How:** Create a task prompt that defines two agent roles: a "producer" and a "critic/fact-checker." Instruct the critic to begin only after the producer delivers a first draft, and have them communicate iteratively until the critic is satisfied. This pattern applies to research and to development (one agent implements, another reviews against the plan).
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Advanced]`

### Give Agents Browser Verification Capabilities
- **What:** Connect a browser tool to Claude Code so agents can verify their own front-end work at runtime. Three options exist: the Claude Chrome Extension (DOM capturing, console logs), the Puppeteer MCP (isolated browser, separate from your current sessions), or Vercel's Agent Browser CLI (preferred — uses the accessibility tree instead of full DOM screenshots).
- **Why it matters:** Terminal-based agents cannot see client-side runtime issues. Browser tools give agents "eyes" to verify that what was implemented actually works as expected in the browser.
- **How:** Install your preferred tool. For Vercel's Agent Browser: it is a CLI tool (not an MCP) that represents the DOM as an accessibility tree, compressing it from thousands of tokens to ~200–400 tokens per page, making it far more context-efficient than the Chrome Extension.
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`, `[Front-End]`

### Configure CLAUDE.md to Prioritize the Agent Browser Over MCP-Based Testing
- **What:** Add an instruction in `CLAUDE.md` telling Claude to use Vercel's Agent Browser as the primary verification method and only fall back to MCP-based browser tools if the Agent Browser is unavailable.
- **Why it matters:** The Claude Chrome Extension loads the full DOM into the context window and exhausts it quickly. By setting a priority order in `CLAUDE.md`, you ensure the more context-efficient tool is always tried first.
- **How:** Add a line to `CLAUDE.md` such as: "For browser verification, always use agent browser first. Fall back to MCP-based tools (e.g., Puppeteer) only if agent browser is not available."
- **Tags:** `[Config]`, `[Prompt Technique]`, `[Performance]`, `[Front-End]`

### Ask Claude to Predict Future Failures (Proactive Risk Analysis)
- **What:** After implementation, prompt Claude to review the code and identify areas where the app could fail — before any failure actually occurs. Ask it to look at the implementation from a different angle and flag potential production issues.
- **Why it matters:** This exploits Claude's ability to pattern-match against known failure modes from other codebases, surfacing issues that normal testing processes may miss. In the video, this approach found 18 production-critical issues that passed multi-layer testing.
- **How:** After building and testing, prompt Claude: "Review this implementation and identify all areas where the app could fail in production that our tests might not catch." Treat the output as an additional review layer on top of automated tests and code review.
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Advanced]`

## Raw Notes

- The team uses Claude Code not just for development but also for research, managing production pipelines, and non-coding automation tasks — a reminder that Claude Code's scope is broader than pure software development.
- The video references a previous video about using Git and parallel agents on long-horizon tasks with worktrees, suggesting this is an established workflow on their channel.
- The `feature.json` format with a `passes` key for tracking implementation status is an interesting lightweight alternative to full task management tooling and is described as "token efficient."
- The team mentions that parallelization increases token usage but considers it worth the speed improvement — a cost vs. speed tradeoff to be aware of.
- The video references "AIABS Pro," a paid community offering ready-to-use templates, prompts, and commands for the workflows described. This is a monetization plug, not a Claude Code feature.
- The claim about finding "18 production-critical issues" via the proactive risk analysis prompt is a compelling but anecdotal data point — useful for motivating the technique but not independently verifiable.
- The team notes that Claude Code's creator has said the agent works better when it has some way to verify its own work — framing the browser verification and adversarial agent patterns as philosophically aligned with Anthropic's own guidance.
- The Puppeteer MCP is noted as useful specifically because it runs in an isolated browser that does not contain existing user sessions, providing a privacy advantage over the Claude Chrome Extension.
