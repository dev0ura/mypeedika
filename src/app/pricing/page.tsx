import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";

export const metadata: Metadata = {
  title: "Shopify Store Pricing for Indian Businesses | myPeedika",
  description: "Transparent pricing for Shopify store setup, maintenance, and support in India. No hidden fees. Starting from ₹15,000 one-time setup.",
};

const plans = [
  {
    name: "Starter",
    tagline: "New store, done right",
    oneTime: 15000,
    monthly: null,
    features: [
      "New Shopify store from scratch",
      "Custom theme & branding",
      "Up to 50 products listed",
      "Razorpay / PhonePe payments",
      "Shipping & tax configured",
      "Mobile-first design",
      "7-day post-launch support",
    ],
    cta: "Book a free call",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Store + monthly support",
    oneTime: 15000,
    monthly: 3500,
    features: [
      "Everything in Starter",
      "Dedicated WhatsApp support",
      "Monthly store health check",
      "Product & banner updates",
      "App management",
      "Performance monitoring",
      "Priority bug fixing",
    ],
    cta: "Book a free call",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Custom",
    tagline: "Complex or large stores",
    oneTime: null,
    monthly: null,
    features: [
      "Platform migration (WooCommerce, Wix)",
      "Custom Shopify app development",
      "ERP / Tally integrations",
      "Multi-store or Shopify Plus",
      "Advanced SEO setup",
      "Dedicated project manager",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Header */}
      <section style={{ background: "var(--ink)", padding: "88px 0", borderBottom: "1px solid var(--ink-border)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline max-md:grid-cols-1 max-md:gap-6">
            <p className="display grad-text" style={{ fontSize: 88, lineHeight: 0.9 }}>Price</p>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--paper)", marginBottom: 20 }}>
                Simple, honest pricing
              </h1>
              <p style={{ fontSize: 18, color: "var(--ink-subtle)", lineHeight: 1.6, maxWidth: 480 }}>
                No hidden fees, no surprises. You know the cost before we start anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: "64px 0 88px" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  border: plan.highlight ? "1px solid var(--teal)" : "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: "32px",
                  background: plan.highlight ? "var(--ink)" : "var(--paper)",
                  position: "relative",
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 micro"
                    style={{ color: "var(--teal)", background: plan.highlight ? "var(--ink)" : "var(--paper)", padding: "2px 12px", borderRadius: 999, border: "1px solid var(--teal)" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <p className="micro mb-2" style={{ color: plan.highlight ? "var(--teal)" : "var(--muted-color)" }}>
                  {plan.name}
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: plan.highlight ? "var(--ink-subtle)" : "#2b302e", marginBottom: 20 }}>
                  {plan.tagline}
                </p>

                <div style={{ marginBottom: 24 }}>
                  {plan.oneTime ? (
                    <>
                      <p className="display" style={{ fontSize: 40, color: plan.highlight ? "var(--paper)" : "var(--ink)", lineHeight: 1, marginBottom: 4 }}>
                        ₹{plan.oneTime.toLocaleString("en-IN")}
                      </p>
                      <p style={{ fontSize: 12, color: plan.highlight ? "var(--ink-muted)" : "var(--muted-color)" }}>
                        one-time setup{plan.monthly ? ` + ₹${plan.monthly.toLocaleString("en-IN")}/month support` : ""}
                      </p>
                    </>
                  ) : (
                    <p className="display" style={{ fontSize: 32, color: plan.highlight ? "var(--paper)" : "var(--ink)", lineHeight: 1 }}>
                      Custom quote
                    </p>
                  )}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 mb-2.5">
                      <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 14, color: plan.highlight ? "var(--ink-subtle)" : "#2b302e", lineHeight: 1.45 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/rabeeh0ta/mypeedika-demo"
                  target="_blank"
                  rel="noreferrer"
                  className={plan.highlight ? "btn-primary" : "btn-outline"}
                  style={{ display: "block", textAlign: "center" }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted-color)" }}>
            * Shopify&apos;s own subscription (₹1,994–₹7,447/month) is charged separately by Shopify. We&apos;ll help you choose the right plan.
          </p>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
