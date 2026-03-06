import { ReactNode } from "react";
import SlideWrapper from "@/components/SlideWrapper";
import Tag from "@/components/Tag";
import { formatInlineCode } from "@/lib/format-inline-code";

interface TipSlideProps {
  title: string;
  description?: string;
  tags?: string[];
  children?: ReactNode;
}

export default function TipSlide({ title, description, tags, children }: TipSlideProps) {
  return (
    <SlideWrapper className="justify-start py-8" innerClassName="items-stretch justify-start pb-20">
      <div className="flex w-full flex-col gap-5">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold leading-tight">{formatInlineCode(title)}</h3>
          {description && (
            <p className="max-w-4xl text-lg leading-relaxed text-claude-muted">
              {formatInlineCode(description)}
            </p>
          )}
        </div>

        <div className="h-px bg-gradient-to-r from-claude-terracotta/40 via-claude-terracotta/15 to-transparent" />

        {children && (
          <div className="tip-sections flex-1 overflow-y-auto pr-1">
            {children}
          </div>
        )}
      </div>
    </SlideWrapper>
  );
}
