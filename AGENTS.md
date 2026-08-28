# Global Echoes Ireland

Marketing site for Global Echoes Ireland. Deployed on **Vercel** at `https://www.globalechoesireland.ie`.

## Stack

- TanStack Start (React 19, SSR)
- Nitro (Vercel preset)
- Tailwind CSS v4
- Vite

## Local development

```bash
npm install
npm run dev
```

The contact form uses FormSubmit (free, no API key) and delivers to info@globalechoesireland.ie. Submitters receive FormSubmit’s `_autoresponse` acknowledgement. After the first live submission, confirm the activation email sent to that inbox.

The footer newsletter uses MailerLite. Set `MAILERLITE_API_TOKEN` (and optionally `MAILERLITE_GROUP_ID`) in Vercel. Enable double opt-in in MailerLite so new signups confirm by email. Send campaigns from the MailerLite dashboard.

Website usage is measured with Vercel Web Analytics and Speed Insights (no cookies). Google Analytics 4 (`G-9J718MWMGV`) runs only after the visitor accepts the cookie banner. Localhost is not sent to Google. Enable **Analytics** and **Speed Insights** on the Vercel project as well.

## Deployment

Push to the Git branch connected to Vercel. The build runs `npm run build` using the Nitro Vercel preset in `vite.config.ts`.

No form API key is required in Vercel for contact. After the first production enquiry, open info@globalechoesireland.ie and confirm FormSubmit's activation email.

For the mailing list, add the MailerLite token (and group id) as Vercel environment variables before expecting footer signups to succeed.

## Git

Avoid force-pushing `main` if others deploy from it. Keep the branch in a buildable state before pushing.
