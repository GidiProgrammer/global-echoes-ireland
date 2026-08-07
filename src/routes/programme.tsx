import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock,
  Heart,
  Users,
  Users2,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import stayHealthyImg from "@/assets/stay-healthy-with-the-beat.jpg";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      {
        title: "Rhythmic Sound for Health & Wellbeing | Global Echoes Ireland",
      },
      {
        name: "description",
        content:
          "Stay Healthy with the Beat: Rhythmic Sound for Health & Wellbeing. Traditional African drumming with wellbeing tips, led by Dr John Nutekpor.",
      },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

const pillars = [
  {
    icon: Heart,
    title: "Physical wellbeing",
    body: "Boost your energy, improve posture and coordination.",
  },
  {
    icon: Brain,
    title: "Mental wellbeing",
    body: "Reduce stress, sharpen focus and lift your mood.",
  },
  {
    icon: Activity,
    title: "Emotional wellbeing",
    body: "Express yourself, build confidence and find balance.",
  },
  {
    icon: Users,
    title: "Social wellbeing",
    body: "Build community, strengthen bonds and feel connected.",
  },
] as const;

const featured = {
  weeks: "8-Week",
  tag: "Most booked",
  interest: "8-week programme" as const,
  desc: "Our standard programme: deep enough to see meaningful change, practical for most care and community schedules.",
};

const others = [
  {
    weeks: "4-Week",
    tag: "Introductory",
    interest: "4-week programme" as const,
    desc: "A short structured engagement to introduce rhythmic wellbeing to your setting.",
  },
  {
    weeks: "12-Week",
    tag: "Advanced",
    interest: "12-week programme" as const,
    desc: "A full therapeutic engagement including baseline and outcome reporting.",
  },
] as const;

function Programme() {
  return (
    <PageShell>
      <PageHero
        title={
          <>
            Rhythmic Sound for{" "}
            <span className="text-forest">Health &amp; Wellbeing</span>
          </>
        }
        intro="Rhythmic Sound for Health and Wellbeing is a structured programme co-designed with care teams and delivered by a PhD-level arts practitioner in collaboration with senior clinical coordinators."
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
          <div className="overflow-hidden rounded-xl border border-forest/10 bg-white">
            <img
              src={stayHealthyImg}
              loading="lazy"
              alt="Stay Healthy with the Beat: traditional African drumming with wellbeing tips"
              className="w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-4 lg:pl-10">
          <h2 className="font-serif text-3xl md:text-4xl">
            Stay Healthy with the Beat
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85">
            Move with purpose, rest with gratitude, and live in rhythm with good
            health. Stay Healthy with the Beat enables you to keep your body,
            mind, and spirit in harmony through rhythms, movement, and positive
            connections.
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85">
            Embrace a joyful outlook with Dr John Nutekpor by choosing a healthy
            life through the rhythm of African percussion and movement. Listen
            to your body&apos;s beat, nourish it with care, and let wellness
            become the soundtrack of your everyday journey.
          </p>
          <p className="mt-5 text-sm font-medium text-forest">
            Drum. Connect. Move. Thrive.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Delivered on-site with all instruments provided",
              "Adaptable for mobility, sensory and cognitive needs",
              "Culturally-safe, respectful facilitation",
              "Optional impact reporting",
              "No experience required",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            All ages, all levels, all welcome
          </p>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
              Stay Healthy with the Beat
            </h2>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              Therapeutic outcomes shaped for healthcare, care and community
              settings. Full detail lives here; the home page keeps to the
              booking path.
            </p>
            <p className="mt-6 text-sm font-medium text-forest">
              Good rhythm. Good health. Better you.
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
            {pillars.map((item) => (
              <li
                key={item.title}
                className="mb-8 break-inside-avoid border-t border-forest/15 pt-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] bg-forest-soft text-forest">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Watch the programme</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A taste of rhythmic sound for health and wellbeing with Dr John
            Nutekpor.
          </p>
        </div>
        <div className="mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-xl border border-forest/10 bg-ink shadow-sm">
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

      <section className="border-y border-forest/10 bg-cream">
        <div className="container-x py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
            {[
              {
                icon: Users2,
                title: "Who it serves",
                body: "Care home residents, school and university groups, community participants, rehabilitation and disability settings, and HEA institutions.",
              },
              {
                icon: Activity,
                title: "Evidence-informed practice",
                body: "Rooted in growing evidence linking rhythmic engagement with mood, cognition and social wellbeing, delivered with clinical coordination.",
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
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl">Programme options</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Most partners start with a taster, then the 8-week standard. Pick a
              length and we will open an enquiry with that interest selected.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            <article className="flex flex-col rounded-xl bg-gold p-8 text-ink md:col-span-7 md:p-10">
              <CalendarDays className="h-7 w-7 opacity-90" strokeWidth={1.5} />
              <p className="mt-6 text-sm font-medium text-ink/70">{featured.tag}</p>
              <h3 className="mt-1 font-serif text-4xl md:text-5xl">
                {featured.weeks}
              </h3>
              <p className="mt-4 max-w-[42ch] flex-1 text-base leading-relaxed opacity-90">
                {featured.desc}
              </p>
              <Link
                to="/contact"
                search={{ interest: featured.interest }}
                className="mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-ink px-5 text-sm font-medium text-cream transition-colors hover:bg-ink/90 focus-ring-brand"
              >
                Enquire about {featured.weeks}
              </Link>
            </article>

            <div className="flex flex-col gap-6 md:col-span-5">
              {others.map((s) => (
                <article
                  key={s.weeks}
                  className="flex flex-1 flex-col border border-forest/15 bg-cream p-6 text-ink md:p-7"
                >
                  <p className="text-sm font-medium text-forest">{s.tag}</p>
                  <h3 className="mt-1 font-serif text-3xl">{s.weeks}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    search={{ interest: s.interest }}
                    className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-forest px-4 text-sm font-medium text-cream transition-colors hover:bg-forest-deep focus-ring-brand"
                  >
                    Enquire about {s.weeks}
                  </Link>
                </article>
              ))}
            </div>
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
          Come for the beat, stay for your wellbeing
        </h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {[
            "Honouring tradition. Empowering wellbeing.",
            "Traditional African drumming with wellbeing tips",
            "Physical, mental, emotional and social benefits",
            "Social bonding across residents, staff and families",
            "Cultural inclusion and belonging",
            "No experience required - all ages welcome",
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
