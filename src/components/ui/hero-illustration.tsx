/* Hand-built flat vector in the reference's line language: Ink strokes,
   Paper fills, one Accent disc behind. Nothing raster, nothing generated. */

const INK = "#212121";
const PAPER = "#fcf8f5";
const STROKE = 4;

/* 8-point burst, R=44 r=16, centred (145,110). */
const BURST =
  "M145,66 L151.1,95.2 L176.1,78.9 L159.8,103.9 L189,110 L159.8,116.1 " +
  "L176.1,141.1 L151.1,124.8 L145,154 L138.9,124.8 L113.9,141.1 L130.2,116.1 " +
  "L101,110 L130.2,103.9 L113.9,78.9 L138.9,95.2 Z";

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 540"
      width="600"
      height="540"
      role="img"
      aria-label="A shopfront with a striped awning, surrounded by commerce icons"
      style={{ inlineSize: "100%", blockSize: "auto", maxInlineSize: "100%" }}
    >
      <defs>
        <clipPath id="awning-clip">
          <path d="M175,235 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 L400,190 L200,190 Z" />
        </clipPath>
      </defs>

      {/* Accent disc — the reference's pink circle, in teal */}
      <circle cx="300" cy="280" r="190" fill="var(--teal)" />

      {/* Shopfront */}
      <g transform="rotate(-5 300 280)">
        {/* Body */}
        <rect
          x="200"
          y="232"
          width="200"
          height="128"
          fill={PAPER}
          stroke={INK}
          strokeWidth={STROKE}
          strokeLinejoin="round"
        />

        {/* Door */}
        <rect
          x="230"
          y="278"
          width="58"
          height="82"
          rx="4"
          fill={PAPER}
          stroke={INK}
          strokeWidth={STROKE}
          strokeLinejoin="round"
        />
        <circle cx="277" cy="320" r="4.5" fill={INK} />

        {/* Window */}
        <rect
          x="315"
          y="272"
          width="62"
          height="50"
          rx="4"
          fill={PAPER}
          stroke={INK}
          strokeWidth={STROKE}
          strokeLinejoin="round"
        />
        <line x1="346" y1="272" x2="346" y2="322" stroke={INK} strokeWidth="3" />
        <line x1="315" y1="297" x2="377" y2="297" stroke={INK} strokeWidth="3" />

        {/* Awning — paper base, green stripes, ink outline last so it stays crisp */}
        <g>
          <path
            d="M175,235 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 L400,190 L200,190 Z"
            fill={PAPER}
          />
          <g clipPath="url(#awning-clip)">
            <rect x="175" y="180" width="50" height="80" fill="var(--green)" />
            <rect x="275" y="180" width="50" height="80" fill="var(--green)" />
            <rect x="375" y="180" width="50" height="80" fill="var(--green)" />
          </g>
          <path
            d="M175,235 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 a25,25 0 0,0 50,0 L400,190 L200,190 Z"
            fill="none"
            stroke={INK}
            strokeWidth={STROKE}
            strokeLinejoin="round"
          />
        </g>

        {/* Ground */}
        <line
          x1="168"
          y1="360"
          x2="432"
          y2="360"
          stroke={INK}
          strokeWidth={STROKE}
          strokeLinecap="round"
        />
      </g>

      {/* Orbiting elements */}
      <g className="drift-a">
        <path
          d={BURST}
          fill={PAPER}
          stroke={INK}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </g>

      <g className="drift-b">
        {/* Green disc — shopping cart */}
        <circle cx="492" cy="232" r="46" fill="var(--green)" />
        <g
          transform="translate(470,210) scale(0.92)"
          fill="none"
          stroke={INK}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1.6" />
          <circle cx="20" cy="21" r="1.6" />
          <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
        </g>
      </g>

      <g className="drift-c">
        {/* Ink disc — price tag */}
        <circle cx="452" cy="392" r="38" fill={INK} />
        <g
          transform="translate(435,375) scale(1.42)"
          fill="none"
          stroke={PAPER}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.6 11.6L11 13.2a1.4 1.4 0 01-2 0L3.4 7.6a1.4 1.4 0 01-.4-1V3a1 1 0 011-1h3.6a1.4 1.4 0 011 .4l5.6 5.6a1.4 1.4 0 010 2z" />
          <circle cx="5.5" cy="4.5" r="0.9" fill={PAPER} stroke="none" />
        </g>
      </g>

      {/* Small punctuation, matching the reference's loose dots */}
      <circle cx="112" cy="392" r="12" fill={INK} />
      <circle cx="88" cy="338" r="9" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="466" cy="118" r="10" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="527" cy="352" r="7" fill={INK} />
    </svg>
  );
}
