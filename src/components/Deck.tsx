"use client";

import { ReactNode, useEffect, useState, Children } from "react";

interface DeckProps {
  children: ReactNode;
}

export default function Deck({ children }: DeckProps) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          setCurrent((prev) => Math.min(prev + 1, total - 1));
          break;
        case "ArrowLeft":
          e.preventDefault();
          setCurrent((prev) => Math.max(prev - 1, 0));
          break;
        case "Home":
          e.preventDefault();
          setCurrent(0);
          break;
        case "End":
          e.preventDefault();
          setCurrent(total - 1);
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={i === current ? "block" : "hidden"}
          aria-hidden={i !== current}
        >
          {slide}
        </div>
      ))}
      <div className="slide-counter fixed bottom-6 right-8 text-sm text-claude-muted">
        {current + 1} / {total}
      </div>
    </div>
  );
}
