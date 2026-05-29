import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";
import JsonLd from "@/components/json-ld";
import { blogPosts } from "@/data/blog-posts";

import HowToStartOnlineStoreIndia from "../posts/how-to-start-online-store-india";
import ShopifyStoreSetupIndia from "../posts/shopify-store-setup-india";
import ShopifyVsWoocommerceIndia from "../posts/shopify-vs-woocommerce-india";
import ShopifyStoreCostIndia from "../posts/shopify-store-cost-india";
import SellOnlineIndiaBeginners from "../posts/sell-online-india-beginners-guide";

const postComponents: Record<string, React.ComponentType> = {
  "how-to-start-online-store-india": HowToStartOnlineStoreIndia,
  "shopify-store-setup-india": ShopifyStoreSetupIndia,
  "shopify-vs-woocommerce-india": ShopifyVsWoocommerceIndia,
  "shopify-store-cost-india": ShopifyStoreCostIndia,
  "sell-online-india-beginners-guide": SellOnlineIndiaBeginners,
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://www.mypeedika.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      authors: ["myPeedika"],
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.metaDescription },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "myPeedika", url: "https://www.mypeedika.com" },
    publisher: { "@type": "Organization", name: "myPeedika", logo: { "@type": "ImageObject", url: "https://www.mypeedika.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.mypeedika.com/blog/${post.slug}` },
    image: "https://www.mypeedika.com/og-image.png",
    inLanguage: "en-IN",
  };

  return (
    <div style={{ background: "var(--paper)" }}>
      <JsonLd data={articleSchema} />
      <Navbar />

      {/* Article header — dark */}
      <section style={{ background: "var(--ink)", padding: "72px 0 56px", borderBottom: "1px solid var(--ink-border)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div style={{ maxWidth: 720 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="micro" style={{ color: "var(--teal)", background: "var(--teal-12)", padding: "4px 12px", borderRadius: 999 }}>
                {post.category}
              </span>
              <span className="micro" style={{ color: "var(--ink-muted)" }}>{post.readTime}</span>
              <span className="micro" style={{ color: "var(--ink-muted)" }}>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long" })}
              </span>
            </div>
            <h1
              className="display"
              style={{ fontSize: "clamp(32px,5vw,64px)", color: "var(--paper)", lineHeight: 0.92, marginBottom: 24 }}
            >
              {post.title}
            </h1>
            <p style={{ fontSize: 18, color: "var(--ink-subtle)", lineHeight: 1.6 }}>
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: "64px 0 80px" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16 items-start">

            {/* Article content */}
            <article className="article-body">
              <PostContent />
            </article>

            {/* Sidebar CTA */}
            <aside className="hidden lg:block sticky top-24">
              <div
                style={{
                  background: "var(--ink)",
                  border: "1px solid var(--ink-border)",
                  borderRadius: 8,
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, background: "radial-gradient(circle, var(--teal-18) 0%, transparent 70%)", pointerEvents: "none" }} />
                <p className="display" style={{ fontSize: 20, color: "var(--paper)", marginBottom: 10 }}>
                  Ready to start?
                </p>
                <p style={{ fontSize: 13, color: "var(--ink-subtle)", lineHeight: 1.6, marginBottom: 20 }}>
                  We build Shopify stores for Indian businesses. 7-day delivery, honest pricing.
                </p>
                <a
                  href="https://cal.com/rabeeh0ta/mypeedika-demo"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ display: "block", textAlign: "center", marginBottom: 10 }}
                >
                  Book a free call
                </a>
                <a
                  href="https://wa.me/919048814964"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost-dark"
                  style={{ display: "block", textAlign: "center", fontSize: 13 }}
                >
                  WhatsApp us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
