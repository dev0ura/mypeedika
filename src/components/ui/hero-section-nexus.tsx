"use client";

import { motion } from 'framer-motion';
import { SiRazorpay, SiStripe, SiPaytm, SiPhonepe } from 'react-icons/si';

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] as [number,number,number,number] },
});

/* ── Chat Mockup ─────────────────────────────────────────── */
function ChatMockup() {
  return (
    <div className="relative w-72 select-none">
      {/* Floating order badge — top right */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute -top-5 -right-6 z-20 bg-[#111318] border border-white/[0.09] rounded-2xl px-3 py-2.5 shadow-2xl"
      >
        <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Today</p>
        <p className="text-white text-sm font-bold leading-none">12 Orders</p>
        <p className="text-[#3CC49A] text-[11px] font-medium mt-0.5">↑ ₹48,230</p>
      </motion.div>

      {/* Main chat card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-72 bg-[#111318] rounded-3xl border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.7)] overflow-hidden"
      >
        {/* Chat header */}
        <div className="px-4 pt-4 pb-3 border-b border-white/[0.06] flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg,#00BCD4,#7ED321)' }}>
            M
          </div>
          <div>
            <p className="text-white text-xs font-semibold">myPeedika Store</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3CC49A]" />
              <span className="text-white/35 text-[10px]">Active now</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-3.5 space-y-2.5">
          {/* Customer bubble */}
          <div className="flex justify-start">
            <div className="bg-[#1A1E28] text-white/80 text-[11px] leading-relaxed px-3.5 py-2 rounded-2xl rounded-tl-sm max-w-[75%]">
              Can I see your products? 👀
            </div>
          </div>

          {/* Store bubble */}
          <div className="flex justify-end">
            <div className="text-white text-[11px] leading-relaxed px-3.5 py-2 rounded-2xl rounded-tr-sm max-w-[75%]" style={{ background: 'linear-gradient(135deg,#00BCD4,#3CC49A)' }}>
              Sure! Here&apos;s our top pick 🛍️
            </div>
          </div>

          {/* Product card */}
          <div className="bg-[#1A1E28] rounded-2xl border border-white/[0.07] overflow-hidden">
            <div className="h-24 flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(0,188,212,0.12),rgba(126,211,33,0.12))' }}>
              <span className="text-4xl">👟</span>
            </div>
            <div className="p-3">
              <p className="text-white text-[11px] font-semibold">Premium Sneakers</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[#3CC49A] text-xs font-bold">₹4,999</p>
                <p className="text-white/30 text-[10px] line-through">₹6,500</p>
              </div>
              <button className="mt-2.5 w-full text-[10px] font-bold text-[#07090A] py-2 rounded-xl" style={{ background: 'linear-gradient(135deg,#00BCD4,#7ED321)' }}>
                Buy Now →
              </button>
            </div>
          </div>

          {/* Payment confirmed */}
          <div className="bg-[#0D200F] border border-[#3CC49A]/20 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#3CC49A]/15 flex items-center justify-center flex-shrink-0">
              <span className="text-[#3CC49A] text-[10px] font-bold">✓</span>
            </div>
            <div>
              <p className="text-[#3CC49A] text-[10px] font-semibold">Payment Received</p>
              <p className="text-white/35 text-[9px]">₹4,999 · Razorpay</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating AI agent badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute -bottom-4 -left-8 z-20 flex items-center gap-2 bg-[#111318] border border-white/[0.09] rounded-full px-3.5 py-2 shadow-xl"
      >
        <span className="w-2 h-2 rounded-full bg-[#3CC49A] animate-pulse flex-shrink-0" />
        <p className="text-white text-[11px] font-medium whitespace-nowrap">AI agent selling live</p>
      </motion.div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export default function InteractiveHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#07090A' }}
    >
      {/* Gradient blobs — top right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none" style={{ transform: 'translate(15%, -15%)' }}>
        <div className="absolute rounded-full bg-[#00BCD4]" style={{ width: 320, height: 320, top: '5%', left: '25%', filter: 'blur(90px)', opacity: 0.28 }} />
        <div className="absolute rounded-full bg-[#7ED321]" style={{ width: 240, height: 240, top: '45%', left: '45%', filter: 'blur(80px)', opacity: 0.22 }} />
        <div className="absolute rounded-full bg-[#3CC49A]" style={{ width: 180, height: 180, top: '20%', left: '60%', filter: 'blur(70px)', opacity: 0.18 }} />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Content */}
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 xl:gap-24 items-center w-full">

          {/* Left — text */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div {...FADE_UP(0.1)} className="flex items-center gap-2.5 mb-8">
              <div className="flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3CC49A]" />
                <span className="text-white/60 text-xs font-medium tracking-wide">AI-Powered Commerce Platform</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...FADE_UP(0.2)} className="text-[56px] sm:text-[64px] lg:text-[72px] font-bold text-white leading-[1.02] tracking-[-2.5px] mb-6">
              Build your<br />online store.<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00BCD4,#3CC49A 50%,#7ED321)' }}>
                Sell everywhere.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...FADE_UP(0.32)} className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
              Your customers browse, order &amp; pay — on WhatsApp, Instagram, or your web store. One AI-powered backend. Unlimited reach.
            </motion.p>

            {/* CTAs */}
            <motion.div {...FADE_UP(0.42)} className="flex flex-wrap gap-3 mb-14">
              <a
                href="https://cal.com/rabeeh0ta/mypeedika-demo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#07090A] px-6 py-3 rounded-full"
                style={{ background: 'linear-gradient(135deg,#00BCD4,#3CC49A 55%,#7ED321)' }}
              >
                Book a free call
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full border border-white/[0.14] hover:bg-white/[0.05] transition-colors"
              >
                Start free trial →
              </a>
            </motion.div>

            {/* Integrations row */}
            <motion.div {...FADE_UP(0.52)}>
              <p className="text-[11px] uppercase tracking-[3px] text-white/25 mb-3">Integrates with</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-sm">
                <span className="flex items-center gap-1.5"><SiRazorpay className="w-4 h-4" />Razorpay</span>
                <span className="flex items-center gap-1.5"><SiPhonepe className="w-4 h-4" />PhonePe</span>
                <span className="flex items-center gap-1.5"><SiStripe className="w-4 h-4" />Stripe</span>
                <span className="flex items-center gap-1.5"><SiPaytm className="w-4 h-4" />Paytm</span>
              </div>
            </motion.div>
          </div>

          {/* Right — chat mockup */}
          <div className="hidden lg:flex items-center justify-center pr-8 xl:pr-16">
            <ChatMockup />
          </div>
        </div>
      </div>

      {/* Bottom peek strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="border-t border-white/[0.06] px-6 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0E1114] border border-white/[0.07] rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[2.5px] text-white/35 mb-1">Peek</p>
              <h3 className="text-white text-base font-semibold">Agentic Ecommerce — coming soon</h3>
              <p className="text-white/45 text-sm mt-0.5">Autonomous AI agents that handle catalog, leads and conversions on their own.</p>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center text-sm font-semibold text-white border border-white/[0.12] px-5 py-2.5 rounded-full hover:bg-white/[0.06] transition-colors whitespace-nowrap"
            >
              Join waitlist →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
