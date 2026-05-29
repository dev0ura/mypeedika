import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://www.mypeedika.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "myPeedika | Shopify Store Setup & Design for Indian Businesses",
    template: "%s | myPeedika",
  },
  description:
    "We build, design, and fix Shopify stores for Indian businesses. 100+ stores launched. Go live in 7 days. Book a free call today.",
  keywords: [
    "shopify store setup india",
    "shopify developer india",
    "shopify store design india",
    "online store setup india",
    "shopify implementation service india",
    "ecommerce website india",
    "shopify store kerala",
    "razorpay shopify setup",
    "shopify store cost india",
  ],
  authors: [{ name: "myPeedika", url: BASE_URL }],
  creator: "myPeedika",
  publisher: "myPeedika",

  // Canonical
  alternates: { canonical: BASE_URL },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "myPeedika",
    title: "myPeedika | Shopify Store Setup for Indian Businesses",
    description:
      "We build beautiful Shopify stores for Indian businesses. 100+ stores. 7-day delivery. Book a free call.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "myPeedika — Shopify Store Setup for Indian Businesses",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "myPeedika | Shopify Store Setup for Indian Businesses",
    description:
      "We build beautiful Shopify stores for Indian businesses. 7-day delivery. Book a free call.",
    images: ["/og-image.png"],
    creator: "@mypeedika",
  },

  // Icons
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

  // Verification (add your codes here when you have them)
  // verification: { google: "YOUR_CODE", },

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
      <body className={`${anton.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
