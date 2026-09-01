# Accents are fills; foregrounds follow measured contrast

The brand's two colours are fills, not text colors. Their foregrounds are chosen from measured contrast:

```
paper on teal    2.80:1   FAIL
ink   on teal    5.44:1   PASS
ink   on green   2.75:1   FAIL
paper on green   5.55:1   PASS
teal  on paper   2.80:1   FAIL
```

The previous site put white text on a teal gradient button below the 3:1 floor for even large text. An Accent therefore remains a fill or decorative shape, never a text color. Teal carries Ink text. The darker `#2b7150` brand green carries Paper text.

The teal→green gradient survives only inside the logo disc, where it is existing brand equity. It appears nowhere else — no gradient buttons, no gradient text, no gradient numerals.

## Consequences

Where a section needs harder separation, invert the ground (Ink card on Paper) rather than reaching for a third colour.

**No dark mode.** The design's identity is the warm Paper ground with hairline-bordered Paper cards; inverting it produces a generic dark site rather than this one. `next-themes` is removed. Because the palette lives in CSS custom properties, a dark variant stays cheap to add later if it is ever genuinely wanted.
