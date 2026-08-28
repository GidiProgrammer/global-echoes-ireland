import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { denyGoogleAnalytics, isGoogleAnalyticsConfigured, loadGoogleAnalytics } from "@/lib/analytics";
import {
  CONSENT_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isGoogleAnalyticsConfigured()) return;
    if (!readCookieConsent()) setOpen(true);

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ open?: boolean }>).detail;
      if (detail?.open) setOpen(true);
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!open || !isGoogleAnalyticsConfigured()) return null;

  const accept = () => {
    writeCookieConsent({ analytics: true });
    loadGoogleAnalytics();
    setOpen(false);
  };

  const reject = () => {
    writeCookieConsent({ analytics: false });
    denyGoogleAnalytics();
    setOpen(false);
  };

  return (
    <div
      role="region"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-copy"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-cream/15 bg-forest text-cream shadow-[0_-8px_32px_rgba(15,23,15,0.28)]"
    >
      <div className="container-x flex flex-col gap-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:flex-row md:items-end md:justify-between md:gap-8 md:py-5">
        <div className="max-w-2xl">
          <p id="cookie-banner-title" className="text-sm font-semibold text-gold-bright">
            Cookies
          </p>
          <p
            id="cookie-banner-copy"
            className="mt-1 text-sm leading-relaxed text-cream/85"
          >
            We use Google Analytics only if you agree. It helps us see which
            pages and buttons are used. We do not use advertising cookies. See
            our{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-2 hover:text-gold-bright focus-ring-brand-on-dark"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={reject}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[6px] border border-cream/50 bg-transparent px-5 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10 focus-ring-brand-on-dark"
          >
            Reject analytics
          </button>
          <button type="button" onClick={accept} className="btn-gold min-h-11">
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
