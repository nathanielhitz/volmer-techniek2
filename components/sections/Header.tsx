"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { content } from "@/content";

const { header } = content;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 120,
          transition: "background 0.4s cubic-bezier(.2,.7,.2,1), border-color 0.4s cubic-bezier(.2,.7,.2,1), backdrop-filter 0.4s cubic-bezier(.2,.7,.2,1)",
          background: isScrolled
            ? "rgba(20,20,22,0.95)"
            : "linear-gradient(180deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 100%)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
          borderBottom: isScrolled
            ? "1px solid var(--color-graphite)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: isScrolled ? "14px 20px" : "24px 20px",
            transition: "padding 0.4s cubic-bezier(.2,.7,.2,1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="md:px-10 lg:px-20"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label={header.logoAriaLabel}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "17px",
              letterSpacing: "-0.01em",
              color: "var(--color-ash)",
              flexShrink: 0,
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
              style={{ transform: "rotate(45deg)", flexShrink: 0 }}
            >
              <rect width="10" height="10" fill="var(--color-molten)" />
            </svg>
            VOLMER TECHNIEK
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label={header.nav.ariaLabel}
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "4px" }}
          >
            {header.nav.items.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex" style={{ alignItems: "center" }}>
            <DesktopCTA label={header.cta.desktop} />
          </div>

          {/* Hamburger — aria-label wisselt op basis van open-state */}
          <button
            ref={hamburgerRef}
            className="lg:hidden"
            aria-label={mobileOpen ? header.mobileMenu.closeLabel : header.mobileMenu.openLabel}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen(true)}
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "var(--color-ash)",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "currentColor",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "currentColor",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 130,
            background: "rgba(10,10,11,0.6)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={header.mobileMenu.panelAriaLabel}
        className="lg:hidden"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 140,
          width: "min(85vw, 360px)",
          background: "var(--color-carbon)",
          borderLeft: "1px solid var(--color-graphite)",
          display: "flex",
          flexDirection: "column",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(.2,.7,.2,1)",
          visibility: mobileOpen ? "visible" : "hidden",
        }}
      >
        {/* Panel header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 24px",
            borderBottom: "1px solid var(--color-graphite)",
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "15px",
              letterSpacing: "-0.01em",
              color: "var(--color-ash)",
            }}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              aria-hidden="true"
              style={{ transform: "rotate(45deg)" }}
            >
              <rect width="8" height="8" fill="var(--color-molten)" />
            </svg>
            VOLMER TECHNIEK
          </Link>

          <button
            ref={closeButtonRef}
            aria-label={header.mobileMenu.closeLabel}
            onClick={() => setMobileOpen(false)}
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-steel-30)",
              fontSize: "20px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <nav
          aria-label={header.mobileMenu.navAriaLabel}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "40px 24px 24px",
            gap: "8px",
            overflowY: "auto",
          }}
        >
          {header.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "28px",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                color: "var(--color-ash)",
                padding: "12px 0",
                borderBottom: "1px solid var(--color-graphite)",
                display: "block",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-molten)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-ash)";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <div style={{ padding: "24px" }}>
          <a
            href="tel:+31653537747"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              height: "48px",
              border: "1px solid var(--color-molten)",
              color: "var(--color-ash)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-molten)";
              e.currentTarget.style.color = "var(--color-obsidian)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-ash)";
            }}
          >
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              aria-hidden="true"
            >
              <rect width="5" height="5" fill="var(--color-molten)" />
            </svg>
            +31 6 53 53 77 47
          </a>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        padding: "10px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 500,
        color: "var(--color-ash)",
        opacity: 0.78,
        transition: "opacity 0.2s cubic-bezier(.2,.7,.2,1)",
        display: "block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "1";
        const line = e.currentTarget.querySelector<HTMLSpanElement>(".nav-underline");
        if (line) line.style.transform = "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "0.78";
        const line = e.currentTarget.querySelector<HTMLSpanElement>(".nav-underline");
        if (line) line.style.transform = "scaleX(0)";
      }}
    >
      {children}
      <span
        className="nav-underline"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "16px",
          right: "16px",
          bottom: "4px",
          height: "1px",
          background: "var(--color-molten)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.25s cubic-bezier(.2,.7,.2,1)",
        }}
      />
    </a>
  );
}

function DesktopCTA({ label }: { label: string }) {
  return (
    <a
      href="tel:+31653537747"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        height: "44px",
        padding: "0 18px",
        border: "1px solid var(--border-rule-strong)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-ash)",
        transition: "border-color 0.25s cubic-bezier(.2,.7,.2,1), color 0.25s cubic-bezier(.2,.7,.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-molten)";
        e.currentTarget.style.color = "var(--color-molten)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-rule-strong)";
        e.currentTarget.style.color = "var(--color-ash)";
      }}
    >
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        fill="none"
        aria-hidden="true"
      >
        <rect width="5" height="5" fill="var(--color-molten)" />
      </svg>
      {label}
    </a>
  );
}
