import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";
import { requestCookieSettings } from "@/lib/cookie-consent";
import { isGoogleAnalyticsConfigured, trackEvent } from "@/lib/analytics";
import { submitNewsletter } from "@/lib/enquiry";

const quick = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events & Communities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const programmes = [
  { label: "Care Homes & Healthcare", hash: "care-homes" },
  { label: "Community & Wellbeing", hash: "community" },
  { label: "Schools, Universities & Education", hash: "schools" },
  { label: "Festivals & Events", hash: "festivals" },
] as const;

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

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-x py-10 md:py-12 lg:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Logo inverted />
            <p className="font-display text-base font-medium leading-tight text-cream">
              Global Echoes Ireland
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            Global harmony through sound and creative collaborations. Wellbeing
            music programmes for care homes, schools, universities and
            communities across Ireland and beyond.
          </p>
          <p className="mt-2 text-xs text-cream/80">@globalechoesireland</p>
          
          {/* Newsletter Form */}
          <NewsletterForm />
          <div className="mt-5 flex gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-analytics="outbound"
                data-analytics-place="footer"
                data-analytics-label={label}
                className="grid h-11 w-11 min-h-11 min-w-11 place-items-center rounded-[6px] border border-cream/20 text-cream/85 transition-colors hover:border-gold-bright hover:text-gold-bright focus-ring-brand-on-dark"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gold-bright">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {quick.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  {...(item.to === "/contact"
                    ? { search: { interest: undefined } }
                    : {})}
                  className="transition-colors duration-200 hover:text-gold-bright focus-ring-brand-on-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-gold-bright">Programmes</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {programmes.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/services"
                  hash={item.hash}
                  className="transition-colors duration-200 hover:text-gold-bright focus-ring-brand-on-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-gold-bright">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li className="flex gap-3">
              <EnvelopeSimple className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-analytics="outbound"
                data-analytics-place="footer"
                data-analytics-label="email"
                className="break-all hover:text-gold-bright focus-ring-brand-on-dark"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <a
                href={CONTACT_PHONE.href}
                data-analytics="outbound"
                data-analytics-place="footer"
                data-analytics-label="phone"
                className="hover:text-gold-bright focus-ring-brand-on-dark"
              >
                {CONTACT_PHONE.display}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <span>Ireland, delivering nationwide</span>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-x flex flex-col gap-3 py-5 text-[11px] tracking-[0.04em] text-cream/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Echoes Ireland</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/privacy"
              className="hover:text-gold-bright focus-ring-brand-on-dark"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-gold-bright focus-ring-brand-on-dark"
            >
              Terms &amp; Conditions
            </Link>
            {isGoogleAnalyticsConfigured() ? (
              <button
                type="button"
                onClick={requestCookieSettings}
                className="cursor-pointer text-left hover:text-gold-bright focus-ring-brand-on-dark"
              >
                Cookie settings
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    if (!email || status === "pending") return;

    setStatus("pending");
    setErrorMessage("");

    const result = await submitNewsletter(email, website);

    if (result.ok) {
      trackEvent("newsletter_join", { place: "footer" });
      setStatus("success");
      return;
    }

    setStatus("error");
    setErrorMessage(
      result.reason === "unconfigured"
        ? `The list is not connected yet. Email ${CONTACT_EMAIL} and we will add you.`
        : result.message,
    );
  };

  if (status === "success") {
    return (
      <div
        className="mt-5 rounded-[6px] border border-cream/15 bg-forest-deep/50 p-3 text-xs text-cream/90"
        role="status"
        aria-live="polite"
      >
        <p className="font-semibold text-gold-bright">Check your inbox</p>
        <p className="mt-0.5 text-cream/80">
          Confirm the email we just sent, then you will receive news and events.
          You can unsubscribe in any message.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-5 max-w-xs">
      <label htmlFor="newsletter-email" className="block text-xs font-semibold text-gold-bright">
        News and updates
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          disabled={status === "pending"}
          placeholder="Your email"
          autoComplete="email"
          aria-invalid={status === "error"}
          aria-describedby={
            status === "error" ? "newsletter-hint newsletter-error" : "newsletter-hint"
          }
          className="min-h-11 min-w-0 flex-1 rounded-[6px] border border-cream/20 bg-forest-deep px-3 text-sm text-cream placeholder-cream/70 focus-visible:border-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-bright disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "pending"}
          className="inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-[6px] bg-gold px-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream disabled:opacity-75"
        >
          {status === "pending" ? "Joining" : "Join"}
        </button>
      </div>
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="newsletter-website">Website</label>
        <input
          id="newsletter-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <p id="newsletter-hint" className="mt-2 text-[11px] leading-relaxed text-cream/70">
        We will email news and events. Confirm once, unsubscribe anytime. See our{" "}
        <Link to="/privacy" className="underline underline-offset-2 hover:text-gold-bright">
          privacy policy
        </Link>
        .
      </p>
      <div id="newsletter-error" role="alert" aria-live="polite">
        {status === "error" ? (
          <p className="mt-2 text-xs text-gold-bright">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
