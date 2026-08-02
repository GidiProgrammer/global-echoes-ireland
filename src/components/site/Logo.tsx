import { Link } from "@tanstack/react-router";

/** Editorial mast lockup: mark + single-line Instrument Serif wordmark. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const title = inverted ? "text-cream" : "text-forest";
  const markBg = inverted ? "bg-forest-deep" : "bg-forest";
  const ring = inverted
    ? "focus-visible:outline-cream"
    : "focus-visible:outline-forest";
  const stroke = inverted ? "var(--gold-bright)" : "var(--gold)";
  const cream = "var(--cream)";

  return (
    <Link
      to="/"
      aria-label="Global Echoes Ireland home"
      className={`group inline-flex min-h-11 max-w-full cursor-pointer items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${ring}`}
    >
      <span
        className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full sm:h-10 sm:w-10 ${markBg}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" className="h-[58%] w-[58%]" fill="none">
          <circle cx="20" cy="18" r="7" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M14 28c2.2-3.5 4.6-5 6-5s3.8 1.5 6 5"
            stroke={cream}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="18" r="2.2" fill={stroke} />
        </svg>
      </span>
      <span
        aria-hidden="true"
        className={`min-w-0 truncate font-serif text-[1.05rem] leading-none tracking-[-0.02em] sm:text-[1.2rem] md:text-[1.3rem] ${title}`}
      >
        Global Echoes Ireland
      </span>
    </Link>
  );
}
