import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },

  /* The old /services, /pricing and /portfolio pages are gone; their content
     now lives on the home page. Permanent so any earned ranking follows.
     See docs/adr/0003-blog-urls-survive-the-rebuild.md. */
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/pricing", destination: "/#services", permanent: true },
      { source: "/portfolio", destination: "/works", permanent: true },
    ];
  },

  // Required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
