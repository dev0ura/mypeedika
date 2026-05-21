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

export default function Home() {
  return (
    <div style={{ background: "var(--paper)" }}>
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
