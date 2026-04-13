const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-semibold text-foreground">
          Portfolio
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
