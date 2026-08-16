import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterText from "@/components/TypewriterText";
import BookCallSheet from "@/components/BookCallSheet";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  Star,
  Sparkles,
  Clock,
  FolderCheck,
  Users,
  Award,
  ChevronDown,
  CheckCircle2,
  X,
  // NEW — used by the Courses section
  Palette,
  Code2,
  Layout,
  Server,
  Eye,
} from "lucide-react";

/* ─── Skeleton Component ─── */
const SkeletonImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer/Skeleton Effect */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-muted/20"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

const ComingSoonImage = ({
  icon: Icon,
  className,
}: {
  icon: React.ElementType;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(
      () => setIsLoaded(true),
      900 + Math.random() * 500,
    );
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-secondary/40 ${className}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-muted/20"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-border/60 m-2 rounded-lg"
      >
        <Icon className="w-5 h-5 text-muted-foreground/50" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Coming Soon
        </span>
      </motion.div>
    </div>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.86L2 22l5.34-1.4a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 1.67c2.14 0 4.15.83 5.66 2.35a7.95 7.95 0 0 1 2.34 5.66c0 4.42-3.6 8.02-8.02 8.02a8 8 0 0 1-4.07-1.11l-.29-.17-2.98.78.8-2.9-.19-.3a7.93 7.93 0 0 1-1.22-4.28c0-4.42 3.6-8.02 8.02-8.02zm-3.6 4.5c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.71 4.19 3.7 2.07.83 2.49.66 2.94.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47z" />
  </svg>
);

function useCountUp(target: number, duration = 1800, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
}

function AnimatedStat({
  value,
  label,
  triggered,
}: {
  value: string;
  label: string;
  triggered: boolean;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const count = useCountUp(numeric, 1800, triggered);
  return (
    <div className="group">
      <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-none">
        {triggered ? `${count}${suffix}` : `0${suffix}`}
      </p>
      <p className="text-xs text-muted-foreground mt-2 uppercase tracking-tight font-medium">
        {label}
      </p>
    </div>
  );
}

/* ─── data ── */
const stats = [
  {
    value: "4+",
    label: "Years Experience",
    icon: Clock,
    detail:
      "Four years shipping production-grade products across fintech, e-commerce, and events.",
  },
  {
    value: "50+",
    label: "Projects Delivered",
    icon: FolderCheck,
    detail:
      "From single-flow MVPs to multi-phase platforms, all taken from brief to launch.",
  },
  {
    value: "30+",
    label: "Happy Clients",
    icon: Users,
    detail:
      "Founders and teams who came back for their next build instead of shopping around.",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Award,
    detail:
      "Measured after handover, not just at kickoff — quality that holds once we're gone.",
  },
];

const trustedAvatars = [
  { src: "/cc1.png", name: "Oonsa" },
  { src: "/cc2.png", name: "Oonsa" },
  { src: "/cc1.png", name: "Oonsa" },
];

const featuredServices = [
  {
    number: "01",
    title: "Web & App Development",
    desc: "Modern, scalable websites & applications built with the latest technologies.",
    image: "/proj-pearlz-store.png",
    bullets: [
      "React / Next.js applications",
      "React Native / Flutter-Dart",
      "TypeScript & clean architecture",
      "API & third-party integrations",
    ],
  },
  {
    number: "02",
    title: "Product Design",
    desc: "User-centered design that drives engagement and business results.",
    image: "/proj-oma.png",
    bullets: [
      "End-to-end UX research",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Usability testing",
    ],
  },
  {
    number: "03",
    title: "UI/UX Design",
    desc: "Intuitive interfaces and seamless experiences across all devices.",
    image: "/post-2dap.png",
    bullets: [
      "Interface & interaction design",
      "Design systems & component libraries",
      "Responsive & accessible layouts",
      "Brand-aligned visual language",
    ],
  },
];

const featuredProjects = [
  {
    title: "Multiple Vendor Store CVMP",
    category: "App Design",
    year: "2025",
    image: "/proj-storeapp22.png",
    tags: ["Mobile", "B2B", "CLASSIFIED"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Visa Guard Africa",
    category: "Product Design & Development",
    year: "2026",
    image: "/vgalanding2.jpg",
    tags: ["WebApp", " FINTECH", "TRAVEL SAFETY"],
    color: "from-primary/10 to-transparent",
  },
  {
    title: "Oonsa Event Webapp",
    category: "UI/UX Design",
    year: "2025",
    image: "/Oonsa.png",
    tags: ["Web App", "Events"],
    color: "from-foreground/5 to-primary/10",
  },
];

const testimonials = [
  {
    quote:
      "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "John Chukwudi Eze",
    role: "FOUNDER, Visa Guard Africa",
  },
  {
    quote:
      "Delivered a stunning website that perfectly captures our brand. Professional, responsive, and a pleasure to work with.",
    name: "Oonsa",
    role: "Founder, Oonsa Event WebApp",
  },
  {
    quote:
      "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
];

const scopeTiers = [
  {
    id: "starter",
    label: "Starter",
    timeline: "4-5 weeks",
    blurb: "Best for an MVP or a single, focused flow you need live fast.",
  },
  {
    id: "growth",
    label: "Growth",
    timeline: "8-10 weeks",
    blurb: "Best for a full product with several features working together.",
  },
  {
    id: "custom",
    label: "Custom",
    timeline: "10+ weeks",
    blurb: "Best for complex, multi-phase builds with their own roadmap.",
  },
];

const WHATSAPP_NUMBER = "2349020495756";

const blogPosts = [
  {
    title: "Design Systems That Scale With Your Product",
    excerpt:
      "How we build reusable component libraries that keep teams shipping fast without sacrificing consistency.",
    category: "Design",
    date: "Jul 2026",
    readTime: "6 min read",
    image: "/blog7.jpg",
  },
  {
    title: "From MVP to Series A: Choosing the Right Stack",
    excerpt:
      "A practical breakdown of the framework and infrastructure decisions that still hold up once you scale.",
    category: "Engineering",
    date: "Jun 2026",
    readTime: "8 min read",
    image: "/hero-tech-design.jpg",
  },
  {
    title: "The Real Cost of Skipping UX Research",
    excerpt:
      "Why the fastest route to product-market fit still starts with talking to your users first.",
    category: "Strategy",
    date: "May 2026",
    readTime: "5 min read",
    image: "/blog3.jpg",
  },
];

const courses = [
  {
    icon: Palette,
    title: "Product Design",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    image: "/proj-oma.png",
    desc: "A guided, project-based track covering research, wireframing, prototyping and high-fidelity UI taught the way we actually work with clients.",
    bullets: [
      "User research & personas",
      "Wireframes to high-fidelity UI",
      "Design systems & handoff",
      "Portfolio-ready case study",
    ],
  },
   {
      icon: Layout,
      title: "Frontend Development",
      level: "Intermediate → Advanced",
      duration: "8 weeks",
      desc: "Go deep on React, state management and the interaction details that separate good frontend work from great frontend work.",
      bullets: [
        "React, Vite, TypeScript & hooks",
        "State management patterns",
        "Animation & micro-interactions",
        "Performance & accessibility",
      ],
    },
];

const Index = () => {
  const navigate = useNavigate();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const [expandedStat, setExpandedStat] = useState<number | null>(null);

  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>("growth");
  const [inquiryNote, setInquiryNote] = useState("");
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);

  const openServiceModal = (index: number) => {
    setActiveService(index);
    setSelectedTier("growth");
    setInquiryNote("");
    setIsSubmittingInquiry(false);
  };

  const closeServiceModal = () => {
    setActiveService(null);
    setIsSubmittingInquiry(false);
  };

  const handleContinueToContact = () => {
    if (activeService === null) return;
    setIsSubmittingInquiry(true);
    const service = featuredServices[activeService];
    const tier = scopeTiers.find((t) => t.id === selectedTier);
    const params = new URLSearchParams({
      service: service.title,
      scope: tier?.label ?? "",
      timeline: tier?.timeline ?? "",
    });
    if (inquiryNote.trim()) params.set("notes", inquiryNote.trim());
    window.setTimeout(() => {
      navigate(`/contact?${params.toString()}`);
    }, 550);
  };

  // NEW — course "Book Spot" follows the exact same pattern as
  // handleContinueToContact above: build query params, go to /contact.
  const handleCourseBook = (course: (typeof courses)[number]) => {
    const params = new URLSearchParams({
      course: course.title,
      interest: "Course Enrollment",
      level: course.level,
    });
    navigate(`/contact?${params.toString()}`);
  };

  // NEW — course WhatsApp quick-reach button
  const handleCourseWhatsApp = (course: (typeof courses)[number]) => {
    const text = encodeURIComponent(
      `Hi! I'm interested in the ${course.title} course. Can you share more details?`,
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  useEffect(() => {
    if (activeService === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeServiceModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeService]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center pt-8">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm group cursor-default select-none overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {/* <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" /> */}
                <span className="text-xs font-extra-small text-primary tracking-tight uppercase">
                  Design & Development
                </span>
              </div>
            </div>

            <h1 className="font-Display text-balance text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-foreground mb-4">
              <TypewriterText
                text="Creating Digital Experiences That Work."
                speed={55}
                startDelay={200}
              />
            </h1>

            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-8">
              From strategy and design to development and deployment, we craft
              world-class web applications and digital solutions that empower
              businesses to innovate and scale.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 text-sm font-semibold rounded-lg hover:bg-secondary transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {trustedAvatars.map((av, i) => (
                  <div
                    key={av.name}
                    className="relative w-9 h-9 rounded-full border-2 border-background overflow-hidden shadow-md ring-1 ring-border/30"
                    style={{
                      marginLeft: i === 0 ? 0 : "-10px",
                      zIndex: trustedAvatars.length - i,
                    }}
                    title={av.name}
                  >
                    <SkeletonImage
                      src={av.src}
                      alt={av.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="relative w-9 h-9 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-md"
                  style={{ marginLeft: "-10px", zIndex: 0 }}
                >
                  +12
                </div>
              </div>

              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                </div>
                <p className="text-xs text-muted-foreground leading-tight">
                  Trusted by{" "}
                  <span className="font-semibold text-foreground">
                    30+ clients
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden sm:block sm:mt-10 lg:mt-0"
          >
            <div className="absolute -inset-4 rounded-2xl border border-border/40 bg-secondary/20 backdrop-blur-sm -z-10" />
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 -z-10" />

            <div className="aspect-[4/4] overflow-hidden rounded-xl border border-border/60 shadow-1md">
              <SkeletonImage
                src="/proj-oma.png"
                alt="Featured project preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-6 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-m backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">
                  50+ Projects
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Successfully Delivered
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-2 shadow-l">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-foreground">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats: tap any card to see what's behind the number ─── */}
      <section className="border-y border-border bg-secondary/30">
        <div
          ref={statsRef}
          className="font-display max-w-6xl mx-auto px-6 py-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, i) => {
              const isOpen = expandedStat === i;
              const Icon = stat.icon;
              return (
                <motion.button
                  type="button"
                  key={stat.label}
                  onClick={() => setExpandedStat(isOpen ? null : i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  aria-expanded={isOpen}
                  className={`group text-left bg-card border rounded-2xl p-5 sm:p-6 transition-all duration-300  focus-visible:ring-2 focus-visible:ring-primary/10 ${
                    isOpen
                      ? "border-primary/40 shadow-xs"
                      : "border-border hover:border-primary/30 hover:-translate-y-1"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatedStat
                    value={stat.value}
                    label={stat.label}
                    triggered={statsInView}
                  />

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs text-muted-foreground leading-relaxed overflow-hidden pt-3 border-t border-border/60"
                      >
                        {stat.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
          <p className="text-center text-[11px] text-muted-foreground mt-6 font-sans normal-case tracking-normal">
            Tap a number to see what's behind it.
          </p>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-tight uppercase text-primary mb-2">
                Our Services
              </p>
              <h2 className="font-display leading-10 text-balance lg:text-6xl mt-2 text-4xl sm:text-6xl tracking-tight text-foreground font-extrabold">
              Services We Offer.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all self-start md:self-auto"
            >
              View All Services <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-xm hover:shadow-l hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-48 bg-secondary overflow-hidden">
                  <SkeletonImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-muted-foreground/70 tracking-widest uppercase bg-background/60 backdrop-blur-sm border border-border/40 px-2 py-1 rounded-md">
                    {service.number}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => openServiceModal(i)}
                    className="w-full text-center text-xs font-semibold py-2.5 rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    Book This Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NEW — Courses section
          ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-left"
          >
            <p className="text-xs font-semibold tracking-tight uppercase text-primary mb-2">
              Learn
            </p>
            <h2 className="font-display leading-8 text-balance lg:text-6xl mt-3 text-4xl sm:text-5xl tracking-tight text-foreground font-extrabold">
              Browse All Courses and Mentorship Programm.
            </h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-lg leading-relaxed">
              Hands-on, project-based tracks taught by the same team building
              products in production. Cohorts open soon book your spot to be
              first in line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
                 > 
                  <ComingSoonImage
                    icon={Icon}
                    className="aspect-[16/9] w-full"
                  /> 

                  <div className="flex flex-col flex-1 p-5 sm:p-6 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {course.desc}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {course.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2.5 mt-auto pt-4 border-t border-border/60">
                      <button
                        type="button"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Browse Courses
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCourseWhatsApp(course)}
                        aria-label={`Chat about ${course.title} on WhatsApp`}
                        className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-lg text-foreground hover:bg-background hover:border-emerald-500/40 hover:text-emerald-500 transition-all duration-200 shrink-0"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-tight uppercase text-primary mb-2">
                Production Based
              </p>
              <h2 className="font-display lg:text-6xl text-4xl sm:text-6xl tracking-tight font-extrabold text-foreground">
                Shipped Products.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all self-start md:self-auto"
            >
              View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Link
                  to="/projects"
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xm hover:-translate-y-1.5 transition-all duration-300 h-full"
                >
                  <div
                    className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.color}`}
                  >
                    <SkeletonImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-xs">
                      <ArrowUpRight className="w-4 h-4 text-foreground" />
                    </div>

                    <div className="absolute bottom-3 left-3 text-[10px] font-bold text-muted-foreground bg-background/70 backdrop-blur-sm border border-border/40 px-2 py-1 rounded-md">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-balance text-muted-foreground leading-relaxed">
                      List of digital products shipped and running on production successfully: websites & applications.
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-1 border-t border-border/50">
                      <p className="text-xs text-muted-foreground font-semibold">
                        {project.category}
                      </p>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-2">
              Client Reviews
            </p>
            <h2 className="font-display lg:text-6xl text-4xl sm:text-6xl tracking-tight text-foreground font-extrabold">
              Testimonials.
            </h2>
          </motion.div>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NEW — Blog section
          ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 text-left"
          >
            <div className="max-w-lg">
              <p className="text-xs font-semibold tracking-tight uppercase text-primary mb-2">
                Insights
              </p>
              <h2 className="font-display leading-10 text-balance lg:text-6xl mt-3 text-4xl sm:text-6xl tracking-tight text-foreground font-extrabold">
                From The Blogs.
              </h2>
              <p className="text-sm text-muted-foreground mt-0 leading-relaxed">
                Notes on design, development, engineering and the decisions
                behind the products we build.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all self-start md:self-auto shrink-0"
            >
              Visit Blog <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                <div className="aspect-[14/10] overflow-hidden">
                  <SkeletonImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <span className="text-[11px] text-muted-foreground">
                      {post.date}
                    </span>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors group/btn"
                    >
                      Read More
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-wide uppercase text-primary-foreground/60 mb-4">
              Let's Collaborate
            </p>
            <h2 className="font-display lg:text-5xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">
              Need Any Of Our Services?
            </h2>
            <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
              Let's discuss how we can help bring your vision to life with clean
              code and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5"
              >
                Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-3.5 text-sm font-bold rounded-xl hover:bg-background/10 transition-all hover:-translate-y-0.5"
                  >
                    <CalendarIcon className="h-3.5 w-3.5" /> Book A Call Session
                  </button>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ─── Service configurator: replaces the plain "go to contact" link ─── */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeServiceModal}
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-card border border-border rounded-t-2xl sm:rounded-2xl shadow-2md"
            >
              <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    {featuredServices[activeService].number} · Configure
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {featuredServices[activeService].title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeServiceModal}
                  aria-label="Close"
                  className="w-8 h-8 shrink-0 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-foreground mb-3">
                    Choose your scope
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {scopeTiers.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier.id)}
                        className={`text-left rounded-xl border px-3 py-3 transition-all duration-200 ${
                          selectedTier === tier.id
                            ? "border bg-primary/10 shadow-xs"
                            : "border-border hover:border-primary/20"
                        }`}
                      >
                        <p
                          className={`text-xs font-bold mb-0.5 ${
                            selectedTier === tier.id
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                        >
                          {tier.label}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {tier.timeline}
                        </p>
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={selectedTier}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-muted-foreground leading-relaxed mt-3"
                    >
                      {scopeTiers.find((t) => t.id === selectedTier)?.blurb}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div>
                  <p className="text-xs font-semibold text-foreground mb-3">
                    What's included
                  </p>
                  <ul className="space-y-2">
                    {featuredServices[activeService].bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-note"
                    className="text-xs font-semibold text-foreground mb-3 block"
                  >
                    Anything specific?{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="inquiry-note"
                    value={inquiryNote}
                    onChange={(e) => setInquiryNote(e.target.value)}
                    rows={3}
                    placeholder="type here..."
                    className="w-full text-xs rounded-xl border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    type="button"
                    onClick={closeServiceModal}
                    className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleContinueToContact}
                    disabled={isSubmittingInquiry}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 disabled:opacity-70"
                  >
                    {isSubmittingInquiry ? (
                      <>
                        <span className="w-3.5 h-3.5 text-xs rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                        Preparing your brief...
                      </>
                    ) : (
                      <>
                        Continue to Contact{" "}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[9px] text-muted-foreground text-center">
                  We'll take you to the contact form with this pre-filled so you
                  don't have to repeat yourself.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
