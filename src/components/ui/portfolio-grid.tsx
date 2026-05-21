"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { clients, type Client } from "@/data/clients";

function ClientCard({ client, large = false }: { client: Client; large?: boolean }) {
  return (
    <div
      className="group flex flex-col"
      style={{
        background: "var(--mist)",
        border: "1px solid var(--rule)",
        borderRadius: 8,
        overflow: "hidden",
        transition: "box-shadow .2s, border-color .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 40px -8px rgba(21,168,154,0.15)";
        e.currentTarget.style.borderColor = "rgba(21,168,154,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--rule)";
      }}
    >
      {/* Image placeholder — replaced with real screenshot when available */}
      <div
        style={{
          height: large ? 280 : 200,
          background: "linear-gradient(135deg, rgba(21,168,154,0.08) 0%, rgba(62,221,92,0.08) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: large ? 64 : 48,
          borderBottom: "1px solid var(--rule)",
          position: "relative",
        }}
      >
        🛍️
        {/* When client.image is a real path, use next/image here */}
      </div>

      <div style={{ padding: "20px 24px 24px" }}>
        <div className="flex items-center justify-between mb-3">
          <span
            className="micro"
            style={{
              color: "var(--teal)",
              background: "rgba(21,168,154,0.1)",
              padding: "3px 10px",
              borderRadius: 999,
              letterSpacing: "0.12em",
            }}
          >
            {client.service}
          </span>
          <span className="micro" style={{ color: "var(--muted-color)" }}>{client.category}</span>
        </div>

        <h3
          style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: large ? 22 : 18, color: "var(--ink)", marginBottom: 6 }}
        >
          {client.name}
        </h3>
        <p style={{ fontSize: 14, color: "var(--muted-color)", lineHeight: 1.5, marginBottom: 16 }}>
          {client.description}
        </p>

        <div className="flex items-center justify-between">
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--teal)" }}>
            → {client.result}
          </span>
          {client.url !== "#" && (
            <a
              href={client.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
              style={{ fontSize: 12, color: "var(--muted-color)", textDecoration: "none", transition: "color .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-color)")}
            >
              Visit store <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid({ preview = false }: { preview?: boolean }) {
  const display = preview ? clients.filter((c) => c.featured).slice(0, 2) : clients;

  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline max-md:grid-cols-1 max-md:gap-4">
              <p className="display grad-text" style={{ fontSize: 88, lineHeight: 0.9 }}>03</p>
              <div>
                <h2 className="display" style={{ fontSize: "clamp(36px,5vw,56px)", color: "var(--ink)", marginBottom: 12 }}>
                  Our work
                </h2>
                <p style={{ fontSize: 16, color: "#2b302e", lineHeight: 1.6, maxWidth: 440 }}>
                  Real Shopify stores, built for real Indian businesses.
                </p>
              </div>
            </div>
          </div>
          {preview && (
            <Link
              href="/portfolio"
              style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}
            >
              View all work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          )}
        </div>

        {display.length > 0 ? (
          <div className={`grid gap-6 ${display.length >= 2 ? "md:grid-cols-2" : ""}`}>
            {display.map((c, i) => (
              <ClientCard key={c.id} client={c} large={i === 0 && display.length >= 2} />
            ))}
          </div>
        ) : (
          <p style={{ color: "var(--muted-color)", textAlign: "center", padding: "60px 0" }}>
            Portfolio coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
