import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/ui/policy-page";
import { SITE, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping & delivery policy",
  description: "myPeedika sells services delivered online. Nothing is shipped; here is how and when work is delivered.",
  alternates: { canonical: `${SITE.url}/shipping-policy` },
};

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      title="Shipping & delivery policy"
      lead="We sell services, not physical goods. Nothing is shipped, and there are no shipping charges."
      updated="8 October 2026"
    >
      <p>
        myPeedika, a business owned and operated by <strong>{SITE.legalName}</strong>,
        provides Shopify design, development and support services. All of it is
        delivered online.
      </p>

      <h2>How work is delivered</h2>
      <ul>
        <li>
          Store work is done directly on your own Shopify store, using the
          collaborator or staff access you give us.
        </li>
        <li>
          Anything else, such as designs, files, reports and login details, is
          sent to you by email or WhatsApp.
        </li>
        <li>
          We serve clients across India and the Gulf. Because everything is
          delivered online, your location makes no difference to delivery.
        </li>
      </ul>

      <h2>When work is delivered</h2>
      <p>
        Your written quote gives the expected timeline before any payment is
        made. Work counts as delivered when it is live on your store or handed
        over to you, and we confirm each delivery on WhatsApp or email.
      </p>
      <p>
        If something is going to take longer than the quote says, we tell you
        before the date, along with the reason and the new date.
      </p>

      <h2>Problems with a delivery</h2>
      <p>
        If something we delivered is missing or does not match the quote, email{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
        <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a> and we will put it
        right. For cancellations and refunds, see our{" "}
        <Link href="/refund-policy">refund & cancellation policy</Link>.
      </p>
    </PolicyPage>
  );
}
