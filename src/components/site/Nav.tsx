import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container-edge">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "glass rounded-full px-5 py-2.5" : "px-0 py-0"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-serif text-xl tracking-tight">
              build<span className="italic text-accent">wired</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => {
              const active = pathname === l.to || pathname.startsWith(l.to + "/");
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`link-underline transition-colors ${
                    active ? "text-foreground" : "hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-full hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
