import Reveal from "@/components/reveal";
import SectionHeading from "./section-heading";
import { apps, type App } from "@/data/apps";
import EarlyAccessForm from "./early-access-form";

/* Laid out on the reference's testimonial pattern: two columns split by a
   rule, a large accent mark where the quote glyph sits, the tagline in the
   quote's weight, and an icon/name/platform row where the avatar sits. */

function AppMark({ id, accent }: { id: string; accent: string }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: accent,
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "replyr") {
    return (
      <svg {...common}>
        <path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-4.2-1L3 20l1.2-4.5A8.4 8.4 0 013 11.5 8.4 8.4 0 0112 3a8.4 8.4 0 019 8.5z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="11" cy="11" r="7" />
      <line x1="20" y1="20" x2="16" y2="16" />
    </svg>
  );
}

function AppColumn({ app }: { app: App }) {
  const accent = app.status === "live" ? "var(--green)" : "var(--teal)";

  return (
    <article className="app-col">
      <AppMark id={app.id} accent={accent} />

      <h3 className="app-tagline">{app.tagline}</h3>

      <p className="t-body" style={{ marginBlockEnd: 22 }}>
        {app.description}
      </p>

      <ul className="app-features">
        {app.features.map((feature) => (
          <li key={feature}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke={accent}
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Where the reference puts the avatar, name and role */}
      <div className="app-by">
        <span className="app-avatar" style={{ background: accent }} aria-hidden="true">
          {app.name.charAt(0)}
        </span>
        <span>
          <span className="app-name">{app.name}</span>
          <span className="app-platform">{app.platform}</span>
        </span>
        <span className="app-status" style={{ background: accent }}>
          {app.status === "live" ? "Live" : "Early access"}
        </span>
      </div>

      <div className="app-action">
        {app.status === "live" && app.url ? (
          <a href={app.url} target="_blank" rel="noreferrer" className="btn btn--ink">
            Visit {app.name}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        ) : (
          <EarlyAccessForm appName={app.name} />
        )}
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

        <Reveal>
          <div className="apps-split">
            {apps.map((app) => (
              <AppColumn key={app.id} app={app} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
