# Claude Code Skills Are Broken (Beginner to Pro)

> **Source:** Transcript of Claude Code Skills Are Broken (Beginner to Pro).md
> **Speaker/Channel:** Unknown (AI automation / Claude Code content creator with a YouTube channel and school community)
> **Summary:** A comprehensive beginner-to-pro walkthrough of Claude Code "skills" — reusable, markdown-based instruction sets that act as SOPs for AI agents. The video covers what skills are, how they work under the hood, how to build them using a six-step framework, and how to iteratively improve them toward production quality.

## Tips & Tricks

### Skills Are Reusable Markdown-Based SOPs for Claude Code
- **What:** A Claude Code "skill" is a markdown file (skill.md) stored in a folder, typically at `.claude/skills/<skill-name>/skill.md`. It contains a name, description, and step-by-step workflow instructions that Claude reads and follows when the skill is invoked.
- **Why it matters:** Writing a process once as a skill allows you, your team, or any agent to repeat that process consistently without re-prompting each time. It eliminates reliance on memory and reduces variation in output quality.
- **How:** Create the directory `.claude/skills/<skill-name>/`, add a `skill.md` file with YAML front matter (name, description) and a step-by-step workflow in Markdown. Claude will discover and invoke this skill when the context matches.
- **Tags:** `[Config]`, `[Workflow]`

### YAML Front Matter Tells Claude What a Skill Is and When to Use It
- **What:** The top section of a `skill.md` file uses YAML front matter (between `---` delimiters) to define the skill's `name` and `description`. These two fields are the minimum required.
- **Why it matters:** Claude reads only the YAML front matter during the initial search phase (roughly 100 tokens), so a clear and specific description is critical for Claude to correctly identify and invoke the right skill.
- **How:** At the top of `skill.md`, write:
  ```yaml
  ---
  name: excalidraw-diagram
  description: Creates an Excalidraw diagram when asked to visualize a concept or relationship
  ---
  ```
- **Tags:** `[Config]`

### Progressive Context Loading Keeps Token Usage Efficient
- **What:** Claude Code loads skill content in three progressive levels: (1) only the YAML front matter (~100 tokens) to identify matching skills, (2) the full `skill.md` (~1,000–2,000 tokens) once a skill is identified as the right match, and (3) supporting reference files or scripts only if the specific request requires them.
- **Why it matters:** Without this layered loading, scanning many skill files in full on every request would consume enormous context and slow down responses. Progressive loading keeps overhead minimal.
- **How:** Structure your skill so the YAML front matter is descriptive enough to trigger selection, and keep heavy data (brand assets, JSON, scripts) in separate referenced files rather than inline in the skill.md.
- **Tags:** `[Performance]`, `[Config]`, `[Advanced]`

### Keep skill.md Under 500 Lines; Move Detail to Reference Files
- **What:** Claude Code documentation recommends keeping `skill.md` under 500 lines. Detailed reference material — documentation, data, brand assets, API specs — should be moved to separate files and pointed to within the skill.
- **Why it matters:** A bloated `skill.md` slows the loading of Level 2 context and increases token costs on every invocation of the skill, even when not all detail is needed.
- **How:** In the `skill.md`, add a reference like `For full API parameters, see ./references/api-reference.md`. Store the actual content in that file so it is only loaded when explicitly needed (Level 3).
- **Tags:** `[Performance]`, `[Config]`

### Two Options for Organizing Supporting Files: Self-Contained vs. Separate
- **What:** Supporting files (scripts, reference docs, brand assets) can either live nested directly under the skill folder (`.claude/skills/<skill-name>/references/`, `.claude/skills/<skill-name>/scripts/`) or anywhere else in the project. What matters is that the path referenced in `skill.md` is correct.
- **Why it matters:** Gives flexibility in project organization. Large shared assets (e.g., a YouTube channel data file) do not need to be duplicated across multiple skills if you reference a shared path.
- **How:** In `skill.md`, use relative or absolute paths to reference files: `See /references/youtube-channel.md for channel context`. Claude will resolve and load the file from that path.
- **Tags:** `[Config]`, `[Workflow]`

### Trigger Skills Either by Slash Command or Natural Language
- **What:** Skills can be invoked explicitly via a slash command (e.g., `/excalidraw-diagram`) or implicitly through natural language (e.g., "create me an Excalidraw diagram of X"). Both methods work.
- **Why it matters:** Slash commands are precise and predictable; natural language is more flexible and accessible to non-technical users or team members who may not know skill names.
- **How:** Use the slash command for speed and certainty. Use natural language when you want Claude to figure out which skill to apply based on context.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Control Invocation Mode via Front Matter (Model Invocation Toggle)
- **What:** In the YAML front matter, you can configure whether a skill is triggered by natural language only, by slash command only, or by both. This is the "disable model invocation" flag in Claude Code docs.
- **Why it matters:** If a skill is triggering too often (false positives from natural language), restricting it to slash-command-only invocation gives you precise control. Conversely, if it is not triggering enough, ensure model invocation is enabled.
- **How:** Add the appropriate flag to the YAML front matter. Refer to the Claude Code documentation's "skills" section for the exact syntax.
- **Tags:** `[Config]`, `[Advanced]`

### Additional Front Matter Options: Allowed Tools, Model, Context, Hooks, Agent
- **What:** Beyond `name` and `description`, the YAML front matter supports additional fields: `allowed-tools` (restrict which tools the skill can use), a specific `model` to invoke, `context` hints, `hooks`, and a designated `agent`.
- **Why it matters:** These fields let you fine-tune exactly how a skill executes — for example, running a lightweight model for a simple formatting skill, or restricting an expensive skill from making arbitrary API calls.
- **How:** Consult the Claude Code documentation's front matter reference section for the full list of supported fields and syntax. Start simple and add these only after running the skill multiple times.
- **Tags:** `[Config]`, `[Advanced]`

### Build Skills Through Collaborative Iteration, Not Up-Front Perfection
- **What:** The recommended method for building a skill is to do the task manually with Claude Code first, walking it through the steps interactively. Once it has completed the task successfully, tell Claude to turn that session into a skill and ask clarifying questions.
- **Why it matters:** You will never write a perfect skill on the first attempt. Starting from a real interaction ensures the skill captures the actual steps, edge cases, and context you genuinely need.
- **How:** Work through a task with Claude. At the end say: "This is something I do regularly. Let's turn this into a skill. Ask me whatever questions you need to build it well."
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Use the Feedback Cycle to Continuously Improve Skills
- **What:** After a skill is created, invoke it, watch the agent work in real time, give targeted feedback on what was wrong or suboptimal, let the agent update the skill, and repeat. After 10–30 runs of this cycle, the skill output becomes highly reliable and polished.
- **Why it matters:** Skills are living documents. Output that feels "AI-generated" on run 1 becomes indistinguishable from expert work after repeated refinement cycles. Watching the agent live is how you identify inefficiencies.
- **How:** Run the skill. Observe every step. Note what took too long, what used too many tokens, what output was wrong. Give specific feedback: "The logo should be overlaid with a transparent background." Let Claude update the skill file. Repeat.
- **Tags:** `[Workflow]`

### Watch the Agent Work Early On to Find Token and Time Inefficiencies
- **What:** When first testing a new skill, sit and observe every step the agent takes rather than switching away and checking results later. This reveals unnecessary API calls, redundant searches, or slow lookups that can be hardcoded or optimized.
- **Why it matters:** Early observation surfaces concrete optimization opportunities. Once identified, you can bake fixes directly into the skill (e.g., hardcoding IDs, adding reference files) so future runs are faster and cheaper.
- **How:** Let the skill run while you watch. Identify any step where the agent searches for or fetches something that is always the same. Hardcode that value directly in `skill.md` or a reference file to skip the lookup on future runs.
- **Tags:** `[Performance]`, `[Workflow]`

### Hardcode Static Values Directly in the Skill to Avoid Repeated API Calls
- **What:** If a skill repeatedly calls an external API (e.g., ClickUp) to look up data that never changes (e.g., list IDs), hardcode those values directly into `skill.md` instead of fetching them dynamically every time.
- **Why it matters:** Dynamic lookups consume tokens and time on every invocation. Hardcoding static values eliminates unnecessary tool calls and speeds up execution significantly.
- **How:** Observe the skill calling the API to retrieve, say, a project list ID. Copy that ID. Add it directly to the skill instructions: `Use ClickUp list ID 12345678 for Project X.` Remove the lookup step.
- **Tags:** `[Performance]`, `[Advanced]`

### Delegate Heavy Context Work to Specialized Sub-Agents Within a Skill
- **What:** A skill can instruct the main agent to delegate expensive search or data-gathering tasks to a specialized sub-agent. The sub-agent handles the heavy lifting and returns only the needed result, protecting the main agent's context window.
- **Why it matters:** Searching and parsing large data sources (e.g., all ClickUp tasks) inside the main agent's context is expensive and slow. Offloading to a sub-agent keeps the main context clean and the overall skill faster.
- **How:** In `skill.md`, include an instruction such as: `Delegate the following ClickUp search to the clickup-searcher agent: [query]. Use only the result it returns.`
- **Tags:** `[Performance]`, `[Advanced]`, `[Workflow]`

### Pre-Scrape Documentation into a Reference Markdown File to Avoid Web Searches
- **What:** If a skill regularly needs to consult external documentation (e.g., Claude Code docs), scrape that documentation once and save it as a local markdown reference file. Point the skill to that file instead of performing a live web search each time.
- **Why it matters:** Processing a local markdown file is dramatically faster and cheaper than making HTTP requests, crawling web pages, and parsing large amounts of HTML or tokens from search results.
- **How:** Scrape the relevant documentation page. Save it as `references/docs-reference.md`. In `skill.md`, add: `For reference on X, see ./references/docs-reference.md.`
- **Tags:** `[Performance]`, `[Advanced]`

### Use a Skill Builder Skill to Scaffold New Skills Interactively
- **What:** A "skill builder" skill is a meta-skill that interviews you with targeted questions (what problem, what output, step-by-step process, reference files needed, rules, etc.) and then generates all the necessary files for a new skill automatically.
- **Why it matters:** Building skills from scratch can be daunting. A skill builder lowers the barrier by turning skill creation into a guided conversation and auto-generating the folder structure, `skill.md`, and reference files.
- **How:** Install the skill builder skill (available for free in the speaker's school community). Invoke it: "Let's run the skill builder to create a new skill." Answer the questions. Review and refine the generated output.
- **Tags:** `[Workflow]`, `[Config]`

### The Six-Step Skill Building Framework
- **What:** When designing a skill from scratch, work through six components: (1) Name and trigger, (2) Goal — one-sentence output statement, (3) Step-by-step process — exact manual steps in order, (4) Reference files — brand assets, context docs, style guides, (5) Rules — guardrails for what could go wrong, (6) Self-improvement loop — plan for testing and iterating.
- **Why it matters:** Having a structured framework prevents common omissions (missing context files, vague steps, no guardrails) that cause skill failures.
- **How:** Before writing any markdown, answer each of the six questions on paper or in a prompt. Use those answers to draft `skill.md`. Then iterate.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Add Rules to Prevent Recurring Mistakes
- **What:** If a skill produces the same wrong output repeatedly (e.g., using em-dashes when you don't want them, wrong aspect ratio, wrong logo placement), add an explicit rule to the skill to prohibit that behavior.
- **Why it matters:** Recurring mistakes mean the skill's instructions are ambiguous or incomplete on that point. An explicit rule eliminates ambiguity and prevents the agent from re-making the same error.
- **How:** Add a rules section to `skill.md`: `Rules: Never use em-dashes. Always output images at 1:1 aspect ratio. The logo must appear in the top-left corner with a transparent background.`
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Debugging Guide: Match Symptoms to Fixes
- **What:** A structured set of skill failure symptoms and their corresponding fixes: wrong steps or wrong order → edit `skill.md` instructions; missing tone/style/context → add reference files and ensure they are correctly pointed to; same mistake recurring → add a rule; tool/MCP struggles or repeated searches → create a reference doc; skill not triggering → check YAML and make description more specific; skill triggering too often → disable model invocation.
- **Why it matters:** Knowing which fix addresses which symptom avoids trial-and-error debugging and gets skills to production quality faster.
- **How:** Diagnose the symptom category, then apply the specific fix listed above.
- **Tags:** `[Gotcha]`, `[Workflow]`

### Run Skills in Parallel Across Multiple Agent Windows
- **What:** You can open multiple Claude Code agent sessions simultaneously and invoke different skills in each one. All agents run in parallel, completing their tasks concurrently.
- **Why it matters:** Parallel execution multiplies your effective output. Four tasks that would each take 15 minutes sequentially can all complete in ~15 minutes when run in parallel across four agents.
- **How:** Open multiple agent windows (e.g., in VS Code terminals or separate Claude Code sessions). Issue a different skill invocation in each one. Come back when all are done.
- **Tags:** `[Workflow]`, `[Advanced]`

### Skills Can Run Scripts, Call APIs, Spawn Sub-Agents, and Create Files
- **What:** Claude Code skills are not limited to text generation. They can execute scripts (Python, JS, etc.), make API calls, create files and folders, invoke sub-agents, and be called by other agents.
- **Why it matters:** This makes skills equivalent to fully automated workflows, not just prompt templates. The same skill that generates a LinkedIn post can also call an API to schedule it.
- **How:** Reference script files in `skill.md` and instruct the agent when to execute them: `Run the script at ./scripts/analyze-youtube.py and use the output to inform your analysis.`
- **Tags:** `[Advanced]`, `[Workflow]`

### Project-Level vs. Global Skills
- **What:** Skills stored in `.claude/skills/` within a project are only available in that project. Skills stored in the home directory's equivalent `.claude/skills/` folder (indicated by `~`) are globally available across all Claude Code projects.
- **Why it matters:** Some skills (e.g., a front-end design skill, or company tone-of-voice skill) are useful regardless of which project you are working in. Installing them globally means you never have to copy them between projects.
- **How:** To install a skill globally, place it in `~/.claude/skills/<skill-name>/skill.md` instead of inside a specific project's `.claude/` directory.
- **Tags:** `[Config]`, `[Workflow]`

### Build Skills for Anything You Do Repetitively — Even Simple Ones
- **What:** You do not need a complex use case to justify building a skill. If you find yourself repeating a prompt or a workflow, even a simple 50-line markdown file is worth creating.
- **Why it matters:** Even small skills eliminate repetitive prompting, ensure consistency, and can be reused by teammates. The cost of creating a simple skill is low; the compounding benefit over hundreds of future invocations is high.
- **How:** Notice any time you repeat a prompt or walk Claude through the same steps. Stop and say: "Let's turn this into a skill." Even one-step "apply my style preferences" skills are valid.
- **Tags:** `[Workflow]`

### Check the YAML Front Matter When a Skill Fails to Trigger
- **What:** If a skill is not being invoked when you expect it to be, the most common cause is that the `name` or `description` in the YAML front matter is too vague or does not match the natural language patterns you are using.
- **Why it matters:** Claude selects skills based only on the front matter during the initial scan. A generic description like "helps with content" will not reliably match specific requests.
- **How:** Make the `description` more specific and include the natural language phrases that should trigger it. Test by phrasing your request to explicitly match that description.
- **Tags:** `[Gotcha]`, `[Config]`

### Skills Are Portable Across AI Tools (Cursor, Codex, etc.)
- **What:** Because skills are fundamentally just markdown files with structured prompts, they can be used with other AI coding tools beyond Claude Code — including Cursor, Codex, and others.
- **Why it matters:** Skills you build are not locked into one platform. You get reuse across your entire AI toolchain.
- **How:** Copy the `skill.md` content and adapt it slightly if needed for the target tool's prompt format. The core workflow instructions remain valid regardless of the underlying model.
- **Tags:** `[Workflow]`, `[Advanced]`

### Be Cautious When Downloading Third-Party Skills
- **What:** When downloading skills from community libraries or marketplaces, review the skill.md content carefully before installing and running it.
- **Why it matters:** A malicious skill could include instructions that cause unintended or harmful actions (data exfiltration, destructive file operations, unauthorized API calls). Skills execute with real agent capabilities.
- **How:** Before installing any third-party skill, read the full `skill.md` and all referenced scripts. Do not run skills from untrusted sources without review.
- **Tags:** `[Gotcha]`, `[Workflow]`

### Use an Official Anthropic Skills Library and Community as a Starting Point
- **What:** Anthropic maintains an official library of Claude Code skills. There is also a community of open-source skills and a marketplace for sharing and downloading skills built by others.
- **Why it matters:** You do not need to build every skill from scratch. Downloading a community skill and adapting it to your context is faster and exposes you to patterns you might not have thought of.
- **How:** Browse the Anthropic official skills library and community skill repositories. Download relevant skills, read them, and customize them with your own context, tone, and reference files before running.
- **Tags:** `[Workflow]`, `[Config]`

### Set Up Claude Code in VS Code via the Extension
- **What:** Claude Code can be used inside Visual Studio Code by installing the Claude Code extension from the Extensions panel, then logging in with a paid Anthropic subscription.
- **Why it matters:** VS Code integration provides a familiar IDE environment alongside Claude Code, allowing you to view and edit skill files, run agents in terminals, and see generated outputs all in one place.
- **How:** Open VS Code → Extensions (left sidebar) → search "Claude Code" → Install → Log in with your Anthropic account. Then open a project folder to get started.
- **Tags:** `[Config]`, `[Workflow]`

### Initialize a New Project with the .claude/skills Structure via Prompt
- **What:** In a blank project folder, you can ask Claude Code to initialize the `.claude/skills` directory structure for you with a simple natural language prompt.
- **Why it matters:** Avoids manual folder creation and ensures the correct structure is in place from the start.
- **How:** Open Claude Code in the blank project and type: `Initialize this project with a simple .claude/skills structure.` Claude will create the folders automatically.
- **Tags:** `[Config]`, `[Workflow]`

---

## Raw Notes

- The speaker positions Claude Code skills as equivalent to SOPs for human employees: you write the process once, and both humans and AI agents can follow it. This framing is useful for explaining the concept to non-technical stakeholders.
- The speaker draws a direct parallel between skills and the "WAT framework" (Workflows + Automations + Tools) they covered in previous videos: the W (workflow markdown) maps to the skill.md, and the T (tools/scripts) maps to the reference and script files. Viewers familiar with that framework are told they will pick up skills quickly.
- The speaker runs four agents in parallel in a live demo, completing tasks that include: daily schedule planning (ClickUp integration), a project pulse check, an Excalidraw diagram creation, and YouTube comment analysis — all in about 30 seconds of setup.
- The speaker emphasizes a cultural and economic urgency: teams that cannot leverage AI skills at this speed will become "too slow and too expensive." All employees at the speaker's company are being required to use Claude Code.
- A "monetization" angle is briefly mentioned — selling or sharing skills in a marketplace — but the speaker cautions that this is not yet a reliable business model and compares it to early days of selling Notion/Zapier template packs.
- The speaker uses Key AI's "Nano Banana" for AI image generation within a skill, overlaying logos via a post-processing step rather than prompting the image model to include the logo, in order to maintain consistency. This is a practical front-end/media production pattern. `[Front-End]`
- The feedback loop observation: on run 2 of a freshly built skill, the infographic output was already noticeably better than run 1 after one round of feedback. This matches the general claim that skills improve rapidly over the first 5–10 invocations.
- The speaker's school community (free and paid tiers) is a distribution channel for pre-built skills, including the skill builder skill and various domain-specific skills. Worth monitoring as a resource for community-sourced Claude Code skills.
- The speaker does not go deep on MCP server configuration in this video, but mentions ClickUp MCP as an example integration. Sub-agent delegation patterns for managing context with MCP-heavy workflows are flagged as an advanced topic for future coverage.
- The argument hint, hooks, and agent fields in YAML front matter are mentioned but not demonstrated in this video. The speaker directs viewers to the Claude Code docs for those.
