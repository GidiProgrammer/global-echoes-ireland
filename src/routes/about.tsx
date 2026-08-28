import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { pageHead } from "@/lib/site";
import {
  caoimheDoherty,
  cultureWellbeingDrumming,
  drJohn,
  emmanuelSone,
  farisAmin,
  natalieRodgers,
} from "@/lib/responsive-images";
import { Picture } from "@/components/site/Picture";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About | Global Echoes Ireland",
      description:
        "Mission, vision and founders of Global Echoes Ireland, building global harmony through sound.",
      path: "/about",
    }),
  component: About,
});

function About() {
  const featured = {
    name: "Dr. John Nutekpor",
    role: "Founder & Artistic Director, PhD Arts Practice",
    img: drJohn,
    imgClass: "aspect-[4/5] w-full rounded-xl object-cover object-[center_15%]",
    bio: "Dr. Nutekpor leads events and directs Global Echoes artistic initiatives, creating intercultural performances and fostering creative collaborations that connect communities across the globe.",
  };
  const people = [
    {
      name: "Emmanuel Njume Sone",
      role: "Co-founder, Strategy & Partnerships",
      img: emmanuelSone,
      imgClass:
        "aspect-square w-full rounded-xl object-cover object-[center_18%] sm:aspect-[5/4]",
      bio: "Emmanuel leads partnerships with care providers, cultural organisations and academic institutions across Ireland and beyond.",
    },
    {
      name: "Natalie Rogers",
      role: "Programme Coordinator, Senior Clinical Nurse",
      img: natalieRodgers,
      imgClass:
        "aspect-square w-full rounded-xl object-cover object-[center_38%] sm:aspect-[5/4]",
      bio: "Natalie coordinates the clinical alignment of every programme, drawing on years of senior nursing experience across Irish healthcare.",
    },
    {
      name: "Faris Amin",
      role: "Community outreach and Wellbeing facilitator",
      img: farisAmin,
      imgClass:
        "aspect-square w-full rounded-xl object-cover object-[center_30%] sm:aspect-[5/4]",
      bio: "Faris coordinates community outreach and supports inclusive engagement through Wellbeing and creative programmes.",
    },
    {
      name: "Caoimhe Doherty",
      role: "International Programmes and Events Coordinator",
      img: caoimheDoherty,
      imgClass:
        "aspect-square w-full rounded-xl object-cover object-[center_20%] sm:aspect-[5/4]",
      bio: "Caoimhe is an Ireland-based multi-instrumentalist and composer. She coordinates international programmes and event curation.",
    },
  ];

  return (
    <PageShell>
      <section className="container-x pt-10 pb-16 md:pt-12 md:pb-24">
        <PageHero title="About" />
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8 lg:mt-12 lg:gap-12">
          <article className="md:col-span-6 lg:col-span-5">
            <Picture
              {...featured.img}
              alt={featured.name}
              className={featured.imgClass}
            />
            <h2 className="mt-5 font-display text-2xl font-medium md:text-3xl">
              {featured.name}
            </h2>
            <p className="mt-1 text-sm text-forest">{featured.role}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {featured.bio}
            </p>
          </article>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-6 lg:col-span-7">
            {people.map((f) => (
              <article key={f.name}>
                <Picture {...f.img} alt={f.name} className={f.imgClass} />
                <h2 className="mt-4 font-display text-xl font-medium md:text-2xl">
                  {f.name}
                </h2>
                <p className="mt-1 text-sm text-forest">{f.role}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {f.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="container-x py-16 md:py-24">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">
            Culture, care and community
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
            Guided by global harmony through sound and creative collaborations,
            we deliver structured wellbeing music experiences across care homes,
            schools, communities and Higher Education Authority (HEA)
            institutions.
          </p>
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-xl">
            <Picture
              {...cultureWellbeingDrumming}
              alt="Group of people smiling and playing djembe drums together in a community hall"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-6">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
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
        <div className="container-x py-16 md:py-24">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            What we stand for
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            Through sound, we build global harmony: celebrating culture,
            promoting wellbeing, and connecting communities through
            compassionate, coordinated care.
          </p>
          <ol className="mt-10">
            {[
              {
                title: "Vision",
                body: "To build global harmony through sound, using music and cultural expression to promote wellbeing, connection, and belonging across Ireland and global communities.",
              },
              {
                title: "Mission",
                body: "To harness the transformative power of sound, culture, and community to promote wellbeing, connection, and inclusion across Ireland and global communities.",
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
                <h3 className="font-display text-xl font-medium text-forest">
                  {c.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/85 md:mt-0 md:text-[1.05rem]">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
