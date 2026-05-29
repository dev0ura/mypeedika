"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

function Item({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--rule)" }}>
      <button
        className="w-full flex items-start justify-between gap-6 text-left py-5"
        style={{ background: "none", border: "none", cursor: "pointer", padding: "20px 0" }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)", lineHeight: 1.4, flex: 1 }}>
          {question}
        </span>
        <span
          style={{
            width: 20, height: 20, borderRadius: "50%", border: "1.5px solid var(--rule)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, marginTop: 2, transition: "border-color .15s",
            borderColor: open ? "var(--teal)" : "var(--rule)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform .2s", color: open ? "var(--teal)" : "var(--muted-color)" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="1" x2="5" y2="9"/>
            {!open && <line x1="1" y1="5" x2="9" y2="5"/>}
          </svg>
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 14, color: "var(--muted-color)", lineHeight: 1.7, paddingBottom: 20, marginTop: 0 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <div className="mb-8">
              <p className="display grad-num" style={{ fontSize: 88, lineHeight: 0.9, marginBottom: 16 }}>04</p>
              <h2 className="display" style={{ fontSize: "clamp(32px,4vw,48px)", color: "var(--ink)", marginBottom: 16 }}>
                Questions
              </h2>
              <p style={{ fontSize: 16, color: "var(--muted-color)", lineHeight: 1.6, maxWidth: 320 }}>
                Don&apos;t see yours? We reply fast on WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919048814964"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ width: "fit-content" }}
              >
                WhatsApp us
              </a>
              <a
                href="mailto:contact@mypeedika.com"
                style={{ fontSize: 13, color: "var(--muted-color)", textDecoration: "none" }}
              >
                contact@mypeedika.com
              </a>
            </div>
          </div>

          {/* Right */}
          <div>
            {faqs.map((f) => (
              <Item key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
