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
      >
        {label}
      </Link>
    );
  }

  return (
    <Link to={cta.to} hash={cta.hash} className={className}>
      {label}
    </Link>
  );
}

export function Hero({
  image,
  imageAlt,
  name,
  tagline,
  subhead,
  trustLine,
  proofLine,
  phones,
  primaryCta,
  secondaryCta,
  scrollTargetId,
}: HeroContent) {
  const taglineBreak = tagline.indexOf(" and ");
  const taglineLead =
    taglineBreak >= 0 ? tagline.slice(0, taglineBreak) : tagline;
  const taglineRest =
    taglineBreak >= 0 ? tagline.slice(taglineBreak + 1) : "";

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
            className="max-w-[18ch] font-display text-[1.85rem] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
          >
            {name}
          </h1>
          <p className="mt-3 max-w-[22ch] font-display text-xl font-medium leading-[1.2] tracking-[-0.02em] text-white sm:mt-4 sm:max-w-[28ch] sm:text-2xl lg:text-[1.75rem]">
            {taglineLead}
            {taglineRest ? (
              <>
                <br />
                {taglineRest}
              </>
            ) : null}
          </p>
          <p className="mt-4 max-w-[42ch] font-sans text-sm leading-relaxed text-white/95 sm:mt-5 sm:text-base">
            {subhead}
          </p>
          <p className="mt-4 max-w-[46ch] font-sans text-sm font-medium leading-snug text-white">
            {trustLine}
          </p>
          <p className="mt-1.5 max-w-[46ch] font-sans text-sm leading-snug text-white/90 sm:mt-2">
            {proofLine}
          </p>
          <div className="mt-5 flex w-full flex-col gap-3 sm:mt-7 md:w-auto md:flex-row md:flex-wrap md:items-center">
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
          {phones.length > 0 ? (
            <p className="mt-1 flex min-h-11 flex-wrap items-center gap-x-1 text-sm font-normal text-white/85">
              <span>or call</span>
              {phones.map((phone, i) => (
                <span key={phone.href} className="inline-flex items-center">
                  {i > 0 ? <span className="px-1">/</span> : null}
                  <a
                    href={phone.href}
                    className="inline-flex min-h-11 items-center underline-offset-2 hover:underline focus-ring-brand-on-dark"
                  >
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>
          ) : null}
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
