import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RichTipSlide from "@/components/slides/RichTipSlide";
import SlideNavigation from "@/components/slides/SlideNavigation";
import { getAdjacentTips, getTipBySlug, getTipSlugs } from "@/lib/mergedTips";

interface SlidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getTipSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    return {
      title: "Slide Not Found",
    };
  }

  return {
    title: `${tip.title} | Claude Code Tips`,
    description: tip.description || "Claude Code tip slide",
  };
}

export default async function SlidePage({ params }: SlidePageProps) {
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  const { previous, next } = getAdjacentTips(slug);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <RichTipSlide
        title={tip.title}
        description={tip.description}
        tags={tip.tags}
        sources={tip.sources}
        markdown={tip.markdown}
        sourceSection={tip.sourceSection}
        uncertain={tip.uncertain}
      />
      <SlideNavigation
        previousHref={previous ? `/slides/${previous.slug}` : undefined}
        nextHref={next ? `/slides/${next.slug}` : undefined}
      />
    </div>
  );
}
