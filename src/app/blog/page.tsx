import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";
import BlogCard from "@/components/ui/blog-card";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Shopify & Online Selling Guides for India",
  description: "Helpful guides on how to start, run, and grow your online store in India. Free tips on Shopify setup, payments, shipping, and more.",
  keywords: ["shopify india guide", "start online store india", "sell online india tips", "ecommerce india blog"],
  alternates: { canonical: "https://www.mypeedika.com/blog" },
  openGraph: { url: "https://www.mypeedika.com/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Page header — dark */}
      <section style={{ background: "var(--ink)", padding: "88px 0 0", borderBottom: "1px solid var(--ink-border)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-[200px_1fr] gap-16 items-baseline pb-16 max-md:grid-cols-1 max-md:gap-6">
            <p className="display grad-num" style={{ fontSize: 88, lineHeight: 0.9 }}>Blog</p>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--paper)", marginBottom: 16 }}>
                Free guides for Indian sellers
              </h1>
              <p style={{ fontSize: 17, color: "var(--ink-subtle)", lineHeight: 1.6, maxWidth: 480 }}>
                Practical, plain-English articles to help you sell online in India — no jargon, no filler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post — spans full width within container */}
      <section style={{ background: "var(--ink)", paddingBottom: 56 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <BlogCard post={featured} featured />
        </div>
      </section>

      {/* Remaining posts */}
      <section style={{ background: "var(--paper)", padding: "64px 0 88px" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="flex items-center gap-4 mb-10">
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--rule)" }} />
            <p className="micro" style={{ color: "var(--muted-color)" }}>More articles</p>
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--rule)" }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
