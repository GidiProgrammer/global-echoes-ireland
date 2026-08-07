import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "@phosphor-icons/react";
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
          "Services and indicative pricing for Global Echoes Ireland sessions in healthcare, care homes, schools, festivals and community settings.",
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
    ask: "care homes",
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
    span: "md:col-span-7",
    aspect: "aspect-[16/10] md:aspect-[5/3]",
  },
  {
    id: "community",
    name: "Community & Wellbeing" as const,
    ask: "community",
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
    span: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-auto md:min-h-full",
  },
  {
    id: "schools",
    name: "Schools, Universities & Education" as const,
    ask: "schools",
    img: handsImg,
    alt: "Hands on a djembe drum",
    price: "From €220",
    unit: "per session",
    features: [
      "Curriculum-aligned workshops",
      "Schools, universities and HEA settings",
      "Cultural learning outcomes",
    ],
    span: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-auto md:min-h-full",
  },
  {
    id: "festivals",
    name: "Festivals & Events" as const,
    ask: "festivals",
    img: rehabImg,
    alt: "Group rhythmic session",
    price: "Upon request",
    unit: "",
    features: [
      "Single or group performance formats",
      "Immersive drum circles",
      "Festival programming available",
    ],
    span: "md:col-span-7",
    aspect: "aspect-[16/10] md:aspect-[5/3]",
  },
] as const;

function Services() {
  return (
    <PageShell>
      <PageHero
        title="Programmes for your setting"
        intro="Indicative pricing to help you plan. Final quotes reflect setting, group size, travel and outcomes."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          {cards.map((t) => (
            <article
              key={t.id}
              id={t.id}
              className={`flex scroll-mt-28 flex-col ${t.span}`}
            >
              <div className="overflow-hidden rounded-xl bg-forest/5">
                <img
                  src={t.img}
                  alt={t.alt}
                  className={`${t.aspect} w-full object-cover`}
                  loading="lazy"
                />
              </div>
              <h2 className="mt-5 font-display text-2xl font-medium text-ink">
                {t.name}
              </h2>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-2xl font-medium text-forest">
                  {t.price}
                </span>
                {t.unit ? (
                  <span className="text-sm text-muted-foreground">{t.unit}</span>
                ) : null}
              </div>
              <ul className="mt-4 flex-1 space-y-2">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/85"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                      weight="regular"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ interest: t.name }}
                className="btn-outline mt-6 self-start"
              >
                Ask about {t.ask}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Structured programmes are available in 4, 8 and 12-week formats.
          Prices exclude travel outside Dublin and instrument provision above 20
          participants. Charitable and community rates available on request.
        </p>
      </section>

      <CTASection />
    </PageShell>
  );
}
