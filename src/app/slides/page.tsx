import Link from "next/link";
import { getMergedTipsPresentation } from "@/lib/mergedTips";

export default function SlidesIndexPage() {
  const { groups, totalTips } = getMergedTipsPresentation();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-8 py-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-claude-terracotta">Slides Index</p>
        <h1 className="text-4xl leading-tight">All Tips and Tricks</h1>
        <p className="text-claude-muted">
          {totalTips} slides generated from `output/MERGED-tips-and-tricks.md`.
        </p>
      </div>

      <div className="space-y-6">
        {groups.map((group) => (
          <section
            key={group.slug}
            className="rounded-2xl border border-claude-border-dark bg-claude-bg-darker/70 p-5"
          >
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl">{group.title}</h2>
                <p className="text-sm text-claude-muted">{group.description}</p>
              </div>
              <p className="text-sm text-claude-muted">{group.tips.length} slides</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {group.tips.map((tip) => (
                <Link
                  key={tip.slug}
                  href={`/slides/${tip.slug}`}
                  className="rounded-xl border border-claude-border-dark px-3 py-2 text-sm transition hover:border-claude-terracotta/70 hover:text-claude-text-light"
                >
                  {tip.title}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
