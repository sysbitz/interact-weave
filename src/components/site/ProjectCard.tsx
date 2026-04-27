import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/data/projects";

const ProjectCard = ({ p }: { p: CaseStudy }) => (
  <Link to={`/work/${p.slug}`} className="group block text-left">
    <div
      className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft ${
        p.image ? "bg-muted" : `bg-gradient-to-br ${p.swatch}`
      }`}
    >
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.client} — ${p.title}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 grain opacity-60" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
        <span>{p.client}</span>
        <span>{p.year}</span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
        <div className="max-w-[80%]">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 mb-2">
            {p.discipline} · {p.industry}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight">{p.title}</h3>
        </div>
        <span className="grid place-items-center h-12 w-12 rounded-full bg-white text-black translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
      {p.tags.map((t, idx) => (
        <span key={t} className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {t}
          {idx < p.tags.length - 1 && <span className="ml-3 text-muted-foreground/40">·</span>}
        </span>
      ))}
    </div>
  </Link>
);

export default ProjectCard;
