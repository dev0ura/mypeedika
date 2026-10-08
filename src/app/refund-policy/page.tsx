import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/ui/policy-page";
import { SITE, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund & cancellation policy",
  description: "When myPeedika refunds a payment, how to cancel work, and how long a refund takes.",
  alternates: { canonical: `${SITE.url}/refund-policy` },
};

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund & cancellation policy"
      lead="When you can cancel, what you get back, and how long it takes to reach you."
      updated="8 October 2026"
    >
      <p>
        This policy applies to payments made to myPeedika, a business owned and
        operated by <strong>{SITE.legalName}</strong>, for Shopify services. Every
        piece of work is agreed in a written quote before you pay anything, so
        you always know what a payment covers.
      </p>

      <h2>Cancelling before work starts</h2>
      <p>
        If you cancel after paying but before we have started work, we refund the
        full amount you paid.
      </p>

      <h2>Cancelling after work has started</h2>
      <p>
        You can cancel at any time. We refund what you paid minus the value of
        the work already completed, worked out from the stages in your quote. We
        will show you what has been done before we settle the amount, and hand
        over the completed work to you.
      </p>

      <h2>After the work is delivered</h2>
      <p>
        Work that has been delivered and accepted is not refundable. If something
        we built does not work as agreed in the quote, tell us and we will fix it
        at no extra cost.
      </p>

      <h2>Monthly support</h2>
      <p>
        Ongoing support can be cancelled at any time. It stops at the end of the
        period you have already paid for, and you will not be charged again. Part
        months are not refunded.
      </p>

      <h2>If we cancel</h2>
      <p>
        If we are unable to deliver the work we agreed to, we refund every rupee
        paid for the part we have not delivered.
      </p>

      <h2>What we cannot refund</h2>
      <p>
        Payments you make directly to other providers, such as your Shopify
        subscription, paid themes, paid apps and domain names, are refunded only
        by those providers under their own policies. Our apps, such as Replyr,
        follow the billing and refund terms published with that product.
      </p>

      <h2>Duplicate or failed payments</h2>
      <p>
        If you were charged twice, or money left your account for a payment that
        failed, we refund it in full once the payment is confirmed on our side.
      </p>

      <h2>How to ask for a refund</h2>
      <p>
        Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or message us
        on WhatsApp at <a href={CONTACT.whatsapp}>{CONTACT.phone}</a> with your
        name, the date and amount of the payment, and the transaction reference.
        We reply within 2 working days to confirm the refund amount.
      </p>

      <h2>How long a refund takes</h2>
      <p>
        Approved refunds are processed within <strong>5 to 7 working days</strong>{" "}
        to the original payment method: the same card, UPI account or bank
        account you paid from. Your bank may take a few more days to show it.
      </p>

      <p>
        See also our <Link href="/terms">terms & conditions</Link> and{" "}
        <Link href="/shipping-policy">shipping & delivery policy</Link>.
      </p>
    </PolicyPage>
  );
}
