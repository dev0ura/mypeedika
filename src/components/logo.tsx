/* The gradient lives here and nowhere else on the site. See ADR 0002. */
export default function Logo() {
  return (
    <span className="inline-flex items-center gap-[10px]">
      <svg
        width="34"
        height="34"
        viewBox="0 0 44 44"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="mp-disc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#15a89a" />
            <stop offset="100%" stopColor="#2b7150" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="22" fill="url(#mp-disc)" />
        <g
          transform="translate(15,15) scale(0.583)"
          fill="none"
          stroke="#fcf8f5"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </g>
      </svg>
      <span
        style={{
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: "-0.035em",
          color: "var(--ink)",
        }}
      >
        my<span style={{ fontWeight: 400 }}>Peedika</span>
      </span>
    </span>
  );
}
