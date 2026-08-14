# Blog URLs survive the rebuild

Everything else on the site is being replaced from scratch, but the five existing blog posts are preserved: their slugs, their paths, their presence in the sitemap, and their prose. Their design is fully replaced — the owner's instruction was to "keep these, re-skin completely for the new UI", so the writing stays and only the presentation changes.

The posts were published between January and March 2025 and target India-specific search terms. We could not measure what traffic they earn: the connected PostHog credentials reach only the Blend-ed organisation, so myPeedika's analytics are unreadable from this project. Deleting a URL that turns out to rank is the one move in this redesign that cannot be undone in an afternoon — every other decision here can be redone next week. Preserving five strings costs nothing, so we preserve them under uncertainty.

`/services` and `/pricing` are removed and redirect permanently to `/#services`; `/portfolio` redirects to `/works`, which is a real page rather than an anchor. Those pages had no independent content worth keeping once the home page carries the same material. Next.js `permanent: true` emits **308**, not 301 — search engines treat the two equivalently for ranking transfer, so this is the correct mechanism rather than a compromise.
