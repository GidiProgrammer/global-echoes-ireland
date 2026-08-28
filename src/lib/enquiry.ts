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
  | {
      ok: false;
      reason: "activation" | "network" | "rejected" | "unconfigured";
      message: string;
    };

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/** Sent by FormSubmit to the enquirer. Keep short; this is an acknowledgement, not the staff reply. */
export const ENQUIRY_AUTORESPONSE = [
  "Thank you for contacting Global Echoes Ireland. We have received your enquiry and aim to reply within one working day.",
  "",
  "If your message is urgent, please call Natalie Rogers, Programme Coordinator, on +353 86 893 1903.",
  "",
  "This is an automatic acknowledgement. Our team will follow up from info@globalechoesireland.ie.",
].join("\n");

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
    _autoresponse: ENQUIRY_AUTORESPONSE,
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

export async function submitNewsletter(
  email: string,
  website = "",
): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, website }),
    });

    const data = (await response.json().catch(() => null)) as {
      ok?: boolean;
      reason?: string;
      message?: string;
    } | null;

    if (data?.ok) return { ok: true };

    const reason =
      data?.reason === "unconfigured" || data?.reason === "network"
        ? data.reason
        : "rejected";

    return {
      ok: false,
      reason,
      message: data?.message ?? "We could not add that address. Please try again.",
    };
  } catch {
    return {
      ok: false,
      reason: "network",
      message: "Connection failed. Please try again.",
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
