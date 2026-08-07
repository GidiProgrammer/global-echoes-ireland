import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import workPhoto from "@/assets/photo1.jpg";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import video4 from "@/assets/video4.mp4";
import video5 from "@/assets/video5.mp4";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "Work done gallery from Global Echoes Ireland: session photography and films from schools, communities and cultural programmes.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const films = [
  {
    src: video2,
    title: "Session film 01",
    caption: "Rhythm in the room: shared drumming with young participants.",
  },
  {
    src: video3,
    title: "Session film 02",
    caption: "Culture and connection through live percussion.",
  },
  {
    src: video4,
    title: "Session film 03",
    caption: "Facilitated group work from our community programmes.",
  },
  {
    src: video5,
    title: "Session film 04",
    caption: "Moments from delivery across Ireland.",
  },
] as const;

function Gallery() {
  return (
    <PageShell>
      <PageHero
        title="Work done"
        intro="Photography and session films from Global Echoes Ireland programmes in schools, communities and cultural settings."
      />

      <section
        id="work-done"
        aria-labelledby="work-done-heading"
        className="scroll-mt-28 border-b border-forest/10 bg-cream"
      >
        <div className="container-x py-12 md:py-16">
          <div className="max-w-2xl">
            <h2
              id="work-done-heading"
              className="font-serif text-3xl tracking-[-0.02em] md:text-4xl"
            >
              In the room
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              A school drumming session with facilitators and young people,
              captured during programme delivery.
            </p>
          </div>

          <figure className="mt-10 overflow-hidden rounded-xl border border-forest/10 bg-white">
            <img
              src={workPhoto}
              alt="Children seated in a semi-circle with djembe drums during a Global Echoes Ireland workshop, with facilitators in traditional dress"
              className="aspect-[16/10] w-full object-cover object-center"
              width={1600}
              height={1000}
              loading="eager"
              decoding="async"
            />
            <figcaption className="px-5 py-4 text-sm text-muted-foreground md:px-6">
              School workshop: shared rhythm, culture and creative collaboration.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="session-films"
        aria-labelledby="session-films-heading"
        className="bg-white"
      >
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <h2
              id="session-films-heading"
              className="font-serif text-3xl tracking-[-0.02em] md:text-4xl"
            >
              Session films
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Short films from our work. Press play to watch. Sound on where you
              can.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {films.map((film) => (
              <li key={film.title}>
                <article className="overflow-hidden rounded-xl border border-forest/10 bg-cream">
                  <div className="aspect-video bg-ink">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster={workPhoto}
                      aria-label={film.title}
                    >
                      <source src={film.src} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                  <div className="px-5 py-4 md:px-6">
                    <h3 className="font-serif text-xl">{film.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {film.caption}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
