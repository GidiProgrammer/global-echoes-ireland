import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { moreNav, primaryNav, tasterCta } from "@/lib/nav";

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [covered, setCovered] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerBarRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => toggleRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isHome) {
      setCovered(true);
      return;
    }

    setCovered(false);
    const next = document.getElementById("after-hero");
    if (!next) return;

    let io: IntersectionObserver | undefined;

    const connect = () => {
      io?.disconnect();
      const navH = headerBarRef.current?.getBoundingClientRect().height ?? 72;
      const inset = Math.max(window.innerHeight - navH, 0);
      io = new IntersectionObserver(
        ([entry]) => setCovered(entry.isIntersecting),
        {
          root: null,
          rootMargin: `0px 0px ${-inset}px 0px`,
          threshold: 0,
        },
      );
      io.observe(next);
    };

    connect();
    window.addEventListener("resize", connect);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", connect);
    };
  }, [isHome]);

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
    const headerBar = headerBarRef.current;
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      headerBar?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      headerBar?.removeAttribute("inert");
    }
    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      headerBar?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const firstLink = panel?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
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
  }, [open, closeMenu]);

  return (
    <header
      className={
        covered
          ? "nav-mast sticky top-0 z-50 is-solid"
          : "nav-mast sticky top-0 z-50"
      }
    >
      <div
        ref={headerBarRef}
        className="mx-auto flex h-[var(--header-h)] max-w-[90rem] items-center gap-3 px-4 sm:px-6 lg:gap-6 lg:px-10"
      >
        <div className="min-w-0 shrink">
          <Logo inverted size="lg" />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center">
            {primaryNav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  {...(n.to === "/contact"
                    ? { search: { interest: undefined } }
                    : {})}
                  className="nav-link is-dark focus-ring-brand-on-dark"
                  activeProps={{
                    className: "nav-link is-dark is-active focus-ring-brand-on-dark",
                  }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2.5 lg:ml-0">
          <Link
            to={tasterCta.to}
            search={tasterCta.search}
            className="btn-nav-ghost hidden lg:inline-flex"
            data-analytics="cta"
            data-analytics-place="nav"
            data-analytics-label={tasterCta.label}
          >
            {tasterCta.label}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            className="nav-mast-menu is-dark grid h-11 w-11 min-h-11 min-w-11 cursor-pointer place-items-center rounded-[6px] focus-ring-brand-on-dark lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" weight="bold" />
            ) : (
              <List className="h-6 w-6" weight="bold" />
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
          className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
        >
          <div className="flex h-[var(--header-h)] items-center justify-between border-b border-white/15 px-4 sm:px-6">
            <Logo inverted size="lg" />
            <button
              type="button"
              onClick={() => closeMenu()}
              aria-label="Close menu"
              className="grid h-11 w-11 min-h-11 min-w-11 cursor-pointer place-items-center rounded-[6px] border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 focus-ring-brand-on-dark"
            >
              <X className="h-6 w-6" weight="bold" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col overflow-y-auto px-5 py-4"
            aria-label="Mobile"
          >
            {primaryNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                {...(n.to === "/contact"
                  ? { search: { interest: undefined } }
                  : {})}
                onClick={() => setOpen(false)}
                className="cursor-pointer border-b border-white/10 py-4 font-sans text-[1.45rem] font-medium tracking-[-0.015em] text-white/90 transition-colors duration-200 hover:text-white focus-ring-brand-on-dark"
                activeProps={{
                  className:
                    "cursor-pointer border-b border-white/10 py-4 font-sans text-[1.45rem] font-medium tracking-[-0.015em] text-gold-bright focus-ring-brand-on-dark",
                }}
              >
                {n.label}
              </Link>
            ))}
            <p className="mt-8 text-sm font-medium text-white/70">More</p>
            {moreNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="cursor-pointer border-b border-white/10 py-3.5 font-sans text-lg font-medium text-white/75 transition-colors duration-200 hover:text-white focus-ring-brand-on-dark"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/15 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Link
              to={tasterCta.to}
              search={tasterCta.search}
              onClick={() => setOpen(false)}
              className="btn-gold flex w-full min-h-11"
              data-analytics="cta"
              data-analytics-place="nav-mobile"
              data-analytics-label={tasterCta.label}
            >
              {tasterCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
