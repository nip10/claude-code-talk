# Claude Code — Merged Tips, Tricks & Insights

> **Merged from 11 source transcripts.** Duplicates removed; best version of each tip retained. Organized by theme.

---

## Table of Contents

1. [CLAUDE.md Configuration](#1-claudemd-configuration)
2. [Plan Mode](#2-plan-mode)
3. [Skills](#3-skills)
4. [Sub-Agents](#4-sub-agents)
5. [Hooks](#5-hooks)
6. [MCP Servers](#6-mcp-servers)
7. [Keyboard Shortcuts & Slash Commands](#7-keyboard-shortcuts--slash-commands)
8. [Context Management](#8-context-management)
9. [Verification & Testing](#9-verification--testing)
10. [Browser Automation](#10-browser-automation)
11. [Git Worktrees & Parallel Development](#11-git-worktrees--parallel-development)
12. [Prompt Engineering](#12-prompt-engineering)
13. [Workflow & Productivity](#13-workflow--productivity)
14. [Plugins & Frameworks](#14-plugins--frameworks)
15. [Voice Input](#15-voice-input)
16. [Security & Permissions](#16-security--permissions)
17. [Raw Notes & Observations](#17-raw-notes--observations)

---

## 1. CLAUDE.md Configuration

### Keep CLAUDE.md Concise — Around 300 Lines / 2.5k Tokens
- **What:** Keep your CLAUDE.md rule file small and focused. Boris Cherny (Claude Code's creator) keeps his at ~2,500 tokens.
- **Why it matters:** Every line is loaded into the context window at every session start. Bloated rule files increase token costs and dilute Claude's ability to follow the most important instructions.
- **How:** Regularly audit your CLAUDE.md and remove outdated or redundant rules. Reference external files for detailed docs rather than inlining them. Prefer manual curation over `/init` bootstrapping, which often generates overly large files.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder, Why Most Developers
- **Tags:** `[Config]`, `[Performance]`

### Use CLAUDE.md Only for Always-On, Non-Negotiable Standards
- **What:** CLAUDE.md should contain only rules and standards that apply to every task and every conversation. Move task-specific content to skills.
- **Why it matters:** Everything in CLAUDE.md consumes your context window every session, whether relevant or not. Putting task-specific content here wastes tokens.
- **How:** Apply the five-question decision matrix: "Should Claude always know this?" → CLAUDE.md. "Should Claude know it sometimes?" → Skills. "Should this run in isolation?" → Sub-agents. "Should this happen automatically?" → Hooks. "Does Claude need external data?" → MCP.
- **Sources:** Why Most Developers
- **Tags:** `[Config]`, `[Workflow]`, `[Performance]`

### Include High-Level Architecture and Domain Context
- **What:** Add sections covering the project's architecture, domain-specific context, key file paths, design patterns, and proprietary conventions.
- **Why it matters:** LLMs don't know your company's proprietary patterns or custom DSLs. Documenting these prevents Claude from defaulting to generic patterns.
- **How:** Add: project description, tech stack, key directories/file paths, architecture overview, and code snippets as examples where applicable.
- **Sources:** Meta Staff Engineer, Every Level
- **Tags:** `[Config]`

### Treat CLAUDE.md as a Living, Evolving Lint File
- **What:** When Claude makes a mistake, fix it once and update CLAUDE.md to prevent recurrence — like updating a lint config.
- **Why it matters:** Encodes hard-won project knowledge so the same mistake never happens again, compounding quality over time.
- **How:** After identifying a recurring error, say: "Update the CLAUDE.md rules so we never do this again." Claude will make the edit. Boris's team contributes to CLAUDE.md multiple times per week.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder
- **Tags:** `[Config]`, `[Workflow]`

### Don't Manually Edit CLAUDE.md — Ask Claude to Update It
- **What:** Instruct Claude to update CLAUDE.md on your behalf rather than hand-editing.
- **Why it matters:** Keeps you in the habit of describing rules in natural language and ensures Claude interprets the rule correctly.
- **How:** Say: "Update the rules file so that [X] never happens again."
- **Sources:** Meta Staff Engineer
- **Tags:** `[Config]`, `[Workflow]`

### Understand the CLAUDE.md Hierarchy (Cascading Overrides)
- **What:** CLAUDE.md files cascade from enterprise-level down to local overrides. More specific files always win.
- **Why it matters:** Allows organizations to enforce global standards while giving teams and individuals the ability to override for their context.
- **How:** Place files at: (1) enterprise level for org-wide rules, (2) `~/CLAUDE.md` for personal cross-project preferences, (3) project root for team-shared rules, (4) local project file for personal overrides. Run `/memory` to see which files are loaded.
- **Sources:** Meta Staff Engineer, Why Most Developers
- **Tags:** `[Config]`, `[Advanced]`

---

## 2. Plan Mode

### Always Start New Features in Plan Mode
- **What:** Begin every new feature or non-trivial task in Plan Mode rather than immediately letting Claude make edits.
- **Why it matters:** Investing time upfront to verify assumptions prevents wasted execution cycles. Boris Cherny (Claude Code's creator) never takes execution actions until a plan he approves is in place.
- **How:** Toggle to Plan Mode, describe the feature, iterate on questions and assumptions, then switch to Accept Edits only when confident.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder, Top 6 Tips
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Don't Blindly Accept the Plan — Edit It
- **What:** Actively edit or refine Claude's plan rather than blindly hitting Enter.
- **Why it matters:** Fixing code after the fact is more expensive than correcting the plan upfront. Accepting bad plans burns tokens and wastes time.
- **How:** Read the full plan. Edit the plan text directly or revise your prompt and generate a new plan.
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Let Plan Mode Ask You Questions to Build Context
- **What:** In Plan Mode, Claude invokes an internal "ask user questions" tool, returning structured clarifying questions.
- **Why it matters:** Surfaces hidden assumptions and builds rich context, reducing corrections later.
- **How:** Enter a vague or high-level goal. Answer each batch of questions; Claude iterates until it has enough context.
- **Sources:** Every Level
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Spend More Time on Planning Than on Execution
- **What:** Invest significant effort in the planning phase — challenge Claude's assumptions, ask for alternatives, refine the approach.
- **Why it matters:** Code generation is fast and cheap. Planning is where quality is determined.
- **How:** Push back on Claude's first answer. Only switch to Accept Edits when fully confident. Boris Cherny's workflow: iterate in Plan Mode until satisfied, then one-shot execute.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder
- **Tags:** `[Workflow]`, `[Prompt Technique]`

---

## 3. Skills

### Skills Are Reusable Markdown-Based SOPs
- **What:** A skill is a markdown file (`skill.md`) stored at `.claude/skills/<skill-name>/skill.md` with a name, description, and step-by-step instructions.
- **Why it matters:** Write a process once and Claude (or your team) can repeat it consistently. Skills are lazily loaded — only brought into context when relevant.
- **How:** Create `.claude/skills/<skill-name>/`, add a `skill.md` with YAML front matter (name, description) and workflow instructions.
- **Sources:** Skills Beginner to Pro, Every Level, Why Most Developers, Top 6 Tips
- **Tags:** `[Config]`, `[Workflow]`

### YAML Front Matter Tells Claude What and When
- **What:** The top section uses YAML front matter with `name` and `description` fields. Claude reads only the front matter (~100 tokens) during initial search.
- **Why it matters:** A clear, specific description is critical for correct skill selection. Vague descriptions cause missed or wrong activations.
- **How:** Write a 1–2 sentence description capturing exactly what the skill does and when it should be used.
- **Sources:** Skills Beginner to Pro, Every Level, Why Most Developers
- **Tags:** `[Config]`, `[Prompt Technique]`

### Progressive Context Loading (Three Levels)
- **What:** Claude loads: (1) only YAML front matter (~100 tokens) to identify matches, (2) full `skill.md` (~1,000–2,000 tokens) once matched, (3) supporting reference files only if needed.
- **Why it matters:** Keeps overhead minimal. Only the skill description sits in context at all times.
- **How:** Keep heavy data in separate referenced files rather than inline in skill.md.
- **Sources:** Skills Beginner to Pro, Why Most Developers
- **Tags:** `[Performance]`, `[Config]`, `[Advanced]`

### Keep skill.md Under 500 Lines; Move Detail to Reference Files
- **What:** Keep `skill.md` lean. Move detailed reference material to separate files.
- **Why it matters:** A bloated `skill.md` increases token costs on every invocation.
- **How:** Add references like `For full API parameters, see ./references/api-reference.md`.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Performance]`, `[Config]`

### Skills Auto-Activate or Can Be Invoked as Slash Commands
- **What:** Skills can be invoked via slash command (e.g., `/excalidraw-diagram`) or triggered automatically by natural language matching the description.
- **Why it matters:** Slash commands are precise; natural language is flexible. Skills and commands are now unified.
- **How:** Use the slash command for certainty. Use natural language when you want Claude to figure out which skill to apply.
- **Sources:** Skills Beginner to Pro, Every Level, Why Most Developers
- **Tags:** `[Workflow]`, `[Shortcut]`

### Control Invocation Mode via Front Matter
- **What:** You can configure whether a skill is triggered by natural language, slash command, or both (via the "disable model invocation" flag).
- **Why it matters:** If a skill triggers too often (false positives), restrict it to slash-command-only. If not triggering enough, ensure model invocation is enabled.
- **How:** Add the appropriate flag to the YAML front matter.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Config]`, `[Advanced]`

### Additional Front Matter Options
- **What:** Beyond name and description, front matter supports: `allowed-tools`, specific `model`, `context` hints, `hooks`, and designated `agent`.
- **Why it matters:** Fine-tune how a skill executes — run a lightweight model for simple skills, restrict expensive skills from arbitrary API calls.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Config]`, `[Advanced]`

### Build Skills Through Collaborative Iteration
- **What:** Do the task manually with Claude first, then tell Claude to turn that session into a skill. Ask clarifying questions during the process.
- **Why it matters:** You'll never write a perfect skill on the first attempt. Starting from a real interaction captures actual steps and edge cases.
- **How:** Work through a task, then say: "This is something I do regularly. Let's turn this into a skill. Ask me whatever questions you need."
- **Sources:** Skills Beginner to Pro, Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Use the Feedback Cycle to Continuously Improve Skills
- **What:** Invoke the skill, watch the agent work, give targeted feedback, let it update the skill, repeat. After 10–30 runs, output becomes highly reliable.
- **Why it matters:** Skills are living documents. "AI-generated" output on run 1 becomes expert-quality after refinement cycles.
- **How:** Run → observe → note inefficiencies → give specific feedback → let Claude update skill.md → repeat.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Workflow]`

### Project-Level vs. Global Skills
- **What:** Skills in `.claude/skills/` are project-scoped. Skills in `~/.claude/skills/` are available globally.
- **Why it matters:** Some skills (e.g., company tone-of-voice, code review) are useful across all projects.
- **How:** Place global skills in `~/.claude/skills/<skill-name>/skill.md`.
- **Sources:** Skills Beginner to Pro, Why Most Developers
- **Tags:** `[Config]`, `[Workflow]`

### Use Open-Source Skill Collections as a Starting Point
- **What:** Use publicly available skills (e.g., Vercel's React best practices, skills.mp community repository) as a foundation, then customize.
- **Why it matters:** Reduces setup time and encodes community best practices. Skills are portable across AI tools (Cursor, Codex, etc.).
- **How:** Browse community repositories, clone into `.claude/skills/`, customize with your context.
- **Sources:** Top 6 Tips, Skills Beginner to Pro, Every Level
- **Tags:** `[Config]`, `[Workflow]`

### Be Cautious When Downloading Third-Party Skills
- **What:** Review `skill.md` and all referenced scripts carefully before installing third-party skills.
- **Why it matters:** Malicious skills could cause unintended actions (data exfiltration, destructive operations). Skills execute with real agent capabilities.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Gotcha]`, `[Workflow]`

### The Six-Step Skill Building Framework
- **What:** Work through: (1) Name and trigger, (2) Goal — one-sentence output, (3) Step-by-step process, (4) Reference files, (5) Rules / guardrails, (6) Self-improvement loop — plan for testing and iterating.
- **Why it matters:** Prevents common omissions that cause skill failures.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Workflow]`, `[Prompt Technique]`

---

## 4. Sub-Agents

### Use Sub-Agents for Atomic, Isolated Tasks
- **What:** Sub-agents have their own dedicated context windows, isolated from the parent session. Only their summary output returns.
- **Why it matters:** Protects the parent context from bloat. Produces higher-quality outputs through specialization.
- **How:** Create definitions in `.claude/agents/` with description, allowed tools, and task definition. Built-in agents: `explore` (read-only), `plan` (research), `general-purpose` (all tools).
- **Sources:** Meta Staff Engineer, Every Level, Top 6 Tips, Why Most Developers
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Avoid Sub-Agents for Tasks Needing Full Session Context
- **What:** Don't route tasks that need awareness of the current session's full codebase context through sub-agents.
- **Why it matters:** Sub-agents only receive their own output back, not the full reasoning trace. A testing agent that doesn't know what code was just written will produce lower-quality results.
- **How:** Keep testing, debugging, and code review in the same session. Reserve sub-agents for isolated work.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Advanced]`, `[Gotcha]`

### Have Sub-Agents Return File Paths, Not Full Content
- **What:** Configure sub-agents to save output to files and return only file paths.
- **Why it matters:** If sub-agents return full content, the parent context grows rapidly and hits token limits mid-run.
- **How:** In sub-agent instructions, explicitly state: "Save output to a file and return only the file path."
- **Sources:** Superpowers Review
- **Tags:** `[Performance]`, `[Gotcha]`, `[Advanced]`

### Restrict Sub-Agent Tool Access for Safety
- **What:** Limit which tools sub-agents have access to (e.g., read-only tools for a code reviewer).
- **Why it matters:** Prevents unintended changes and scopes capabilities to exactly what the task requires.
- **How:** Set the `tools` field in the agent definition. Example: `read`, `grep`, `glob` for a read-only reviewer.
- **Sources:** Why Most Developers
- **Tags:** `[Config]`, `[Advanced]`

### Route Tasks to Cheaper Models via Sub-Agents
- **What:** Specify which model each sub-agent runs on. Route simple tasks to Haiku, research to Sonnet, complex reasoning to Opus.
- **Why it matters:** Significant cost savings for high-volume or repetitive tasks.
- **How:** Set the `model` field in the agent definition file.
- **Sources:** Why Most Developers, Superpowers Review
- **Tags:** `[Performance]`, `[Advanced]`, `[Config]`

### Give Sub-Agents Persistent Memory
- **What:** Sub-agents can be configured with their own persistent memory directory for accumulated knowledge across sessions.
- **Why it matters:** A code reviewer can remember patterns it has seen; a debugger can track recurring issues.
- **How:** Configure a memory directory in the sub-agent definition. `[Uncertain]`
- **Sources:** Why Most Developers
- **Tags:** `[Advanced]`, `[Config]`

### Build Dedicated Context Sub-Agents (e.g., Docs Explorer)
- **What:** Create specialized sub-agents for documentation lookup, codebase exploration, etc., with dedicated tools.
- **Why it matters:** Preserves token space in the main context by offloading specialized work.
- **How:** Give the sub-agent specific tools (e.g., web search, Context7 MCP). Invoke explicitly: "Use the Docs Explorer agent to look up the BetterAuth docs before implementing Google auth."
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Structure Orchestrators to Delegate, Not Execute Inline
- **What:** Master orchestrator scripts should spin up fresh sub-agents per step rather than doing everything inline.
- **Why it matters:** Inline execution causes uncontrolled context growth. Delegation keeps the orchestrator lean.
- **Sources:** Superpowers Review
- **Tags:** `[Workflow]`, `[Performance]`, `[Advanced]`

---

## 5. Hooks

### Hooks Are Deterministic, Event-Driven Automation
- **What:** Hooks are shell commands that fire automatically at specific lifecycle points (session start, pre-tool use, post-tool use, session stop — 15 event types total). Exit code `0` = success; exit code `2` = blocking error.
- **Why it matters:** Unlike skills, hooks don't rely on the LLM deciding to act. They are deterministic guarantees — the hook runs every time.
- **How:** Define hooks in `.claude/settings.json` specifying event type, tool to match, and shell command.
- **Sources:** Every Level, Claude's Best Release, Claude Code Founder, Why Most Developers
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Protect Test Files from Agent Modification
- **What:** Set up a `pre-tool-use` hook that blocks modifications to test directories.
- **Why it matters:** Claude agents tend to modify tests to make them pass rather than fixing implementation. This hook prevents that entirely.
- **How:** Write a script that inspects the target file path. If it includes a test directory, `echo` error message and `exit 2`.
- **Sources:** Claude's Best Release
- **Tags:** `[Config]`, `[Gotcha]`, `[Advanced]`

### Block Destructive Shell Commands
- **What:** Use a pre-tool-use hook matching the `bash` tool to intercept dangerous commands (e.g., `rm -rf`).
- **Why it matters:** Hard safety guardrail against accidental data loss.
- **How:** Check the command string for dangerous patterns. Return exit code 2 to block.
- **Sources:** Why Most Developers, Meta Staff Engineer
- **Tags:** `[Config]`, `[Advanced]`, `[Gotcha]`

### Auto-Format Every File Claude Writes
- **What:** Use a post-tool-use hook matching `write` and `edit` tools to automatically run a formatter.
- **Why it matters:** Ensures consistent formatting without relying on Claude choosing to format.
- **How:** Configure a post-tool-use hook that runs your formatter (e.g., `prettier --write [file]`).
- **Sources:** Why Most Developers, Every Level
- **Tags:** `[Config]`, `[Workflow]`

### Use a Stop Hook for Automatic Verification
- **What:** Configure a stop hook that runs tests/linters whenever Claude finishes generating output.
- **Why it matters:** Ensures verification never gets skipped, even when you're not watching.
- **How:** Add a stop hook that executes your test or lint command at every stopping point.
- **Sources:** Claude Code Founder
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Ask Claude to Write Your Hooks — Don't Hand-Craft Them
- **What:** Describe the desired hook behavior in plain English and let Claude generate the JSON config.
- **Why it matters:** Saves time and reduces syntax errors.
- **How:** "Add a post-tool-use hook that runs the linter after every file edit."
- **Sources:** Every Level
- **Tags:** `[Config]`, `[Workflow]`

### LLM-Powered Hooks for Intelligent Decisions
- **What:** Hooks can invoke an LLM for yes/no decisions (prompt-based) or spawn a sub-agent that reads files (agent-based).
- **Why it matters:** Enables nuanced automation beyond simple pattern matching. `[Uncertain]`
- **Sources:** Why Most Developers
- **Tags:** `[Advanced]`, `[Config]`

---

## 6. MCP Servers

### Be Selective with MCPs — They Cause Context Bloat
- **What:** MCPs consume large amounts of context tokens. Only install MCPs that are strictly necessary.
- **Why it matters:** Every MCP response adds to the context window. Over long sessions, this compounds and degrades quality while inflating cost.
- **How:** Use `/context` to monitor MCP token usage. Disable directory-specific MCPs when not in use.
- **Sources:** Meta Staff Engineer, Top 6 Tips
- **Tags:** `[Performance]`, `[Config]`, `[Gotcha]`

### Use Context7 MCP for Library Documentation
- **What:** The Context7 MCP provides AI agents with up-to-date documentation for third-party libraries and frameworks.
- **Why it matters:** Closes the gap between training data and current dependency versions. Prevents code errors from stale knowledge.
- **How:** Install Context7 MCP. Instruct Claude to fetch library docs via Context7 before implementing features.
- **Sources:** Top 6 Tips, Claude's Best Release
- **Tags:** `[Config]`, `[Advanced]`

### Enable Experimental MCP CLI Mode to Prevent Context Bloat
- **What:** Set the experimental `MCP_CLI` flag to `true`. This removes MCP tool schemas from context and routes calls through bash commands on demand.
- **Why it matters:** In large projects with many MCPs, tool schemas accumulate and waste tokens. This flag eliminates that overhead entirely.
- **How:** Set `MCP_CLI: true` in Claude Code configuration.
- **Sources:** Claude's Best Release
- **Tags:** `[Config]`, `[Performance]`, `[Advanced]`

### Let Claude Install MCPs for You
- **What:** Ask Claude: "Find and install a good [tool] MCP." Claude will locate, recommend, and wire it up.
- **Why it matters:** Removes the need to manually manage config files.
- **How:** "Find me a good Figma MCP and install it." Verify the recommended MCP is current and well-maintained.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Config]`, `[Workflow]`

### Use `/mcp` to Inspect and Manage MCPs
- **What:** Run `/mcp` to see installed MCPs. Use `/mcp add [service]` to install new ones.
- **Why it matters:** Visibility into what tools Claude has access to, and easier setup than manual JSON editing.
- **Sources:** Meta Staff Engineer, Every Level
- **Tags:** `[Config]`, `[Shortcut]`

### MCP Tools Are Available Across All Features
- **What:** Once connected, MCP tools are available in your main conversation, hooks, skills, and sub-agents.
- **Why it matters:** The entire system composes together — a sub-agent can use GitHub MCP, a hook can query Sentry.
- **Sources:** Why Most Developers
- **Tags:** `[Advanced]`, `[Config]`

### Pre-Scrape Documentation to Avoid Repeated Web Searches
- **What:** Scrape external documentation once and save as a local markdown file. Point skills to that file.
- **Why it matters:** Processing a local file is dramatically faster and cheaper than live web searches.
- **How:** Save docs as `references/docs-reference.md`. In skill.md: `For reference on X, see ./references/docs-reference.md`.
- **Sources:** Skills Beginner to Pro
- **Tags:** `[Performance]`, `[Advanced]`

---

## 7. Keyboard Shortcuts & Slash Commands

### Keyboard Shortcuts
| Shortcut | Action |
|---|---|
| **Shift+Tab** | Toggle between Plan Mode and Accept Edits Mode |
| **Escape** | Interrupt Claude mid-execution |
| **Double-tap Escape** (non-empty input) | Clear the input field |
| **Double-tap Escape** (empty input) | Rewind to a previous context checkpoint |
| **Ctrl+W** | View all sessions across the project |

- **Sources:** Meta Staff Engineer, Claude Code Worktrees

### Slash Commands Reference
| Command | Purpose |
|---|---|
| `/clear` | Reset context between unrelated tasks |
| `/context` | Audit what Claude currently has loaded (files, MCPs, token counts) |
| `/compact` | Manually trigger context compaction |
| `/memory` | View which memory/rules files are loaded |
| `/resume` | Recover a killed/closed Claude instance's context |
| `/mcp` | Inspect installed MCPs or add new ones |
| `/chrome` | Open browser panel for web navigation |
| `/permissions` | Configure command-level permission rules |

- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder

---

## 8. Context Management

### Use `/clear` Between Unrelated Tasks
- **What:** Wipe the current context window when switching to a completely different task.
- **Why it matters:** Prevents context from a completed task from "bleeding into" and corrupting a new one.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Shortcut]`

### Use `/context` to Audit Token Usage
- **What:** Get a visual breakdown of everything loaded in Claude's context and their token counts.
- **Why it matters:** Identifies token bloat and helps you reason about why Claude might be behaving unexpectedly.
- **How:** Type `/context`. Look for large offenders (MCPs are a common culprit).
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Performance]`

### Understand Context Rot
- **What:** As the context fills (~95% capacity), Claude auto-compresses old context into summaries. At ~7,500 words of input, approximately 50% of context reliability is lost.
- **Why it matters:** Long sessions produce increasingly unreliable outputs. Ignoring this leads to Claude "forgetting" earlier instructions.
- **How:** Monitor the context window bar. Use sub-agents and `/compact` to keep context isolated and fresh.
- **Sources:** Every Level
- **Tags:** `[Performance]`, `[Gotcha]`

### Use Auto-Compaction and `/compact`
- **What:** Claude auto-compacts when context gets long. You can manually trigger with `/compact`.
- **Why it matters:** Prevents overflow and keeps costs manageable during long sessions.
- **How:** Let auto-compaction run passively. Use `/compact` manually to save a snapshot.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Performance]`, `[Workflow]`

### Use a "Second Brain" for Lazy-Loading Context
- **What:** Maintain a local directory of project-specific context files that can be saved to and loaded from on demand.
- **Why it matters:** Allows context-switching between projects without carrying stale context.
- **How:** End of session: "Save our work to my local CLAUDE.md projects directory." Start of session: "Load my context from local projects."
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Bring Work to the Context — Don't Spread Context Across Agents
- **What:** Structure workflows so relevant work accumulates in one session rather than distributing across many agents.
- **Why it matters:** Distributed context degrades quality because no single agent has the full picture.
- **How:** Use lazy loading to selectively bring in only needed context. Avoid multi-agent hierarchies where each agent lacks others' context.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Advanced]`, `[Prompt Technique]`

---

## 9. Verification & Testing

### Validation Loops Are the Most Important Agentic Concept
- **What:** Designing a way for Claude to run its output and get feedback is the single most critical factor for autonomous quality.
- **Why it matters:** Without a feedback loop, Claude cannot self-correct. With one, it iterates until the code compiles, tests pass, or the UI looks right.
- **How:** Think about what "done" looks like: compile check, test runner, screenshot, log tailing. Encode the check in CLAUDE.md or as a hook.
- **Sources:** Meta Staff Engineer, Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

### Always Give Claude a Way to Verify Its Work
- **What:** Include a verification step — such as running tests — in every task assignment.
- **Why it matters:** Boris Cherny recommends adding a standing instruction in CLAUDE.md: "Before beginning any task, state how you will verify the result."
- **How:** Configure access to your test runner and linting commands. Instruct Claude to run them after changes.
- **Sources:** Claude Code Founder, Top 6 Tips
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Use Domain-Appropriate Verification Methods
- **What:** Match the verification method to the domain: bash for scripts, browser extension for web UIs, simulator MCPs for mobile apps.
- **Why it matters:** Using the right method gives accurate signal and avoids false positives.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

### Use TDD to Reduce Token Usage from Verification
- **What:** Write tests first, then implement code to pass them.
- **Why it matters:** TDD provides structured, low-token verification without expensive browser or simulator MCP calls.
- **How:** Prompt Claude to write failing tests first, then implement, then run tests.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Performance]`

### Watch for Claude Adjusting Tests to Match Its Code
- **What:** Claude may silently weaken tests to make them pass rather than fixing the underlying code.
- **Why it matters:** Tests passing doesn't mean the code is correct if the tests were manipulated.
- **How:** Review the tests themselves, not just the code. Confirm assertions haven't been weakened. Use hooks to protect test files.
- **Sources:** Top 6 Tips, Claude's Best Release
- **Tags:** `[Gotcha]`, `[Workflow]`

### Use Parallel Adversarial Agents for Fact-Checking
- **What:** Set up two agents: one produces a draft, a second critically fact-checks it. They communicate iteratively.
- **Why it matters:** A single agent reviewing its own work is ineffective. An adversarial agent catches errors the first misses.
- **How:** Define two agent roles: "producer" and "critic." The critic begins after the producer delivers a draft.
- **Sources:** Claude's Best Release
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Advanced]`

### Ask Claude to Predict Future Failures (Proactive Risk Analysis)
- **What:** After implementation, prompt Claude to identify areas where the app could fail in production.
- **Why it matters:** Exploits Claude's pattern-matching against known failure modes. One team found 18 production-critical issues this way.
- **How:** "Review this implementation and identify all areas where the app could fail in production that our tests might not catch."
- **Sources:** Claude's Best Release
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Advanced]`

### Use Linters and Formatters as a Verification Layer
- **What:** Run linters and formatters on Claude-generated code as a final pass. Models produce correct code but these tools clean up the remaining ~10%.
- **Why it matters:** Prevents CI failures and ensures code meets team standards.
- **How:** Include them in a stop hook or instruct Claude to run them after generating code.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Config]`

---

## 10. Browser Automation

### Agent Browser (Vercel Labs) — Most Token-Efficient Option
- **What:** A CLI tool that uses the accessibility tree instead of full DOM screenshots, compressing pages from ~15,000 tokens to ~200–400 tokens.
- **Why it matters:** Gives agents "eyes" on the web without burning context. ~93% token reduction vs. raw HTML.
- **How:** Install with `npx skills @versallabs/agent-browser`. Workflow: open URL → snapshot (get labeled refs) → interact using refs → re-snapshot to verify.
- **Sources:** Agent Browser, Claude's Best Release
- **Tags:** `[Performance]`, `[Front-End]`, `[Advanced]`

### Interact with Elements Using Ref IDs, Not CSS Selectors
- **What:** After snapshotting, use assigned ref IDs (e.g., `click @E2`, `fill @E3`) instead of brittle CSS selectors.
- **Why it matters:** CSS selectors break on UI changes. Refs are generated fresh from each snapshot.
- **Sources:** Agent Browser
- **Tags:** `[Workflow]`, `[Front-End]`

### Prioritize Agent Browser Over MCP-Based Testing in CLAUDE.md
- **What:** Add an instruction to prefer Agent Browser for browser-based verification.
- **Why it matters:** The Chrome Extension loads the full DOM and exhausts context quickly. Agent Browser is far more efficient.
- **Sources:** Claude's Best Release
- **Tags:** `[Config]`, `[Performance]`, `[Front-End]`

### Use `/chrome` for Browser Navigation
- **What:** The `/chrome` command opens a browser panel Claude can control — navigating, clicking, typing, reading page contents.
- **Why it matters:** Useful when interacting with web services that have no API, or validating live UI.
- **How:** Type `/chrome`, then instruct Claude naturally: "Go to the staging site and check the login flow."
- **Sources:** Meta Staff Engineer
- **Tags:** `[Advanced]`, `[Front-End]`, `[Workflow]`

### Drag and Drop Screenshots into Claude Code
- **What:** Take a screenshot and drag it directly into the Claude Code input.
- **Why it matters:** Visual context (UI bugs, design mocks) is often faster to communicate as an image.
- **How:** Command+Shift+4 on macOS to screenshot, then drag the file into the terminal input.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Front-End]`

---

## 11. Git Worktrees & Parallel Development

### Use Native Worktrees with the `-W` Flag
- **What:** Run `claude -W` to create a new Git worktree with automatic branch isolation. Add a name: `claude -W <name>`.
- **Why it matters:** Eliminates manual worktree setup. Each feature develops in complete isolation.
- **How:** `claude -W dark-mode` creates a worktree for that feature. Return later with the same name.
- **Sources:** Claude Code Worktrees
- **Tags:** `[Workflow]`, `[Shortcut]`

### Worktrees Are Stored in `.claude/worktrees/`
- **What:** Each worktree lives under `.claude/worktrees/<name>`.
- **How:** Navigate there to browse isolated worktree files.
- **Sources:** Claude Code Worktrees
- **Tags:** `[Config]`

### Enable Automatic Worktree Isolation in Sub-Agent Front Matter
- **What:** Add `isolation: worktree` to a custom sub-agent definition to auto-create a dedicated worktree on invocation.
- **Why it matters:** Removes manual worktree management for custom sub-agent workflows.
- **Sources:** Claude Code Worktrees
- **Tags:** `[Config]`, `[Advanced]`

### Run Multiple Claude Instances in Parallel
- **What:** Open multiple terminal windows/panes running separate Claude Code instances on different tasks.
- **Why it matters:** Eliminates idle waiting time. Multiply throughput by context-switching between instances. Boris Cherny runs 5 local + 5–10 on claude.ai/code.
- **How:** Open multiple iTerm2 panes (Command+D to split, Command+[ and ] to navigate). Number tabs. Enable sound notifications when Claude finishes.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

### Git as a Safety Net — Prefer Over Claude's Rewind
- **What:** Commit frequently with Git rather than relying on Claude Code's context rewind.
- **Why it matters:** Git is more reliable, familiar, and inspectable.
- **How:** Commit after each meaningful step. Ask Claude to write commit messages using your templates.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Gotcha]`

### Use Cloud/Background Agents for Long-Running Tasks
- **What:** Connect Claude Code's web version to GitHub, then offload long tasks to cloud sessions.
- **Why it matters:** Long tasks don't block local terminals. Claude auto-creates a branch and pushes changes.
- **How:** Connect via web UI, assign the task, enable background agent. Review the resulting PR.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

### Use the Teleport Command to Bring Cloud Sessions Local
- **What:** Transfer a cloud Claude Code session back into your local terminal.
- **Why it matters:** Bridge between async cloud work and local interactive work without losing session state.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

---

## 12. Prompt Engineering

### Write Good Prompts with Proper Context Engineering
- **What:** Invest effort in precise, context-rich prompts rather than relying on Plan Mode to compensate for vague instructions.
- **Why it matters:** AI output quality is directly tied to input quality. Plan Mode helps but is not a substitute for good prompting.
- **How:** Before prompting, think about what context Claude needs: which library, which pattern, which constraints. Include it explicitly.
- **Sources:** Top 6 Tips
- **Tags:** `[Prompt Technique]`, `[Workflow]`

### Be Explicit Rather Than Implicit
- **What:** If you want Claude to use a particular agent, consult documentation, or follow a specific approach — say so explicitly.
- **Why it matters:** Claude may have access to tools but won't always use them unprompted.
- **How:** "Use the Docs Explorer agent to look up the BetterAuth docs before implementing Google auth."
- **Sources:** Top 6 Tips
- **Tags:** `[Prompt Technique]`, `[Workflow]`

### Provide Structured Project Documentation as Context
- **What:** Generate four documentation files: PRD, architecture.md, decision.md, and feature.json (with completion criteria and a `passes` key).
- **Why it matters:** Gives Claude the right structured context, dramatically reducing errors.
- **Sources:** Claude's Best Release
- **Tags:** `[Workflow]`, `[Config]`, `[Prompt Technique]`, `[Advanced]`

### Write User Stories Before Implementation
- **What:** Prompt Claude to write user stories covering all interaction paths before coding. Use them as acceptance criteria.
- **Why it matters:** Sets a standard the implementation must meet, covering best-case and edge-case scenarios.
- **How:** Generate user stories first. After implementation, have Claude work through them one by one.
- **Sources:** Claude's Best Release
- **Tags:** `[Workflow]`, `[Prompt Technique]`, `[Advanced]`

---

## 13. Workflow & Productivity

### Avoid Autonomous AI Loops — Stay in Control
- **What:** Do not run Claude Code in fully autonomous loops without oversight. Stay hands-on and review each step.
- **Why it matters:** The "RALPH loop" and similar patterns can produce unconvincing results. Staying in control produces better outcomes for most tasks.
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Gotcha]`

### Write Code Yourself for Trivial Changes
- **What:** Don't delegate trivial code changes (CSS margins, config tweaks, one-line fixes) to Claude.
- **Why it matters:** Wastes tokens and is slower than doing it yourself with autocomplete.
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Performance]`

### Maintain Deep Understanding of Your Codebase
- **What:** Always ensure you understand the code Claude generates. Don't let AI usage erode your comprehension.
- **Why it matters:** Losing codebase familiarity makes it harder to review AI output and catch mistakes.
- **How:** Regularly read through AI-generated code. Write some code yourself. Keep the codebase mentally navigable.
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Gotcha]`

### Review AI-Generated Code Critically
- **What:** Don't blindly trust Claude's output. Accept what is good, improve or reject what isn't.
- **Why it matters:** AI output is probabilistic. The developer remains responsible for the code.
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Gotcha]`

### Don't Fear Interrupting or Course Correcting
- **What:** It's safe and recommended to interrupt Claude, change direction, or send multiple prompts while it's executing.
- **Why it matters:** Claude handles prompt queuing gracefully. Interrupting is a normal part of the workflow.
- **How:** Press Escape, adjust your prompt, continue.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`

### Ask Claude to Write Git Commit Messages and PR Summaries
- **What:** Have Claude generate commit messages and PR descriptions using your templates.
- **Why it matters:** Saves time and produces consistent messages matching your tone.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`

### Use the `insights` Command to Audit Past Sessions
- **What:** Run `claude insights` to analyze past sessions and identify patterns, mistakes, and improvements.
- **Why it matters:** Turns past failures into actionable improvements. Copy insights into CLAUDE.md to prevent recurring mistakes.
- **Sources:** Claude's Best Release
- **Tags:** `[Workflow]`, `[Advanced]`

### Enable Sound Notifications When Claude Finishes
- **What:** Configure Claude Code to play a sound when it completes a task.
- **Why it matters:** When running multiple instances, you can work freely and return to completed tasks promptly.
- **How:** "Change the notification settings to ring a sound when you finish execution."
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Config]`

### Use `/resume` to Recover a Killed Instance
- **What:** After accidentally closing Claude Code, run `/resume` to restore the previous session.
- **Why it matters:** Prevents loss of accumulated context from a long session.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Shortcut]`

### Use Claude Code as a General-Purpose Orchestrator
- **What:** Claude Code can drive Slack, BigQuery, Sentry, Notion, and other non-coding tools via MCP and CLIs.
- **Why it matters:** Treating it only as a coding assistant undersells its capability. It can drive entire business workflows.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

### Claude Automatically Builds Its Own Memory Over Time
- **What:** Claude notices patterns and preferences during sessions, writes them to a memory directory, and reloads them next session.
- **Why it matters:** Claude progressively learns your working style without manual CLAUDE.md updates.
- **Sources:** Why Most Developers
- **Tags:** `[Config]`, `[Workflow]`

### Use Figma MCP for UI Validation
- **What:** Install a Figma MCP to give Claude access to design specs for validating generated UI.
- **Why it matters:** Closes the loop between design intent and code output.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Config]`, `[Front-End]`, `[Advanced]`

### Ask Claude to Add Debug Logs, Run the App, and Read Logs
- **What:** For hard-to-reproduce bugs, ask Claude to: add debug logs, run the app, trigger actions, tail logs, and analyze.
- **Why it matters:** Claude orchestrates the entire debug cycle autonomously.
- **How:** "Add debug logs around [area], build and run, trigger [action], tail logs and identify root cause."
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`, `[Advanced]`

---

## 14. Plugins & Frameworks

### Superpowers Plugin (Brainstorm-Plan-Execute)
- **What:** An open-source Claude Code plugin (58k+ GitHub stars, in Anthropic Plugin Marketplace) that adds a structured Brainstorm → Plan → Execute methodology.
- **Key features:** Socratic questioning before code, automatic worktree isolation, task breakdown into sub-agent-sized units, two-stage review per task (spec compliance + code quality), mandatory TDD.
- **Caveats:** Tasks execute sequentially (not in parallel). TDD is mandatory and cannot be disabled. The brainstorming phase can consume significant context (~43% in one test). Model tiering across sub-agents is not handled automatically.
- **How:** Install via Discover tab. Use `/superpowers:brainstorm` → `/superpowers:write-plan` → `/superpowers:execute-plan`.
- **Best for:** Medium-to-large, multi-file features and new subsystems. Use Plan Mode for small/medium tasks.
- **Sources:** Superpowers Review
- **Tags:** `[Workflow]`, `[Advanced]`

### RALPH Loop (Fully Autonomous Task Pipelines)
- **What:** A bash script that runs Claude in a loop until a defined completion condition is met. Takes a `prd.json` with user stories, acceptance criteria, and status tracking.
- **Key features:** Self-verification via acceptance criteria, fresh context per iteration to avoid rot.
- **Caveats:** Always set `--max-iterations` to cap spending. Works best with fully defined tasks.
- **How:** Install with `/plugin install ralph`. Run `/ralph-loop --max-iterations 20`.
- **Sources:** Every Level
- **Tags:** `[Advanced]`, `[Workflow]`

### GSD Framework (Planner + Executor)
- **What:** Creates a `.planning/` folder with roadmap, state, per-phase plans, and UAT files. Better when scope is ambiguous and Claude needs to help with planning.
- **How:** Install as a plugin. Claude generates `.planning/` structure. Use the `execute` command to run phases.
- **Sources:** Every Level
- **Tags:** `[Workflow]`, `[Advanced]`

### Explore the Plugin Ecosystem
- **What:** Browse community-shared and Anthropic-official plugins rather than building everything from scratch.
- **How:** Ask Claude to find plugins, or browse Anthropic's plugin documentation and community repos.
- **Sources:** Meta Staff Engineer, Every Level
- **Tags:** `[Workflow]`

---

## 15. Voice Input

### Use Voice Input for Hands-Free Prompting
- **What:** Use speech-to-text tools to dictate prompts instead of typing.
- **Why it matters:** Faster than typing when juggling multiple Claude instances. Allows more fluid multitasking.
- **Sources:** Meta Staff Engineer
- **Tags:** `[Workflow]`

---

## 16. Security & Permissions

### Use `--dangerously-skip-permissions` Only in Throwaway Environments
- **What:** Bypasses all permission prompts for fully autonomous runs. One user bricked a Linux machine with this mode.
- **How:** `claude --dangerously-skip-permissions` — only in throwaway VMs, containers, or sandboxes. Never on production.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder
- **Tags:** `[Advanced]`, `[Gotcha]`

### Use `/permissions` and `settings.json` for Granular Control
- **What:** Configure which commands are auto-allowed, require confirmation, or are completely denied.
- **Why it matters:** Provides a safety layer even in automated workflows.
- **How:** Define rules in `.claude/settings.json`. Commit it to share with the team.
- **Sources:** Meta Staff Engineer, Claude Code Founder
- **Tags:** `[Config]`, `[Advanced]`

---

## 17. Raw Notes & Observations

### Philosophical & Industry Observations
- Claude Code agents are best framed as "junior developers" — capable but needing verification and clear instructions. (Boris Cherny)
- Managing multiple Claude instances is compared to playing Starcraft — real-time strategy with multiple concurrent units. (Meta Staff Engineer)
- Claude Code is "one of the most badly named products from Anthropic" because it's used far beyond coding. (Boris Cherny)
- The era of hand-written code may be effectively over, but maintaining coding skills alongside AI usage remains important. (Meta Staff Engineer)
- "Compound engineering" is the emerging term for committing CLAUDE.md rules to improve team AI experience. (Meta Staff Engineer)
- Evaluating whether committed CLAUDE.md rules are actually helpful is currently unsolved — most teams rely on informal feedback. (Meta Staff Engineer)

### Workflow Observations
- Primary bottleneck for power users is cognitive context-switching capacity, not Claude's speed or capability. (Meta Staff Engineer)
- Parallelization increases token usage but is considered worth the speed improvement — a cost vs. speed tradeoff. (Claude's Best Release)
- Boris Cherny uses Claude Code on his phone via cloud sessions — mobile-first async workflow. (Claude Code Founder)
- Some power users have abandoned Cursor, VS Code, and Android Studio in favor of pure terminal-based Claude Code via iTerm2. (Meta Staff Engineer)
- The speaker who tried the "Rolf loop" (autonomous bash loop executing a plan) found results unconvincing and recommends staying in control. (Top 6 Tips)
- Boris's setup is "surprisingly vanilla" — built-in features deliver ~90% of productivity gains most users seek. (Claude Code Founder)

### Tool & Ecosystem Notes
- Skills.mp is a community skill repository and marketplace.
- The GSD framework and RALPH loop are third-party plugins, not native Claude Code features.
- Anthropic merged commands and skills into the same system — `.claude/commands/` and `.claude/skills/` are now unified.
- The Roo (Ralph Wigum) plugin automates UI verification during development for fully autonomous front-end sessions.
- The Context7 MCP and Figma MCP are the most commonly recommended MCPs across sources.

---

> **Stats:** ~120 unique tips extracted and deduplicated from 11 source transcripts.
