export interface Work {
  id: string;
  /* Real client, real link. A Work always points at a reachable store. */
  name: string;
  category: string;
  description: string;
  url: string;
  /* Full-page capture at 1440x2200, panned on hover. Iframes are impossible
     here — both stores send frame-ancestors 'none'. */
  screenshot: string;
}

export const works: Work[] = [
  {
    id: "lavanda",
    name: "Lavanda",
    category: "Children's occasion wear",
    description:
      "A premium kidswear storefront where the clothes have to carry the sale. Built so the photography stays the loudest thing on every page.",
    url: "https://lavandastyle.com/",
    screenshot: "/works/lavandastyle.webp",
  },
  {
    id: "zehar",
    name: "Zehar Baby Store",
    category: "Baby & kids",
    description:
      "A baby store organised the way parents actually shop — browsing straight into 0–3, 3–6, 6–12 and 12–18 months rather than hunting through a catalogue.",
    url: "https://zeharbabystore.com/",
    screenshot: "/works/zehar.webp",
  },
];
