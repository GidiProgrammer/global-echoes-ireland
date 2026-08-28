import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function currentPath(pathname: string, searchStr: string, hash: string) {
  return `${pathname}${searchStr}${hash}`;
}

export function WebAnalytics() {
  const { pathname, searchStr, hash } = useRouterState({
    select: (s) => ({
      pathname: s.location.pathname,
      searchStr: s.location.searchStr,
      hash: s.location.hash,
    }),
  });

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-analytics]");
      if (!el?.dataset.analytics) return;

      const props: Record<string, string> = {};
      if (el.dataset.analyticsPlace) props.place = el.dataset.analyticsPlace;
      if (el.dataset.analyticsLabel) props.label = el.dataset.analyticsLabel;
      trackEvent(el.dataset.analytics, props);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const path = currentPath(pathname, searchStr, hash);

  return (
    <>
      <Analytics
        path={path}
        route={pathname}
        beforeSend={(event) => {
          if (event.type === "pageview" && event.url.includes("/api/")) {
            return null;
          }
          return event;
        }}
      />
      <SpeedInsights route={pathname} />
    </>
  );
}
