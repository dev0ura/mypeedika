"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/* Restrained entrance that degrades safely.
   The server renders no state attribute at all, so with JS blocked or slow
   the content is simply visible — never opacity:0 waiting on a script.
   The hidden state is applied on mount, and only to elements that start
   below the fold, so nothing above it flashes. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Already visible on load — no reveal, no flash.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "hidden";
    if (delay) el.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "shown";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
