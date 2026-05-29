const steps = [
  {
    n: "01",
    title: "Book a free call",
    body: "Tell us about your business, what you sell, and what you need. A friendly 20-minute chat — no jargon, no pressure. We&apos;ll tell you exactly what we can do and what it costs.",
    cta: null,
  },
  {
    n: "02",
    title: "We design & build",
    body: "We handle everything — theme, products, payments, shipping, domain. You approve the design before we go further. Zero technical knowledge needed on your side.",
    cta: null,
  },
  {
    n: "03",
    title: "You go live & sell",
    body: "Your store is live in as little as 7 days. We walk you through managing it yourself, and stay available for 7 days post-launch for any tweaks.",
    cta: null,
  },
];

export default function HowItWorks() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--ink-border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">

        {/* Section header */}
        <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline mb-16 max-md:grid-cols-1 max-md:gap-6">
          <p className="display grad-num" style={{ fontSize: 88, lineHeight: 0.9 }}>02</p>
          <div>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,56px)", color: "var(--paper)", marginBottom: 16 }}>
              How it works
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-subtle)", maxWidth: 480 }}>
              Three steps. No surprises. We&apos;ve done this 100+ times so you don&apos;t have to figure it out.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 border-t" style={{ borderColor: "var(--ink-border)" }}>
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`py-10 ${i < 2 ? "md:pr-12 md:border-r" : ""} ${i > 0 ? "md:pl-12" : ""}`}
              style={{ borderColor: "var(--ink-border)" }}
            >
              <p
                className="display grad-num"
                style={{ fontSize: 56, lineHeight: 1, marginBottom: 24 }}
              >
                {step.n}
              </p>
              <h3
                className="display"
                style={{ fontSize: 28, color: "var(--paper)", marginBottom: 12, lineHeight: 1.05 }}
              >
                {step.title}
              </h3>
              <p
                style={{ fontSize: 15, color: "var(--ink-subtle)", lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4 pt-10 mt-4 border-t" style={{ borderColor: "var(--ink-border)" }}>
          <a
            href="https://cal.com/rabeeh0ta/mypeedika-demo"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Start with a free call →
          </a>
          <a href="https://wa.me/919048814964" target="_blank" rel="noreferrer" className="btn-ghost-dark">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
