# Why Most Developers Are Using Claude Code Wrong (Here's What You're Missing)!

> **Source:** Transcript of Why Most Developers Are Using Claude Code Wrong (Here's What You're Missing)!.md
> **Speaker/Channel:** Unknown (likely Dynamo or affiliated with "Dynamos AI agent mastery course")
> **Summary:** This video explains Claude Code's five distinct customization features — CLAUDE.md, Skills, Sub-Agents, Hooks, and MCP Servers — and provides a decision matrix for knowing which to use when. The core argument is that most developers overload CLAUDE.md when the other four features are better suited for specific use cases.

## Tips & Tricks

### Use CLAUDE.md Only for Always-On, Non-Negotiable Standards
- **What:** CLAUDE.md is a markdown file Claude reads at the start of every session, every time, with no exceptions. It should contain only rules and standards that apply to every task and every conversation.
- **Why it matters:** Everything in CLAUDE.md consumes your context window every session, whether relevant or not. Putting task-specific content here wastes tokens and clutters context.
- **How:** Add a CLAUDE.md file to your project root. Include things like "Always use TypeScript strict mode," "Use PNPM, never npm," or "Never modify the database schema directly." Run `/init` to bootstrap a CLAUDE.md in your project.
- **Tags:** `[Config]`, `[Workflow]`, `[Performance]`

### Leverage CLAUDE.md's Hierarchical (Cascading) Structure
- **What:** CLAUDE.md files are hierarchical and cascade from enterprise-level down to local overrides. More specific files always win over more general ones.
- **Why it matters:** Allows organizations to enforce global standards while giving teams and individuals the ability to override settings for their specific context, similar to how CSS specificity works.
- **How:** Place files at: (1) enterprise level for org-wide rules, (2) home directory (`~/CLAUDE.md`) for personal cross-project preferences, (3) project root for team-shared rules (committed to version control), (4) local project file for personal project-specific overrides. Each level overrides the one above it.
- **Tags:** `[Config]`, `[Advanced]`, `[Workflow]`

### Use Skills for Task-Specific Expertise That Loads On Demand
- **What:** A Skill is a markdown file (`skill.md`) that teaches Claude how to do something specific. It has a description (always in context) and full instructions (only loaded when the skill is activated). This is the primary alternative to stuffing everything into CLAUDE.md.
- **Why it matters:** Only the skill description sits in context at all times; the full instructions load only when needed. A PR review checklist does not consume tokens while you are debugging a memory leak.
- **How:** Create markdown files in `.claude/skills/` (project-shared) or your home directory skills folder (personal). Write a short description Claude uses to auto-detect when to activate, and full instructions for what to do when activated.
- **Tags:** `[Config]`, `[Workflow]`, `[Performance]`

### Skills Auto-Activate Based on Your Request
- **What:** Claude reads your natural language request, compares it against all available skill descriptions, and automatically activates matching skills — no slash command required.
- **Why it matters:** You do not have to remember to invoke skills manually. Saying "Review this PR" automatically loads your PR review skill.
- **How:** Write clear, specific descriptions in your skill files that describe the trigger scenario. Claude uses these descriptions to decide which skills to activate based on context.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Invoke Skills Directly as Slash Commands
- **What:** Skills can also be invoked explicitly as slash commands (e.g., `/review`, `/deploy`). Skills and commands are the same thing — files in `.claude/commands/` and `.claude/skills/` both create slash commands.
- **Why it matters:** Gives you deterministic, explicit invocation when you want to be sure a skill is activated rather than relying on auto-detection.
- **How:** Type `/review` or `/deploy` (or whatever you named your skill) directly in the Claude Code prompt. Store skill files in `.claude/commands/` or `.claude/skills/` — both work.
- **Tags:** `[Shortcut]`, `[Workflow]`

### Include Supporting Files in Skills
- **What:** Skills can reference supporting files — templates, reference docs, scripts — rather than putting everything in the `skill.md` itself.
- **Why it matters:** Keeps the skill's main instructions focused while detailed reference material only loads when actually needed, further reducing context overhead.
- **How:** In your `skill.md`, reference external files for detailed content. Claude reads those supporting files only when the skill is active.
- **Tags:** `[Config]`, `[Performance]`, `[Advanced]`

### Share Skills Across Your Team via Version Control
- **What:** Project skills stored in `.claude/skills/` are tracked in version control and shared with everyone who clones the repository.
- **Why it matters:** Entire teams get the same skills automatically — no manual setup per developer. Onboarding is instant for team workflows.
- **How:** Commit your `.claude/skills/` directory to your git repository. Every team member who clones the repo automatically has access to those skills.
- **Tags:** `[Workflow]`, `[Config]`

### Use Sub-Agents to Run Isolated Tasks in Their Own Context Window
- **What:** Sub-agents are specialized AI assistants that run in their own context window, completely isolated from your main conversation. Only their relevant summary output comes back to your main conversation.
- **Why it matters:** Tasks like exploring a large codebase, searching directories, or analyzing architecture generate verbose output. Running these in a sub-agent keeps your main context window clean and focused.
- **How:** Claude Code ships three built-in sub-agents: `explore` (read-only, fast, for searching/analyzing), `plan` (for research in plan mode), and `general-purpose` (all tools, for complex multi-step tasks). You can also create custom sub-agents in `.claude/agents/` with a name, description, tool restrictions, and model selection.
- **Tags:** `[Workflow]`, `[Performance]`, `[Advanced]`

### Restrict Sub-Agent Tool Access for Safety and Focus
- **What:** When creating custom sub-agents, you can restrict which tools they have access to. For example, a code reviewer sub-agent can be limited to read-only tools.
- **Why it matters:** Prevents sub-agents from making unintended changes and scopes their capabilities to exactly what the task requires, improving safety and predictability.
- **How:** In your sub-agent definition file (`.claude/agents/`), set the `tools` field. Example: set tools to `read`, `grep`, `glob` to make a read-only code reviewer.
- **Tags:** `[Config]`, `[Advanced]`, `[Gotcha]`

### Route Tasks to Cheaper Models via Sub-Agents to Optimize Cost
- **What:** When defining sub-agents, you can specify which model they run on. Route research or simpler tasks to a cheaper/faster model (e.g., Haiku) and keep complex reasoning on a more powerful model (e.g., Sonnet or Opus).
- **Why it matters:** Significant cost savings for high-volume or repetitive tasks that do not require the most capable model.
- **How:** In your sub-agent definition file, set the `model` field to your desired model ID. Route research-heavy, low-reasoning tasks to a cheaper model.
- **Tags:** `[Performance]`, `[Advanced]`, `[Config]`

### Give Sub-Agents Persistent Memory for Accumulated Knowledge
- **What:** Sub-agents can be configured with their own persistent memory, allowing them to accumulate knowledge across sessions.
- **Why it matters:** A code reviewer sub-agent can remember patterns it has seen before. A debugger can build up knowledge of recurring issues in your codebase over time.
- **How:** Configure a memory directory for the sub-agent in its definition file so it can write and reload notes between sessions. [Uncertain — exact configuration syntax not demonstrated in transcript]
- **Tags:** `[Advanced]`, `[Config]`

### Use Hooks for Deterministic, Event-Driven Automation
- **What:** Hooks are shell commands that execute automatically at specific points in Claude Code's lifecycle (pre-tool use, post-tool use, session start, session stop, and more — 15 event types total). They fire on every matching event regardless of what you asked Claude to do.
- **Why it matters:** Unlike skills, hooks do not rely on the LLM deciding to do something. They are deterministic guarantees — you do not hope Claude remembers to lint, the hook guarantees it runs every time.
- **How:** Define hooks in your Claude Code configuration, specifying the event type (e.g., `post-tool-use`), the tool to match (e.g., `write`, `edit`), and the shell command to run. Example: run `prettier` on every file Claude writes.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Block Destructive Shell Commands with a Pre-Tool-Use Hook
- **What:** Use a pre-tool-use hook matching the `bash` tool to intercept and block dangerous shell commands before Claude runs them.
- **Why it matters:** Provides a hard safety guardrail against accidental data loss. If a command contains `rm -rf`, the hook returns exit code 2 and Claude never executes it.
- **How:** Write a pre-tool-use hook that matches the `bash` tool event. In your hook script, check the command string for dangerous patterns. Return exit code 2 to block execution.
- **Tags:** `[Config]`, `[Advanced]`, `[Gotcha]`

### Auto-Format Every File Claude Writes Using a Post-Tool-Use Hook
- **What:** Use a post-tool-use hook matching the `write` and `edit` tools to automatically run a formatter (e.g., Prettier) every time Claude saves a file.
- **Why it matters:** Ensures consistent code formatting on every file Claude touches without having to remember to ask for it or rely on Claude choosing to format.
- **How:** Configure a post-tool-use hook that triggers on `write` and `edit` tool events. Run your formatter (e.g., `prettier --write [file]`) as the hook command.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Use LLM-Powered Hooks for Intelligent Decision-Making in Automation
- **What:** Hooks can themselves invoke an LLM to make a yes/no decision about whether to proceed (prompt-based hook) or even spawn a sub-agent that reads files and checks conditions (agent-based hook).
- **Why it matters:** Enables nuanced automation that goes beyond simple pattern matching — useful for complex pre-flight checks where context matters.
- **How:** Configure a "prompt-based hook" that sends context to a fast model and reads its response as a decision. Or configure an "agent-based hook" that spawns a sub-agent with read access before deciding. [Uncertain — exact configuration syntax not demonstrated in transcript]
- **Tags:** `[Advanced]`, `[Config]`

### Connect External Services via MCP Servers
- **What:** MCP (Model Context Protocol) is an open standard for connecting Claude to external services. Over 100 official MCP servers exist for services like GitHub, Sentry, Postgres, Jira, Figma, and Slack.
- **Why it matters:** Claude gains access to real-time external data and actions (e.g., querying your production database, reading Sentry errors, managing pull requests) without writing custom integrations.
- **How:** Run `claude mcp add` in your terminal, choose a transport type, and connect the server. MCP tools appear alongside Claude's built-in tools and can be used in hooks, skills, and sub-agents.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### MCP Tools Are Available Across All Five Features
- **What:** Once an MCP server is connected, its tools are available not just in your main Claude conversation but also inside hooks, skills, and sub-agents.
- **Why it matters:** The entire system composes together — you can build a sub-agent that uses a GitHub MCP tool, or a hook that queries Sentry after every deployment.
- **How:** Connect MCP servers via `claude mcp add`. Reference MCP-provided tools in your hooks, skill instructions, and sub-agent definitions just like built-in tools.
- **Tags:** `[Advanced]`, `[Workflow]`, `[Config]`

### Claude Automatically Builds Its Own Memory Over Time
- **What:** As of recent Claude Code versions, Claude notices patterns, preferences, and conventions during your sessions and writes them to a memory directory, loading them back next session automatically.
- **Why it matters:** Claude progressively learns your working style without you having to manually update CLAUDE.md for every preference.
- **How:** This happens automatically. No manual configuration required — Claude writes observations to its own memory directory and reloads them on the next session.
- **Tags:** `[Config]`, `[Workflow]`

### Apply the Five-Question Decision Matrix to Choose the Right Feature
- **What:** Use a single decision question for each of the five features to know exactly where something belongs: (1) Should Claude always know it? → CLAUDE.md. (2) Should Claude know it sometimes? → Skills. (3) Should this run in isolation? → Sub-agents. (4) Should this happen automatically on events? → Hooks. (5) Does Claude need external tools or data? → MCP servers.
- **Why it matters:** Eliminates guesswork and prevents the most common mistake: putting everything into CLAUDE.md and wasting context window on irrelevant content.
- **How:** Before adding anything to your Claude Code setup, run through these five questions in order and place the content in the appropriate feature.
- **Tags:** `[Workflow]`, `[Config]`

### Turn Repeated Explanations Into Skills
- **What:** Any time you find yourself explaining the same thing to Claude more than once, that repeated explanation is a skill waiting to be written.
- **Why it matters:** Eliminates repetitive prompting, saves time, and ensures consistent behavior across sessions without manual effort.
- **How:** Notice when you repeat yourself. Write that explanation as a skill in `.claude/skills/` with an appropriate description so Claude auto-activates it.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Bootstrap Your Project with `/init`
- **What:** Running `/init` in Claude Code generates a starter CLAUDE.md file for your project based on the current codebase.
- **Why it matters:** Gives you a solid foundation without having to write CLAUDE.md from scratch, and helps you think through what project-wide standards to encode.
- **How:** Open your project in Claude Code and run `/init` at the prompt. Claude will analyze the project and generate a CLAUDE.md file.
- **Tags:** `[Workflow]`, `[Config]`, `[Shortcut]`

### Understand Context Window Cost Per Feature Before Choosing
- **What:** Each of the five features has a different context window cost: CLAUDE.md is high (loaded every session), Skills are low (only description in context until invoked), Sub-agents and Hooks are zero (run outside main context), and MCP is moderate (tool search loads tools dynamically on demand).
- **Why it matters:** Context window is a finite, expensive resource. Knowing the cost of each feature helps you make architecture decisions that keep your sessions fast and affordable.
- **How:** Use this mental model when designing your Claude Code setup: reserve CLAUDE.md for truly universal rules, move everything else to lower-cost features.
- **Tags:** `[Performance]`, `[Advanced]`, `[Config]`

## Raw Notes

- The video is promotional in nature and ends with pitches for a paid community ("Dynamos") and an "AI agent mastery course." These sections contain no Claude Code tips and were filtered out.
- The speaker frames CLAUDE.md overload as the single most common mistake developers make with Claude Code. The entire video is structured around solving that one problem.
- The video explicitly states that `.claude/commands/` and `.claude/skills/` are unified — Anthropic merged commands and skills into the same system. This is a noteworthy recent change that may catch existing users off guard.
- The "CSS cascade" analogy for CLAUDE.md hierarchy is a useful mental model, especially for front-end developers understanding specificity.
- The video repeatedly emphasizes that the five features "compose" — they are not mutually exclusive. A well-configured project uses all five simultaneously.
- No specific keyboard shortcuts or CLI flags beyond `/init` and `claude mcp add` were demonstrated in this transcript.
- The transcript appears to be auto-generated captions with some transcription artifacts (e.g., "clot" instead of "Claude," "subgents" instead of "sub-agents," "entropic" instead of "Anthropic"). These were interpreted and corrected during extraction.
