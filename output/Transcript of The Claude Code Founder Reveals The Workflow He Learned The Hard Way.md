# The Claude Code Founder Reveals The Workflow He Learned The Hard Way

> **Source:** Transcript of The Claude Code Founder Reveals The Workflow He Learned The Hard Way.md
> **Speaker/Channel:** Boris (Anthropic, creator of Claude Code), presented via Automator channel
> **Summary:** Boris, the creator of Claude Code at Anthropic, shares the workflow he has refined through real-world use, covering verification loops, CLAUDE.md maintenance, permission management, parallel sessions, model selection, and automation patterns. The video emphasizes that even a "vanilla" setup built around these principles delivers most of the productivity gains people seek.

## Tips & Tricks

### Always give Claude a way to verify its work
- **What:** When assigning any task to Claude Code, explicitly include a verification step — such as running tests — so Claude has a feedback loop to assess the quality of its own output.
- **Why it matters:** Without a feedback loop, Claude cannot self-correct minor errors. Providing one dramatically increases the quality of the final result and reduces the need for human steering.
- **How:** Tell Claude to write and run tests alongside any code it produces. You can ask Claude which tests are appropriate and it will generate a test for every feature it implements.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Embed verification instructions in CLAUDE.md for autonomous runs
- **What:** Add a standing instruction in your `CLAUDE.md` file that tells Claude to describe how it will verify its work before starting any task.
- **Why it matters:** This ensures the verification feedback loop is active in every session automatically, without needing to re-prompt it each time, which is critical for autonomous or background runs.
- **How:** Open `.claude/CLAUDE.md` and add a rule such as: "Before beginning any task, state how you will verify the result." Claude will follow this in every session.
- **Tags:** `[Config]`, `[Workflow]`

### Use domain-appropriate verification methods
- **What:** Verification is not one-size-fits-all. Choose the verification method that matches the domain: bash commands for scripts, browser extension navigation for web UIs, iOS/Android simulator MCPs for mobile apps.
- **Why it matters:** Using the right verification method gives Claude accurate signal about correctness and avoids false positives or missed errors.
- **How:** For web UI verification, use Claude's browser extension to have it navigate and inspect the site. For mobile, use iOS/Android simulator MCP servers. For scripts, run bash commands.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use test-driven development (TDD) to reduce token usage from verification
- **What:** If simulator or browser MCPs feel too token-hungry, adopt TDD: write tests for a new feature first, then implement the feature to pass those tests.
- **Why it matters:** TDD provides structured, low-token verification without requiring expensive browser or simulator MCP calls, while still giving Claude a feedback loop.
- **How:** Prompt Claude to first write failing tests for the desired behavior, then implement the code, then run the tests to confirm they pass. Screenshots can additionally verify UI output.
- **Tags:** `[Workflow]`, `[Performance]`, `[Prompt Technique]`

### Keep CLAUDE.md unique and project-specific
- **What:** Every Claude Code repo should have its own `CLAUDE.md` tailored to that project, covering the tech stack, project structure, code style conventions, and — crucially — things Claude should NOT do.
- **Why it matters:** A generic or empty `CLAUDE.md` means Claude lacks the context a new team member would need. Documenting anti-patterns prevents Claude from repeating known mistakes across sessions.
- **How:** Include sections for: tech stack, project directory layout, code style/conventions, and a list of prohibited actions or known pitfalls discovered in previous sessions.
- **Tags:** `[Config]`, `[Workflow]`

### Treat CLAUDE.md as a living team document
- **What:** Boris asks his entire team to contribute to `CLAUDE.md` multiple times per week. Each team member has responsibility for maintaining a specific section of the file.
- **Why it matters:** As the team encounters new edge cases or mistakes from Claude, documenting them immediately prevents recurrence across all sessions and team members.
- **How:** Assign ownership of `CLAUDE.md` sections to team members. Establish a norm that any incorrect behavior Claude exhibits gets added to the file the same day it is discovered.
- **Tags:** `[Config]`, `[Workflow]`

### Use separate CLAUDE.md files per microservice or app layer
- **What:** For full-stack apps, give each microservice, the frontend, and the backend their own `CLAUDE.md` file rather than one monolithic file.
- **Why it matters:** Each layer has different conventions, tools, and constraints. Separate files keep context focused and prevent irrelevant instructions from cluttering a given session.
- **How:** Place a `CLAUDE.md` in the root of each service directory. Claude will pick up the file closest to its working context.
- **Tags:** `[Config]`, `[Advanced]`

### Keep CLAUDE.md concise — target around 2.5k tokens
- **What:** Do not over-bloat `CLAUDE.md`. Boris's own file is approximately 2,500 tokens. Every token in that file is loaded into every session context.
- **Why it matters:** A bloated `CLAUDE.md` wastes context window space that could be used for actual task content, and may dilute the importance of key instructions.
- **How:** Periodically audit `CLAUDE.md` and remove outdated or redundant instructions. Keep entries specific and actionable rather than verbose.
- **Tags:** `[Config]`, `[Performance]`

### Do not use dangerously-skip-permissions mode in production
- **What:** Avoid the `--dangerously-skip-permissions` flag, especially in production environments. Use the permissions configuration instead to explicitly allow, require-confirmation, or deny specific commands.
- **Why it matters:** A single unrestricted terminal command in a production environment can cause catastrophic damage. Granular permission rules provide a safety net.
- **How:** In `.claude/settings.json`, define which commands are auto-allowed, which require user confirmation before running, and which are completely denied. Commit this file to share rules with the team.
- **Tags:** `[Config]`, `[Gotcha]`

### Share permission rules with the team via settings.json in the .claude folder
- **What:** The `.claude/settings.json` file contains project-level permission rules and can be committed to version control so the entire team shares the same safety configuration.
- **Why it matters:** Ensures consistent permission guardrails across all developers on the project, preventing someone from inadvertently running a dangerous command.
- **How:** Configure permissions in `.claude/settings.json` and commit that file to git alongside `CLAUDE.md` and slash command files.
- **Tags:** `[Config]`, `[Workflow]`

### Start every feature or task in plan mode before switching to execution
- **What:** Before starting any implementation, switch Claude Code to plan mode, describe the desired feature or task, and review the plan Claude produces before allowing it to execute.
- **Why it matters:** All the back-and-forth alignment with the agent should happen during planning, not during execution. A verified plan dramatically reduces mid-task course corrections.
- **How:** Activate plan mode in Claude Code, describe the task in detail, iterate on the plan until it is valid, then kick off execution in auto-accept edits mode (not dangerously-skip-permissions).
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Run five parallel Claude Code sessions and number your terminal tabs
- **What:** Boris runs up to five Claude Code sessions simultaneously across numbered terminal tabs to parallelize work across different tasks or services.
- **Why it matters:** Parallel sessions multiply throughput. Numbering tabs makes it easy to identify which session triggered a notification without losing track.
- **How:** Open multiple terminal tabs, label them 1–5, and run a separate Claude Code session in each. When a notification fires, the tab number tells you immediately which session needs attention.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use cloud/web sessions with background agents for long-running tasks
- **What:** Connect Claude Code's web version to GitHub, then use the background agents feature to offload long-running tasks to cloud sessions that operate without occupying a local terminal.
- **Why it matters:** Long-running tasks block local sessions. Cloud sessions free you to do other work; when the task finishes, Claude automatically creates a branch and pushes the changes for review.
- **How:** Connect Claude Code web to a GitHub repo via the web UI, assign the task, and enable the background agent feature. Review the resulting branch and PR when notified.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use the teleport command to bring cloud sessions back to local
- **What:** The `teleport` command transfers a cloud Claude Code session back into your local terminal so you can inspect, continue, or modify the work done remotely.
- **Why it matters:** Provides a bridge between asynchronous cloud work and local interactive work, allowing seamless handoff without losing session state.
- **How:** Run the teleport command from your local Claude Code terminal when you want to pull a cloud session's context locally.
- **Tags:** `[Workflow]`, `[Shortcut]`, `[Advanced]`

### Prefer Opus 4.5 with thinking enabled despite the slower speed
- **What:** Boris uses Claude Opus 4.5 with thinking enabled for all tasks rather than faster models like Sonnet or Haiku.
- **Why it matters:** The lower error rate of Opus 4.5 means less time spent steering, correcting, or re-running tasks. Total time-to-completion is lower even though individual responses are slower.
- **How:** Set the model to `claude-opus-4-5` in Claude Code settings or via the CLI flag. Enable extended thinking if the interface supports it.
- **Tags:** `[Performance]`, `[Workflow]`

### Use the Claude Code GitHub Action for PR-based corrections
- **What:** Use the Claude Code GitHub Action bot inside authorized GitHub repos. During PR reviews, when you find mistakes, ask Claude to add those mistakes to `CLAUDE.md` directly from the PR.
- **Why it matters:** Closes the loop between code review feedback and future Claude behavior, ensuring the same mistake is not repeated in subsequent sessions.
- **How:** Install the Claude Code GitHub Action in the repo. During a PR review, comment with a request for Claude to document the identified issue in `CLAUDE.md`.
- **Tags:** `[Workflow]`, `[Config]`, `[Advanced]`

### Use background tasks with self-generated tests for long autonomous runs
- **What:** For long-running autonomous tasks, ask Claude to generate its own verification tests and run those tasks as background processes that report back to the main agent when done.
- **Why it matters:** Removes the human from the loop for long tasks while maintaining quality through automated verification, freeing you to focus elsewhere.
- **How:** Prompt Claude to write tests for the task at hand, then instruct it to run the task in the background and use those tests as the completion signal.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use a stop hook to trigger verification automatically when Claude stops
- **What:** Configure a stop hook that automatically runs verification (tests, linters, etc.) whenever Claude finishes generating output.
- **Why it matters:** Ensures verification never gets skipped, even when Claude completes a task and you are not actively watching the session.
- **How:** Add a stop hook in Claude Code's hook configuration that executes your test or lint command whenever the agent reaches a stopping point.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Use the Roo plugin (Ralph Wigum) to remove the human from the verification loop entirely
- **What:** The Roo (Ralph Wigum) plugin automates UI verification during development, removing the need for a human to visually check what Claude Code produces.
- **Why it matters:** Fully closes the verification loop for UI work, enabling truly autonomous front-end development sessions without manual spot-checks.
- **How:** Install the Roo plugin and configure it to run UI checks as part of the Claude Code workflow. It will capture and validate UI output automatically.
- **Tags:** `[Front-End]`, `[Workflow]`, `[Advanced]`

### Use linters and formatters as a verification layer for code style
- **What:** Run linters and formatters on Claude-generated code as a final verification pass. Boris notes models produce correct code but these tools clean up the remaining ~10%.
- **Why it matters:** Prevents CI pipeline failures caused by style or formatting issues, and ensures code meets team standards consistently.
- **How:** Configure your project's linter and formatter (e.g., ESLint, Prettier, Black, Ruff) and instruct Claude to run them after generating code, or include them in a stop hook.
- **Tags:** `[Workflow]`, `[Config]`

### Use slash commands to codify and share repetitive inner-loop workflows
- **What:** Store repetitive workflows as slash commands in `.claude/commands/`. These commands can be committed to git and shared with the whole team.
- **Why it matters:** Eliminates re-typing common prompts for daily repetitive tasks and standardizes team workflows so everyone uses the same patterns.
- **How:** Create files in `.claude/commands/` — e.g., a `github.md` command for frequent GitHub-related tasks. Run them with `/commandname` inside Claude Code. Commit the folder to version control.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Use sub-agents for tasks that require entirely different instruction sets
- **What:** Use Claude Code's sub-agent feature to spin up agents with completely different system instructions for tasks like architecture review, code refactoring, or build validation — rather than piling everything into one session.
- **Why it matters:** Different tasks (e.g., writing vs. reviewing code) need different contexts and constraints. Sub-agents keep concerns separated and instructions focused.
- **How:** Define sub-agent prompts for specific roles (architecture validator, refactoring agent, build checker) and invoke them as needed from the main session.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use Claude Code as a general-purpose orchestrator, not just a coding tool
- **What:** Claude Code can orchestrate non-coding tools and services via MCP servers and CLIs — Boris uses it with Slack, BigQuery, Sentry, and Notion alongside code tasks.
- **Why it matters:** Treating Claude Code only as a coding assistant undersells its capability. It can drive entire business workflows, data pipelines, and multi-tool automations.
- **How:** Connect MCP servers for the tools you use (Slack MCP, BigQuery CLI, Sentry CLI, Notion MCP, etc.) and issue natural-language instructions to Claude Code to drive those tools.
- **Tags:** `[Workflow]`, `[Advanced]`

## Raw Notes

- Boris describes his own setup as "surprisingly vanilla," emphasizing that complex orchestration is not required to be highly productive. He estimates that built-in features alone deliver approximately 90% of the productivity gains most users are seeking.
- The video is produced by the Automator channel, which also offers a dev services offering (hello@automator.dev) for teams wanting to apply these AI-assisted workflows to their own projects.
- Boris's use of Claude Code on his phone (via cloud sessions) illustrates a mobile-first async workflow that is still emerging but already viable.
- The comment that Claude Code is "one of the most badly named products from Anthropic" because it is used far beyond coding is a recurring sentiment in the community and signals a potential rebranding or repositioning discussion.
- Boris frames Claude Code agents explicitly as "junior developers," a framing that aligns expectations: capable but needing verification, feedback, and clear instructions rather than blind trust.
- The video references a separate in-depth video on the Claude browser extension and another on the Roo (Ralph Wigum) plugin — both worth reviewing for front-end verification workflows.
- Parallel session management (numbering tabs, background agents, teleport) suggests that power users are essentially running a small async team of agents rather than a single interactive session.
- The emphasis on Opus 4.5 over Sonnet/Haiku for total-time-efficiency is a counter-intuitive but data-backed observation worth testing on individual projects before assuming faster = more productive.
