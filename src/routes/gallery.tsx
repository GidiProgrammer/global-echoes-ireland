import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import heroImg from "@/assets/hero-care-drumming.jpg";
import handsImg from "@/assets/hands-drum.jpg";
import circleImg from "@/assets/community-circle.jpg";
import rehabImg from "@/assets/rehab-session.jpg";
import heroCurveImg from "@/assets/hero-drumming-curve.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "Photos and moments from African Rhythms for Health & Wellbeing sessions across Ireland.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const imgs = [
    {
      src: heroImg,
      span: "md:col-span-2 md:row-span-2",
      alt: "Care home resident smiling with a djembe",
    },
    { src: circleImg, span: "", alt: "Community drumming circle" },
    { src: handsImg, span: "", alt: "Hands on a djembe drum" },
    { src: rehabImg, span: "md:col-span-2", alt: "Rehabilitation session" },
    {
      src: heroCurveImg,
      span: "md:col-span-2",
      alt: "Close-up of hands playing a djembe",
    },
  ];

  return (
    <PageShell>
      <PageHero
        title="Moments from the programme"
        intro="Placeholder photography for layout. We will replace these with consented photos and video from our first taster sessions."
      />
      <section className="container-x py-12 md:py-16">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {imgs.map((im) => (
            <div
              key={im.alt}
              className={`overflow-hidden rounded-xl ${im.span}`}
            >
              <img
                src={im.src}
                loading="lazy"
                alt={im.alt}
                className="h-full w-full object-cover transition duration-500 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
              />
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
