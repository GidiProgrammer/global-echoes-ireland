import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  CalendarDays,
  CheckCircle2,
  Clock,
  Users2,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import rehabImg from "@/assets/rehab-session.jpg";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      {
        title: "Our Programme | African Rhythms for Health & Wellbeing",
      },
      {
        name: "description",
        content:
          "African Rhythms for Health & Wellbeing: therapeutic drumming for care homes, HSE services, rehabilitation and community healthcare across Ireland.",
      },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

const outcomes = [
  {
    title: "Mood and calm",
    body: "Elevation of mood, reduced agitation and a shared sense of ease after sessions.",
  },
  {
    title: "Connection",
    body: "Social bonding across residents, staff and families through non-verbal rhythm.",
  },
  {
    title: "Cognitive engagement",
    body: "Memory, attention and sensory stimulation in adaptable, paced formats.",
  },
  {
    title: "Physical participation",
    body: "Fine and gross motor stimulation for seated or standing groups.",
  },
] as const;

const options = [
  {
    weeks: "4-Week",
    tag: "Introductory",
    interest: "4-week programme" as const,
    desc: "A short structured engagement to introduce rhythmic wellbeing to your setting.",
    recommended: false,
    tone: "border border-forest/15 bg-white text-ink",
    tagClass: "text-forest",
  },
  {
    weeks: "8-Week",
    tag: "Most booked",
    interest: "8-week programme" as const,
    desc: "Our standard programme: deep enough to see meaningful change, practical for most care and HSE schedules.",
    recommended: true,
    tone: "bg-gold text-ink",
    tagClass: "text-ink/70",
  },
  {
    weeks: "12-Week",
    tag: "Advanced",
    interest: "12-week programme" as const,
    desc: "A full therapeutic engagement including baseline and outcome reporting.",
    recommended: false,
    tone: "bg-maroon text-cream",
    tagClass: "text-gold-bright",
  },
] as const;

function Programme() {
  return (
    <PageShell>
      <PageHero
        title={
          <>
            African Rhythms for{" "}
            <span className="text-forest">Health &amp; Wellbeing</span>
          </>
        }
        intro="Rhythm as Medicine: a structured therapeutic drumming programme co-designed with care teams and delivered by a PhD-level practitioner with senior clinical coordination."
      >
        <Link
          to="/contact"
          search={{ interest: "Taster session" }}
          className="btn-solid mt-8"
        >
          Book a Taster Session
        </Link>
      </PageHero>

      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-xl">
            <img
              src={rehabImg}
              loading="lazy"
              alt="Rehabilitation session with African drumming"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-4 lg:pl-10">
          <h2 className="font-serif text-3xl md:text-4xl">
            A wellbeing intervention, not a performance
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85">
            Sessions are designed for participation, safety and outcomes. Every
            engagement is co-shaped with your activities or clinical team.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Delivered on-site with all instruments provided",
              "Adaptable for mobility, sensory and cognitive needs",
              "Culturally-safe, respectful facilitation",
              "Optional impact reporting",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
              The power of rhythm
            </h2>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
              Therapeutic outcomes shaped for healthcare, care and community
              settings. Full detail lives here; the home page keeps to the
              booking path.
            </p>
            <Link
              to="/contact"
              search={{ interest: "Taster session" }}
              className="btn-outline mt-8"
            >
              Ask about outcomes
            </Link>
          </div>
          <ol className="md:col-span-8 md:columns-2 md:gap-x-10">
            {outcomes.map((item, i) => (
              <li
                key={item.title}
                className="mb-8 break-inside-avoid border-t border-forest/15 pt-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-ink">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Users2,
              title: "Who it serves",
              body: "Care home residents, HSE service users, rehabilitation and disability participants, community groups.",
            },
            {
              icon: Activity,
              title: "Healthcare evidence",
              body: "Rooted in growing evidence linking rhythmic engagement with mood, cognition and social wellbeing.",
            },
            {
              icon: Clock,
              title: "Session structure",
              body: "45-60 minute sessions, weekly cadence, delivered in circle or seated format to suit the room.",
            },
          ].map((c) => (
            <article key={c.title}>
              <span className="grid h-11 w-11 place-items-center rounded-[6px] bg-forest text-cream">
                <c.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl">Programme options</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Most partners start with a taster, then the 8-week standard. Pick a
              length and we will open an enquiry with that interest selected.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {options.map((s) => (
              <article
                key={s.weeks}
                className={`relative flex h-full flex-col rounded-xl p-8 ${s.tone}`}
              >
                {s.recommended && (
                  <span className="absolute right-4 top-4 rounded-[4px] bg-ink/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
                    Recommended
                  </span>
                )}
                <CalendarDays className="h-7 w-7 opacity-90" strokeWidth={1.5} />
                <p
                  className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${s.tagClass}`}
                >
                  {s.tag}
                </p>
                <h3 className="mt-2 font-serif text-4xl">{s.weeks}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed opacity-90">
                  {s.desc}
                </p>
                <Link
                  to="/contact"
                  search={{ interest: s.interest }}
                  className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-[6px] px-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors focus-ring-brand ${
                    s.recommended
                      ? "bg-ink text-cream hover:bg-ink/90"
                      : s.weeks === "12-Week"
                        ? "bg-cream text-maroon hover:bg-white"
                        : "bg-forest text-cream hover:bg-forest-deep"
                  }`}
                >
                  Enquire about {s.weeks}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              search={{ interest: "Taster session" }}
              className="text-sm font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
            >
              Or start with a single taster session
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl">
          Outcomes we consistently see
        </h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {[
            "Mood elevation and reduced agitation",
            "Cognitive engagement and memory recall",
            "Fine and gross motor stimulation",
            "Social bonding across residents and staff",
            "Cultural inclusion and belonging",
            "Non-verbal communication opportunities",
          ].map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 border-b border-forest/10 py-4 text-[15px]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
              {o}
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </PageShell>
  );
}
