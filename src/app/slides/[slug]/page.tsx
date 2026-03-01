import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichTipSlide from "@/components/slides/RichTipSlide";
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

      <div className="fixed bottom-4 left-0 right-0 mx-auto flex w-full max-w-5xl items-center justify-between px-6 text-sm text-claude-muted">
        <Link
          href="/slides"
          className="rounded-full border border-claude-border-dark bg-claude-bg-darker/70 px-3 py-1.5 hover:border-claude-terracotta/70"
        >
          All slides
        </Link>
        <div className="flex items-center gap-2">
          {previous ? (
            <Link
              href={`/slides/${previous.slug}`}
              className="rounded-full border border-claude-border-dark bg-claude-bg-darker/70 px-3 py-1.5 hover:border-claude-terracotta/70"
            >
              Prev
            </Link>
          ) : (
            <span className="rounded-full border border-claude-border-dark/60 px-3 py-1.5 opacity-50">
              Prev
            </span>
          )}

          {next ? (
            <Link
              href={`/slides/${next.slug}`}
              className="rounded-full border border-claude-border-dark bg-claude-bg-darker/70 px-3 py-1.5 hover:border-claude-terracotta/70"
            >
              Next
            </Link>
          ) : (
            <span className="rounded-full border border-claude-border-dark/60 px-3 py-1.5 opacity-50">
              Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
