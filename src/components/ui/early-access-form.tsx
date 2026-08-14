"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";

/* No API, no analytics, no persistence — per the owner's instruction.
   Because nothing is stored, this must not claim a signup was recorded.
   Submitting opens a pre-filled mail draft instead, which genuinely reaches
   us with zero backend. Swap in a real endpoint whenever one exists. */
export default function EarlyAccessForm({ appName }: { appName: string }) {
  const [email, setEmail] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent(`${appName} early access`);
    const body = encodeURIComponent(
      `Please add me to the ${appName} early access list.\n\nEmail: ${email}\n`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="ea-row">
        <label htmlFor="ea-email" className="sr-only">
          Your email address
        </label>
        <input
          id="ea-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourstore.com"
          className="ea-input"
        />
        <button type="submit" className="btn btn--ink">
          Get early access
        </button>
      </form>

      {/* Nothing is recorded, and the draft may never be sent — so this
          states only what actually happened, never that a signup exists. */}
      {opened && (
        <p role="status" className="ea-note">
          We&apos;ve opened an email draft in your mail app. Nothing is saved
          until you send it.
        </p>
      )}
    </div>
  );
}
