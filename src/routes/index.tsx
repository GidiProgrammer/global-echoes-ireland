import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";
import { WordsPullUpMultiStyle } from "@/components/ui/words-pull-up";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import heroExperimentImg from "@/assets/hero-djembe-room.jpg";
import heroImg from "@/assets/hero-care-drumming.jpg";
import handsImg from "@/assets/hands-drum.jpg";
import circleImg from "@/assets/community-circle.jpg";
import rehabImg from "@/assets/rehab-session.jpg";
import johnImg from "@/assets/drjohn.png";
import natalieImg from "@/assets/founder-natalie.jpg";
import emmanuelImg from "@/assets/founder-emmanuel.jpg";
import workPhoto from "@/assets/photo1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Global Echoes Ireland | Global Harmony through Sound and creative collaborations",
      },
      {
        name: "description",
        content:
          "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.",
      },
      {
        property: "og:title",
        content:
          "Global Echoes Ireland | Global Harmony through Sound and creative collaborations",
      },
      {
        property: "og:description",
        content:
          "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        alt="Djembe drum in a sunlit room with plants and woven textures"
        className="absolute inset-0 h-full w-full object-cover object-[72%_50%]"
        width={1024}
        height={546}
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[90rem] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:px-8 md:pt-24 lg:px-10 xl:px-14">
          <div className="max-w-[34rem] lg:max-w-[40rem]">
            <p className="font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-[1.1] tracking-[-0.02em] text-cream">
              Global Echoes Ireland
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display font-medium leading-[1.1] tracking-[-0.03em] text-[clamp(2.25rem,5.5vw,3.75rem)] text-balance"
            >
              <WordsPullUpMultiStyle
                segments={[
                  { text: "Global Harmony", className: "text-cream" },
                  {
                    text: "through Sound",
                    className: "font-semibold text-gold-bright",
                  },
                  {
                    text: "and creative collaborations",
                    className: "text-cream",
                  },
                ]}
              />
            </h1>

            <p className="mt-6 max-w-[36ch] font-sans text-[0.9375rem] leading-[1.65] text-gold-bright/90 md:text-base">
              Wellbeing music programmes for care homes, schools, universities
              and communities across Ireland and beyond.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
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
        <div className="md:col-span-6">
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
        </div>
        <div className="md:col-span-6 md:pl-4 lg:pl-10">
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Culture, care and community
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/85 md:text-lg">
            Guided by Global Harmony through Sound and creative collaborations,
            we deliver structured wellbeing music experiences that integrate
            world rhythmic traditions with wellbeing practice across care homes,
            schools, communities and HEA institutions.
          </p>
          <Link to="/about" className="btn-solid mt-8">
            About
          </Link>
        </div>
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
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            Why rhythm works here
          </h2>
          <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-muted-foreground">
            Therapeutic outcomes for healthcare, care and community settings.
          </p>
        </div>
        <ul className="mt-12 grid gap-0 border-t border-forest/12 sm:grid-cols-2">
          {items.map((item) => (
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
        <Link to="/programme" className="btn-outline mt-10">
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
      img: heroImg,
      alt: "Drumming session in a care setting",
      span: "md:col-span-7",
      aspect: "aspect-[16/10] md:aspect-[5/3]",
    },
    {
      title: "Community & Wellbeing",
      hash: "community",
      img: circleImg,
      alt: "Community drumming circle",
      span: "md:col-span-5",
      aspect: "aspect-[4/5] md:aspect-auto md:h-full",
    },
    {
      title: "Schools, Universities & Education",
      hash: "schools",
      img: handsImg,
      alt: "Hands on a djembe drum",
      span: "md:col-span-5",
      aspect: "aspect-[4/5] md:aspect-auto md:h-full",
    },
    {
      title: "Festivals & Events",
      hash: "festivals",
      img: rehabImg,
      alt: "Group rhythmic session",
      span: "md:col-span-7",
      aspect: "aspect-[16/10] md:aspect-[5/3]",
    },
  ] as const;

  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
              Where we work
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              Care homes, schools and universities, communities, and cultural
              events. Programmes tailored to each setting.
            </p>
          </div>
          <Link to="/services" className="btn-outline shrink-0 self-start md:self-auto">
            View services
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              hash={s.hash}
              className={`group focus-ring-brand ${s.span}`}
            >
              <article className="flex h-full flex-col">
                <div className="overflow-hidden rounded-xl bg-forest/5">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className={`${s.aspect} w-full object-cover transition duration-500 group-hover:scale-[1.02]`}
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">
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

/* Featured founder + stacked pair (breaks equal 3-up) */
function TeamPreview() {
  const featured = {
    name: "Dr John Nutekpor",
    role: "Founder & Artistic Director, PhD Arts Practice",
    img: johnImg,
    imgClass: "aspect-[4/5] w-full object-cover object-[center_15%]",
  };
  const others = [
    {
      name: "Natalie Rodgers",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieImg,
      imgClass: "aspect-square w-full object-cover sm:aspect-[5/4]",
    },
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder, Strategy & Partnerships",
      img: emmanuelImg,
      imgClass: "aspect-square w-full object-cover sm:aspect-[5/4]",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            The people behind the work
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Clinical coordination, cultural mastery and partnership leadership in
            one team.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          <article className="md:col-span-6 lg:col-span-7">
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

          <div className="flex flex-col gap-10 md:col-span-6 md:justify-between lg:col-span-5">
            {others.map((f) => (
              <article key={f.name}>
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
            ))}
          </div>
        </div>

        <Link to="/about" className="btn-outline mt-12">
          Meet the team
        </Link>
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
    <section className="border-b border-forest/10 bg-forest text-cream">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-[-0.02em] text-cream md:text-5xl">
            Programme options
          </h2>
          <p className="mt-4 text-base text-cream/75">
            Choose a depth of engagement. Enquiring opens contact with that
            option already selected.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
          <article className="flex flex-col rounded-xl bg-gold p-8 text-ink md:col-span-7 md:p-10">
            <CalendarBlank className="h-7 w-7 opacity-90" />
            <p className="mt-6 text-sm font-medium text-ink/70">{featured.tag}</p>
            <h3 className="mt-1 font-display text-4xl font-medium md:text-5xl">
              {featured.weeks}
            </h3>
            <p className="mt-4 max-w-[42ch] flex-1 text-base leading-relaxed opacity-90">
              {featured.body}
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
            {others.map((o) => (
              <article
                key={o.weeks}
                className="flex flex-1 flex-col border border-cream/20 bg-forest-deep/50 p-6 text-cream md:p-7"
              >
                <p className="text-sm font-medium text-gold-bright">{o.tag}</p>
                <h3 className="mt-1 font-display text-3xl font-medium">{o.weeks}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">
                  {o.body}
                </p>
                <Link
                  to="/contact"
                  search={{ interest: o.interest }}
                  className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-cream px-4 text-sm font-medium text-forest transition-colors hover:bg-gold-soft focus-ring-brand-on-dark"
                >
                  Ask about {o.weeks}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <Link to="/programme" className="btn-gold mt-10">
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
