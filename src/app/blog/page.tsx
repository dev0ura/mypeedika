import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTABanner from "@/components/ui/cta-banner";
import BlogCard from "@/components/ui/blog-card";
import CategoryPill from "@/components/ui/category-pill";
import Reveal from "@/components/reveal";
import { postsByRecency } from "@/data/blog-posts";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-English guides on selling online — Shopify setup, costs, migrations, and comparisons.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogIndex() {
  const [featured, ...rest] = postsByRecency();

  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingBlock: "72px 48px" }}>
          <div className="container">
            <h1 className="t-hero" style={{ marginBlockEnd: 24 }}>
              Blog
            </h1>
            <p className="t-lead" style={{ maxInlineSize: "46ch" }}>
              Guides for people running the business, not the website. No jargon,
              no upsells buried in the middle.
            </p>
          </div>
        </section>

        {/* Featured — editorial, not another card in the grid */}
        <section style={{ paddingBlockEnd: 56 }}>
          <div className="container">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="card feat-card"
                style={{ padding: "clamp(28px, 4vw, 56px)" }}
              >
                <CategoryPill style={{ alignSelf: "flex-start", marginBlockEnd: 24 }}>
                  {featured.category}
                </CategoryPill>
                <h2
                  className="t-section"
                  style={{ maxInlineSize: "18ch", marginBlockEnd: 20 }}
                >
                  {featured.title}
                </h2>
                <p className="t-lead" style={{ maxInlineSize: "60ch", marginBlockEnd: 24 }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center" style={{ gap: 16 }}>
                  <span className="micro">{featured.readTime}</span>
                  <span className="micro">
                    {new Date(featured.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        <section style={{ paddingBlockEnd: 96 }}>
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <BlogCard post={post} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
