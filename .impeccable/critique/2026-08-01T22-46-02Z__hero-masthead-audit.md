# Hero audit — Global Echoes Ireland (re-run)

**Target:** `Masthead` in `src/routes/index.tsx` (+ hero CSS in `styles.css`, overlay nav)  
**Mode:** Persuade · **Brief:** `pages/home.md` + board tokens (override ui-ux-pro-max cyan/Lora defaults)  
**Method:** Impeccable `$audit` dimensions + redesign checklist + ui-ux-pro-max UX rules  
**Prior score:** 14/20 (Good) — P1–P2 pass applied  
**Detector:** `detect.mjs` on hero files → `[]` (clean; does not catch contrast/focus/LCP)

---

## Audit Health Score (hero only)

| # | Dimension | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | **3** | Type AA on deepened scrim; primary `btn-gold` focus ring is forest (~1.2:1 on forest-deep) |
| 2 | Performance | **4** | WebP + JPEG `srcset` 800/1400; static noise tile; Framer only for H1 words |
| 3 | Responsive | **4** | `min-h-dvh` + H1 `clamp(2.75rem, 8vw, 6rem)`; CTAs `min-h-11` |
| 4 | Theming | **4** | Scrim via `--forest-deep` `color-mix`; arc still hard-coded gold rgba |
| 5 | Implementation Integrity | **4** | Matches `pages/home.md`; brand lockup + motion dial 3/10; board beats cyan/Lora |
| **Total** | | **19/20** | **Excellent** |

---

## Implementation integrity verdict

**Pass.** Session drumming photo, forest scrim, “Global Echoes Ireland” lockup, “Rhythm as Medicine,” gold italic *Rhythm*, Book a Taster → contact. Product-specific, not a generic SaaS block. Correctly ignores ui-ux-pro-max healthcare cyan/Lora defaults because the brand board wins.

---

## What’s working

1. **Composition** — Full-bleed photo, bottom-anchored type, one primary + one secondary CTA; no card collage or badge clutter.
2. **Hierarchy** — Brand → motto → H1 → ≤~42ch body → CTAs; strategy strip post-hero per brief.
3. **Motion** — Single authored entrance (H1 word pull-up); `useReducedMotion` static fallback; no image scale / motto-body Framer stack.
4. **LCP delivery** — `<picture>` WebP (~30–60KB) + JPEG srcset; `fetchPriority="high"`; width/height reserved.
5. **Contrast (on deep / left plate)** — cream / `#14301c` ~13.4:1; `gold-bright` ~10.3:1; body cream/85 ~10:1; left ~82% plate keeps cream ~9:1 even on light wood crops.

---

## Detailed findings

### [P1] Primary CTA focus ring invisible on dark hero
- **Location:** `@utility btn-gold` — `outline: 2px solid var(--forest)` (`styles.css`)
- **Category:** Accessibility
- **Impact:** Keyboard users tabbing to “Book a Taster Session” get a forest outline against forest-deep / dark photo (~**1.2:1**). Secondary link correctly uses `focus-ring-brand-on-dark` (cream).
- **WCAG:** 2.4.7 Focus Visible; Focus Appearance contrast (related)
- **Fix direction:** On dark surfaces use cream/`focus-ring-brand-on-dark`, or a gold-bright ring; keep forest ring for light backgrounds only.
- **Suggested command:** `$impeccable harden` (hero CTA) or `$impeccable polish`

### [P2] Overlay menu control under 44×44
- **Location:** `Header.tsx` hamburger `h-10 w-10` (40px) over hero
- **Category:** Responsive / Touch
- **Impact:** Below common 44×44 guidance; still tappable but tight for care-setting tablets.
- **Fix direction:** `min-h-11 min-w-11` (44px) while keeping visual chip size if needed via padding.
- **Suggested command:** `$impeccable adapt`

### [P2] Secondary CTA still underline-only
- **Location:** Masthead secondary `Link` to `/programme`
- **Category:** Responsive / Touch
- **Impact:** `min-h-11` and hover/focus exist; discoverability weaker than primary (brief allows text link).
- **Fix direction:** Keep pattern; optional slightly stronger resting underline opacity.
- **Suggested command:** `$impeccable polish` (optional)

### [P3] Motto at 10px
- **Location:** Masthead motto `text-[10px]` / `sm:text-[11px]`
- **Category:** Accessibility / Typography
- **Impact:** Below ui-ux-pro-max “16px+ body” / avoid &lt;12px guidance; uppercase tracking helps but small for older eyes.
- **Fix direction:** `text-xs` (12px) with tracking retained.
- **Suggested command:** `$impeccable typeset`

### [P3] Gold arc hard-coded rgba
- **Location:** `.hero-arc` `border: 1px solid rgba(245, 217, 138, 0.3)`
- **Category:** Theming
- **Impact:** Matches `--gold-bright` visually; not restylable from tokens.
- **Fix direction:** `color-mix(in srgb, var(--gold-bright) 30%, transparent)`.
- **Suggested command:** `$impeccable polish`

### [P3] No AVIF; Framer still on H1 path
- **Location:** Masthead `<picture>`; `words-pull-up.tsx`
- **Category:** Performance
- **Impact:** WebP covers modern browsers; AVIF would shave more. Framer is justified for one entrance but still a dependency cost.
- **Fix direction:** Optional AVIF source; or CSS `@starting-style` / View Transitions later if cutting Framer.
- **Suggested command:** `$impeccable optimize` (optional)

### [P3] Detector false quiet
- Static detector found **0** issues. That does **not** clear focus-ring contrast or touch-target size.

---

## Redesign checklist hits (hero-only)

| Check | Status |
|-------|--------|
| Full-bleed real imagery | Pass |
| One composition / no cards in hero | Pass |
| Hero budget (brand, H1, line, CTAs, image) | Pass — brand lockup present |
| No floating badges on media | Pass |
| Expressive non-default type | Pass (Instrument Serif) |
| Flat single-color bg | Pass (photo + scrim) |
| `100vh` jump | Pass (`min-h-dvh`) |
| Motion noise | Pass — one entrance vs dial 3/10 |
| AI purple/cyan defaults | Pass (board palette) |

---

## ui-ux-pro-max notes (applied carefully)

- Database pushed **cyan + Lora** healthcare defaults → **ignore**; MASTER/board override.
- Applicable: contrast ≥4.5, reduced-motion, alt text, touch ≥44px, focus visibility, avoid motion stacks.
- Landing “social proof in hero” intentionally out — trust strip is post-hero per brief.

---

## Closed since last audit (14/20)

| Was | Status |
|-----|--------|
| [P1] Motion stack | Closed — H1 pull-up only |
| [P1] Brand name weak | Closed — serif lockup |
| [P1] Display &gt; 6rem | Closed — max 6rem |
| [P2] feTurbulence grain | Closed — static PNG |
| [P2] No WebP/srcset | Closed |
| [P2] Thin mid/lower scrim | Closed — deepened + left plate |
| [P3] Scrim RGBA drift | Closed — `--forest-deep` |

---

## Executive summary

- **Score: 19/20 (Excellent)** — was **14/20 (Good)**
- **Counts:** P0: 0 · P1: 1 · P2: 2 · P3: 3
- **Top issue:** Gold CTA focus ring uses forest outline on dark hero (~1.2:1)
- **Biggest opportunity:** One-line focus-ring fix on `btn-gold` when used on dark surfaces

### Suggested next commands

1. **`$impeccable harden` (hero CTA)** — cream/gold-bright focus ring on dark  
2. **`$impeccable adapt` (header chip)** — 44×44 menu control  
3. Optional **`$impeccable typeset`** — motto ≥12px  

Or say **“fix P1”** for the focus ring only.
