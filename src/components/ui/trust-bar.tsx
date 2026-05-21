export default function TrustBar() {
  return (
    <div
      className="border-b"
      style={{ background: "var(--ink)", borderColor: "var(--ink-border)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        <p className="micro" style={{ color: "var(--ink-muted)", flexShrink: 0 }}>
          Trusted by
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {[
            "Clothing brands",
            "Baby stores",
            "Food businesses",
            "Jewellery sellers",
            "Home decor",
          ].map((c) => (
            <span key={c} className="micro" style={{ color: "var(--ink-subtle)", letterSpacing: "0.1em" }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
