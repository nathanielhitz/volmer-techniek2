"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollFX — twee subtiele scroll-effecten, één keer gemount in de layout:
 *
 * 1. Scroll-progress: 1px Molten lijn bovenaan die de leespositie toont.
 * 2. Reveal-on-scroll: elementen met [data-reveal] faden zacht in zodra ze
 *    in beeld komen. De verberg-stijl staat onder `.reveal-ready`, die deze
 *    component op <html> zet — zonder JS blijft alle content zichtbaar.
 *
 * Respecteert prefers-reduced-motion via globals.css.
 */
export function ScrollFX() {
  const barRef = useRef<HTMLDivElement>(null);

  // Scroll-progress bar
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = barRef.current;
      if (!el) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
