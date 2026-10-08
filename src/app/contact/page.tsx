import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { SITE, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach myPeedika on WhatsApp, phone or email. Registered business name, phone number and email address.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const valueStyle = {
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: "-0.02em",
  lineHeight: 1.3,
  overflowWrap: "anywhere",
  marginBlockEnd: 12,
} as const;

/* Every row here is checked by the payment gateway's website review, so the
   name and phone number must match the ones registered with Cashfree. */
const businessDetails = [
  { label: "Registered business name", value: SITE.legalName },
  { label: "Trading as", value: SITE.name },
  { label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.tel}` },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "Website", value: "www.mypeedika.com", href: SITE.url },
  { label: "Country", value: "India" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingBlock: "72px 48px" }}>
          <div className="container">
            <h1 className="t-hero" style={{ maxInlineSize: "12ch", marginBlockEnd: 24 }}>
              Contact us
            </h1>
            <p className="t-lead" style={{ maxInlineSize: "46ch" }}>
              WhatsApp is the fastest way to reach us. Calls and email work too,
              and you will hear back from a person, not a bot.
            </p>
          </div>
        </section>

        <section style={{ paddingBlockEnd: 96 }}>
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
              <div className="card">
                <p className="micro" style={{ marginBlockEnd: 16 }}>
                  Phone & WhatsApp
                </p>
                <a href={`tel:${CONTACT.tel}`} style={valueStyle}>
                  {CONTACT.phone}
                </a>
                <p className="t-body" style={{ marginBlockEnd: 24 }}>
                  Message us with what you sell and where you are stuck.
                </p>
                <div className="flex flex-wrap" style={{ gap: 10, marginBlockStart: "auto" }}>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ink"
                  >
                    WhatsApp us
                  </a>
                  <a href={`tel:${CONTACT.tel}`} className="btn btn--outline">
                    Call
                  </a>
                </div>
              </div>

              <div className="card">
                <p className="micro" style={{ marginBlockEnd: 16 }}>
                  Email
                </p>
                <a href={`mailto:${CONTACT.email}`} style={valueStyle}>
                  {CONTACT.email}
                </a>
                <p className="t-body" style={{ marginBlockEnd: 24 }}>
                  For quotes, invoices, payments and anything you want in writing.
                </p>
                <div style={{ marginBlockStart: "auto" }}>
                  <a href={`mailto:${CONTACT.email}`} className="btn btn--outline">
                    Send an email
                  </a>
                </div>
              </div>

              <div className="card">
                <p className="micro" style={{ marginBlockEnd: 16 }}>
                  Book a call
                </p>
                <p style={valueStyle}>Book a free call</p>
                <p className="t-body" style={{ marginBlockEnd: 24 }}>
                  Pick a time that suits you and we will talk through your store.
                </p>
                <div style={{ marginBlockStart: "auto" }}>
                  <a
                    href={CONTACT.booking}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--outline"
                  >
                    Pick a time
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginBlockStart: 20 }}>
              <h2 className="t-card" style={{ marginBlockEnd: 24 }}>
                Business details
              </h2>
              <dl
                className="grid sm:grid-cols-[max-content_minmax(0,1fr)]"
                style={{ columnGap: 40, rowGap: 14, margin: 0 }}
              >
                {businessDetails.map((row) => (
                  <div key={row.label} className="contents">
                    <dt className="micro" style={{ paddingBlockStart: 5 }}>
                      {row.label}
                    </dt>
                    <dd
                      style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 500,
                        overflowWrap: "anywhere",
                      }}
                      className="max-sm:mb-2"
                    >
                      {row.href ? (
                        <a href={row.href} className="foot-link">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
