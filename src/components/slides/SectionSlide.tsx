import SlideWrapper from "@/components/SlideWrapper";

interface SectionSlideProps {
  number?: string | number;
  title: string;
  description?: string;
}

export default function SectionSlide({ number, title, description }: SectionSlideProps) {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-start gap-6">
        {number && (
          <span className="text-lg font-medium text-claude-muted">
            Section {number}
          </span>
        )}
        <h2 className="text-5xl font-bold leading-tight text-claude-terracotta">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-xl leading-relaxed text-claude-muted">
            {description}
          </p>
        )}
      </div>
    </SlideWrapper>
  );
}
