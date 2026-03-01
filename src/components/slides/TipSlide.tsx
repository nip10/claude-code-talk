import { ReactNode } from "react";
import SlideWrapper from "@/components/SlideWrapper";
import Tag from "@/components/Tag";

interface TipSlideProps {
  title: string;
  description?: string;
  tags?: string[];
  children?: ReactNode;
}

export default function TipSlide({ title, description, tags, children }: TipSlideProps) {
  return (
    <SlideWrapper>
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-bold leading-tight">{title}</h3>
          {description && (
            <p className="text-xl leading-relaxed text-claude-muted">{description}</p>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </SlideWrapper>
  );
}
