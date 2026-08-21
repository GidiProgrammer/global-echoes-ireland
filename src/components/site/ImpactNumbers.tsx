import { Reveal } from "./Reveal";

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

const defaultStats: StatItem[] = [
  {
    value: "200+",
    label: "Sessions Delivered",
    description: "Structured rhythmic wellness sessions across Ireland."
  },
  {
    value: "3,000+",
    label: "Participants Engaged",
    description: "Care home residents, students, and community members."
  },
  {
    value: "40+",
    label: "Partner Settings",
    description: "Care homes, schools, universities, and community centers."
  },
  {
    value: "98%",
    label: "Recommendation Rate",
    description: "Based on feedback from our partner activity coordinators."
  }
];

interface ImpactNumbersProps {
  stats?: StatItem[];
  title?: string;
}

export function ImpactNumbers({
  stats = defaultStats,
  title = "Our community impact"
}: ImpactNumbersProps) {
  return (
    <section
      aria-labelledby="impact-heading"
      className="border-b border-forest/10 bg-white"
    >
      <div className="container-x py-16 md:py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2
            id="impact-heading"
            className="eyebrow uppercase tracking-widest text-gold"
          >
            {title}
          </h2>
        </Reveal>
        
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delayMs={50 + idx * 60} className="text-center">
              <div className="p-4">
                <span className="block font-display text-4xl md:text-5xl font-bold text-forest leading-none">
                  {stat.value}
                </span>
                <span className="mt-2 block font-display text-base font-semibold text-ink">
                  {stat.label}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground leading-relaxed max-w-[24ch] mx-auto">
                  {stat.description}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
