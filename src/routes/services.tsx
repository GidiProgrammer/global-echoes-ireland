import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
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
    id: "care-homes",
    name: "Care Homes & Healthcare" as const,
    color: "text-forest",
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
    id: "community",
    name: "Community & Wellbeing" as const,
    color: "text-gold-ink",
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
    id: "schools",
    name: "Schools, Universities & Education" as const,
    color: "text-maroon",
    img: handsImg,
    alt: "Hands on a djembe drum",
    price: "From €220",
    unit: "per session",
    features: [
      "Curriculum-aligned workshops",
      "Schools, Universities institutions and HEA settings",
      "Cultural learning outcomes",
      "Optional performance day activities",
    ],
  },
  {
    id: "festivals",
    name: "Festivals & Events" as const,
    color: "text-forest",
    img: rehabImg,
    alt: "Group rhythmic session",
    price: "Upon request",
    unit: "1 or 2 artist formats",
    features: [
      "Single or group artist performance formats",
      "Immersive drum circles",
      "Community stage sets and performance delivery",
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
            <article
              key={t.id}
              id={t.id}
              className="flex h-full scroll-mt-28 flex-col"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={t.img}
                  alt={t.alt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className={`mt-4 font-serif text-xl ${t.color}`}>{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-2xl text-forest">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.unit}</span>
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
                search={{ interest: t.name }}
                className="btn-outline mt-6 w-full"
              >
                Enquire about {t.name}
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
