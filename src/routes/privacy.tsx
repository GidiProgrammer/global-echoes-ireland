import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "How Global Echoes Ireland handles personal information from enquiries and programme delivery.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <PageShell>
      <PageHero
        title="Privacy Policy"
        intro="A short notice while we finalise a full GDPR-ready policy with our advisors."
      />
      <section className="container-x max-w-3xl space-y-6 pb-20 text-base leading-relaxed text-foreground/85">
        <p>
          Global Echoes Ireland collects personal details only when you contact
          us (for example name, email, organisation and message content) or when
          a partner organisation shares what we need to deliver a booked
          programme.
        </p>
        <p>
          We use that information to respond to enquiries, schedule sessions and
          meet contractual reporting with the organisation that booked us. We do
          not sell personal data.
        </p>
        <p>
          For access, correction or deletion requests, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}
            className="font-medium text-forest underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . We aim to reply within one working day.
        </p>
        <p>
          <Link
            to="/contact"
            search={{ interest: undefined }}
            className="font-medium text-forest underline-offset-2 hover:underline"
          >
            Contact us
          </Link>{" "}
          if you have any privacy questions before booking.
        </p>
      </section>
    </PageShell>
  );
}
