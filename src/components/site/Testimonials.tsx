import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    quote:
      "Buildwired moved like an internal team — but with the taste and rigor of a top studio. The launch outperformed every benchmark we set.",
    name: "Sara Mendez",
    role: "VP Product, Northwind Labs",
  },
  {
    quote:
      "Rare combination of design ambition and engineering discipline. They translated a fuzzy vision into a product our investors talk about.",
    name: "Daniel Cho",
    role: "Founder, Helios Capital",
  },
  {
    quote:
      "The interactive site they built for us is still winning awards two years later. Worth every dollar — and every hour of collaboration.",
    name: "Amelia Roy",
    role: "Creative Director, Vela",
  },
];

const Testimonials = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal py-32 md:py-44">
      <div className="container-edge">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
          05 — Words from clients
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mt-12">
          {items.map((t, i) => (
            <figure
              key={i}
              className="p-8 md:p-10 rounded-2xl border hairline bg-card hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
            >
              <span className="font-serif text-6xl text-accent leading-none block mb-4">“</span>
              <blockquote className="font-serif text-2xl md:text-3xl leading-[1.15] text-balance">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t hairline">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
