import type { CSSProperties } from "react";

/* Brand green and Ink both carry Paper text. Never accent-on-accent. */
export default function CategoryPill({
  children,
  tone = "green",
  style,
}: {
  children: string;
  tone?: "green" | "ink";
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "5px 12px",
        borderRadius: 999,
        background: tone === "ink" ? "var(--ink)" : "var(--green)",
        color: "var(--paper)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
