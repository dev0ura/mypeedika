import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "myPeedika — Shopify Store Setup for Indian Businesses",
    short_name: "myPeedika",
    description:
      "We build beautiful Shopify stores for Indian businesses. 100+ stores. 7-day delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf7",
    theme_color: "#15a89a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
