import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";
import { WordsPullUpMultiStyle } from "@/components/ui/words-pull-up";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import heroExperimentImg from "@/assets/hero-image.jpg";
import heroImg from "@/assets/hero-care-drumming.jpg";
import schoolsEducationImg from "@/assets/schools-education.jpg";
import careHomesImg from "@/assets/carehomes.jpg";
import communityWellbeingImg from "@/assets/community-wellbeing.jpg";
import festivalsEventsImg from "@/assets/festivals-and-events.jpg";
import johnImg from "@/assets/drjohn.jpg";
import natalieImg from "@/assets/founder-natalie.jpg";
import emmanuelImg from "@/assets/founder-emmanuel.jpg";
import caoimheImg from "@/assets/caoimhe-doherty.jpg";
import farisImg from "@/assets/faris-amin.jpg";
import workPhoto from "@/assets/photo1.jpg";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title:
        "Global Echoes Ireland | Global harmony through sound and creative collaborations",
      description:
        "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <PageShell overlayNav>
      <Masthead />
      <AboutPreview />
      <Benefits />
      <ServicesOverview />
      <TeamPreview />
      <ProgrammeOptions />
      <GalleryPreview />
      <Positioning />
      <CTASection />
    </PageShell>
  );
}

/* Hero | brand, headline, short sub, CTA pair */
function Masthead() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-forest-deep"
    >
      <img
        src={heroExperimentImg}
        alt="Djembe drum with flute, violin, piano and stethoscope, symbolising culture and care"
        className="animate-hero-soft absolute inset-0 h-full w-full object-cover object-[center_40%]"
        width={1536}
        height={1024}
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[90rem] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:px-8 md:pt-24 lg:px-10 xl:px-14">
          <div className="max-w-[34rem] lg:max-w-[40rem]">
            <p className="animate-fade-up font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-[1.1] tracking-[-0.02em] text-cream">
              Global Echoes Ireland
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display font-medium leading-[1.1] tracking-[-0.03em] text-[clamp(2.25rem,5.5vw,3.75rem)] text-balance"
            >
              <WordsPullUpMultiStyle
                delay={0.12}
                segments={[
                  { text: "Global harmony", className: "text-cream" },
                  {
                    text: "through sound",
                    className: "font-semibold text-gold-bright",
                  },
                  {
                    text: "and creative collaborations",
                    className: "text-cream",
                  },
                ]}
              />
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-[36ch] font-sans text-[0.9375rem] leading-[1.65] text-gold-bright/90 md:text-base"
              style={{ animationDelay: "0.42s" }}
            >
              Wellbeing music programmes for care homes, schools, universities
              and communities across Ireland and beyond.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ animationDelay: "0.55s" }}
            >
              <Link
                to="/contact"
                search={{ interest: "Taster session" }}
                className="btn-gold group"
              >
                Book a Taster Session
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                />
              </Link>
              <Link
                to="/programme"
                className="inline-flex min-h-11 items-center border-b border-cream/70 pb-0.5 font-sans text-sm font-medium text-cream transition-colors duration-200 hover:border-gold-bright hover:text-gold-bright focus-ring-brand-on-dark"
              >
                See the programme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Split: media left, copy right */
function AboutPreview() {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-6">
          <div className="overflow-hidden rounded-xl bg-forest/5">
            <img
              src={heroImg}
              alt="A care home resident and practitioner sharing a drumming session"
              className="aspect-[4/5] h-full w-full object-cover"
              loading="lazy"
              width={900}
              height={1125}
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:pl-4 lg:pl-10" delayMs={90}>
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Culture, care and community
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/85 md:text-lg">
            Guided by global harmony through sound and creative collaborations,
            we deliver structured wellbeing music experiences that integrate
            world rhythmic traditions with wellbeing practice across care homes,
            schools, communities and HEA institutions.
          </p>
          <Link to="/about" className="btn-solid mt-8">
            About
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Stacked header + 2-col outcome list */
function Benefits() {
  const items = [
    {
      title: "Wellbeing",
      body: "Mood elevation, reduced agitation and calm after shared rhythm.",
    },
    {
      title: "Connection",
      body: "Bonding across residents, staff and families without needing words.",
    },
    {
      title: "Engagement",
      body: "Memory, attention and sensory stimulation in adaptable sessions.",
    },
    {
      title: "Movement",
      body: "Fine and gross motor stimulation for seated or standing formats.",
    },
  ];

  return (
    <section className="section-fill border-b border-forest/10 bg-white">
      <div className="container-x flex min-h-0 flex-1 flex-col justify-center py-8 md:py-10">
        <div className="max-w-xl shrink-0">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl lg:text-5xl">
            Why rhythm works here
          </h2>
          <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-muted-foreground">
            Therapeutic outcomes for healthcare, care and community settings.
          </p>
        </div>
        <ul className="mt-8 grid min-h-0 flex-1 gap-0 border-t border-forest/12 sm:grid-cols-2 md:mt-10">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col justify-center border-b border-forest/12 py-5 sm:odd:pr-10 sm:even:border-l sm:even:pl-10 md:py-6"
            >
              <h3 className="font-display text-xl font-medium md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <Link to="/programme" className="btn-outline mt-8 shrink-0 md:mt-10">
          See the full programme
        </Link>
      </div>
    </section>
  );
}

/* Asymmetric 2+2 mosaic (4 cells, not equal 4-up) */
function ServicesOverview() {
  const services = [
    {
      title: "Care Homes & Healthcare",
      hash: "care-homes",
      img: careHomesImg,
      alt: "Caregiver holding an older person's hands in a care setting",
      span: "md:col-span-7",
    },
    {
      title: "Community & Wellbeing",
      hash: "community",
      img: communityWellbeingImg,
      alt: "Facilitated drumming circle with older participants",
      span: "md:col-span-5",
    },
    {
      title: "Schools, Universities & Education",
      hash: "schools",
      img: schoolsEducationImg,
      alt: "School percussion workshop with facilitator and pupils around djembes",
      span: "md:col-span-5",
    },
    {
      title: "Festivals & Events",
      hash: "festivals",
      img: festivalsEventsImg,
      alt: "Outdoor festival performance with djembe and audience",
      span: "md:col-span-7",
    },
  ] as const;

  return (
    <section className="section-fill border-b border-forest/10 bg-cream">
      <div className="container-x flex min-h-0 flex-1 flex-col justify-center py-8 md:py-10">
        <div className="flex shrink-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl lg:text-5xl">
              Where we work
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              Care homes, schools and universities, communities, and cultural
              events. Programmes tailored to each setting.
            </p>
          </div>
          <Link
            to="/services"
            className="btn-outline shrink-0 self-start md:self-auto"
          >
            View services
          </Link>
        </div>

        <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8 md:grid-cols-12 md:grid-rows-2 md:gap-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              hash={s.hash}
              className={`group min-h-0 focus-ring-brand ${s.span}`}
            >
              <article className="flex h-full min-h-0 flex-col">
                <div className="min-h-0 flex-1 overflow-hidden rounded-xl bg-forest/5">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-2 shrink-0 font-display text-lg font-medium text-ink md:mt-3 md:text-xl">
                  {s.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Featured founder + supporting team */
function TeamPreview() {
  const featured = {
    name: "Dr John Nutekpor",
    role: "Founder & Artistic Director, PhD Arts Practice",
    img: johnImg,
    imgClass: "aspect-[4/5] w-full object-cover object-[center_15%]",
  };
  const others = [
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder, Strategy & Partnerships",
      img: emmanuelImg,
      imgClass:
        "aspect-square w-full object-cover object-[center_18%] sm:aspect-[5/4]",
    },
    {
      name: "Natalie Rodgers",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieImg,
      imgClass:
        "aspect-square w-full object-cover object-[center_18%] sm:aspect-[5/4]",
    },
    {
      name: "Faris Amin",
      role: "Community Outreach Coordinator and Therapist",
      img: farisImg,
      imgClass:
        "aspect-square w-full object-cover object-[center_28%] sm:aspect-[5/4]",
    },
    {
      name: "Caoimhe Doherty",
      role: "International Programmes and Events Coordinator",
      img: caoimheImg,
      imgClass:
        "aspect-square w-full object-cover object-[center_20%] sm:aspect-[5/4]",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-16 md:py-24">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            The people behind the work
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Clinical coordination, cultural mastery and partnership leadership in
            one team.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          <Reveal className="md:col-span-6 lg:col-span-5">
            <article>
              <img
                src={featured.img}
                alt={featured.name}
                className={`${featured.imgClass} rounded-xl`}
                loading="lazy"
              />
              <h3 className="mt-5 font-display text-2xl font-medium md:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-1 text-sm text-forest">{featured.role}</p>
            </article>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-6 lg:col-span-7">
            {others.map((f, i) => (
              <Reveal key={f.name} delayMs={80 + i * 50}>
                <article>
                  <img
                    src={f.img}
                    alt={f.name}
                    className={`${f.imgClass} rounded-xl`}
                    loading="lazy"
                  />
                  <h3 className="mt-4 font-display text-xl font-medium md:text-2xl">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-sm text-forest">{f.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delayMs={120}>
          <Link to="/about" className="btn-outline mt-12">
            Meet the team
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Featured programme tile + stacked alternatives */
function ProgrammeOptions() {
  const featured = {
    weeks: "8-Week",
    tag: "Most booked",
    interest: "8-week programme" as const,
    body: "Our standard programme: deep enough to see meaningful change.",
  };
  const others = [
    {
      weeks: "4-Week",
      tag: "Introductory",
      interest: "4-week programme" as const,
      body: "A short structured engagement to introduce rhythmic wellbeing.",
    },
    {
      weeks: "12-Week",
      tag: "Advanced",
      interest: "12-week programme" as const,
      body: "Full therapeutic engagement with baseline and outcome reporting.",
    },
  ];

  return (
    <section className="section-fill border-b border-forest/10 bg-forest text-cream">
      <div className="container-x flex min-h-0 flex-1 flex-col justify-center py-8 md:py-10">
        <div className="max-w-2xl shrink-0">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-cream md:text-4xl lg:text-5xl">
            Programme options
          </h2>
          <p className="mt-3 text-base text-cream/75">
            Choose a depth of engagement. Enquiring opens contact with that
            option already selected.
          </p>
        </div>

        <div className="mt-6 grid min-h-0 flex-1 gap-4 md:mt-8 md:grid-cols-12 md:gap-5">
          <article className="flex min-h-0 flex-col rounded-xl bg-gold p-6 text-ink md:col-span-7 md:p-8 lg:p-10">
            <CalendarBlank className="h-7 w-7 shrink-0 opacity-90" />
            <p className="mt-4 text-sm font-medium text-ink/70 md:mt-6">
              {featured.tag}
            </p>
            <h3 className="mt-1 font-display text-3xl font-medium md:text-4xl lg:text-5xl">
              {featured.weeks}
            </h3>
            <p className="mt-3 max-w-[42ch] flex-1 text-sm leading-relaxed opacity-90 md:mt-4 md:text-base">
              {featured.body}
            </p>
            <Link
              to="/contact"
              search={{ interest: featured.interest }}
              className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-ink px-5 text-sm font-medium text-cream transition-colors hover:bg-ink/90 focus-ring-brand md:mt-8"
            >
              Ask about {featured.weeks}
            </Link>
          </article>

          <div className="flex min-h-0 flex-col gap-4 md:col-span-5">
            {others.map((o) => (
              <article
                key={o.weeks}
                className="flex min-h-0 flex-1 flex-col border border-cream/20 bg-forest-deep/50 p-5 text-cream md:p-6 lg:p-7"
              >
                <p className="text-sm font-medium text-gold-bright">{o.tag}</p>
                <h3 className="mt-1 font-display text-2xl font-medium md:text-3xl">
                  {o.weeks}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70 md:mt-3">
                  {o.body}
                </p>
                <Link
                  to="/contact"
                  search={{ interest: o.interest }}
                  className="mt-4 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-cream px-4 text-sm font-medium text-forest transition-colors hover:bg-gold-soft focus-ring-brand-on-dark md:mt-5"
                >
                  Ask about {o.weeks}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <Link to="/programme" className="btn-gold mt-6 shrink-0 md:mt-8">
          View full details
        </Link>
      </div>
    </section>
  );
}

/* Full-bleed media band (not another split) */
function GalleryPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={workPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/35"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 md:py-28 lg:py-32">
        <div className="max-w-lg">
          <h2 className="font-display text-4xl font-medium tracking-[-0.02em] text-cream md:text-5xl">
            Work done
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/80">
            Photography and session films from schools, communities and cultural
            programmes across Ireland.
          </p>
          <Link
            to="/gallery"
            hash="work-done"
            className="btn-gold mt-8"
          >
            Open gallery
          </Link>
        </div>
      </div>
      {/* Accessible primary image for screen readers / SEO context */}
      <span className="sr-only">
        Children with djembe drums in a Global Echoes Ireland school workshop
      </span>
    </section>
  );
}

/* Centered manifesto band */
function Positioning() {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-balance font-display text-2xl font-medium leading-snug text-ink md:text-3xl lg:text-4xl">
            Stay Healthy with the Beat is a structured programme co-designed with
            care teams and delivered by a PhD-qualified arts practitioner with a
            senior clinical coordinator.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-ink">
              Rhythmic Sound for Health &amp; Wellbeing
            </span>
            <span className="mx-2 text-forest/30">|</span>
            Global Echoes Ireland
          </p>
        </div>
      </div>
    </section>
  );
}
