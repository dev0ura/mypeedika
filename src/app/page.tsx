import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";
import Works from "@/components/ui/works";
import Apps from "@/components/ui/apps";
import BlogPreview from "@/components/ui/blog-preview";
import FAQ from "@/components/ui/faq";
import CTABanner from "@/components/ui/cta-banner";
import Footer from "@/components/ui/footer";
import JsonLd from "@/components/json-ld";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { SITE, CONTACT } from "@/data/site";

/* Every claim here is one we can point at. No store counts, no delivery
   promises, no invented clients — see docs/redesign-brief.md. */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description:
    "Shopify store design, speed optimisation, apps, and migrations for businesses in India and the Gulf.",
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og-image.png`,
  telephone: "+919048814964",
  email: CONTACT.email,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
  ],
  sameAs: [CONTACT.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shopify services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#business` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={businessSchema} />
      <JsonLd data={webSiteSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Works />
        <Apps />
        <BlogPreview />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
