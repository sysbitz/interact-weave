import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We map the problem, audience and ambition. Workshops, audits, and a sharp written brief.",
  },
  {
    n: "02",
    title: "Design",
    body: "Concepts move fast — directions, prototypes, and a design system that scales with the product.",
  },
  {
    n: "03",
    title: "Build",
    body: "Engineering ships in weekly increments. Type-safe, performant, accessible. No surprises.",
  },
  {
    n: "04",
    title: "Launch & iterate",
    body: "We measure, refine and grow. The launch is the start, not the finish.",
  },
];

const Process = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="process" ref={ref} className="reveal py-32 md:py-44">
      <div className="container-edge">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              03 — Process
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
              A <span className="italic">calm</span> way to ship ambitious work.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Small, senior team. Direct communication. We obsess over craft, but we move fast and
              ship with intent.
            </p>
          </div>

          <ol className="md:col-span-7 space-y-px bg-border rounded-2xl overflow-hidden">
            {steps.map((s) => (
              <li key={s.n} className="group bg-background p-8 md:p-10 hover:bg-secondary/50 transition-colors">
                <div className="flex items-start gap-8">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl md:text-4xl mb-3">{s.title}</h3>
                    <p className="text-muted-foreground max-w-lg">{s.body}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
