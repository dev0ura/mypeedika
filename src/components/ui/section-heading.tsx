import type { ReactNode } from "react";

/* The heading-left / blurb-right row that opens Works, Apps and Blog. */
export default function SectionHeading({
  title,
  blurb,
}: {
  title: ReactNode;
  blurb: string;
}) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-end justify-between"
      style={{ gap: 20, marginBlockEnd: 44 }}
    >
      <h2 className="t-section">{title}</h2>
      <p className="t-body" style={{ maxInlineSize: "38ch" }}>
        {blurb}
      </p>
    </div>
  );
}
