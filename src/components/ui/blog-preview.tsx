import Link from "next/link";
import Reveal from "@/components/reveal";
import BlogCard from "./blog-card";
import SectionHeading from "./section-heading";
import { postsByRecency } from "@/data/blog-posts";

export default function BlogPreview() {
  const recent = postsByRecency().slice(0, 2);

  return (
    <section className="section" style={{ paddingBlockStart: 0 }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Blog"
            blurb="Plain English guides on selling online, written for the people running the business rather than the website."
          />
        </Reveal>

        <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
          {recent.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} index={i} />
            </Reveal>
          ))}
        </div>

        <div style={{ marginBlockStart: 36, textAlign: "center" }}>
          <Link href="/blog" className="btn btn--outline">
            All articles
          </Link>
        </div>
      </div>
    </section>
  );
}
