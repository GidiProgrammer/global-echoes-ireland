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
    }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell>
      <PageHero
        title="Stories and programme updates"
        intro="Session highlights, events and reflections from Global Echoes Ireland, coming as delivery begins."
      />
      <section className="container-x py-12 md:py-16">
        <div className="mx-auto max-w-xl rounded-xl border border-forest/10 bg-white px-8 py-14 text-center">
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
