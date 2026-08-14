# myPeedika

Marketing site for myPeedika — Shopify store design, speed optimisation, apps, and migrations for merchants across India and the Gulf, plus our own Shopify apps (Replyr and Shopalizer).

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
npx tsc --noEmit   # typecheck
```

There is no test suite — the site is presentational, and `tsc` plus `next build` are the verification loop.

## Where things live

```
src/app/            routes — /, /works, /apps, /blog, /blog/[slug]
src/components/ui/  section components, one per page section
src/data/           all copy and content, separated from markup
public/works/       client store screenshots (1440×2200 WebP)
```

Content lives in `src/data/` rather than inline in components, so copy changes never touch layout. `src/data/site.ts` holds the contact links and nav.

## Read before changing anything visual

- **[DESIGN.md](./DESIGN.md)** — the design system, with measured values
- **[CONTEXT.md](./CONTEXT.md)** — the glossary. Work, App, Service, Paper, Ink, Accent
- **[docs/redesign-brief.md](./docs/redesign-brief.md)** — the settled brief for the 2026 rebuild
- **[docs/adr/](./docs/adr/)** — four decisions that are hard to reverse

Two rules are easy to break by accident:

1. **Accents are fills, Ink is text.** White on teal fails contrast at 2.96:1. See ADR 0002.
2. **Never ship `opacity: 0` in SSR HTML.** The scroll reveal must render visible without JS.

## Content standards

Every name, number, and quote on the site must be one we can point at. There are no store counts and no testimonials, because neither is currently verifiable. The previous site listed two invented clients and claimed "100+ stores launched" — that is the standard this rebuild exists to correct.

Two things to know about the preserved blog posts: they still contain "we build your store in 7 days" delivery claims inherited from the old copy, which the new FAQ deliberately does not make ("we give you a timeline before we start"). That inconsistency is unresolved and is the owner's call. Their myPeedika-specific price figures have been removed, since the site carries no pricing.

## Client screenshots

`public/works/*.webp` are full-page captures. To refresh after a client changes their theme:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1440,2200 --virtual-time-budget=12000 \
  --screenshot=shot.png https://example.com/
```

Then downscale to 1440×2200 and save as WebP. The 4:3 viewport and `translateY(-50%)` hover pan in `works.tsx` assume that aspect ratio.

## Analytics

PostHog is wired via `instrumentation-client.ts` and proxied through `/ingest` (see `next.config.ts`). The Shopalizer early-access form deliberately has no backend — it opens a mail draft rather than claiming a signup it does not record.
