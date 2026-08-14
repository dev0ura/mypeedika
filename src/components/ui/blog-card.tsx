import Link from "next/link";
import CategoryPill from "./category-pill";
import type { BlogPost } from "@/data/blog-posts";

/* No per-post artwork exists, so the thumbnail is a deterministic geometric
   composition on an Accent fill — the reference's coloured blog blocks,
   without inventing illustrations we do not have. */
function Thumb({ index }: { index: number }) {
  const fill = index % 2 === 0 ? "var(--teal)" : "var(--green)";
  return (
    <svg viewBox="0 0 400 200" aria-hidden="true" style={{ inlineSize: "100%", blockSize: "auto" }}>
      <rect width="400" height="200" fill={fill} />
      {index % 3 === 0 && (
        <>
          <circle cx="300" cy="100" r="62" fill="none" stroke="#212121" strokeWidth="4" />
          <circle cx="300" cy="100" r="26" fill="#212121" />
          <path d="M60 150 L110 90 L150 122 L205 55" fill="none" stroke="#212121" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {index % 3 === 1 && (
        <>
          <rect x="58" y="52" width="150" height="100" rx="10" fill="#fcf8f5" stroke="#212121" strokeWidth="4" />
          <line x1="80" y1="84" x2="186" y2="84" stroke="#212121" strokeWidth="4" strokeLinecap="round" />
          <line x1="80" y1="106" x2="160" y2="106" stroke="#212121" strokeWidth="4" strokeLinecap="round" />
          <line x1="80" y1="128" x2="140" y2="128" stroke="#212121" strokeWidth="4" strokeLinecap="round" />
          <circle cx="300" cy="100" r="48" fill="#212121" />
        </>
      )}
      {index % 3 === 2 && (
        <>
          <circle cx="120" cy="100" r="54" fill="#212121" />
          <rect x="212" y="46" width="108" height="108" rx="14" fill="none" stroke="#212121" strokeWidth="4" />
          <line x1="240" y1="130" x2="292" y2="74" stroke="#212121" strokeWidth="5" strokeLinecap="round" />
          <circle cx="292" cy="74" r="9" fill="#212121" />
        </>
      )}
    </svg>
  );
}

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card card" style={{ padding: 16, blockSize: "100%" }}>
      <div style={{ position: "relative", borderRadius: 14, overflow: "hidden" }}>
        <Thumb index={index} />
        <CategoryPill
          tone="ink"
          style={{ position: "absolute", insetBlockStart: 14, insetInlineEnd: 14 }}
        >
          {post.category}
        </CategoryPill>
      </div>

      <div style={{ padding: "22px 12px 10px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            fontSize: "clamp(19px, 1.9vw, 23px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBlockEnd: 12,
          }}
        >
          {post.title}
        </h3>
        <p className="t-body" style={{ fontSize: 15, marginBlockEnd: 18 }}>
          {post.excerpt}
        </p>
        <div className="flex items-center" style={{ gap: 14, marginBlockStart: "auto" }}>
          <span className="micro">{post.readTime}</span>
          <span className="micro">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>

    </Link>
  );
}
