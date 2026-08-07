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
          "Mission, vision and founders of Global Echoes Ireland, building global harmony through sound and rhythm.",
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
      name: "Natalie Rodgers",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieImg,
      bio: "Natalie coordinates the clinical alignment of every programme, drawing on years of senior nursing experience across Irish healthcare.",
    },
    {
      name: "Dr John Nutekpor",
      role: "Founder & Artistic Director, PhD Arts Practitioner",
      img: johnImg,
      bio: "Dr Nutekpor leads events and directs Global Echoes artistic initiatives, creating intercultural performances and fostering creative collaborations that connect communities across the globe.",
    },
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder, Strategy & Partnerships",
      img: emmanuelImg,
      bio: "Emmanuel leads partnerships with care providers, cultural organisations and academic institutions across Ireland and beyond.",
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
        intro="Guided by Global Harmony through Sound and creative collaborations, we deliver structured wellbeing music experiences across care homes, schools, communities and HEA institutions."
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
            connection and belonging in global communities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            Today we work alongside care providers, cultural organisations and
            academic institutions to deliver structured programmes with real
            health and social outcomes.
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
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
              Through sound and rhythms, we build global harmony: celebrating
              culture, promoting wellbeing, and connecting communities through
              compassionate, coordinated care.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-0">
            {[
              {
                title: "Vision",
                body: "To build global harmony through sound and rhythm, using music and cultural expression to promote wellbeing, connection, and belonging across Ireland and global communities.",
              },
              {
                title: "Mission",
                body: "To harness the transformative power of rhythm, culture, and community to promote wellbeing, connection, and inclusion across Ireland and global communities.",
              },
              {
                title: "Core values",
                body: "We honour diverse traditions, voices, and lived experiences, using music as a bridge for intercultural understanding and inclusion.",
              },
            ].map((c) => (
              <li
                key={c.title}
                className="border-t border-forest/12 py-6 md:grid md:grid-cols-[7rem_1fr] md:gap-8"
              >
                <h3 className="font-serif text-xl text-forest">{c.title}</h3>
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
