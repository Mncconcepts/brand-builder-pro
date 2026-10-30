import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";


const CONTACT_EMAIL = "clintonnweze111@gmail.com";

const socials = [
  { label: "GitHub",   url: "https://github.com/Mncconcepts",              icon: Github },
  { label: "LinkedIn", url: "https://linkedin.com/in/miracle-nweze-52aab330b",       icon: Linkedin },
  // { label: "Twitter",  url: "https://twitter.com/mncconcepts",            icon: Twitter },
  { label: "Facebook", url: "https://facebook.com/miracle.nweze.524",          icon: Facebook },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy", to: "/terms" },
  { label: "Terms", to: "/terms" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Middle: brand, navigation, socials */}
        <div className="grid grid-cols-1 gap-12 border-t border-border py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
            >
              Mncconcepts<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent team of developers and designers building digital products that
              pair solid engineering with human-centred design.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <h3 className="mb-5 text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="mb-5 text-sm font-semibold text-foreground">Follow us</h3>
            <ul className="space-y-3">
              {socials.map(({ label, handle, url, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label}: ${handle}`}
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/50 transition-colors group-hover:border-foreground/30 group-hover:bg-secondary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="font-medium text-foreground">{label}</span>
                      <span className="text-xs">{handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Mncconcepts. All rights reserved.
            </p>
            <ul className="flex gap-4">
              {legalLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-foreground/80">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;