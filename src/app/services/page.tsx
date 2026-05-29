import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";
import JsonLd from "@/components/json-ld";
import { services } from "@/data/services";
import {
  Store, Layout, Wrench, ArrowRightLeft, CreditCard, Headphones,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "store":             Store,
  "layout":            Layout,
  "wrench":            Wrench,
  "arrow-right-left":  ArrowRightLeft,
  "credit-card":       CreditCard,
  "headphones":        Headphones,
};

export const metadata: Metadata = {
  title: "Shopify Services for Indian Businesses",
  description: "New store setup, redesign, store fix, migration, payment setup, and ongoing support. Complete Shopify services for Indian businesses. Starting from ₹15,000.",
  keywords: ["shopify store setup india", "shopify redesign india", "shopify migration india", "shopify fix india", "shopify developer kerala"],
  alternates: { canonical: "https://www.mypeedika.com/services" },
  openGraph: { url: "https://www.mypeedika.com/services" },
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shopify Services by myPeedika",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@type": "Organization", name: "myPeedika", url: "https://www.mypeedika.com" },
      areaServed: "India",
      url: `https://www.mypeedika.com/services#${s.id}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <JsonLd data={serviceListSchema} />
      <Navbar />

      {/* Header — dark */}
      <section style={{ background: "var(--ink)", padding: "88px 0", borderBottom: "1px solid var(--ink-border)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline max-md:grid-cols-1 max-md:gap-6">
            <p className="display grad-num" style={{ fontSize: 88, lineHeight: 0.9 }}>01</p>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--paper)", marginBottom: 20 }}>
                Services
              </h1>
              <p style={{ fontSize: 18, color: "var(--ink-subtle)", lineHeight: 1.6, maxWidth: 520 }}>
                We handle the entire Shopify side so you can focus on what you do best — running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "64px 0 88px" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14 space-y-8">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              style={{
                border: "1px solid var(--rule)",
                borderRadius: 8,
                overflow: "hidden",
                scrollMarginTop: 80,
              }}
            >
              <div className="grid lg:grid-cols-[1fr_1.6fr]">
                {/* Left */}
                <div style={{ padding: "40px 40px", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }} className="lg:border-b-0">
                  {(() => { const Icon = iconMap[s.icon]; return Icon ? (
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: "var(--teal-08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <Icon size={22} strokeWidth={1.75} style={{ color: "var(--teal)" }} />
                    </div>
                  ) : null; })()}
                  {s.badge && (
                    <span className="micro mb-3 inline-block" style={{ color: "var(--teal)", background: "rgba(21,168,154,0.1)", padding: "3px 10px", borderRadius: 999 }}>
                      {s.badge}
                    </span>
                  )}
                  <h2 className="display" style={{ fontSize: 28, color: "var(--ink)", marginBottom: 8 }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "var(--teal)", fontWeight: 600, marginBottom: 14 }}>{s.tagline}</p>
                  <p style={{ fontSize: 15, color: "var(--muted-color)", lineHeight: 1.65, marginBottom: 20 }}>{s.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="micro" style={{ color: "var(--muted-color)" }}>Turnaround:</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", background: "var(--mist)", padding: "4px 12px", borderRadius: 999 }}>
                      {s.turnaround}
                    </span>
                  </div>
                </div>

                {/* Right */}
                <div style={{ padding: "40px 40px" }}>
                  <p className="micro mb-6" style={{ color: "var(--muted-color)" }}>What&apos;s included</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 mb-3.5">
                        <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--teal-12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10, color: "var(--teal)", fontWeight: 700, marginTop: 1 }}>✓</span>
                        <span style={{ fontSize: 15, color: "#2b302e", lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://cal.com/rabeeh0ta/mypeedika-demo"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Get a free quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
