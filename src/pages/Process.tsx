import { useEffect } from "react";
import Process from "@/components/site/Process";

const ProcessPage = () => {
  useEffect(() => {
    document.title = "Process — Buildwired";
  }, []);
  return (
    <div className="pt-24">
      <Process />
    </div>
  );
};

export default ProcessPage;
