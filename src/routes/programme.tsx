import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Clock,
  Heart,
  Leaf,
  UsersThree,
} from "@phosphor-icons/react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { pageHead } from "@/lib/site";
import {
  communityWellbeing,
  cultureWellbeingDrumming,
  heroCareDrumming,
  stayHealthy,
} from "@/lib/responsive-images";
import { Picture } from "@/components/site/Picture";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PROGRAMME_FAQS = [
  {
    q: "What happens during a taster session?",
    a: "A taster session is a 45-60 minute introductory workshop. We bring all instruments (djembe drums and percussion) to your setting. We run a light, participatory rhythm circle and share practical wellness insights, ensuring everyone can participate regardless of previous musical experience.",
  },
  {
    q: "Do we need to provide instruments?",
    a: "No, we provide all instruments required for the session, including high-quality African hand drums (djembes) and supplementary percussion instruments.",
  },
  {
    q: "Are the sessions suitable for people with cognitive or mobility challenges?",
    a: "Yes, our programmes are explicitly co-designed with care teams and activity coordinators to be inclusive. We adapt tempos, physical movements, and sensory volumes to accommodate mobility limits, cognitive needs, and varying energy levels.",
  },
  {
    q: "How do we book or get a final pricing quote?",
    a: "You can start by sending an enquiry via our contact form or calling us. Since travel, group sizes, and setting specific details vary, we provide customized final quotes after a brief initial consultation.",
  },
] as const;

export const Route = createFileRoute("/programme")({
  head: () =>
    pageHead({
      title: "Rhythmic Sound for Health & Wellbeing | Global Echoes Ireland",
      description:
        "Stay Healthy with the Beat: Rhythmic Sound for Health & Wellbeing. Traditional African drumming with wellbeing tips, led by Dr. John Nutekpor.",
      path: "/programme",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: PROGRAMME_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    }),
  component: Programme,
});

const outcomes = [
  {
    title: "Physical wellbeing",
    body: "Drumming and movement that can support energy, posture and coordination.",
  },
  {
    title: "Mental wellbeing",
    body: "Sessions paced to support focus and a steadier mood.",
  },
  {
    title: "Emotional wellbeing",
    body: "Room to take part, express, and build confidence in a group.",
  },
  {
    title: "Social wellbeing",
    body: "Playing together so people can connect without needing a shared language.",
  },
] as const;

const featured = {
  weeks: "8-Week",
  tag: "Standard",
  interest: "8-week programme" as const,
  body: "Our standard programme: deep enough to see meaningful change.",
  points: [
    "Weekly guided sessions",
    "Progressive skills building",
    "Group connection and support",
  ],
  image: heroCareDrumming,
  alt: "Facilitator and an older participant smiling during a drumming session",
};

const others = [
  {
    weeks: "4-Week",
    tag: "Introductory",
    interest: "4-week programme" as const,
    body: "A short structured engagement to introduce rhythmic wellbeing.",
    points: [
      "Ideal for new participants",
      "Foundational skills",
      "A supportive group environment",
    ],
    image: communityWellbeing,
    alt: "Facilitated drumming circle with older participants",
  },
  {
    weeks: "12-Week",
    tag: "Advanced",
    interest: "12-week programme" as const,
    body: "Full therapeutic engagement with baseline and outcome reporting.",
    points: [
      "Deeper learning and practice",
      "Personal and group development",
      "Progress tracking and outcomes",
    ],
    image: cultureWellbeingDrumming,
    alt: "Group of older adults playing djembes together",
  },
] as const;

function Programme() {
  return (
    <PageShell>
      <section className="container-x grid items-center gap-12 pt-10 pb-16 md:grid-cols-12 md:pt-12 md:pb-24">
        <div className="md:col-span-12">
          <PageHero title="Stay Healthy with the Beat">
            <Link
              to="/contact"
              search={{ interest: "Taster session" }}
              className="btn-solid"
              data-analytics="cta"
              data-analytics-place="programme"
              data-analytics-label="Book a Taster Session"
            >
              Book a Taster Session
            </Link>
          </PageHero>
        </div>
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-xl bg-forest/5">
            <Picture
              {...stayHealthy}
              alt="Stay Healthy with the Beat: traditional African drumming with wellbeing tips"
              className="w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-4 lg:pl-10">
          <p className="text-sm font-medium text-forest">
            Rhythmic Sound for Health & Wellbeing
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85">
            Traditional African drumming and practical wellbeing guidance for
            care homes, schools and community settings, led by Dr. John Nutekpor.
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85">
            Sessions combine rhythm, movement and basic health tips so groups
            can take part together, seated or standing, with no musical
            experience required.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Delivered on-site with all instruments provided",
              "Adaptable for mobility, sensory and cognitive needs",
              "Culturally-safe, respectful facilitation",
              "No experience required",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                  weight="regular"
                />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stacked header + 2-col outcome list */}
      <section className="border-y border-forest/10 bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              What sessions support
            </h2>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-muted-foreground">
              What sessions are designed to support in care, education and
              community settings.
            </p>
          </div>
          <ul className="mt-12 grid gap-0 border-t border-forest/12 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="border-b border-forest/12 py-7 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
              >
                <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Centered media band */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            Watch the programme
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A short look at rhythmic sound for health and wellbeing with Dr. John
            Nutekpor.
          </p>
        </div>
        <div className="mt-10 aspect-video max-w-4xl overflow-hidden rounded-xl bg-ink">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/MNlUXrV83xE?start=2"
            title="Rhythmic Sound for Health & Wellbeing, Global Echoes Ireland"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      {/* Practical facts as hairline rows */}
      <section className="border-y border-forest/10 bg-cream">
        <div className="container-x py-16 md:py-24">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            How delivery works
          </h2>
          <ul className="mt-10 divide-y divide-forest/12 border-t border-forest/12">
            {[
              {
                icon: UsersThree,
                title: "Who it serves",
                body: "Care home residents, school and university groups, community participants, rehabilitation and disability settings, and Higher Education Authority (HEA) institutions.",
              },
              {
                icon: Heart,
                title: "Evidence-informed practice",
                body: "Rooted in evidence linking rhythmic engagement with mood, cognition and social wellbeing, delivered with clinical coordination.",
              },
              {
                icon: Clock,
                title: "Session structure",
                body: "45-60 minute sessions, weekly cadence, delivered in circle or seated format to suit the room.",
              },
            ].map((c) => (
              <li
                key={c.title}
                className="grid gap-3 py-6 md:grid-cols-[2.5rem_12rem_1fr] md:items-start md:gap-8"
              >
                <c.icon
                  className="h-6 w-6 text-forest"
                  weight="regular"
                />
                <h3 className="font-display text-xl font-medium">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-forest/10 bg-cream py-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <svg
            className="absolute -top-28 -right-36 h-72 w-72 text-forest-soft lg:-top-16 lg:-right-10"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M40 20c40-30 120-10 140 40 24 60-10 110-60 120-55 12-120-20-130-80C-18 40 0 50 40 20z" />
          </svg>
          <svg
            className="absolute -bottom-24 -left-24 h-72 w-72 text-gold-soft"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M30 80c10-50 80-90 130-60 40 24 50 90 20 130-36 48-110 40-140-10-18-30-22-30-10-60z" />
          </svg>
          <Leaf
            className="absolute bottom-8 left-6 h-16 w-16 text-forest/25"
            weight="duotone"
          />
        </div>
        <div className="container-x relative">
          <p className="text-xs font-semibold tracking-[0.16em] text-forest/70 uppercase">
            Programme options
          </p>
          <h2 className="mt-3 whitespace-nowrap font-display text-[clamp(1.2rem,3.1vw,3rem)] leading-none font-medium tracking-[-0.03em] text-ink">
            Choose a depth of engagement
          </h2>
          <span
            aria-hidden="true"
            className="mt-3 block h-1 w-16 rounded-full bg-gold"
          />
          <p className="mt-4 text-[clamp(0.82rem,1.55vw,1rem)] leading-relaxed text-muted-foreground">
            <span className="block md:whitespace-nowrap">
              Enquiring about a programme you are interested in will open a
              conversation with our team.
            </span>
            <span className="block md:whitespace-nowrap">
              Your selected option will already be shared.
            </span>
          </p>

          <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-12 lg:gap-5">
            <article className="relative flex flex-col overflow-hidden rounded-2xl bg-ink text-cream lg:col-span-7">
              <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8 lg:max-w-[58%] lg:p-10">
                <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                  {featured.tag}
                </p>
                <h3 className="mt-2 font-display text-4xl font-medium text-cream md:text-5xl">
                  {featured.weeks}
                </h3>
                <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-cream/80 md:text-base">
                  {featured.body}
                </p>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-cream/90">
                  {featured.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        weight="bold"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  search={{ interest: featured.interest }}
                  className="btn-gold relative z-10 mt-8 w-fit rounded-full px-5"
                >
                  Ask about {featured.weeks}
                  <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                </Link>
              </div>
              <div className="relative h-52 sm:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
                <Picture
                  {...featured.image}
                  alt={featured.alt}
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/55 lg:to-transparent"
                />
              </div>
            </article>

            <div className="flex flex-col gap-4 lg:col-span-5">
              {others.map((o) => (
                <article
                  key={o.weeks}
                  className="flex flex-1 flex-col gap-4 rounded-2xl border border-forest/12 bg-white p-6 sm:flex-row sm:items-stretch"
                >
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-xs font-semibold tracking-[0.14em] text-forest/60 uppercase">
                      {o.tag}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-medium text-ink">
                      {o.weeks}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {o.body}
                    </p>
                    <ul className="mt-4 flex flex-1 flex-col gap-1.5 text-sm text-ink/80">
                      {o.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                            weight="bold"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      search={{ interest: o.interest }}
                      className="btn-outline mt-6 w-fit rounded-full px-4"
                    >
                      Ask about {o.weeks}
                      <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="overflow-hidden rounded-xl sm:w-36 sm:shrink-0">
                    <Picture
                      {...o.image}
                      alt={o.alt}
                      sizes="(min-width: 640px) 9rem, 100vw"
                      className="aspect-[16/10] h-full w-full object-cover sm:aspect-auto sm:min-h-full"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="btn-solid mt-5 w-full"
            data-analytics="cta"
            data-analytics-place="programme"
            data-analytics-label="Book a Taster Session"
          >
            Book a Taster Session
            <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <CTASection />
    </PageShell>
  );
}

function FAQSection() {

  return (
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-16 md:py-24">
        <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
          Questions
        </h2>
        <p className="mt-3 max-w-[42ch] text-base text-muted-foreground">
          Practical answers for planning a session in your setting.
        </p>
        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {PROGRAMME_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-forest/10">
                <AccordionTrigger className="font-display text-base md:text-lg text-ink hover:no-underline hover:text-forest">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/80 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
