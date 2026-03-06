import { ReactNode } from "react";
import SlideWrapper from "@/components/SlideWrapper";

interface ContentSlideProps {
  title: string;
  children?: ReactNode;
}

export default function ContentSlide({ title, children }: ContentSlideProps) {
  return (
    <SlideWrapper className="justify-start py-8" innerClassName="items-stretch justify-start pb-20">
      <div className="flex w-full flex-col gap-6">
        <h3 className="text-4xl font-bold leading-tight">{title}</h3>
        <div className="h-px bg-gradient-to-r from-claude-terracotta/40 via-claude-terracotta/15 to-transparent" />
        {children && <div className="flex-1 overflow-y-auto pr-1">{children}</div>}
      </div>
    </SlideWrapper>
  );
}
