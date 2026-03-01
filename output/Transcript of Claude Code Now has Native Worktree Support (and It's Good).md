# Claude Code Now has Native Worktree Support (and It's Good)

> **Source:** Transcript of Claude Code Now has Native Worktree Support (and It's Good).md
> **Speaker/Channel:** Unknown (likely a developer-focused YouTube channel)
> **Summary:** This video covers Claude Code's new native Git worktree support, demonstrating how to run multiple Claude agents on separate features or bug fixes in isolated branches simultaneously. It also touches on related recent updates and a known issue with a broken feature flag affecting worktrees post-update.

## Tips & Tricks

### Launch a Worktree with a Random Name Using the -W Flag
- **What:** Run `claude` with the `-W` flag to instantly create a new Git worktree with a Claude-assigned random name.
- **Why it matters:** Eliminates manual worktree setup, letting you immediately isolate work in a new branch without configuration overhead.
- **How:** Run `claude -W` in your project directory. Claude will create and name the worktree automatically.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Specify a Custom Worktree Name After the -W Flag
- **What:** Pass a name after the `-W` flag to give your worktree a meaningful, identifiable name instead of a random one.
- **Why it matters:** Named worktrees are easier to navigate back to and resume later, especially when juggling multiple features simultaneously.
- **How:** Run `claude -W <name>` where `<name>` is your desired worktree identifier.
- **Tags:** `[Workflow]`, `[Config]`

### Work on Multiple Features in Parallel Using Separate Worktrees
- **What:** Spin up individual worktrees for each feature or bug fix so they are developed in completely isolated branches at the same time.
- **Why it matters:** If one feature has a bug, you can push the other completed features without blocking them. This avoids the problem of bundling unrelated changes into a single branch or PR.
- **How:** Run `claude -W <feature-name>` for each feature (e.g., dark-mode, local-storage, edit-todos). Implement each feature independently in its own worktree session.
- **Tags:** `[Workflow]`, `[Advanced]`

### Prerequisite: Git Must Be Initialized with at Least One Commit
- **What:** Native worktree support requires your project to have Git initialized and at least one commit made before you can use the `-W` flag.
- **Why it matters:** Without a git history, Claude Code cannot create branches and worktrees will fail silently or error out.
- **How:** Ensure you have run `git init` and `git commit` at least once in your project before invoking `claude -W`.
- **Tags:** `[Gotcha]`, `[Config]`

### Worktrees Are Stored in the .claude/worktrees Directory
- **What:** Each worktree created by Claude Code is stored under `.claude/worktrees/<name>` inside your project directory, containing its own full set of code files.
- **Why it matters:** Knowing the storage location lets you navigate directly to a worktree's files, inspect them, or reference them outside of Claude Code's UI.
- **How:** Navigate to `.claude/worktrees/<name>` in your project to browse the isolated worktree files.
- **Tags:** `[Config]`, `[Workflow]`

### Navigate to a Worktree Directory Using the --tmux Flag
- **What:** Pass the `--tmux` (or `-t-max`) flag when creating or opening a worktree to have Claude Code automatically change your terminal's working directory to that worktree.
- **Why it matters:** Without this flag, your shell stays in the original project root. The tmux flag drops you directly into the worktree directory, making file navigation and shell commands immediate.
- **How:** Run `claude -W <name> --tmux` (the exact flag shown is `t-max`). A new split pane will open with the working directory set to the worktree.
- **Tags:** `[Workflow]`, `[Shortcut]`

### Return to a Named Worktree by Specifying Its Name Again
- **What:** If you kept a worktree instead of removing it, you can re-enter it at any time by passing the same name to the `-W` flag.
- **Why it matters:** Worktrees persist between sessions, so you can pause work on a feature and resume exactly where you left off.
- **How:** Run `claude -W <name>` with the same name used originally. Claude Code will open that existing worktree rather than creating a new one.
- **Tags:** `[Workflow]`

### Use Ctrl+W to See All Sessions Across a Project
- **What:** Press `Ctrl+W` inside Claude Code to view a list of all sessions associated with the current project, including those in different worktrees.
- **Why it matters:** Provides a quick overview of all parallel sessions without needing to manually track which branch or worktree each session belongs to.
- **How:** Inside any Claude Code session, press `Ctrl+W` to bring up the session browser.
- **Tags:** `[Shortcut]`, `[Workflow]`
- **Note:** The speaker notes some uncertainty about how Claude determines the "current session" when on the main branch. `[Uncertain]`

### Remove or Keep a Worktree When Done
- **What:** After finishing work in a worktree, Claude Code gives you the option to either remove it from your system or keep it for future reference.
- **Why it matters:** Removing completed worktrees keeps your project directory clean. Keeping them allows you to return to a specific state or branch later.
- **How:** When exiting a worktree session, Claude Code prompts you to keep or remove it. Choose accordingly based on whether the work is finalized.
- **Tags:** `[Workflow]`

### Use Sub-Agents Across Multiple Worktrees in a Single Session
- **What:** Claude Code's worktrees support sub-agents, meaning you can have different sub-agents each working on separate features in separate branches, all coordinated from a single parent Claude Code session.
- **Why it matters:** This multiplies parallel throughput — one session can drive multiple independent workstreams simultaneously without any manual branch management.
- **How:** Start a Claude Code session and instruct it to use sub-agents per feature; each sub-agent will automatically operate in its own isolated worktree.
- **Tags:** `[Workflow]`, `[Advanced]`

### Enable Automatic Worktree Isolation in Custom Sub-Agents via Front Matter
- **What:** Add `isolation: worktree` to the front matter of a custom sub-agent definition to make Claude automatically spin up a dedicated worktree whenever that sub-agent is invoked.
- **Why it matters:** Removes the need to manually manage worktree creation for custom sub-agent workflows — isolation is handled transparently by Claude Code.
- **How:** In your custom sub-agent configuration file, add `isolation: worktree` in the front matter section. Claude Code will handle worktree creation on each invocation.
- **Tags:** `[Config]`, `[Advanced]`

### Use Worktree Hooks to Support Non-Git Version Control Systems
- **What:** New worktree hooks allow worktree-style isolation to be used with version control systems other than Git, such as SVN or Jujutsu (jj).
- **Why it matters:** Teams not using Git can still benefit from agent isolation workflows without being locked out of the native worktree feature.
- **How:** Configure worktree hooks in your Claude Code settings to map to your VCS's branching or isolation commands. (Exact configuration syntax not detailed in the transcript.) `[Uncertain]`
- **Tags:** `[Config]`, `[Advanced]`

### Use Worktree Hooks to Run Scripts Automatically on Worktree Creation
- **What:** Worktree hooks can also be configured to automatically run scripts whenever a new worktree is created (e.g., install dependencies, set environment variables).
- **Why it matters:** Ensures each new isolated branch environment is immediately ready to use without manual setup steps after creation.
- **How:** Define hook scripts in your worktree hook configuration. They will execute automatically on each `claude -W` invocation. (Exact syntax not detailed in transcript.) `[Uncertain]`
- **Tags:** `[Config]`, `[Workflow]`, `[Advanced]`

### Fix a Broken Worktree Feature Flag by Having Claude Code Fix Its Own Binary
- **What:** Following a recent Claude Code update, many users reported worktrees failing due to a broken feature flag. As a temporary workaround, you can prompt Claude Code to fix its own binary.
- **Why it matters:** Unblocks users from using the native worktree feature while waiting for an official patch from the Anthropic team.
- **How:** Ask Claude Code directly to fix the feature flag issue in its own binary. The speaker does not provide exact steps but confirms this works as a stopgap. `[Uncertain]`
- **Tags:** `[Gotcha]`, `[Advanced]`

## Raw Notes

- The video opens by listing several other recent Claude Code updates alongside the worktree feature: Claude Desktop SSH support, app previews, GitHub integration, and a "simple mode" in the terminal that surfaces skills, plugins, and custom tools for basic tasks. These are mentioned but not detailed with actionable tips.
- The speaker explicitly states they had not used worktrees before this feature because the manual setup added too much mental overhead — suggesting the primary value of native support is ergonomic, not just technical.
- The demo project used is a simple React to-do app, built purely for testing. The three features used as examples are: dark mode toggle, local storage persistence, and the ability to edit to-dos. This gives a concrete mental model for when to reach for worktrees (parallel, independent features).
- The speaker notes that without worktrees, bundling multiple features into one prompt means a bug in one feature can block releasing the others — a practical argument for worktree-per-feature development discipline.
- The broken feature flag issue is presented as a significant problem affecting "a lot of people" post-update. The speaker frames the native feature as impressive but acknowledges the rollout was rocky.
- A promotional mention of "React Doctor" (a CLI tool for detecting React anti-patterns by a creator named "Andress") appears at the end of the transcript. This is not related to Claude Code.
- The speaker expresses genuine enthusiasm for worktrees and states they intend to use the feature more going forward — suggesting this is a workflow-changing addition for developers who manage multiple parallel features.
