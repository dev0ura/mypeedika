# myPeedika redesign — settled brief

Every decision below was settled in the grilling session. Vocabulary is defined in [CONTEXT.md](../CONTEXT.md); the four hard-to-reverse decisions have ADRs in [docs/adr/](./adr/). Nothing here is an assumption — where a fact was unknown it is marked.

## Scope

Full ground-up rebuild. Everything in `src/` is replaced. Only two things carry over from the old site: **the logo** and **the two brand colours**. No copy, no components, no data files, no claims.

## Positioning

Shopify storefronts for SMBs in **India and the Gulf**, on one English page — both markets named explicitly rather than geo-detected. Plus two Shopify-connected Apps of our own.

## Page structure

Single page, in order:

1. **Hero** — "we build Shopify stores". Custom SVG illustration inside a large teal disc, matching the reference's composition. Clean, one message.
2. **Services** — four cards in the reference's bento grid, one Inverted:
   - Store design & premium theme setup
   - Store speed optimisation
   - Apps & custom apps
   - Reviews setup & migrations
3. **Works** — bordered Paper cards holding full-page store screenshots that pan on hover; click opens the live store in a new tab. [lavandastyle.com](https://lavandastyle.com/) and [zeharbabystore.com](https://zeharbabystore.com/).
4. **Apps** — one card per App, each dressed in that product's own brand rather than myPeedika's, so the section reads as a shelf of real products. **Replyr** (live, links to dmreplyr.app) and **Shopalizer** (Early access). Superseded the Inverted cards this brief originally specified, then a split testimonial layout, both at the owner's request. See DESIGN.md, "App cards".
5. **Blog preview** — two most recent posts, linking through to `/blog`. The reference carries a Blog section and the owner asked to keep it.
6. **FAQ** — reference's accordion, green soft-fill on the open state. Content rewritten.
7. **CTA** + **Footer**.

Additional routes: `/blog`, `/blog/[slug]`, `/works`, `/apps`.

## Design system

Measured from the reference screenshots, not estimated.

```
Paper        #fcf8f5     page ground AND card fill
Ink          #212121     all text; fill of Inverted cards
Accent 1     #15a89a     teal  — the loud accent (reference's pink)
Accent 2     #3edd5c     green — the soft accent (reference's peach)

Card         Paper fill, 1px Ink hairline border, ~24px radius
Buttons      full pill
Type         Figtree — ~700 headlines, ~400 body/nav. Two weights, one family.
```

**Rules that are not negotiable** (see ADR 0002): accents are fills only, Ink is always the text on top, never white-on-accent, never accent-as-text. The teal→green gradient appears only inside the logo disc.

## Routes and redirects

Preserved (ADR 0003) — slugs unchanged, **prose kept**, design fully replaced. The owner's instruction was "keep these, re-skin completely", so the writing stays; only myPeedika's own price figures were stripped, to honour the no-pricing decision below:

```
/blog/how-to-start-online-store-india
/blog/shopify-store-setup-india
/blog/shopify-vs-woocommerce-india
/blog/shopify-store-cost-india
/blog/sell-online-india-beginners-guide
```

Permanently redirected (Next.js emits 308, which search engines treat as 301): `/services` and `/pricing` → `/#services`, `/portfolio` → `/works`.

## Calls to action

- **Primary** — WhatsApp: `https://wa.me/919048814964`
- **Secondary** — booking: `https://cal.com/rabeeh0ta/mypeedika-demo`

Confirmed live by the owner. No pricing anywhere on the site — a contact button instead.

## Deliberately excluded

- **Testimonials** — no real quotes exist yet. Section omitted rather than fabricated. Revisit when quotes are available.
- **Metrics and store counts** — the old site claimed "100+ stores launched" in its structured data with no basis. No count ships until it is true.
- **Pricing** — no page, no table, no "from" figure.
- **Dark mode** — `next-themes` removed (ADR 0002).
- **Arabic / RTL** — English only, but built with logical CSS properties so it stays cheap (ADR 0004).
- **iframes for Works** — impossible, not merely inadvisable: both client stores send `X-Frame-Options: DENY` and `frame-ancestors 'none'`. Screenshots are the only route.

## Known gaps

- **Shopalizer's Early access form** is UI-only by the owner's explicit instruction — no PostHog, no API, no persistence. It must not show a success confirmation, since no signup is recorded. Wiring it later is one line.
- **Blog traffic is unmeasured.** The connected PostHog credentials reach only the Blend-ed org, so myPeedika's analytics could not be read. Blog URLs are preserved under that uncertainty.
- **[DESIGN.md](../DESIGN.md) is stale** — it still specifies Anton and gradient buttons, both now reversed. Rewrite it from this brief as the first step of the build.
- **[PRODUCT.md](../PRODUCT.md) is background only** — useful for tone, not authoritative on any decision.

## Motion

Restrained. Entrance fades on scroll, the hover-pan on Works screenshots, accordion transitions. Nothing that announces itself.
