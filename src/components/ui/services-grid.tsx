"use client";
import Link from "next/link";
import {
  Store, Layout, Wrench, ArrowRightLeft, CreditCard, Headphones,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  "store":             Store,
  "layout":            Layout,
  "wrench":            Wrench,
  "arrow-right-left":  ArrowRightLeft,
  "credit-card":       CreditCard,
  "headphones":        Headphones,
};

export default function ServicesGrid() {
  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">

        {/* Section header */}
        <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline mb-14 max-md:grid-cols-1 max-md:gap-6">
          <p className="display grad-text" style={{ fontSize: 88, lineHeight: 0.9 }}>01</p>
          <div>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,56px)", color: "var(--ink)", marginBottom: 16 }}>
              What we do
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2b302e", maxWidth: 520 }}>
              Every Shopify store is different. Whether you&apos;re starting from zero or fixing something broken, here&apos;s how we can help.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--rule)", border: "1px solid var(--rule)", borderRadius: 8, overflow: "hidden" }}>
          {services.map((s) => (
            <div
              key={s.id}
              className="group relative"
              style={{ background: "var(--paper)", padding: "32px 28px", transition: "background .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--mist)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--paper)")}
            >
              {s.badge && (
                <span
                  className="absolute top-4 right-4 micro"
                  style={{ color: "var(--teal)", background: "rgba(21,168,154,0.08)", padding: "4px 10px", borderRadius: 999, letterSpacing: "0.12em" }}
                >
                  {s.badge}
                </span>
              )}

              {(() => { const Icon = iconMap[s.icon]; return Icon ? (
                <div
                  style={{
                    width: 40, height: 40, borderRadius: 8, marginBottom: 20,
                    background: "rgba(21,168,154,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Icon size={18} strokeWidth={1.75} style={{ color: "var(--teal)" }} />
                </div>
              ) : null; })()}

              <p className="micro" style={{ color: "var(--muted-color)", marginBottom: 8 }}>
                {s.turnaround}
              </p>

              <h3
                className="display"
                style={{ fontSize: 22, color: "var(--ink)", marginBottom: 6, lineHeight: 1.1 }}
              >
                {s.title}
              </h3>

              <p style={{ fontSize: 13, color: "var(--teal)", fontWeight: 600, marginBottom: 12 }}>
                {s.tagline}
              </p>

              <p style={{ fontSize: 14, color: "var(--muted-color)", lineHeight: 1.6, marginBottom: 20 }}>
                {s.description}
              </p>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", marginBottom: 24 }}>
                {s.includes.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{ fontSize: 13, color: "#2b302e", lineHeight: 1.5, marginBottom: 6 }}
                  >
                    <span style={{ color: "var(--teal)", fontWeight: 700, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
                {s.includes.length > 4 && (
                  <li style={{ fontSize: 12, color: "var(--muted-color)", marginTop: 4 }}>
                    +{s.includes.length - 4} more included
                  </li>
                )}
              </ul>

              <Link
                href={`/services#${s.id}`}
                style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                Full details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
