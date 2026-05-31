import { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitors scroll depth to toggle the "Scroll to Top" button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* ── MODERN SCROLL TO TOP ── */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="group flex items-center justify-center w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md border border-border text-foreground shadow-lg hover:border-primary/50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp 
              size={20} 
              className="group-hover:-translate-y-1 transition-transform duration-300 ease-out" 
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── ENHANCED WHATSAPP CHAT ── */}
      <motion.a
        href="https://wa.me/2349020495756"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-all"
        aria-label="Chat on WhatsApp"
      >
        {/* Main Icon */}
        <MessageCircle size={28} fill="white" strokeWidth={0} />
        
        {/* Status Pulse (Online Indicator) */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-4 border-[#25D366]"></span>
        </span>

        {/* Floating Tooltip / Better Chat Box Hint */}
        <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-card border border-border shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden md:block translate-x-4 group-hover:translate-x-0">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Support</span>
            <span className="text-xs text-foreground font-semibold whitespace-nowrap">Chat on WhatsApp</span>
          </div>
          {/* Tooltip Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-border" />
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;