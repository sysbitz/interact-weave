import { useReveal } from "@/hooks/useReveal";
import { Code2, Palette, Megaphone, LineChart } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design",
    desc: "Brand systems, product UI/UX, motion and interaction design that communicates intent.",
    items: ["Brand identity", "Product design", "Design systems", "Motion"],
  },
  {
    icon: Code2,
    title: "Technology",
    desc: "Full-stack engineering — from interactive websites to scalable platforms and mobile apps.",
    items: ["Web platforms", "Mobile apps", "3D / WebGL", "APIs & infra"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Positioning, narrative and growth — turning craft into pipeline.",
    items: ["Positioning", "Launch strategy", "SEO & content", "Performance"],
  },
  {
    icon: LineChart,
    title: "Management",
    desc: "Hands-on product strategy and delivery — embedded with your team or end-to-end.",
    items: ["Product strategy", "Roadmaps", "Delivery", "Discovery"],
  },
];

const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" ref={ref} className="reveal py-32 md:py-44">
      <div className="container-edge">
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              01 — Services
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl text-balance">
              Four crafts.
              <br />
              <span className="italic text-muted-foreground">One studio.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {services.map(({ icon: Icon, title, desc, items }, i) => (
            <div
              key={title}
              className="group relative bg-background p-8 md:p-12 hover:bg-secondary/50 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <Icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">{title}</h3>
              <p className="text-muted-foreground max-w-md mb-8">{desc}</p>
              <ul className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <li key={it} className="text-xs font-mono uppercase tracking-wider text-muted-foreground border hairline rounded-full px-3 py-1.5">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
