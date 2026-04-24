import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display font-bold text-xl">Mncconcepts</Link>
            <p className="mt-4 text-primary-foreground/60 max-w-sm leading-relaxed text-sm">
              A web developer and product designer helping businesses build digital 
              products that are functional, beautiful, and built to last.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4 uppercase tracking-wider text-primary-foreground/40">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4 uppercase tracking-wider text-primary-foreground/40">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              {["GitHub", "LinkedIn", "Twitter", "Facebook"].map((item) => (
                <li key={item}>
                  <a href="" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Mncconcepts. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="/notfound" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
