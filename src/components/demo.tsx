import React from 'react';
import InteractiveHero from "@/components/ui/hero-section-nexus";
import Pricing from "@/components/ui/pricing-component";
import Footer from "@/components/ui/footer";

export function HomePage() {
  return (
    <div>
      <InteractiveHero />
      <Pricing />
      <Footer />
    </div>
  );
}
