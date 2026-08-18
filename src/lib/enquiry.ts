import { CONTACT_EMAIL } from "./contact";

export type EnquiryPayload = {
  name: string;
  email: string;
  organisation?: string;
  interest: string;
  message: string;
};

type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "activation" | "network" | "rejected"; message: string };

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/** Primary path: FormSubmit to info@. Free, no API key. First live send activates the inbox. */
export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitResult> {
  const body = {
    name: payload.name,
    email: payload.email,
    _replyto: payload.email,
    _subject: `Enquiry: ${payload.interest}`,
    organisation: payload.organisation ?? "",
    interest: payload.interest,
    message: payload.message,
    _template: "table",
    _captcha: "false",
    _honey: "",
  };

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = (await response.json()) as {
      success?: boolean | string;
      message?: string;
    };

    const success = data.success === true || data.success === "true";
    if (success) return { ok: true };

    const message = data.message ?? "We could not send your enquiry. Please email us directly.";
    const needsActivation = /activat|confirm your email/i.test(message);

    return {
      ok: false,
      reason: needsActivation ? "activation" : "rejected",
      message,
    };
  } catch {
    return {
      ok: false,
      reason: "network",
      message: "Connection failed. Please email us directly.",
    };
  }
}

/** Fallback when hosted submit is unavailable. */
export function openMailtoDraft(payload: EnquiryPayload): void {
  const subject = encodeURIComponent(`Enquiry: ${payload.interest}`);
  const body = encodeURIComponent(
    [
      payload.message,
      "",
      "---",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.organisation ? `Organisation: ${payload.organisation}` : null,
      `Interest: ${payload.interest}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
