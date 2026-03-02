import Link from "next/link";
import { getSlidesPresentation } from "@/lib/slides";

export default function Home() {
  const { groups, totalSlides } = getSlidesPresentation();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 px-8 py-16">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-claude-terracotta">Workshop Deck</p>
        <h1 className="text-5xl leading-tight">Claude Code Tips & Tricks</h1>
        <p className="max-w-3xl text-lg text-claude-muted">
          Slides are authored as individual MDX files for full customization. Open the slide index
          to browse by section, then share direct URLs for any slide.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/slides"
          className="rounded-2xl border border-claude-border-dark bg-claude-bg-darker/70 p-6 transition hover:border-claude-terracotta/70"
        >
          <p className="text-sm uppercase tracking-widest text-claude-muted">Open</p>
          <p className="mt-2 text-2xl">Slide Index</p>
        </Link>
        <div className="rounded-2xl border border-claude-border-dark bg-claude-bg-darker/70 p-6">
          <p className="text-sm uppercase tracking-widest text-claude-muted">Coverage</p>
          <p className="mt-2 text-2xl">{totalSlides} slides</p>
          <p className="mt-1 text-sm text-claude-muted">{groups.length} grouped sections</p>
        </div>
      </div>
    </main>
  );
}
