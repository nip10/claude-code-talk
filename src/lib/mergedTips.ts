import fs from "node:fs";
import path from "node:path";

export type SlideBlock =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "code";
      language: string;
      code: string;
    }
  | {
      type: "table";
      rows: string[];
    };

export interface TipSlideData {
  title: string;
  description: string;
  tags: string[];
  sources: string[];
  blocks: SlideBlock[];
  sourceSection: string;
  uncertain: boolean;
}

export interface SlideGroup {
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

function cleanSectionTitle(raw: string): string {
  return raw.replace(/^\d+\.\s*/, "").trim();
}

function normalizeTextLine(line: string): string {
  let normalized = line.trim();

  if (normalized.startsWith("- ")) {
    normalized = normalized.slice(2).trim();
  }

  if (normalized.startsWith("> ")) {
    normalized = normalized.slice(2).trim();
  }

  normalized = normalized.replace(/^\*\*(.+?)\*\*:\s*/, "$1: ");
  return normalized;
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

function parseBlocks(lines: string[]): SlideBlock[] {
  const blocks: SlideBlock[] = [];
  let inCode = false;
  let codeLanguage = "text";
  let codeLines: string[] = [];
  let tableRows: string[] = [];

  const flushTable = () => {
    if (tableRows.length > 0) {
      blocks.push({
        type: "table",
        rows: [...tableRows],
      });
      tableRows = [];
    }
  };

  const flushCode = () => {
    if (codeLines.length > 0) {
      blocks.push({
        type: "code",
        language: codeLanguage,
        code: codeLines.join("\n"),
      });
      codeLines = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trimEnd();
    const compact = trimmed.trim();

    if (inCode) {
      if (compact.startsWith("```")) {
        inCode = false;
        flushCode();
      } else {
        codeLines.push(trimmed);
      }
      continue;
    }

    if (compact.startsWith("```")) {
      flushTable();
      inCode = true;
      codeLanguage = compact.slice(3).trim() || "text";
      continue;
    }

    if (compact.startsWith("|")) {
      tableRows.push(compact);
      continue;
    }

    flushTable();

    if (!compact || compact === "---") {
      continue;
    }

    blocks.push({
      type: "text",
      text: normalizeTextLine(compact),
    });
  }

  if (inCode) {
    flushCode();
  }

  flushTable();
  return blocks;
}

function parseTip(title: string, lines: string[], sourceSection: string): TipSlideData {
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

  const whatLine = contentLines.find((line) => line.trim().startsWith("- **What:**"));
  const fallbackLine = contentLines.find((line) => line.trim());

  const description = whatLine
    ? normalizeTextLine(whatLine).replace(/^What:\s*/, "").trim()
    : normalizeTextLine(fallbackLine ?? "");

  return {
    title,
    description,
    tags,
    sources,
    blocks: parseBlocks(contentLines),
    sourceSection,
    uncertain: contentLines.some((line) => line.includes("[Uncertain]")),
  };
}

function parseMergedTips(markdown: string): RawSection[] {
  const lines = markdown.split(/\r?\n/);
  const sections: RawSection[] = [];

  let currentSection: RawSection | null = null;
  let currentTipTitle: string | null = null;
  let currentTipLines: string[] = [];

  const flushTip = () => {
    if (!currentSection || !currentTipTitle) {
      return;
    }

    currentSection.tips.push(
      parseTip(currentTipTitle, currentTipLines, currentSection.title),
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

export function getMergedTipsPresentation(): {
  groups: SlideGroup[];
  totalTips: number;
} {
  const mergedFilePath = path.join(process.cwd(), "output", "MERGED-tips-and-tricks.md");
  const mergedContent = fs.readFileSync(mergedFilePath, "utf8");
  const parsedSections = parseMergedTips(mergedContent);

  const groupedTips = new Map<(typeof GROUP_ORDER)[number], TipSlideData[]>();

  for (const section of parsedSections) {
    const bucket = section.number ? SECTION_TO_GROUP[section.number] : "Appendix";
    const targetGroup = bucket ?? "Appendix";

    if (!groupedTips.has(targetGroup)) {
      groupedTips.set(targetGroup, []);
    }

    const slidesForGroup = groupedTips.get(targetGroup);
    if (!slidesForGroup) {
      continue;
    }

    slidesForGroup.push(...section.tips);
  }

  const groups: SlideGroup[] = GROUP_ORDER.map((groupTitle) => {
    const tips = groupedTips.get(groupTitle) ?? [];
    return {
      title: groupTitle,
      description: GROUP_DESCRIPTION[groupTitle],
      tips,
    };
  }).filter((group) => group.tips.length > 0);

  return {
    groups,
    totalTips: groups.reduce((sum, group) => sum + group.tips.length, 0),
  };
}
