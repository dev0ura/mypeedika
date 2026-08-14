export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  metaTitle: string
  metaDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-start-online-store-india",
    title: "How to Start an Online Store in India (2025 Complete Guide)",
    excerpt: "Thinking about selling online? This step-by-step guide covers everything you need to start your own online store in India — from choosing the right platform to accepting your first payment.",
    category: "Getting Started",
    readTime: "8 min read",
    publishedAt: "2025-01-15",
    metaTitle: "How to Start an Online Store in India (2025 Complete Guide) | myPeedika",
    metaDescription: "A complete step-by-step guide to starting your online store in India in 2025. Learn how to choose the right platform, set up payments, and start selling today.",
  },
  {
    slug: "shopify-store-setup-india",
    title: "Shopify Store Setup in India: Step-by-Step Guide for Beginners",
    excerpt: "A plain-English walkthrough of setting up your Shopify store in India — domain, theme, products, Indian payment gateways, GST, and shipping. No tech knowledge needed.",
    category: "Shopify Guides",
    readTime: "10 min read",
    publishedAt: "2025-02-01",
    metaTitle: "Shopify Store Setup in India: Step-by-Step for Beginners (2025) | myPeedika",
    metaDescription: "Learn how to set up a Shopify store in India step by step. Covers domain, theme, products, Razorpay/PhonePe payments, GST, and shipping setup.",
  },
  {
    slug: "shopify-vs-woocommerce-india",
    title: "Shopify vs WooCommerce in India: Which is Better for Your Business?",
    excerpt: "Both are popular — but which one is actually right for an Indian business? We compare Shopify and WooCommerce on price, ease of use, Indian payment support, and long-term maintenance.",
    category: "Comparisons",
    readTime: "7 min read",
    publishedAt: "2025-02-20",
    metaTitle: "Shopify vs WooCommerce India 2025: Which is Better? | myPeedika",
    metaDescription: "Shopify vs WooCommerce for Indian businesses — a detailed comparison of cost, ease of use, Indian payments, and who each platform is best for.",
  },
  {
    slug: "shopify-store-cost-india",
    title: "How Much Does a Shopify Store Cost in India? (Full Breakdown)",
    excerpt: "The real cost of a Shopify store in India — Shopify's subscription fees, setup costs, payment gateway charges, and what you can expect to pay in total. No surprises.",
    category: "Pricing & Cost",
    readTime: "6 min read",
    publishedAt: "2025-03-05",
    metaTitle: "Shopify Store Cost in India 2025: Full Breakdown | myPeedika",
    metaDescription: "Wondering how much a Shopify store costs in India? Full breakdown of Shopify plans, setup fees, payment gateway charges, and monthly costs for Indian businesses.",
  },
  {
    slug: "sell-online-india-beginners-guide",
    title: "How to Sell Products Online in India: Beginner's Complete Guide",
    excerpt: "Just starting out? This beginner's guide explains how to sell products online in India — what platform to use, how to handle shipping, payments, and taxes, and how to get your first customers.",
    category: "Getting Started",
    readTime: "9 min read",
    publishedAt: "2025-03-20",
    metaTitle: "How to Sell Products Online in India: Beginner's Guide 2025 | myPeedika",
    metaDescription: "Complete beginner's guide to selling products online in India. Learn about platforms, payments, shipping, GST, and how to get your first customers.",
  },
]

/** Newest first. Does not mutate `blogPosts`. */
export function postsByRecency(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}
