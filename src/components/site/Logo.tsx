import { Link } from "@tanstack/react-router";

type LogoSize = "sm" | "md" | "lg";

const sizeClass: Record<LogoSize, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-12 w-12 sm:h-14 sm:w-14",
};

/** Official GE lockup (public/favicon-48x48.png, with larger siblings for sharpness). */
export function Logo({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: LogoSize;
}) {
  const ring = inverted
    ? "ring-1 ring-white/40 focus-visible:outline-white"
    : "ring-1 ring-forest/10 focus-visible:outline-forest";

  return (
    <Link
      to="/"
      aria-label="Global Echoes Ireland home"
      className={`group inline-flex min-h-11 max-w-full cursor-pointer items-center overflow-hidden rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${ring}`}
    >
      <img
        src="/favicon-48x48.png"
        srcSet="/favicon-48x48.png 48w, /apple-touch-icon.png 180w, /icon-192.png 192w, /icon-512.png 512w"
        sizes={size === "lg" ? "(min-width: 640px) 3.5rem, 3rem" : "3rem"}
        width={48}
        height={48}
        alt=""
        className={`${sizeClass[size]} rounded-full object-cover`}
      />
    </Link>
  );
}
