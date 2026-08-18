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
| Role | Hex | Notes |
|------|-----|-------|
| Forest | `#1B3F24` | Primary brand (locked) |
| Amber | `#C97B14` | CTA / accent fills (token: `--gold`) |
| Amber ink | `#7A4A0A` | Accent text on bone (token: `--gold-ink`) |
| Amber bright | `#F0C56A` | Accent on forest (token: `--gold-bright`) |
| Maroon | `#70201F` | Destructive / rare emphasis |
| Bone | `#F2F5F1` | Page ground (token: `--cream`) |
| Ink | `#121614` | Cool near-black body text |

> Retuned from warm cream `#F9F8F3` + brass `#B8860B` to cool bone + amber while keeping forest. CSS token names (`--cream`, `--gold*`) unchanged for class compatibility.

## Typography
- **Display:** Outfit (self-hosted)
- **UI / Body:** Work Sans (self-hosted)
- **Mantra:** Global harmony through sound and creative collaborations

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
