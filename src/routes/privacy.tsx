import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CONTACT_EMAIL } from "@/lib/contact";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Global Echoes Ireland",
      description:
        "How Global Echoes Ireland collects, uses and protects personal information from website enquiries and programme delivery.",
      path: "/privacy",
    }),
  component: Privacy,
});

function PrivacySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-medium text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Privacy() {
  return (
    <PageShell>
      <section className="container-x max-w-3xl space-y-8 pt-10 pb-20 text-base leading-relaxed text-foreground/85 md:pt-12">
        <PageHero
          title="Privacy"
          intro="Last updated August 2026."
        />
        <PrivacySection title="Who we are">
          <p>
            Global Echoes Ireland (GEI) provides wellbeing music programmes for
            care homes, schools, universities and communities across Ireland and
            beyond. For privacy questions or requests, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . Natalie Sone is our Programme Coordinator for day-to-day
            enquiries.
          </p>
        </PrivacySection>

        <PrivacySection title="What we collect">
          <p>We collect personal information only when there is a clear reason:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Website enquiries:</strong> name, email address,
              organisation (optional), interest area and message content when
              you use the contact form or email us directly.
            </li>
            <li>
              <strong>Programme delivery:</strong> information shared by a
              booking organisation (for example a care home, school or festival)
              that we need to plan and deliver sessions safely.
            </li>
            <li>
              <strong>Technical data:</strong> basic server logs from our
              hosting provider (such as IP address, browser type and pages
              visited). We do not use advertising or analytics cookies on this
              site at present.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="How we use your information">
          <p>We use personal data to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to enquiries and schedule taster sessions or programmes</li>
            <li>Coordinate delivery with the organisation that booked us</li>
            <li>Meet contractual, safeguarding and reporting obligations</li>
            <li>Keep this website secure and working correctly</li>
          </ul>
          <p>
            We do not sell personal data. We do not use your enquiry details for
            unrelated marketing without your consent.
          </p>
        </PrivacySection>

        <PrivacySection title="Legal basis (GDPR)">
          <p>For visitors in Ireland and the EU, we rely on:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Consent</strong> when you submit an enquiry form or email
              us voluntarily
            </li>
            <li>
              <strong>Contract</strong> when processing is necessary to discuss
              or deliver a booked programme
            </li>
            <li>
              <strong>Legitimate interests</strong> to operate and protect this
              website, in balance with your rights
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="Contact form processor">
          <p>
            Enquiries submitted through our website are sent using FormSubmit, a
            free form delivery service. FormSubmit processes your submission on
            our behalf and forwards it to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . FormSubmit acts as a data processor under our instructions. Their
            privacy policy is available at{" "}
            <a
              href="https://formsubmit.co/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              formsubmit.co/privacy.pdf
            </a>
            .
          </p>
          <p>
            If the hosted form cannot send, you may use the email fallback shown
            on the contact page. That opens your own email application and does
            not pass through FormSubmit.
          </p>
        </PrivacySection>

        <PrivacySection title="How long we keep data">
          <p>
            Enquiry records are kept for as long as needed to respond, follow up
            on bookings and meet reasonable business record-keeping (typically up
            to two years unless a longer period is required for an active
            contract or legal obligation). Programme-related records follow the
            retention agreed with the booking organisation.
          </p>
        </PrivacySection>

        <PrivacySection title="Sharing and transfers">
          <p>
            We share personal data only with service providers who help us
            operate (such as hosting and form delivery), with booking
            organisations where needed for delivery, or when required by law. We
            do not routinely transfer data outside the European Economic Area.
            If that changes for a specific programme, we will explain it at the
            time of booking.
          </p>
        </PrivacySection>

        <PrivacySection title="Your rights">
          <p>
            Under GDPR you may request access, correction, deletion, restriction
            or objection to processing, and data portability where applicable.
            You may also lodge a complaint with the Irish Data Protection
            Commission (
            <a
              href="https://www.dataprotection.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              dataprotection.ie
            </a>
            ). To exercise your rights, email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . We aim to reply within one working day.
          </p>
        </PrivacySection>

        <PrivacySection title="Photography and video">
          <p>
            Our gallery may include session photography and films from schools,
            care settings and public events. Images of identifiable children or
            vulnerable adults are published only with appropriate consent from
            the relevant organisation or guardians. Contact us if you believe
            any image should be reviewed or removed.
          </p>
        </PrivacySection>

        <PrivacySection title="Changes">
          <p>
            We may update this policy when our services or legal requirements
            change. The date at the top of this page will be revised when that
            happens.
          </p>
          <p>
            <Link
              to="/contact"
              search={{ interest: undefined }}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              Contact us
            </Link>{" "}
            with any privacy question before booking a session.
          </p>
        </PrivacySection>
      </section>
    </PageShell>
  );
}
