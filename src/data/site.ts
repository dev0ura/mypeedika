export const SITE = {
  name: "myPeedika",
  url: "https://www.mypeedika.com",
  /* The registered business name on the payment gateway account. Cashfree
     checks that it appears on the site, so the footer and /contact show it. */
  legalName: "Abdullah Abdul Samad",
} as const;

/* Confirmed live by the owner. WhatsApp is primary — it is how buyers in
   both India and the Gulf actually open a conversation. The phone number is
   the one registered with Cashfree; keep the two in step. */
export const CONTACT = {
  whatsapp: "https://wa.me/919400108878",
  phone: "+91 94001 08878",
  tel: "+919400108878",
  booking: "https://cal.com/rabeeh0ta/mypeedika-demo",
  email: "contact@mypeedika.com",
  instagram: "https://www.instagram.com/mypeedika",
} as const;

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "Apps", href: "/#apps" },
  { label: "Blog", href: "/blog" },
] as const;

/* The pages a payment gateway reviews before it activates an account. */
export const POLICIES = [
  { label: "Terms & conditions", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Refund & cancellation", href: "/refund-policy" },
  { label: "Shipping & delivery", href: "/shipping-policy" },
] as const;
