import { useEffect } from "react";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About — Buildwired";
  }, []);
  return (
    <div className="pt-24">
      <About />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
