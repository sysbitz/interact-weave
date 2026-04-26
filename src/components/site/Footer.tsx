const Footer = () => {
  return (
    <footer className="border-t hairline py-10">
      <div className="container-edge flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <div>© {new Date().getFullYear()} Buildwired Studio</div>
        <div className="flex items-center gap-6">
          <a href="#" className="link-underline hover:text-foreground">Instagram</a>
          <a href="#" className="link-underline hover:text-foreground">LinkedIn</a>
          <a href="#" className="link-underline hover:text-foreground">Dribbble</a>
          <a href="#" className="link-underline hover:text-foreground">GitHub</a>
        </div>
        <div>Made with intent · v1.0</div>
      </div>
    </footer>
  );
};

export default Footer;
