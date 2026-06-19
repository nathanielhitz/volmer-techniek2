"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

/**
 * StickyCallBar — vaste mobiele CTA-balk (bellen + offerte).
 *
 * - Alleen op mobiel/tablet (lg:hidden).
 * - Verschijnt na ~25% scroll (brandbook §9).
 * - Verbergt zich zodra de contactsectie in beeld is, zodat de balk
 *   het formulier nooit afdekt.
 * - Respecteert prefers-reduced-motion (geen slide, alleen fade).
 */
export function StickyCallBar() {
  const t = useTranslations("stickyCta");
  const [visible, setVisible] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const threshold = Math.max(scrollable * 0.25, window.innerHeight * 0.6);
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const shown = visible && !atContact;

  return (
    <div
      className={`scb lg:hidden${shown ? " scb--visible" : ""}`}
      aria-hidden={!shown}
    >
      <a
        href="tel:+31653537747"
        className="scb-btn scb-btn--call"
        tabIndex={shown ? 0 : -1}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.5 3h2.2l1.1 3.3-1.6 1.1a9 9 0 0 0 3.4 3.4l1.1-1.6 3.3 1.1V13c0 .6-.4 1-1 1A11 11 0 0 1 2.5 4c0-.6.4-1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
        {t("call")}
      </a>
      <a
        href="#contact"
        className="scb-btn scb-btn--quote"
        tabIndex={shown ? 0 : -1}
      >
        {t("quote")}
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <style>{`
        .scb {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 110;
          display: flex;
          gap: 1px;
          padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px));
          background: rgba(20, 20, 22, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid var(--color-graphite);
          transform: translateY(120%);
          opacity: 0;
          visibility: hidden;
          transition:
            transform 0.4s cubic-bezier(.2,.7,.2,1),
            opacity 0.4s cubic-bezier(.2,.7,.2,1),
            visibility 0.4s;
        }
        .scb--visible {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        .scb-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 16px;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
          transition: background 0.2s cubic-bezier(.2,.7,.2,1), color 0.2s cubic-bezier(.2,.7,.2,1);
        }
        /* Bellen — gevulde Molten, hoogste intentie */
        .scb-btn--call {
          background: var(--color-molten);
          color: var(--color-obsidian);
        }
        .scb-btn--call:active { background: #c23f17; }
        /* Offerte — outline */
        .scb-btn--quote {
          background: transparent;
          color: var(--color-ash);
          border: 1px solid var(--border-rule-strong);
        }
        .scb-btn--quote svg { flex-shrink: 0; }
        .scb-btn:focus-visible {
          outline: 2px solid var(--color-molten);
          outline-offset: -3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .scb { transition: opacity 0.3s, visibility 0.3s; transform: none; }
          .scb--visible { transform: none; }
        }
      `}</style>
    </div>
  );
}
