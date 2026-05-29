"use client";

import { motion } from "framer-motion";
import { SiRazorpay, SiStripe, SiPaytm, SiPhonepe, SiShopify } from "react-icons/si";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function Hero() {
  return (
    <section style={{
      background: "var(--paper)",
      color: "var(--ink)",
      padding: "88px 0 0",
      overflow: "hidden",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">

        {/* Eyebrow */}
        <motion.div {...f(0.05)} className="flex items-center gap-3 mb-8">
          <span className="micro" style={{ color: "var(--muted-color)" }}>
            Shopify Implementation · India
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--teal)", flexShrink: 0 }} />
          <span className="micro" style={{ color: "var(--teal)" }}>7-day delivery</span>
        </motion.div>

        {/* Headline — Anton, no gradient text on copy */}
        <motion.h1
          {...f(0.12)}
          className="display"
          style={{
            fontSize: "clamp(60px, 9.5vw, 136px)",
            lineHeight: 0.88,
            color: "var(--ink)",
            maxWidth: 860,
            marginBottom: 28,
          }}
        >
          We build{" "}
          <span style={{ background: "var(--grad-h)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Shopify stores</span>
          <br />
          for Indian
          <br />
          businesses.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...f(0.2)}
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--muted-color)",
            maxWidth: 480,
            marginBottom: 36,
          }}
        >
          From a brand-new store to a broken one we fix — we handle the entire Shopify side. You focus on your products and customers.
        </motion.p>

        {/* CTAs */}
        <motion.div {...f(0.27)} className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://cal.com/rabeeh0ta/mypeedika-demo"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book a free call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/portfolio" className="btn-outline">See our work</a>
        </motion.div>

        {/* Trust line — inline, not the hero-metrics template */}
        <motion.div
          {...f(0.33)}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-10 border-b"
          style={{ borderColor: "var(--rule)" }}
        >
          {[
            "100+ stores built across India",
            "Live in 7 days or we replan together",
            "₹2 Cr+ in sales processed",
          ].map((t, i) => (
            <span key={t} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-xs" style={{ color: "var(--rule)" }}>·</span>}
              <span style={{ fontSize: 13, color: "var(--muted-color)", fontWeight: 500 }}>{t}</span>
            </span>
          ))}
        </motion.div>

        {/* Integration strip */}
        <motion.div
          {...f(0.39)}
          className="py-5 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <p className="micro" style={{ color: "var(--muted-color)", flexShrink: 0 }}>Works with</p>
          <div className="flex flex-wrap items-center gap-6" style={{ color: "var(--muted-color)" }}>
            {[
              { Icon: SiShopify, label: "Shopify" },
              { Icon: SiRazorpay, label: "Razorpay" },
              { Icon: SiPhonepe, label: "PhonePe" },
              { Icon: SiStripe, label: "Stripe" },
              { Icon: SiPaytm, label: "Paytm" },
            ].map(({ Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 500 }}>
                <Icon className="w-4 h-4" aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
