export interface App {
  id: string;
  name: string;
  /* One line. What it does, not what category it is in. */
  tagline: string;
  description: string;
  status: "live" | "early-access";
  url?: string;
  platform: string;
}

export const apps: App[] = [
  {
    id: "replyr",
    name: "Replyr",
    tagline: "AI Instagram DM automation for Shopify",
    description:
      "Shoppers ask about size, price, and delivery in your Instagram DMs at midnight. Replyr answers them using live product and order data from your store, in the language they wrote in.",
    status: "live",
    url: "https://dmreplyr.app/",
    platform: "Instagram + Shopify",
  },
  {
    id: "shopalizer",
    name: "Shopalizer",
    tagline: "See what any Shopify store is running",
    description:
      "Open any Shopify store and see its theme and every app installed on it. Useful when you are deciding what to build your own store with, and useful when a competitor does something well.",
    status: "early-access",
    platform: "Chrome extension",
  },
];
