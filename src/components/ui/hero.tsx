import HeroGlobe from "./hero-globe";
import { CONTACT } from "@/data/site";

export default function Hero() {
  return (
    <section style={{ paddingBlock: "clamp(40px, 6vw, 88px)" }}>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="t-hero" style={{ marginBlockEnd: 26 }}>
              We build Shopify stores
            </h1>

            <p
              className="t-lead"
              style={{ maxInlineSize: "34ch", marginBlockEnd: 36 }}
            >
              Designed around your brand, your products, and the way your
              customers shop.
            </p>

            <div className="flex flex-wrap items-center" style={{ gap: 12 }}>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ink"
              >
                Contact us
              </a>
              <a
                href={CONTACT.booking}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                Book a call
              </a>
            </div>
          </div>

          <div className="hero-art">
            <HeroGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
