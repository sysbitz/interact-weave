import { useReveal } from "@/hooks/useReveal";

const techs = [
  "React", "Next.js", "TypeScript", "Three.js", "Node.js", "Postgres",
  "Tailwind", "Figma", "Framer Motion", "Supabase", "Stripe", "GSAP",
  "React Native", "WebGL", "Vercel", "AWS",
  "SEO", "SMM", "Ad Consultancy", "Google Ads", "Meta Ads", "Content Strategy",
  "Email Marketing", "Brand Identity", "Analytics", "CRO", "Copywriting", "PR",
];

const Marquee = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal py-16 md:py-24 border-y hairline overflow-hidden">
      <div className="container-edge mb-8">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          // Stack we wire with
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex shrink-0 gap-12 pr-12">
          {[...techs, ...techs].map((t, i) => (
            <span key={i} className="font-serif text-4xl md:text-6xl italic text-foreground/70 whitespace-nowrap">
              {t} <span className="text-accent not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
