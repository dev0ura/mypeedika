import Image from "next/image";
import { CONTACT } from "@/data/site";
import landingShop from "../../../public/landing-shop.png";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.section} landing-hero`}>
      <div className="container">
        <div className={`${styles.grid} hero-grid`}>
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

          <div className={`${styles.art} hero-art`}>
            <Image
              src={landingShop}
              alt="A miniature myPeedika storefront with a striped awning and a shopping cart"
              priority
              sizes="(max-width: 899px) 100vw, 55vw"
              className="hero-shop-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
