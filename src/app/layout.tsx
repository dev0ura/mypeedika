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

export const metadata: Metadata = {
  title: "myPeedika | Shopify Store Setup & Design for Indian Businesses",
  description: "We build, design, and fix Shopify stores for Indian businesses. 100+ stores launched. Go live in 7 days. Book a free call today.",
  keywords: "shopify store india, shopify setup india, online store india, shopify developer india, ecommerce india",
  openGraph: {
    title: "myPeedika | Shopify Store Setup for Indian Businesses",
    description: "We build beautiful Shopify stores for Indian businesses. Book a free call.",
    siteName: "myPeedika",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
