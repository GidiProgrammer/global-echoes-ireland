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
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
          Ready to Bring Global Echoes to your community.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80">
          Book a taster for your care home, school, university or community
          group, or explore our events and cultural initiatives.
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
        <p className="mt-6">
          <Link
            to="/programme"
            className="text-sm font-medium text-cream/75 underline-offset-4 transition-colors hover:text-gold-bright hover:underline focus-ring-brand-on-dark"
          >
            Explore Stay Healthy with the Beat
          </Link>
        </p>
      </div>
    </section>
  );
}
