import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarBlank } from "@phosphor-icons/react";
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
  drJohn,
  emmanuelSone,
  farisAmin,
  festivalsEvents,
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
    },
    {
      title: "Connection",
      body: "A way for residents, staff and families to take part in the same activity.",
    },
    {
      title: "Engagement",
      body: "Pacing that can flex for different energy levels and attention spans.",
    },
    {
      title: "Movement",
      body: "Drumming and percussion that can be done seated or standing.",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white py-16 md:py-24">
      <div className="container-x flex flex-col justify-center">
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
      img: careHomes,
      alt: "Caregiver holding an older person's hands in a care setting",
      span: "md:col-span-7",
    },
    {
      title: "Community & Wellbeing",
      hash: "community",
      img: communityWellbeing,
      alt: "Facilitated drumming circle with older participants",
      span: "md:col-span-5",
    },
    {
      title: "Schools, Universities & Education",
      hash: "schools",
      img: schoolsEducation,
      alt: "School percussion workshop with facilitator and pupils around djembes",
      span: "md:col-span-5",
    },
    {
      title: "Festivals & Events",
      hash: "festivals",
      img: festivalsEvents,
      alt: "Outdoor festival performance with djembe and audience",
      span: "md:col-span-7",
    },
  ] as const;

  return (
    <section className="border-b border-forest/10 bg-cream py-16 md:py-24">
      <div className="container-x flex flex-col justify-center">
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
                  <Picture
                    {...s.img}
                    alt={s.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
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
      name: "Natalie Sone",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieRodgers,
      imgClass:
        "aspect-square w-full object-cover object-[center_38%] sm:aspect-[5/4]",
    },
    {
      name: "Faris Amin",
      role: "Community Outreach Coordinator and Therapist",
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
    <section className="border-b border-forest/10 bg-forest text-cream py-16 md:py-24">
      <div className="container-x flex flex-col justify-center">
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
                className="flex min-h-0 flex-1 flex-col rounded-xl border border-cream/20 bg-forest-deep/50 p-5 text-cream md:p-6 lg:p-7"
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
