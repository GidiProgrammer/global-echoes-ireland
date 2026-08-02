import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Landmark } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/funders")({
  head: () => ({
    meta: [
      { title: "For Funders | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "How African Rhythms for Health & Wellbeing aligns with Sláintecare, Healthy Ireland, Pobal, Arts Council, Creative Ireland and the HSE Intercultural Health Strategy.",
      },
      { property: "og:url", content: "/funders" },
    ],
    links: [{ rel: "canonical", href: "/funders" }],
  }),
  component: Funders,
});

const bodies = [
  {
    name: "Sláintecare",
    body: "Community-based, wellbeing-oriented care that supports independent living and reduces demand on acute services.",
  },
  {
    name: "Healthy Ireland",
    body: "Preventative, participatory wellbeing supporting mental, social and cultural health.",
  },
  {
    name: "Pobal",
    body: "Community development, social inclusion and cross-cultural participation across Irish communities.",
  },
  {
    name: "Arts Council",
    body: "High-quality cultural practice with meaningful public engagement and access.",
  },
  {
    name: "Creative Ireland",
    body: "Culture, creativity and wellbeing embedded in daily life across the country.",
  },
  {
    name: "HSE Intercultural Health Strategy",
    body: "Culturally-responsive health engagement across Ireland's diverse populations.",
  },
];

function Funders() {
  return (
    <PageShell>
      <PageHero
        title="Designed to align with national strategy"
        intro="African Rhythms for Health & Wellbeing sits at the intersection of health, culture and community, mapped to the frameworks funders already work with."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bodies.map((b) => (
            <article
              key={b.name}
              className="rounded-xl border border-forest/10 bg-white p-8"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-soft text-forest">
                <Landmark className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-xl">{b.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 md:pb-24">
        <div className="grid gap-6 rounded-xl bg-forest p-8 text-cream md:grid-cols-3 md:p-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl">
              Download the Programme Profile
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/80">
              Request our Programme Profile PDF: outcomes, structure, strategy
              alignment and case examples ready for grant applications and board
              briefings. We will email it to you from {CONTACT_EMAIL}.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:justify-center">
            <Link
              to="/contact"
              search={{ interest: "Programme Profile (funders)" }}
              className="btn-gold"
            >
              <Download className="h-4 w-4" /> Request Programme Profile
            </Link>
            <Link
              to="/contact"
              search={{ interest: "General enquiry" }}
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[6px] border border-cream/40 px-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:bg-cream/10 focus-ring-brand-on-dark"
            >
              <FileText className="h-4 w-4" /> Ask for case examples
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
