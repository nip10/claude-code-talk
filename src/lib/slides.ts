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
import Slide17WorkflowHowIActuallyWork from "@/content/slides/17-workflow-how-i-actually-work.mdx";
import Slide18MyCoreStack from "@/content/slides/18-my-core-stack.mdx";
import Slide19FrontendVerificationFirst from "@/content/slides/19-frontend-verification-first.mdx";
import Slide20McpsFrontendEdition from "@/content/slides/20-mcps-frontend-edition.mdx";
import Slide21CoolUseCasesVisualUxQa from "@/content/slides/21-cool-use-cases-visual-ux-qa.mdx";
import Slide22CoolUseCasesDeliveryWorkflow from "@/content/slides/22-cool-use-cases-delivery-workflow.mdx";
import Slide23PluginsAndSkillsThatImproveOutputQuality from "@/content/slides/23-plugins-and-skills-that-improve-output-quality.mdx";
import Slide24WhatTeamsAreActuallyUsing from "@/content/slides/24-what-teams-are-actually-using.mdx";
import Slide25WhatYouAreProbablyMissing from "@/content/slides/25-what-you-are-probably-missing.mdx";
import Slide26StartNextWeekFrontendRolloutPlan from "@/content/slides/26-start-next-week-frontend-rollout-plan.mdx";
import Slide27RecommendedAnthropicSkillExamples from "@/content/slides/27-recommended-anthropic-skill-examples.mdx";

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
    slug: "start-next-week-front-end-rollout-plan",
    title: "Start Next Week: Front-end Rollout Plan",
    description: "Adopt this in small steps and measure quality impact quickly.",
    groupTitle: "Advanced",
    tags: ["Adoption", "Front-end", "Team Enablement"],
    sources: [],
    Component: Slide26StartNextWeekFrontendRolloutPlan,
  },
  {
    slug: "recommended-anthropic-skill-examples",
    title: "Recommended Anthropic Skill Examples",
    description: "High-value examples to borrow for front-end teams.",
    groupTitle: "Advanced",
    tags: ["Skills", "Front-end", "Examples"],
    sources: [],
    Component: Slide27RecommendedAnthropicSkillExamples,
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
