import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Handshake, Heart, Leaf, UsersThree } from "@phosphor-icons/react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { pageHead } from "@/lib/site";
import {
  careHomes,
  communityWellbeing,
  festivalsEvents,
  schoolsEducation,
} from "@/lib/responsive-images";
import { Picture } from "@/components/site/Picture";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services & Pricing | Global Echoes Ireland",
      description:
        "Services and indicative pricing for Global Echoes Ireland sessions in healthcare, care homes, schools, festivals and community settings.",
      path: "/services",
    }),
  component: Services,
});

const cards = [
  {
    id: "care-homes",
    number: "01",
    name: "Care Homes & Healthcare" as const,
    ask: "care homes",
    summary: "Compassionate care and support for individuals and families.",
    img: careHomes,
    alt: "Caregiver holding an older person's hands in a care setting",
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
    number: "02",
    name: "Community & Wellbeing" as const,
    ask: "community",
    summary:
      "Bring people together through music, movement and shared experience.",
    img: communityWellbeing,
    alt: "Facilitated drumming circle with older participants",
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
    number: "03",
    name: "Schools, Universities & Education" as const,
    ask: "schools",
    summary:
      "Creative educational programmes to build confidence, focus and teamwork.",
    img: schoolsEducation,
    alt: "School percussion workshop with facilitator and pupils around djembes",
    price: "From €220",
    unit: "per session",
    features: [
      "Curriculum-aligned workshops",
      "Schools, universities and Higher Education Authority (HEA) settings",
      "Cultural learning outcomes",
    ],
  },
  {
    id: "festivals",
    number: "04",
    name: "Festivals & Events" as const,
    ask: "festivals",
    summary:
      "Live and interactive experiences for cultural, public and private events.",
    img: festivalsEvents,
    alt: "Outdoor festival performance with djembe and audience",
    price: "Upon request",
    unit: "",
    features: [
      "Single or group performance formats",
      "Immersive drum circles",
      "Festival programming available",
    ],
  },
] as const;

function Services() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <svg
            className="absolute -top-24 -right-36 h-72 w-72 text-forest-soft lg:-top-10 lg:-right-8"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M40 20c40-30 120-10 140 40 24 60-10 110-60 120-55 12-120-20-130-80C-18 40 0 50 40 20z" />
          </svg>
          <svg
            className="absolute top-[42%] -left-28 h-64 w-64 text-gold-soft"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M30 80c10-50 80-90 130-60 40 24 50 90 20 130-36 48-110 40-140-10-18-30-22-30-10-60z" />
          </svg>
          <svg
            className="absolute -bottom-20 -right-24 h-72 w-72 text-forest-soft"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M40 20c40-30 120-10 140 40 24 60-10 110-60 120-55 12-120-20-130-80C-18 40 0 50 40 20z" />
          </svg>
          <Leaf
            className="absolute top-[28%] right-4 hidden h-16 w-16 text-forest/20 lg:block"
            weight="duotone"
          />
          <Leaf
            className="absolute bottom-24 left-6 hidden h-14 w-14 -scale-x-100 text-forest/20 lg:block"
            weight="duotone"
          />
        </div>
        <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-forest/70 uppercase">
              Our services
              <span aria-hidden="true" className="h-px w-10 bg-gold" />
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[0.95] font-medium tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
              Services and <span className="text-gold">Pricing</span>
            </h1>
            <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
              Flexible programmes designed to support your wellbeing, learning
              and community participation.
            </p>
            <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
              Indicative pricing to help you plan. Final quotes reflect
              setting, group size, travel and outcomes.
            </p>
          </div>
          <Link to="/programme" className="btn-outline w-fit shrink-0">
            View all programmes
            <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-5 md:mt-12">
          {cards.map((t, index) => (
            <article
              key={t.id}
              id={t.id}
              className="grid scroll-mt-28 overflow-hidden rounded-2xl border border-forest/12 bg-white lg:grid-cols-2"
            >
              <div
                className={`min-h-56 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Picture
                  {...t.img}
                  alt={t.alt}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-full min-h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.14em] text-gold">
                  {t.number}
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-ink md:text-3xl">
                  {t.name}
                </h2>
                <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                  {t.summary}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-medium text-forest">
                    {t.price}
                  </span>
                  {t.unit ? (
                    <span className="text-sm text-muted-foreground">
                      {t.unit}
                    </span>
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
                        weight="bold"
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  search={{ interest: t.name }}
                  className="btn-solid mt-6 self-start"
                >
                  Ask about {t.ask}
                  <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-forest/12 bg-white px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:rounded-full lg:py-3">
          <ul className="grid gap-4 sm:grid-cols-3 lg:flex lg:gap-8">
            {[
              {
                icon: UsersThree,
                title: "Inclusive for all ages",
                body: "Children, adults and seniors",
              },
              {
                icon: Heart,
                title: "Community focused",
                body: "Building connections",
              },
              {
                icon: Handshake,
                title: "Trusted and professional",
                body: "Quality care and support",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-soft text-forest">
                  <item.icon className="h-5 w-5" weight="regular" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {item.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="btn-solid shrink-0"
          >
            Book a session
            <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Structured programmes are available in 4, 8 and 12-week formats.
          Prices exclude travel outside Dublin and instrument provision above 20
          participants. Charitable and community rates available on request.
        </p>
        </div>
      </section>

      <CTASection
        headline="Ready to bring rhythm to your setting?"
        body="A short on-site session for care homes, schools, universities and community groups across Ireland."
      />
    </PageShell>
  );
}
