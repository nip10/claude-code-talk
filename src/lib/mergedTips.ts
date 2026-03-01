import fs from "node:fs";
import path from "node:path";

export interface TipSlideData {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  sources: string[];
  markdown: string;
  sourceSection: string;
  groupTitle: string;
  uncertain: boolean;
}

export interface SlideGroup {
  slug: string;
  title: string;
  description: string;
  tips: TipSlideData[];
}

interface RawSection {
  number: number | null;
  title: string;
  tips: TipSlideData[];
}

const GROUP_ORDER = [
  "Foundations",
  "Planning & Prompt Quality",
  "Reusable Execution Systems",
  "Reliability & Verification",
  "Scale & Parallelism",
  "Automation Guardrails",
  "External Tooling",
  "Team Operations",
  "Appendix",
] as const;

const GROUP_DESCRIPTION: Record<(typeof GROUP_ORDER)[number], string> = {
  Foundations: "Core setup, context hygiene, and command fluency.",
  "Planning & Prompt Quality": "How to think before executing and prompt with precision.",
  "Reusable Execution Systems": "Repeatable SOPs with skills and standardized workflows.",
  "Reliability & Verification": "Validation loops, testing discipline, and failure prevention.",
  "Scale & Parallelism": "Parallel work patterns with sub-agents and worktree isolation.",
  "Automation Guardrails": "Deterministic hooks to enforce safety and consistency.",
  "External Tooling": "MCPs, browser tooling, plugins, and voice input integrations.",
  "Team Operations": "High-leverage team habits, governance, and permission controls.",
  Appendix: "Raw observations and edge notes kept intact for later review.",
};

const SECTION_TO_GROUP: Record<number, (typeof GROUP_ORDER)[number]> = {
  1: "Foundations",
  2: "Planning & Prompt Quality",
  3: "Reusable Execution Systems",
  4: "Scale & Parallelism",
  5: "Automation Guardrails",
  6: "External Tooling",
  7: "Foundations",
  8: "Foundations",
  9: "Reliability & Verification",
  10: "External Tooling",
  11: "Scale & Parallelism",
  12: "Planning & Prompt Quality",
  13: "Team Operations",
  14: "External Tooling",
  15: "External Tooling",
  16: "Team Operations",
  17: "Appendix",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function cleanSectionTitle(raw: string): string {
  return raw.replace(/^\d+\.\s*/, "").trim();
}

function parseTags(line: string): string[] {
  const matches = [...line.matchAll(/`([^`]+)`/g)];
  if (matches.length > 0) {
    return matches.map((match) => match[1]);
  }

  const raw = line.replace(/^-\s*\*\*Tags:\*\*\s*/, "").trim();
  return raw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function parseSources(line: string): string[] {
  const raw = line.replace(/^-\s*\*\*Sources:\*\*\s*/, "").trim();
  return raw
    .split(",")
    .map((source) => source.trim())
    .filter(Boolean);
}

function extractDescription(contentLines: string[]): string {
  const whatLine = contentLines.find((line) => line.trim().startsWith("- **What:**"));
  if (whatLine) {
    return whatLine.replace(/^-\s*\*\*What:\*\*\s*/, "").trim();
  }

  const firstContent = contentLines.find((line) => line.trim());
  if (!firstContent) {
    return "";
  }

  return firstContent
    .trim()
    .replace(/^-\s*/, "")
    .replace(/^\*\*(.+?)\*\*:\s*/, "$1: ");
}

function parseTip(
  title: string,
  lines: string[],
  sourceSection: string,
  makeId: (titleSeed: string) => string,
): TipSlideData {
  const tags: string[] = [];
  const sources: string[] = [];
  const contentLines: string[] = [];

  for (const line of lines) {
    const compact = line.trim();

    if (compact.startsWith("- **Tags:**")) {
      tags.push(...parseTags(compact));
      continue;
    }

    if (compact.startsWith("- **Sources:**")) {
      sources.push(...parseSources(compact));
      continue;
    }

    contentLines.push(line);
  }

  const id = makeId(title);

  return {
    id,
    slug: id,
    title,
    description: extractDescription(contentLines),
    tags,
    sources,
    markdown: contentLines.join("\n").trim(),
    sourceSection,
    groupTitle: "",
    uncertain: contentLines.some((line) => line.includes("[Uncertain]")),
  };
}

function parseMergedTips(markdown: string): RawSection[] {
  const lines = markdown.split(/\r?\n/);
  const sections: RawSection[] = [];

  let currentSection: RawSection | null = null;
  let currentTipTitle: string | null = null;
  let currentTipLines: string[] = [];
  const slugUsage = new Map<string, number>();

  const makeUniqueTipId = (titleSeed: string) => {
    const base = slugify(titleSeed || "tip");
    const count = slugUsage.get(base) ?? 0;
    slugUsage.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };

  const flushTip = () => {
    if (!currentSection || !currentTipTitle) {
      return;
    }

    currentSection.tips.push(
      parseTip(currentTipTitle, currentTipLines, currentSection.title, makeUniqueTipId),
    );
    currentTipTitle = null;
    currentTipLines = [];
  };

  const flushSection = () => {
    flushTip();
    if (currentSection) {
      sections.push(currentSection);
      currentSection = null;
    }
  };

  for (const line of lines) {
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch) {
      const rawTitle = sectionMatch[1].trim();
      if (rawTitle === "Table of Contents") {
        flushSection();
        continue;
      }

      flushSection();

      const numberMatch = rawTitle.match(/^(\d+)\./);
      currentSection = {
        number: numberMatch ? Number(numberMatch[1]) : null,
        title: cleanSectionTitle(rawTitle),
        tips: [],
      };
      continue;
    }

    const tipMatch = line.match(/^###\s+(.+)$/);
    if (tipMatch) {
      flushTip();
      currentTipTitle = tipMatch[1].trim();
      continue;
    }

    if (currentTipTitle) {
      currentTipLines.push(line);
    }
  }

  flushSection();
  return sections.filter((section) => section.tips.length > 0);
}

function buildGroups(): SlideGroup[] {
  const mergedFilePath = path.join(process.cwd(), "output", "MERGED-tips-and-tricks.md");
  const mergedContent = fs.readFileSync(mergedFilePath, "utf8");
  const parsedSections = parseMergedTips(mergedContent);

  const groupedTips = new Map<(typeof GROUP_ORDER)[number], TipSlideData[]>();

  for (const section of parsedSections) {
    const bucket = section.number ? SECTION_TO_GROUP[section.number] : "Appendix";
    const group = bucket ?? "Appendix";

    if (!groupedTips.has(group)) {
      groupedTips.set(group, []);
    }

    const tips = groupedTips.get(group);
    if (!tips) {
      continue;
    }

    for (const tip of section.tips) {
      tips.push({ ...tip, groupTitle: group });
    }
  }

  return GROUP_ORDER.map((groupTitle) => {
    const tips = groupedTips.get(groupTitle) ?? [];
    return {
      slug: slugify(groupTitle),
      title: groupTitle,
      description: GROUP_DESCRIPTION[groupTitle],
      tips,
    };
  }).filter((group) => group.tips.length > 0);
}

let memoizedGroups: SlideGroup[] | null = null;

function getGroups(): SlideGroup[] {
  if (!memoizedGroups) {
    memoizedGroups = buildGroups();
  }
  return memoizedGroups;
}

export function getMergedTipsPresentation(): {
  groups: SlideGroup[];
  totalTips: number;
} {
  const groups = getGroups();

  return {
    groups,
    totalTips: groups.reduce((sum, group) => sum + group.tips.length, 0),
  };
}

export function getAllTips(): TipSlideData[] {
  return getGroups().flatMap((group) => group.tips);
}

export function getTipBySlug(slug: string): TipSlideData | null {
  const normalized = slug.trim().toLowerCase();
  return getAllTips().find((tip) => tip.slug === normalized) ?? null;
}

export function getGroupBySlug(slug: string): SlideGroup | null {
  const normalized = slug.trim().toLowerCase();
  return getGroups().find((group) => group.slug === normalized) ?? null;
}

export function getTipSlugs(): string[] {
  return getAllTips().map((tip) => tip.slug);
}

export function getGroupSlugs(): string[] {
  return getGroups().map((group) => group.slug);
}

export function getAdjacentTips(slug: string): {
  previous: TipSlideData | null;
  next: TipSlideData | null;
} {
  const tips = getAllTips();
  const index = tips.findIndex((tip) => tip.slug === slug.trim().toLowerCase());

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? tips[index - 1] : null,
    next: index < tips.length - 1 ? tips[index + 1] : null,
  };
}
