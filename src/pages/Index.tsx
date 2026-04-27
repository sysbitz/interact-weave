import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import ProjectCard from "@/components/site/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { projects } from "@/data/projects";

const WorkPreview = () => {
  const ref = useReveal<HTMLDivElement>();
  const featured = projects.slice(0, 4);
  return (
    <section ref={ref} className="reveal py-32 md:py-44 bg-secondary/40">
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
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-sm link-underline">
            View all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm hover:bg-secondary transition-colors"
          >
            View all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = "Buildwired — Digital studio for interactive products";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Buildwired is a software studio crafting interactive websites, mobile apps and brands. Design, technology, marketing and management — one studio.",
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WorkPreview />
      <Process />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Index;
