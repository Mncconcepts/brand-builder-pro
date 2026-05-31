import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 lg:col-span-6">
            <Link 
              to="/" 
              className="text-xm font-bold tracking-tighter text-foreground hover:opacity-70 transition-opacity"
            >
              Mncconcepts<span className="text-muted-foreground opacity-50">.</span>
            </Link>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              An independent team of developers and designers crafting digital experiences 
              that bridge the gap between complex engineering and human-centric design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-all flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-foreground mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-8">
              Connect
            </h4>
            <ul className="space-y-4">
              {["GitHub", "LinkedIn", "Twitter", "Facebook"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
             <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">
               © {currentYear} Mncconcepts
             </p>
             <div className="flex gap-4">
                <Link to="/privacy" className="text-[10px] font-medium text-muted-foreground/40 hover:text-foreground transition-colors uppercase tracking-widest">
                  Privacy
                </Link>
                <Link to="/terms" className="text-[10px] font-medium text-muted-foreground/40 hover:text-foreground transition-colors uppercase tracking-widest">
                  Terms
                </Link>
             </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold text-foreground/70 uppercase tracking-widest">
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;