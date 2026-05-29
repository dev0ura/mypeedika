export default function CTABanner() {
  return (
    <section style={{ background: "var(--ink)", padding: "88px 0", borderBottom: "1px solid var(--ink-border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-center">
          <div>
            <p className="micro mb-4" style={{ color: "var(--teal)" }}>Ready to start?</p>
            <h2
              className="display"
              style={{ fontSize: "clamp(48px,7vw,96px)", color: "var(--paper)", lineHeight: 0.88, marginBottom: 20 }}
            >
              Let&apos;s build your{" "}
              <span style={{ color: "var(--teal)" }}>Shopify store.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-subtle)", lineHeight: 1.6, maxWidth: 480 }}>
              Book a free 20-minute call. We&apos;ll understand your business and give you a clear quote — no pressure, no jargon.
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-3 items-start md:items-end">
            <a
              href="https://cal.com/rabeeh0ta/mypeedika-demo"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              Book a free call →
            </a>
            <a
              href="https://wa.me/919048814964"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-dark"
              style={{ whiteSpace: "nowrap" }}
            >
              WhatsApp us
            </a>
            <p className="micro" style={{ color: "var(--ink-muted)" }}>Same-day reply</p>
          </div>
        </div>
      </div>
    </section>
  );
}
