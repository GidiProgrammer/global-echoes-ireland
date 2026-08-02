import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import johnImg from "@/assets/founder-john.jpg";
import natalieImg from "@/assets/founder-natalie.jpg";
import emmanuelImg from "@/assets/founder-emmanuel.jpg";
import circleImg from "@/assets/community-circle.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "The story, mission and founders of Global Echoes Ireland: arts, culture and wellbeing through therapeutic African drumming.",
      },
      { property: "og:title", content: "About | Global Echoes Ireland" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const founders = [
    {
      name: "Natalie Sone",
      role: "Programme Coordinator · Senior Clinical Nurse",
      img: natalieImg,
      bio: "Natalie coordinates the clinical alignment of every programme, drawing on years of senior nursing experience across Irish healthcare.",
    },
    {
      name: "Dr John Nutekpor",
      role: "Programme Lead · PhD Drumming Practitioner",
      img: johnImg,
      bio: "John leads African Rhythms sessions, blending traditional West African drumming with therapeutic practice.",
    },
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder · Strategy & Partnerships",
      img: emmanuelImg,
      bio: "Emmanuel leads partnerships with healthcare, cultural and community bodies across Ireland.",
    },
  ];

  return (
    <PageShell>
      <PageHero
        title={
          <>
            Culture, <span className="text-gold-ink">Care</span> &amp;{" "}
            <span className="text-maroon">Community</span>
          </>
        }
        intro="Global Echoes Ireland is a multi-strand arts, culture and wellbeing organisation. Our motto is Rhythm as Medicine: African Rhythms for Health & Wellbeing is the flagship healthcare programme."
      />

      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-bl-[4rem] rounded-tr-xl">
            <img
              src={circleImg}
              loading="lazy"
              alt="Community drumming circle"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-6">
          <h2 className="font-serif text-3xl md:text-4xl">
            Culture as a doorway to wellbeing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            Global Echoes Ireland was born from a simple belief: cultural
            traditions, carried with respect and rigour, can improve health,
            connection and belonging in Ireland&apos;s communities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            Today we work alongside HSE services, care providers and cultural
            organisations to deliver structured programmes with real health and
            social outcomes.
          </p>
          <Link to="/programme" className="btn-solid mt-8">
            Our programme
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl">
              What we stand for
            </h2>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
              Rhythm as Medicine is the through-line: culture carried with
              respect, and care delivered with clinical coordination.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-0">
            {[
              {
                title: "Mission",
                body: "To use rhythm, culture and community to improve wellbeing across Ireland's healthcare and social settings.",
              },
              {
                title: "Vision",
                body: "An Ireland where cultural heritage is a recognised part of everyday health and connection.",
              },
              {
                title: "Values",
                body: "Respect. Rigour. Cultural integrity. Clinical safety. Genuine human warmth.",
              },
            ].map((c, i) => (
              <li
                key={c.title}
                className="border-t border-forest/12 py-6 md:grid md:grid-cols-[7rem_1fr] md:gap-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-ink">
                  {String(i + 1).padStart(2, "0")} · {c.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground/85 md:mt-0 md:text-[1.05rem]">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl">
          The people behind the work
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {founders.map((f) => (
            <article key={f.name}>
              <img
                src={f.img}
                loading="lazy"
                alt={f.name}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <h3 className="mt-5 font-serif text-2xl">{f.name}</h3>
              <p className="mt-1 text-sm text-forest">{f.role}</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {f.bio}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
