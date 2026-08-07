import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";

/** Persuade path: five doors. Gallery/Blog live in the footer until content-ready. */
const nav = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

const secondary = [
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlay) {
      setPastHero(false);
      return;
    }

    const hero = document.querySelector<HTMLElement>(
      '[aria-labelledby="hero-heading"]',
    );
    if (!hero) {
      setPastHero(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setPastHero(entry.boundingClientRect.bottom < 72);
      },
      { root: null, threshold: [0, 0.01, 0.1, 1] },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [overlay]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const firstLink = panel?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const focusable = [
        ...panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onDark = overlay && !pastHero;
  const linkTone = onDark ? "nav-link is-dark" : "nav-link";
  const focusTone = onDark ? "focus-ring-brand-on-dark" : "focus-ring-brand";

  return (
    <header
      className={`z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${onDark ? "nav-mast is-over-hero" : "nav-mast is-solid"}`}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-4 px-4 sm:px-6 md:h-[4.25rem] md:gap-6 lg:gap-10 lg:px-10">
        <div className="min-w-0 shrink">
          <Logo inverted={onDark} />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center gap-x-0.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  {...(n.to === "/contact"
                    ? { search: { interest: undefined } }
                    : {})}
                  className={`${linkTone} ${focusTone}`}
                  activeProps={{
                    className: `${linkTone} is-active ${focusTone}`,
                  }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2.5">
          <Link
            to="/contact"
            search={{ interest: "Taster session" }}
            className="btn-gold hidden sm:inline-flex"
          >
            <span className="lg:hidden">Book a Taster</span>
            <span className="hidden lg:inline">Book a Taster Session</span>
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            className={`nav-mast-menu grid h-11 w-11 min-h-11 min-w-11 cursor-pointer place-items-center rounded-[6px] lg:hidden ${focusTone} ${
              onDark ? "is-dark" : ""
            }`}
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <List className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-forest lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-cream/15 px-4 sm:px-6 md:h-[4.25rem]">
            <Logo inverted size="sm" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              aria-label="Close menu"
              className="grid h-11 w-11 min-h-11 min-w-11 cursor-pointer place-items-center rounded-[6px] border border-cream/25 text-cream transition-colors duration-200 hover:bg-cream/10 focus-ring-brand-on-dark"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col overflow-y-auto px-5 py-4"
            aria-label="Mobile"
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                {...(n.to === "/contact"
                  ? { search: { interest: undefined } }
                  : {})}
                onClick={() => setOpen(false)}
                className="cursor-pointer border-b border-cream/10 py-4 font-sans text-[1.45rem] font-medium tracking-[-0.015em] text-cream/90 transition-colors duration-200 hover:text-cream focus-ring-brand-on-dark"
                activeProps={{
                  className:
                    "cursor-pointer border-b border-cream/10 py-4 font-sans text-[1.45rem] font-medium tracking-[-0.015em] text-gold-bright focus-ring-brand-on-dark",
                }}
              >
                {n.label}
              </Link>
            ))}
            <p className="mt-8 text-sm font-medium text-cream/75">More</p>
            {secondary.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="cursor-pointer border-b border-cream/10 py-3.5 font-sans text-lg font-medium text-cream/70 transition-colors duration-200 hover:text-cream focus-ring-brand-on-dark"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-cream/15 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Link
              to="/contact"
              search={{ interest: "Taster session" }}
              onClick={() => setOpen(false)}
              className="btn-gold flex w-full"
            >
              Book a Taster Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
