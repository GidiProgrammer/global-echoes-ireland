import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarBlank,
  CheckCircle,
  Clock,
  Heart,
  UsersThree,
} from "@phosphor-icons/react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import stayHealthyImg from "@/assets/stay-healthy-with-the-beat.jpg";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/programme")({
  head: () =>
    pageHead({
      title: "Rhythmic Sound for Health & Wellbeing | Global Echoes Ireland",
      description:
        "Stay Healthy with the Beat: Rhythmic Sound for Health & Wellbeing. Traditional African drumming with wellbeing tips, led by Dr John Nutekpor.",
      path: "/programme",
    }),
  component: Programme,
});

const outcomes = [
  {
    title: "Physical wellbeing",
    body: "Boost your energy, improve posture and coordination.",
  },
  {
    title: "Mental wellbeing",
    body: "Reduce stress, sharpen focus and lift your mood.",
  },
  {
    title: "Emotional wellbeing",
    body: "Express yourself, build confidence and find balance.",
  },
  {
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
        title="Rhythmic Sound for Health & Wellbeing"
        intro="Co-designed with care teams. Led by a PhD arts practitioner with a senior clinical coordinator."
      >
        <Link
          to="/contact"
          search={{ interest: "Taster session" }}
          className="btn-solid"
        >
          Book a Taster Session
        </Link>
      </PageHero>

      {/* Split: media + programme intro */}
      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-xl bg-forest/5">
            <img
              src={stayHealthyImg}
              loading="lazy"
              alt="Stay Healthy with the Beat: traditional African drumming with wellbeing tips"
              className="w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-4 lg:pl-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            Stay Healthy with the Beat
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85">
            Traditional African drumming and practical wellbeing guidance for
            care homes, schools and community settings, led by Dr John Nutekpor.
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
              Therapeutic outcomes shaped for healthcare, care and community
              settings.
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
            A short look at rhythmic sound for health and wellbeing with Dr John
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

      {/* Forest options band (matches home) */}
      <section className="bg-forest text-cream">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-cream md:text-4xl">
              Programme options
            </h2>
            <p className="mt-4 text-base text-cream/75">
              Most partners start with a taster, then the 8-week standard. Asking
              about a length opens contact with that interest selected.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
            <article className="flex flex-col rounded-xl bg-gold p-8 text-ink md:col-span-7 md:p-10">
              <CalendarBlank className="h-7 w-7 opacity-90" weight="regular" />
              <p className="mt-6 text-sm font-medium text-ink/70">{featured.tag}</p>
              <h3 className="mt-1 font-display text-3xl font-medium md:text-4xl">
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
                Ask about {featured.weeks}
              </Link>
            </article>

            <div className="flex flex-col gap-5 md:col-span-5">
              {others.map((s) => (
                <article
                  key={s.weeks}
                  className="flex flex-1 flex-col border border-cream/20 bg-forest-deep/50 p-6 text-cream md:p-7"
                >
                  <p className="text-sm font-medium text-gold-bright">{s.tag}</p>
                  <h3 className="mt-1 font-display text-3xl font-medium">
                    {s.weeks}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    search={{ interest: s.interest }}
                    className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-cream px-4 text-sm font-medium text-forest transition-colors hover:bg-gold-soft focus-ring-brand-on-dark"
                  >
                    Ask about {s.weeks}
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="btn-gold mt-10"
          >
            Book a Taster Session
          </Link>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
