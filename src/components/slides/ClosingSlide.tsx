import SlideWrapper from "@/components/SlideWrapper";

interface ClosingSlideProps {
  title?: string;
  takeaways?: string[];
  contact?: string;
}

export default function ClosingSlide({
  title = "Thank You",
  takeaways,
  contact,
}: ClosingSlideProps) {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="h-1 w-24 rounded-full bg-claude-terracotta" />
        <h2 className="text-5xl font-bold leading-tight">{title}</h2>
        {takeaways && takeaways.length > 0 && (
          <ul className="flex flex-col gap-3 text-left text-xl text-claude-muted">
            {takeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-claude-terracotta" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {contact && (
          <p className="mt-4 text-lg text-claude-muted">{contact}</p>
        )}
        <div className="h-1 w-24 rounded-full bg-claude-terracotta" />
      </div>
    </SlideWrapper>
  );
}
