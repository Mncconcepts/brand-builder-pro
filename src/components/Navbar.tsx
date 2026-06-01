import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 pointer-events-none">
      {/* ── DESKTOP & MOBILE MAIN WRAPPER ── */}
      <nav className="max-w-6xl mx-auto bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl shadow-black/[0.03] pointer-events-auto transition-all">
        <div className="px-6 flex items-center justify-between h-16">
          
          {/* ── Brand Logo & Profile Image Group ── */}
          <Link to="/" className="flex items-center gap-2 group select-none">
            {/* Profile Avatar Container */}
            <div className="relative w-9 h-9  shrink-0 overflow-hidden rounded-lg border border-border/40 bg-secondary/50 group-hover:border-foreground/20 transition-all duration-300">
              <img 
                src="/profile3.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-black tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                Mncconcepts.
              </span>
              <span className="text-[6.5px] font-black tracking-[0.25em] uppercase text-muted-foreground/80 mt-1">
                Development & Design
              </span>
            </div>
          </Link>

          {/* Desktop Items */}
          <ul className="hidden lg:flex items-center gap-1 bg-secondary/30 p-1 rounded-xl border border-border/20">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    to={item.href}
                    className={`relative z-10 block text-xs font-bold tracking-tight px-4 py-2 transition-colors duration-300 ${
                      isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-foreground rounded-lg -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Hand Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="text-xs font-bold bg-foreground text-background px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md shadow-black/5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Shell Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/50 border border-border/40 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1 w-4 items-end">
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 origin-right ${
                    mobileOpen ? "w-4 -rotate-45 -translate-y-[1.5px]" : "w-4"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-200 ${
                    mobileOpen ? "w-0 opacity-0" : "w-3"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 origin-right ${
                    mobileOpen ? "w-4 rotate-45 translate-y-[1.5px]" : "w-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── FLOATING OVERLAY MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden max-w-6xl mx-auto mt-2 pointer-events-auto"
          >
            <div className="bg-background/85 backdrop-blur-2xl border border-border/60 rounded-2xl p-6 shadow-2xl shadow-black/10">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.li 
                      key={item.href}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block text-sm font-bold tracking-tight px-4 py-3 rounded-xl transition-colors ${
                          isActive
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
                
                <motion.li 
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="pt-4 mt-2 border-t border-border/40 flex flex-col gap-3"
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center text-xs font-bold bg-foreground text-background py-3.5 rounded-xl transition-all active:scale-[0.99]"
                  >
                    Get Started
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;