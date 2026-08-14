# Accents are fills, Ink is text; the gradient retires to the logo

The brand's two colours cannot carry text. Measured against the Paper ground:

```
white on teal    2.96:1   FAIL   (the previous site's primary button)
white on green   1.79:1   FAIL
teal  on paper   2.80:1   FAIL   (teal as text, at any size)
ink   on teal    5.44:1   PASS
ink   on green   8.97:1   PASS
```

The previous site put white text on a teal→green gradient button at 2.96:1, below the 3:1 floor for even large text. Rather than alter the brand colours, we adopt the reference's own discipline: an Accent is always a fill with Ink text on top, or a decorative shape carrying no text. Teal is the loud accent, green the soft one, mapping onto the reference's pink and peach respectively.

The teal→green gradient survives only inside the logo disc, where it is existing brand equity. It appears nowhere else — no gradient buttons, no gradient text, no gradient numerals.

## Consequences

Teal and green sit roughly 40° apart in hue and are closer in value than the reference's pink and peach, so they separate less strongly. Where a section needs harder separation, invert the ground (Ink card on Paper) rather than reaching for a third colour.

**No dark mode.** The design's identity is the warm Paper ground with hairline-bordered Paper cards; inverting it produces a generic dark site rather than this one. `next-themes` is removed. Because the palette lives in CSS custom properties, a dark variant stays cheap to add later if it is ever genuinely wanted.
