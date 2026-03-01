# Agent Browser: The CLI That Gives AI Agents Eyes on the Web

> **Source:** Transcript of Agent Browser: The CLI That Gives AI Agents Eyes on the Web.md
> **Speaker/Channel:** Unknown (produced by a YouTube channel focused on AI tooling for builders; references Vercel Labs)
> **Summary:** This video introduces Agent Browser, a CLI tool by Vercel Labs designed to give AI agents efficient browser automation capabilities. It demonstrates how Agent Browser integrates with Claude Code and other AI coding tools via a single setup command and a CLAUDE.md workflow snippet.

## Tips & Tricks

### Install Agent Browser for Claude Code with a single NPX command
- **What:** You can add Agent Browser to your Claude Code setup using one NPX command rather than any manual configuration or boilerplate.
- **Why it matters:** It eliminates setup friction — the skill is installed and kept up to date automatically, so Claude Code can immediately start controlling a browser.
- **How:** Run `npx skills @versallabs/agent-browser` in your terminal. This registers the tool and its commands for use by Claude Code.
- **Tags:** `[Workflow]`, `[Config]`

### Add the Agent Browser workflow to CLAUDE.md (or agents.md)
- **What:** Paste the core Agent Browser workflow — open, snapshot, interact using refs, re-snapshot — directly into your `CLAUDE.md` (or `agents.md`) file.
- **Why it matters:** Baking the workflow into Claude Code's project instructions means the agent has the full browser automation playbook available in every session without needing to rediscover how to use the tool.
- **How:** In your `CLAUDE.md`, document the four-step loop: (1) open a URL, (2) snapshot the page to get labeled interactive element refs, (3) interact using those refs (click, fill, etc.), (4) re-snapshot to verify state. The skill definition stays up to date automatically via the NPX install.
- **Tags:** `[Config]`, `[Workflow]`, `[Prompt Technique]`

### Use the snapshot command to reduce token consumption by ~93%
- **What:** Instead of passing raw HTML to Claude Code (which can exceed 15,000 tokens per page), use Agent Browser's `snapshot` command to get a compact accessibility tree with labeled interactive element refs.
- **Why it matters:** Raw HTML overwhelms the context window with irrelevant markup. The accessibility tree gives the agent only the interactive elements it needs — buttons, inputs, links — each labeled with a short ref like `@E2`.
- **How:** After opening a URL, run `snapshot`. The output lists each interactive element with its ref identifier (e.g., `@E1` heading, `@E2` login button, `@E3` email field). Use these refs in subsequent commands.
- **Tags:** `[Performance]`, `[Workflow]`, `[Advanced]`

### Interact with web elements using ref identifiers, not CSS selectors
- **What:** After snapshotting a page, Claude Code can interact with elements by referencing their assigned ref IDs (e.g., `click @E2`, `fill @E3 with your@email.com`) rather than writing brittle CSS selectors.
- **Why it matters:** CSS selectors break whenever a site updates its markup. Ref-based interaction is generated fresh from each snapshot, making automations resilient to UI changes and eliminating selector maintenance.
- **How:** Run `snapshot` to get current refs, then issue commands like `click @E2` or `fill @E3 with <value>`. Re-run `snapshot` after interactions to get updated refs for the new page state.
- **Tags:** `[Workflow]`, `[Gotcha]`

### Use Agent Browser's screenshot command for verification steps
- **What:** Claude Code can take a screenshot at any point during a browser automation workflow to visually verify the current page state.
- **Why it matters:** Screenshots let the agent confirm that a form was filled correctly, a navigation succeeded, or a UI element appeared as expected — catching errors before proceeding further.
- **How:** Issue the `screenshot` command as a step in the automation flow (e.g., after filling a form and before submitting). The image can be reviewed or passed back to the agent for visual reasoning.
- **Tags:** `[Workflow]`, `[Advanced]`

### Leverage the persistent browser session — no cold starts between commands
- **What:** The Agent Browser daemon auto-starts on the first command and persists between calls within a session. Claude Code does not need to relaunch a browser for each command.
- **Why it matters:** Eliminates cold-start overhead and allows the agent to open a page, do other work, and return to the same browser session later — mirroring how a human would multitask.
- **How:** Simply issue commands sequentially. The Node.js daemon manages the Playwright/Chromium instance in the background over a local socket. No explicit session management is required.
- **Tags:** `[Performance]`, `[Workflow]`

### Use Agent Browser globally installed as a fallback
- **What:** In addition to the NPX skill approach, Agent Browser can be installed globally via npm for direct terminal use.
- **Why it matters:** A global install makes the CLI available in any project or shell context, not just those with the skill configured, which is useful for ad-hoc automation tasks.
- **How:** Run `npm install -g agent-browser`. After installation, browser automation commands are available immediately from any terminal session.
- **Tags:** `[Config]`

### Agent Browser works with Claude Code, Cursor, Codex, Copilot, Gemini, and others
- **What:** Because Agent Browser is a shell-command-based CLI, any AI coding environment that can execute shell commands can use it — not just Claude Code.
- **Why it matters:** Teams using multiple AI tools (e.g., Claude Code for some tasks, Cursor for others) can share the same browser automation layer without tool-specific integrations.
- **How:** Configure the workflow in whichever instruction file the tool uses (e.g., `CLAUDE.md` for Claude Code, `agents.md` for others). The commands and ref system are identical across environments.
- **Tags:** `[Workflow]`, `[Config]`

## Raw Notes

- The video is primarily a promotional explainer for Agent Browser (by Vercel Labs, the team behind Next.js and Turborepo), not a hands-on Claude Code tutorial. Tips about Claude Code integration are real but brief.
- The transcript is auto-generated and contains minor OCR/speech errors (e.g., "Versal" for "Vercel", "claude.mmd" for "CLAUDE.md", "aent" for "agent", "Clot code" for "Claude Code", "Germany CLI" likely for "Gemini CLI"). Tips have been interpreted accordingly and flagged where uncertain.
- The claim of "93% reduction in token usage" is presented as a marketing figure (15,000 tokens of HTML vs. ~5 lines of accessibility tree output). The exact reduction will vary by page complexity. `[Uncertain]`
- The video positions Agent Browser as infrastructure-level tooling for the agentic coding era, arguing that AI agents should browse natively rather than generate Puppeteer scripts.
- A community/course plug is embedded mid-video (unrelated to Claude Code).
- The meta-detail that "the screenshots in this video were taken by Agent Browser itself" is a notable demonstration of the tool's practical maturity.
- No keyboard shortcuts, CLAUDE.md configuration syntax details, or cost figures beyond the token reduction claim are provided in the transcript.
