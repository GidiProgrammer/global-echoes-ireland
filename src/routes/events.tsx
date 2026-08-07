import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Music2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import circleImg from "@/assets/community-circle.jpg";
import rehabImg from "@/assets/rehab-session.jpg";
import handsImg from "@/assets/hands-drum.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Communities | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "CeltAfrik, Global Echoes Troubadours (GETROS) and Global Roots Brothers: community and cultural music initiatives from Global Echoes Ireland.",
      },
      {
        property: "og:title",
        content: "Events & Communities | Global Echoes Ireland",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

const initiatives = [
  {
    id: "celtafrik",
    title: "CeltAfrik",
    subtitle: "Connecting Cultures Through Sound and Rhythm",
    img: circleImg,
    alt: "Community musicians in a shared circle",
    body: [
      "CeltAfrik is a cross-cultural music initiative that brings together Celtic and African traditions to inspire creativity, dialogue, wellbeing, and global connection.",
      "Led by Founder and Artistic Director Dr John Nutekpor, CeltAfrik celebrates the shared humanity between Celtic and African musical traditions. Through the fusion of diverse sounds, rhythms, and storytelling practices, it creates spaces for creativity, intercultural dialogue, wellbeing, and belonging.",
      "Through performances, workshops, and community engagement programmes, CeltAfrik uses sound and rhythm as tools for connection: celebrating diversity while highlighting the shared experiences that unite people across Ireland and beyond.",
    ],
  },
  {
    id: "getros",
    title: "Global Echoes Troubadours",
    subtitle:
      "The GETROS: a journey of sound, stories, and cultural connection across borders",
    img: rehabImg,
    alt: "Musicians sharing rhythm in a community setting",
    body: [
      "Global Echoes Troubadours is a world music initiative that brings together musicians, storytellers, and communities to celebrate cultural diversity through sound, rhythm, and shared experiences.",
      "Inspired by the tradition of the troubadour as a travelling artist and storyteller, the project carries voices, melodies, and traditions across communities, creating connections between cultures and generations.",
    ],
  },
] as const;

const grBrothers = {
  id: "gr-brothers",
  title: "Global Roots Brothers",
  subtitle: "The GR Brothers: Rooted in Reggae, Connected Through Sound",
  img: handsImg,
  alt: "Hands on drums in a shared musical moment",
  body: [
    "Led by Nathan Harllels, Global Roots Brothers is a reggae-inspired music collective celebrating the power of roots music to unite people across cultures and generations.",
    "Drawing from the traditions of reggae, the initiative uses conscious lyrics, uplifting rhythms, and shared musical experiences to promote peace, unity, social awareness, and global connection.",
  ],
};

function Events() {
  return (
    <PageShell>
      <PageHero
        title="Events and community engagements"
        intro="Guided by Global Harmony Through Sound and Rhythm, our community strands create spaces for creativity, intercultural dialogue, wellbeing, belonging and networking opportunities across Ireland and beyond."
      />

      <section className="container-x space-y-20 py-16 md:space-y-28 md:py-24">
        {initiatives.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-28 grid items-center gap-10 md:grid-cols-12 md:gap-12"
          >
            <div
              className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className={`md:col-span-7 ${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              <h2 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                {item.title}
              </h2>
              <p className="mt-3 max-w-xl text-base font-medium leading-snug text-forest md:text-lg">
                {item.subtitle}
              </p>
              <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-foreground/85">
                {item.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Full-width break after two image+text splits */}
      <section
        id={grBrothers.id}
        className="scroll-mt-28 border-y border-forest/10 bg-white"
      >
        <div className="container-x py-16 md:py-24">
          <div className="overflow-hidden rounded-xl">
            <img
              src={grBrothers.img}
              alt={grBrothers.alt}
              className="aspect-[21/9] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
              {grBrothers.title}
            </h2>
            <p className="mt-3 text-base font-medium leading-snug text-forest md:text-lg">
              {grBrothers.subtitle}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              {grBrothers.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl">Upcoming events</h2>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
              Dates, venues and tickets will appear here as programmes and
              performances are confirmed. Enquiries are welcome in the meantime.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-xl border border-forest/12 bg-white px-8 py-12 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-[6px] bg-forest text-cream">
                <CalendarDays className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-2xl">
                Programme calendar coming soon
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Get in touch to host a workshop, performance or community
                engagement.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  search={{ interest: "Events & community" }}
                  className="btn-solid"
                >
                  Enquire about an event
                </Link>
                <Link to="/programme" className="btn-outline">
                  <Music2 className="h-4 w-4" strokeWidth={1.5} />
                  Stay Healthy with the Beat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
