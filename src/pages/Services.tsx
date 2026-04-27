import { useEffect } from "react";
import Services from "@/components/site/Services";
import PageHero from "@/components/site/PageHero";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services — Buildwired";
  }, []);
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Four disciplines, <span className="italic text-muted-foreground">one studio.</span></>}
        subtitle="Design, technology, marketing and management — woven together so the work ships sharp and lands with intent."
        variant="knot"
      />
      <Services />
    </>
  );
};

export default ServicesPage;
