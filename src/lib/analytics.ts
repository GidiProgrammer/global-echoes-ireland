import { track } from "@vercel/analytics";

type EventProps = Record<string, string | number | boolean | null>;

/** Cookie-less custom events. Never pass emails or names. */
export function trackEvent(name: string, props?: EventProps) {
  if (typeof window === "undefined") return;
  try {
    track(name, props);
  } catch {
    // Analytics must never block the page.
  }
}
