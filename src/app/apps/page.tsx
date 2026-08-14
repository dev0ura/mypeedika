import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Apps from "@/components/ui/apps";
import CTABanner from "@/components/ui/cta-banner";
import Footer from "@/components/ui/footer";
import JsonLd from "@/components/json-ld";
import { apps } from "@/data/apps";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Shopify apps",
  description:
    "Replyr answers your Instagram DMs using live Shopify data. Shopalizer shows what any Shopify store is running.",
  alternates: { canonical: `${SITE.url}/apps` },
};

const appsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "myPeedika apps",
  itemListElement: apps.map((app, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      description: app.tagline,
      applicationCategory: "BusinessApplication",
      ...(app.url ? { url: app.url } : {}),
    },
  })),
};

export default function AppsPage() {
  return (
    <>
      <JsonLd data={appsSchema} />
      <Navbar />
      <main>
        <section style={{ paddingBlock: "72px 48px" }}>
          <div className="container">
            <h1 className="t-hero" style={{ maxInlineSize: "12ch", marginBlockEnd: 24 }}>
              Apps we make
            </h1>
            <p className="t-lead" style={{ maxInlineSize: "46ch" }}>
              Software we own and run ourselves, built for the gaps we kept hitting
              while working on other people&apos;s stores.
            </p>
          </div>
        </section>
        <Apps heading={false} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
