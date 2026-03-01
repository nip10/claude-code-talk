# Every Level of Claude Code Explained in 39 Minutes

> **Source:** Transcript of Every Level of Claude Code Explained in 39 Minutes.md
> **Speaker/Channel:** Unknown (presenter claims 150+ hours of Claude Code experience; references Boris Cherny/Churnney as Claude Code's creator)
> **Summary:** A structured walkthrough of seven progressive "levels" of Claude Code proficiency, from basic prompting habits through fully autonomous multi-agent pipelines, using a social media content creation system as the running example throughout.

---

## Tips & Tricks

### Install Claude Code Using the Native Installer (No Node.js Required)
- **What:** Claude Code can be installed via a native installer that does not require Node.js.
- **Why it matters:** Removes a common setup barrier for users who do not have Node.js installed.
- **How:** Open a terminal in VS Code, run the native installer command provided in the official readme, then launch Claude by running `claude`.
- **Tags:** `[Config]`

### Use Plan Mode Before Executing Anything
- **What:** Toggle Plan Mode (a read-only mode) using Shift+Tab before writing any code or making any changes. Cycle through modes (accept edits, plan mode) with the same shortcut.
- **Why it matters:** Plan mode prevents Claude from touching files prematurely. It forces a research-first approach where Claude reads the codebase and proposes a plan. According to Boris Cherny (Claude Code's creator), he never takes execution actions until a plan he approves is in place.
- **How:** Press Shift+Tab to cycle to Plan Mode. Type your goal (e.g., "help me build a social media content creation system"). Claude will use its built-in "ask user questions" tool to return clarifying questions. Answer them iteratively until a comprehensive plan is formed, then switch to auto accept edits mode for execution.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Let Plan Mode Ask You Questions to Build Context
- **What:** In Plan Mode, Claude invokes an internal "ask user questions" tool, returning a structured list of questions about your goals and assumptions.
- **Why it matters:** This surfaces hidden assumptions and builds a rich context that Claude then uses during the execution phase, dramatically reducing back-and-forth corrections later.
- **How:** Enter a vague or high-level goal in Plan Mode. Claude will return questions (e.g., "Which social media platforms do you want to target?"). Answer each batch; Claude iterates until it has enough context to form a solid plan.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### One-Shot Execution After a Solid Plan
- **What:** Once a clear plan exists, Boris Cherny's practice is to switch to auto accept edits mode and let Claude one-shot the entire execution.
- **Why it matters:** A well-scoped plan eliminates the need for iterative back-and-forth during execution, saving significant time.
- **How:** After finalizing the plan in Plan Mode, press Shift+Tab to switch to auto accept edits mode and submit the execution prompt once.
- **Tags:** `[Workflow]`

### Create a CLAUDE.md File to Onboard Claude Like a New Team Member
- **What:** A `CLAUDE.md` file in the project root tells Claude your tech stack, preferences, rules, and common mistakes to avoid. Claude reads it at the start of every session.
- **Why it matters:** Without it, Claude produces generic output. With it, Claude behaves like a team member who already knows your conventions — no need to re-explain context every session.
- **How:** Create `CLAUDE.md` at the project root. Follow a five-part framework: (1) one-line project description, (2) exact operational steps/workflow, (3) brand voice and non-negotiables, (4) known edge cases and mistakes to avoid, (5) working conventions (file naming, etc.).
- **Tags:** `[Config]`, `[Workflow]`

### Keep CLAUDE.md Short and Specific — Use the "Don't Dump" Trick
- **What:** Do not put all documentation inside `CLAUDE.md`. Instead, keep it lean and reference external files/folders for detailed context (e.g., brand voice docs, style guides).
- **Why it matters:** A bloated `CLAUDE.md` degrades Claude's focus. Lean files with clear pointers to supporting docs keep the main config readable and maintainable.
- **How:** Instead of pasting brand voice guidelines directly, write: "For full brand voice guides with examples, see `docs/brandvoice.md`." Apply the same pattern for platform rules, content rules, etc.
- **Tags:** `[Config]`, `[Performance]`

### Apply the 60-Second / 30-Instruction Sanity Check to CLAUDE.md
- **What:** Before finalizing `CLAUDE.md`, verify: Can it be read in 60 seconds? Are there 20–30 instructions or fewer? Does it include specific examples rather than vague rules? Would a human freelancer find it useful?
- **Why it matters:** These checks prevent CLAUDE.md from growing into an unreadable document that Claude partially ignores.
- **How:** Manually review the file against these four criteria. Trim or externalize anything that fails.
- **Tags:** `[Config]`

### Version-Control CLAUDE.md with Your Team
- **What:** Share a single `CLAUDE.md` file across the entire team, committed to Git. The whole team contributes edits to it.
- **Why it matters:** Ensures every team member (and every Claude session) operates from the same rules. Changes are tracked and auditable.
- **How:** Commit `CLAUDE.md` to the repo. When a mistake recurs, add a rule to the file (or tag it on GitHub to trigger automatic updates). Do not just keep adding lines — prune and refine.
- **Tags:** `[Config]`, `[Workflow]`

### Add Mistake-Fixing Rules to CLAUDE.md in Real Time
- **What:** When Claude makes a mistake mid-session, immediately add a corrective rule to `CLAUDE.md` so it does not recur.
- **Why it matters:** Captures hard-won corrections permanently rather than re-correcting the same issue in future sessions.
- **How:** Either tell Claude "add this rule to my CLAUDE.md file" and it will do it, or manually edit the file. Then restart the session with `/clear` to reload the updated rules.
- **Tags:** `[Config]`, `[Workflow]`

### Use /init to Auto-Generate a CLAUDE.md for an Existing Project
- **What:** Running `/init` inside an existing project causes Claude to scan the repository and generate a starting `CLAUDE.md` file automatically.
- **Why it matters:** Saves time when onboarding Claude to a codebase that already exists — you get a draft to prune rather than starting from scratch.
- **How:** Inside an existing project, run `/init` in the Claude Code prompt. Review the generated file, remove unnecessary lines, and refine.
- **Tags:** `[Config]`, `[Shortcut]`

### Restart the Session with /clear After Updating CLAUDE.md
- **What:** After editing `CLAUDE.md`, run `/clear` (or the `/cle` shorthand) to restart the Claude Code session so the updated rules are reloaded.
- **Why it matters:** Changes to `CLAUDE.md` are not picked up mid-session; a restart is required for them to take effect.
- **How:** Type `/clear` or `/cle` in the Claude Code prompt after saving `CLAUDE.md` changes.
- **Tags:** `[Config]`, `[Shortcut]`

### Use Slash Commands as Saved, Reusable Prompts
- **What:** Slash commands are saved prompts stored as files that can be triggered with a single keystroke for tasks you repeat regularly (e.g., `/linkedin-post`).
- **Why it matters:** Eliminates the need to retype the same prompt repeatedly. Encodes your best prompts so they are consistent and instantly accessible.
- **How:** Create a command file inside the `.claude/` directory (e.g., `.claude/commands/linkedin-post.md`). Invoke it by typing `/linkedin-post` in the Claude Code prompt.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Use Skills for Context-Rich, Automatically-Invoked Capabilities
- **What:** Skills are like upgraded slash commands — they are folders of context (style guides, examples, reference docs) with a `skill.md` descriptor. Claude automatically loads a skill when its description matches the current task; you can also invoke it manually.
- **Why it matters:** Keeps your main `CLAUDE.md` lean while giving Claude rich, specialized context exactly when it's needed. Avoids token waste on irrelevant context.
- **How:** Create a `.claude/skills/` directory. Inside it, create a subfolder per skill (e.g., `humanizer/`) containing a `skill.md` and supporting files. Write a precise description in `skill.md` so Claude knows when to invoke it automatically.
- **Tags:** `[Config]`, `[Workflow]`, `[Performance]`

### Write Precise Skill Descriptions for Automatic Invocation
- **What:** The description field in a `skill.md` file is what Claude uses to decide when to activate the skill. Vague descriptions cause missed or wrong activations.
- **Why it matters:** A precise description (e.g., "Remove signs of AI-generated writing from text. Use when editing or reviewing text to make it sound more natural and human-written.") ensures Claude reliably loads the skill at the right moment without manual invocation.
- **How:** In `skill.md`, write a one-to-two sentence description that captures exactly what the skill does and the specific scenario in which it should be used.
- **Tags:** `[Config]`, `[Prompt Technique]`

### Import Pre-Built Skills from Skills.mp (Community Repository)
- **What:** Skills can be sourced from community repositories (e.g., skills.mp) and cloned into your `.claude/skills/` directory rather than built from scratch.
- **Why it matters:** Saves significant time. Community skills like a "humanizer" (removes AI writing patterns) can be dropped into a project in minutes.
- **How:** Browse skills.mp by category, open the GitHub repository for the desired skill, and run `git clone [url]` into your `.claude/skills/` folder. Use the squiggly-line path (`~/`) to install globally, or omit it for project-local installation.
- **Tags:** `[Workflow]`

### Reference Skills from CLAUDE.md to Guarantee Their Use in Specific Commands
- **What:** Even though skills auto-invoke based on description, you can add an explicit reference in `CLAUDE.md` (e.g., "every time you write content, use the humanizer skill at `/skills/humanizer`") to ensure the skill is always used for a given task.
- **Why it matters:** Provides a hard guarantee that a critical skill (like brand voice or humanizing) is never skipped, even if the description-based matching is ambiguous.
- **How:** Add a line to `CLAUDE.md` such as: "Every time you write content, make sure you use the humanizer skill in `/skills/humanizer`."
- **Tags:** `[Config]`, `[Workflow]`

### Use Hooks for Automatic, Token-Free Mechanical Checks
- **What:** Hooks are automatic triggers that fire when Claude Code performs an action (e.g., after generating a post). They run programmatic checks — banned word detection, word count enforcement, auto-formatting — without consuming LLM tokens.
- **Why it matters:** Offloads deterministic, rule-based verification from the LLM to cheap code execution. Guarantees certain conditions are always checked, every time, without relying on Claude's judgment.
- **How:** Create `.claude/settings.json` in your project. Add a `hooks` object specifying trigger events and the scripts/checks to run. Ask Claude to write the JSON for you. Restart the Claude Code instance for hooks to take effect.
- **Tags:** `[Config]`, `[Workflow]`, `[Performance]`

### Ask Claude to Write Your Hooks JSON — Don't Write It Manually
- **What:** Instead of hand-crafting the `settings.json` hooks configuration, ask Claude Code to generate the JSON for a described hook and add it to `settings.json` automatically.
- **Why it matters:** Saves time and reduces syntax errors in JSON configuration.
- **How:** Describe the desired hook behavior in plain English (e.g., "run a banned-words check on the output drafts folder after every post is generated") and ask Claude to add it to `settings.json`.
- **Tags:** `[Config]`, `[Workflow]`

### Remember the Skills/Hooks/Commands Mental Model
- **What:** Skills = how Claude thinks (context loaded into its reasoning when relevant). Hooks = what happens automatically after Claude acts (no LLM needed). Commands = stuff you manually trigger with a saved prompt.
- **Why it matters:** Understanding which mechanism to use for a given need prevents over-engineering and ensures the right tool is applied at the right layer.
- **How:** Ask yourself: "Is this about context/knowledge (skill), a mechanical post-action check (hook), or a repeatable prompt I invoke manually (command)?"
- **Tags:** `[Workflow]`

### Connect to External Apps via MCP Servers
- **What:** MCP (Model Context Protocol) servers are bridges between Claude Code and external applications (Airtable, Notion, Slack, etc.), allowing Claude to read and write data directly without copy-paste.
- **Why it matters:** Eliminates manual data transfer between tools. Claude can pull from a content calendar, process it, and push results back — all in one session.
- **How:** Create an `mcp.json` file at the project root and add the MCP server configuration for the target app (including API key/token). Alternatively, use the built-in `/mcp` command and follow the prompts. Restart Claude Code after setup.
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Set Up MCP via the /mcp Command Instead of Manual JSON Editing
- **What:** The `/mcp` command inside Claude Code can guide you through adding an MCP server (e.g., `/mcp add airtable`) and automatically generates the `mcp.json` configuration.
- **Why it matters:** More user-friendly than hand-editing JSON; reduces the chance of configuration errors.
- **How:** Run `/mcp add [service-name]` in Claude Code, provide the required API token when prompted, and restart Claude Code.
- **Tags:** `[Config]`, `[Shortcut]`

### Browse Thousands of Available MCP Servers from a Central Repo
- **What:** A community-maintained repository lists thousands of MCP server integrations for external services, making it easy to find a connector for virtually any app.
- **Why it matters:** You rarely need to build a custom MCP integration — most popular tools already have one available.
- **How:** Search the MCP server repository for your target service. Copy the configuration snippet into your `mcp.json` and insert your API credentials.
- **Tags:** `[Config]`

### Combine MCP Data Reads with Slash Commands for End-to-End Automation
- **What:** After reading data from an external app via MCP (e.g., pulling a content idea from Airtable), pipe the result directly into a slash command (e.g., `/linkedin-post`) to create content, then write the output back to the external app.
- **Why it matters:** Creates a closed-loop workflow entirely inside Claude Code — no manual copy-paste at any step.
- **How:** In a single prompt, instruct Claude to: (1) pull a record from Airtable via MCP, (2) run `/linkedin-post` on the content, (3) update the Airtable record with the generated post.
- **Tags:** `[Workflow]`, `[Advanced]`

### Use the GSD Framework to Break Large Projects into Phases with Context Files
- **What:** GSD is a planning-and-execution framework that creates a `.planning/` folder with files for: project roadmap, current state/progress, and per-phase plans with individual task-level to-dos and UAT (user acceptance testing) verification files.
- **Why it matters:** Solves the context rot problem on large projects by keeping context in discrete files rather than the live context window. Enables Claude to pick up exactly where it left off across sessions.
- **How:** Install the GSD framework (referenced as a plugin). Claude generates a `.planning/` folder structure during the planning phase. Each phase has its own plan, execution summary, and UAT file. Use the GSD `execute` command to run phases sequentially.
- **Tags:** `[Workflow]`, `[Advanced]`

### Understand and Manage Context Rot
- **What:** As the context window fills up (visible as a progress bar in Claude Code), Claude automatically compresses old context into summaries at ~95% capacity. At around 7,500 words (10,000 tokens) of input, approximately 50% of context reliability is lost.
- **Why it matters:** Long sessions with large context windows produce increasingly unreliable outputs. Ignoring this leads to Claude "forgetting" earlier instructions or making inconsistent decisions.
- **How:** Monitor the context window bar. Use frameworks like GSD or sub-agents to keep context isolated and fresh. Start new sessions or sub-agents for distinct tasks rather than running everything in one long session.
- **Tags:** `[Performance]`, `[Gotcha]`

### Use Sub-Agents for Context Isolation and Specialization
- **What:** Sub-agents are separate Claude instances with fresh, isolated context windows, defined as `.md` files in `.claude/agents/`. They can be specialists (researcher, reviewer, writer) called by the main agent or run in parallel terminals.
- **Why it matters:** Keeps the main agent's context clean (no bloat), produces higher-quality outputs through specialization, and reduces token costs because each agent only receives the context it needs.
- **How:** Create a `.claude/agents/` directory. Add an agent `.md` file with a description, allowed tools, and task definition. The main Claude instance can call sub-agents; or open separate terminal tabs and run independent Claude instances for parallel work.
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Run Multiple Claude Instances in Parallel for Speed
- **What:** Open multiple terminal tabs, each running an independent Claude Code instance on separate non-dependent tasks (e.g., Tab 1: LinkedIn posts, Tab 2: Instagram posts, Tab 3: another task).
- **Why it matters:** Compresses elapsed time. A 15-minute sequential process can be reduced to 5 minutes by running three tasks in parallel, then reviewing outputs as they arrive.
- **How:** Open additional terminal tabs in VS Code, run `claude` in each, and assign each a distinct task. Each tab runs independently.
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Use --dangerously-skip-permissions for Fully Autonomous Runs
- **What:** Starting Claude with the `--dangerously-skip-permissions` flag (or `-d`) bypasses all permission prompts, allowing Claude to read and write files without asking for approval each time.
- **Why it matters:** When running multiple parallel agents or autonomous pipelines, constant permission prompts become a bottleneck. This flag removes that friction for trusted, well-scoped tasks.
- **How:** Start Claude with: `claude --dangerously-skip-permissions`. Claude will ask once if you trust the folder contents before proceeding with full autonomy.
- **Tags:** `[Advanced]`, `[Gotcha]`

### Use the RALPH Loop for Fully Autonomous Task Pipelines
- **What:** RALPH is a plugin/framework consisting of a bash script that runs Claude in a loop until a defined completion condition is met. It takes a `prd.json` file (product requirements document) with user stories and acceptance criteria, and iterates through tasks — updating status as each is completed — until all are done or the max iteration count is reached.
- **Why it matters:** Enables fully autonomous, unattended execution of well-defined batch tasks. Claude handles verification itself (checking acceptance criteria) and feeds fresh context into each loop iteration to avoid context rot.
- **How:** Install the RALPH plugin with `/plugin install ralph`. Create a `prd.json` file with task descriptions, acceptance criteria, and completion statuses. Run `/ralph-loop` with a `--max-iterations` flag to cap spending. Claude will loop until all tasks meet acceptance criteria.
- **Tags:** `[Advanced]`, `[Workflow]`, `[Performance]`

### Always Set Max Iterations When Running RALPH
- **What:** The RALPH loop can run indefinitely on large or poorly scoped projects, consuming tokens and incurring significant cost. Always pass `--max-iterations [n]` when invoking it.
- **Why it matters:** Prevents runaway token consumption and unexpected costs on autonomous runs.
- **How:** Run: `/ralph-loop --max-iterations 20` (or an appropriate cap for your task set). Also use a clear `completion_status` field in `prd.json` as an additional safeguard.
- **Tags:** `[Performance]`, `[Gotcha]`

### Choose Between RALPH (Executor) and GSD (Planner + Executor) Based on Task Clarity
- **What:** RALPH works best when tasks are fully defined upfront (clear description, acceptance criteria, completion status). GSD is better when the project is large, scope is ambiguous, or you need Claude to help with the planning itself before execution.
- **Why it matters:** Using the wrong framework leads to either over-planning simple tasks or under-planning complex ones.
- **How:** If you have a specific list of well-defined tasks (e.g., "write 6 LinkedIn posts on these topics, under 200 words each, no banned words"), use RALPH. If you have a broad goal (e.g., "build a Q2 content strategy"), use GSD to plan first.
- **Tags:** `[Workflow]`, `[Advanced]`

### Define Completion Criteria Explicitly in prd.json for RALPH
- **What:** Each task entry in `prd.json` must have a clear `description`, `acceptance_criteria`, and `completion_status`. RALPH uses these to self-verify task completion and decide whether to iterate.
- **Why it matters:** Vague or missing acceptance criteria cause RALPH to loop unnecessarily or terminate prematurely.
- **How:** Write each user story in `prd.json` with: a one-sentence description, a bullet-point list of acceptance criteria (e.g., "under 200 words," "no banned words"), and a `status` field initialized to `"pending"`.
- **Tags:** `[Advanced]`, `[Config]`

### Boris Cherny's Workflow: Plan Until Satisfied, Then One-Shot Execute
- **What:** Claude Code's creator Boris Cherny's personal workflow is to iterate in Plan Mode until he is fully satisfied with the plan, then switch to auto accept edits and let Claude execute in a single pass.
- **Why it matters:** Demonstrates that even the tool's creator relies on a plan-first, execute-once discipline rather than iterating during execution.
- **How:** Use Plan Mode (Shift+Tab) for all planning. Ask follow-up questions, refine the plan iteratively. Only switch to execution mode when you would be comfortable handing the plan to a contractor.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Boris Cherny Runs 5 Claude Instances Locally + 5–10 on claude.ai/code in Parallel
- **What:** Boris Cherny regularly runs 5 Claude Code instances in local terminal tabs simultaneously, plus 5–10 additional instances on claude.ai/code, using system notifications to know when input is needed.
- **Why it matters:** Demonstrates the upper bound of parallel leverage that expert users are extracting from Claude Code.
- **How:** Open multiple terminal tabs, run `claude` in each, assign distinct tasks. Enable system notifications for Claude Code so you are alerted when an agent needs approval without having to watch every window.
- **Tags:** `[Workflow]`, `[Advanced]`

---

## Raw Notes

- The presenter frames Claude Code proficiency as a seven-level progression (Level 1: Planning with intent; Level 2: CLAUDE.md personalization; Level 3: Commands/Skills/Hooks; Level 4: MCP integrations; Level 5: GSD framework; Level 6: Multi-agent teams; Level 7: Fully autonomous pipelines). This taxonomy could be useful for structuring a curriculum or presentation.
- The video plugs an external "full Claude Code course" (link in description) and a previous video demonstrating a full SaaS build with the GSD framework. These may be worth sourcing for additional transcript extraction.
- Skills.mp is mentioned as a community skill repository — worth checking for current state and available skill count.
- The presenter notes a preference for curating a small number of focused skills rather than importing large libraries, to maintain clarity about what is being invoked and when.
- "Context rot" is presented as a coined term (not an official Anthropic term) for the degradation in output reliability as context window utilization increases. The 50% reliability loss at ~7,500 words figure should be verified — it is stated as fact but no source is cited.
- The GSD framework is presented as a community/third-party framework, not a native Claude Code feature. The exact repository or installation source is not named in this transcript.
- The RALPH loop is similarly a third-party plugin. Installation via `/plugin install ralph` is mentioned but no URL or repository is cited.
- The presenter uses Airtable as the primary MCP integration example throughout. The workflow shown (read idea → generate post → write back to Airtable) is a clean, concrete demonstration of a closed-loop MCP use case.
- The video repeatedly references "skills MP" (skills.mp) as a community skill marketplace. This may be a specific website or GitHub organization — worth verifying.
- No keyboard shortcuts beyond Shift+Tab (mode cycling) and Ctrl+C (exit) are mentioned.
- The presenter's content creation example (social media posts) is a non-engineering use case, making this video particularly relevant for non-developer audiences exploring Claude Code for marketing/content workflows. `[Front-End]` tag does not apply, but a `[Content/Marketing]` tag would be warranted if such a category existed.
