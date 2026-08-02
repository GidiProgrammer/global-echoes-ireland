import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Drum,
  GraduationCap,
  Users,
} from "lucide-react";
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
          "Global Echoes Ireland | African Rhythms for Health & Wellbeing",
      },
      {
        name: "description",
        content:
          "Therapeutic African drumming programmes for HSE settings, care homes, schools and communities across Ireland.",
      },
      {
        property: "og:title",
        content:
          "Global Echoes Ireland | African Rhythms for Health & Wellbeing",
      },
      {
        property: "og:description",
        content:
          "Evidence-informed therapeutic drumming for Irish healthcare, care homes and community settings.",
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
      <Testimonial />
      <CTASection />
    </PageShell>
  );
}

/* Hero | full-bleed session imagery, bottom-anchored display type */
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
          <p className="mt-4 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-bright">
            <span className="h-px w-8 bg-gold-bright/60" aria-hidden="true" />
            Rhythm as Medicine
          </p>

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-x-16 xl:gap-x-24">
            <h1
              id="hero-heading"
              className="font-serif font-normal leading-[0.88] tracking-[-0.03em] text-[clamp(3rem,9vw,6rem)] text-balance lg:col-span-7"
            >
              <WordsPullUpMultiStyle
                segments={[
                  { text: "Healing Through", className: "text-cream" },
                  { text: "Rhythm", className: "italic text-gold-bright" },
                ]}
              />
            </h1>

            <div className="lg:col-span-5 lg:pb-2 xl:col-span-4 xl:col-start-9">
              <p className="max-w-[36ch] font-sans text-[0.9375rem] leading-[1.65] text-cream/80 md:text-base">
                Therapeutic African drumming for care homes, HSE services,
                schools and communities across Ireland. Culture, care and
                connection in one programme.
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
                  See how the programme works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 02 | About preview */
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
            Global Echoes Ireland bridges West African rhythmic heritage with
            clinical recovery. Our programmes are shaped by master drummers and
            senior clinicians for care homes, HSE services and communities.
          </p>
          <Link to="/about" className="btn-solid mt-8">
            About us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 03 | Outcomes teaser (full story on /programme) */
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
          {items.map((item, i) => (
            <li
              key={item.title}
              className="border-t border-forest/12 py-6 sm:odd:pr-8 sm:even:pl-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-ink">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
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

/* 04 | Services overview */
function ServicesOverview() {
  const services = [
    {
      title: "Care Homes & Healthcare",
      color: "text-forest",
      icon: Building2,
      img: heroImg,
      alt: "Drumming session in a care setting",
    },
    {
      title: "Community & Wellbeing",
      color: "text-gold-ink",
      icon: Users,
      img: circleImg,
      alt: "Community drumming circle",
    },
    {
      title: "Schools & Education",
      color: "text-maroon",
      icon: GraduationCap,
      img: handsImg,
      alt: "Hands on a djembe drum",
    },
    {
      title: "Festivals & Events",
      color: "text-forest",
      icon: Drum,
      img: rehabImg,
      alt: "Group rhythmic session",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
              Where we work
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              Programmes tailored to your setting, from clinical wards to
              community festivals.
            </p>
          </div>
          <Link to="/services" className="btn-outline">
            View services
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title} to="/services" className="group focus-ring-brand">
              <article>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-full bg-cream text-forest shadow-sm">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
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

/* 05 | Team preview */
function TeamPreview() {
  const founders = [
    {
      name: "Natalie Sone",
      role: "Programme Coordinator · Senior Clinical Nurse",
      img: natalieImg,
    },
    {
      name: "Dr John Nutekpor",
      role: "PhD Drumming Practitioner",
      img: johnImg,
    },
    {
      name: "Emmanuel Njume Sone",
      role: "Strategy & Partnerships",
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

/* 06 | Programme options */
function ProgrammeOptions() {
  const options = [
    {
      weeks: "4-Week",
      tag: "Introductory",
      interest: "4-week programme" as const,
      body: "A short structured engagement to introduce rhythmic wellbeing.",
      tone: "border border-forest/15 bg-white text-ink",
      tagClass: "text-forest",
      recommended: false,
    },
    {
      weeks: "8-Week",
      tag: "Most booked",
      interest: "8-week programme" as const,
      body: "Our standard programme: deep enough to see meaningful change.",
      tone: "bg-gold text-ink",
      tagClass: "text-ink/70",
      recommended: true,
    },
    {
      weeks: "12-Week",
      tag: "Advanced",
      interest: "12-week programme" as const,
      body: "Full therapeutic engagement with baseline and outcome reporting.",
      tone: "bg-maroon text-cream",
      tagClass: "text-gold-bright",
      recommended: false,
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
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {options.map((o) => (
            <article
              key={o.weeks}
              className={`relative flex h-full flex-col rounded-xl p-8 ${o.tone}`}
            >
              {o.recommended && (
                <span className="absolute right-4 top-4 rounded-[4px] bg-ink/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
                  Recommended
                </span>
              )}
              <CalendarDays className="h-7 w-7 opacity-90" strokeWidth={1.5} />
              <p
                className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${o.tagClass}`}
              >
                {o.tag}
              </p>
              <h3 className="mt-2 font-serif text-4xl">{o.weeks}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed opacity-90">
                {o.body}
              </p>
              <Link
                to="/contact"
                search={{ interest: o.interest }}
                className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-[6px] px-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors focus-ring-brand ${
                  o.recommended
                    ? "bg-ink text-cream hover:bg-ink/90"
                    : o.weeks === "12-Week"
                      ? "bg-cream text-maroon hover:bg-white"
                      : "bg-forest text-cream hover:bg-forest-deep"
                }`}
              >
                Enquire about {o.weeks}
              </Link>
            </article>
          ))}
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

/* 07 | Gallery preview */
function GalleryPreview() {
  const imgs = [
    { src: circleImg, className: "md:col-span-2 md:row-span-2", alt: "Community drumming circle" },
    { src: rehabImg, className: "", alt: "Rehabilitation session" },
    { src: handsImg, className: "", alt: "Hands on a djembe" },
    { src: heroImg, className: "md:col-span-2", alt: "Care home drumming session" },
  ];

  return (
    <section className="border-b border-forest/10 bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.02em] md:text-5xl">
              Moments from the Programme
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              Sessions across care homes, HSE settings and community groups.
            </p>
          </div>
          <Link to="/gallery" className="btn-outline">
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

/* 08 | Positioning line (no fabricated testimonials at launch) */
function Testimonial() {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-20 md:py-28">
        <figure className="mx-auto max-w-3xl text-center">
          <span
            className="font-serif text-6xl leading-none text-gold-ink"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 text-balance font-serif text-2xl leading-snug text-ink md:text-3xl lg:text-4xl">
            PhD-level drumming practice, coordinated by a senior clinical nurse,
            with culture, care and community in one programme.
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-ink">
              African Rhythms for Health &amp; Wellbeing
            </span>
            <span className="mx-2 text-forest/30">|</span>
            Global Echoes Ireland
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
