# Single-family geometric typography

The previous design system specified Anton — a condensed uppercase display face — for all headlines, paired with Space Grotesk for body. The design reference we are rebuilding against uses one geometric neo-grotesque throughout at two weights (~700 for headlines, ~400 for body and nav), with no display face and no second family. Headlines in the reference are wide and sentence-case, which Anton structurally cannot produce.

We identified the reference's face as belonging to the Aeonik / Circular Std family — diagnostic glyphs are a double-storey `a` with no spur, a single-storey `g` with an open tail, a stubby flat-cut `r`, and near-circular `o`/`d`. We rendered candidates against the reference at matched x-height and chose **Figtree**: it is the closest free match, is variable, and loads through `next/font/google` with no self-hosting step.

Anton and Space Grotesk are removed entirely.

The reference itself uses only two weights. The build loads four (400/500/600/700) because it contains UI the reference does not — buttons, pills, nav links and micro labels — which need mid-weights to hold their own at small sizes. The single-family constraint is the part that matters and is unchanged; `DESIGN.md` records which weight does which job.

## Considered options

**General Sans** (Fontshare) is a closer match to Aeonik specifically and remains the fallback if Figtree reads as too neutral in practice. It costs one extra step — self-hosting via `next/font/local` — which is the only reason it lost.
