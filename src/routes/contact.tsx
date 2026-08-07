import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useId, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";

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
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/globalechoesireland",
    Icon: Facebook,
  },
] as const;

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    interest: isInterestOption(search.interest)
      ? search.interest
      : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact | Global Echoes Ireland" },
      {
        name: "description",
        content:
          `Book a taster session or partner with Global Echoes Ireland. Contact Natalie Rodgers at ${CONTACT_EMAIL}.`,
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
  const [drafted, setDrafted] = useState(false);
  const formErrorId = useId();
  const messageId = useId();
  const interestId = useId();

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
    setDrafted(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
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

    const { name, email, organisation, interest, message } = parsed.data;
    const subject = encodeURIComponent(`Enquiry: ${interest}`);
    const body = encodeURIComponent(
      [
        message,
        "",
        "---",
        `Name: ${name}`,
        `Email: ${email}`,
        organisation ? `Organisation: ${organisation}` : null,
        `Interest: ${interest}`,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setDrafted(true);
    toast.success(
      "Your email app should open with this enquiry. If nothing opens, use the copy button below.",
    );
    setPending(false);
  };

  const fieldClass =
    "mt-2 w-full rounded-[6px] border border-forest/20 bg-cream px-4 py-3 text-sm transition-colors focus-visible:border-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <PageShell>
      <PageHero
        title="Book a taster or start a conversation"
        intro="We aim to respond within one working day. The form opens your email application with a pre-drafted message, ensuring that your information is not lost in the event of a sending issue."
      />

      <section className="container-x grid gap-10 py-12 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-forest/10 bg-white p-8">
            <h2 className="font-serif text-2xl">Direct contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Natalie Rodgers, Programme Coordinator
            </p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-soft text-forest">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>
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
                    <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
                    Copy email address
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-soft text-forest">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Phone
                  </p>
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
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-soft text-forest">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Based in
                  </p>
                  <p className="font-medium">Ireland, delivering nationwide</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 border-t border-forest/10 pt-6">
              <p className="text-sm text-muted-foreground">
                Follow us
              </p>
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
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
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
          <h2 className="font-serif text-2xl">Draft an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Submitting opens your email app with a prefilled message to{" "}
            {CONTACT_EMAIL}. Nothing is stored on this site.
          </p>

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
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
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
              {pending ? "Opening email…" : "Open email to send"}{" "}
              <Send className="h-4 w-4" />
            </button>
            <Link
              to="/programme"
              className="text-sm font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
            >
              Review the programme first
            </Link>
          </div>

          {drafted && (
            <div
              role="status"
              className="mt-6 rounded-[6px] border border-forest/15 bg-forest-soft/60 px-4 py-4 text-sm leading-relaxed text-forest"
            >
              <p className="font-medium">Enquiry drafted in your email app</p>
              <p className="mt-1 text-forest/80">
                If nothing opened, copy{" "}
                <span className="font-medium">{CONTACT_EMAIL}</span> and send
                your message manually. We aim to reply within one working day.
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-3 inline-flex min-h-9 items-center gap-1.5 text-sm font-medium text-forest underline-offset-2 hover:underline focus-ring-brand"
              >
                <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
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
