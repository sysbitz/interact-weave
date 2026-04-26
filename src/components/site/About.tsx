import { useReveal } from "@/hooks/useReveal";

const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" ref={ref} className="reveal py-32 md:py-44 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-accent/30 blur-[120px] pointer-events-none" />
      <div className="container-edge relative">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-background/60 mb-6">
          04 — Studio
        </p>
        <h2 className="font-serif text-5xl md:text-8xl leading-[0.95] tracking-tight max-w-5xl text-balance">
          A small studio of builders, designers and strategists — wiring the next generation of
          digital products.
        </h2>

        <div className="mt-20 grid md:grid-cols-4 gap-12 md:gap-8">
          {[
            { k: "60+", v: "Products shipped" },
            { k: "12", v: "Countries served" },
            { k: "4yrs", v: "Average partnership" },
            { k: "98%", v: "Client retention" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-serif text-6xl md:text-7xl text-accent">{s.k}</div>
              <div className="mt-3 text-sm text-background/70">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
