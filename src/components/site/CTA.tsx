import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import heroCurveImg from "@/assets/hero-drumming-curve.jpg";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <img
        src={heroCurveImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest/75" aria-hidden="true" />
      <div className="container-x relative py-20 text-center md:py-28">
        <p className="mx-auto mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright">
          Rhythm as Medicine
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
          Ready to Bring Rhythm to Your Community?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80">
          Book a taster session for your care home, HSE service, school or
          community group.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" search={{ interest: "Taster session" }} className="btn-gold">
            Book a Taster Session
          </Link>
          <Link
            to="/programme"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[6px] border border-cream/50 bg-transparent px-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-ring-brand-on-dark"
          >
            Explore the Programme
          </Link>
        </div>
      </div>
    </section>
  );
}
