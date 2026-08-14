import Reveal from "@/components/reveal";
import { services } from "@/data/services";
import { CONTACT } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)]" style={{ gap: "clamp(32px, 5vw, 72px)" }}>
          {/* Section head — left column, exactly as the reference stacks it */}
          <Reveal>
            <div style={{ position: "sticky", insetBlockStart: 108 }}>
              <h2 className="t-section" style={{ marginBlockEnd: 24 }}>
                Our
                <br />
                services
              </h2>
              <p className="t-body" style={{ maxInlineSize: "32ch", marginBlockEnd: 28 }}>
                Four things, done properly. If what you need is not on this list,
                ask — it is usually some combination of them.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ink"
              >
                Contact us
              </a>
            </div>
          </Reveal>

          {/* Bento — one card inverted */}
          <div className="grid sm:grid-cols-2" style={{ gap: 20 }}>
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.06}>
                <div
                  className={`card${service.inverted ? " card--inverted" : ""}`}
                  style={{ blockSize: "100%", minBlockSize: 230 }}
                >
                  <h3 className="t-card" style={{ marginBlockEnd: 14 }}>
                    {service.title}
                  </h3>
                  <p className="t-body">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
