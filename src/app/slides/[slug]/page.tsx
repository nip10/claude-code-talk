import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SlideNavigation from "@/components/slides/SlideNavigation";
import { getAdjacentSlides, getSlideBySlug, getSlideSlugs } from "@/lib/slides";

interface SlidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getSlideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const slide = getSlideBySlug(slug);

  if (!slide) {
    return {
      title: "Slide Not Found",
    };
  }

  return {
    title: `${slide.title} | Claude Code Tips`,
    description: slide.description || "Claude Code slide",
  };
}

export default async function SlidePage({ params }: SlidePageProps) {
  const { slug } = await params;
  const slide = getSlideBySlug(slug);

  if (!slide) {
    notFound();
  }

  const { previous, next } = getAdjacentSlides(slug);
  const SlideComponent = slide.Component;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <SlideComponent />
      <SlideNavigation
        previousHref={previous ? `/slides/${previous.slug}` : undefined}
        nextHref={next ? `/slides/${next.slug}` : undefined}
      />
    </div>
  );
}
