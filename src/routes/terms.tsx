import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CONTACT_EMAIL } from "@/lib/contact";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms & Conditions | Global Echoes Ireland",
      description:
        "Terms for using the Global Echoes Ireland website and submitting programme enquiries.",
      path: "/terms",
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
      <section className="container-x max-w-3xl space-y-8 pb-20 text-base leading-relaxed text-foreground/85">
        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            About this website
          </h2>
          <p className="mt-3">
            This website is operated by Global Echoes Ireland to describe our
            wellbeing music programmes, community initiatives and enquiry
            process. Content is provided in good faith and may be updated
            without notice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Enquiries and bookings
          </h2>
          <p className="mt-3">
            Submitting the contact form, using the email fallback, or contacting
            us by phone is a request for information or a booking conversation.
            It does not create a binding programme contract until both parties
            agree written terms (including scope, fees, dates and safeguarding
            arrangements).
          </p>
          <p className="mt-3">
            Indicative pricing on the services page is guidance only. A
            confirmed quote depends on setting, group size, duration and travel.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Intellectual property
          </h2>
          <p className="mt-3">
            Text, photography, films, logos and programme materials on this site
            belong to Global Echoes Ireland or are used with permission. Do not
            copy or reuse them for commercial purposes without prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            External links
          </h2>
          <p className="mt-3">
            Links to social media, video platforms or partner sites are provided
            for convenience. We are not responsible for their content or privacy
            practices.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Liability
          </h2>
          <p className="mt-3">
            We aim to keep this website accurate and available, but we do not
            guarantee uninterrupted access. To the extent permitted by Irish
            law, we are not liable for indirect loss arising from use of this
            site. Nothing here limits liability that cannot be limited by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Privacy
          </h2>
          <p className="mt-3">
            Our{" "}
            <Link
              to="/privacy"
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            explains how we handle personal information from enquiries and
            programme delivery.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Contact
          </h2>
          <p className="mt-3">
            Questions about these terms:{" "}
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
      </section>
    </PageShell>
  );
}
