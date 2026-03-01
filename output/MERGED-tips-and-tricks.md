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

### Treat CLAUDE.md as a Living Rulebook (Updated Through Claude)
- **What:** When Claude makes a recurring mistake, add or refine a rule in `CLAUDE.md` and have Claude make the update directly.
- **Why it matters:** This compounds team knowledge over time while keeping rule updates fast and consistent.
- **How:** After a mistake, say: "Update the rules file so we never do this again for [X]." Review the update, keep only high-signal rules.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder
- **Tags:** `[Config]`, `[Workflow]`

### Understand the CLAUDE.md Hierarchy (Cascading Overrides)
- **What:** CLAUDE.md files cascade from enterprise-level down to local overrides. More specific files always win.
- **Why it matters:** Allows organizations to enforce global standards while giving teams and individuals the ability to override for their context.
- **How:** Place files at: (1) enterprise level for org-wide rules, (2) `~/CLAUDE.md` for personal cross-project preferences, (3) project root for team-shared rules, (4) local project file for personal overrides. Run `/memory` to see which files are loaded.
- **Sources:** Meta Staff Engineer, Why Most Developers
- **Tags:** `[Config]`, `[Advanced]`

---

## 2. Plan Mode

### Start in Plan Mode and Pressure-Test Assumptions
- **What:** Begin non-trivial work in Plan Mode and force clarification before any edits.
- **Why it matters:** Most rework comes from bad assumptions, not slow coding. Upfront planning improves first-pass quality.
- **How:** Start with a high-level goal, answer clarifying questions, challenge weak assumptions, and refine until the approach is stable.
- **Sources:** Meta Staff Engineer, Every Level, Claude Code Founder, Top 6 Tips
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Edit the Plan Before You Execute
- **What:** Treat the proposed plan as a draft and actively revise it before switching to execution.
- **Why it matters:** Correcting plan defects is cheaper than fixing implementation defects.
- **How:** Review steps, remove weak or vague actions, ask for alternatives, then execute only when the plan is explicit and testable.
- **Sources:** Top 6 Tips, Meta Staff Engineer
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

### Use Third-Party Skill Collections Carefully
- **What:** Use open-source/community skills as starting points, but treat every imported skill as untrusted until reviewed.
- **Why it matters:** You get setup speed and reusable patterns without introducing hidden destructive behavior.
- **How:** Audit `skill.md` and referenced scripts first, then customize locally for your repo conventions.
- **Sources:** Top 6 Tips, Skills Beginner to Pro, Every Level
- **Tags:** `[Config]`, `[Workflow]`, `[Gotcha]`

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
| `/init` | Bootstrap a CLAUDE.md for the project |
| `/clear` | Reset context between unrelated tasks |
| `/context` | Audit what Claude currently has loaded (files, MCPs, token counts) |
| `/compact` | Manually trigger context compaction |
| `/memory` | View which memory/rules files are loaded |
| `/models` | Switch the active model (Opus, Sonnet, Haiku) |
| `/resume` | Recover a killed/closed Claude instance's context |
| `/mcp` | Inspect installed MCPs or add new ones |
| `/help` | Full list of shortcuts and commands |
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

### Keep Context Healthy with `/context`, `/compact`, and Reset Discipline
- **What:** Continuously monitor context load, compact when needed, and reset between unrelated tasks.
- **Why it matters:** Context bloat and long-session drift reduce reliability and increase cost.
- **How:** Use `/context` to spot heavy contributors, run `/compact` when sessions grow, and use `/clear` when switching tasks.
- **Sources:** Meta Staff Engineer, Every Level
- **Tags:** `[Workflow]`, `[Performance]`, `[Gotcha]`

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

### Build Every Task Around a Validation Loop
- **What:** Give Claude an explicit way to run output and receive feedback on every task.
- **Why it matters:** Verification loops are the core mechanism for self-correction and reliable autonomy.
- **How:** Define done criteria up front (tests, build, screenshot, logs) and require Claude to state and run verification steps.
- **Sources:** Meta Staff Engineer, Claude Code Founder, Top 6 Tips
- **Tags:** `[Workflow]`, `[Advanced]`, `[Prompt Technique]`

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
- **What:** Add an instruction to prefer Agent Browser, falling back to Puppeteer MCP only if unavailable.
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

### Use Worktree Isolation for Parallel Feature Streams
- **What:** Use `claude -W <name>` for isolated branches/worktrees, and optionally configure sub-agents with `isolation: worktree`.
- **Why it matters:** Isolation prevents branch collisions and keeps parallel agent work clean.
- **How:** Create/open worktrees with `-W`, and find local worktree folders under `.claude/worktrees/<name>`.
- **Sources:** Claude Code Worktrees
- **Tags:** `[Workflow]`, `[Shortcut]`, `[Config]`, `[Advanced]`

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

---

## 12. Prompt Engineering

### Use Explicit, Context-Rich Prompts
- **What:** State constraints, desired approach, and tool expectations explicitly instead of assuming Claude will infer them.
- **Why it matters:** Prompt precision drives output quality and reduces correction loops.
- **How:** Include relevant stack/context details and direct instructions (e.g., which agent or docs source to use) in the initial prompt.
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

### Stay Accountable for Code Quality
- **What:** Keep humans in the loop: do trivial edits directly, review AI output critically, and preserve deep codebase understanding.
- **Why it matters:** Quality failures usually come from unreviewed output and reduced ownership.
- **How:** Use Claude for leverage, not abdication; read generated diffs, reject weak code, and keep hands-on familiarity with core areas.
- **Sources:** Top 6 Tips
- **Tags:** `[Workflow]`, `[Performance]`, `[Gotcha]`

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

### Use Claude Code as a General-Purpose Orchestrator
- **What:** Claude Code can drive Slack, BigQuery, Sentry, Notion, and other non-coding tools via MCP and CLIs.
- **Why it matters:** Treating it only as a coding assistant undersells its capability. It can drive entire business workflows.
- **Sources:** Claude Code Founder
- **Tags:** `[Workflow]`, `[Advanced]`

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

---

## 15. Voice Input

### Use Voice Input for Hands-Free Prompting
- **What:** Use speech-to-text tools (e.g., Whisper, OpenWhispr) to dictate prompts instead of typing.
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
