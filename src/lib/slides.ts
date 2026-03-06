import type { ComponentType } from "react";

import Slide01Title from "@/content/slides/01-title.mdx";
import Slide02GettingStarted from "@/content/slides/02-section-getting-started.mdx";
import Slide05Workflow from "@/content/slides/05-section-workflow.mdx";
import Slide10Closing from "@/content/slides/10-closing.mdx";
import Slide11ChoosingMechanism from "@/content/slides/11-section-choosing-mechanism.mdx";
import Slide12MechanismComparison from "@/content/slides/12-overview-mechanism-comparison.mdx";
import Slide14MechanismCommands from "@/content/slides/14-mechanism-commands.mdx";
import Slide17WorkflowHowIActuallyWork from "@/content/slides/17-workflow-how-i-actually-work.mdx";
import Slide18MyCoreStack from "@/content/slides/18-my-core-stack.mdx";
import Slide19FrontendVerificationFirst from "@/content/slides/19-frontend-verification-first.mdx";
import Slide20McpsFrontendEdition from "@/content/slides/20-mcps-frontend-edition.mdx";
import Slide21CoolUseCasesVisualUxQa from "@/content/slides/21-cool-use-cases-visual-ux-qa.mdx";
import Slide22CoolUseCasesDeliveryWorkflow from "@/content/slides/22-cool-use-cases-delivery-workflow.mdx";
import Slide23PluginsAndSkillsThatImproveOutputQuality from "@/content/slides/23-plugins-and-skills-that-improve-output-quality.mdx";
import Slide24WhatTeamsAreActuallyUsing from "@/content/slides/24-what-teams-are-actually-using.mdx";
import Slide25WhatYouAreProbablyMissing from "@/content/slides/25-what-you-are-probably-missing.mdx";
import GeneratedTip001 from "@/content/slides/tips/tip-001.mdx";
import GeneratedTip003 from "@/content/slides/tips/tip-003.mdx";
import GeneratedTip004 from "@/content/slides/tips/tip-004.mdx";
import GeneratedTip007 from "@/content/slides/tips/tip-007.mdx";
import GeneratedTip009 from "@/content/slides/tips/tip-009.mdx";
import GeneratedTip019 from "@/content/slides/tips/tip-019.mdx";
import GeneratedTip022 from "@/content/slides/tips/tip-022.mdx";
import GeneratedTip025 from "@/content/slides/tips/tip-025.mdx";
import GeneratedTip026 from "@/content/slides/tips/tip-026.mdx";
import GeneratedTip029 from "@/content/slides/tips/tip-029.mdx";
import GeneratedTip030 from "@/content/slides/tips/tip-030.mdx";
import GeneratedTip035 from "@/content/slides/tips/tip-035.mdx";
import GeneratedTip044 from "@/content/slides/tips/tip-044.mdx";
import GeneratedTip047 from "@/content/slides/tips/tip-047.mdx";
import GeneratedTip048 from "@/content/slides/tips/tip-048.mdx";
import GeneratedTip049 from "@/content/slides/tips/tip-049.mdx";
import GeneratedTip050 from "@/content/slides/tips/tip-050.mdx";
import GeneratedTip051 from "@/content/slides/tips/tip-051.mdx";
import GeneratedTip053 from "@/content/slides/tips/tip-053.mdx";
import GeneratedTip054 from "@/content/slides/tips/tip-054.mdx";
import GeneratedTip057 from "@/content/slides/tips/tip-057.mdx";
import GeneratedTip058 from "@/content/slides/tips/tip-058.mdx";
import GeneratedTip059 from "@/content/slides/tips/tip-059.mdx";
import GeneratedTip063 from "@/content/slides/tips/tip-063.mdx";
import GeneratedTip064 from "@/content/slides/tips/tip-064.mdx";
import GeneratedTip069 from "@/content/slides/tips/tip-069.mdx";
import GeneratedTip071 from "@/content/slides/tips/tip-071.mdx";
import GeneratedTip073 from "@/content/slides/tips/tip-073.mdx";
import GeneratedTip074 from "@/content/slides/tips/tip-074.mdx";
import GeneratedTip075 from "@/content/slides/tips/tip-075.mdx";
import GeneratedTip076 from "@/content/slides/tips/tip-076.mdx";
import GeneratedTip077 from "@/content/slides/tips/tip-077.mdx";
import GeneratedTip078 from "@/content/slides/tips/tip-078.mdx";
import GeneratedTip079 from "@/content/slides/tips/tip-079.mdx";


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
    slug: "workflow",
    title: "Workflow",
    description: "Day-to-day patterns that keep you productive with Claude Code.",
    groupTitle: "Workflow",
    tags: [],
    sources: [],
    Component: Slide05Workflow,
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
    slug: "mechanism-commands",
    title: "Commands: Reusable On-Demand Workflows",
    description: "Use slash commands for repeatable operations you trigger manually.",
    groupTitle: "Advanced",
    tags: ["Workflow", "Commands"],
    sources: [],
    Component: Slide14MechanismCommands,
  },
  {
    slug: "what-goes-in-claude-md",
    title: "What Goes in CLAUDE.md (and What Doesn't)",
    description: "Keep CLAUDE.md small (~300 lines / 2.5k tokens), focused on non-negotiable standards, and updated through Claude when recurring mistakes happen.",
    groupTitle: "Getting Started",
    tags: ["Config", "Performance", "Workflow"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder", "Why Most Developers", "HumanLayer", "r/ClaudeCode (weekly)"],
    Component: GeneratedTip001,
  },
  {
    slug: "include-high-level-architecture-and-domain-context",
    title: "Include High-Level Architecture and Domain Context",
    description: "Add sections covering the project's architecture, domain-specific context, key file paths, design patterns, and proprietary conventions.",
    groupTitle: "Getting Started",
    tags: ["Config"],
    sources: ["Meta Staff Engineer", "Every Level", "HumanLayer"],
    Component: GeneratedTip003,
  },
  {
    slug: "use-progressive-disclosure-for-task-specific-guidance",
    title: "Use Progressive Disclosure for Task-Specific Guidance",
    description: "Keep CLAUDE.md lean, and place specialized guidance in separate docs (for example: build, test, conventions, architecture deep dives).",
    groupTitle: "Getting Started",
    tags: ["Config", "Workflow", "Performance"],
    sources: ["HumanLayer", "Why Most Developers", "Skills Beginner to Pro"],
    Component: GeneratedTip004,
  },
  {
    slug: "start-in-plan-mode-and-pressure-test-assumptions",
    title: "Start in Plan Mode and Pressure-Test Assumptions",
    description: "Begin non-trivial work in Plan Mode, force clarification before any edits, and actively revise the plan before executing.",
    groupTitle: "Getting Started",
    tags: ["Workflow", "Prompt Technique"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder", "Top 6 Tips"],
    Component: GeneratedTip007,
  },
  {
    slug: "skills-build-structure-and-iterate",
    title: "Skills: Build, Structure, and Iterate",
    description: "Skills are markdown SOPs at `.claude/skills/<name>/skill.md`. Write clear front matter, keep them lean, and refine over 10–30 runs.",
    groupTitle: "Getting Started",
    tags: ["Config", "Workflow", "Performance", "Prompt Technique", "Advanced"],
    sources: ["Skills Beginner to Pro", "Every Level", "Why Most Developers", "Top 6 Tips", "Meta Staff Engineer"],
    Component: GeneratedTip009,
  },
  {
    slug: "use-third-party-skill-collections-carefully",
    title: "Use Third-Party Skill Collections Carefully",
    description: "Use open-source/community skills as starting points, but treat every imported skill as untrusted until reviewed.",
    groupTitle: "Getting Started",
    tags: ["Config", "Workflow", "Gotcha"],
    sources: ["Top 6 Tips", "Skills Beginner to Pro", "Every Level"],
    Component: GeneratedTip019,
  },
  {
    slug: "sub-agents-when-to-use-and-when-to-avoid",
    title: "Sub-Agents: When to Use and When to Avoid",
    description: "Sub-agents run in isolated context windows — great for atomic tasks, bad for anything needing full session awareness.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced", "Performance", "Gotcha"],
    sources: ["Meta Staff Engineer", "Every Level", "Top 6 Tips", "Why Most Developers"],
    Component: GeneratedTip022,
  },
  {
    slug: "restrict-sub-agent-tool-access-for-safety",
    title: "Restrict Sub-Agent Tool Access for Safety",
    description: "Limit which tools sub-agents have access to (e.g., read-only tools for a code reviewer).",
    groupTitle: "Workflow",
    tags: ["Config", "Advanced"],
    sources: ["Why Most Developers"],
    Component: GeneratedTip025,
  },
  {
    slug: "route-tasks-to-cheaper-models-via-sub-agents",
    title: "Route Tasks to Cheaper Models via Sub-Agents",
    description: "Specify which model each sub-agent runs on. Route simple tasks to Haiku, research to Sonnet, complex reasoning to Opus.",
    groupTitle: "Workflow",
    tags: ["Performance", "Advanced", "Config"],
    sources: ["Why Most Developers", "Superpowers Review"],
    Component: GeneratedTip026,
  },
  {
    slug: "hooks-are-deterministic-event-driven-automation",
    title: "Hooks Are Deterministic, Event-Driven Automation",
    description: "Hooks are shell commands that fire automatically at specific lifecycle points (session start, pre-tool use, post-tool use, session stop — 15 event types total). Exit code `0` = success; exit code `2` = blocking error.",
    groupTitle: "Workflow",
    tags: ["Config", "Workflow", "Advanced"],
    sources: ["Every Level", "Claude's Best Release", "Claude Code Founder", "Why Most Developers"],
    Component: GeneratedTip029,
  },
  {
    slug: "protect-test-files-from-agent-modification",
    title: "Block Unwanted Modifications with Pre-Tool-Use Hooks",
    description: "Set up pre-tool-use hooks that block modifications to test directories and intercept destructive shell commands.",
    groupTitle: "Workflow",
    tags: ["Config", "Gotcha", "Advanced"],
    sources: ["Claude's Best Release", "Why Most Developers", "Meta Staff Engineer"],
    Component: GeneratedTip030,
  },
  {
    slug: "be-selective-with-mcps-they-cause-context-bloat",
    title: "Be Selective with MCPs — They Cause Context Bloat",
    description: "MCPs consume large amounts of context tokens. Only install MCPs that are strictly necessary.",
    groupTitle: "Workflow",
    tags: ["Performance", "Config", "Gotcha"],
    sources: ["Meta Staff Engineer", "Top 6 Tips"],
    Component: GeneratedTip035,
  },
  {
    slug: "keep-context-healthy-with-context-compact-and-reset-discipline",
    title: "Keep Context Healthy with `/context`, `/compact`, and Reset Discipline",
    description: "Continuously monitor context load, compact when needed, and reset between unrelated tasks.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Performance", "Gotcha"],
    sources: ["Meta Staff Engineer", "Every Level", "r/ClaudeCode (weekly)"],
    Component: GeneratedTip044,
  },
  {
    slug: "build-every-task-around-a-validation-loop",
    title: "Build Every Task Around a Validation Loop",
    description: "Give Claude an explicit way to run output and receive feedback on every task.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced", "Prompt Technique"],
    sources: ["Meta Staff Engineer", "Claude Code Founder", "Top 6 Tips"],
    Component: GeneratedTip047,
  },
  {
    slug: "use-domain-appropriate-verification-methods",
    title: "Use Domain-Appropriate Verification Methods",
    description: "Match the verification method to the domain: bash for scripts, browser extension for web UIs, simulator MCPs for mobile apps.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip048,
  },
  {
    slug: "use-tdd-to-reduce-token-usage-from-verification",
    title: "Use TDD to Reduce Token Usage from Verification",
    description: "Write tests first, then implement code to pass them.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Performance"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip049,
  },
  {
    slug: "watch-for-claude-adjusting-tests-to-match-its-code",
    title: "Watch for Claude Adjusting Tests to Match Its Code",
    description: "Claude may silently weaken tests to make them pass rather than fixing the underlying code.",
    groupTitle: "Workflow",
    tags: ["Gotcha", "Workflow"],
    sources: ["Top 6 Tips", "Claude's Best Release"],
    Component: GeneratedTip050,
  },
  {
    slug: "use-parallel-adversarial-agents-for-fact-checking",
    title: "Use Parallel Adversarial Agents for Fact-Checking",
    description: "Set up two agents: one produces a draft, a second critically fact-checks it. They communicate iteratively.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Prompt Technique", "Advanced"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip051,
  },
  {
    slug: "use-linters-and-formatters-as-a-verification-layer",
    title: "Use Linters and Formatters as a Verification Layer",
    description: "Run linters and formatters on Claude-generated code as a final pass. Models produce correct code but these tools clean up the remaining ~10%.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Config"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip053,
  },
  {
    slug: "agent-browser-vercel-labs-most-token-efficient-option",
    title: "Agent Browser (Vercel Labs) — Most Token-Efficient Option",
    description: "A CLI tool that uses the accessibility tree instead of full DOM screenshots, compressing pages from ~15,000 tokens to ~200–400 tokens.",
    groupTitle: "Workflow",
    tags: ["Performance", "Front-End", "Advanced"],
    sources: ["Agent Browser", "Claude's Best Release"],
    Component: GeneratedTip054,
  },
  {
    slug: "use-chrome-for-browser-navigation",
    title: "Use `/chrome` for Browser Navigation",
    description: "The `/chrome` command opens a browser panel Claude can control — navigating, clicking, typing, reading page contents.",
    groupTitle: "Workflow",
    tags: ["Advanced", "Front-End", "Workflow"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip057,
  },
  {
    slug: "drag-and-drop-screenshots-into-claude-code",
    title: "Drag and Drop Screenshots into Claude Code",
    description: "Take a screenshot and drag it directly into the Claude Code input.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Front-End"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip058,
  },
  {
    slug: "use-worktree-isolation-for-parallel-feature-streams",
    title: "Use Worktree Isolation for Parallel Feature Streams",
    description: "Use `claude -W <name>` for isolated branches/worktrees, and optionally configure sub-agents with `isolation: worktree`.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Shortcut", "Config", "Advanced"],
    sources: ["Claude Code Worktrees"],
    Component: GeneratedTip059,
  },
  {
    slug: "use-explicit-context-rich-prompts",
    title: "Use Explicit, Context-Rich Prompts",
    description: "State constraints, desired approach, and tool expectations explicitly instead of assuming Claude will infer them.",
    groupTitle: "Workflow",
    tags: ["Prompt Technique", "Workflow"],
    sources: ["Top 6 Tips"],
    Component: GeneratedTip063,
  },
  {
    slug: "provide-structured-documentation-before-implementation",
    title: "Provide Structured Documentation Before Implementation",
    description: "Generate documentation files (PRD, architecture, decisions) and user stories before coding. Use them as acceptance criteria.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Config", "Prompt Technique", "Advanced"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip064,
  },
  {
    slug: "ask-claude-to-write-git-commit-messages-and-pr-summaries",
    title: "Ask Claude to Write Git Commit Messages and PR Summaries",
    description: "Have Claude generate commit messages and PR descriptions using your templates.",
    groupTitle: "Workflow",
    tags: ["Workflow"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip069,
  },
  {
    slug: "use-the-insights-command-to-audit-past-sessions",
    title: "Use the `insights` Command to Audit Past Sessions",
    description: "Run `claude insights` to analyze past sessions and identify patterns, mistakes, and improvements.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced"],
    sources: ["Claude's Best Release"],
    Component: GeneratedTip071,
  },
  {
    slug: "use-claude-code-as-a-general-purpose-orchestrator",
    title: "Use Claude Code as a General-Purpose Orchestrator",
    description: "Claude Code can drive Slack, BigQuery, Sentry, Notion, and other non-coding tools via MCP and CLIs.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced"],
    sources: ["Claude Code Founder"],
    Component: GeneratedTip073,
  },
  {
    slug: "ask-claude-to-add-debug-logs-run-the-app-and-read-logs",
    title: "Ask Claude to Add Debug Logs, Run the App, and Read Logs",
    description: "For hard-to-reproduce bugs, ask Claude to: add debug logs, run the app, trigger actions, tail logs, and analyze.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip074,
  },
  {
    slug: "superpowers-plugin-brainstorm-plan-execute",
    title: "Superpowers Plugin (Brainstorm-Plan-Execute)",
    description: "An open-source Claude Code plugin (58k+ GitHub stars, in Anthropic Plugin Marketplace) that adds a structured Brainstorm → Plan → Execute methodology.",
    groupTitle: "Advanced",
    tags: ["Workflow", "Advanced"],
    sources: ["Superpowers Review"],
    Component: GeneratedTip075,
  },
  {
    slug: "ralph-loop-fully-autonomous-task-pipelines",
    title: "RALPH Loop (Fully Autonomous Task Pipelines)",
    description: "A bash script that runs Claude in a loop until a defined completion condition is met. Takes a `prd.json` with user stories, acceptance criteria, and status tracking.",
    groupTitle: "Advanced",
    tags: ["Advanced", "Workflow"],
    sources: ["Every Level"],
    Component: GeneratedTip076,
  },
  {
    slug: "gsd-framework-planner-executor",
    title: "GSD Framework (Planner + Executor)",
    description: "Creates a `.planning/` folder with roadmap, state, per-phase plans, and UAT files. Better when scope is ambiguous and Claude needs to help with planning.",
    groupTitle: "Advanced",
    tags: ["Workflow", "Advanced"],
    sources: ["Every Level"],
    Component: GeneratedTip077,
  },
  {
    slug: "use-voice-input-for-hands-free-prompting",
    title: "Use Voice Input for Hands-Free Prompting",
    description: "Use speech-to-text tools (e.g., Whisper, OpenWhispr) to dictate prompts instead of typing.",
    groupTitle: "Advanced",
    tags: ["Workflow"],
    sources: ["Meta Staff Engineer"],
    Component: GeneratedTip078,
  },
  {
    slug: "use-dangerously-skip-permissions-only-in-throwaway-environments",
    title: "Use `--dangerously-skip-permissions` Only in Throwaway Environments",
    description: "Bypasses all permission prompts for fully autonomous runs. One user bricked a Linux machine with this mode.",
    groupTitle: "Advanced",
    tags: ["Advanced", "Gotcha"],
    sources: ["Meta Staff Engineer", "Every Level", "Claude Code Founder"],
    Component: GeneratedTip079,
  },
  {
    slug: "workflow-how-i-actually-work",
    title: "Workflow: How I Actually Work",
    description: "From ticket context to verified UI changes.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Process", "Front-end"],
    sources: [],
    Component: Slide17WorkflowHowIActuallyWork,
  },
  {
    slug: "my-core-stack",
    title: "My Core Stack",
    description: "The tool chain I use daily and when each tool is best.",
    groupTitle: "Workflow",
    tags: ["Tools", "Workflow", "Productivity"],
    sources: [],
    Component: Slide18MyCoreStack,
  },
  {
    slug: "front-end-verification-first",
    title: "Front-end Focus: Verification First",
    description: "For UI work, code is not done until the interface is verified.",
    groupTitle: "Workflow",
    tags: ["Front-end", "Quality", "Verification"],
    sources: [],
    Component: Slide19FrontendVerificationFirst,
  },
  {
    slug: "mcps-front-end-edition",
    title: "MCPs I Use Most (Front-end Edition)",
    description: "Practical MCPs that speed up UI delivery and debugging.",
    groupTitle: "Workflow",
    tags: ["MCP", "Front-end", "Tooling"],
    sources: [],
    Component: Slide20McpsFrontendEdition,
  },
  {
    slug: "cool-use-cases-visual-and-ux-qa",
    title: "Cool Use Cases: Visual and UX QA",
    description: "High-leverage checks before human review.",
    groupTitle: "Workflow",
    tags: ["Use Cases", "Front-end", "QA"],
    sources: [],
    Component: Slide21CoolUseCasesVisualUxQa,
  },
  {
    slug: "cool-use-cases-delivery-workflow",
    title: "Cool Use Cases: Delivery Workflow",
    description: "Turn context into tickets, execution, and cleaner handoffs.",
    groupTitle: "Workflow",
    tags: ["Use Cases", "Delivery", "Jira", "GitHub"],
    sources: [],
    Component: Slide22CoolUseCasesDeliveryWorkflow,
  },
  {
    slug: "plugins-and-skills-that-improve-output-quality",
    title: "Plugins and Skills That Improve Output Quality",
    description: "The biggest gains come from process discipline, not magic prompts.",
    groupTitle: "Advanced",
    tags: ["Skills", "Plugins", "Reliability"],
    sources: [],
    Component: Slide23PluginsAndSkillsThatImproveOutputQuality,
  },
  {
    slug: "what-teams-are-actually-using",
    title: "What Teams Are Actually Using",
    description: "Common stack pattern I see in high-output teams.",
    groupTitle: "Advanced",
    tags: ["Team Patterns", "Workflow", "Field Notes"],
    sources: [],
    Component: Slide24WhatTeamsAreActuallyUsing,
  },
  {
    slug: "what-you-are-probably-missing",
    title: "What You Are Probably Missing",
    description: "Gaps that matter once teams move beyond basic prompting.",
    groupTitle: "Advanced",
    tags: ["Guardrails", "Reliability", "Scale"],
    sources: [],
    Component: Slide25WhatYouAreProbablyMissing,
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
  [...RAW_SLIDES]
    .sort(
      (a, b) =>
        GROUP_ORDER.indexOf(a.groupTitle) - GROUP_ORDER.indexOf(b.groupTitle),
    )
    .map((slide) =>
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
