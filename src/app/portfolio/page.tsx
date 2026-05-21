import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";
import PortfolioGrid from "@/components/ui/portfolio-grid";

export const metadata: Metadata = {
  title: "Our Work — Shopify Stores We've Built | myPeedika",
  description: "See the Shopify stores we've designed and built for Indian businesses. Real results, real stores. 100+ stores launched.",
};

export default function PortfolioPage() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Header */}
      <section style={{ background: "var(--ink)", padding: "88px 0", borderBottom: "1px solid var(--ink-border)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline max-md:grid-cols-1 max-md:gap-6">
            <p className="display grad-text" style={{ fontSize: 88, lineHeight: 0.9 }}>Work</p>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--paper)", marginBottom: 20 }}>
                Stores we&apos;ve built
              </h1>
              <p style={{ fontSize: 18, color: "var(--ink-subtle)", lineHeight: 1.6, maxWidth: 480 }}>
                Every store here is a real business we&apos;ve helped launch or improve. Each one is unique — just like yours will be.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PortfolioGrid />
      <CTABanner />
      <Footer />
    </div>
  );
}
