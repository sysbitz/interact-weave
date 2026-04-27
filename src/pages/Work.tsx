import { useEffect, useMemo, useState } from "react";
import ProjectCard from "@/components/site/ProjectCard";
import PageHero from "@/components/site/PageHero";
import { projects, disciplines, industries, Discipline, Industry } from "@/data/projects";

const PAGE_SIZE = 6;

const Chip = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-xs font-mono uppercase tracking-wider rounded-full px-4 py-2 border transition-colors ${
      active
        ? "bg-foreground text-background border-foreground"
        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
    }`}
  >
    {children}
  </button>
);

const WorkPage = () => {
  const [discipline, setDiscipline] = useState<Discipline | "All">("All");
  const [industry, setIndustry] = useState<Industry | "All">("All");
  const [shown, setShown] = useState(PAGE_SIZE);

  useEffect(() => {
    document.title = "Work — Buildwired";
  }, []);

  useEffect(() => {
    setShown(PAGE_SIZE);
  }, [discipline, industry]);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (discipline === "All" || p.discipline === discipline) &&
          (industry === "All" || p.industry === industry),
      ),
    [discipline, industry],
  );

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Case studies <span className="italic text-muted-foreground">in motion.</span></>}
        subtitle="Web platforms, mobile apps, brand identities, marketing programs and embedded delivery — filter by discipline or industry to find the work closest to yours."
        variant="torus"
      />
      <section className="pb-32 md:pb-44">
        <div className="container-edge">
        {/* Filters */}
        <div className="mt-2 space-y-5">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Discipline
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip active={discipline === "All"} onClick={() => setDiscipline("All")}>
                All
              </Chip>
              {disciplines.map((d) => (
                <Chip key={d} active={discipline === d} onClick={() => setDiscipline(d)}>
                  {d}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Industry
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip active={industry === "All"} onClick={() => setIndustry("All")}>
                All
              </Chip>
              {industries.map((i) => (
                <Chip key={i} active={industry === i} onClick={() => setIndustry(i)}>
                  {i}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-14 flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span>
            Showing {visible.length} / {filtered.length}
          </span>
          {(discipline !== "All" || industry !== "All") && (
            <button
              type="button"
              onClick={() => {
                setDiscipline("All");
                setIndustry("All");
              }}
              className="link-underline hover:text-foreground"
            >
              Reset filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border hairline p-16 text-center text-muted-foreground">
            No projects match this combination yet.
          </div>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-10">
            {visible.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              type="button"
              onClick={() => setShown((s) => s + PAGE_SIZE)}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-2 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Load more work
              <span className="grid place-items-center h-9 w-9 rounded-full bg-background text-foreground group-hover:translate-y-0.5 transition-transform duration-300">
                ↓
              </span>
            </button>
          </div>
        )}
        </div>
      </section>
    </>
  );
};

export default WorkPage;
