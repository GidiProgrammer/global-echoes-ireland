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

The contact form uses FormSubmit (free, no API key) and delivers to info@globalechoesireland.ie. After the first live submission, confirm the activation email sent to that inbox.

## Deployment

Push to the Git branch connected to Vercel. The build runs `npm run build` using the Nitro Vercel preset in `vite.config.ts`.

No form API key is required in Vercel. After the first production enquiry, open info@globalechoesireland.ie and confirm FormSubmit's activation email.

## Git

Avoid force-pushing `main` if others deploy from it. Keep the branch in a buildable state before pushing.
