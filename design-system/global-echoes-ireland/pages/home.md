# Page Override: Home Hero

Overrides `MASTER.md` for the homepage first viewport only.

## Layout
- Transparent editorial mast over a **full-bleed** session photograph (solid cream after scroll)
- Bottom-anchored editorial stack: **brand name** → motto → capped display H1 → supporting copy + CTAs
- Quiet gold arc outline on the media plane (brand echo, not a cropped circle panel)
- Neutral dark vignette (not forest gel) + static noise grain so cream/gold type clears AA while the photo stays true
- Hero LCP: AVIF + WebP + JPEG `srcset` (800w / 1400w)
- Trust / strategy-alignment strip sits **below** the first viewport (not inside the hero)

## Copy Hierarchy
1. Brand in nav (logo) **and** hero lockup: **Global Echoes Ireland** (serif, cream, ~1.85–2.85rem)
2. H1: Global Harmony / through Sound / and creative collaborations (cream / amber emphasis)
3. Supporting sentence quieter / shorter measure (~36ch)
4. Primary CTA → `/contact` (Book a Taster Session), secondary text link → `/programme`

## Spacing (Prisma-inspired floor)
- Heavier bottom padding (`pb-16` → `lg:pb-24`)
- More space motto → H1 row; wide `lg:gap-x-16` / `xl:gap-x-24` between display and copy
- Nav remains editorial mast (unchanged)

## Interaction
- Primary gold CTA + secondary text link; `min-h-11`, focus-visible rings
- Single authored motion: CSS word pull-up on H1 only; respect `prefers-reduced-motion`

## Motion
- Motion dial 3/10: one CSS entrance only (~320ms). No Framer; no hero image scale.
