import { Link } from "@tanstack/react-router";
import heroCurveImg from "@/assets/hero-care-drumming.jpg";

interface CTASectionProps {
  headline?: string;
  body?: string;
  interest?: string;
  showDetails?: boolean;
}

export function CTASection({
  headline = "Book a taster for your care home or community",
  body = "A short on-site session for care homes, schools, universities and community groups across Ireland.",
  interest = "Taster session",
  showDetails = true
}: CTASectionProps = {}) {
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
          Global harmony through sound and creative collaborations
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-cream md:text-5xl lg:text-6xl">
          {headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80">
          {body}
        </p>
        {showDetails && interest === "Taster session" && (
          <p className="mx-auto mt-3 max-w-xl text-xs text-cream/65">
            A free 45-minute on-site session with all instruments provided. No prior experience is needed.
          </p>
        )}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            search={{ interest }}
            className="btn-gold"
          >
            {interest === "Taster session" ? "Book a Taster Session" : `Enquire about ${interest}`}
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
