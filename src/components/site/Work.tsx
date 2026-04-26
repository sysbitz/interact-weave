import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

type Project = {
  client: string;
  title: string;
  year: string;
  tags: string[];
  swatch: string; // tailwind gradient classes
};

const projects: Project[] = [
  {
    client: "Northwind Labs",
    title: "Realtime analytics platform",
    year: "2024",
    tags: ["Product", "Web", "Design system"],
    swatch: "from-orange-500 via-rose-500 to-fuchsia-600",
  },
  {
    client: "Helios Capital",
    title: "Investor portal & brand",
    year: "2024",
    tags: ["Brand", "Web", "Strategy"],
    swatch: "from-amber-300 via-orange-400 to-red-500",
  },
  {
    client: "Vela Studio",
    title: "Interactive 3D portfolio",
    year: "2023",
    tags: ["WebGL", "Motion", "Design"],
    swatch: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    client: "Atlas Health",
    title: "Patient mobile app",
    year: "2023",
    tags: ["Mobile", "Product", "Research"],
    swatch: "from-indigo-400 via-violet-500 to-purple-700",
  },
];

const Work = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="work" ref={ref} className="reveal py-32 md:py-44 bg-secondary/40">
      <div className="container-edge">
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              02 — Selected work
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl text-balance">
              Case studies <span className="italic text-muted-foreground">in motion.</span>
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm link-underline">
            All projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <a
              href="#contact"
              key={p.title}
              className="group block"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${p.swatch} shadow-soft`}>
                <div className="absolute inset-0 grain opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
                  <span>{p.client}</span>
                  <span>{p.year}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight max-w-[80%]">{p.title}</h3>
                  <span className="grid place-items-center h-12 w-12 rounded-full bg-white text-black translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {t}
                  </span>
                )).reduce((acc: any[], el, idx, arr) => {
                  acc.push(el);
                  if (idx < arr.length - 1) acc.push(<span key={`d${idx}`} className="text-muted-foreground/50">·</span>);
                  return acc;
                }, [])}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
