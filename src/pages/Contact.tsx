import { useEffect } from "react";
import Contact from "@/components/site/Contact";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact — Buildwired";
  }, []);
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
};

export default ContactPage;
