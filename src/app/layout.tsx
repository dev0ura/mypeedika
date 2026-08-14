import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

/* Single family, two weights. See docs/adr/0001. */
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://www.mypeedika.com";

const DESCRIPTION =
  "We build Shopify stores for businesses across India and the Gulf. Store design, speed, apps, and migrations — plus our own Shopify apps.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "myPeedika | We build Shopify stores",
    template: "%s | myPeedika",
  },
  description: DESCRIPTION,
  keywords: [
    "shopify store setup",
    "shopify developer india",
    "shopify store design",
    "shopify speed optimisation",
    "shopify migration",
    "shopify apps",
    "shopify store dubai",
    "shopify agency india",
  ],
  authors: [{ name: "myPeedika", url: BASE_URL }],
  creator: "myPeedika",
  publisher: "myPeedika",

  alternates: { canonical: BASE_URL },

  openGraph: {
    type: "website",
    locale: "en",
    url: BASE_URL,
    siteName: "myPeedika",
    title: "myPeedika | We build Shopify stores",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "myPeedika — we build Shopify stores",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "myPeedika | We build Shopify stores",
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@mypeedika",
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={figtree.variable}>{children}</body>
    </html>
  );
}
