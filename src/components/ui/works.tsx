import Image from "next/image";
import Reveal from "@/components/reveal";
import SectionHeading from "./section-heading";
import { works } from "@/data/works";

/* Iframes are impossible here — both stores send frame-ancestors 'none'.
   Full-page captures pan on hover instead, and the card links to the real
   storefront. See docs/redesign-brief.md. */
export default function Works({ heading = true }: { heading?: boolean }) {
  return (
    <section id="works" className="section" style={{ paddingBlockStart: 0 }}>
      <div className="container">
        {heading && (
          <Reveal>
            <SectionHeading
              title={
                <>
                  Stores
                  <br />
                  we built
                </>
              }
              blurb="Both are live right now. Open them, poke around, check them on your phone — that is the only review that matters."
            />
          </Reveal>
        )}

        <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
          {works.map((work, i) => (
            <Reveal key={work.id} delay={i * 0.08}>
              <a
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className="work-card card"
                style={{ padding: 16, blockSize: "100%" }}
              >
                {/* Browser frame */}
                <div className="work-frame">
                  <div className="work-chrome">
                    <span className="work-dot" />
                    <span className="work-dot" />
                    <span className="work-dot" />
                    <span className="work-url">
                      {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </div>
                  <div className="work-viewport">
                    <Image
                      src={work.screenshot}
                      alt={`The ${work.name} storefront`}
                      width={1440}
                      height={2200}
                      className="work-shot"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div style={{ padding: "24px 16px 8px" }}>
                  <div
                    className="flex items-center justify-between"
                    style={{ gap: 16, marginBlockEnd: 12 }}
                  >
                    <h3 className="t-card">{work.name}</h3>
                    <span className="work-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                  <p className="micro" style={{ marginBlockEnd: 12 }}>
                    {work.category}
                  </p>
                  <p className="t-body">{work.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}
