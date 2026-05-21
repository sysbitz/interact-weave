import { useReveal } from "@/hooks/useReveal";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" ref={ref} className="reveal relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container-edge relative text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10">
          06 — Let's build
        </p>
        <h2 className="font-serif text-[14vw] md:text-[10vw] leading-[0.9] tracking-tighter text-balance">
          Got an <span className="italic accent-gradient">idea?</span>
          <br />
          Let's wire it up.
        </h2>

        <a
          href="mailto:buildwiredofficial@gmail.com"
          className="group inline-flex items-center gap-3 mt-14 rounded-full bg-foreground text-background pl-7 pr-2 py-2.5 text-base font-medium hover:bg-accent transition-colors"
        >
          buildwiredofficial@gmail.com
          <span className="grid place-items-center h-10 w-10 rounded-full bg-background text-foreground group-hover:rotate-45 transition-transform duration-500">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-left">
          {[
            { k: "Studio", v: "Remote · Worldwide" },
            { k: "Hours", v: "Thu–Fri · 24 hours" },
            { k: "New work", v: "Q3 · 02 slots" },
            { k: "Reply within", v: "24 hours" },
          ].map((b) => (
            <div key={b.k}>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {b.k}
              </div>
              <div className="font-medium">{b.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
