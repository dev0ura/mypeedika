# English-only, built with logical CSS properties

myPeedika serves clients in India and the Gulf. The site ships in English only — there is no Arabic content, no Arabic support capacity, and Gulf SME owners transact in English. A partially-translated site reads as less trustworthy than an honest single-language one.

This matters beyond copy because it constrains the typeface. Figtree contains zero Arabic codepoints, as does General Sans; adding Arabic later means either a second family for Arabic text or replacing the face entirely, plus mirroring every layout.

To keep that door open cheaply, all directional CSS uses logical properties — `margin-inline-start` over `margin-left`, `padding-block` over `padding-top`, `inset-inline-end` over `right`. Adding RTL later then becomes a `dir="rtl"` attribute and a font decision, not a rewrite of every component.
