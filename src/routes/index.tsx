import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Leaf,
  Lightning,
  MusicNote,
  UsersThree,
} from "@phosphor-icons/react";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { CTASection } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { pageHead, SITE_DESCRIPTION } from "@/lib/site";
import { homeHero } from "@/lib/hero";
import {
  careHomes,
  caoimheDoherty,
  communityCareCulture,
  communityWellbeing,
  cultureWellbeingDrumming,
  drJohn,
  emmanuelSone,
  farisAmin,
  festivalsEvents,
  heroCareDrumming,
  heroPreload,
  natalieRodgers,
  photo1,
  schoolsEducation,
} from "@/lib/responsive-images";
import { Picture } from "@/components/site/Picture";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Global Echoes Ireland | Wellbeing music programmes",
      description: SITE_DESCRIPTION,
      path: "/",
      preloadImages: [heroPreload],
    }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <div className="relative">
        <Hero {...homeHero} />
        <div className="relative z-10">
          <AboutPreview />
          <Benefits />
          <ServicesOverview />
          <TeamPreview />
          <ProgrammeOptions />
          <GalleryPreview />
          <Positioning />
          <CTASection
            headline="See community programmes and public sessions"
            body="Festivals, cultural events and group work across Ireland."
            showDetails={false}
            showBookCta={false}
            showTagline={false}
          />
        </div>
      </div>
    </PageShell>
  );
}

/* Split: media left, copy right */
function AboutPreview() {
  return (
    <section id="after-hero" className="border-b border-forest/10 bg-cream">
      <div className="container-x grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-6">
          <div className="overflow-hidden rounded-xl bg-forest/5">
            <Picture
              {...communityCareCulture}
              alt="Diverse group playing djembe drums together at a Global Echoes Ireland community session"
              className="aspect-[3/2] w-full object-cover"
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
            schools, communities and Higher Education Authority (HEA)
            institutions.
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
      body: "Shared rhythm sessions designed to support mood and a calmer room.",
      icon: Leaf,
      tone: "bg-forest-soft text-forest",
      image: cultureWellbeingDrumming,
      alt: "Group of older adults playing djembes together beneath a Global Echoes Ireland banner",
    },
    {
      title: "Connection",
      body: "A way for residents, staff and families to take part in the same activity.",
      icon: UsersThree,
      tone: "bg-gold-soft text-gold-ink",
      image: communityWellbeing,
      alt: "Facilitated drumming circle with older participants",
    },
    {
      title: "Engagement",
      body: "Pacing that can flex for different energy levels and attention spans.",
      icon: Lightning,
      tone: "bg-forest-soft text-forest",
      image: heroCareDrumming,
      alt: "Older woman smiling while holding a drum with a facilitator",
    },
    {
      title: "Movement",
      body: "Drumming and percussion that can be done seated or standing.",
      icon: MusicNote,
      tone: "bg-gold-soft text-gold-ink",
      image: festivalsEvents,
      alt: "Outdoor festival performance with djembe and audience",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-forest/10 bg-cream py-16 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          className="absolute -top-36 -right-40 h-72 w-72 text-forest-soft lg:-top-24 lg:-right-16"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M40 20c40-30 120-10 140 40 24 60-10 110-60 120-55 12-120-20-130-80C-18 40 0 50 40 20z" />
        </svg>
        <svg
          className="absolute -bottom-28 -left-20 h-80 w-80 text-gold-soft"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M30 80c10-50 80-90 130-60 40 24 50 90 20 130-36 48-110 40-140-10-18-30-22-30-10-60z" />
        </svg>
        <svg
          className="absolute top-1/3 -left-10 h-40 w-56 text-forest-soft"
          viewBox="0 0 200 120"
          fill="currentColor"
        >
          <path d="M10 70c20-40 80-60 140-30 30 16 40 50 10 70-40 26-120 10-150-40z" />
        </svg>
        <svg
          className="absolute right-8 bottom-16 h-24 w-40 text-gold-soft"
          viewBox="0 0 160 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 50c30-40 90-40 150 10" />
        </svg>
      </div>
      <div className="container-x relative">
        <p className="text-xs font-semibold tracking-[0.16em] text-forest/70 uppercase">
          Our approach
        </p>
        <h2 className="mt-3 whitespace-nowrap font-display text-[clamp(1.35rem,3.6vw,3.75rem)] leading-none font-medium tracking-[-0.03em] text-ink">
          Why rhythm <span className="text-forest">works here</span>
        </h2>
        <p className="mt-4 max-w-[28ch] text-base leading-relaxed text-muted-foreground">
          Therapeutic outcomes for healthcare, care and community settings.
        </p>
        <ul className="mt-10 grid border-t border-forest/12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col border-b border-forest/12 py-6 sm:border-r sm:px-6 sm:nth-[2n]:border-r-0 lg:border-b-0 lg:px-7 lg:nth-[2n]:border-r lg:last:border-r-0"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-full ${item.tone}`}
              >
                <item.icon className="h-6 w-6" weight="regular" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <div className="mt-5 overflow-hidden rounded-lg lg:mt-auto lg:pt-5">
                <Picture
                  {...item.image}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link to="/programme" className="btn-solid rounded-full px-6">
            See the full programme
            <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Asymmetric 2+2 mosaic (4 cells, not equal 4-up) */
function ServicesOverview() {
  const services = [
    {
      n: "01",
      title: "Care Homes & Healthcare",
      body: "Supporting wellbeing, connection and quality of life through shared rhythm.",
      hash: "care-homes",
      img: careHomes,
      alt: "Caregiver holding an older person's hands in a care setting",
    },
    {
      n: "02",
      title: "Community & Wellbeing",
      body: "Bringing people together through music, movement and shared experience.",
      hash: "community",
      img: communityWellbeing,
      alt: "Facilitated drumming circle with older participants",
    },
    {
      n: "03",
      title: "Schools, Universities & Education",
      body: "Creative programmes that build confidence, focus and teamwork.",
      hash: "schools",
      img: schoolsEducation,
      alt: "School percussion workshop with facilitator and pupils around djembes",
    },
    {
      n: "04",
      title: "Festivals & Events",
      body: "Live and interactive experiences for cultural, public and private events.",
      hash: "festivals",
      img: festivalsEvents,
      alt: "Outdoor festival performance with djembe and audience",
    },
  ] as const;

  return (
    <section className="relative overflow-hidden border-b border-forest/10 bg-cream">
      <SettingBlobs />
      <div className="container-x relative py-16 md:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-forest/70">
              WHERE WE WORK
            </p>
            <h2 className="mt-3 whitespace-nowrap font-display text-[clamp(1.05rem,2.35vw,2.75rem)] font-medium leading-none tracking-[-0.03em] text-ink">
              Care, learning and community{" "}
              <span className="text-forest">in every setting</span>
            </h2>
            <span
              className="mt-4 block h-0.5 w-10 rounded-full bg-gold"
              aria-hidden="true"
            />
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              Care homes, schools and universities, communities, and cultural
              events. Programmes tailored to each setting.
            </p>
          </div>
          <Link
            to="/services"
            className="btn-outline shrink-0 self-start rounded-full px-5 lg:self-auto"
          >
            View services
            <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {services.map((s) => (
            <article
              key={s.hash}
              className="flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white/80 sm:flex-row"
            >
              <div className="aspect-[16/10] shrink-0 overflow-hidden bg-forest/5 sm:aspect-auto sm:w-[42%]">
                <Picture
                  {...s.img}
                  alt={s.alt}
                  className="h-full w-full object-cover sm:min-h-full"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                <p className="font-sans text-sm font-medium tracking-wide text-forest/55">
                  {s.n}
                </p>
                <span
                  className="mt-2 block h-0.5 w-8 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-[-0.02em] text-ink md:text-[1.35rem]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <Link
                  to="/services"
                  hash={s.hash}
                  className="mt-4 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-medium text-forest hover:text-forest-deep focus-ring-brand"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SettingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute -left-16 top-8 h-72 w-56 text-forest-soft md:-left-8 md:h-96"
        viewBox="0 0 220 360"
        fill="currentColor"
      >
        <path d="M168 18c-48 8-92 46-112 98-22 58-8 112 28 154 30 36 78 62 92 78 8-40-6-78 8-118 16-46 62-70 78-112 18-46-22-108-94-100Z" />
      </svg>
      <svg
        className="absolute -right-20 top-16 hidden h-80 w-64 text-forest-soft/80 lg:block"
        viewBox="0 0 240 320"
        fill="currentColor"
      >
        <path d="M48 28c62-22 150 8 168 72 16 58-18 96-8 150 8 44-20 86-72 92-58 6-110-28-128-78C-8 204 2 120 28 78 42 54 22 38 48 28Z" />
      </svg>
      <svg
        className="absolute -bottom-6 -right-6 h-40 w-36 text-forest/25 md:right-6"
        viewBox="0 0 140 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M78 132c8-28 6-48-8-62-12-12-18-28-10-44 10 18 28 24 40 18 8-4 12-16 8-28-16 6-22 22-18 36 6 18 22 24 36 20" />
        <path d="M70 128c-2-22 10-36 28-42" />
      </svg>
    </div>
  );
}

/* Featured founder + supporting team */
function TeamPreview() {
  const featured = {
    name: "Dr. John Nutekpor",
    role: "Founder & Artistic Director, PhD Arts Practice",
    img: drJohn,
    imgClass: "aspect-[4/5] w-full object-cover object-[center_15%]",
  };
  const others = [
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder, Strategy & Partnerships",
      img: emmanuelSone,
      imgClass:
        "aspect-square w-full object-cover object-[center_18%] sm:aspect-[5/4]",
    },
    {
      name: "Natalie Rodgers",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieRodgers,
      imgClass:
        "aspect-square w-full object-cover object-[center_38%] sm:aspect-[5/4]",
    },
    {
      name: "Faris Amin",
      role: "Community outreach and Wellbeing facilitator",
      img: farisAmin,
      imgClass:
        "aspect-square w-full object-cover object-[center_28%] sm:aspect-[5/4]",
    },
    {
      name: "Caoimhe Doherty",
      role: "International Programmes and Events Coordinator",
      img: caoimheDoherty,
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
              <Picture
                {...featured.img}
                alt={featured.name}
                className={`${featured.imgClass} rounded-xl`}
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
                  <Picture
                    {...f.img}
                    alt={f.name}
                    className={`${f.imgClass} rounded-xl`}
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
  ];

  return (
    <section className="relative overflow-hidden border-b border-forest/10 bg-cream py-8">
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
        <h2 className="mt-2 whitespace-nowrap font-display text-[clamp(1.2rem,2.6vw,2.5rem)] leading-none font-medium tracking-[-0.03em] text-ink">
          Choose a depth of engagement
        </h2>
        <span
          aria-hidden="true"
          className="mt-2 block h-1 w-16 rounded-full bg-gold"
        />
        <p className="mt-3 text-[clamp(0.82rem,1.55vw,1rem)] leading-snug text-muted-foreground">
          <span className="block md:whitespace-nowrap">
            Enquiring about a programme you are interested in will open a
            conversation with our team.
          </span>
          <span className="block md:whitespace-nowrap">
            Your selected option will already be shared.
          </span>
        </p>

        <div className="mt-5 grid gap-2 lg:mt-5 lg:grid-cols-12 lg:gap-3">
          <article className="relative flex flex-col overflow-hidden rounded-2xl bg-ink text-cream lg:col-span-7">
            <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7 lg:max-w-[58%] lg:p-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                {featured.tag}
              </p>
              <h3 className="mt-1 font-display text-3xl font-medium text-cream md:text-4xl">
                {featured.weeks}
              </h3>
              <p className="mt-2 max-w-[36ch] text-sm leading-snug text-cream/80">
                {featured.body}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-cream/90">
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
                className="btn-gold relative z-10 mt-4 w-fit rounded-full px-5"
              >
                Ask about {featured.weeks}
                <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative h-40 sm:h-48 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]">
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
                className="flex flex-1 flex-col gap-3 rounded-2xl border border-forest/12 bg-white p-4 sm:flex-row sm:items-stretch"
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="text-xs font-semibold tracking-[0.14em] text-forest/60 uppercase">
                    {o.tag}
                  </p>
                  <h3 className="mt-0.5 font-display text-xl font-medium text-ink">
                    {o.weeks}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    {o.body}
                  </p>
                  <ul className="mt-1.5 flex flex-1 flex-col gap-0.5 text-sm leading-snug text-ink/80">
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
                    className="btn-outline mt-2 w-fit rounded-full px-4"
                  >
                    Ask about {o.weeks}
                    <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                  </Link>
                </div>
                <div className="overflow-hidden rounded-xl sm:w-28 sm:shrink-0">
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
          to="/programme"
          className="btn-solid mt-4 w-full"
          data-analytics="cta"
          data-analytics-place="home"
          data-analytics-label="View full details"
        >
          View full details
          <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

/* Full-bleed media band (not another split) */
function GalleryPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Picture
        {...photo1}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        aria-hidden="true"
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
            data-analytics="cta"
            data-analytics-place="home"
            data-analytics-label="Open gallery"
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

function Positioning() {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Stay Healthy with the Beat is a structured programme co-designed with
            care teams and delivered by a PhD-qualified arts practitioner with a
            senior clinical coordinator.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            <span className="font-medium text-ink">
              Rhythmic Sound for Health &amp; Wellbeing
            </span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Global Echoes Ireland
          </p>
        </div>
        <div className="aspect-video overflow-hidden rounded-xl bg-ink md:col-span-7">
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
      </div>
    </section>
  );
}
