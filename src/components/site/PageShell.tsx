import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[6px] focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHero({
  title,
  intro,
  children,
  className = "",
  headingId,
}: {
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  headingId?: string;
}) {
  const hasAside = Boolean(intro || children);

  return (
    <header className={`page-title ${className}`.trim()}>
      <div
        className={
          hasAside
            ? "flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12"
            : undefined
        }
      >
        <div className="min-w-0">
          <h1
            id={headingId}
            className="max-w-[16ch] text-balance font-display text-[2.25rem] font-medium leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl lg:text-[3.35rem]"
          >
            {title}
          </h1>
          <span className="page-title-stave" aria-hidden="true" />
        </div>
        {hasAside ? (
          <div className="flex max-w-sm shrink-0 flex-col items-start gap-4 md:items-end md:pb-1">
            {intro ? (
              <p className="text-sm leading-relaxed text-ink/80 md:text-right">
                {intro}
              </p>
            ) : null}
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
