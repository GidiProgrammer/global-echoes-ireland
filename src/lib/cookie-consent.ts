const STORAGE_KEY = "gei-cookie-consent";
export const CONSENT_EVENT = "gei-cookie-consent";

export type CookieConsent = {
  analytics: boolean;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed) || typeof parsed.analytics !== "boolean") return null;
    return { analytics: parsed.analytics };
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: CookieConsent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}

export function requestCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { open: true } }));
}
