import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import outfit600 from "@fontsource/outfit/files/outfit-latin-600-normal.woff2?url";
import workSans400 from "@fontsource/work-sans/files/work-sans-latin-400-normal.woff2?url";
import {
  noIndexHead,
  organizationJsonLd,
  SITE_NAME,
} from "../lib/site";
import { Toaster } from "@/components/ui/sonner";
import { WebAnalytics } from "@/components/site/WebAnalytics";

function isUnindexedDocument(
  matches: Array<{ status: string; globalNotFound?: boolean }>,
) {
  return matches.some(
    (match) =>
      match.status === "notFound" ||
      match.status === "error" ||
      match.globalNotFound,
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="eyebrow">Global Echoes Ireland</span>
        <h1 className="mt-4 font-serif text-8xl">404</h1>
        <h2 className="mt-3 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-solid mt-8">Return home</Link>

      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-solid">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>

      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: ({ matches }) => {
    const unindexed = isUnindexedDocument(matches);
    const notFound = matches.some(
      (match) => match.status === "notFound" || match.globalNotFound,
    );
    const documentHead = unindexed
      ? noIndexHead(
          notFound
            ? {
                title: "Page not found | Global Echoes Ireland",
                description:
                  "This page does not exist. Return to Global Echoes Ireland for wellbeing music programmes and taster sessions.",
              }
            : {
                title: "This page didn't load | Global Echoes Ireland",
                description:
                  "Something went wrong loading this page. Try again or return to Global Echoes Ireland.",
              },
        )
      : { meta: [] as Array<Record<string, string>> };

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: SITE_NAME },
        { name: "theme-color", content: "#1B3F24" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_NAME },
        ...documentHead.meta,
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        {
          rel: "preload",
          href: outfit600,
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: workSans400,
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        { rel: "icon", href: "/favicon.ico?v=3", sizes: "any" },
        { rel: "icon", href: "/favicon-48x48.png?v=3", type: "image/png", sizes: "48x48" },
        { rel: "icon", href: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
        { rel: "icon", href: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=3", sizes: "180x180" },
        { rel: "manifest", href: "/site.webmanifest?v=3" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(organizationJsonLd()),
        },
      ],
    };
  },
  headers: ({ matches }) =>
    isUnindexedDocument(matches)
      ? { "X-Robots-Tag": "noindex, nofollow" }
      : undefined,
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster position="top-center" richColors />
      <WebAnalytics />
    </>
  );
}
