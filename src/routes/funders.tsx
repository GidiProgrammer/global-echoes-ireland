import { createFileRoute, Link } from "@tanstack/react-router";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { PageShell } from "@/components/site/PageShell";
import { Picture } from "@/components/site/Picture";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_EMAIL, CONTACT_PHONES } from "@/lib/contact";
import { careHomes } from "@/lib/responsive-images";
import { pageHead } from "@/lib/site";

const TALK = {
  to: "/contact",
  search: { interest: "Funding and partnerships" as const },
} as const;

const DELIVERY = [
  {
    label: "Settings",
    value:
      "Care homes, HSE settings, rehabilitation services, schools and community groups across Ireland.",
  },
  {
    label: "On site",
    value:
      "We come to the room. All drums and percussion are provided. No prior musical experience is needed.",
  },
  {
    label: "Session",
    value:
      "45 to 60 minutes, paced with care teams. Inclusive of cognitive and mobility needs.",
  },
  {
    label: "How it is scoped",
    value:
      "A taster first, then a 4, 8 or 12-week block. Quotes follow a short conversation about group size, travel and the room.",
  },
  {
    label: "Who leads",
    value:
      "Dr John Nutekpor (PhD, arts practice) with Natalie Sone, Programme Coordinator.",
  },
] as const;

const STEPS = [
  {
    n: "1",
    title: "Send the setting",
    body: "Tell us the site, the group, and the funder timeline. A sentence is enough to start.",
  },
  {
    n: "2",
    title: "Get a scoped outline",
    body: "We come back with programme structure, delivery notes and how a taster or a block would sit in that setting.",
  },
  {
    n: "3",
    title: "Place the work",
    body: "Start with a taster, then a funded 4, 8 or 12-week programme if it is the right fit.",
  },
] as const;

const FUNDER_FAQS = [
  {
    q: "Who is this page for?",
    a: "Programme officers and partners who fund culture, health, wellbeing or community work in Ireland. If you commission on-site activity in care, rehabilitation, education or community settings, this is the conversation to open.",
  },
  {
    q: "Can you work within a public funding brief?",
    a: "Yes. We can share how the programme is structured, where it is delivered, and how a taster or a 4, 8 or 12-week block is scoped. We describe the public landscape we work in. We do not use grant logos or name a current award unless a partner has agreed that use.",
  },
  {
    q: "What outcomes can we put in an application?",
    a: "Use evidence-informed language: sessions support physical, mental, emotional and social wellbeing through group rhythm work. Do not cite clinical statistics or named client results from this site. We will help you describe delivery honestly for your form.",
  },
  {
    q: "Who should we contact?",
    a: `Natalie Sone, Programme Coordinator, at ${CONTACT_EMAIL}. You can also use Talk to us, which opens the enquiry form with funding selected.`,
  },
] as const;

export const Route = createFileRoute("/funders")({
  head: () =>
    pageHead({
      title: "For Funders | Global Echoes Ireland",
      description:
        "Fund on-site wellbeing music programmes in Irish care homes, HSE settings and communities. Talk to Global Echoes Ireland about a taster or a 4, 8 or 12-week block.",
      path: "/funders",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FUNDER_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    }),
  component: Funders,
});

function TalkLink({
  className,
  children = "Talk to us",
}: {
  className: string;
  children?: string;
}) {
  return (
    <Link to={TALK.to} search={TALK.search} className={className}>
      {children}
    </Link>
  );
}

function Funders() {
  return (
    <PageShell>
      <section className="border-b border-forest/10 bg-cream">
        <div className="container-x grid items-center gap-10 pt-10 pb-12 md:grid-cols-12 md:gap-12 md:pt-12 md:pb-16">
          <div className="md:col-span-7">
            <h1 className="max-w-[16ch] text-balance font-display text-[2.25rem] font-medium leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl lg:text-[3.35rem]">
              Fund wellbeing music that arrives on site
            </h1>
            <span className="page-title-stave" aria-hidden="true" />
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-ink/85 md:text-lg">
              Global Echoes Ireland delivers African Rhythms for Health and
              Wellbeing in care homes, HSE settings and rehabilitation services.
              If you fund culture, health or community programmes, this is how
              to place the work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <TalkLink className="btn-gold w-full sm:w-auto" />
              <Link to="/programme" className="btn-outline w-full sm:w-auto">
                See programme lengths
              </Link>
            </div>
            <p className="mt-4 flex min-h-11 flex-wrap items-center gap-x-1 text-sm text-ink/80">
              <span>or call</span>
              {CONTACT_PHONES.map((phone, i) => (
                <span key={phone.href} className="inline-flex items-center">
                  {i > 0 ? <span className="px-1">/</span> : null}
                  <a
                    href={phone.href}
                    className="inline-flex min-h-11 items-center underline-offset-2 hover:underline focus-ring-brand"
                  >
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>
          </div>
          <div className="md:col-span-5">
            <Picture
              {...careHomes}
              alt="Care home group taking part in an on-site Global Echoes Ireland drumming session"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-forest/10 bg-white">
        <div className="container-x grid gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-20">
          <Reveal className="md:col-span-4">
            <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
              What a funder can commission
            </h2>
            <p className="mt-4 max-w-[36ch] text-base leading-relaxed text-ink/80">
              One programme, placed in the rooms you already serve. Co-designed
              with care and activity teams. Built to be described clearly on an
              application form.
            </p>
          </Reveal>
          <Reveal className="md:col-span-8" delayMs={80}>
            <dl className="overflow-hidden rounded-xl border border-forest/15">
              {DELIVERY.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-forest/10 px-5 py-4 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:px-6 sm:py-5"
                >
                  <dt className="font-sans text-sm font-semibold text-forest">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink/85 sm:text-base">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="container-x py-14 md:py-20">
          <h2 className="max-w-[20ch] font-display text-2xl font-medium tracking-[-0.02em] md:text-4xl">
            A conversation, then a scoped outline
          </h2>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-cream/80">
            You do not need a finished brief to talk. We need the setting, the
            people in the room, and when funding has to land.
          </p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {STEPS.map((step) => (
              <li key={step.n}>
                <p className="font-display text-3xl font-medium text-gold-bright">
                  {step.n}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80 md:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <TalkLink className="btn-gold mt-10" />
        </div>
      </section>

      <section className="border-b border-forest/10 bg-cream">
        <div className="container-x py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
              Questions funders usually ask
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {FUNDER_FAQS.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border-forest/15"
                >
                  <AccordionTrigger className="font-display text-base text-ink hover:no-underline hover:text-forest md:text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[60ch] text-base leading-relaxed text-ink/80">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-cream">
        <div className="container-x py-16 md:py-20">
          <h2 className="max-w-[18ch] font-display text-3xl font-medium leading-[1.12] text-cream md:text-4xl">
            Ready to place a programme?
          </h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-cream/80">
            Open an enquiry with funding selected, or write to Natalie Sone. We
            aim to reply within one working day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <TalkLink className="btn-gold w-full sm:w-auto" />
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Funding and partnerships")}`}
              className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-[6px] border border-cream/50 bg-transparent px-5 text-sm font-semibold text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-ring-brand-on-dark sm:w-auto"
            >
              <EnvelopeSimple className="h-4 w-4" weight="bold" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-5 flex min-h-11 flex-wrap items-center gap-x-3 text-sm text-cream/85">
            <Phone className="h-4 w-4" weight="bold" aria-hidden="true" />
            {CONTACT_PHONES.map((phone, i) => (
              <span key={phone.href} className="inline-flex items-center">
                {i > 0 ? <span className="pr-3">/</span> : null}
                <a
                  href={phone.href}
                  className="inline-flex min-h-11 items-center underline-offset-2 hover:underline focus-ring-brand-on-dark"
                >
                  {phone.display}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
