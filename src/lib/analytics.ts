import { track } from "@vercel/analytics";
import { COOKIE_CONSENT_STORAGE_KEY, readCookieConsent } from "./cookie-consent";

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

/** Inline bootstrap for the document <head>. One tag only. */
export function googleTagHeadScript() {
  return `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
(function () {
  var granted = false;
  try {
    var stored = JSON.parse(localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_STORAGE_KEY)}) || "null");
    granted = !!(stored && stored.analytics === true);
  } catch (e) {}
  gtag("consent", "default", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });
})();
gtag("js", new Date());
gtag("config", ${JSON.stringify(GA_MEASUREMENT_ID)});`;
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

/** Tag lives in <head>. This only unlocks cookies after Accept. */
export function grantGoogleAnalyticsConsent() {
  if (typeof window === "undefined") return;
  if (!readCookieConsent()?.analytics) return;
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag?.("event", "page_view", {
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    page_location: window.location.href,
    page_title: document.title,
  });
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
