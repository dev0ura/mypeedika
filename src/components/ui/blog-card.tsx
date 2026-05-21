"use client";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block"
        style={{ textDecoration: "none" }}
      >
        <article
          style={{
            background: "var(--ink)",
            border: "1px solid var(--ink-border)",
            borderRadius: 8,
            padding: "48px 56px",
            position: "relative",
            overflow: "hidden",
            transition: "border-color .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(21,168,154,0.4)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--ink-border)")}
        >
          {/* Ambient glow */}
          <div style={{
            position: "absolute", top: -60, right: -60, width: 240, height: 240,
            background: "radial-gradient(circle, rgba(21,168,154,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="flex items-center gap-3 mb-6">
            <span
              className="micro"
              style={{ color: "var(--teal)", background: "rgba(21,168,154,0.12)", padding: "4px 12px", borderRadius: 999 }}
            >
              {post.category}
            </span>
            <span className="micro" style={{ color: "var(--ink-muted)" }}>{post.readTime}</span>
          </div>

          <h2
            className="display"
            style={{ fontSize: "clamp(28px,3.5vw,48px)", color: "var(--paper)", lineHeight: 0.95, marginBottom: 20, maxWidth: 640 }}
          >
            {post.title}
          </h2>

          <p style={{ fontSize: 16, color: "var(--ink-subtle)", lineHeight: 1.6, maxWidth: 560, marginBottom: 28 }}>
            {post.excerpt}
          </p>

          <span
            style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            Read article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform .2s" }} className="group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
      style={{ textDecoration: "none" }}
    >
      <article
        style={{
          background: "var(--mist)",
          border: "1px solid var(--rule)",
          borderRadius: 8,
          padding: "28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "border-color .2s, box-shadow .2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(21,168,154,0.3)";
          e.currentTarget.style.boxShadow = "0 4px 24px -4px rgba(21,168,154,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--rule)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span
            className="micro"
            style={{ color: "var(--teal)", background: "rgba(21,168,154,0.1)", padding: "3px 10px", borderRadius: 999 }}
          >
            {post.category}
          </span>
          <span className="micro" style={{ color: "var(--muted-color)" }}>{post.readTime}</span>
        </div>

        <h3
          className="display"
          style={{ fontSize: "clamp(18px,2vw,24px)", color: "var(--ink)", lineHeight: 0.97, marginBottom: 14, flex: 1 }}
        >
          {post.title}
        </h3>

        <p style={{ fontSize: 13, color: "var(--muted-color)", lineHeight: 1.6, marginBottom: 20 }}>
          {post.excerpt.slice(0, 120)}…
        </p>

        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", display: "inline-flex", alignItems: "center", gap: 5 }}>
          Read →
        </span>
      </article>
    </Link>
  );
}
