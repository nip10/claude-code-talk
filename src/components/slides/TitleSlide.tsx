import SlideWrapper from "@/components/SlideWrapper";

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  presenter?: string;
  date?: string;
}

export default function TitleSlide({ title, subtitle, presenter, date }: TitleSlideProps) {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl text-2xl text-claude-muted">{subtitle}</p>
        )}
        <div className="mt-4 flex flex-col gap-1">
          {presenter && <p className="text-lg text-claude-text-light">{presenter}</p>}
          {date && <p className="text-sm text-claude-muted">{date}</p>}
        </div>
      </div>
    </SlideWrapper>
  );
}
