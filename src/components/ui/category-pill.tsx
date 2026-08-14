import type { CSSProperties } from "react";

/* Accent fill with Ink text, or Ink fill with Paper text when it sits on
   top of an accent-coloured thumbnail. Never accent-on-accent. ADR 0002. */
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
        color: tone === "ink" ? "var(--paper)" : "var(--ink)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
