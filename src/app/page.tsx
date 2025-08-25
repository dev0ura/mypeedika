import InteractiveHero from "@/components/ui/hero-section-nexus";
import { Features } from "@/components/ui/features-4";
import Products from "@/components/ui/products";
import Footer from "@/components/ui/footer";
import SiteNavbar from "@/components/ui/site-navbar";
import { Connect } from "@/components/ui/connect";

export default function Home() {
  return (
    <div>
      <SiteNavbar />
      <InteractiveHero />
      <Features />
      <Products />
      <Connect />
      <Footer />
    </div>
  );
}