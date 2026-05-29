import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE = "https://www.mypeedika.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/services`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url:              `${BASE}/blog/${post.slug}`,
    lastModified:     new Date(post.publishedAt),
    changeFrequency:  "monthly",
    priority:         0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
