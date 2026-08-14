import Reveal from "@/components/reveal";
import SectionHeading from "./section-heading";
import EarlyAccessForm from "./early-access-form";
import { ReplyrLogo, ShopalizerLogo } from "./app-logos";
import { apps } from "@/data/apps";

/* Each App card is dressed in that product's own design language rather
   than myPeedika's, so the section reads as a shelf of real products.
   Palettes sampled from dmreplyr.app and wappalyzer.com — see DESIGN.md,
   "App cards", for why this is a deliberate exception to ADR 0002. */

function ReplyrCard() {
  const app = apps.find((a) => a.id === "replyr")!;

  return (
    <article className="app-card app-card--replyr">
      <div className="app-card__head">
        <ReplyrLogo />
        <span className="app-card__badge app-card__badge--live">Live</span>
      </div>

      <span className="app-card__eyebrow">{app.platform}</span>
      <h3 className="app-card__title">{app.tagline}</h3>

      {/* Replyr's signature: a shopper writing in mixed script, answered
          in the same language with live store data. */}
      <div className="chat" aria-hidden="true">
        <span className="chat__label">Manglish</span>
        <div className="chat__row">
          <span className="chat__avatar">A</span>
          <span className="chat__bubble chat__bubble--in">
            Ee blue shirt M size undo?
          </span>
        </div>
        <div className="chat__row chat__row--out">
          <span className="chat__bubble chat__bubble--out">
            Undu 😊 ₹2,490. Link ayakkatte?
          </span>
        </div>
      </div>

      <p className="app-card__body">{app.description}</p>

      <div className="app-card__foot">
        <a href={app.url} target="_blank" rel="noreferrer" className="btn app-card__cta">
          Visit Replyr
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function ShopalizerCard() {
  const app = apps.find((a) => a.id === "shopalizer")!;
  const detected = ["Dawn 12.0", "Klaviyo", "Judge.me", "Recharge", "Gorgias"];

  return (
    <article className="app-card app-card--shopalizer">
      <div className="app-card__head">
        <ShopalizerLogo />
        <span className="app-card__badge app-card__badge--soon">Coming soon</span>
      </div>

      <span className="app-card__eyebrow">{app.platform}</span>
      <h3 className="app-card__title">{app.tagline}</h3>

      {/* The detector: point it at a store, get its stack back. */}
      <div className="scan" aria-hidden="true">
        <div className="scan__bar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16" y2="16" />
          </svg>
          <span>anystore.com</span>
        </div>
        <div className="scan__chips">
          {detected.map((item, i) => (
            <span key={item} className={`scan__chip${i === 0 ? " scan__chip--theme" : ""}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <p className="app-card__body">{app.description}</p>

      <div className="app-card__foot">
        <EarlyAccessForm appName={app.name} />
      </div>
    </article>
  );
}

export default function Apps({ heading = true }: { heading?: boolean }) {
  return (
    <section id="apps" className="section" style={{ paddingBlockStart: 0 }}>
      <div className="container">
        {heading && (
          <Reveal>
            <SectionHeading
              title={
                <>
                  Apps
                  <br />
                  we make
                </>
              }
              blurb="Software we own and run ourselves, built for the gaps we kept hitting while working on other people's stores."
            />
          </Reveal>
        )}

        <div className="apps-grid">
          <Reveal>
            <ReplyrCard />
          </Reveal>
          <Reveal delay={0.08}>
            <ShopalizerCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
