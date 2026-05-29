import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import TrustBar from "@/components/ui/trust-bar";
import ServicesGrid from "@/components/ui/services-grid";
import HowItWorks from "@/components/ui/how-it-works";
import PortfolioGrid from "@/components/ui/portfolio-grid";
import BlogPreview from "@/components/ui/blog-preview";
import FAQ from "@/components/ui/faq";
import CTABanner from "@/components/ui/cta-banner";
import Footer from "@/components/ui/footer";
import JsonLd from "@/components/json-ld";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.mypeedika.com" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.mypeedika.com/#business",
  name: "myPeedika",
  description: "Shopify store setup, design, and support for Indian businesses. 100+ stores launched, 7-day go-live.",
  url: "https://www.mypeedika.com",
  logo: "https://www.mypeedika.com/logo.png",
  image: "https://www.mypeedika.com/og-image.png",
  telephone: "+919048814964",
  email: "contact@mypeedika.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  openingHours: "Mo-Sa 09:00-19:00",
  sameAs: ["https://www.instagram.com/mypeedika"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shopify Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Shopify Store Setup", description: "Complete Shopify store built from scratch in 5-7 days." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Redesign", description: "Full theme redesign to improve conversions and brand." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Fix", description: "Diagnose and fix broken checkouts, slow stores, and app conflicts." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Platform Migration to Shopify", description: "Migrate from WooCommerce, Wix, or any other platform to Shopify." } },
    ],
  },
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.mypeedika.com/#website",
  name: "myPeedika",
  url: "https://www.mypeedika.com",
  publisher: { "@id": "https://www.mypeedika.com/#business" },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <JsonLd data={localBusiness} />
      <JsonLd data={webSite} />
      <JsonLd data={faqPage} />
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <PortfolioGrid preview />
      <BlogPreview />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
