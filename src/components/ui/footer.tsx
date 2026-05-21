"use client";
import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";

const col1 = [
  { label: "New Shopify Store", href: "/services#new-store" },
  { label: "Store Redesign", href: "/services#store-redesign" },
  { label: "Store Fix / Rescue", href: "/services#store-fix" },
  { label: "Platform Migration", href: "/services#migration" },
  { label: "Ongoing Support", href: "/services#support" },
  { label: "Pricing", href: "/pricing" },
];

const col2 = [
  { label: "Our Work", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Book a free call", href: "https://cal.com/rabeeh0ta/mypeedika-demo", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", borderTop: "1px solid var(--ink-border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b" style={{ borderColor: "var(--ink-border)" }}>

          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "var(--grad)", boxShadow: "0 6px 20px -6px rgba(21,168,154,0.55)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                </svg>
              </div>
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em" }}>
                my<strong>Peedika</strong>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: 20, maxWidth: 260 }}>
              We build beautiful Shopify stores for Indian businesses. Fast delivery, honest pricing.
            </p>
            <div className="space-y-2">
              {[
                { Icon: Mail, label: "contact@mypeedika.com", href: "mailto:contact@mypeedika.com" },
                { Icon: Phone, label: "+91 90488 14964", href: "tel:+919048814964" },
                { Icon: Instagram, label: "@mypeedika", href: "https://instagram.com/mypeedika" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2"
                  style={{ fontSize: 13, color: "var(--ink-muted)", textDecoration: "none", transition: "color .15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                >
                  <Icon className="w-3.5 h-3.5" /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="micro mb-5" style={{ color: "var(--ink-muted)" }}>Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col1.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: 14, color: "var(--ink-muted)", textDecoration: "none", transition: "color .15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="micro mb-5" style={{ color: "var(--ink-muted)" }}>Company</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col2.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 14, color: "var(--ink-muted)", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      style={{ fontSize: 14, color: "var(--ink-muted)", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6">
          <p style={{ fontSize: 12, color: "var(--ink-muted)" }}>© {new Date().getFullYear()} myPeedika. Made in India.</p>
          <p style={{ fontSize: 12, color: "var(--ink-muted)" }}>Shopify Partner · Kerala</p>
        </div>
      </div>
    </footer>
  );
}
