# How I use Claude Code (Meta Staff Engineer Tips)

> **Source:** Transcript of How I use Claude Code (Meta Staff Engineer Tips).md
> **Speaker/Channel:** Unknown (identified as a Meta Staff Engineer)
> **Summary:** A Meta Staff Engineer shares 50 Claude Code tips accumulated over 6 months of daily use, covering initial setup, keyboard shortcuts, slash commands, CLAUDE.md configuration, advanced workflows, parallel development, and composable primitives like skills, MCPs, sub-agents, and hooks.

## Tips & Tricks

### Run Claude Code from the Project Root Directory
- **What:** Always launch Claude Code from the root directory of the project you are working on.
- **Why it matters:** Claude Code zips up the context from the initial root directory into the first token. This is why tokens are consumed even before you type anything — Claude is reading and preparing your project. Running from the wrong directory means Claude lacks important project context.
- **How:** `cd your-project-root && claude`
- **Tags:** `[Config]`, `[Workflow]`

### Run `/init` to Generate an Initial CLAUDE.md
- **What:** Run the `/init` slash command in a new project to have Claude analyze the codebase and automatically generate a `CLAUDE.md` file.
- **Why it matters:** Saves time on manual setup and gives Claude an accurate starting understanding of the project architecture, tech stack, and conventions.
- **How:** Open Claude Code in the project root and type `/init`. Claude will scan the codebase, identify the stack and architecture, and create a `CLAUDE.md` in the `.claude/` directory. Review and accept the result.
- **Tags:** `[Config]`, `[Workflow]`

### Understand the CLAUDE.md Hierarchy
- **What:** CLAUDE.md files operate on a hierarchy: a project-level file (in the repo's `.claude/` directory) and a global user-level file (`~/.claude/claude/`).
- **Why it matters:** Understanding which rules file is active prevents confusion when Claude behaves unexpectedly. You can inspect which memory files are loaded via the `/memory` view.
- **How:** Run `/memory` in Claude Code to see the checked-in memory (project-level) versus the user memory (global level).
- **Tags:** `[Config]`

### Keep CLAUDE.md Concise — Around 300 Lines or Fewer
- **What:** Keep your CLAUDE.md rule file small and focused; around 300 lines is a good target.
- **Why it matters:** Every line in CLAUDE.md is loaded into the context window at the start of each session. Bloated rule files increase token costs and dilute the AI's ability to follow the most important instructions — more noise leads to worse compliance.
- **How:** Regularly audit your CLAUDE.md and remove outdated or redundant rules. Prioritize instructions that are most specific to your project.
- **Tags:** `[Config]`, `[Performance]`

### Structure CLAUDE.md Top-to-Bottom by Priority
- **What:** Place the most important rules and instructions at the top of your CLAUDE.md file.
- **Why it matters:** Claude reads the file top-to-bottom and gives higher priority to instructions that appear earlier. Burying critical rules at the bottom may cause them to be underweighted.
- **How:** Order your CLAUDE.md sections as: most critical constraints first (e.g., "never do X"), then architecture and domain context, then build/validation commands, then lower-priority style preferences.
- **Tags:** `[Config]`, `[Prompt Technique]`

### Include High-Level Architecture and Domain Context in CLAUDE.md
- **What:** Add sections covering the project's technical architecture, domain-specific context, key file paths, design patterns, and any homegrown DSLs or conventions the AI would not know from training data.
- **Why it matters:** LLMs are trained on public code and may not know your company's proprietary patterns, custom DSLs, or internal conventions. Documenting these prevents Claude from defaulting to generic patterns that violate your project's standards.
- **How:** Add a section like: project description, tech stack, key directories/file paths, architecture overview, and any special patterns. Include code snippets as examples where applicable.
- **Tags:** `[Config]`

### Include a Build and Validation Loop in CLAUDE.md
- **What:** Document the build and test commands in your CLAUDE.md so Claude can run them automatically to self-validate its changes.
- **Why it matters:** A validation loop lets Claude iteratively run the build, see failures, and fix them without manual intervention. This dramatically improves first-attempt code quality and reduces back-and-forth.
- **How:** Add a section like `## Build & Validation` with the exact commands: e.g., `xcodebuild -scheme MyApp` for iOS or `npm run build && npm test` for web. Claude will use these to verify correctness after each change.
- **Tags:** `[Config]`, `[Workflow]`, `[Performance]`

### Validation Loops Are the Single Most Important Agentic Workflow Concept
- **What:** Designing a proper validation loop (a way for the AI to run its output and get feedback) is the most critical factor in getting Claude Code to produce correct results autonomously.
- **Why it matters:** Without a validation signal, the agent cannot self-correct. With one, it can iterate until the code compiles, tests pass, or the UI looks right — dramatically reducing human intervention.
- **How:** Think about what "done" looks like for each task type and encode the check: compile check for compiled languages, test runner for logic, screenshot/browser automation for UI, log tailing for runtime behavior.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use Shift+Tab to Toggle Between Plan Mode and Accept-Edits Mode
- **What:** Press Shift+Tab to cycle through Claude Code's interaction modes: Plan Mode (no edits made) and Accept Edits Mode (Claude can write code directly).
- **Why it matters:** Plan Mode lets you safely explore Claude's intended approach before any files are changed, preventing premature or incorrect edits.
- **How:** Press `Shift+Tab` to toggle. Start new features in Plan Mode, review Claude's plan and push back if needed, then switch to Accept Edits when you're confident in the direction.
- **Tags:** `[Shortcut]`, `[Workflow]`

### Always Start New Features in Plan Mode
- **What:** Begin every new feature or non-trivial task in Plan Mode rather than immediately letting Claude make edits.
- **Why it matters:** Investing time upfront to verify Claude's assumptions and direction prevents wasted execution cycles. Once Claude has a well-reasoned plan and good context, code generation is fast and accurate.
- **How:** Toggle to Plan Mode with Shift+Tab, describe the feature, and engage in a back-and-forth conversation — challenge assumptions, ask for alternatives — before switching to Accept Edits to execute.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Press Escape to Interrupt Claude Mid-Execution
- **What:** Press Escape at any time to interrupt Claude Code while it is thinking or executing.
- **Why it matters:** If Claude is going off track (making wrong assumptions, heading in a bad direction), interrupting early saves time and prevents a bloated, misleading context from accumulating.
- **How:** Watch Claude's thinking/output. If you see it making assumptions or errors, press Escape. Then either press the Up arrow to re-enter a modified prompt, or type a corrective instruction.
- **Tags:** `[Shortcut]`, `[Workflow]`

### Don't Fear Interrupting or Course Correcting Claude
- **What:** It is safe and recommended to interrupt Claude, change direction, or send multiple prompts even while Claude is executing.
- **Why it matters:** Claude Code is designed to handle prompt queuing gracefully and logically de-duplicate instructions. Interrupting and correcting is a normal, encouraged part of the workflow — not a disruptive action.
- **How:** Press Escape, adjust your prompt, and continue. Claude will factor in the correction.
- **Tags:** `[Workflow]`

### Double-Tap Escape on a Non-Empty Input to Clear It
- **What:** If you have typed a long prompt and want to discard it without deleting it character-by-character, double-tap Escape to clear the input field.
- **Why it matters:** Faster than manually deleting; avoids accidentally sending a partially formed prompt.
- **How:** With text in the input, press Escape twice rapidly.
- **Tags:** `[Shortcut]`

### Double-Tap Escape on an Empty Input to Rewind Context
- **What:** When the input is empty, double-tapping Escape lets you rewind to a previous context checkpoint and restore it.
- **Why it matters:** Provides a way to recover a prior state without relying solely on Git. Useful if you went down a wrong path and want to restore a known-good context.
- **How:** With an empty input field, press Escape twice. Claude will offer previous context points to restore.
- **Tags:** `[Shortcut]`, `[Workflow]`

### Drag and Drop Screenshots Directly into Claude Code
- **What:** You can take a screenshot and drag it directly into the Claude Code input to include it as context.
- **Why it matters:** Visual context (UI bugs, design mocks, error dialogs) is often faster to communicate as an image than in text. Claude can analyze the image and act on it.
- **How:** Take a screenshot (e.g., Command+Shift+4 on macOS), then drag the file into the Claude Code terminal input and drop it. Add a text prompt alongside it.
- **Tags:** `[Workflow]`, `[Front-End]`

### Use a Figma MCP (or Similar) for UI Validation
- **What:** Install a Figma MCP (or another design-tool MCP) to give Claude access to design specs and validate generated UI against them.
- **Why it matters:** Closes the loop between design intent and code output, making UI generation much more accurate without manual comparison.
- **How:** Search for a Figma MCP (you can ask Claude to find one), install it via Claude Code, and reference it in your validation workflow.
- **Tags:** `[Config]`, `[Front-End]`, `[Advanced]`

### Use `/help` to Discover All Keyboard Shortcuts and Commands
- **What:** Run `/help` in Claude Code to get a full list of available keyboard shortcuts and slash commands with descriptions.
- **Why it matters:** The built-in help is the canonical reference; many shortcuts and commands are not obvious and are easy to miss.
- **How:** Type `/help` and press Enter.
- **Tags:** `[Shortcut]`

### Use `/clear` to Reset Context Between Unrelated Tasks
- **What:** Run `/clear` to wipe the current context window and start fresh, equivalent to opening a new Claude Code instance.
- **Why it matters:** Prevents context from a completed task from "bleeding into" and corrupting a new, unrelated task. Old context can confuse Claude or push it toward incorrect decisions.
- **How:** Type `/clear` when you are fully done with one task and about to start a different one. Alternatively, just open a new Claude Code instance.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Use `/context` to Audit What Claude Is Currently Aware Of
- **What:** Run `/context` to get a visual breakdown of everything currently loaded in Claude's context window, including files, MCP outputs, and their token counts.
- **Why it matters:** Lets you identify token bloat, spot which MCPs are consuming the most context, and reason about why Claude might be behaving unexpectedly. Useful when costs spike or output quality regresses.
- **How:** Type `/context`. Review the list and look for large offenders (MCPs are a common culprit). Disable or remove high-cost context sources that are not needed for the current task.
- **Tags:** `[Workflow]`, `[Performance]`

### Treat MCPs as a Primary Source of Context Bloat
- **What:** MCPs can consume very large amounts of context tokens, especially ones that make API calls or return verbose data (e.g., Xcode MCP, browser MCPs).
- **Why it matters:** Every MCP response adds to the context window. Over a long session with iteration cycles, MCP usage compounds and can significantly inflate costs and degrade output quality.
- **How:** Use `/context` to monitor MCP token usage. Only install MCPs that are strictly necessary for the current project. Disable directory-specific MCPs when not in use.
- **Tags:** `[Performance]`, `[Config]`, `[Gotcha]`

### Use Auto-Compaction and `/compact` to Manage Long Sessions
- **What:** Claude Code auto-compacts the context when it gets long (summarizing the session history). You can also manually trigger this with `/compact`.
- **Why it matters:** Prevents the context from overflowing and keeps costs manageable during very long sessions.
- **How:** Let auto-compaction run passively for most work. Use `/compact` manually if you want to save a snapshot of the compacted context to your local "second brain" or notes system.
- **Tags:** `[Performance]`, `[Workflow]`

### Use `/models` to Switch to Opus for Better Results
- **What:** Run `/models` to change the active model. Prefer Claude Opus for complex tasks when cost is not a constraint.
- **Why it matters:** Opus produces higher-quality code and reasoning than Sonnet or Haiku, which is especially valuable for complex features. The speed difference matters less when running multiple parallel instances.
- **How:** Type `/models` and select the desired model. Default to Opus if you have access; use Sonnet or Haiku for cost-sensitive or repetitive workflows.
- **Tags:** `[Config]`, `[Performance]`

### Use `/resume` to Recover a Killed Claude Instance
- **What:** Run `/resume` after accidentally closing or killing a Claude Code instance to restore a previous session's context.
- **Why it matters:** Prevents loss of the accumulated context and work from a long session. Recovering context is much faster than rebuilding it from scratch.
- **How:** Open Claude Code and type `/resume`. It will present previous session contexts to choose from.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Use `/mcp` to Inspect Installed MCPs
- **What:** Run `/mcp` to see which MCPs are currently installed and active.
- **Why it matters:** Gives visibility into what external tools Claude has access to, helping you audit and manage context bloat and capability.
- **How:** Type `/mcp` to list active MCPs. Remove or disable any that are not needed for the current task.
- **Tags:** `[Config]`

### Let Claude Install MCPs for You
- **What:** Instead of manually configuring MCP config files, ask Claude to find and install an MCP for you.
- **Why it matters:** Removes the need to manually manage config files (a pain point with tools like Cursor). Claude can locate the right MCP and wire it up automatically.
- **How:** Tell Claude: "Find and install a good Figma MCP for me." Claude will search, recommend one, and install it. Verify the result, as it may sometimes suggest an older or less maintained option.
- **Tags:** `[Config]`, `[Workflow]`

### Use Git as a Safety Net — Prefer It Over Claude's Rewind Feature
- **What:** Commit frequently with Git to create checkpoints rather than relying primarily on Claude Code's built-in context rewind feature.
- **Why it matters:** Git is more reliable and familiar than Claude's rewind. It provides clean, inspectable checkpoints. Claude's rewind is useful as a last resort but can be confusing.
- **How:** Commit after each meaningful step. Ask Claude to write your commit messages and pull request summaries using your own templates so they match your voice and are not overly verbose.
- **Tags:** `[Workflow]`, `[Gotcha]`

### Ask Claude to Write Git Commit Messages and PR Summaries
- **What:** Have Claude generate commit messages, PR descriptions, and test plans using your own templates.
- **Why it matters:** Saves time and produces consistent, well-structured messages. Using your own templates ensures Claude's output matches your tone and avoids being too verbose.
- **How:** Provide Claude with a template for commit messages and PR summaries. Ask it to generate these as part of your normal workflow after completing a task.
- **Tags:** `[Workflow]`

### Treat Your CLAUDE.md as an Evolving Lint File
- **What:** When Claude makes a mistake or violates a project-specific convention, fix it once and then update the CLAUDE.md to prevent recurrence — similar to updating a lint config.
- **Why it matters:** Encodes hard-won project knowledge into the rules file so the same mistake never happens again, improving quality over time without manual repetition.
- **How:** When Claude produces incorrect output due to a project-specific pattern it doesn't know, fix it manually, then say: "Update the CLAUDE.md rules so we never do this again." Claude will make the edit for you.
- **Tags:** `[Config]`, `[Workflow]`

### Never Manually Edit CLAUDE.md — Ask Claude to Update It
- **What:** Instead of editing CLAUDE.md yourself, instruct Claude to update it on your behalf.
- **Why it matters:** Keeps you in the habit of describing rules in natural language (which Claude understands well) rather than manually maintaining a config file. Also ensures Claude interprets the rule correctly.
- **How:** After identifying a rule to add or change, say: "Update the rules file so that [X] never happens again." Claude will locate the relevant file and make the update.
- **Tags:** `[Config]`, `[Workflow]`

### Use Trigger Keywords in CLAUDE.md to Invoke Specific Behaviors
- **What:** Define trigger keywords or phrases in your CLAUDE.md that map to specific workflows or tool invocations (e.g., "use my Xcode MCP to build" triggers a build).
- **Why it matters:** Creates a natural-language shorthand for complex, multi-step workflows without needing to remember exact commands each time.
- **How:** In your CLAUDE.md, document keywords and their associated behaviors. For example: "When I say 'build the app', use the Xcode MCP to compile and report errors." Then use these keywords conversationally.
- **Tags:** `[Config]`, `[Prompt Technique]`, `[Workflow]`

### Commit CLAUDE.md to the Repository to Improve Team AI Experience
- **What:** Check your project-level CLAUDE.md into version control so all teammates benefit from the accumulated rules and context.
- **Why it matters:** Encodes team-level AI coding standards and project knowledge into the repository, improving every team member's Claude Code experience without individual setup.
- **How:** Before committing, remove any personal file paths or global preferences. Keep the file focused on genuinely project-specific rules. Set a high bar — only commit rules that have proven useful. Gather feedback after landing it.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Use `--dangerously-skip-permissions` for Throwaway Environments
- **What:** Launch Claude Code with `claude --dangerously-skip-permissions` to bypass all permission prompts and run in "YOLO mode."
- **Why it matters:** Eliminates repetitive accept/reject prompts during intensive automated or exploratory sessions. Significantly speeds up iteration in safe, isolated environments.
- **How:** `claude --dangerously-skip-permissions` — only use this in throwaway VMs, containers, or sandboxed environments. Never use on production systems or machines where accidental deletion or OS mutation would be harmful. The speaker bricked a Linux machine using this mode carelessly.
- **Tags:** `[Advanced]`, `[Gotcha]`

### Use `/permissions` to Restrict Dangerous Operations Even in Skip Mode
- **What:** Even when running with `--dangerously-skip-permissions`, you can configure `/permissions` to still prompt or block specific dangerous actions (e.g., `rm -rf`, database mutations, deletions).
- **Why it matters:** Provides a safety layer for the most destructive operations even in automated/yolo mode.
- **How:** Configure `/permissions` to flag or block specific command patterns. Claude will still respect these even when general permission prompts are skipped.
- **Tags:** `[Config]`, `[Advanced]`, `[Gotcha]`

### Fresh, Condensed Context Beats Bloated Context
- **What:** Prioritize keeping the context window small and relevant rather than letting it accumulate unlimited history.
- **Why it matters:** A bloated context causes Claude to get confused about what parts of prior attempts were correct. A fresh, focused context produces more reliable and accurate outputs.
- **How:** Start new tasks with `/clear`. Use Plan Mode to build a solid plan before generating code. Avoid excessive trial-and-error cycles that leave noise in the context.
- **Tags:** `[Workflow]`, `[Performance]`, `[Prompt Technique]`

### Spend More Time on Planning Than on Execution
- **What:** Invest significant effort in the planning phase — challenging Claude's assumptions, asking for alternatives, refining the approach — before allowing it to execute.
- **Why it matters:** Code generation is fast and cheap. Planning is where quality is determined. A well-reasoned plan with good context leads to correct code on the first try; a rushed plan leads to expensive rework cycles.
- **How:** Use Plan Mode. Ask clarifying questions. Push back on Claude's first answer. Only switch to Accept Edits when you are confident in the direction.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Use a "Second Brain" to Persist and Lazy-Load Project Context
- **What:** Maintain a local directory of project-specific context files (a "second brain") that can be saved to and loaded from Claude Code on demand.
- **Why it matters:** Allows you to context-switch between projects without carrying around large, stale context windows. Relevant context is only loaded when needed, keeping each session fresh and efficient.
- **How:** At the end of a session, say: "Save our work and current state to my local CLAUDE.md projects directory." At the start of a new session, say: "Load my context from my local projects." Manage TODOs, feature notes, and project state in these files.
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Keep TODOs Inside Claude Code's Context System
- **What:** Track feature TODOs, task lists, and progress notes in your local project context files managed by Claude, rather than external tools like Asana or Jira (unless an MCP connects them).
- **Why it matters:** Keeps all project state in one place accessible to Claude, reduces tool-switching overhead, and allows Claude to stay aware of outstanding work without reloading external systems.
- **How:** Ask Claude to maintain a TODO list in your local index file. Lazy-load it only when you need it by asking Claude to "load my context from local projects."
- **Tags:** `[Workflow]`

### Ask Claude to Add Debug Logs, Run the App, and Read Logs to Debug
- **What:** For hard-to-reproduce bugs (e.g., race conditions), ask Claude to: (1) add debug logs, (2) run the app or emulator, (3) trigger the relevant actions, and (4) tail the logs and analyze them.
- **Why it matters:** Claude can orchestrate the entire debug cycle autonomously, surfacing root causes without you manually instrumenting code and reading logs.
- **How:** Prompt: "Add debug logs around [suspected area], build and run the app on the emulator, trigger [user action], then tail the logs and identify the root cause."
- **Tags:** `[Workflow]`, `[Advanced]`

### Use Performance Profiling MCPs for Performance Debugging
- **What:** Connect a profiling tool (e.g., Perfetto MCP) to Claude Code to automate performance investigation — run a trace, have Claude read the trace data, and identify jank or slow frames.
- **Why it matters:** Automates what would normally be a manual multi-step process of profiling, exporting, and reading trace files.
- **How:** Install the relevant profiling MCP. Ask Claude to: "Run a Perfetto trace while I do [action], then analyze the trace for performance bottlenecks."
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Use Browser Automation (Puppeteer / `/chrome`) for Web Validation
- **What:** Use Puppeteer MCP or the built-in `/chrome` command to have Claude navigate a real browser, interact with a web app, and validate UI or scrape data.
- **Why it matters:** Closes the web validation loop — Claude can see the actual rendered output, click through flows, fill forms, and report what it observes, rather than reasoning from static code alone.
- **How:** Use `/chrome` to open the browser panel, then instruct Claude to navigate to a URL, perform actions, and report results. Or install a Puppeteer MCP and reference it in your validation workflow.
- **Tags:** `[Workflow]`, `[Front-End]`, `[Advanced]`

### Run Multiple Claude Instances in Parallel for Parallel Development
- **What:** Run multiple simultaneous Claude Code instances (in separate terminal windows/panes) working on different tasks or projects at the same time.
- **Why it matters:** Eliminates idle waiting time while Claude executes. You can load context and give direction to one instance, switch to another while it runs, and effectively multiply your throughput.
- **How:** Open multiple iTerm2 (or equivalent) windows. Use Command+D to create new terminal panes. Use Command+[ and Command+] to switch between them. Rename tabs to identify what each instance is working on.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use iTerm2 for Managing Multiple Claude Instances
- **What:** Use iTerm2 as your terminal of choice when running multiple Claude Code instances, leveraging its pane splitting, tab naming, and keyboard navigation.
- **Why it matters:** Managing multiple AI instances requires fast, keyboard-driven navigation between contexts. iTerm2's features make this significantly easier.
- **How:** Command+D to split a pane, Command+[ / Command+] to navigate panes. Rename tabs in iTerm2 to reflect what each Claude instance is working on (e.g., "local", "remote SSH").
- **Tags:** `[Workflow]`

### Use Git Worktrees for Parallel Edits on the Same Repository
- **What:** Use Git worktrees to create multiple working copies of the same repository so separate Claude instances can edit the same project simultaneously without conflicts.
- **Why it matters:** Without worktrees, multiple Claude instances editing the same local repo would conflict. Worktrees allow true parallel development on the same codebase.
- **How:** `git worktree add ../my-project-feature-branch feature-branch` creates a separate working directory linked to a new branch. Assign one Claude instance per worktree.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use Voice Input (Whisper or Similar) for Hands-Free Prompting
- **What:** Use a speech-to-text tool like Whisper to dictate prompts to Claude Code instead of typing, especially when managing multiple instances.
- **Why it matters:** When juggling multiple Claude instances and context-switching at high speed, voice input is faster than typing and allows more fluid multi-tasking.
- **How:** Run a local Whisper instance (or equivalent tool) that transcribes speech to text and pastes it into the terminal. Switch between Claude instances, speak your prompt, and move on.
- **Tags:** `[Workflow]`

### Enable Sound Notifications When Claude Finishes Execution
- **What:** Configure Claude Code to play a sound or send a notification when it finishes a task so you know to check back on that instance.
- **Why it matters:** When running multiple parallel instances, you cannot watch all of them. A sound notification lets you work freely and return to completed tasks promptly.
- **How:** Tell Claude: "Change the notification settings to ring a sound when you finish execution." Claude will update the notification configuration.
- **Tags:** `[Workflow]`, `[Config]`

### Create Skills from Recurring Workflows
- **What:** After performing a multi-step workflow in Claude Code, save it as a named "skill" that can be recalled and re-executed by name in the future.
- **Why it matters:** Eliminates the need to re-describe complex workflows every time. Skills are stored as Markdown files in a specific directory Claude monitors.
- **How:** After completing a workflow (e.g., fetching Hacker News and saving a summary), say: "Save what we just did into a new skill called 'fetch-hackernews'." Claude will create an MD file in the skills directory. Invoke it later with `/fetch-hackernews` or by referencing the skill name in a prompt.
- **Tags:** `[Workflow]`, `[Advanced]`

### Skills and Slash Commands Are Now Interchangeable
- **What:** As of a recent Anthropic update, saved skills automatically become slash commands (e.g., a skill named "fetch-hackernews" becomes `/fetch-hackernews`).
- **Why it matters:** Unifies two previously separate concepts into one system. Any workflow you save as a skill is immediately accessible as a slash command without additional configuration.
- **How:** Create a skill as above. Claude will write the MD file and it will appear as a slash command automatically.
- **Tags:** `[Workflow]`, `[Advanced]`

### Ask Claude to Extend or Update Existing Skills
- **What:** Rather than recreating skills from scratch, ask Claude to extend an existing skill with new capabilities.
- **Why it matters:** Skills evolve as your workflow evolves. Treating them as living documents keeps them accurate and powerful.
- **How:** "Extend the fetch-hackernews skill to also fetch from Apple News and aggregate the results." Claude will update the underlying MD system prompt file.
- **Tags:** `[Workflow]`

### Never Manually Create or Edit Skills — Ask Claude to Manage Them
- **What:** Just as with CLAUDE.md, never hand-edit your skills files. Ask Claude to create, update, and manage them.
- **Why it matters:** Maintains consistency and lets Claude apply its understanding of your intent directly into the skill definition. Also reinforces the habit of delegating environment management to Claude.
- **How:** Always describe what you want changed in natural language and ask Claude to apply it to the relevant skill.
- **Tags:** `[Workflow]`

### Ask Claude to Find and Install MCPs Rather Than Searching Yourself
- **What:** Instead of searching the web for MCPs, ask Claude: "Find me a good [tool] MCP."
- **Why it matters:** Faster than manual search. Claude can identify suitable MCPs and install them without you touching config files.
- **How:** "Find me a good Figma MCP and install it." Caveat: Claude's knowledge may be slightly outdated, so verify the recommended MCP is current and well-maintained.
- **Tags:** `[Config]`, `[Workflow]`, `[Gotcha]`

### Use Sub-Agents for Atomic, Isolated, Side-Effect Tasks
- **What:** Use Claude Code sub-agents for tasks that are self-contained, atomic in nature, and do not need the full accumulated context of the parent session.
- **Why it matters:** Sub-agents protect the parent context window from being polluted by exploratory or isolated work. They return only their output, not the full trace of how they got there.
- **How:** After doing a workflow once, say: "Use what we just did to create a [name] sub-agent." Or spawn one directly: "Spawn a sub-agent to investigate [X] and report back."
- **Tags:** `[Advanced]`, `[Workflow]`

### Avoid Using Sub-Agents for Tasks That Require Full Session Context
- **What:** Do not route tasks that need awareness of the current session's full codebase context through sub-agents — keep them in the same Claude Code session.
- **Why it matters:** Sub-agents only receive their output back, not the full reasoning trace. A testing or debugging agent that does not know what code was just written will produce lower-quality results.
- **How:** For tasks like testing, debugging, or code review that require full context of current changes, keep them in the same session. Reserve sub-agents for isolated, side-effect work.
- **Tags:** `[Advanced]`, `[Gotcha]`

### Bring Work to the Context — Don't Spread Context Across Agents
- **What:** Structure your workflows so that relevant work and context accumulate within a single Claude session, rather than distributing context across many agents.
- **Why it matters:** Distributed context degrades quality because no single agent has the full picture. Concentrated context in one well-managed session produces better results.
- **How:** Use the second brain / lazy loading pattern to selectively bring in only the context needed. Avoid "CEO agent, product agent, design agent" multi-agent hierarchies where each agent lacks the others' context.
- **Tags:** `[Workflow]`, `[Advanced]`, `[Prompt Technique]`

### Use `/chrome` for Browser Navigation Without API Access
- **What:** The `/chrome` slash command opens a browser panel that Claude can control — navigating pages, clicking, typing, and reading page contents.
- **Why it matters:** Useful when you need to interact with a web service that has no API, scrape data, or validate a live web UI as part of an automated workflow.
- **How:** Type `/chrome` to open the browser panel. Then instruct Claude naturally: "Go to YouTube and search for cooking videos." Claude will take screenshots, navigate, and interact with the page.
- **Tags:** `[Advanced]`, `[Front-End]`, `[Workflow]`

### Compose Skills, MCPs, Sub-Agents, and Commands Into Plugins
- **What:** Combine multiple Claude Code primitives (skills, MCPs, slash commands, sub-agents, bash scripts) into reusable "plugins" — compound workflows that can be shared with others.
- **Why it matters:** The real power of Claude Code comes from composing its primitives. Plugins let you package sophisticated workflows and share them across teams or the community.
- **How:** Build a skill that triggers an MCP, which spawns a sub-agent, which runs a bash script. Once it works, ask Claude to package it as a plugin. Anthropic and the community share plugins openly.
- **Tags:** `[Advanced]`, `[Workflow]`

### Use Pre/Post Hooks for Automated Linting and Dangerous Operation Blocking
- **What:** Configure Claude Code hooks (pre-execution and post-execution) to automatically run linting/formatting after edits and to block destructive operations.
- **Why it matters:** Enforces code quality standards automatically without manual intervention, and provides a safety layer against catastrophic operations like dropping a database or deleting critical files.
- **How:** Ask Claude to set up hooks for you: "Add a post-tool-use hook that runs the linter and formatter after every file edit." For blocking: "Add a pre-execution hook that warns me before any delete or destructive mutation." Hooks are similar to Git pre-commit hooks.
- **Tags:** `[Config]`, `[Advanced]`, `[Workflow]`

### Explore the Claude Code Plugin Ecosystem
- **What:** Browse and download community-shared and Anthropic-official plugins for Claude Code rather than building everything from scratch.
- **Why it matters:** Saves time and exposes you to workflows and patterns you might not have thought of. Anthropic maintains an official plugin library.
- **How:** Ask Claude to find plugins for your use case, or browse Anthropic's plugin documentation. Plugins are combinations of skills, MCPs, commands, and scripts.
- **Tags:** `[Workflow]`

### Context Is King — Give Claude What It Needs and Nothing More
- **What:** The guiding principle of effective Claude Code use: provide Claude with exactly the context it needs for the current task — no more, no less.
- **Why it matters:** Too little context and Claude makes wrong assumptions. Too much context and Claude gets confused, costs rise, and output quality degrades. The ideal context is fresh, relevant, and condensed.
- **How:** Use the second brain for lazy loading, `/clear` between unrelated tasks, Plan Mode for upfront alignment, and `/context` to audit what is loaded. Prune aggressively.
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Performance]`

## Raw Notes

- The speaker is a Meta Staff Engineer who has been using Claude Code daily for approximately 6 months, describing themselves as "not writing code anymore" in the traditional sense.
- The speaker uses Claude Code actively for 12 hours a day, with the primary bottleneck being code review — they still read every line of code Claude produces.
- The speaker draws a parallel between managing multiple Claude Code instances and playing Starcraft — a real-time strategy game where success depends on managing multiple units/tasks simultaneously.
- There is a philosophical point about the end of hand-written code: the speaker agrees with the sentiment (attributed to the creator of Node.js) that the era of writing code by hand is effectively over. The speaker acknowledges loving the "zone" of hand-coding but notes it is cognitively incompatible with the new multi-instance, high-abstraction workflow.
- The speaker has abandoned Cursor, VS Code, and Android Studio in favor of pure terminal-based Claude Code via iTerm2.
- The speaker has a separate "second brain" video that covers the lazy-loading context workflow in depth.
- The speaker uses Whisper locally for voice-to-text input when working from home.
- There is a warning about `--dangerously-skip-permissions`: the speaker bricked a Linux machine by using it carelessly while setting up system-level configurations.
- The speaker is skeptical of multi-agent hierarchies with role-based agents (CEO agent, product agent, design agent), viewing them as an anti-pattern because context gets fragmented.
- The speaker is conservative about MCPs — tries hard to avoid them and only installs what is strictly necessary for a given project, treating them as a known source of context bloat.
- The "compound engineering" concept is mentioned as an emerging term for the practice of committing CLAUDE.md rules to the codebase to improve the team's collective AI coding experience.
- The primary bottleneck the speaker identifies in their own workflow is cognitive context-switching capacity — not Claude's speed or capability.
- The speaker mentions that evaluating whether committed CLAUDE.md rules are actually helpful is currently unsolved — most teams are relying on "vibes" and informal feedback rather than formal evals.
