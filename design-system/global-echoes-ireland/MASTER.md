# Design System Master: Global Echoes Ireland

> Updated to match the brand inspiration board. Brand hexes override any generic healthcare palette suggestions.

## Product
- **Type:** Arts–health nonprofit / therapeutic programme marketing site
- **Audience:** Care-home managers, HSE leads, funders, schools, community organisers
- **Tone:** Warm, professional, culturally confident, healthcare-credible, human

## Design Dials
- **Variance:** 5/10 — Balanced / modern with asymmetric hero
- **Motion:** 3/10 — Subtle (150–300ms, transform/opacity only)
- **Density:** 3/10 — Spacious marketing layout

## Page ↔ Board Map
| Board | Surface |
|-------|---------|
| 01 Hero | Home masthead + editorial mast header |
| Working with | Under-hero partner strip |
| 02 About preview | Home AboutPreview + `/about` |
| 03 Power of Rhythm | Home Benefits + `/programme` |
| 04 Services | Home ServicesOverview + `/services` |
| 05 Team | Home TeamPreview + `/about` |
| 06 Programme options | Home ProgrammeOptions + `/programme` |
| 07 Gallery | Home GalleryPreview + `/gallery` |
| 08 Testimonial | Home Testimonial |
| 09 CTA | Shared `CTASection` |
| 10 Footer | Shared `Footer` (4 columns) |
| 11 Mobile nav | Forest full-screen overlay |
| 12 UI | `btn-solid` / `btn-outline` / `btn-gold` at 6px radius |

## Brand Colors
| Role | Hex |
|------|-----|
| Forest | `#1B3F24` |
| Gold | `#B8860B` |
| Maroon | `#70201F` |
| Cream | `#F9F8F3` |
| Ink | `#1A1A1A` |

## Typography
- **Display:** Instrument Serif
- **UI / Body:** Work Sans
- **Motto:** Rhythm as Medicine (recurring verbal brand beat)

## Effects
- Editorial mast header (transparent over hero → solid cream on scroll); no liquid-glass tray
- Visible `focus-ring-brand`
- Soft press: `active:translate-y-px`
- `prefers-reduced-motion` respected

## Anti-Patterns
- Cyan / Figtree medical defaults
- Section-number eyebrows (`§ 01`)
- Em-dashes
- Grayscale-by-default photography
- Cards without real imagery in services grids
