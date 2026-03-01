import SlideWrapper from "@/components/SlideWrapper";
import Tag from "@/components/Tag";
import type { SlideBlock } from "@/lib/mergedTips";

interface RichTipSlideProps {
  title: string;
  description: string;
  tags: string[];
  sources: string[];
  blocks: SlideBlock[];
  sourceSection: string;
  uncertain?: boolean;
}

function renderTable(rows: string[]) {
  const cleanedRows = rows
    .map((row) => row.trim())
    .filter(Boolean)
    .filter((row) => !/^\|(?:\s*:?-+:?\s*\|)+\s*$/.test(row));

  if (cleanedRows.length === 0) {
    return null;
  }

  const parsed = cleanedRows.map((row) =>
    row
      .split("|")
      .map((cell) => cell.trim())
      .filter(Boolean),
  );

  if (parsed.length === 0 || parsed[0].length === 0) {
    return null;
  }

  const [header, ...body] = parsed;

  return (
    <div className="overflow-x-auto rounded-xl border border-claude-border-dark bg-claude-bg-darker/70 p-3">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead>
          <tr>
            {header.map((cell, i) => (
              <th
                key={`${cell}-${i}`}
                className="border-b border-claude-border-dark px-3 py-2 font-semibold text-claude-text-light"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex} className="align-top">
              {header.map((_, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className="border-b border-claude-border-dark/60 px-3 py-2 text-claude-muted"
                >
                  {row[colIndex] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RichTipSlide({
  title,
  description,
  tags,
  sources,
  blocks,
  sourceSection,
  uncertain = false,
}: RichTipSlideProps) {
  return (
    <SlideWrapper
      className="justify-start py-8"
      innerClassName="items-stretch justify-start"
    >
      <div className="flex h-full w-full flex-col gap-5">
        <div className="flex items-center justify-between gap-3 text-sm text-claude-muted">
          <span className="rounded-full border border-claude-border-dark px-3 py-1">
            {sourceSection}
          </span>
          {uncertain && (
            <span className="rounded-full border border-claude-terracotta/50 bg-claude-terracotta/15 px-3 py-1 text-claude-terracotta">
              Contains [Uncertain]
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-4xl leading-tight text-claude-text-light">{title}</h3>
          {description && (
            <p className="max-w-4xl text-lg leading-relaxed text-claude-muted">{description}</p>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}

        <div className="flex-1 space-y-3 overflow-y-auto pr-1">
          {blocks.map((block, index) => {
            if (block.type === "text") {
              return (
                <p key={index} className="text-base leading-relaxed text-claude-text-light/95">
                  {block.text}
                </p>
              );
            }

            if (block.type === "table") {
              return <div key={index}>{renderTable(block.rows)}</div>;
            }

            return (
              <pre key={index} className="overflow-x-auto rounded-xl border border-claude-border-dark bg-claude-bg-darker p-4 text-sm leading-relaxed text-claude-text-light">
                <code>{block.code}</code>
              </pre>
            );
          })}
        </div>

        {sources.length > 0 && (
          <p className="border-t border-claude-border-dark pt-3 text-sm text-claude-muted">
            Sources: {sources.join(", ")}
          </p>
        )}
      </div>
    </SlideWrapper>
  );
}
