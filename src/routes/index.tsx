import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { WordsPullUpMultiStyle } from "@/components/ui/words-pull-up";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { WorkingWithStrip } from "@/components/site/PartnerLogos";
import heroCurveImg from "@/assets/hero-drumming-curve.jpg";
import heroCurveImg800 from "@/assets/hero-drumming-curve-800.jpg";
import heroCurveWebp from "@/assets/hero-drumming-curve.webp";
import heroCurveWebp800 from "@/assets/hero-drumming-curve-800.webp";
import heroCurveAvif from "@/assets/hero-drumming-curve.avif";
import heroCurveAvif800 from "@/assets/hero-drumming-curve-800.avif";
import heroImg from "@/assets/hero-care-drumming.jpg";
import handsImg from "@/assets/hands-drum.jpg";
import circleImg from "@/assets/community-circle.jpg";
import rehabImg from "@/assets/rehab-session.jpg";
import johnImg from "@/assets/founder-john.jpg";
import natalieImg from "@/assets/founder-natalie.jpg";
import emmanuelImg from "@/assets/founder-emmanuel.jpg";

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
          "Culture, care and connection through structured wellbeing music. Building Global Connections Through Music, Culture, and Creative Collaboration.",
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
      <WorkingWithStrip />
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
      <picture>
        <source
          type="image/avif"
          srcSet={`${heroCurveAvif800} 800w, ${heroCurveAvif} 1400w`}
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet={`${heroCurveWebp800} 800w, ${heroCurveWebp} 1400w`}
          sizes="100vw"
        />
        <img
          src={heroCurveImg}
          srcSet={`${heroCurveImg800} 800w, ${heroCurveImg} 1400w`}
          sizes="100vw"
          alt="Hands playing a djembe drum during a Global Echoes Ireland session"
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
          width={1400}
          height={1463}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />
      <div className="hero-arc" aria-hidden="true" />

      <div className="relative z-10 mt-auto w-full">
        <div className="mx-auto max-w-[90rem] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-8 lg:px-10 lg:pb-24 xl:px-14">
          <p className="font-serif text-[clamp(1.85rem,4vw,2.85rem)] leading-none tracking-[-0.025em] text-cream">
            Global Echoes Ireland
          </p>

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-x-16 xl:gap-x-24">
            <h1
              id="hero-heading"
              className="max-w-[20ch] font-serif font-normal leading-[0.92] tracking-[-0.03em] text-[clamp(2.35rem,6.5vw,4.75rem)] text-balance sm:max-w-none lg:col-span-7"
            >
              <WordsPullUpMultiStyle
                segments={[
                  { text: "Global Harmony", className: "text-cream" },
                  {
                    text: "through Sound",
                    className: "italic text-gold-bright",
                  },
                  {
                    text: "and creative collaborations",
                    className: "text-cream",
                  },
                ]}
              />
            </h1>

            <div className="lg:col-span-5 lg:pb-2 xl:col-span-4 xl:col-start-9">
              <p className="max-w-[38ch] font-sans text-[0.9375rem] leading-[1.65] text-cream/80 md:text-base">
                Wellbeing music programmes for care homes, schools, universities
                and communities across Ireland and beyond.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  to="/contact"
                  search={{ interest: "Taster session" }}
                  className="btn-gold group"
                >
                  Book a Taster Session
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </Link>
                <Link
                  to="/programme"
                  className="inline-flex min-h-11 items-center border-b border-cream/70 pb-0.5 font-sans text-sm font-medium text-cream transition-colors duration-200 hover:border-gold-bright hover:text-gold-bright focus-ring-brand-on-dark"
                >
                  See Stay Healthy with the Beat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-bl-[4rem] rounded-tr-[1rem] bg-forest/5">
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
          <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
            <span className="text-forest">Culture, </span>
            <span className="text-gold-ink">Care &amp; </span>
            <span className="text-maroon">Community</span>
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
      <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
            Why rhythm works here
          </h2>
          <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-muted-foreground">
            Therapeutic outcomes for healthcare, care and community settings.
          </p>
          <Link to="/programme" className="btn-outline mt-8">
            See the full programme
          </Link>
        </div>
        <ul className="md:col-span-8 grid gap-0 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="border-t border-forest/12 py-6 sm:odd:pr-8 sm:even:pl-8"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const services = [
    {
      title: "Care Homes & Healthcare",
      hash: "care-homes",
      color: "text-forest",
      img: heroImg,
      alt: "Drumming session in a care setting",
    },
    {
      title: "Community & Wellbeing",
      hash: "community",
      color: "text-gold-ink",
      img: circleImg,
      alt: "Community drumming circle",
    },
    {
      title: "Schools, Universities & Education",
      hash: "schools",
      color: "text-maroon",
      img: handsImg,
      alt: "Hands on a djembe drum",
    },
    {
      title: "Festivals & Events",
      hash: "festivals",
      color: "text-forest",
      img: rehabImg,
      alt: "Group rhythmic session",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
            Where we work
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            From care homes and universities to festivals and community
            circles. Programmes tailored to your setting.
          </p>
          <Link to="/services" className="btn-outline mt-6">
            View services
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              hash={s.hash}
              className="group focus-ring-brand"
            >
              <article>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <h3 className={`mt-4 font-serif text-xl ${s.color}`}>
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

function TeamPreview() {
  const founders = [
    {
      name: "Natalie Rodgers",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieImg,
    },
    {
      name: "Dr John Nutekpor",
      role: "Founder & Artistic Director, PhD Arts Practitioner",
      img: johnImg,
    },
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder, Strategy & Partnerships",
      img: emmanuelImg,
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-20 md:py-28">
        <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
          The people behind the work
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Clinical coordination, cultural mastery and partnership leadership in
          one team.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {founders.map((f) => (
            <article key={f.name}>
              <img
                src={f.img}
                alt={f.name}
                className="aspect-[4/5] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <h3 className="mt-5 font-serif text-2xl">{f.name}</h3>
              <p className="mt-1 text-sm text-forest">{f.role}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/about" className="btn-outline">
            Meet the team
          </Link>
        </div>
      </div>
    </section>
  );
}

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
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
            Programme options
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Choose a depth of engagement. Enquiring opens contact with that
            option already selected.
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
              {featured.body}
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
            {others.map((o) => (
              <article
                key={o.weeks}
                className="flex flex-1 flex-col border border-forest/15 bg-white p-6 text-ink md:p-7"
              >
                <p className="text-sm font-medium text-forest">{o.tag}</p>
                <h3 className="mt-1 font-serif text-3xl">{o.weeks}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
                <Link
                  to="/contact"
                  search={{ interest: o.interest }}
                  className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-[6px] bg-forest px-4 text-sm font-medium text-cream transition-colors hover:bg-forest-deep focus-ring-brand"
                >
                  Enquire about {o.weeks}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/programme" className="btn-outline">
            View full details
          </Link>
          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="text-sm font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
          >
            Book a taster instead
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [
    {
      src: circleImg,
      className: "md:col-span-2 md:row-span-2",
      alt: "Community drumming circle",
    },
    { src: rehabImg, className: "", alt: "Rehabilitation session" },
    { src: handsImg, className: "", alt: "Hands on a djembe" },
    {
      src: heroImg,
      className: "md:col-span-2",
      alt: "Care home drumming session",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
            Moments from the programme
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            Atmosphere from our practice for layout. Consented photos and video
            from taster sessions will replace these as delivery begins.
          </p>
          <Link to="/gallery" className="btn-outline mt-6">
            View Gallery
          </Link>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {imgs.map((im) => (
            <Link
              key={im.alt}
              to="/gallery"
              className={`group overflow-hidden rounded-xl focus-ring-brand ${im.className}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-balance font-serif text-2xl leading-snug text-ink md:text-3xl lg:text-4xl">
            Stay Healthy with the Beat is a structured programme co-designed with
            care teams and delivered by a PhD-qualified arts practitioner with
            senior clinical coordination.
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
