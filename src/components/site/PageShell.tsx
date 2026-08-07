import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({
  children,
  overlayNav = false,
}: {
  children: ReactNode;
  overlayNav?: boolean;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[6px] focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Header overlay={overlayNav} />
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
}: {
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x pt-10 pb-8 md:pt-12 md:pb-10">
        <h1 className="max-w-3xl font-display text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/80">
            {intro}
          </p>
        )}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
