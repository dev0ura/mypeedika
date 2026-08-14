# myPeedika — Design System

Values here were measured from the design reference in `design-inspirations/`, not estimated. Terminology is defined in [CONTEXT.md](./CONTEXT.md). Two rules in this file are load-bearing and have ADRs behind them — read [docs/adr/0001](./docs/adr/0001-single-family-geometric-typography.md) and [docs/adr/0002](./docs/adr/0002-accent-as-fill-ink-as-text.md) before changing type or colour.

## Colour

| Token | Value | Role |
|---|---|---|
| `--paper` | `#fcf8f5` | Page ground **and** card fill |
| `--ink` | `#212121` | All text; fill of Inverted cards |
| `--teal` | `#15a89a` | Accent 1 — the loud one |
| `--green` | `#3edd5c` | Accent 2 — the soft one |
| `--logo-grad` | teal → green | **Logo disc only** |

Cards share the page ground. They are Paper, not white — only the hairline separates them. This is the single detail that most distinguishes the design from a generic card layout.

### The rule that cannot be broken

**Accents are fills. Ink is the text on top.** Never white on an accent, never an accent as text.

```
white on teal    2.96:1   FAIL      ink on teal    5.44:1   PASS
white on green   1.79:1   FAIL      ink on green   8.97:1   PASS
teal on paper    2.80:1   FAIL      ink on paper  15.25:1   PASS
```

The previous site shipped white-on-teal buttons at 2.96:1. That is why this rule exists.

There is no dark mode. The warm Paper ground is the design's identity; inverting it produces a different, more generic site.

## Typography

**Figtree only.** No display face, no second family.

The reference uses two weights; the build ships four, because UI chrome the reference does not contain needs mid-weights:

| Weight | Use |
|---|---|
| 400 | Body copy, article text |
| 500 | `.micro` labels, nav links |
| 600 | Buttons, pills, FAQ questions, card meta |
| 700 | All headings |

Adding a fifth weight needs a reason. Removing 500 or 600 means restyling every button and label.

| Class | Size | Use |
|---|---|---|
| `.t-hero` | `clamp(36px, 9.5vw, 116px)` | Page headline |
| `.t-section` | `clamp(34px, 6vw, 76px)` | Section headings |
| `.t-card` | `clamp(24px, 2.6vw, 34px)` | Card titles |
| `.t-lead` | `clamp(16px, 1.5vw, 19px)` | Intro paragraphs |
| `.t-body` | `16px` | Body copy |
| `.micro` | `11px`, `0.16em`, uppercase | Labels and meta |

Headings are sentence case, never uppercase. Letter-spacing is negative and tightens as size grows. The `.t-hero` floor of 36px is set by the longest unbreakable word at the narrowest viewport — raising it reintroduces horizontal overflow on phones.

## Geometry

```
card radius     24px
card border     1.5px solid rgba(33,33,33,0.9)
button radius   999px (full pill)
container       1280px, padding 24px / 56px at ≥768px
section rhythm  72px block padding, 120px at ≥768px
```

Exactly one card per grid is Inverted — in Services it is "Apps & custom apps" — plus the closing call to action. Nowhere else.

## App cards

**The one deliberate exception to everything above.** Each App card is dressed in *that product's* brand, not myPeedika's, so the section reads as a shelf of real products rather than two more service cards. Palettes were sampled from the live sites.

| | Replyr | Shopalizer |
|---|---|---|
| Ground | `#f6f3f1` warm paper | `#121212` near-black |
| Accent | `#5f63f0` indigo | `#4608ad` purple |
| Support | `#2b59d1` CTA, `#ddd0a2` avatar | `#a78bfa` violet, `#d3c4ec` lavender |
| Wordmark | lowercase serif | heavy sans |
| Motif | Instagram DM exchange | URL bar + detected-stack chips |

Shopalizer has no site yet, so its identity is derived from [Wappalyzer](https://www.wappalyzer.com/) — the stacked isometric rhombus and the purple-on-black scheme — which is the point of the product.

Two contrast corrections were forced here, and both must hold:

- Replyr's real indigo is `#6a6ef6`, which puts white bubble text at **4.06:1**. The card uses `#5f63f0` — visually the same, **4.64:1**.
- Wappalyzer's purple on black is **1.69:1**, so it is only ever a large fill behind white text (11.06:1). Small text and chips use `#a78bfa` (**6.88:1**) or lavender.

The system monospace stack (`ui-monospace`) is used for micro labels on these cards, echoing both products. It loads no webfont, so the single-family rule in ADR 0001 is unaffected.

## Motion

Restrained. Scroll reveal fades and lifts 18px; Works screenshots pan on hover; the hero illustration drifts. Everything honours `prefers-reduced-motion`.

**The reveal must degrade safely.** The server renders no state attribute, so with JS blocked the content is simply visible. Never ship `opacity: 0` in the SSR HTML waiting on a script — an earlier build did, and the whole page below the hero was invisible without JS.

## Direction

All directional CSS uses logical properties — `margin-inline-start`, `padding-block`, `inset-inline-end`. The site is English-only today; this keeps RTL cheap if the Gulf market ever justifies it. See [ADR 0004](./docs/adr/0004-english-only-with-logical-properties.md).

## Layout notes

- **Hero** is two-column above 900px — message and CTAs left, illustration right — and stacks below.
- **Services** is a sticky left heading beside a 2×2 bento.
- **Works** cards hold a full-page screenshot in a browser frame that pans on hover. Iframes are impossible; both client stores send `frame-ancestors 'none'`.
- **Apps** borrows the reference's testimonial layout — two columns split by a vertical rule, not cards. Each slot maps across: the quote glyph becomes the app icon, the quote itself becomes the tagline, and the avatar/name/role row becomes icon/name/platform.
- **FAQ** open state fills with green — the reference's soft-accent state, and where Accent 2 does its main job.
