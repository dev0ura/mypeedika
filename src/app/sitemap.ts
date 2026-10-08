import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { POLICIES, SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/works`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/apps`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const policyRoutes: MetadataRoute.Sitemap = POLICIES.map((policy) => ({
    url: `${SITE.url}${policy.href}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...policyRoutes, ...blogRoutes];
}
