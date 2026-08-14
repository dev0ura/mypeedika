import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Works from "@/components/ui/works";
import CTABanner from "@/components/ui/cta-banner";
import Footer from "@/components/ui/footer";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Stores we built",
  description:
    "Live Shopify stores built by myPeedika. Open them and judge for yourself.",
  alternates: { canonical: `${SITE.url}/works` },
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingBlock: "72px 48px" }}>
          <div className="container">
            <h1 className="t-hero" style={{ maxInlineSize: "12ch", marginBlockEnd: 24 }}>
              Stores we built
            </h1>
            <p className="t-lead" style={{ maxInlineSize: "46ch" }}>
              Every one of these is live right now. Open them, browse them, check
              them on your phone. That is the only review that counts.
            </p>
          </div>
        </section>
        <Works heading={false} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
