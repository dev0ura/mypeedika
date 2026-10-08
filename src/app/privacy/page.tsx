import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/ui/policy-page";
import { SITE, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What information myPeedika collects, why, who it is shared with, and how to have it removed.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy policy"
      lead="What we collect, why we collect it, who sees it, and how to ask us to delete it."
      updated="8 October 2026"
    >
      <p>
        This policy covers mypeedika.com and the services provided by myPeedika,
        a business owned and operated by <strong>{SITE.legalName}</strong>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>When you contact us</strong> on WhatsApp, by phone or by email:
          your name, phone number, email address and whatever you tell us about
          your business.
        </li>
        <li>
          <strong>When you book a call</strong>: the name, email address and notes
          you enter in the booking form, which is run by Cal.com.
        </li>
        <li>
          <strong>When you hire us</strong>: access to your Shopify store, and the
          business and billing details we need to quote, invoice and do the work.
        </li>
        <li>
          <strong>When you pay us</strong>: your payment is handled by Cashfree
          Payments. We receive a confirmation with the amount, date and your
          contact details. We never receive your card number, UPI PIN or bank
          login.
        </li>
        <li>
          <strong>When you browse this website</strong>: anonymous usage data such
          as pages visited, device and browser type, and approximate location,
          collected with PostHog analytics using cookies.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to you and give you a quote.</li>
        <li>To do the work you hired us for, and to send invoices and receipts.</li>
        <li>To process payments and refunds.</li>
        <li>To understand which pages of this website are useful and fix the ones that are not.</li>
        <li>To meet our legal, tax and accounting obligations.</li>
      </ul>
      <p>
        We do not sell your information, and we do not send you marketing
        messages unless you ask us to.
      </p>

      <h2>Your customers&apos; data</h2>
      <p>
        While we work on your store we may be able to see its products, orders
        and customer records. We look at them only as far as the work needs, do
        not copy them out of Shopify except where the work requires it (a store
        migration, for example), and remove our access when you ask or when the
        work ends.
      </p>

      <h2>Who we share it with</h2>
      <p>
        Only the services we need to run the business: Cashfree Payments for
        payments, Cal.com for call bookings, WhatsApp and our email provider for
        conversations, PostHog for website analytics, and our website hosting
        provider. Each handles your data under its own privacy policy. We will
        also share information when the law requires us to.
      </p>

      <h2>Cookies</h2>
      <p>
        This website uses cookies for analytics only. You can block or delete
        cookies in your browser settings; the website works the same without
        them.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep conversation and project records for as long as we are working
        together and for a reasonable period afterwards, and invoices and payment
        records for as long as tax law requires.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to show you the information we hold about you, correct it,
        or delete it, unless we are required by law to keep it. Email{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and we will respond
        within 30 days.
      </p>

      <h2>Children</h2>
      <p>
        Our services are for businesses and are not directed at anyone under 18.
        We do not knowingly collect information from children.
      </p>

      <h2>Grievance officer</h2>
      <p>
        If you have a concern about how your information is handled, contact{" "}
        <strong>{SITE.legalName}</strong> at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
        <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this
        page shows when it last changed. See also our{" "}
        <Link href="/terms">terms & conditions</Link>.
      </p>
    </PolicyPage>
  );
}
