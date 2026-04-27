import HeroScene from "@/components/three/HeroScene";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* 3D Scene */}
      <div className="absolute inset-0 -z-0">
        <HeroScene className="absolute inset-0" />
      </div>

      {/* Top meta strip */}
      <div className="container-edge pt-32 md:pt-40 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground animate-fade-in">
          <span>Digital Studio · Est. 2021</span>
          <span className="hidden md:inline">Available for Q3 — 02 slots</span>
        </div>
      </div>

      {/* Content */}
      <div className="container-edge relative z-10 pt-12 md:pt-20 pb-24">
        <h1 className="font-serif text-[14vw] md:text-[10vw] leading-[0.92] tracking-tighter text-balance animate-fade-in">
          We build
          <br />
          <span className="italic accent-gradient">digital</span> products
          <br />
          that <span className="italic">feel alive.</span>
        </h1>

        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-8 items-end">
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance animate-fade-in [animation-delay:200ms]">
            Buildwired is a software studio crafting interactive websites, mobile apps and brands
            for ambitious teams. Engineering meets design — with intent in every pixel.
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end animate-fade-in [animation-delay:400ms]">
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-base font-medium hover:bg-accent transition-colors"
            >
              See selected work
              <span className="grid place-items-center h-9 w-9 rounded-full bg-background text-foreground group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-base hover:bg-secondary transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground animate-fade-in-slow">
        <span>Scroll</span>
        <span className="h-10 w-px bg-foreground/30 relative overflow-hidden">
          <span className="absolute inset-0 bg-foreground animate-[shimmer_2.4s_ease-in-out_infinite]" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--foreground)), transparent)", backgroundSize: "100% 200%" }} />
        </span>
      </div>
    </section>
  );
};

export default Hero;
