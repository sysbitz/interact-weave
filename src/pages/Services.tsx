import { useEffect } from "react";
import Services from "@/components/site/Services";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services — Buildwired";
  }, []);
  return (
    <div className="pt-24">
      <Services />
    </div>
  );
};

export default ServicesPage;
