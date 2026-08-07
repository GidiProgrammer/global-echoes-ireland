/** Settings we serve - not partnership endorsements. */

const settings = [
  "Care homes",
  "Schools & universities",
  "Communities",
  "Cultural events",
] as const;

export function PartnerLogos({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-2 gap-y-2 ${className}`}
      aria-label="Settings we work with"
    >
      {settings.map((label, i) => (
        <li key={label} className="flex items-center gap-2 text-sm text-[#5a5a5a]">
          {i > 0 && (
            <span
              className="hidden h-3 w-px bg-forest/20 sm:block"
              aria-hidden="true"
            />
          )}
          <span className="font-medium">{label}</span>
        </li>
      ))}
    </ul>
  );
}

export function WorkingWithStrip() {
  return (
    <section
      aria-labelledby="working-with-heading"
      className="border-b border-forest/12 bg-cream"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 lg:px-10 xl:px-14">
        <div className="shrink-0">
          <h2
            id="working-with-heading"
            className="font-serif text-xl text-ink md:text-2xl"
          >
            Where we work
          </h2>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-[#5c5c5c]">
            Wellbeing music programmes across Ireland and beyond.
          </p>
        </div>
        <PartnerLogos className="md:justify-end" />
      </div>
    </section>
  );
}
