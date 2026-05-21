export interface Client {
  id: string
  name: string
  category: string
  description: string
  image: string
  url: string
  result: string
  service: string
  featured?: boolean
}

export const clients: Client[] = [
  {
    id: "baby-store-1",
    name: "Little Wonders",
    category: "Baby & Kids",
    description: "Full Shopify store built from scratch for a premium baby products brand",
    image: "/images/portfolio/baby-store-1.jpg",
    url: "#",
    result: "Live in 7 days",
    service: "Full Store Build",
    featured: true,
  },
  {
    id: "baby-store-2",
    name: "Tiny Tots Shop",
    category: "Baby & Kids",
    description: "Store performance fix and redesign for an existing baby essentials store",
    image: "/images/portfolio/baby-store-2.jpg",
    url: "#",
    result: "Store fixed & redesigned",
    service: "Store Fix",
    featured: true,
  },
]
