import PageScene, { SceneVariant } from "@/components/three/PageScene";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  variant: SceneVariant;
}

const PageHero = ({ eyebrow, title, subtitle, variant }: Props) => {
  return (
    <section className="relative overflow-hidden grain pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 -z-0 opacity-90">
        <PageScene variant={variant} className="absolute inset-0" />
      </div>

      <div className="container-edge relative z-10">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
