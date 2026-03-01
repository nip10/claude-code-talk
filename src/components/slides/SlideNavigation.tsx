"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SlideNavigationProps {
  previousHref?: string;
  nextHref?: string;
}

export default function SlideNavigation({ previousHref, nextHref }: SlideNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (
        target?.isContentEditable ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT"
      ) {
        return;
      }

      if ((event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") && nextHref) {
        event.preventDefault();
        router.push(nextHref);
        return;
      }

      if ((event.key === "ArrowLeft" || event.key === "PageUp") && previousHref) {
        event.preventDefault();
        router.push(previousHref);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextHref, previousHref, router]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 px-3 pb-3 sm:px-5 sm:pb-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl border border-claude-border-dark bg-claude-bg-darker/85 p-2.5 text-sm text-claude-muted backdrop-blur md:p-3">
        <Link
          href="/slides"
          className="pointer-events-auto rounded-full border border-claude-border-dark bg-claude-bg-darker/70 px-3 py-1.5 transition hover:border-claude-terracotta/70"
        >
          All slides
        </Link>

        <div className="flex items-center gap-2">
          {previousHref ? (
            <Link
              href={previousHref}
              className="pointer-events-auto rounded-full border border-claude-border-dark bg-claude-bg-darker/70 px-3 py-1.5 transition hover:border-claude-terracotta/70"
              aria-label="Previous slide"
            >
              <span aria-hidden>←</span>
              <span className="hidden sm:inline"> Prev</span>
            </Link>
          ) : (
            <span className="rounded-full border border-claude-border-dark/60 px-3 py-1.5 opacity-50">
              <span aria-hidden>←</span>
              <span className="hidden sm:inline"> Prev</span>
            </span>
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              className="pointer-events-auto rounded-full border border-claude-border-dark bg-claude-bg-darker/70 px-3 py-1.5 transition hover:border-claude-terracotta/70"
              aria-label="Next slide"
            >
              <span className="hidden sm:inline">Next </span>
              <span aria-hidden>→</span>
            </Link>
          ) : (
            <span className="rounded-full border border-claude-border-dark/60 px-3 py-1.5 opacity-50">
              <span className="hidden sm:inline">Next </span>
              <span aria-hidden>→</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
