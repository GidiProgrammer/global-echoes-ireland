import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";

const quick = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programme", label: "Our Programme" },
  { to: "/services", label: "Services" },
  { to: "/funders", label: "For Funders" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const programmes = [
  "Care Homes",
  "Healthcare & HSE",
  "Schools & Education",
  "Festivals & Events",
  "Community & Wellbeing",
  "Rehabilitation",
] as const;

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/AfricanRhythmsIreland/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/AfricanRhythmsIreland",
    Icon: Facebook,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-10">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">
            Rhythm as Medicine: therapeutic African drumming programmes improving
            health, wellbeing and social connection across Ireland.
          </p>
          <p className="mt-3 text-xs text-cream/55">@AfricanRhythmsIreland</p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-[6px] border border-cream/20 text-cream/85 transition-colors hover:border-gold-bright hover:text-gold-bright focus-ring-brand-on-dark"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-bright">
            Quick Links
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/85">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-bright">
            Programmes
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/85">
            {programmes.map((label) => (
              <li key={label}>
                <Link
                  to="/services"
                  className="transition-colors duration-200 hover:text-gold-bright focus-ring-brand-on-dark"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-bright">
            Contact
          </p>
          <ul className="mt-5 space-y-4 text-sm text-cream/85">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all hover:text-gold-bright focus-ring-brand-on-dark"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <a
                href={CONTACT_PHONE.href}
                className="hover:text-gold-bright focus-ring-brand-on-dark"
              >
                {CONTACT_PHONE.display}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <span>Ireland - delivering nationwide</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-x flex flex-col gap-3 py-5 text-[11px] tracking-[0.04em] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Global Echoes Ireland · African Rhythms
            for Health &amp; Wellbeing
          </p>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
