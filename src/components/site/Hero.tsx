import { Link } from "@tanstack/react-router";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { Picture } from "./Picture";
import type { HeroContent, HeroLink } from "@/lib/hero";

function HeroCta({
  cta,
  className,
  showArrow = false,
}: {
  cta: HeroLink;
  className: string;
  showArrow?: boolean;
}) {
  const label = (
    <>
      {cta.label}
      {showArrow ? (
        <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
      ) : null}
    </>
  );

  if (cta.to === "/contact") {
    return (
      <Link
        to="/contact"
        search={cta.search ?? { interest: undefined }}
        className={className}
        data-analytics="cta"
        data-analytics-place="hero"
        data-analytics-label={cta.label}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={cta.to}
      hash={cta.hash}
      className={className}
      data-analytics="cta"
      data-analytics-place="hero"
      data-analytics-label={cta.label}
    >
      {label}
    </Link>
  );
}

export function Hero({
  image,
  imageAlt,
  tagline,
  subhead,
  primaryCta,
  secondaryCta,
  scrollTargetId,
}: HeroContent) {
  const accent = "creative collaborations";
  const accentAt = tagline.lastIndexOf(accent);
  const taglineLead =
    accentAt >= 0 ? tagline.slice(0, accentAt).trimEnd() : tagline;
  const taglineAccent = accentAt >= 0 ? accent : "";

  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="hero-pin sticky top-0 z-0 -mt-[var(--header-h)] h-[100dvh] overflow-hidden bg-forest-deep"
    >
      <Picture
        {...image}
        alt={imageAlt}
        className="hero-pin-media absolute inset-0 h-full w-full object-cover object-left"
        priority
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />

      <div className="hero-copy-fade relative z-10 flex h-full items-end">
        <div className="hero-copy-field mx-auto flex w-full max-w-[90rem] flex-col px-5 pb-16 pt-[calc(var(--header-h)+1.5rem)] sm:px-6 sm:pb-20 md:px-8 lg:px-10 lg:pb-24 xl:px-14">
          <h1
            id="hero-heading"
            className="max-w-[22rem] text-pretty font-display text-[2.35rem] font-medium leading-[1.08] tracking-[-0.03em] text-cream sm:max-w-[28rem] sm:text-5xl md:max-w-[36rem] md:text-6xl lg:max-w-[44rem] lg:text-[4.15rem] xl:max-w-[48rem] xl:text-[4.5rem]"
          >
            {taglineLead}
            {taglineAccent ? (
              <>
                {" "}
                <span className="text-gold-bright">{taglineAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 max-w-[40rem] font-sans text-base leading-relaxed text-cream/90 sm:mt-6 sm:text-lg md:max-w-[46rem] md:text-xl lg:mt-7">
            {subhead}
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 md:w-auto md:flex-row md:flex-wrap md:items-center">
            <HeroCta
              cta={primaryCta}
              showArrow
              className="btn-hero-primary w-full md:w-auto"
            />
            <HeroCta
              cta={secondaryCta}
              className="btn-hero-secondary w-full md:w-auto"
            />
          </div>
        </div>
      </div>

      <a
        href={`#${scrollTargetId}`}
        className="hero-copy-fade hero-scroll-cue absolute bottom-6 left-1/2 z-10 hidden min-h-11 min-w-11 -translate-x-1/2 items-center justify-center text-white/80 focus-ring-brand-on-dark lg:flex"
        aria-label="Continue to about"
      >
        <CaretDown className="h-5 w-5" weight="bold" aria-hidden="true" />
      </a>
    </section>
  );
}
