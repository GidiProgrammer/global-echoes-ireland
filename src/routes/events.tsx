import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarBlank } from "@phosphor-icons/react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTA";
import { pageHead } from "@/lib/site";
import {
  celtafrikQuartet,
  globalRouteBrothers,
  nathanHarllels,
} from "@/lib/responsive-images";
import { Picture } from "@/components/site/Picture";

export const Route = createFileRoute("/events")({
  head: () =>
    pageHead({
      title: "Events & Communities | Global Echoes Ireland",
      description:
        "CeltAfrik, Global Echoes Troubadours (GETROS) and Global Roots Brothers: community and cultural music initiatives from Global Echoes Ireland.",
      path: "/events",
    }),
  component: Events,
});

const NATHAN_TRACK_URL =
  "https://hypeddit.com/nathanharllels/dontyouevergiveup";

function Events() {
  return (
    <PageShell>
      <PageHero
        title="Events and community"
        intro="Community strands for creativity, intercultural dialogue, wellbeing and belonging across Ireland and beyond."
      />

      {/* CeltAfrik: split + video */}
      <section id="celtafrik" className="scroll-mt-28 container-x py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl">
              <Picture
                {...celtafrikQuartet}
                alt="CeltAfrik Quartet: four musicians with guitar, kora and bodhrán"
                className="aspect-square w-full bg-ink object-contain"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              CeltAfrik
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium leading-snug text-forest md:text-lg">
              Connecting Cultures Through Sound and Rhythm
            </p>
            <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                CeltAfrik brings Celtic and African traditions together through
                performance, workshops and community engagement, led by Dr John
                Nutekpor.
              </p>
              <p>
                The project uses shared rhythm and storytelling to open dialogue,
                wellbeing and belonging across Ireland and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 aspect-video overflow-hidden rounded-xl bg-ink">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/fHGrNynfjTY"
            title="CeltAfrik session, Global Echoes Ireland"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      {/* GETROS: video-first, copy below (breaks zigzag) */}
      <section
        id="getros"
        className="scroll-mt-28 border-y border-forest/10 bg-white"
      >
        <div className="container-x py-16 md:py-24">
          <div className="aspect-video max-w-4xl overflow-hidden rounded-xl bg-ink">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/Lz_hKZPVP2I"
              title="Global Echoes Troubadours (GETROS) session, Global Echoes Ireland"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="mt-10 max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              Global Echoes Troubadours
            </h2>
            <p className="mt-3 text-base font-medium leading-snug text-forest md:text-lg">
              The GETROS: sound, stories and cultural connection across borders
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              A world music initiative that brings musicians, storytellers and
              communities together to celebrate cultural diversity through
              sound, rhythm and shared experience, carrying traditions across
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* GR Brothers: full-bleed image band + featured profile */}
      <section id="gr-brothers" className="scroll-mt-28 bg-cream">
        <div className="overflow-hidden">
          <Picture
            {...globalRouteBrothers}
            alt="Global Roots Brothers: Nathan Harllels with bandmates outdoors"
            className="aspect-[21/9] w-full object-cover object-[center_30%] md:aspect-[2.4/1]"
          />
        </div>
        <div className="container-x grid items-start gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              Global Roots Brothers
            </h2>
            <p className="mt-3 text-base font-medium leading-snug text-forest md:text-lg">
              Rooted in reggae, connected through sound
            </p>
            <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Led by Nathan Harllels, Global Roots Brothers is a
                reggae-inspired collective using conscious lyrics and uplifting
                rhythms to promote peace, unity and social awareness.
              </p>
            </div>
            <a
              href={NATHAN_TRACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid mt-8 inline-flex"
            >
              Listen on Hypeddit
            </a>
          </div>
          <aside className="md:col-span-5">
            <figure>
              <Picture
                {...nathanHarllels}
                alt="Nathan Harllels, leader of Global Roots Brothers"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
              <figcaption className="mt-4">
                <p className="font-display text-2xl font-medium">
                  Nathan Harllels
                </p>
                <p className="mt-1 text-sm text-forest">
                  Leader, Global Roots Brothers
                </p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      {/* Upcoming: stacked, not split-header */}
      <section className="border-t border-forest/10 bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              Upcoming events
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Dates, venues and tickets will appear here as programmes and
              performances are confirmed.
            </p>
          </div>
          <div className="mt-10 border-t border-forest/12 py-10">
            <CalendarBlank
              className="h-7 w-7 text-forest"
              weight="regular"
            />
            <h3 className="mt-4 font-display text-2xl font-medium">
              Programme calendar coming soon
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Ask about hosting a workshop, performance or community engagement
              in the meantime.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                search={{ interest: "Events & community" }}
                className="btn-solid"
              >
                Ask about an event
              </Link>
              <Link
                to="/contact"
                search={{ interest: "Taster session" }}
                className="btn-outline"
              >
                Book a Taster Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Host a workshop or performance"
        body="Bring CeltAfrik, the GETROS or Global Roots Brothers to your next community project, festival or event."
        interest="Events & community"
      />
    </PageShell>
  );
}
