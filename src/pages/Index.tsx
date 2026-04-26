import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Services from "@/components/site/Services";
import Work from "@/components/site/Work";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  // Initialize theme on mount
  useTheme();

  useEffect(() => {
    document.title = "Buildwired — Digital studio for interactive products";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Buildwired is a software studio crafting interactive websites, mobile apps and brands. Design, technology, marketing and management — one studio."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
