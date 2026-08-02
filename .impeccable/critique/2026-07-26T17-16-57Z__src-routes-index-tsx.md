---
target: the hero (Masthead) of the homepage
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
timestamp: 2026-07-26T17-16-57Z
slug: src-routes-index-tsx
---
Method: dual-agent (A: e1b4aa91-8be0-4943-a2ec-724d2cfd1b91 · B: a123bb3b-eb1b-4eb2-8d7e-74c634b921bf)

Target: the hero (`Masthead`) of the homepage, `src/routes/index.tsx`. Surface mode: Persuade.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Hover and active states are solid, but the keyboard focus ring renders at 1.50:1 against the cream background — measured, not inferred — so the single most important state indicator is effectively invisible. |
| 2 | Match System / Real World | 3 | Subcopy names therapeutic African drumming; the headline and "Learn More" still speak generic wellness rather than commissioner language. |
| 3 | User Control and Freedom | 2 | Skip link and menu toggle exist, but the mobile menu neither traps focus nor closes on Escape, so keyboard users can tab into content hidden under the overlay. |
| 4 | Consistency and Standards | 2 | Nav "Book a Taster" (gold) versus hero "Book a Taster Session" (forest), both to `/contact`; `rounded-2xl` on the mobile image silently resolves to 0px. |
| 5 | Error Prevention | 2 | Two co-primary booking CTAs plus a vague "Learn More" invite the wrong click before the visitor knows whether the programme fits them. |
| 6 | Recognition Rather Than Recall | 3 | Irish institutions are named in view; "Learn More" does not disclose that it goes to `/programme`. |
| 7 | Flexibility and Efficiency | n/a | Persuade landing hero — no power-user accelerators expected. |
| 8 | Aesthetic and Minimalist Design | 2 | The left column is disciplined, but the first viewport still carries 8 nav links, a gold nav CTA, two hero CTAs, and a partner row. |
| 9 | Error Recovery | 2 | No fallback if the 412KB hero JPEG fails; recovery is "leave the page". |
| 10 | Help and Documentation | n/a | Persuade hero — documentation is not this surface's job. |
| **Total** | | **18/32** | **Acceptable (56%)** |

## Design Specificity Verdict

**Partially authored — branded vessel, interchangeable pitch.** The materials are specific to Global Echoes Ireland: the djembe photograph, the gold-plus-forest dual stroke, the cream textile watermark, the three-colour Instrument Serif headline, and the named Irish institutions. The *composition* is not. An unrelated Irish wellness consultancy could swap the photo and the partner names and keep the split layout, the dual-CTA pattern, and the abstract headline unchanged.

Earning character: the arc frame concept (`index.tsx:125-144`), the triangle textile watermark on the copy side only (`index.tsx:66-69`, `styles.css:264-269`), locked three-line headline breaks in charcoal/gold/maroon (`index.tsx:73-80`), and the "Working with" row naming HSE, Sláintecare, Pobal, Arts Council (`PartnerLogos.tsx:3-18`).

Category-interchangeable: the headline never names a care home, HSE, SEN, or any clinical setting (`index.tsx:77-79`); "Learn More" carries no destination meaning (`index.tsx:94-99`); the partner row is grey text, not programme-specific proof.

**Deterministic scan:** the bundled detector reported **zero findings** on `src/routes/index.tsx` and `src/components/site` (exit 0). This was validated as a genuine clean result, not a silent no-op: a synthetic bad file produced 2 findings and a whole-`src` scan produced 2 findings elsewhere. Those two — `overused-font` on `__root.tsx:85` and `codex-grid-background` on `styles.css:228` — are both false positives here: Instrument Serif is not in the rule's own overused list, and the flagged `pattern-dots` utility is unused by the hero.

**Browser evidence:** no browser automation is installed in this project, but Assessment B drove the machine's cached Chromium headless shell over the DevTools Protocol and captured real renders at 1440×900, 390×844, and 320px, plus pixel measurements. No user-visible overlay was injected, so none is claimed.

## Overall Impression

The hero is warmer, calmer, and more legibly typeset than it was, and the deterministic scan is clean. But the browser pass found the thing that has been making this hero feel wrong: **the signature circular frame does not render as a circle.** The photo's left boundary is a perfectly straight vertical line at x=544 from top to bottom. The circle is 1305px across and positioned so its curvature falls outside the clipping container everywhere except roughly 30px bands at the top-right and bottom-right corners — gold-ish pixels are 0.76% of the right-hand region. What renders is a full-bleed rectangular photo with a decorative sliver in one corner. The single biggest opportunity is to make the arc actually visible as an arc.

## What's Working

1. **Headline craft.** Locked line breaks via `&nbsp;`, three intentional colour beats, and a controlled clamp (`index.tsx:73-80`) give the left column editorial authority. Verified live: each of the three lines occupies exactly one line at 1440, 390, and 320.
2. **Structural hygiene.** Exactly one `h1`, no skipped heading levels through the whole page, every interactive element a real `<a>` or `<button>`, a working skip link, and zero horizontal overflow at all three widths tested (`scrollWidth === clientWidth` exactly).
3. **Motion restraint.** One soft image entrance, guarded both by the `motion-safe:` variant and by the `prefers-reduced-motion` block in `styles.css`.

## Priority Issues

**[P0] The circular photo frame renders as a rectangle**
- **What:** The `w-[min(66%,56rem)]` container clips a 1305px circle offset to `right: -18%` and `h-[145%]`, so the curve exits the container off-screen. Left edge of the photo measures straight at x=544 at every sampled y. `index.tsx:126-131`.
- **Why it matters:** The arc is the one composition element that makes this hero brand-owned rather than a stock split hero. Losing it is why the live page has not matched the prototype.
- **Fix:** Shrink the circle and pull it back into view — reduce `h-[145%]` toward ~110–120%, reduce the negative right offset, and widen the clipping container so a genuine arc crosses the hero's vertical middle. Verify by sampling the left boundary at several heights, not by eye.
- **Suggested command:** `$impeccable layout`

**[P0] Keyboard focus rings are invisible**
- **What:** `focus-visible:outline-[#1b3f24]` does not take effect on the dev render; outline colour falls back to each element's text colour. The ring on the primary CTA measures **#c7cfc9 = 1.50:1** against cream, against a 3:1 minimum. Had forest applied it would be 11.08:1. `index.tsx:90,96`.
- **Why it matters:** Keyboard and low-vision users cannot see where they are. This is the highest-severity accessibility defect on the page.
- **Fix:** Set the ring colour in a way that cannot fall through — `outline-color` via arbitrary property or a `focusRing` token used everywhere — and confirm the computed `outline-color` in the browser, not just that the class compiles.
- **Suggested command:** `$impeccable audit`

**[P1] White-on-gold nav CTA fails contrast**
- **What:** White on `#b8860b` computes to **3.25:1** at 11px, and **3.95:1** on hover — both below the 4.5:1 body-text threshold. `Header.tsx:50-55`. The gold headline line is 3.06:1, passing only as large text (`index.tsx:78`). The logo's `#c4a35a` "IRELAND" at 9px is **2.26:1**. `Logo.tsx:29`.
- **Why it matters:** The chrome's primary conversion control is unreadable for low-vision visitors.
- **Fix:** Treat gold as a fill behind dark text, not as a background for white text — forest or charcoal on gold — or darken the gold used for text.
- **Suggested command:** `$impeccable audit`

**[P1] Two co-primary booking CTAs with different labels**
- **What:** Gold "Book a Taster" in the nav (`Header.tsx:50-55`) and forest "Book a Taster Session" in the hero (`index.tsx:88-93`), both pointing at `/contact`.
- **Why it matters:** Attention splits at the conversion moment, and the higher-chroma control sits outside the composition designed to own conversion.
- **Fix:** One label and one weight sitewide. Let the hero own the solid forest button; make the nav control a ghost or text link, or reveal it only after scroll.
- **Suggested command:** `$impeccable clarify`

**[P1] Hero copy does not address institutional buyers**
- **What:** The headline and lede never say HSE, care homes, schools, or clinical coordination (`index.tsx:77-85`). That language exists in the `<head>` meta (`index.tsx:23-24`) and in the Feature section below the fold (`index.tsx:184-191`).
- **Why it matters:** A commissioner evaluating "can I commission this?" receives atmosphere instead of fit, and the ask arrives before the reassurance.
- **Fix:** Rewrite the supporting sentence to name settings and therapeutic framing without adding a second hero block.
- **Suggested command:** `$impeccable clarify`

## Cognitive Load

Six of eight checks fail — **high load (4+ is critical)**.

- **Fail — single focus:** gold nav CTA and forest hero CTA compete as co-primaries.
- **Fail — chunking:** the primary nav is 8 links (`Header.tsx:6-15`).
- **Pass — visual grouping:** copy, CTAs, and partners chunk cleanly on the left.
- **Fail — visual hierarchy:** gold does three jobs at once (headline line 2, nav CTA fill, circle stroke).
- **Fail — one decision at a time:** book, learn, or browse eight destinations, simultaneously.
- **Fail — ≤4 options per decision:** 8 nav links plus a booking CTA is 9 chrome options before the two hero CTAs.
- **Pass — working memory:** booking requires no recall from a prior screen.
- **Fail — progressive disclosure:** the full IA is dumped into the first viewport from `xl` up.

## Emotional Journey

The first viewport opens warm and confident. The emotional peak is the photograph plus the forest CTA — human, cultural, actionable. The valley arrives immediately after that impulse: an institutional buyer still has no clinical framing, credentials, or setting names inside the hero, so the ask precedes the reassurance. Credibility then drips in as grey "Working with" text and only lands properly after scrolling to the Feature, Impact, and PullQuote sections. Peak-end is strong for a visitor who scrolls, thin for one who must decide in the hero.

## Persona Red Flags

**Jordan (confused first-timer), booking a taster:** reads "Healing Through Rhythm, Culture & Connection" (`index.tsx:77-79`) and cannot tell whether this is for a relative in care, a school, or a public workshop. Faces "Book a Taster Session" versus "Learn More" with no cue what a taster involves or who attends. The chrome adds Programme, Services, Contact, and Book a Taster — four paths that look like the same job. Grey "HSE" text helps only if he already knows the acronym.

**Sam (screen reader and keyboard only):** the skip link works. Below `xl`, opening the menu leaves focus on the button with no focus trap and no Escape handler, so main content stays reachable under a full-viewport overlay (`Header.tsx:56-91`). The focus ring is measurably invisible at 1.50:1. The `h1` accessible name runs together as "Healing ThroughRhythm, Culture &Connection" because the three block spans carry no separating whitespace (`index.tsx:77-79`), and the logo announces as "Global EchoesIreland" (`Logo.tsx:25-34`). "Working with" is not tied to the partner list via `aria-labelledby`.

**Casey (distracted, one-handed, mobile):** must clear the logo and `pt-24`/`pt-28` hero padding before reaching the forest CTA (`index.tsx:72`). The CTA itself is thumb-legal at 208×44, but "Learn More" sits beside it in a wrap and invites mis-taps. Desktop nav links measure only 35.5px tall (`Header.tsx:37-45`), below the 44px minimum, though they are pointer-only targets. At 320px the partner row wraps and strands a leading `|` divider before "Arts Council" because each divider lives in its own `<li>` ahead of its label (`PartnerLogos.tsx:9-11`). The mobile image frame renders square-cornered despite `rounded-2xl`, because `--radius-2xl` is globally 0px (`styles.css:12`).

**Morgan (HSE or care-home commissioner):** needs safeguarding, clinical governance, and setting fit before emailing. The hero offers atmosphere plus grey partner names, not "HSE settings, care homes, senior-nurse coordinated" — language that exists in the meta description and the Feature section but not in the hero. Will not read grey "HSE" text as evidence of a contract or endorsement. Dual booking CTAs read marketing-led rather than commissioning-led.

## Minor Observations

- `Header` accepts an `overlay` prop and ignores it as `_overlay` (`Header.tsx:20`) — dead API from `PageShell`.
- Three divergent palettes coexist: hero hex literals (`#1b3f24`, `#f9f8f3`), the `styles.css` tokens (`--forest` ≈ `#064e3b`, `--cream` ≈ `#f5f0e0`), and the logo's own `#1a3d2e`/`#c4a35a` (`styles.css:69-75`, `Logo.tsx:10-29`).
- The hero JPEG is 411,643 bytes at 1772×1852 and is served to a 358px-wide slot on mobile with no `srcset`, no `sizes`, and no `loading` attribute (`index.tsx:112-118`).
- `html { scroll-behavior: smooth }` (`styles.css:140`) has no `prefers-reduced-motion` override — the most consequential motion gap, since it applies document-wide.
- Declared `width`/`height` on both hero images disagree with the file's true aspect ratio; reservation actually comes from the CSS wrapper.
- `rounded-2xl` and `rounded-sm` are silently inert project-wide because the radius tokens are 0px; `rounded-[6px]` and `rounded-full` still work.
- The rest of the homepage shifts to grayscale editorial, which is coherent as a magazine but is tonal whiplash directly after the warm hero.

## Questions to Consider

1. If the only line Morgan reads is the sentence under the headline, does it earn a taster booking, or only a mood?
2. Why does the highest-chroma control in the first viewport sit outside the composition designed to own conversion?
3. What would the right half look like if the circle were a session cue — hands, a care setting, shared drumming — so it answered "who is this for?" without more copy?
4. If the nav were cut to four items, which two links are you willing to stop advertising in the first 600px, and what does that say about the real product hierarchy?
