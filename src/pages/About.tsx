import { useEffect } from "react";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import PageHero from "@/components/site/PageHero";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About — Buildwired";
  }, []);
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title={<>Builders, designers, <span className="italic text-muted-foreground">strategists.</span></>}
        subtitle="A small senior team wiring the next generation of digital products — remote, worldwide, and obsessed with craft."
        variant="rings"
      />
      <About />
      <Testimonials />
    </>
  );
};

export default AboutPage;
