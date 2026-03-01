import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SlideWrapper from "@/components/SlideWrapper";
import Tag from "@/components/Tag";

interface RichTipSlideProps {
  title: string;
  description: string;
  tags: string[];
  sources: string[];
  markdown: string;
  sourceSection: string;
  uncertain?: boolean;
}

export default function RichTipSlide({
  title,
  description,
  tags,
  sources,
  markdown,
  sourceSection,
  uncertain = false,
}: RichTipSlideProps) {
  return (
    <SlideWrapper className="justify-start py-8" innerClassName="items-stretch justify-start pb-20">
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

        <div className="markdown-slide flex-1 overflow-y-auto pr-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
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
