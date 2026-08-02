import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Check,
  Drum,
  GraduationCap,
  Users,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import heroImg from "@/assets/hero-care-drumming.jpg";
import circleImg from "@/assets/community-circle.jpg";
import handsImg from "@/assets/hands-drum.jpg";
import rehabImg from "@/assets/rehab-session.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "Services and indicative pricing for African Rhythms sessions in healthcare, care homes, schools, festivals and community settings.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const cards = [
  {
    name: "Care Homes & Healthcare",
    color: "text-forest",
    icon: Building2,
    img: heroImg,
    alt: "Care home drumming session",
    price: "From €240",
    unit: "per session",
    features: [
      "Adapted for mobility & cognition",
      "Family-friendly options",
      "Weekly / block bookings",
      "All instruments provided",
    ],
  },
  {
    name: "Community & Wellbeing",
    color: "text-gold-ink",
    icon: Users,
    img: circleImg,
    alt: "Community drumming circle",
    price: "From €200",
    unit: "per session",
    features: [
      "Intercultural groups",
      "Diaspora and family projects",
      "Wellbeing days",
      "Sliding scale for grassroots",
    ],
  },
  {
    name: "Schools & Education",
    color: "text-maroon",
    icon: GraduationCap,
    img: handsImg,
    alt: "Hands on a djembe drum",
    price: "From €220",
    unit: "per session",
    features: [
      "Curriculum-aligned workshops",
      "Class or year-group formats",
      "Cultural learning outcomes",
      "Optional performance day",
    ],
  },
  {
    name: "Festivals & Events",
    color: "text-forest",
    icon: Drum,
    img: rehabImg,
    alt: "Group rhythmic session",
    price: "On request",
    unit: "1 or 2 artist formats",
    features: [
      "1 and 2 artist performance formats",
      "Immersive drum circles",
      "Community stage sets",
      "Festival programming available",
    ],
  },
];

function Services() {
  return (
    <PageShell>
      <PageHero
        title="Programmes tailored to your setting"
        intro="Indicative pricing to help you plan. Every engagement is quoted individually based on setting, group size, travel and outcomes."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((t) => (
            <article key={t.name} className="flex h-full flex-col">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={t.img}
                  alt={t.alt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-full bg-cream text-forest shadow-sm">
                  <t.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>
              <h3 className={`mt-4 font-serif text-xl ${t.color}`}>{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-2xl text-forest">{t.price}</span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
                  {t.unit}
                </span>
              </div>
              <ul className="mt-4 flex-1 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ interest: "General enquiry" }}
                className="btn-outline mt-6 w-full"
              >
                Enquire
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground/80">
          Structured health programmes available in 4, 8 and 12-week formats.
          Prices exclude travel outside Dublin and instrument provision above 20
          participants. Charitable and community rates available on request.
          Music school and cultural fashion strands are in development.
        </p>
      </section>

      <CTASection />
    </PageShell>
  );
}
