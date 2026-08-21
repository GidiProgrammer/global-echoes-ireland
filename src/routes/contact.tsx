import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FacebookLogo,
  InstagramLogo,
  Copy,
  EnvelopeSimple,
  MapPin,
  Phone,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { useId, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";
import { openMailtoDraft, submitEnquiry } from "@/lib/enquiry";
import { pageHead } from "@/lib/site";

export const INTEREST_OPTIONS = [
  "Taster session",
  "4-week programme",
  "8-week programme",
  "12-week programme",
  "Care Homes & Healthcare",
  "Community & Wellbeing",
  "Schools, Universities & Education",
  "Festivals & Events",
  "Events & community",
  "CeltAfrik",
  "The GETROS",
  "The GR Brothers",
  "General enquiry",
] as const;

export type InterestOption = (typeof INTEREST_OPTIONS)[number];

function isInterestOption(value: unknown): value is InterestOption {
  return (
    typeof value === "string" &&
    (INTEREST_OPTIONS as readonly string[]).includes(value)
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/globalechoesireland/",
    Icon: InstagramLogo,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/globalechoesireland",
    Icon: FacebookLogo,
  },
] as const;

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    interest: isInterestOption(search.interest)
      ? search.interest
      : undefined,
  }),
  head: () =>
    pageHead({
      title: "Contact | Global Echoes Ireland",
      description: `Book a Taster Session or partner with Global Echoes Ireland. Contact Natalie Rodgers at ${CONTACT_EMAIL}.`,
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("A valid email helps us reply").max(255),
  organisation: z.string().trim().max(150).optional(),
  interest: z.enum(INTEREST_OPTIONS, {
    message: "Choose what you are interested in",
  }),
  message: z
    .string()
    .trim()
    .min(1, "A short message helps us prepare")
    .max(1500),
});

function Contact() {
  const { interest: interestFromUrl } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);
  const formErrorId = useId();
  const messageId = useId();
  const interestId = useId();
  const honeypotId = useId();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success("Email address copied.");
    } catch {
      toast.message(CONTACT_EMAIL);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setSubmitted(false);
    setUsedFallback(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (typeof data.botcheck === "string" && data.botcheck.trim().length > 0) {
      setPending(false);
      return;
    }

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues)
        errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      setPending(false);
      queueMicrotask(() => {
        const firstInvalid = form.querySelector<HTMLElement>(
          "[aria-invalid='true']",
        );
        firstInvalid?.focus();
      });
      return;
    }
    setErrors({});

    const payload = parsed.data;
    const result = await submitEnquiry(payload);

    if (result.ok) {
      setSubmitted(true);
      form.reset();
      toast.success("Enquiry sent. We aim to reply within one working day.");
      setPending(false);
      return;
    }

    openMailtoDraft(payload);
    setUsedFallback(true);
    setSubmitted(true);
    if (result.reason === "activation") {
      toast.message(
        "Form delivery needs a one-time confirmation. Your email app should open as a backup.",
      );
    } else {
      toast.error(result.message);
    }
    setPending(false);
  };

  const fieldClass =
    "mt-2 w-full rounded-[6px] border border-forest/20 bg-cream px-4 py-3 text-sm transition-colors focus-visible:border-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <PageShell>
      <PageHero
        title="Book a Taster Session"
        intro="Send an enquiry below. We aim to reply within one working day."
      />

      <section className="container-x grid gap-10 py-12 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-forest/10 bg-white p-8">
            <h2 className="font-display text-2xl font-medium">Direct contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Natalie Rodgers, Programme Coordinator
            </p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-forest-soft text-forest">
                  <EnvelopeSimple className="h-4 w-4" weight="regular" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all font-medium hover:text-forest focus-ring-brand"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-2 inline-flex min-h-9 items-center gap-1.5 text-xs font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Copy email address
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-forest-soft text-forest">
                  <Phone className="h-4 w-4" weight="regular" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <div className="flex flex-col gap-1 font-medium">
                    <a
                      href={CONTACT_PHONE.href}
                      className="hover:text-forest focus-ring-brand"
                    >
                      {CONTACT_PHONE.display}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-forest-soft text-forest">
                  <MapPin className="h-4 w-4" weight="regular" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium">Ireland, delivering nationwide</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 border-t border-forest/10 pt-6">
              <p className="text-sm text-muted-foreground">Follow us</p>
              <p className="mt-1 text-sm text-muted-foreground">
                @globalechoesireland
              </p>
              <div className="mt-4 flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-[6px] border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-cream focus-ring-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-xl border border-forest/10 bg-white p-8 lg:col-span-7"
        >
          <h2 className="font-display text-2xl font-medium">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your message is sent securely to {CONTACT_EMAIL}. See our{" "}
            <Link
              to="/privacy"
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for how we handle enquiry data.
          </p>

          <input
            type="checkbox"
            id={honeypotId}
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          <div
            id={formErrorId}
            role="alert"
            aria-live="polite"
            className="mt-4"
          >
            {Object.keys(errors).length > 0 && (
              <p className="rounded-[6px] bg-maroon/10 px-3 py-2 text-sm text-maroon">
                Please fix the highlighted fields, then try again.
              </p>
            )}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field
              label="Your name"
              name="name"
              error={errors.name}
              required
              disabled={pending}
              className={fieldClass}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              required
              disabled={pending}
              className={fieldClass}
            />
            <Field
              label="Organisation"
              name="organisation"
              error={errors.organisation}
              disabled={pending}
              className={fieldClass}
            />
            <label className="block" htmlFor={interestId}>
              <span className="text-sm text-muted-foreground">
                I&apos;m interested in *
              </span>
              <select
                key={interestFromUrl ?? "none"}
                id={interestId}
                name="interest"
                required
                defaultValue={interestFromUrl ?? ""}
                disabled={pending}
                aria-invalid={Boolean(errors.interest)}
                aria-describedby={
                  errors.interest ? `${interestId}-error` : undefined
                }
                className={fieldClass}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <optgroup label="Taster & General">
                  <option value="Taster session">Taster session</option>
                  <option value="General enquiry">General enquiry</option>
                </optgroup>
                <optgroup label="Programmes">
                  <option value="4-week programme">4-week programme</option>
                  <option value="8-week programme">8-week programme</option>
                  <option value="12-week programme">12-week programme</option>
                </optgroup>
                <optgroup label="Settings">
                  <option value="Care Homes & Healthcare">Care Homes & Healthcare</option>
                  <option value="Community & Wellbeing">Community & Wellbeing</option>
                  <option value="Schools, Universities & Education">Schools, Universities & Education</option>
                  <option value="Festivals & Events">Festivals & Events</option>
                  <option value="Events & community">Events & community</option>
                </optgroup>
                <optgroup label="Cultural Initiatives">
                  <option value="CeltAfrik">CeltAfrik</option>
                  <option value="The GETROS">The GETROS</option>
                  <option value="The GR Brothers">The GR Brothers</option>
                </optgroup>
              </select>
              {errors.interest && (
                <span
                  id={`${interestId}-error`}
                  className="mt-1 block text-xs text-destructive"
                >
                  {errors.interest}
                </span>
              )}
            </label>
          </div>

          <div className="mt-5">
            <label
              htmlFor={messageId}
              className="text-sm text-muted-foreground"
            >
              Message *
            </label>
            <textarea
              id={messageId}
              name="message"
              rows={5}
              required
              disabled={pending}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? `${messageId}-error` : undefined
              }
              className={fieldClass}
            />
            {errors.message && (
              <p
                id={`${messageId}-error`}
                className="mt-1 text-xs text-destructive"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={pending}
              className="btn-solid disabled:cursor-not-allowed disabled:opacity-70"
            >
              {pending ? "Sending…" : "Send enquiry"}{" "}
              <PaperPlaneTilt className="h-4 w-4" />
            </button>
            <Link
              to="/programme"
              className="text-sm font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
            >
              Review the programme first
            </Link>
          </div>

          {submitted && (
            <div
              role="status"
              className="mt-6 rounded-[6px] border border-forest/15 bg-forest-soft/60 px-4 py-4 text-sm leading-relaxed text-forest"
            >
              {usedFallback ? (
                <>
                  <p className="font-medium">Enquiry opened in your email app</p>
                  <p className="mt-1 text-forest/80">
                    If nothing opened, copy{" "}
                    <span className="font-medium">{CONTACT_EMAIL}</span> and send
                    your message manually. We aim to reply within one working day.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-medium">Enquiry sent</p>
                  <p className="mt-1 text-forest/80">
                    Thank you. We aim to reply within one working day.
                  </p>
                </>
              )}
              <button
                type="button"
                onClick={copyEmail}
                className="mt-3 inline-flex min-h-9 items-center gap-1.5 text-sm font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy email address
              </button>
            </div>
          )}
        </form>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  disabled,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className: string;
}) {
  const id = useId();
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm text-muted-foreground">
        {label}
        {required && " *"}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={className}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1 block text-xs text-destructive">
          {error}
        </span>
      )}
    </label>
  );
}
