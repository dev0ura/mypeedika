"use client";

import { motion } from "framer-motion";
import { SiRazorpay, SiStripe, SiPaytm, SiPhonepe, SiShopify } from "react-icons/si";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function Hero() {
  return (
    <section style={{ background: "var(--paper)", color: "var(--ink)", padding: "88px 0 0", overflow: "hidden", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">

        {/* Top eyebrow */}
        <motion.div {...f(0.05)} className="flex items-center gap-3 mb-10">
          <span
            className="micro"
            style={{ color: "var(--muted-color)" }}
          >
            Shopify Implementation Service · India
          </span>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--teal)" }}
          />
          <span className="micro" style={{ color: "var(--teal)" }}>
            7-day delivery
          </span>
        </motion.div>

        {/* Headline — Anton display */}
        <motion.h1
          {...f(0.12)}
          className="display"
          style={{
            fontSize: "clamp(64px, 10vw, 144px)",
            lineHeight: 0.88,
            color: "var(--ink)",
            maxWidth: 900,
            marginBottom: 32,
          }}
        >
          We build{" "}
          <span className="grad-text">Shopify stores</span>
          <br />
          for Indian
          <br />
          businesses.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...f(0.22)}
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--muted-color)",
            maxWidth: 520,
            marginBottom: 40,
          }}
        >
          From a new store to a broken one we fix — we handle the entire Shopify side. You focus on your products and customers.
        </motion.p>

        {/* CTAs */}
        <motion.div {...f(0.3)} className="flex flex-wrap gap-3 mb-16">
          <a
            href="https://cal.com/rabeeh0ta/mypeedika-demo"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book a free call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/portfolio" className="btn-outline">
            See our work
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...f(0.38)}
          className="grid grid-cols-3 gap-0 border-t pt-10 pb-10 md:pb-0"
          style={{ borderColor: "var(--rule)" }}
        >
          {[
            { n: "100+", l: "Stores built" },
            { n: "7 days", l: "Average go-live" },
            { n: "₹2 Cr+", l: "Sales processed" },
          ].map((s) => (
            <div key={s.l} className="pr-8">
              <p
                className="display"
                style={{ fontSize: "clamp(36px,5vw,56px)", color: "var(--ink)", lineHeight: 1, marginBottom: 8 }}
              >
                {s.n}
              </p>
              <p
                className="micro"
                style={{ color: "var(--muted-color)", letterSpacing: "0.12em" }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Integration strip — bleeds to edge */}
        <motion.div
          {...f(0.44)}
          className="border-t mt-0 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{ borderColor: "var(--rule)" }}
        >
          <p className="micro" style={{ color: "var(--muted-color)", flexShrink: 0 }}>
            Works with
          </p>
          <div className="flex flex-wrap items-center gap-6" style={{ color: "var(--muted-color)" }}>
            {[
              { Icon: SiShopify, label: "Shopify" },
              { Icon: SiRazorpay, label: "Razorpay" },
              { Icon: SiPhonepe, label: "PhonePe" },
              { Icon: SiStripe, label: "Stripe" },
              { Icon: SiPaytm, label: "Paytm" },
            ].map(({ Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 500 }}>
                <Icon className="w-4 h-4" /> {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
