"use client";

import Link from 'next/link';
import { Mail, MessageCircle, CalendarCheck } from 'lucide-react';

const stats = [
  { value: '100+',    label: 'Stores launched' },
  { value: '7 days',  label: 'Average go-live' },
  { value: '₹2Cr+',  label: 'Sales processed' },
];

export function Connect() {
  return (
    <section className="relative bg-white py-28 md:py-36 overflow-hidden">

      {/* Organic gradient blobs — right side (Cohere reference) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{ width: 500, height: 500, top: '-10%', right: '-8%', background: 'radial-gradient(circle,#00BCD4,transparent 70%)', opacity: 0.1, filter: 'blur(40px)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 380, height: 380, bottom: '-5%', right: '8%', background: 'radial-gradient(circle,#7ED321,transparent 70%)', opacity: 0.12, filter: 'blur(50px)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 280, height: 280, top: '30%', right: '20%', background: 'radial-gradient(circle,#3CC49A,transparent 70%)', opacity: 0.09, filter: 'blur(60px)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#00BFA5] mb-5">
            Get started
          </p>

          <h2 className="text-[44px] sm:text-[56px] font-bold text-[#0A0A0A] leading-[1.05] tracking-[-2px] mb-6">
            Interested in learning<br />more about myPeedika?
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
            We&apos;d love to walk you through the platform and see if it&apos;s a good fit for your business.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            <Link
              href="https://cal.com/rabeeh0ta/mypeedika-demo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full"
              style={{ background: 'linear-gradient(135deg,#00BCD4,#3CC49A 55%,#7ED321)' }}
            >
              <CalendarCheck className="w-4 h-4" />
              Book a free call
            </Link>
            <Link
              href="mailto:contact@mypeedika.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-6 py-3 rounded-full border border-[#0A0A0A]/12 hover:bg-black hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send us an email
            </Link>
            <Link
              href="https://wa.me/919048814964"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-6 py-3 rounded-full border border-[#0A0A0A]/12 hover:bg-black hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#0A0A0A] tracking-tight">{s.value}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
