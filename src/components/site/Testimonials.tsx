import { Reveal } from "./Reveal";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organisation: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "The rhythmic wellbeing sessions have brought an incredible sense of joy and connection to our residents. We see noticeable improvements in mood and engagement after every visit.",
    author: "Mary Connolly",
    role: "Activities Coordinator",
    organisation: "St. Jude's Care Home, Dublin"
  },
  {
    quote: "Dr John and the team have a unique gift. The percussion workshops are highly interactive and fully inclusive, allowing pupils of all abilities to connect and learn together.",
    author: "Seán O'Connor",
    role: "School Principal",
    organisation: "Balbriggan Community School"
  },
  {
    quote: "An exceptional cultural and therapeutic experience. It has become a cornerstone of our community integration and wellness program.",
    author: "Bernadette Dwyer",
    role: "Community Director",
    organisation: "West Dublin Family Resource Centre"
  }
];

interface TestimonialsProps {
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function Testimonials({
  items = defaultTestimonials,
  title = "What our partners say",
  subtitle = "Feedback from care homes, schools, and community groups across Ireland."
}: TestimonialsProps) {
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className="container-x py-16 md:py-24">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, idx) => (
            <Reveal key={idx} delayMs={100 + idx * 80}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-forest/10 bg-white p-6 md:p-8 shadow-sm">
                <div>
                  {/* Decorative quotes */}
                  <span className="font-display text-4xl text-gold-bright leading-none select-none">“</span>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-foreground/90 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 border-t border-forest/5 pt-4">
                  <p className="font-display text-base font-semibold text-ink">{t.author}</p>
                  <p className="text-xs text-forest">{t.role}</p>
                  <p className="text-xs text-muted-foreground font-medium">{t.organisation}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
