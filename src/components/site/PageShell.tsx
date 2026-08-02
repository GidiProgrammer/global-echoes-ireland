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
      <div className="container-x pt-16 pb-14 md:pt-20 md:pb-20">
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
