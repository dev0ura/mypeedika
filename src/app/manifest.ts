import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "myPeedika — we build Shopify stores",
    short_name: "myPeedika",
    description:
      "Shopify store design, speed, apps, and migrations for businesses in India and the Gulf.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf8f5",
    theme_color: "#fcf8f5",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
