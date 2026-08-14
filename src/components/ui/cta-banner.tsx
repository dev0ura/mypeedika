import Reveal from "@/components/reveal";
import { CONTACT } from "@/data/site";

export default function CTABanner() {
  return (
    <section className="section" style={{ paddingBlockStart: 0 }}>
      <div className="container">
        <Reveal>
          <div
            className="card card--inverted"
            style={{
              padding: "clamp(40px, 6vw, 88px)",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent shapes. Hidden below 900px, where the card is narrow
                enough for the centred heading to overlap them — Paper text
                on teal is 2.96:1 and on green 1.79:1. ADR 0002. */}
            <span className="cta-blob cta-blob--teal" aria-hidden="true" />
            <span className="cta-blob cta-blob--green" aria-hidden="true" />

            <div style={{ position: "relative" }}>
              <h2 className="t-section" style={{ marginBlockEnd: 20 }}>
                Let&apos;s build
                <br />
                your store
              </h2>
              <p
                className="t-body"
                style={{ maxInlineSize: "40ch", marginInline: "auto", marginBlockEnd: 32 }}
              >
                Tell us what you sell and where you are stuck. We will tell you
                what it takes — honestly, before you pay anything.
              </p>
              <div
                className="flex flex-wrap items-center justify-center"
                style={{ gap: 12 }}
              >
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ background: "var(--paper)", color: "var(--ink)" }}
                >
                  Contact us on WhatsApp
                </a>
                <a
                  href={CONTACT.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--on-ink"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
