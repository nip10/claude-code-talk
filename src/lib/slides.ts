import type { ComponentType } from "react";

import Slide01Title from "@/content/slides/01-title.mdx";
import Slide02GettingStarted from "@/content/slides/02-section-getting-started.mdx";
import Slide03ClaudeMd from "@/content/slides/03-tip-claude-md.mdx";
import Slide04SlashCommands from "@/content/slides/04-tip-slash-commands.mdx";
import Slide05Workflow from "@/content/slides/05-section-workflow.mdx";
import Slide06Subagents from "@/content/slides/06-tip-subagents.mdx";
import Slide07KeyboardShortcuts from "@/content/slides/07-tip-keyboard-shortcuts.mdx";
import Slide08Advanced from "@/content/slides/08-section-advanced.mdx";
import Slide09CustomTools from "@/content/slides/09-tip-custom-tools.mdx";
import Slide10Closing from "@/content/slides/10-closing.mdx";
import Slide11ChoosingMechanism from "@/content/slides/11-section-choosing-mechanism.mdx";
import Slide12MechanismComparison from "@/content/slides/12-overview-mechanism-comparison.mdx";
import Slide13MechanismClaudeMd from "@/content/slides/13-mechanism-claude-md.mdx";
import Slide14MechanismCommands from "@/content/slides/14-mechanism-commands.mdx";
import Slide15MechanismSkills from "@/content/slides/15-mechanism-skills.mdx";
import Slide16MechanismHooks from "@/content/slides/16-mechanism-hooks.mdx";
import GeneratedTip001 from "@/content/slides/tips/tip-001.mdx";
import GeneratedTip002 from "@/content/slides/tips/tip-002.mdx";
import GeneratedTip003 from "@/content/slides/tips/tip-003.mdx";
import GeneratedTip004 from "@/content/slides/tips/tip-004.mdx";
import GeneratedTip005 from "@/content/slides/tips/tip-005.mdx";
import GeneratedTip006 from "@/content/slides/tips/tip-006.mdx";
import GeneratedTip007 from "@/content/slides/tips/tip-007.mdx";
import GeneratedTip008 from "@/content/slides/tips/tip-008.mdx";
import GeneratedTip009 from "@/content/slides/tips/tip-009.mdx";
import GeneratedTip010 from "@/content/slides/tips/tip-010.mdx";
import GeneratedTip011 from "@/content/slides/tips/tip-011.mdx";
import GeneratedTip012 from "@/content/slides/tips/tip-012.mdx";
import GeneratedTip013 from "@/content/slides/tips/tip-013.mdx";
import GeneratedTip014 from "@/content/slides/tips/tip-014.mdx";
import GeneratedTip015 from "@/content/slides/tips/tip-015.mdx";
import GeneratedTip016 from "@/content/slides/tips/tip-016.mdx";
import GeneratedTip017 from "@/content/slides/tips/tip-017.mdx";
import GeneratedTip018 from "@/content/slides/tips/tip-018.mdx";
import GeneratedTip019 from "@/content/slides/tips/tip-019.mdx";
import GeneratedTip020 from "@/content/slides/tips/tip-020.mdx";
import GeneratedTip021 from "@/content/slides/tips/tip-021.mdx";
import GeneratedTip022 from "@/content/slides/tips/tip-022.mdx";
import GeneratedTip023 from "@/content/slides/tips/tip-023.mdx";
import GeneratedTip024 from "@/content/slides/tips/tip-024.mdx";
import GeneratedTip025 from "@/content/slides/tips/tip-025.mdx";
import GeneratedTip026 from "@/content/slides/tips/tip-026.mdx";
import GeneratedTip027 from "@/content/slides/tips/tip-027.mdx";
import GeneratedTip028 from "@/content/slides/tips/tip-028.mdx";
import GeneratedTip029 from "@/content/slides/tips/tip-029.mdx";
import GeneratedTip030 from "@/content/slides/tips/tip-030.mdx";
import GeneratedTip031 from "@/content/slides/tips/tip-031.mdx";
import GeneratedTip032 from "@/content/slides/tips/tip-032.mdx";
import GeneratedTip033 from "@/content/slides/tips/tip-033.mdx";
import GeneratedTip034 from "@/content/slides/tips/tip-034.mdx";
import GeneratedTip035 from "@/content/slides/tips/tip-035.mdx";
import GeneratedTip036 from "@/content/slides/tips/tip-036.mdx";
import GeneratedTip037 from "@/content/slides/tips/tip-037.mdx";
import GeneratedTip038 from "@/content/slides/tips/tip-038.mdx";
import GeneratedTip039 from "@/content/slides/tips/tip-039.mdx";
import GeneratedTip040 from "@/content/slides/tips/tip-040.mdx";
import GeneratedTip041 from "@/content/slides/tips/tip-041.mdx";
import GeneratedTip042 from "@/content/slides/tips/tip-042.mdx";
import GeneratedTip043 from "@/content/slides/tips/tip-043.mdx";
import GeneratedTip044 from "@/content/slides/tips/tip-044.mdx";
import GeneratedTip045 from "@/content/slides/tips/tip-045.mdx";
import GeneratedTip046 from "@/content/slides/tips/tip-046.mdx";
import GeneratedTip047 from "@/content/slides/tips/tip-047.mdx";
import GeneratedTip048 from "@/content/slides/tips/tip-048.mdx";
import GeneratedTip049 from "@/content/slides/tips/tip-049.mdx";
import GeneratedTip050 from "@/content/slides/tips/tip-050.mdx";
import GeneratedTip051 from "@/content/slides/tips/tip-051.mdx";
import GeneratedTip052 from "@/content/slides/tips/tip-052.mdx";
import GeneratedTip053 from "@/content/slides/tips/tip-053.mdx";
import GeneratedTip054 from "@/content/slides/tips/tip-054.mdx";
import GeneratedTip055 from "@/content/slides/tips/tip-055.mdx";
import GeneratedTip056 from "@/content/slides/tips/tip-056.mdx";
import GeneratedTip057 from "@/content/slides/tips/tip-057.mdx";
import GeneratedTip058 from "@/content/slides/tips/tip-058.mdx";
import GeneratedTip059 from "@/content/slides/tips/tip-059.mdx";
import GeneratedTip060 from "@/content/slides/tips/tip-060.mdx";
import GeneratedTip061 from "@/content/slides/tips/tip-061.mdx";
import GeneratedTip062 from "@/content/slides/tips/tip-062.mdx";
import GeneratedTip063 from "@/content/slides/tips/tip-063.mdx";
import GeneratedTip064 from "@/content/slides/tips/tip-064.mdx";
import GeneratedTip065 from "@/content/slides/tips/tip-065.mdx";
import GeneratedTip066 from "@/content/slides/tips/tip-066.mdx";
import GeneratedTip067 from "@/content/slides/tips/tip-067.mdx";
import GeneratedTip068 from "@/content/slides/tips/tip-068.mdx";
import GeneratedTip069 from "@/content/slides/tips/tip-069.mdx";
import GeneratedTip070 from "@/content/slides/tips/tip-070.mdx";
import GeneratedTip071 from "@/content/slides/tips/tip-071.mdx";
import GeneratedTip072 from "@/content/slides/tips/tip-072.mdx";
import GeneratedTip073 from "@/content/slides/tips/tip-073.mdx";
import GeneratedTip074 from "@/content/slides/tips/tip-074.mdx";
import GeneratedTip075 from "@/content/slides/tips/tip-075.mdx";
import GeneratedTip076 from "@/content/slides/tips/tip-076.mdx";
import GeneratedTip077 from "@/content/slides/tips/tip-077.mdx";
import GeneratedTip078 from "@/content/slides/tips/tip-078.mdx";
import GeneratedTip079 from "@/content/slides/tips/tip-079.mdx";
import GeneratedTip080 from "@/content/slides/tips/tip-080.mdx";
import GeneratedTip081 from "@/content/slides/tips/tip-081.mdx";
import GeneratedTip082 from "@/content/slides/tips/tip-082.mdx";
import GeneratedTip083 from "@/content/slides/tips/tip-083.mdx";

export interface SlideData {
  slug: string;
  title: string;
  description: string;
  groupTitle: GroupTitle;
  tags: readonly string[];
  sources: readonly string[];
  uncertain?: boolean;
  Component: ComponentType;
}

export interface SlideGroup {
  slug: string;
  title: string;
  description: string;
  slides: readonly SlideData[];
}

const GROUP_ORDER = ["Opening", "Getting Started", "Workflow", "Advanced", "Closing"] as const;
type GroupTitle = (typeof GROUP_ORDER)[number];

const GROUP_DESCRIPTION: Record<GroupTitle, string> = {
  Opening: "Kick-off and framing for the talk.",
  "Getting Started": "Essential setup and first wins with Claude Code.",
  Workflow: "Daily usage patterns that improve speed and consistency.",
  Advanced: "Power-user capabilities for bigger leverage.",
  Closing: "Wrap-up and key takeaways.",
};

const RAW_SLIDES: SlideData[] = [
  {
    slug: "title",
    title: "Claude Code Tips & Tricks",
    description: "Presentation title slide.",
    groupTitle: "Opening",
    tags: [],
    sources: [],
    Component: Slide01Title,
  },
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Essential configuration and setup tips to hit the ground running.",
    groupTitle: "Getting Started",
    tags: [],
    sources: [],
    Component: Slide02GettingStarted,
  },
  {
    slug: "keep-claude-md-concise",
    title: "Keep CLAUDE.md Concise",
    description: "Aim for ~300 lines / 2.5k tokens. Claude reads this file at the start of every task.",
    groupTitle: "Getting Started",
    tags: ["Config", "Performance"],
    sources: [],
    Component: Slide03ClaudeMd,
  },
  {
    slug: "use-slash-commands",
    title: "Use Slash Commands",
    description: "Type / in the prompt to see built-in commands like /compact, /review, and /commit.",
    groupTitle: "Getting Started",
    tags: ["Workflow", "Productivity"],
    sources: [],
    Component: Slide04SlashCommands,
  },
  {
    slug: "workflow",
    title: "Workflow",
    description: "Day-to-day patterns that keep you productive with Claude Code.",
    groupTitle: "Workflow",
    tags: [],
    sources: [],
    Component: Slide05Workflow,
  },
  {
    slug: "leverage-sub-agents",
    title: "Leverage Sub-agents",
    description:
      "Claude can spawn sub-agents to handle research or parallel tasks without cluttering the main context.",
    groupTitle: "Workflow",
    tags: ["Architecture", "Advanced"],
    sources: [],
    Component: Slide06Subagents,
  },
  {
    slug: "keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    description: "Speed up your workflow with these essential shortcuts.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Productivity"],
    sources: [],
    Component: Slide07KeyboardShortcuts,
  },
  {
    slug: "advanced",
    title: "Advanced",
    description: "Power-user techniques to push Claude Code further.",
    groupTitle: "Advanced",
    tags: [],
    sources: [],
    Component: Slide08Advanced,
  },
  {
    slug: "custom-tools-via-mcp",
    title: "Custom Tools via MCP",
    description:
      "Connect Claude Code to external services using the Model Context Protocol (MCP) for custom tool integrations.",
    groupTitle: "Advanced",
    tags: ["MCP", "Extensibility"],
    sources: [],
    Component: Slide09CustomTools,
  },
  {
    slug: "choosing-the-right-mechanism",
    title: "Choosing the Right Mechanism",
    description: "When to use CLAUDE.md, Commands, Skills, and Hooks for the same task.",
    groupTitle: "Advanced",
    tags: ["Mechanisms", "Architecture"],
    sources: [],
    Component: Slide11ChoosingMechanism,
  },
  {
    slug: "mechanism-overview",
    title: "CLAUDE.md vs Commands vs Skills vs Hooks",
    description: "A quick matrix for selecting the right mechanism.",
    groupTitle: "Advanced",
    tags: ["Mechanisms", "Decision Guide"],
    sources: [],
    Component: Slide12MechanismComparison,
  },
  {
    slug: "mechanism-claude-md",
    title: "CLAUDE.md: Persistent Project Context",
    description: "Use CLAUDE.md for stable defaults and repo-wide guidance.",
    groupTitle: "Advanced",
    tags: ["Context", "Foundations"],
    sources: [],
    Component: Slide13MechanismClaudeMd,
  },
  {
    slug: "mechanism-commands",
    title: "Commands: Reusable On-Demand Workflows",
    description: "Use slash commands for repeatable operations you trigger manually.",
    groupTitle: "Advanced",
    tags: ["Workflow", "Commands"],
    sources: [],
    Component: Slide14MechanismCommands,
  },
  {
    slug: "mechanism-skills",
    title: "Skills: Structured Capability Bundles",
    description: "Use skills for specialized multi-step workflows with clear process guidance.",
    groupTitle: "Advanced",
    tags: ["Skills", "Reliability"],
    sources: [],
    Component: Slide15MechanismSkills,
  },
  {
    slug: "mechanism-hooks",
    title: "Hooks: Automatic Guardrails",
    description: "Use hooks for always-on validation and policy checks.",
    groupTitle: "Advanced",
    tags: ["Hooks", "Guardrails"],
    sources: [],
    Component: Slide16MechanismHooks,
  },
  {
    slug: "keep-claude-md-concise-around-300-lines-2-5k-tokens",
    title: "Keep CLAUDE.md Concise — Around 300 Lines / 2.5k Tokens",
    description: "Keep your CLAUDE.md rule file small and focused. Boris Cherny (Claude Code's creator) keeps his at ~2,500 tokens.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Performance]"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder", "Why Most Developers", "HumanLayer"],
    Component: GeneratedTip001,
  },
  {
    slug: "use-claude-md-only-for-always-on-non-negotiable-standards",
    title: "Use CLAUDE.md Only for Always-On, Non-Negotiable Standards",
    description: "CLAUDE.md should contain only rules and standards that apply to every task and every conversation. Move task-specific content to skills.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]", "[Performance]"],
    sources: ["Why Most Developers"],
    Component: GeneratedTip002,
  },
  {
    slug: "include-high-level-architecture-and-domain-context",
    title: "Include High-Level Architecture and Domain Context",
    description: "Add sections covering the project's architecture, domain-specific context, key file paths, design patterns, and proprietary conventions.",
    groupTitle: "Getting Started",
    tags: ["[Config]"],
    sources: ["Meta Staff Engineer", "Every Level", "HumanLayer"],
    Component: GeneratedTip003,
  },
  {
    slug: "use-progressive-disclosure-for-task-specific-guidance",
    title: "Use Progressive Disclosure for Task-Specific Guidance",
    description: "Keep CLAUDE.md lean, and place specialized guidance in separate docs (for example: build, test, conventions, architecture deep dives).",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]", "[Performance]"],
    sources: ["HumanLayer", "Why Most Developers", "Skills Beginner to Pro"],
    Component: GeneratedTip004,
  },
  {
    slug: "claude-is-not-a-linter",
    title: "Claude Is Not a Linter",
    description: "Do not use CLAUDE.md as a style-guide dump. Put formatting and linting enforcement in deterministic tools.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]"],
    sources: ["HumanLayer", "Claude Code Founder"],
    Component: GeneratedTip005,
  },
  {
    slug: "treat-claude-md-as-a-living-rulebook-updated-through-claude",
    title: "Treat CLAUDE.md as a Living Rulebook (Updated Through Claude)",
    description: "When Claude makes a recurring mistake, add or refine a rule in `CLAUDE.md` and update shared `.claude` assets (`commands`, `skills`) directly.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder", "r/ClaudeCode (weekly)"],
    Component: GeneratedTip006,
  },
  {
    slug: "start-in-plan-mode-and-pressure-test-assumptions",
    title: "Start in Plan Mode and Pressure-Test Assumptions",
    description: "Begin non-trivial work in Plan Mode and force clarification before any edits.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]", "[Prompt Technique]"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder", "Top 6 Tips"],
    Component: GeneratedTip007,
  },
  {
    slug: "edit-the-plan-before-you-execute",
    title: "Edit the Plan Before You Execute",
    description: "Treat the proposed plan as a draft and actively revise it before switching to execution.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]", "[Prompt Technique]"],
    sources: ["Top 6 Tips", "Meta Staff Engineer"],
    Component: GeneratedTip008,
  },
  {
    slug: "skills-are-reusable-markdown-based-sops",
    title: "Skills Are Reusable Markdown-Based SOPs",
    description: "A skill is a markdown file (`skill.md`) stored at `.claude/skills/<skill-name>/skill.md` with a name, description, and step-by-step instructions.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]"],
    sources: ["Skills Beginner to Pro", "Every Level", "Why Most Developers", "Top 6 Tips"],
    Component: GeneratedTip009,
  },
  {
    slug: "yaml-front-matter-tells-claude-what-and-when",
    title: "YAML Front Matter Tells Claude What and When",
    description: "The top section uses YAML front matter with `name` and `description` fields. Claude reads only the front matter (~100 tokens) during initial search.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Prompt Technique]"],
    sources: ["Skills Beginner to Pro", "Every Level", "Why Most Developers"],
    Component: GeneratedTip010,
  },
  {
    slug: "progressive-context-loading-three-levels",
    title: "Progressive Context Loading (Three Levels)",
    description: "Claude loads: (1) only YAML front matter (~100 tokens) to identify matches, (2) full `skill.md` (~1,000–2,000 tokens) once matched, (3) supporting reference files only if needed.",
    groupTitle: "Getting Started",
    tags: ["[Performance]", "[Config]", "[Advanced]"],
    sources: ["Skills Beginner to Pro", "Why Most Developers"],
    Component: GeneratedTip011,
  },
  {
    slug: "keep-skill-md-under-500-lines-move-detail-to-reference-files",
    title: "Keep skill.md Under 500 Lines; Move Detail to Reference Files",
    description: "Keep `skill.md` lean. Move detailed reference material to separate files.",
    groupTitle: "Getting Started",
    tags: ["[Performance]", "[Config]"],
    sources: ["Skills Beginner to Pro"],
    Component: GeneratedTip012,
  },
  {
    slug: "skills-auto-activate-or-can-be-invoked-as-slash-commands",
    title: "Skills Auto-Activate or Can Be Invoked as Slash Commands",
    description: "Skills can be invoked via slash command (e.g., `/excalidraw-diagram`) or triggered automatically by natural language matching the description.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]", "[Shortcut]"],
    sources: ["Skills Beginner to Pro", "Every Level", "Why Most Developers"],
    Component: GeneratedTip013,
  },
  {
    slug: "control-invocation-mode-via-front-matter",
    title: "Control Invocation Mode via Front Matter",
    description: "You can configure whether a skill is triggered by natural language, slash command, or both (via the \"disable model invocation\" flag).",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Advanced]"],
    sources: ["Skills Beginner to Pro"],
    Component: GeneratedTip014,
  },
  {
    slug: "additional-front-matter-options",
    title: "Additional Front Matter Options",
    description: "Beyond name and description, front matter supports: `allowed-tools`, specific `model`, `context` hints, `hooks`, and designated `agent`.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Advanced]"],
    sources: ["Skills Beginner to Pro"],
    Component: GeneratedTip015,
  },
  {
    slug: "build-skills-through-collaborative-iteration",
    title: "Build Skills Through Collaborative Iteration",
    description: "Do the task manually with Claude first, then tell Claude to turn that session into a skill. Ask clarifying questions during the process.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]", "[Prompt Technique]"],
    sources: ["Skills Beginner to Pro", "Meta Staff Engineer"],
    Component: GeneratedTip016,
  },
  {
    slug: "use-the-feedback-cycle-to-continuously-improve-skills",
    title: "Use the Feedback Cycle to Continuously Improve Skills",
    description: "Invoke the skill, watch the agent work, give targeted feedback, let it update the skill, repeat. After 10–30 runs, output becomes highly reliable.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]"],
    sources: ["Skills Beginner to Pro"],
    Component: GeneratedTip017,
  },
  {
    slug: "project-level-vs-global-skills",
    title: "Project-Level vs. Global Skills",
    description: "Skills in `.claude/skills/` are project-scoped. Skills in `~/.claude/skills/` are available globally.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]"],
    sources: ["Skills Beginner to Pro", "Why Most Developers"],
    Component: GeneratedTip018,
  },
  {
    slug: "use-third-party-skill-collections-carefully",
    title: "Use Third-Party Skill Collections Carefully",
    description: "Use open-source/community skills as starting points, but treat every imported skill as untrusted until reviewed.",
    groupTitle: "Getting Started",
    tags: ["[Config]", "[Workflow]", "[Gotcha]"],
    sources: ["Top 6 Tips", "Skills Beginner to Pro", "Every Level"],
    Component: GeneratedTip019,
  },
  {
    slug: "use-skills-for-judgment-hooks-scripts-for-deterministic-checks",
    title: "Use Skills for Judgment, Hooks/Scripts for Deterministic Checks",
    description: "Use skills for fuzzy, context-dependent workflows; use hooks/scripts for exact repeatable checks.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]", "[Config]", "[Advanced]"],
    sources: ["r/ClaudeAI (weekly)", "r/ClaudeCode (weekly)"],
    Component: GeneratedTip020,
  },
  {
    slug: "the-six-step-skill-building-framework",
    title: "The Six-Step Skill Building Framework",
    description: "Work through: (1) Name and trigger, (2) Goal — one-sentence output, (3) Step-by-step process, (4) Reference files, (5) Rules / guardrails, (6) Self-improvement loop — plan for testing and iterating.",
    groupTitle: "Getting Started",
    tags: ["[Workflow]", "[Prompt Technique]"],
    sources: ["Skills Beginner to Pro"],
    Component: GeneratedTip021,
  },
  {
    slug: "use-sub-agents-for-atomic-isolated-tasks",
    title: "Use Sub-Agents for Atomic, Isolated Tasks",
    description: "Sub-agents have their own dedicated context windows, isolated from the parent session. Only their summary output returns.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]", "[Performance]"],
    sources: ["Meta Staff Engineer", "Every Level", "Top 6 Tips", "Why Most Developers"],
    Component: GeneratedTip022,
  },
  {
    slug: "avoid-sub-agents-for-tasks-needing-full-session-context",
    title: "Avoid Sub-Agents for Tasks Needing Full Session Context",
    description: "Don't route tasks that need awareness of the current session's full codebase context through sub-agents.",
    groupTitle: "Workflow",
    tags: ["[Advanced]", "[Gotcha]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip023,
  },
  {
    slug: "have-sub-agents-return-file-paths-not-full-content",
    title: "Have Sub-Agents Return File Paths, Not Full Content",
    description: "Configure sub-agents to save output to files and return only file paths.",
    groupTitle: "Workflow",
    tags: ["[Performance]", "[Gotcha]", "[Advanced]"],
    sources: ["Superpowers Review"],
    Component: GeneratedTip024,
  },
  {
    slug: "restrict-sub-agent-tool-access-for-safety",
    title: "Restrict Sub-Agent Tool Access for Safety",
    description: "Limit which tools sub-agents have access to (e.g., read-only tools for a code reviewer).",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Advanced]"],
    sources: ["Why Most Developers"],
    Component: GeneratedTip025,
  },
  {
    slug: "route-tasks-to-cheaper-models-via-sub-agents",
    title: "Route Tasks to Cheaper Models via Sub-Agents",
    description: "Specify which model each sub-agent runs on. Route simple tasks to Haiku, research to Sonnet, complex reasoning to Opus.",
    groupTitle: "Workflow",
    tags: ["[Performance]", "[Advanced]", "[Config]"],
    sources: ["Why Most Developers", "Superpowers Review"],
    Component: GeneratedTip026,
  },
  {
    slug: "build-dedicated-context-sub-agents-e-g-docs-explorer",
    title: "Build Dedicated Context Sub-Agents (e.g., Docs Explorer)",
    description: "Create specialized sub-agents for documentation lookup, codebase exploration, etc., with dedicated tools.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]", "[Performance]"],
    sources: ["Top 6 Tips"],
    Component: GeneratedTip027,
  },
  {
    slug: "structure-orchestrators-to-delegate-not-execute-inline",
    title: "Structure Orchestrators to Delegate, Not Execute Inline",
    description: "Master orchestrator scripts should spin up fresh sub-agents per step rather than doing everything inline.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Performance]", "[Advanced]"],
    sources: ["Superpowers Review", "r/ClaudeCode (weekly)"],
    Component: GeneratedTip028,
  },
  {
    slug: "hooks-are-deterministic-event-driven-automation",
    title: "Hooks Are Deterministic, Event-Driven Automation",
    description: "Hooks are shell commands that fire automatically at specific lifecycle points (session start, pre-tool use, post-tool use, session stop — 15 event types total). Exit code `0` = success; exit code `2` = blocking error.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Workflow]", "[Advanced]"],
    sources: ["Every Level", "Claude's Best Release", "Claude Code Founder", "Why Most Developers"],
    Component: GeneratedTip029,
  },
  {
    slug: "protect-test-files-from-agent-modification",
    title: "Protect Test Files from Agent Modification",
    description: "Set up a `pre-tool-use` hook that blocks modifications to test directories.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Gotcha]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip030,
  },
  {
    slug: "block-destructive-shell-commands",
    title: "Block Destructive Shell Commands",
    description: "Use a pre-tool-use hook matching the `bash` tool to intercept dangerous commands (e.g., `rm -rf`).",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Advanced]", "[Gotcha]"],
    sources: ["Why Most Developers", "Meta Staff Engineer"],
    Component: GeneratedTip031,
  },
  {
    slug: "auto-format-every-file-claude-writes",
    title: "Auto-Format Every File Claude Writes",
    description: "Use a post-tool-use hook matching `write` and `edit` tools to automatically run a formatter.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Workflow]"],
    sources: ["Why Most Developers", "Every Level"],
    Component: GeneratedTip032,
  },
  {
    slug: "use-a-stop-hook-for-automatic-verification",
    title: "Use a Stop Hook for Automatic Verification",
    description: "Configure a stop hook that runs tests/linters whenever Claude finishes generating output.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Workflow]", "[Advanced]"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip033,
  },
  {
    slug: "ask-claude-to-write-your-hooks-don-t-hand-craft-them",
    title: "Ask Claude to Write Your Hooks — Don't Hand-Craft Them",
    description: "Describe the desired hook behavior in plain English and let Claude generate the JSON config.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Workflow]"],
    sources: ["Every Level"],
    Component: GeneratedTip034,
  },
  {
    slug: "be-selective-with-mcps-they-cause-context-bloat",
    title: "Be Selective with MCPs — They Cause Context Bloat",
    description: "MCPs consume large amounts of context tokens. Only install MCPs that are strictly necessary.",
    groupTitle: "Workflow",
    tags: ["[Performance]", "[Config]", "[Gotcha]"],
    sources: ["Meta Staff Engineer", "Top 6 Tips"],
    Component: GeneratedTip035,
  },
  {
    slug: "use-context7-mcp-for-library-documentation",
    title: "Use Context7 MCP for Library Documentation",
    description: "The Context7 MCP provides AI agents with up-to-date documentation for third-party libraries and frameworks.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Advanced]"],
    sources: ["Top 6 Tips", "Claude's Best Release"],
    Component: GeneratedTip036,
  },
  {
    slug: "enable-experimental-mcp-cli-mode-to-prevent-context-bloat",
    title: "Enable Experimental MCP CLI Mode to Prevent Context Bloat",
    description: "Set the experimental `MCP_CLI` flag to `true`. This removes MCP tool schemas from context and routes calls through bash commands on demand.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Performance]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip037,
  },
  {
    slug: "let-claude-install-mcps-for-you",
    title: "Let Claude Install MCPs for You",
    description: "Ask Claude: \"Find and install a good [tool] MCP.\" Claude will locate, recommend, and wire it up.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Workflow]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip038,
  },
  {
    slug: "use-mcp-to-inspect-and-manage-mcps",
    title: "Use `/mcp` to Inspect and Manage MCPs",
    description: "Run `/mcp` to see installed MCPs. Use `/mcp add [service]` to install new ones.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Shortcut]"],
    sources: ["Meta Staff Engineer", "Every Level"],
    Component: GeneratedTip039,
  },
  {
    slug: "mcp-tools-are-available-across-all-features",
    title: "MCP Tools Are Available Across All Features",
    description: "Once connected, MCP tools are available in your main conversation, hooks, skills, and sub-agents.",
    groupTitle: "Workflow",
    tags: ["[Advanced]", "[Config]"],
    sources: ["Why Most Developers"],
    Component: GeneratedTip040,
  },
  {
    slug: "pre-scrape-documentation-to-avoid-repeated-web-searches",
    title: "Pre-Scrape Documentation to Avoid Repeated Web Searches",
    description: "Scrape external documentation once, save it locally, and prefer batched/single-call retrieval over repeated broad searches.",
    groupTitle: "Workflow",
    tags: ["[Performance]", "[Advanced]"],
    sources: ["Skills Beginner to Pro", "r/ClaudeAI (weekly)"],
    Component: GeneratedTip041,
  },
  {
    slug: "keyboard-shortcuts-2",
    title: "Keyboard Shortcuts",
    description: "Tip from Keyboard Shortcuts & Slash Commands.",
    groupTitle: "Workflow",
    tags: [],
    sources: ["Meta Staff Engineer", "Claude Code Worktrees"],
    Component: GeneratedTip042,
  },
  {
    slug: "slash-commands-reference",
    title: "Slash Commands Reference",
    description: "Tip from Keyboard Shortcuts & Slash Commands.",
    groupTitle: "Workflow",
    tags: [],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder"],
    Component: GeneratedTip043,
  },
  {
    slug: "keep-context-healthy-with-context-compact-and-reset-discipline",
    title: "Keep Context Healthy with `/context`, `/compact`, and Reset Discipline",
    description: "Continuously monitor context load, compact when needed, and reset between unrelated tasks.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Performance]", "[Gotcha]"],
    sources: ["Meta Staff Engineer", "Every Level", "r/ClaudeCode (weekly)"],
    Component: GeneratedTip044,
  },
  {
    slug: "use-a-second-brain-for-lazy-loading-context",
    title: "Use a \"Second Brain\" for Lazy-Loading Context",
    description: "Maintain a local directory of project-specific context files that can be saved to and loaded from on demand.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]", "[Performance]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip045,
  },
  {
    slug: "bring-work-to-the-context-don-t-spread-context-across-agents",
    title: "Bring Work to the Context — Don't Spread Context Across Agents",
    description: "Structure workflows so relevant work accumulates in one session rather than distributing across many agents.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]", "[Prompt Technique]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip046,
  },
  {
    slug: "build-every-task-around-a-validation-loop",
    title: "Build Every Task Around a Validation Loop",
    description: "Give Claude an explicit way to run output and receive feedback on every task.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]", "[Prompt Technique]"],
    sources: ["Meta Staff Engineer", "Claude Code Founder", "Top 6 Tips"],
    Component: GeneratedTip047,
  },
  {
    slug: "use-domain-appropriate-verification-methods",
    title: "Use Domain-Appropriate Verification Methods",
    description: "Match the verification method to the domain: bash for scripts, browser extension for web UIs, simulator MCPs for mobile apps.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip048,
  },
  {
    slug: "use-tdd-to-reduce-token-usage-from-verification",
    title: "Use TDD to Reduce Token Usage from Verification",
    description: "Write tests first, then implement code to pass them.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Performance]"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip049,
  },
  {
    slug: "watch-for-claude-adjusting-tests-to-match-its-code",
    title: "Watch for Claude Adjusting Tests to Match Its Code",
    description: "Claude may silently weaken tests to make them pass rather than fixing the underlying code.",
    groupTitle: "Workflow",
    tags: ["[Gotcha]", "[Workflow]"],
    sources: ["Top 6 Tips", "Claude's Best Release"],
    Component: GeneratedTip050,
  },
  {
    slug: "use-parallel-adversarial-agents-for-fact-checking",
    title: "Use Parallel Adversarial Agents for Fact-Checking",
    description: "Set up two agents: one produces a draft, a second critically fact-checks it. They communicate iteratively.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Prompt Technique]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip051,
  },
  {
    slug: "ask-claude-to-predict-future-failures-proactive-risk-analysis",
    title: "Ask Claude to Predict Future Failures (Proactive Risk Analysis)",
    description: "After implementation, prompt Claude to identify areas where the app could fail in production.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Prompt Technique]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip052,
  },
  {
    slug: "use-linters-and-formatters-as-a-verification-layer",
    title: "Use Linters and Formatters as a Verification Layer",
    description: "Run linters and formatters on Claude-generated code as a final pass. Models produce correct code but these tools clean up the remaining ~10%.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Config]"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip053,
  },
  {
    slug: "agent-browser-vercel-labs-most-token-efficient-option",
    title: "Agent Browser (Vercel Labs) — Most Token-Efficient Option",
    description: "A CLI tool that uses the accessibility tree instead of full DOM screenshots, compressing pages from ~15,000 tokens to ~200–400 tokens.",
    groupTitle: "Workflow",
    tags: ["[Performance]", "[Front-End]", "[Advanced]"],
    sources: ["Agent Browser", "Claude's Best Release"],
    Component: GeneratedTip054,
  },
  {
    slug: "interact-with-elements-using-ref-ids-not-css-selectors",
    title: "Interact with Elements Using Ref IDs, Not CSS Selectors",
    description: "After snapshotting, use assigned ref IDs (e.g., `click @E2`, `fill @E3`) instead of brittle CSS selectors.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Front-End]"],
    sources: ["Agent Browser"],
    Component: GeneratedTip055,
  },
  {
    slug: "prioritize-agent-browser-over-mcp-based-testing-in-claude-md",
    title: "Prioritize Agent Browser Over MCP-Based Testing in CLAUDE.md",
    description: "Add an instruction to prefer Agent Browser, falling back to Puppeteer MCP only if unavailable.",
    groupTitle: "Workflow",
    tags: ["[Config]", "[Performance]", "[Front-End]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip056,
  },
  {
    slug: "use-chrome-for-browser-navigation",
    title: "Use `/chrome` for Browser Navigation",
    description: "The `/chrome` command opens a browser panel Claude can control — navigating, clicking, typing, reading page contents.",
    groupTitle: "Workflow",
    tags: ["[Advanced]", "[Front-End]", "[Workflow]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip057,
  },
  {
    slug: "drag-and-drop-screenshots-into-claude-code",
    title: "Drag and Drop Screenshots into Claude Code",
    description: "Take a screenshot and drag it directly into the Claude Code input.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Front-End]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip058,
  },
  {
    slug: "use-worktree-isolation-for-parallel-feature-streams",
    title: "Use Worktree Isolation for Parallel Feature Streams",
    description: "Use `claude -W <name>` for isolated branches/worktrees, and optionally configure sub-agents with `isolation: worktree`.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Shortcut]", "[Config]", "[Advanced]"],
    sources: ["Claude Code Worktrees"],
    Component: GeneratedTip059,
  },
  {
    slug: "use-remote-sandboxes-for-reproducible-agent-runs",
    title: "Use Remote Sandboxes for Reproducible Agent Runs",
    description: "Run Claude in a remote sandbox or VPS alias when you need clean, repeatable environments.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]", "[Gotcha]"],
    sources: ["r/ClaudeCode (weekly)"],
    Component: GeneratedTip060,
  },
  {
    slug: "run-multiple-claude-instances-in-parallel",
    title: "Run Multiple Claude Instances in Parallel",
    description: "Open multiple terminal windows/panes running separate Claude Code instances on different tasks.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder"],
    Component: GeneratedTip061,
  },
  {
    slug: "git-as-a-safety-net-prefer-over-claude-s-rewind",
    title: "Git as a Safety Net — Prefer Over Claude's Rewind",
    description: "Commit frequently with Git rather than relying on Claude Code's context rewind.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Gotcha]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip062,
  },
  {
    slug: "use-explicit-context-rich-prompts",
    title: "Use Explicit, Context-Rich Prompts",
    description: "State constraints, desired approach, and tool expectations explicitly instead of assuming Claude will infer them.",
    groupTitle: "Workflow",
    tags: ["[Prompt Technique]", "[Workflow]"],
    sources: ["Top 6 Tips"],
    Component: GeneratedTip063,
  },
  {
    slug: "provide-structured-project-documentation-as-context",
    title: "Provide Structured Project Documentation as Context",
    description: "Generate four documentation files: PRD, architecture.md, decision.md, and feature.json (with completion criteria and a `passes` key).",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Config]", "[Prompt Technique]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip064,
  },
  {
    slug: "write-user-stories-before-implementation",
    title: "Write User Stories Before Implementation",
    description: "Prompt Claude to write user stories covering all interaction paths before coding. Use them as acceptance criteria.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Prompt Technique]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip065,
  },
  {
    slug: "avoid-autonomous-ai-loops-stay-in-control",
    title: "Avoid Autonomous AI Loops — Stay in Control",
    description: "Do not run Claude Code in fully autonomous loops without oversight. Stay hands-on and review each step.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Gotcha]"],
    sources: ["Top 6 Tips"],
    Component: GeneratedTip066,
  },
  {
    slug: "stay-accountable-for-code-quality",
    title: "Stay Accountable for Code Quality",
    description: "Keep humans in the loop: do trivial edits directly, review AI output critically, and preserve deep codebase understanding.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Performance]", "[Gotcha]"],
    sources: ["Top 6 Tips"],
    Component: GeneratedTip067,
  },
  {
    slug: "don-t-fear-interrupting-or-course-correcting",
    title: "Don't Fear Interrupting or Course Correcting",
    description: "It's safe and recommended to interrupt Claude, change direction, or send multiple prompts while it's executing.",
    groupTitle: "Workflow",
    tags: ["[Workflow]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip068,
  },
  {
    slug: "ask-claude-to-write-git-commit-messages-and-pr-summaries",
    title: "Ask Claude to Write Git Commit Messages and PR Summaries",
    description: "Have Claude generate commit messages and PR descriptions using your templates.",
    groupTitle: "Workflow",
    tags: ["[Workflow]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip069,
  },
  {
    slug: "persist-phase-checkpoints-in-markdown",
    title: "Persist Phase Checkpoints in Markdown",
    description: "Keep lightweight phase files with current plan, task checklist, and QA gates for each feature stream.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Performance]", "[Advanced]"],
    sources: ["r/ClaudeCode (weekly)"],
    Component: GeneratedTip070,
  },
  {
    slug: "use-the-insights-command-to-audit-past-sessions",
    title: "Use the `insights` Command to Audit Past Sessions",
    description: "Run `claude insights` to analyze past sessions and identify patterns, mistakes, and improvements.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip071,
  },
  {
    slug: "enable-sound-notifications-when-claude-finishes",
    title: "Enable Sound Notifications When Claude Finishes",
    description: "Configure Claude Code to play a sound when it completes a task.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Config]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip072,
  },
  {
    slug: "use-claude-code-as-a-general-purpose-orchestrator",
    title: "Use Claude Code as a General-Purpose Orchestrator",
    description: "Claude Code can drive Slack, BigQuery, Sentry, Notion, and other non-coding tools via MCP and CLIs.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip073,
  },
  {
    slug: "ask-claude-to-add-debug-logs-run-the-app-and-read-logs",
    title: "Ask Claude to Add Debug Logs, Run the App, and Read Logs",
    description: "For hard-to-reproduce bugs, ask Claude to: add debug logs, run the app, trigger actions, tail logs, and analyze.",
    groupTitle: "Workflow",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip074,
  },
  {
    slug: "superpowers-plugin-brainstorm-plan-execute",
    title: "Superpowers Plugin (Brainstorm-Plan-Execute)",
    description: "An open-source Claude Code plugin (58k+ GitHub stars, in Anthropic Plugin Marketplace) that adds a structured Brainstorm → Plan → Execute methodology.",
    groupTitle: "Advanced",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Superpowers Review"],
    Component: GeneratedTip075,
  },
  {
    slug: "ralph-loop-fully-autonomous-task-pipelines",
    title: "RALPH Loop (Fully Autonomous Task Pipelines)",
    description: "A bash script that runs Claude in a loop until a defined completion condition is met. Takes a `prd.json` with user stories, acceptance criteria, and status tracking.",
    groupTitle: "Advanced",
    tags: ["[Advanced]", "[Workflow]"],
    sources: ["Every Level"],
    Component: GeneratedTip076,
  },
  {
    slug: "gsd-framework-planner-executor",
    title: "GSD Framework (Planner + Executor)",
    description: "Creates a `.planning/` folder with roadmap, state, per-phase plans, and UAT files. Better when scope is ambiguous and Claude needs to help with planning.",
    groupTitle: "Advanced",
    tags: ["[Workflow]", "[Advanced]"],
    sources: ["Every Level"],
    Component: GeneratedTip077,
  },
  {
    slug: "use-voice-input-for-hands-free-prompting",
    title: "Use Voice Input for Hands-Free Prompting",
    description: "Use speech-to-text tools (e.g., Whisper, OpenWhispr) to dictate prompts instead of typing.",
    groupTitle: "Advanced",
    tags: ["[Workflow]"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip078,
  },
  {
    slug: "use-dangerously-skip-permissions-only-in-throwaway-environments",
    title: "Use `--dangerously-skip-permissions` Only in Throwaway Environments",
    description: "Bypasses all permission prompts for fully autonomous runs. One user bricked a Linux machine with this mode.",
    groupTitle: "Advanced",
    tags: ["[Advanced]", "[Gotcha]"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder"],
    Component: GeneratedTip079,
  },
  {
    slug: "use-permissions-and-settings-json-for-granular-control",
    title: "Use `/permissions` and `settings.json` for Granular Control",
    description: "Configure which commands are auto-allowed, require confirmation, or are completely denied.",
    groupTitle: "Advanced",
    tags: ["[Config]", "[Advanced]"],
    sources: ["Meta Staff Engineer", "Claude Code Founder"],
    Component: GeneratedTip080,
  },
  {
    slug: "philosophical-industry-observations",
    title: "Philosophical & Industry Observations",
    description: "Tip from Raw Notes & Observations.",
    groupTitle: "Advanced",
    tags: [],
    sources: [],
    Component: GeneratedTip081,
  },
  {
    slug: "workflow-observations",
    title: "Workflow Observations",
    description: "Tip from Raw Notes & Observations.",
    groupTitle: "Advanced",
    tags: [],
    sources: [],
    Component: GeneratedTip082,
  },
  {
    slug: "tool-ecosystem-notes",
    title: "Tool & Ecosystem Notes",
    description: "Tip from Raw Notes & Observations.",
    groupTitle: "Advanced",
    tags: [],
    sources: [],
    Component: GeneratedTip083,
  },
  {
    slug: "closing",
    title: "Thank You",
    description: "Closing slide.",
    groupTitle: "Closing",
    tags: [],
    sources: [],
    Component: Slide10Closing,
  },
];

const SLIDES: readonly SlideData[] = Object.freeze(
  RAW_SLIDES.map((slide) =>
    Object.freeze({
      ...slide,
      tags: Object.freeze([...slide.tags]),
      sources: Object.freeze([...slide.sources]),
    }),
  ),
);

let validated = false;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function normalizeSlug(value: string): string {
  return value.trim().toLowerCase();
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function ensureValidSlides() {
  if (validated) {
    return;
  }

  const seen = new Set<string>();
  for (const slide of SLIDES) {
    const normalized = normalizeSlug(slide.slug);

    if (!normalized) {
      throw new Error("Slide slug cannot be empty.");
    }

    if (normalized !== slide.slug || !SLUG_PATTERN.test(slide.slug)) {
      throw new Error(
        `Invalid slide slug "${slide.slug}". Slugs must be lowercase kebab-case.`,
      );
    }

    if (seen.has(normalized)) {
      throw new Error(`Duplicate slide slug detected: ${slide.slug}`);
    }
    seen.add(normalized);
  }

  validated = true;
}

function buildGroups(): SlideGroup[] {
  const groupedSlides = new Map<GroupTitle, SlideData[]>();

  for (const title of GROUP_ORDER) {
    groupedSlides.set(title, []);
  }

  for (const slide of SLIDES) {
    groupedSlides.get(slide.groupTitle)?.push(slide);
  }

  return GROUP_ORDER.map((groupTitle) => ({
    slug: slugify(groupTitle),
    title: groupTitle,
    description: GROUP_DESCRIPTION[groupTitle],
    slides: groupedSlides.get(groupTitle) ?? [],
  })).filter((group) => group.slides.length > 0);
}

export function getSlides(): readonly SlideData[] {
  ensureValidSlides();
  return SLIDES;
}

export function getSlideBySlug(slug: string): SlideData | null {
  const normalized = normalizeSlug(slug);
  return getSlides().find((slide) => slide.slug === normalized) ?? null;
}

export function getSlideSlugs(): string[] {
  return getSlides().map((slide) => slide.slug);
}

export function getAdjacentSlides(slug: string): {
  previous: SlideData | null;
  next: SlideData | null;
} {
  const slides = getSlides();
  const index = slides.findIndex((slide) => slide.slug === normalizeSlug(slug));

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? slides[index - 1] : null,
    next: index < slides.length - 1 ? slides[index + 1] : null,
  };
}

export function getSlidesPresentation(): {
  groups: SlideGroup[];
  totalSlides: number;
} {
  const slides = getSlides();

  return {
    groups: buildGroups(),
    totalSlides: slides.length,
  };
}
