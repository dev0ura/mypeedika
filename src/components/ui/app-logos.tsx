/* Product marks drawn to match each app's own identity.
   Replyr's is taken from dmreplyr.app: a four-point sparkle with a pastel
   gradient and an indigo outline, beside a lowercase serif wordmark.
   Shopalizer has no site yet, so its mark borrows Wappalyzer's stacked
   isometric rhombus — the visual shorthand for "detects the stack". */

export function ReplyrLogo() {
  return (
    <span className="applogo">
      <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="replyr-spark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b6f5d8" />
            <stop offset="45%" stopColor="#8fe9f0" />
            <stop offset="100%" stopColor="#e9b8f0" />
          </linearGradient>
        </defs>
        <path
          d="M24 3 Q27.5 17.5 45 24 Q27.5 30.5 24 45 Q20.5 30.5 3 24 Q20.5 17.5 24 3 Z"
          fill="url(#replyr-spark)"
          stroke="#5f63f0"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </svg>
      <span className="applogo__word applogo__word--replyr">replyr</span>
    </span>
  );
}

export function ShopalizerLogo() {
  return (
    <span className="applogo">
      <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
        {/* under-layer, offset down like Wappalyzer's stacked card */}
        <path d="M24 14 L44 28 L24 42 L4 28 Z" fill="#d3c4ec" />
        {/* top face */}
        <path d="M24 5 L44 19 L24 33 L4 19 Z" fill="#ffffff" />
        <text
          x="24"
          y="24"
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          fill="#4608ad"
          fontFamily="var(--font-figtree), system-ui, sans-serif"
        >
          S
        </text>
      </svg>
      <span className="applogo__word applogo__word--shopalizer">Shopalizer</span>
    </span>
  );
}
