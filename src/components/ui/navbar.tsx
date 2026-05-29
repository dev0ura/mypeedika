"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services"  },
  { label: "Our Work", href: "/portfolio" },
  { label: "Blog",     href: "/blog"      },
  { label: "Pricing",  href: "/pricing"   },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating pill ────────────────────────────────────── */}
      <header
        style={{
          position:  "fixed",
          top:       14,
          left:      "50%",
          transform: "translateX(-50%)",
          width:     "calc(100% - 24px)",
          maxWidth:  1100,
          zIndex:    50,
          borderRadius: 999,
          background: scrolled ? "rgba(250,250,247,0.97)" : "rgba(250,250,247,0.90)",
          backdropFilter:       "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(230,231,226,0.9)",
          boxShadow: scrolled
            ? "0 4px 32px -8px rgba(10,13,12,0.14), 0 1px 0 rgba(255,255,255,0.7) inset"
            : "0 2px 12px -4px rgba(10,13,12,0.08), 0 1px 0 rgba(255,255,255,0.6) inset",
          transition: "box-shadow .25s, background .25s",
        }}
      >
        {/* Inner row — NO display:flex in inline style; Tailwind handles it */}
        <div className="flex items-center justify-between" style={{ height: 52, padding: "0 8px 0 14px" }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 relative z-10" style={{ textDecoration: "none" }}>
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "var(--grad)",
                boxShadow: "0 4px 14px -4px rgba(21,168,154,0.55)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <span className="whitespace-nowrap" style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", color: "var(--ink)" }}>
              my<strong>Peedika</strong>
            </span>
          </Link>

          {/* ── Center nav pill — desktop only (lg+) ── */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5"
            style={{
              background: "rgba(241,242,238,0.65)",
              borderRadius: 999,
              padding: "3px 4px",
              border: "1px solid rgba(230,231,226,0.75)",
            }}
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full whitespace-nowrap"
                style={{
                  fontSize: 13, fontWeight: 500,
                  color: "var(--ink)",
                  opacity: 0.65,
                  textDecoration: "none",
                  padding: "5px 14px",
                  transition: "opacity .15s, background .15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.background = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.65"; e.currentTarget.style.background = "transparent"; }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2 shrink-0 relative z-10">
            {/* Desktop CTAs — lg+ only */}
            <a
              href="https://wa.me/919048814964"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center"
              style={{ fontSize: 12, fontWeight: 500, color: "var(--muted-color)", textDecoration: "none", padding: "6px 12px", borderRadius: 999, transition: "color .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-color)")}
            >
              WhatsApp
            </a>
            <a
              href="https://cal.com/rabeeh0ta/mypeedika-demo"
              target="_blank"
              rel="noreferrer"
              className="btn-primary hidden lg:inline-flex"
              style={{ fontSize: 12, padding: "8px 18px" }}
            >
              Book a free call
            </a>

            {/* Burger — mobile/tablet only (below lg) */}
            <button
              className="lg:hidden flex items-center justify-center"
              style={{
                background: "rgba(241,242,238,0.8)",
                border: "1px solid rgba(230,231,226,0.9)",
                borderRadius: 999,
                width: 34, height: 34,
                cursor: "pointer",
                color: "var(--ink)",
              }}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            top: 76,
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 24px)",
            maxWidth: 420,
            zIndex: 49,
            background: "rgba(250,250,247,0.98)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(230,231,226,0.9)",
            borderRadius: 20,
            boxShadow: "0 8px 40px -8px rgba(10,13,12,0.18)",
            padding: "6px 6px 10px",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-xl"
              style={{
                fontSize: 15, fontWeight: 500, color: "var(--ink)",
                textDecoration: "none", padding: "11px 16px",
                transition: "background .12s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--mist)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ padding: "8px 6px 0", borderTop: "1px solid var(--rule)", marginTop: 4 }}>
            <a
              href="https://cal.com/rabeeh0ta/mypeedika-demo"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ display: "block", textAlign: "center", width: "100%", justifyContent: "center" }}
              onClick={() => setOpen(false)}
            >
              Book a free call
            </a>
          </div>
        </div>
      )}
    </>
  );
}
