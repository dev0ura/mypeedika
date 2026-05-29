import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "./blog-card";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline max-md:grid-cols-1 max-md:gap-4">
            <p className="display grad-num" style={{ fontSize: 88, lineHeight: 0.9 }}>05</p>
            <div>
              <h2 className="display" style={{ fontSize: "clamp(36px,5vw,56px)", color: "var(--ink)", marginBottom: 12 }}>
                From the blog
              </h2>
              <p style={{ fontSize: 16, color: "#2b302e", lineHeight: 1.6 }}>
                Helpful guides for Indian sellers — no jargon.
              </p>
            </div>
          </div>
          <Link
            href="/blog"
            style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}
          >
            All articles →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
