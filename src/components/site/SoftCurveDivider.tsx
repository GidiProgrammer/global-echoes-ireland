import { cn } from "@/lib/utils";

/**
 * One cubic from edge to edge — a single shallow crest, not a double wave.
 */
export function SoftCurveDivider({
  fill = "#fafafa",
  className,
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full md:h-14 lg:h-[4.25rem]",
        className,
      )}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={fill}
        d="M0 62 C 360 18 1080 18 1440 62 L1440 80 L0 80 Z"
      />
    </svg>
  );
}
