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
