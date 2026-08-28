import { track } from "@vercel/analytics";
import { readCookieConsent } from "./cookie-consent";

type EventProps = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-9J718MWMGV";

export function isGoogleAnalyticsConfigured() {
  return /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);
}

function isLocalHost() {
  if (typeof window === "undefined") return true;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

function toGtagParams(props?: EventProps) {
  if (!props) return undefined;
  const next: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value === null || value === undefined) continue;
    next[key] = value;
  }
  return Object.keys(next).length ? next : undefined;
}

function sendGoogleEvent(name: string, props?: EventProps) {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!readCookieConsent()?.analytics) return;
  const eventName = name.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 40);
  window.gtag("event", eventName, toGtagParams(props));
}

/** Cookie-less Vercel events always; Google only after consent. Never pass emails or names. */
export function trackEvent(name: string, props?: EventProps) {
  if (typeof window === "undefined") return;
  try {
    track(name, props);
  } catch {
    // Analytics must never block the page.
  }
  try {
    sendGoogleEvent(name, props);
  } catch {
    // Analytics must never block the page.
  }
}

export function trackGooglePageview(path: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!readCookieConsent()?.analytics) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (!isGoogleAnalyticsConfigured() || isLocalHost()) return;
  if (!readCookieConsent()?.analytics) return;
  if (document.querySelector('script[data-analytics-ga="true"]')) {
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // Google requires the Arguments object, not a rest-parameter array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  script.dataset.analyticsGa = "true";
  document.head.appendChild(script);
  trackGooglePageview(
    `${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
}

export function denyGoogleAnalytics() {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
