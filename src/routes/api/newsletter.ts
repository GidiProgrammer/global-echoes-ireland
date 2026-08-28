import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().trim().email().max(255),
  website: z.string().max(200).optional(),
});

export const Route = createFileRoute("/api/newsletter")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return jsonResponse({ ok: false, message: "Invalid request." }, 400);
        }

        const parsed = bodySchema.safeParse(json);
        if (!parsed.success) {
          return jsonResponse(
            { ok: false, message: "Please enter a valid email address." },
            400,
          );
        }

        if (parsed.data.website) {
          return jsonResponse({ ok: true });
        }

        const token = process.env.MAILERLITE_API_TOKEN?.trim();
        if (!token) {
          return jsonResponse(
            {
              ok: false,
              reason: "unconfigured",
              message: "The mailing list is not connected yet.",
            },
            503,
          );
        }

        const groupId = process.env.MAILERLITE_GROUP_ID?.trim();
        const payload: Record<string, unknown> = {
          email: parsed.data.email,
          status: "unconfirmed",
        };
        if (groupId) payload.groups = [groupId];

        try {
          const response = await fetch(
            "https://connect.mailerlite.com/api/subscribers",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(payload),
            },
          );

          if (response.ok) {
            return jsonResponse({ ok: true });
          }

          const errorBody = (await response.json().catch(() => null)) as {
            message?: string;
          } | null;

          console.error("MailerLite subscribe failed", response.status, errorBody);
          return jsonResponse(
            {
              ok: false,
              message:
                errorBody?.message ??
                "We could not add that address. Please try again.",
            },
            502,
          );
        } catch {
          return jsonResponse(
            { ok: false, reason: "network", message: "Connection failed. Please try again." },
            502,
          );
        }
      },
    },
  },
});

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
