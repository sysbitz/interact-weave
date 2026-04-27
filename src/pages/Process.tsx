import { useEffect } from "react";
import Process from "@/components/site/Process";
import PageHero from "@/components/site/PageHero";

const ProcessPage = () => {
  useEffect(() => {
    document.title = "Process — Buildwired";
  }, []);
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={<>A <span className="italic">calm</span> way to ship ambitious work.</>}
        subtitle="Small senior team. Direct communication. Weekly increments — discovery to launch and beyond."
        variant="grid"
      />
      <Process />
    </>
  );
};

export default ProcessPage;
