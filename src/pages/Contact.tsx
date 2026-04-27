import { useEffect } from "react";
import Contact from "@/components/site/Contact";
import PageHero from "@/components/site/PageHero";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact — Buildwired";
  }, []);
  return (
    <>
      <PageHero
        eyebrow="Let's build"
        title={<>Got an <span className="italic accent-gradient">idea?</span> Let's wire it up.</>}
        subtitle="Tell us about the project — we reply within 24 hours. Two new slots open this quarter."
        variant="crystal"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
