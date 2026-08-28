import { Link } from "@tanstack/react-router";
import { Picture } from "./Picture";
import { heroCareDrumming } from "@/lib/responsive-images";
import type { InterestOption } from "@/routes/contact";

interface CTASectionProps {
  headline?: string;
  body?: string;
  interest?: InterestOption;
  showDetails?: boolean;
  showBookCta?: boolean;
  showTagline?: boolean;
}

export function CTASection({
  headline = "Book a taster for your care home or community",
  body = "A short on-site session for care homes, schools, universities and community groups across Ireland.",
  interest = "Taster session",
  showDetails = true,
  showBookCta = true,
  showTagline = false,
}: CTASectionProps = {}) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <Picture
        {...heroCareDrumming}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-forest/75" aria-hidden="true" />
      <div className="container-x relative py-16 md:py-20">
        <div className="max-w-xl">
          {showTagline ? (
            <p className="text-sm font-medium text-gold-bright">
              Global harmony through sound and creative collaborations
            </p>
          ) : null}
          <h2
            className={`font-display text-3xl font-medium leading-[1.12] text-cream md:text-4xl ${
              showTagline ? "mt-4" : ""
            }`}
          >
            {headline}
          </h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-cream/80">
            {body}
          </p>
          {showDetails && interest === "Taster session" && (
            <p className="mt-3 text-sm text-cream/70">
              A free 45-minute on-site session with all instruments provided. No
              prior experience is needed.
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {showBookCta ? (
              <Link
                to="/contact"
                search={{ interest }}
                className="btn-gold"
                data-analytics="cta"
                data-analytics-place="cta-band"
                data-analytics-label={
                  interest === "Taster session"
                    ? "Book a Taster Session"
                    : `Enquire about ${interest}`
                }
              >
                {interest === "Taster session"
                  ? "Book a Taster Session"
                  : `Enquire about ${interest}`}
              </Link>
            ) : null}
            <Link
              to="/events"
              className={
                showBookCta
                  ? "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[6px] border border-cream/50 bg-transparent px-5 text-sm font-medium text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-ring-brand-on-dark"
                  : "btn-gold"
              }
            >
              Events &amp; Communities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
