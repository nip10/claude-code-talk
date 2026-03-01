# Transcript of My top 6 tips & ways of using Claude Code efficiently

> **Source:** Transcript of My top 6 tips & ways of using Claude Code efficiently.md
> **Speaker/Channel:** Maximilian Schwarzmuller (YouTube channel: Maximilian Schwarzmuller)
> **Summary:** The speaker shares his six top strategies for using Claude Code effectively, emphasizing staying in control rather than running autonomous loops, leveraging plan mode, custom agents and skills, explicit prompting, self-verification tools, and writing code yourself when appropriate.

## Tips & Tricks

### Avoid Autonomous AI Loops — Stay in Control

- **What:** Do not run Claude Code in fully autonomous loops (e.g., a bash loop that repeatedly invokes Claude Code to work through a task plan without human oversight). Instead, remain hands-on and review each step.
- **Why it matters:** The speaker tried the "Rolf loop" approach (a workflow where Claude Code autonomously picks and executes steps from a detailed plan document) and found the results unconvincing. Staying in control produces better, more predictable outcomes.
- **How:** Rather than scripting a loop that hands off all decision-making to Claude Code, intervene at each stage, review the plan and output, and guide the next action yourself.
- **Tags:** `[Workflow]`, `[Gotcha]`

### Use Plan Mode to Preview and Edit Before Execution

- **What:** Use Claude Code's built-in plan mode (cycled through with a keyboard shortcut) to make Claude gather information, explore the codebase, and produce a plan before executing any changes. Review and edit that plan before accepting it.
- **Why it matters:** Plan mode prevents Claude from immediately making changes that may be wrong or misaligned with your intent. It also gives you a chance to catch bad prompts early, since Claude may ask clarifying questions or surface assumptions.
- **How:** Cycle to plan mode using the dedicated shortcut in Claude Code. After Claude produces a plan, read it carefully. If you dislike anything, edit the plan text or refine your prompt and ask for a new plan. Only accept the plan once you are satisfied.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Do Not Blindly Accept the Plan — Edit It

- **What:** After Claude Code produces a plan in plan mode, actively edit or tweak it rather than blindly hitting Enter to accept.
- **Why it matters:** Accepting a plan you haven't reviewed and then fixing problems afterward burns extra tokens, wastes time, and makes the AI-assisted workflow harder. Fixing code after the fact is more expensive and less enjoyable than correcting the plan upfront.
- **How:** Read through the full plan Claude produces. If anything is unclear, incorrect, or not what you want, edit the plan text directly or revise your prompt and generate a new plan. Only proceed once you are confident in the plan.
- **Tags:** `[Workflow]`, `[Prompt Technique]`

### Write Good Prompts with Proper Context Engineering

- **What:** Invest effort in writing precise, context-rich prompts rather than relying on plan mode or the AI to compensate for vague instructions.
- **Why it matters:** AI output quality is directly tied to input quality. Imprecise prompts with missing context will produce poor results regardless of other strategies. Plan mode can help save bad prompts, but it is not a substitute for good prompting.
- **How:** Before prompting, think about what context Claude needs: which library, which pattern, which constraints, which agent to use. Include that information explicitly in the prompt rather than hoping Claude infers it.
- **Tags:** `[Prompt Technique]`, `[Workflow]`

### Build Custom Sub-Agents with Dedicated Context Windows

- **What:** Create custom sub-agents within Claude Code that have their own dedicated context windows and are optimized for specific tasks (e.g., a Docs Explorer agent specialized in browsing documentation).
- **Why it matters:** Sub-agents preserve token space in the main context window by offloading specialized work. This prevents running out of context and keeps the main agent focused.
- **How:** Build a sub-agent in Claude Code and give it specific tools (e.g., web search, Context7 MCP) suited to its task. For example, a Docs Explorer agent is given tools for fetching documentation and is invoked explicitly when documentation lookup is needed.
- **Tags:** `[Workflow]`, `[Advanced]`, `[Performance]`

### Use the Context7 MCP for Third-Party Library Documentation

- **What:** Equip a sub-agent (or Claude Code itself) with the Context7 MCP server, which provides AI agents with easier access to documentation for third-party libraries and programming languages.
- **Why it matters:** Without up-to-date documentation access, Claude may implement library integrations incorrectly. Context7 helps ground the AI in accurate, current docs.
- **How:** Install the Context7 MCP server and assign it as a tool to a dedicated Docs Explorer sub-agent. Invoke that agent explicitly in prompts when working with specific libraries.
- **Tags:** `[Config]`, `[Advanced]`

### Be Selective with MCPs — They Can Be Token-Inefficient

- **What:** Do not add many MCP servers by default. Prefer built-in tools and only use MCPs when there is a clear benefit (like Context7 for documentation).
- **Why it matters:** The speaker notes that MCPs tend to be token-inefficient and that AI is not always good at using them effectively. Overloading Claude with too many tools can degrade performance and increase cost.
- **How:** Audit which MCPs you actually need. Add only those that provide demonstrable value. The speaker specifically endorses Context7 but is otherwise cautious about MCP usage.
- **Tags:** `[Performance]`, `[Config]`, `[Gotcha]`

### Use Skills to Encode Project-Specific Best Practices

- **What:** Add skill files to your Claude Code project that describe framework-specific best practices, patterns, and personal preferences you want Claude to follow.
- **Why it matters:** Skills provide Claude with extra context and instructions that increase the likelihood of getting output aligned with your standards (e.g., Next.js code written the way you prefer). They are lazily loaded — only brought into context when relevant — so they do not waste tokens constantly.
- **How:** Create skill files for your project (e.g., a Next.js best practices skill). You can write your own based on your experience or use open-source skill collections (e.g., Vercel's React best practices skills). Claude reads the relevant skill file when it needs to perform a related task.
- **Tags:** `[Config]`, `[Workflow]`

### Use Open-Source Skill Collections as a Starting Point

- **What:** Use publicly available, open-source skill files (e.g., Vercel's React best practices skills) as a foundation, then customize them with your own preferences.
- **Why it matters:** Open-source skills reduce the time needed to set up a project with good AI guardrails and encode community best practices.
- **How:** Find an open-source skill initiative (the speaker mentions Vercel's skills for React), install or copy the skill files into your project, then layer on your own customizations and rules.
- **Tags:** `[Config]`, `[Workflow]`

### Be Explicit Rather Than Implicit in Prompts

- **What:** If you want Claude to do something specific — use a particular agent, consult documentation before implementing, or follow a specific approach — say so explicitly in the prompt rather than hoping Claude will infer it.
- **Why it matters:** Claude may have access to tools like a Docs Explorer agent but will not always use them unprompted. Being explicit prevents wasted effort and results misaligned with your expectations.
- **How:** When writing a prompt, include direct instructions for any tools or sub-agents you want Claude to use. For example: "Use the Docs Explorer agent to look up the BetterAuth documentation before implementing Google authentication." Do not assume Claude will choose to do this on its own.
- **Tags:** `[Prompt Technique]`, `[Workflow]`

### Review AI-Generated Code Critically — Do Not Blindly Trust It

- **What:** Always carefully review the code Claude generates. Evaluate it critically, accept what is good, and actively improve or reject what does not meet your standards — including code that works but uses patterns you dislike.
- **Why it matters:** AI output is probabilistic and not guaranteed to be correct or aligned with your preferences. The developer remains responsible for the code, regardless of who or what generated it.
- **How:** After Claude produces output, read through the code. Ask yourself whether the logic is correct, whether the patterns match your preferences, and whether there are any edge cases missed. Do not ship code you have not understood.
- **Tags:** `[Workflow]`, `[Gotcha]`

### Give Claude Tools for Self-Verification (Tests, Linting)

- **What:** Provide Claude with tools it can use to verify its own output — such as the ability to run unit tests, end-to-end tests, and linting commands.
- **Why it matters:** Self-verification tools give Claude a feedback loop that can significantly improve the quality of its output. Claude can catch its own errors before you review the result.
- **How:** Configure Claude Code with access to your test runner and linting commands. Optionally instruct Claude explicitly (using the explicit-over-implicit principle) to run tests and linting after making changes.
- **Tags:** `[Workflow]`, `[Advanced]`

### Be Aware That Claude May Write Tests to Match Its Code (Not the Other Way Around)

- **What:** When Claude writes tests as part of its self-verification, watch for cases where it adjusts the tests to make them pass rather than fixing the underlying code to meet the original requirements.
- **Why it matters:** This is a subtle but important failure mode. Tests passing does not necessarily mean the code is correct if Claude manipulated the tests to pass.
- **How:** After Claude runs and passes its own tests, review the tests themselves — not just the code. Confirm that the tests are actually asserting the right things and were not silently weakened to accommodate bad code.
- **Tags:** `[Gotcha]`, `[Workflow]`

### Use Playwright MCP for Browser-Based Self-Verification — But Sparingly

- **What:** The Playwright MCP can give Claude the ability to interact with a browser to verify UI-level behavior. However, use it selectively because it is token-heavy.
- **Why it matters:** Browser-based verification can catch UI bugs that tests miss, but the token cost is significant. Indiscriminate use will drain your token budget quickly.
- **How:** Add the Playwright MCP to your Claude Code setup. Invoke it only for specific verification tasks where browser interaction is genuinely needed. Be aware of the token cost and factor it into your usage decisions.
- **Tags:** `[Advanced]`, `[Performance]`, `[Gotcha]`

### Write Code Yourself for Trivial Changes

- **What:** Do not delegate trivial code changes to Claude Code. If a change is small and straightforward (e.g., adjusting a CSS margin), make it yourself.
- **Why it matters:** Using Claude for trivial tasks wastes tokens (which cost money) and adds unnecessary overhead. Writing code yourself for simple things keeps you engaged with the codebase and is faster.
- **How:** Develop a personal threshold for what is worth delegating to Claude. Simple styling tweaks, minor config changes, and one-line fixes are often faster to do manually, especially with modern autocomplete in editors like Cursor or VS Code.
- **Tags:** `[Workflow]`, `[Performance]`

### Maintain Deep Understanding of Your Codebase

- **What:** Always ensure you understand the code Claude generates and that you can navigate and modify the codebase yourself. Do not let AI usage erode your comprehension of the project.
- **Why it matters:** The speaker admits he fell into the trap of handing off too much work and losing familiarity with his own codebase. Losing that understanding makes it harder to review AI output, catch mistakes, and jump in when needed.
- **How:** Regularly read through AI-generated code rather than just checking that it works. Maintain the habit of writing some code yourself. Keep the codebase mentally navigable so you can always step back in.
- **Tags:** `[Workflow]`, `[Gotcha]`

### Use the Claude Code Max Plan for Heavy Usage

- **What:** The Max Plan for Claude Code provides 20x the token usage compared to lower plans, making it practical for sustained, intensive use without running out of quota.
- **Why it matters:** For developers using Claude Code regularly across multiple projects, the standard usage limits can be restrictive. The Max Plan removes that constraint and is described as heavily subsidized by Anthropic.
- **How:** Subscribe to the Max Plan if you are using Claude Code heavily and finding yourself limited by standard quotas.
- **Tags:** `[Performance]`, `[Config]`

## Raw Notes

- The speaker is building projects including "Build My Graphics" and several unlaunched projects, plus internal tools — all using Claude Code but not for live coding. This gives context for the use-case: async, task-based development rather than real-time pair programming.
- The speaker is notably skeptical of the "vibe coding" / autonomous AI coding trend. He frames Claude Code as a tool that amplifies developer skill, not a replacement for it. This is a philosophical position worth noting for synthesis.
- The "Rolf Wiggum" loop mentioned refers to a well-known workflow pattern where a detailed product requirements document is fed to Claude Code in a bash loop, with Claude autonomously picking and executing steps. The speaker tried it and found results unconvincing.
- There is a recurring theme throughout: increasing the probability of good output vs. guaranteeing it. The speaker repeatedly acknowledges AI is non-deterministic and frames all tips as probability-raising strategies.
- The speaker promotes his own Claude Code course throughout the video, with a discount link in the description. The course covers custom agents, skills, prompting, and context engineering in more depth.
- The speaker identifies himself as a developer who enjoys coding and sees AI as a tool that makes coding more efficient — not as a replacement for the craft. He explicitly says "coding is fun" and advocates for maintaining coding skills alongside AI usage.
- The mention of Cursor and VS Code autocomplete ("great auto in Cursor or VS Code") implies the speaker uses these editors alongside Claude Code, treating them as complementary tools.
- The distinction between plan mode saving bad prompts vs. being a crutch is nuanced — the speaker endorses plan mode strongly but still says good prompts are necessary and should not be skipped.
