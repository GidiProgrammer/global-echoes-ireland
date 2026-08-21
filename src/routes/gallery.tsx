import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { pageHead } from "@/lib/site";
import {
  photo1,
  schoolsEducation,
  video2Poster,
  video3Poster,
  video4Poster,
  video5Poster,
} from "@/lib/responsive-images";
import { Picture } from "@/components/site/Picture";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: "Gallery | Global Echoes Ireland",
      description:
        "Photography and films from Global Echoes Ireland sessions in schools, communities and cultural programmes.",
      path: "/gallery",
    }),
  component: Gallery,
});

const photos = [
  {
    image: photo1,
    alt: "Children seated in a semi-circle with djembe drums during a Global Echoes Ireland workshop",
    caption: "African percussion and cultural information workshop with pupils.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10] md:aspect-[5/3]",
  },
  {
    image: schoolsEducation,
    alt: "School percussion workshop with facilitator and pupils around djembes",
    caption: "Schools, universities and education.",
    span: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-auto md:min-h-full",
  },
] as const;

const films = [
  {
    src: "/media/video2.mp4",
    poster: video2Poster.src,
    orientation: "landscape" as const,
    title: "Africa Day 2026",
    caption:
      "CeltAfrik performs to audience in Irish-African instrumental piece blend.",
    transcript:
      "Performance footage from Africa Day 2026 showing CeltAfrik blending Celtic and African instruments for a live audience.",
  },
  {
    src: "/media/video3.mp4",
    poster: video3Poster.src,
    orientation: "landscape" as const,
    title: "African Percussion Workshop",
    caption:
      "A warm up session with pupils of St. Brendan's National School, Loughshinny.",
    transcript:
      "Workshop warm-up with pupils at St. Brendan's National School, Loughshinny. Facilitators lead drumming and rhythm exercises with djembes in a school setting.",
  },
  {
    src: "/media/video4.mp4",
    poster: video4Poster.src,
    orientation: "portrait" as const,
    title: "Community creative arts",
    caption: "Engagement with cluster of schools in Balbriggan.",
    transcript:
      "Creative arts engagement with a cluster of schools in Balbriggan. Participants explore percussion and collaborative rhythm in a community programme.",
  },
  {
    src: "/media/video5.mp4",
    poster: video5Poster.src,
    orientation: "portrait" as const,
    title: "Senegal cultural heritage",
    caption: "Interactive stage performance with audience.",
    transcript:
      "Interactive stage performance drawing on Senegalese cultural heritage. Musicians invite audience participation in rhythm and call-and-response.",
  },
] as const;

function filmDomId(title: string, part: "title" | "transcript") {
  return `film-${title.replace(/\s+/g, "-").toLowerCase()}-${part}`;
}

function Gallery() {
  return (
    <PageShell>
      <PageHero
        title="Gallery"
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
              className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl"
            >
              Workshop Sessions
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              African percussion and cultural information workshop with pupils.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-12 md:gap-6">
            {photos.map((photo) => (
              <li key={photo.alt} className={photo.span}>
                <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-forest/10 bg-white">
                  <Picture
                    {...photo.image}
                    alt={photo.alt}
                    className={`${photo.aspect} w-full object-cover object-center`}
                  />
                  <figcaption className="px-5 py-3 text-sm text-muted-foreground md:px-6">
                    {photo.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
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
              className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl"
            >
              Participatory and performance dialogue
            </h2>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {films.map((film) => {
              const titleId = filmDomId(film.title, "title");
              const transcriptId = filmDomId(film.title, "transcript");

              return (
              <li key={film.title}>
                <article className="overflow-hidden rounded-xl border border-forest/10 bg-cream">
                  <div className="aspect-video bg-ink">
                    <video
                      className={
                        film.orientation === "portrait"
                          ? "h-full w-full object-contain"
                          : "h-full w-full object-cover"
                      }
                      controls
                      playsInline
                      preload="none"
                      poster={film.poster}
                      aria-labelledby={titleId}
                      aria-describedby={transcriptId}
                    >
                      <source src={film.src} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                  <div className="px-5 py-4 md:px-6">
                    <h3 id={titleId} className="font-display text-xl font-medium">
                      {film.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {film.caption}
                    </p>
                    <details className="mt-4 text-sm">
                      <summary className="cursor-pointer font-medium text-forest">
                        Read transcript
                      </summary>
                      <p
                        id={transcriptId}
                        className="mt-2 leading-relaxed text-muted-foreground"
                      >
                        {film.transcript}
                      </p>
                    </details>
                  </div>
                </article>
              </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
