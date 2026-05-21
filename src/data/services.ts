export interface Service {
  id: string
  icon: string
  title: string
  tagline: string
  description: string
  includes: string[]
  turnaround: string
  badge?: string
}

export const services: Service[] = [
  {
    id: "new-store",
    icon: "store",
    title: "New Shopify Store",
    tagline: "Start selling online in 7 days",
    description: "We set up your entire Shopify store from scratch — design, products, payments, and everything in between. You just focus on your business.",
    includes: [
      "Beautiful store design (your branding)",
      "Product listing setup",
      "Payment gateway (Razorpay / PhonePe / Stripe)",
      "Shipping & tax configuration",
      "Mobile-friendly & fast",
      "SEO basics setup",
    ],
    turnaround: "5–7 days",
    badge: "Most Popular",
  },
  {
    id: "store-redesign",
    icon: "layout",
    title: "Store Redesign",
    tagline: "Make your store look amazing",
    description: "Your store exists but doesn't look professional or convert well. We redesign it completely — better design, better layout, more sales.",
    includes: [
      "Full theme redesign",
      "Better product page layout",
      "Faster loading speed",
      "Improved checkout flow",
      "New homepage & collections",
      "Mobile optimization",
    ],
    turnaround: "7–10 days",
  },
  {
    id: "store-fix",
    icon: "wrench",
    title: "Store Fix / Rescue",
    tagline: "Something broken? We fix it",
    description: "Checkout not working? Products not showing? Store slow? Whatever the problem is, we diagnose and fix it quickly so you don't lose sales.",
    includes: [
      "Bug diagnosis & fixing",
      "Payment issues resolved",
      "App conflicts fixed",
      "Speed optimization",
      "Theme errors corrected",
      "Free follow-up support (7 days)",
    ],
    turnaround: "1–3 days",
  },
  {
    id: "migration",
    icon: "arrow-right-left",
    title: "Platform Migration",
    tagline: "Move to Shopify, the right way",
    description: "Moving from WooCommerce, Wix, or any other platform? We migrate your products, orders, and customers to Shopify without losing anything.",
    includes: [
      "All products migrated",
      "Customer data preserved",
      "Order history moved",
      "SEO URLs redirected (no ranking loss)",
      "New Shopify theme setup",
      "Post-migration testing",
    ],
    turnaround: "7–14 days",
  },
  {
    id: "payment-setup",
    icon: "credit-card",
    title: "Payment & Shipping Setup",
    tagline: "Accept payments the Indian way",
    description: "Set up all popular Indian payment methods and configure shipping rules so your customers can pay easily and you can deliver smoothly.",
    includes: [
      "Razorpay / PhonePe / Paytm setup",
      "UPI, cards, net banking",
      "COD (Cash on Delivery) setup",
      "Shiprocket / Delhivery integration",
      "Shipping zones & rates",
      "GST / tax configuration",
    ],
    turnaround: "1–2 days",
  },
  {
    id: "support",
    icon: "headphones",
    title: "Ongoing Support",
    tagline: "We're always in your corner",
    description: "Monthly support plan so you always have a Shopify expert to call. Update products, change banners, fix issues — we handle it all.",
    includes: [
      "Dedicated WhatsApp support",
      "Monthly store health check",
      "Product & content updates",
      "App management",
      "Performance monitoring",
      "Priority bug fixing",
    ],
    turnaround: "Monthly retainer",
  },
]
