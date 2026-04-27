import { Outlet } from "react-router-dom";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useTheme } from "@/hooks/useTheme";

const SiteLayout = () => {
  useTheme();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SiteLayout;
