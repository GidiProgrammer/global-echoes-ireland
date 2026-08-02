import type { CSSProperties } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  style?: CSSProperties;
}

/** Word pull-up via CSS — no Framer on the LCP path. */
export function WordsPullUp({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  style,
}: WordsPullUpProps) {
  const words = text.split(" ").filter(Boolean);

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`words-pull-up-word inline-block ${wordClassName}`}
          style={{
            marginRight: "0.24em",
            animationDelay: `${delay + i * stagger}s`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delay?: number;
  stagger?: number;
  style?: CSSProperties;
}

/** Same reveal, but each segment can carry its own type treatment. */
export function WordsPullUpMultiStyle({
  segments,
  className = "",
  delay = 0,
  stagger = 0.06,
  style,
}: WordsPullUpMultiStyleProps) {
  const words = segments.flatMap((segment) =>
    segment.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className })),
  );

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((item, i) => (
        <span
          key={`${item.word}-${i}`}
          className={`words-pull-up-word inline-block ${item.className ?? ""}`}
          style={{
            marginRight: "0.24em",
            animationDelay: `${delay + i * stagger}s`,
          }}
        >
          {item.word}
        </span>
      ))}
    </span>
  );
}
