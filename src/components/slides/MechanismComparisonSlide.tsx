import SlideWrapper from "@/components/SlideWrapper";

interface MechanismRow {
  name: string;
  scope: string;
  trigger: string;
  bestFor: string;
  avoidWhen: string;
  exampleArtifact: string;
}

interface MechanismComparisonSlideProps {
  title?: string;
  subtitle?: string;
  rows: readonly MechanismRow[];
}

export default function MechanismComparisonSlide({
  title = "Choose the Right Mechanism",
  subtitle = "CLAUDE.md vs Commands vs Skills vs Hooks",
  rows,
}: MechanismComparisonSlideProps) {
  return (
    <SlideWrapper className="justify-start py-8" innerClassName="items-stretch justify-start pb-20">
      <div className="flex h-full w-full flex-col gap-5">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-claude-terracotta">Mechanism Guide</p>
          <h3 className="text-4xl leading-tight text-claude-text-light">{title}</h3>
          <p className="text-base text-claude-muted">{subtitle}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-claude-border-dark bg-claude-bg-darker/70">
          <div className="grid min-w-[980px] grid-cols-[1fr_0.95fr_0.95fr_1.15fr_1.15fr_1fr] border-b border-claude-border-dark bg-claude-bg-darker/90 text-xs uppercase tracking-wide text-claude-muted">
            <div className="px-3 py-2">Mechanism</div>
            <div className="px-3 py-2">Scope</div>
            <div className="px-3 py-2">Trigger</div>
            <div className="px-3 py-2">Best For</div>
            <div className="px-3 py-2">Avoid When</div>
            <div className="px-3 py-2">Example</div>
          </div>

          <div className="divide-y divide-claude-border-dark">
            {rows.map((row, index) => (
              <div
                key={`${row.name}-${row.exampleArtifact}-${index}`}
                className="grid min-w-[980px] grid-cols-[1fr_0.95fr_0.95fr_1.15fr_1.15fr_1fr] text-sm leading-relaxed"
              >
                <div className="px-3 py-2 font-semibold text-claude-text-light">{row.name}</div>
                <div className="break-words px-3 py-2 text-claude-muted">{row.scope}</div>
                <div className="break-words px-3 py-2 text-claude-muted">{row.trigger}</div>
                <div className="break-words px-3 py-2 text-claude-muted">{row.bestFor}</div>
                <div className="break-words px-3 py-2 text-claude-muted">{row.avoidWhen}</div>
                <div className="break-words px-3 py-2 font-mono text-xs text-claude-terracotta">
                  {row.exampleArtifact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
