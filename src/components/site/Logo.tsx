import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/gei-logo.jpg";

type LogoSize = "sm" | "md";

const sizeClass: Record<LogoSize, string> = {
  sm: "h-10 w-10 sm:h-11 sm:w-11",
  md: "h-12 w-12 sm:h-14 sm:w-14",
};

/** Official Global Echoes Ireland lockup. */
export function Logo({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: LogoSize;
}) {
  const ring = inverted
    ? "focus-visible:outline-cream"
    : "focus-visible:outline-forest";

  return (
    <Link
      to="/"
      aria-label="Global Echoes Ireland home"
      className={`group inline-flex min-h-11 max-w-full cursor-pointer items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${ring}`}
    >
      <img
        src={logoImg}
        alt="Global Echoes Ireland"
        width={1024}
        height={1024}
        className={`${sizeClass[size]} rounded-full object-cover shadow-[0_1px_0_rgb(0_0_0/0.06)]`}
        decoding="async"
      />
    </Link>
  );
}
