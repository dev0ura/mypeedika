"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { CONTACT } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="faq" className="section" style={{ paddingBlockStart: 0 }}>
      <div className="container">
        <div
          className="grid lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.6fr)]"
          style={{ gap: "clamp(32px, 5vw, 72px)" }}
        >
          <div>
            <h2 className="t-section" style={{ marginBlockEnd: 20 }}>
              FAQ
            </h2>
            <p className="t-body" style={{ maxInlineSize: "30ch", marginBlockEnd: 24 }}>
              Not answered here? Ask us on WhatsApp. You will get a real reply,
              usually the same day.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ink"
            >
              Ask a question
            </a>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.question}
                  style={{
                    border: "1.5px solid var(--hairline)",
                    borderRadius: 20,
                    /* Green is the soft accent — the reference's peach state. */
                    background: isOpen ? "var(--green)" : "var(--paper)",
                    overflow: "hidden",
                    transition: "background 0.3s ease",
                  }}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      style={{
                        inlineSize: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 20,
                        padding: "20px 24px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "start",
                        font: "inherit",
                        fontSize: "clamp(16px, 1.7vw, 19px)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                        color: "var(--ink)",
                      }}
                    >
                      {faq.question}
                      <span
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          inlineSize: 28,
                          blockSize: 28,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 999,
                          border: "1.5px solid var(--ink)",
                          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                          transform: isOpen ? "rotate(135deg)" : "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      style={{
                        padding: "0 24px 22px",
                        fontSize: 15.5,
                        lineHeight: 1.6,
                        color: "rgba(33,33,33,0.78)",
                        maxInlineSize: "62ch",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
