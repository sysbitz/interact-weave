import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import PageScene from "@/components/three/PageScene";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (item) document.title = `${item.client} — Buildwired`;
    window.scrollTo(0, 0);
  }, [item]);

  if (!item) {
    return (
      <section className="pt-40 pb-32 md:pt-52">
        <div className="container-edge text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Case study not found</h1>
          <Link to="/work" className="link-underline">← Back to all work</Link>
        </div>
      </section>
    );
  }

  const idx = projects.findIndex((p) => p.slug === item.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-32 md:pt-40 relative">
      <div className="pointer-events-none absolute top-0 right-0 h-[28rem] w-[28rem] opacity-60 -z-0">
        <PageScene variant="knot" className="absolute inset-0" />
      </div>
      <div className="container-edge relative">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All work
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span>{item.discipline}</span>
          <span className="text-muted-foreground/40">·</span>
          <span>{item.industry}</span>
          <span className="text-muted-foreground/40">·</span>
          <span>{item.year}</span>
        </div>

        <p className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {item.client}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight mt-3 max-w-4xl text-balance">
          {item.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {item.summary}
        </p>

        {item.url && item.url !== "#" && (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm link-underline"
          >
            Visit live site <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="container-edge mt-16">
        <div
          className={`relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-soft ${
            item.image ? "bg-muted" : `bg-gradient-to-br ${item.swatch}`
          }`}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.client} — ${item.title}`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 grain opacity-60" />
          )}
        </div>
      </div>

      <div className="container-edge mt-20 md:mt-28 grid md:grid-cols-2 gap-x-16 gap-y-14">
        {[
          { label: "Design", value: item.design },
          { label: "Technology", value: item.technology },
          { label: "Marketing", value: item.marketing },
          { label: "Management", value: item.management },
        ].map((b) => (
          <div key={b.label}>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent mb-4">
              {b.label}
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-balance">
              {b.value}
            </p>
          </div>
        ))}
      </div>

      <div className="container-edge mt-20">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Next case */}
      <div className="mt-32 border-t hairline">
        <Link
          to={`/work/${next.slug}`}
          className="block py-20 hover:bg-secondary/40 transition-colors"
        >
          <div className="container-edge flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Next case study
              </p>
              <h3 className="font-serif text-3xl md:text-5xl">
                {next.client} — <span className="italic text-muted-foreground">{next.title}</span>
              </h3>
            </div>
            <span className="grid place-items-center h-14 w-14 rounded-full bg-foreground text-background">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyPage;
