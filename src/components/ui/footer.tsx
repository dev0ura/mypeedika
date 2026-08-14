import Link from "next/link";
import Logo from "@/components/logo";
import { CONTACT, SITE } from "@/data/site";
import { services } from "@/data/services";
import { apps } from "@/data/apps";

const columns = [
  {
    title: "Services",
    links: services.map((s) => ({ label: s.title, href: "/#services" })),
  },
  {
    title: "Apps",
    links: apps.map((a) => ({
      label: a.name,
      href: a.status === "live" && a.url ? a.url : "/#apps",
    })),
  },
  {
    title: "More",
    links: [
      { label: "Works", href: "/#works" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderBlockStart: "1.5px solid var(--hairline)" }}>
      <div className="container" style={{ paddingBlock: "56px 32px" }}>
        <div
          className="grid md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]"
          style={{ gap: 40 }}
        >
          <div>
            <Logo />
            <p
              className="t-body"
              style={{ maxInlineSize: "28ch", marginBlockStart: 18, marginBlockEnd: 20 }}
            >
              Shopify stores for merchants across India and the Gulf.
            </p>
            <div className="flex flex-wrap" style={{ gap: 10 }}>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
                style={{ fontSize: 14, padding: "11px 22px" }}
              >
                WhatsApp
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
                style={{ fontSize: 14, padding: "11px 22px" }}
              >
                Instagram
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="micro" style={{ marginBlockEnd: 16 }}>
                {column.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: 15, color: "var(--muted)" }}
                        className="foot-link"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{ fontSize: 15, color: "var(--muted)" }}
                        className="foot-link"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between"
          style={{
            gap: 12,
            marginBlockStart: 48,
            paddingBlockStart: 24,
            borderBlockStart: "1.5px solid var(--hairline)",
          }}
        >
          <p className="micro">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <a href={`mailto:${CONTACT.email}`} className="micro foot-link">
            {CONTACT.email}
          </a>
        </div>
      </div>

    </footer>
  );
}
