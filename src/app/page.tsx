import InteractiveHero from "@/components/ui/hero-section-nexus";
import { Features } from "@/components/ui/features-4";
import Pricing from "@/components/ui/pricing-component";
import Footer from "@/components/ui/footer";
import SiteNavbar from "@/components/ui/site-navbar";

export default function Home() {
  return (
    <div>
      <SiteNavbar />
      <InteractiveHero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}