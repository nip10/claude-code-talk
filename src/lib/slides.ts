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
import TipClaudeMdWhatBelongs from "@/content/slides/tips/claude-md-what-belongs.mdx";
import TipClaudeMdKeepHealthy from "@/content/slides/tips/claude-md-keep-healthy.mdx";
import TipPlanMode from "@/content/slides/tips/plan-mode.mdx";
import TipSkillsWhatAndHow from "@/content/slides/tips/skills-what-and-how.mdx";
import TipSkillsConfiguration from "@/content/slides/tips/skills-configuration.mdx";
import TipSkillsBuilding from "@/content/slides/tips/skills-building.mdx";
import TipSkillsGotchas from "@/content/slides/tips/skills-gotchas.mdx";
import TipSubagentsWhenAndHow from "@/content/slides/tips/subagents-when-and-how.mdx";
import TipSubagentsPatterns from "@/content/slides/tips/subagents-patterns.mdx";
import TipHooksSafety from "@/content/slides/tips/hooks-safety.mdx";
import TipHooksQuality from "@/content/slides/tips/hooks-quality.mdx";
import TipMcpManagement from "@/content/slides/tips/mcp-management.mdx";
import TipMcpOptimization from "@/content/slides/tips/mcp-optimization.mdx";
import TipContextManagement from "@/content/slides/tips/context-management.mdx";
import TipVerification from "@/content/slides/tips/verification.mdx";
import TipVerificationAdvanced from "@/content/slides/tips/verification-advanced.mdx";
import TipBrowserAutomation from "@/content/slides/tips/browser-automation.mdx";
import TipWorktreeAndParallel from "@/content/slides/tips/worktree-and-parallel.mdx";
import TipGitSafetyNet from "@/content/slides/tips/git-safety-net.mdx";
import TipPromptingAndDocumentation from "@/content/slides/tips/prompting-and-documentation.mdx";
import TipStayInControl from "@/content/slides/tips/stay-in-control.mdx";
import TipPhaseCheckpoints from "@/content/slides/tips/phase-checkpoints.mdx";
import TipInsightsAndOrchestration from "@/content/slides/tips/insights-and-orchestration.mdx";
import TipPluginsOverview from "@/content/slides/tips/plugins-overview.mdx";
import TipPermissionsAndSafety from "@/content/slides/tips/permissions-and-safety.mdx";

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
  // --- Consolidated tips: Getting Started ---
  {
    slug: "claude-md-what-belongs",
    title: "CLAUDE.md: What Belongs and What Doesn't",
    description: "Only include always-on, non-negotiable standards and high-level architecture context in CLAUDE.md.",
    groupTitle: "Getting Started",
    tags: ["Config", "Performance"],
    sources: [],
    Component: TipClaudeMdWhatBelongs,
  },
  {
    slug: "claude-md-keep-healthy",
    title: "Keep CLAUDE.md Lean and Living",
    description: "Target ~300 lines / 2.5k tokens, use progressive disclosure, delegate formatting to tools, and evolve rules through Claude.",
    groupTitle: "Getting Started",
    tags: ["Config", "Performance", "Workflow"],
    sources: [],
    Component: TipClaudeMdKeepHealthy,
  },
  {
    slug: "plan-mode",
    title: "Plan Mode: Think Before You Execute",
    description: "Start non-trivial work in Plan Mode to pressure-test assumptions and edit the plan before execution.",
    groupTitle: "Getting Started",
    tags: ["Workflow", "Prompt Technique"],
    sources: [],
    Component: TipPlanMode,
  },
  {
    slug: "skills-what-and-how",
    title: "Skills: What They Are and How They Work",
    description: "Skills are reusable markdown SOPs with lazy context loading and flexible invocation via slash commands or natural language.",
    groupTitle: "Getting Started",
    tags: ["Config", "Workflow"],
    sources: [],
    Component: TipSkillsWhatAndHow,
  },
  {
    slug: "skills-configuration",
    title: "Skills: Configuration and Scope",
    description: "Keep skills lean, control invocation modes, use advanced front matter options, and choose between project and global scope.",
    groupTitle: "Getting Started",
    tags: ["Config", "Advanced"],
    sources: [],
    Component: TipSkillsConfiguration,
  },
  {
    slug: "skills-building",
    title: "Building and Iterating on Skills",
    description: "Build skills from real interactions, refine through feedback cycles, and follow the six-step framework.",
    groupTitle: "Getting Started",
    tags: ["Workflow", "Prompt Technique"],
    sources: [],
    Component: TipSkillsBuilding,
  },
  {
    slug: "skills-gotchas",
    title: "Skills: Best Practices and Gotchas",
    description: "Audit third-party skills before use and reserve skills for judgment-based tasks, not deterministic checks.",
    groupTitle: "Getting Started",
    tags: ["Config", "Workflow", "Gotcha"],
    sources: [],
    Component: TipSkillsGotchas,
  },
  // --- Consolidated tips: Workflow ---
  {
    slug: "subagents-when-and-how",
    title: "Sub-Agents: When and How to Use Them",
    description: "Use sub-agents for isolated tasks with dedicated context windows, but avoid them when full session context is needed.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced", "Performance"],
    sources: [],
    Component: TipSubagentsWhenAndHow,
  },
  {
    slug: "subagents-patterns",
    title: "Sub-Agent Patterns and Configuration",
    description: "Return file paths instead of content, restrict tool access, route to cheaper models, and use orchestrator delegation.",
    groupTitle: "Workflow",
    tags: ["Performance", "Advanced", "Config"],
    sources: [],
    Component: TipSubagentsPatterns,
  },
  {
    slug: "hooks-safety",
    title: "Hooks: Deterministic Safety Guardrails",
    description: "Use hooks for event-driven automation that fires reliably — protect test files and block destructive commands.",
    groupTitle: "Workflow",
    tags: ["Config", "Advanced", "Gotcha"],
    sources: [],
    Component: TipHooksSafety,
  },
  {
    slug: "hooks-quality",
    title: "Hooks: Automated Quality Checks",
    description: "Auto-format files on write, run verification on stop, and let Claude generate hook configurations for you.",
    groupTitle: "Workflow",
    tags: ["Config", "Workflow"],
    sources: [],
    Component: TipHooksQuality,
  },
  {
    slug: "mcp-management",
    title: "MCP: Management and Best Practices",
    description: "Be selective with MCPs to avoid context bloat, let Claude install them, and use /mcp to inspect and manage.",
    groupTitle: "Workflow",
    tags: ["Config", "Performance", "Gotcha"],
    sources: [],
    Component: TipMcpManagement,
  },
  {
    slug: "mcp-optimization",
    title: "MCP: Optimization and Documentation",
    description: "Use Context7 for library docs, enable MCP CLI mode to reduce overhead, and pre-scrape documentation locally.",
    groupTitle: "Workflow",
    tags: ["Config", "Performance", "Advanced"],
    sources: [],
    Component: TipMcpOptimization,
  },
  {
    slug: "context-management",
    title: "Context Management: Keep It Healthy",
    description: "Monitor context load, use a 'second brain' for lazy-loading, and bring work to the context rather than spreading it.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Performance"],
    sources: [],
    Component: TipContextManagement,
  },
  {
    slug: "verification",
    title: "Verification and Testing",
    description: "Build tasks around validation loops, use domain-appropriate verification, adopt TDD, and watch for test manipulation.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Gotcha"],
    sources: [],
    Component: TipVerification,
  },
  {
    slug: "verification-advanced",
    title: "Advanced Verification Patterns",
    description: "Use adversarial agents for fact-checking and prompt Claude to predict future failures after implementation.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Prompt Technique", "Advanced"],
    sources: [],
    Component: TipVerificationAdvanced,
  },
  {
    slug: "browser-automation",
    title: "Browser Automation",
    description: "Use Agent Browser for token-efficient web interaction, /chrome for browser navigation, and drag-and-drop screenshots for visual context.",
    groupTitle: "Workflow",
    tags: ["Advanced", "Front-End"],
    sources: [],
    Component: TipBrowserAutomation,
  },
  {
    slug: "worktree-and-parallel",
    title: "Worktrees and Parallel Development",
    description: "Use worktree isolation for parallel feature streams and run multiple Claude instances simultaneously.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Advanced"],
    sources: [],
    Component: TipWorktreeAndParallel,
  },
  {
    slug: "git-safety-net",
    title: "Git as a Safety Net",
    description: "Commit frequently with Git rather than relying on Claude Code's context rewind.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Gotcha"],
    sources: [],
    Component: TipGitSafetyNet,
  },
  {
    slug: "prompting-and-documentation",
    title: "Prompting and Project Documentation",
    description: "Use explicit prompts, provide structured project docs, and write user stories before implementation.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Prompt Technique"],
    sources: [],
    Component: TipPromptingAndDocumentation,
  },
  {
    slug: "stay-in-control",
    title: "Stay in Control of the AI",
    description: "Avoid fully autonomous loops, stay accountable for code quality, and don't fear interrupting or course correcting.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Gotcha"],
    sources: [],
    Component: TipStayInControl,
  },
  {
    slug: "phase-checkpoints",
    title: "Persist Phase Checkpoints in Markdown",
    description: "Keep lightweight phase files with current plan, task checklist, and QA gates so you can reset context without losing state.",
    groupTitle: "Workflow",
    tags: ["Workflow", "Performance", "Advanced"],
    sources: [],
    Component: TipPhaseCheckpoints,
  },
  // --- Consolidated tips: Advanced ---
  {
    slug: "insights-and-orchestration",
    title: "Insights, Orchestration, and Debugging",
    description: "Audit past sessions with insights, use Claude as a general-purpose orchestrator, and leverage autonomous debug cycles.",
    groupTitle: "Advanced",
    tags: ["Workflow", "Advanced"],
    sources: [],
    Component: TipInsightsAndOrchestration,
  },
  {
    slug: "plugins-overview",
    title: "Plugins: Superpowers, RALPH, and GSD",
    description: "Three popular third-party plugins for structured planning, autonomous pipelines, and scope-discovery workflows.",
    groupTitle: "Advanced",
    tags: ["Workflow", "Advanced"],
    sources: [],
    Component: TipPluginsOverview,
  },
  {
    slug: "permissions-and-safety",
    title: "Permissions and Safety Configuration",
    description: "Use --dangerously-skip-permissions only in throwaway environments and configure granular control via /permissions and settings.json.",
    groupTitle: "Advanced",
    tags: ["Config", "Advanced", "Gotcha"],
    sources: [],
    Component: TipPermissionsAndSafety,
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
