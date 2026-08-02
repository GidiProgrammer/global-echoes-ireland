import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Global Echoes Ireland" },
      {
        name: "description",
        content:
          "Interim terms for using the Global Echoes Ireland website and requesting programme information.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <PageShell>
      <PageHero
        title="Terms & Conditions"
        intro="Website use and enquiry terms. Programme delivery is governed by a separate written agreement with the booking organisation."
      />
      <section className="container-x max-w-3xl space-y-6 pb-20 text-base leading-relaxed text-foreground/85">
        <p>
          This website is provided by Global Echoes Ireland for information
          about African Rhythms for Health &amp; Wellbeing. Content is offered
          in good faith and may be updated without notice.
        </p>
        <p>
          Submitting the contact form or emailing us is a request for
          information or a booking conversation. It does not create a binding
          programme contract until both parties agree terms in writing.
        </p>
        <p>
          Do not copy site photography or programme materials for commercial use
          without prior written permission.
        </p>
        <p>
          Questions:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-forest underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          or{" "}
          <Link
            to="/contact"
            search={{ interest: undefined }}
            className="font-medium text-forest underline-offset-2 hover:underline"
          >
            the contact page
          </Link>
          .
        </p>
      </section>
    </PageShell>
  );
}
