import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Home, RotateCcw, Monitor, Database, ShieldAlert, Pause, Play } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const REDIRECT_TIME = 10; // seconds
  const [timeLeft, setTimeLeft] = useState(REDIRECT_TIME);
  const [isPaused, setIsPaused] = useState(false);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Clean, precise automated redirect ticking mechanism
  useEffect(() => {
    if (!isPaused) {
      countdownIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current!);
            navigate("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, [isPaused, navigate]);

  // Calculate percentage of circular countdown animation stroke
  const strokeDashoffset = 56.54 - (56.54 * timeLeft) / REDIRECT_TIME;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Decorative Blueprint/Grid Background Alignment */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] opacity-20" />
      
      <div className="max-w-4xl w-full grid md:grid-cols-5 gap-8 items-center bg-card/40 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-10 relative shadow-2xl shadow-black/10">
        
        {/* ── LEFT CONTAINER: Interactive Bento Skill Anchor Panel ── */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3 bg-background/60 border border-border/80 rounded-2xl p-6 hidden sm:flex flex-col gap-5 h-full min-h-[300px] justify-between group overflow-hidden relative"
        >
          <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
            <ShieldAlert className="w-48 h-48" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-destructive animate-ping" />
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">System Breakpoint</p>
            </div>
            <h3 className="font-display text-xl font-bold leading-snug max-w-xs mb-2">
              Lost your connection line? Keep exploring our stack.
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              While we get you back on track, check out some of our core architectural framework capabilities.
            </p>
          </div>

          {/* Micro Stack Grid Previews */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="p-3 bg-secondary/40 border border-border/50 rounded-xl flex items-center gap-2.5">
              <Monitor className="w-4 h-4 text-muted-foreground" />
              <span className="text-[11px] font-semibold">React / Next.js</span>
            </div>
            <div className="p-3 bg-secondary/40 border border-border/50 rounded-xl flex items-center gap-2.5">
              <Database className="w-4 h-4 text-muted-foreground" />
              <span className="text-[11px] font-semibold">Flutter / Dart</span>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT CONTAINER: Core 404 Action Metrics ── */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left h-full justify-between py-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-7xl md:text-8xl font-black tracking-tighter text-foreground leading-none mb-2">
              404
            </h1>
            <h2 className="text-lg font-bold text-foreground mb-3">
              Page Not Found
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-xs">
              The layout pattern or dynamic dynamic directory path you are requesting doesn't exist.
            </p>
          </motion.div>

          {/* Interactive Core Automated Actions Segment */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full flex flex-col gap-4 border-t border-border/50 pt-6"
          >
            {/* Circular Countdown Tracker Display */}
            <div className="flex items-center justify-center md:justify-start gap-3 text-xs font-medium text-muted-foreground">
              <div className="relative w-6 h-6 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="9" className="stroke-muted/20 fill-none" strokeWidth="2" />
                  <motion.circle 
                    cx="10" cy="10" r="9" 
                    className="stroke-foreground fill-none" 
                    strokeWidth="2"
                    strokeDasharray="56.54"
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-foreground">
                  {timeLeft}
                </span>
              </div>
              <p className="flex-1 text-left">
                {isPaused ? "Redirect paused" : `Auto-routing home in ${timeLeft}s...`}
              </p>
              
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="w-7 h-7 rounded-full border border-border bg-background hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label={isPaused ? "Resume Countdown" : "Pause Countdown"}
              >
                {isPaused ? <Play className="w-3 h-3 text-foreground" /> : <Pause className="w-3 h-3 text-foreground" />}
              </button>
            </div>

            {/* Navigation Button Controls */}
            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground text-background text-xs font-bold h-10 px-4 rounded-xl hover:opacity-90 transition-all active:scale-[0.98]"
              >
                <Home className="w-3.5 h-3.5" /> Return Home
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-bold h-10 px-4 rounded-xl hover:bg-secondary transition-colors active:scale-[0.98]"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Go Back
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;