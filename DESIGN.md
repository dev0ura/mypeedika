# myPeedika — Design System

## Colors (from brand identity doc)
- `--ink`: #0a0d0c — near-black, primary text
- `--paper`: #fafaf7 — warm off-white, page background
- `--mist`: #f1f2ee — light surface, card backgrounds
- `--rule`: #e6e7e2 — borders and dividers
- `--muted`: #6b7370 — secondary/muted text
- `--teal`: #15a89a — PRIMARY brand color
- `--green`: #3edd5c — accent green
- `--grad`: linear-gradient(135deg, #15a89a 0%, #3edd5c 100%) — brand gradient (diagonal)
- `--grad-h`: linear-gradient(90deg, #15a89a 0%, #3edd5c 100%) — brand gradient (horizontal)
- Dark section bg: #0a0d0c with text #fafaf7

## Typography
- **Display / Headlines**: Anton (Google Font, weight 400, UPPERCASE, letter-spacing 0.01em, line-height 0.85–0.92) — impact, condensed, bold
- **Body / UI**: Space Grotesk (Google Font, humanist sans) — weights 400, 500, 600, 700
- **Mono / Code**: JetBrains Mono
- **Micro labels**: 11px, letter-spacing 0.18em, uppercase, muted color
- Headlines should feel LARGE and confident — use Anton for any big display text

## Logo
- Disc: fully rounded pill, gradient background (#15a89a → #3edd5c), white icon inside
- Wordmark: "my**Peedika**" — Space Grotesk weight 600, letter-spacing -0.01em
- Shadow on disc: `0 24px 60px -16px rgba(21, 168, 154, 0.45)`

## Layout
- Max container: 1280px, padding 0 56px desktop / 0 24px mobile
- Section padding: 88px 0 desktop / 56px 0 mobile
- Section headers use a large Anton number (01, 02 etc.) + h2

## Borders & Radius
- Cards: border-radius 8px, border 1px solid #e6e7e2
- Logo disc: border-radius 999px
- Buttons: border-radius 999px (pill)

## Dark sections
- Background: #0a0d0c
- Text: #fafaf7
- Muted text: #8a938f
- Borders: #1a1f1d

## Buttons
- Primary: gradient background (#15a89a → #3edd5c), white text, pill shape
- Secondary: transparent, border 1px solid #e6e7e2, ink text
- Ghost dark: transparent, border rgba(255,255,255,0.2), paper text

## Blog page UX requirements
- NOT a grid of generic cards
- Should feel editorial — like a magazine or high-quality publisher
- Featured post large and prominent at top
- Use category pills, read time, and publish date prominently
- Use Anton font for article titles
- Use the brand teal/green as accent on hover states
- Dark header section, light card section
