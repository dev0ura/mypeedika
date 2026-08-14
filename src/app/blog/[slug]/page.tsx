import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";
import CategoryPill from "@/components/ui/category-pill";
import JsonLd from "@/components/json-ld";
import { blogPosts } from "@/data/blog-posts";
import { SITE, CONTACT } from "@/data/site";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}`;
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
      authors: [SITE.name],
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
    image: `${SITE.url}/og-image.png`,
    inLanguage: "en",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Navbar />
      <main>
        <article>
          <header style={{ paddingBlock: "56px 40px" }}>
            <div className="container">
              <Link
                href="/blog"
                className="micro"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBlockEnd: 28 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                All articles
              </Link>

              <div className="flex flex-wrap items-center" style={{ gap: 12, marginBlockEnd: 24 }}>
                <CategoryPill>{post.category}</CategoryPill>
                <span className="micro">{post.readTime}</span>
                <span className="micro">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(34px, 5.4vw, 68px)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.98,
                  maxInlineSize: "20ch",
                  marginBlockEnd: 24,
                }}
              >
                {post.title}
              </h1>
              <p className="t-lead" style={{ maxInlineSize: "58ch" }}>
                {post.excerpt}
              </p>
            </div>
          </header>

          <div className="container" style={{ paddingBlockEnd: 96 }}>
            <div
              className="grid lg:grid-cols-[minmax(0,1fr)_300px]"
              style={{ gap: 56, alignItems: "start" }}
            >
              <div className="article-body" style={{ maxInlineSize: "68ch" }}>
                <PostContent />
              </div>

              <aside
                className="hidden lg:block card"
                style={{ position: "sticky", insetBlockStart: 108, padding: 28 }}
              >
                <h2 className="t-card" style={{ fontSize: 22, marginBlockEnd: 12 }}>
                  Want a hand?
                </h2>
                <p className="t-body" style={{ fontSize: 14.5, marginBlockEnd: 20 }}>
                  Tell us what you sell and where you are stuck. We will tell you
                  what it takes.
                </p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ink"
                  style={{ inlineSize: "100%", marginBlockEnd: 10 }}
                >
                  Contact us
                </a>
                <a
                  href={CONTACT.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--outline"
                  style={{ inlineSize: "100%" }}
                >
                  Book a call
                </a>
              </aside>
            </div>
          </div>
        </article>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
