"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(250,250,247,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "var(--rule)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{
              background: "var(--grad)",
              boxShadow: "0 6px 20px -6px rgba(21,168,154,0.55)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-space, sans-serif)", fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", color: "var(--ink)" }}>
            my<strong>Peedika</strong>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: "var(--ink)", fontSize: 13, fontWeight: 500, opacity: 0.7, textDecoration: "none", transition: "opacity .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919048814964"
            style={{ fontSize: 13, fontWeight: 500, color: "var(--muted-color)", textDecoration: "none" }}
          >
            +91 90488 14964
          </a>
          <a
            href="https://cal.com/rabeeh0ta/mypeedika-demo"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ fontSize: 13, padding: "9px 20px" }}
          >
            Book a free call
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--ink)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 space-y-1"
          style={{ background: "var(--paper)", borderColor: "var(--rule)" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5"
              style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t mt-3" style={{ borderColor: "var(--rule)" }}>
            <a
              href="https://cal.com/rabeeh0ta/mypeedika-demo"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Book a free call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
