import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageHead({
      title: "Blog | Global Echoes Ireland",
      description:
        "Programme updates, session highlights and community news from Global Echoes Ireland.",
      path: "/blog",
      robots: "noindex, follow",
    }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell>
      <section className="container-x pt-10 pb-16 md:pt-12 md:pb-20">
        <PageHero title="Blog" />
        <div className="mx-auto mt-10 max-w-xl rounded-xl border border-forest/10 bg-white px-8 py-14 text-center md:mt-12">
          <h2 className="font-serif text-3xl">First updates on the way</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We are at the start of our delivery phase. As taster sessions and
            programmes roll out, we will share highlights and news here.
          </p>
          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="btn-solid mt-8"
          >
            Book a Taster Session
          </Link>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
