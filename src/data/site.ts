export const SITE = {
  name: "myPeedika",
  url: "https://www.mypeedika.com",
} as const;

/* Confirmed live by the owner. WhatsApp is primary — it is how buyers in
   both India and the Gulf actually open a conversation. */
export const CONTACT = {
  whatsapp: "https://wa.me/919048814964",
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
