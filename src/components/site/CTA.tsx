import { Link } from "@tanstack/react-router";
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
        <p className="mx-auto max-w-2xl text-sm font-medium text-gold-bright">
          Global Harmony through Sound and creative collaborations
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-cream md:text-5xl lg:text-6xl">
          Book a taster for your care home or community
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80">
          A short on-site session for care homes, schools, universities and
          community groups across Ireland.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="btn-gold"
          >
            Book a Taster Session
          </Link>
          <Link
            to="/events"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[6px] border border-cream/50 bg-transparent px-5 text-sm font-medium text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-ring-brand-on-dark"
          >
            Events &amp; Communities
          </Link>
        </div>
      </div>
    </section>
  );
}
