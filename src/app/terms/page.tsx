import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/ui/policy-page";
import { SITE, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: "The terms that apply when you use mypeedika.com or hire myPeedika for Shopify work.",
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & conditions"
      lead="The terms that apply when you use this website or hire us to work on your Shopify store. Written to be read, not skimmed past."
      updated="8 October 2026"
    >
      <h2>Who we are</h2>
      <p>
        myPeedika is a business owned and operated by <strong>{SITE.legalName}</strong>{" "}
        (&ldquo;myPeedika&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). These terms cover the
        website at {SITE.url.replace("https://", "")} and every service we provide.
        By using the website or paying for our services, you agree to them.
      </p>

      <h2>What we provide</h2>
      <p>
        We design, build, fix, speed up and maintain Shopify stores, set up and
        build Shopify apps, and move stores from other platforms to Shopify. All
        of this work is done online, on your own Shopify store.
      </p>

      <h2>Quotes and prices</h2>
      <ul>
        <li>
          Every piece of work starts with a written quote, sent over WhatsApp or
          email. It sets out what we will do, the price, the payment schedule and
          the expected timeline.
        </li>
        <li>
          Prices are in Indian Rupees (INR) unless the quote says otherwise, and
          are exclusive of applicable taxes unless the quote says they are
          included.
        </li>
        <li>
          Work begins once you accept the quote and any advance it lists has been
          paid. Anything you ask for beyond the quote is quoted separately before
          we do it.
        </li>
      </ul>

      <h2>Payments</h2>
      <p>
        You can pay by UPI, card, net banking or bank transfer. Online payments
        are processed by our payment partner, Cashfree Payments. We never see or
        store your card, UPI PIN or bank login details. Refunds and cancellations
        are covered in our <Link href="/refund-policy">refund & cancellation policy</Link>.
      </p>

      <h2>What we need from you</h2>
      <p>
        To finish on time we need your content (product details, photos, logo,
        policies), access to your Shopify store as a collaborator or staff
        account, and answers to our questions within a reasonable time. If any of
        these arrive late, the timeline moves by the same amount, and we will
        tell you when that happens.
      </p>

      <h2>Third-party costs</h2>
      <p>
        Your Shopify subscription, paid themes, paid apps, domain names and
        payment gateway fees are paid by you directly to those providers. They
        are not part of our price unless the quote says so, and their own terms
        and refund policies apply to them.
      </p>

      <h2>Ownership</h2>
      <p>
        The store, the domain and the accounts stay in your name. Once you have
        paid in full, the design and custom work we did for you is yours. Paid
        themes and apps remain licensed to you by their makers. We may show your
        live store as an example of our work on this website; tell us if you
        would rather we did not and we will take it down.
      </p>

      <h2>Our apps</h2>
      <p>
        Software we sell under its own name, such as Replyr, is billed and
        governed by the terms published with that product. These terms cover our
        Shopify services and this website.
      </p>

      <h2>Limits of our responsibility</h2>
      <p>
        We do our work with care and fix anything we built that does not work as
        agreed. We are not responsible for outages or changes at Shopify or at
        third-party app, theme and payment providers, or for lost sales or
        profits. Our total liability for any piece of work is limited to the
        amount you paid us for it.
      </p>

      <h2>Using this website</h2>
      <p>
        The text, design and images on this website belong to myPeedika unless
        stated otherwise. Do not copy them for commercial use, or use the website
        in a way that harms it or its visitors. Our blog articles are general
        information, not professional advice for your specific business.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India, and any dispute is subject
        to the jurisdiction of the courts of India. We would always rather sort a
        problem out by talking first, so please contact us before anything else.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top of this
        page shows when they last changed. Work already quoted follows the terms
        in place when you accepted the quote.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: email{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
        <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>. More on our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </PolicyPage>
  );
}
