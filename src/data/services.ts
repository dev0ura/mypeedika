export interface Service {
  id: string;
  title: string;
  description: string;
  /* Exactly one Service is inverted, mirroring the reference's grid. */
  inverted?: boolean;
}

export const services: Service[] = [
  {
    id: "store-design",
    title: "Store design",
    description:
      "Premium themes set up properly — your products, your brand, your layout. Not a demo store with the pictures swapped out.",
  },
  {
    id: "speed",
    title: "Speed optimisation",
    description:
      "Slow stores lose sales. We find what is dragging your storefront down and fix it, from bloated apps to unoptimised images.",
  },
  {
    id: "apps",
    title: "Apps & custom apps",
    description:
      "The right apps installed and configured for how you actually sell. When nothing off the shelf fits, we build it.",
    inverted: true,
  },
  {
    id: "migrations",
    title: "Reviews & migrations",
    description:
      "Moving from WooCommerce, Wix, or another Shopify store. Products, customers, and reviews arrive intact.",
  },
];
