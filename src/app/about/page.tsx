import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/ui/policy-page";
import { services } from "@/data/services";
import { SITE, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "myPeedika builds and looks after Shopify stores for small businesses across India and the Gulf.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <PolicyPage
      title="About myPeedika"
      lead="We build and look after Shopify stores for small businesses across India and the Gulf."
    >
      <p>
        Peedika is the Malayalam word for a small shop. Most of the people we
        work with run exactly that: a clothing label, a baby products brand, a
        food business, a jewellery line. Many of them have been selling over
        Instagram and WhatsApp and want a proper store without having to learn
        the technical side themselves. That is the part we take off their hands.
      </p>

      <h2>What we do</h2>
      <p>We work on our clients&apos; own Shopify stores. There are four things we do:</p>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.title}.</strong> {service.description}
          </li>
        ))}
      </ul>
      <p>
        We also build and sell our own Shopify-connected software.{" "}
        <a href="https://dmreplyr.app/">Replyr</a> answers shoppers&apos;
        Instagram DMs using live product and order data from their store, and
        Shopalizer, a Chrome extension in early access, shows which theme and
        apps any Shopify store is running. More on the{" "}
        <Link href="/apps">apps page</Link>.
      </p>

      <h2>How we work</h2>
      <ul>
        <li>
          We look at what you actually need before we quote, and the quote is
          agreed in writing before any work starts.
        </li>
        <li>
          Everything runs over WhatsApp, email and calls, so it does not matter
          whether you are in Mumbai or Dubai.
        </li>
        <li>
          You own all of it. The store, the domain and the accounts stay in your
          name, and nothing is locked to us.
        </li>
      </ul>

      <h2>Who we are</h2>
      <p>
        myPeedika is owned and operated by <strong>{SITE.legalName}</strong>,
        based in India.
      </p>
      <p>
        You can see stores we have built on our <Link href="/works">works page</Link>, or
        reach us on WhatsApp at <a href={CONTACT.whatsapp}>{CONTACT.phone}</a> and by
        email at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. All our
        contact details are on the <Link href="/contact">contact page</Link>.
      </p>
    </PolicyPage>
  );
}
