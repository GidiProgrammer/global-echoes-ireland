import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "Programme updates, session highlights and community news from Global Echoes Ireland.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
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
            search={{ interest: "General enquiry" }}
            className="btn-solid mt-8"
          >
            Get in touch
          </Link>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
