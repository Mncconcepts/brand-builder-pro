import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Palette,
  Code2,
  Layout,
  Server,
  Eye,
  Zap,
  ArrowRight,
  Pill,
  BellRing,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

const WHATSAPP_NUMBER = "2349020495756";

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
  {
    icon: Code2,
    title: "Full Stack Web Development",
    level: "Beginner → Intermediate",
    duration: "24 weeks",
    desc: "Full-stack fundamentals from your first component to a deployed, database-backed application.",
    bullets: [
      "HTML, CSS & modern JavaScript",
      "Git-Github Version control",
      "React fundamentals",
      "APIs & databases",
      "SEO-Performance Optimisations",
      "Securing a domain - Deploying a live project",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    level: "Intermediate → Advanced",
    duration: "12 weeks",
    desc: "Design and ship the systems behind the interface APIs, databases, auth and infrastructure that hold up in production.",
    bullets: [
      "REST & API design",
      "Databases & data modeling",
      "Authentication & security",
      "Deployment & infrastructure basics",
    ],
  },
];

const productHighlights = [
  "Expert Reviewers",
  "Quality Feedbacks",
  "Timely Support",
  "Fast Response",
];

const Courses = () => {
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
  };

  const handleCourseBook = (course: (typeof courses)[number]) => {
    const params = new URLSearchParams({
      course: course.title,
      interest: "Course Enrollment",
      level: course.level,
    });
    // navigate(`/?${params.toString()}`);
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <section className="relative py-24 sm:py-28 bg-secondary/30 border-y border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)] opacity-30" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-14 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Courses We Offer.
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-6xl lg:text-6xl text-balance font-extrabold tracking-tighter leading-[0.95] mb-2">
              All Courses & Mentorship Program.
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
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
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xm hover:-translate-y-1"
                >
                  <ComingSoonImage
                    icon={Icon}
                    className="aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-105"
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
                    <p className="text-sm text-muted-foreground leading-5 mb-5">
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
                        onClick={() => handleCourseBook(course)}
                        className="group/btn flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground px-4 py-3.5 text-xs font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        See Full Details
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCourseWhatsApp(course)}
                        aria-label={`Chat about ${course.title} on WhatsApp`}
                        className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-lg text-foreground hover:bg-background hover:border-emerald-500/40 hover:text-emerald-500 transition-all duration-200 shrink-0 active:scale-95"
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

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-sm transition-shadow duration-500"
          >
            <div className="grid md:grid-cols-2">
              {/* Text column */}
              <div className="order-1 md:order-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2.5 w-fit mt-3 mb-5">
                  {/* 3D-styled bell — the attention-grabbing addition */}
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: [0, -15, 12, -10, 8, -5, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 2.4,
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: "50% 12%" }}
                    className="relative shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-b from-primary via-primary to-primary/70 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.5)] ring-1 ring-black/5"
                  >
                    <span className="absolute -inset-1 rounded-full bg-primary/25 animate-ping" />
                    <span className="absolute inset-x-1.5 top-1 h-1/2 rounded-full bg-white/30 blur-[2px]" />
                    <BellRing
                      className="absolute inset-0 m-auto w-4 h-4 sm:w-[18px] sm:h-[18px] text-white drop-shadow-sm"
                      strokeWidth={2.4}
                    />
                  </motion.div>

                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="text-[13px] font-extrabold uppercase tracking-wide text-muted-foreground">
                    Launching Soon
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-balance lg:text-[2.4rem] font-medium tracking-tight leading-[1.12] text-foreground">
                  <span className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-[3rem]">
                    New Product Launch! <br />
                  </span>{" "}
                  Get Ready For Our New Product Launch -{" "}
                  <strong className="text-gray-500"> Xerai Studios.</strong>
                </h2>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed text-balance ">
                  Our new portfolio and CV reviewing platform, built for
                  creators who want clarity and expert feedback to secure better job opportunities and role.
                </p>

                <div className="mt-6 flex flex-wrap gap-1">
                  {productHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background/60 text-foreground px-3 py-2 text-xs font-normal tracking-tight hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="#">
                    <Button className="group/cta rounded-xl px-6 h-11 text-sm font-bold">
                      Browse Product
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 relative aspect-[16/10] md:aspect-auto min-h-[260px] md:min-h-[440px]">
                <SkeletonImage
                  src="/hero-abstract.jpg"
                  alt="Xerai Studios product preview"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/10 md:via-background/10 to-transparent" />

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-semibold text-foreground">
                    Early Access Opening
                  </span>
                </div>

                {/* Bottom-left info chip — mirrors the homepage hero's "50+ Projects" card */}
                <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 flex items-center gap-3 bg-card/95 backdrop-blur-md border border-border rounded-xl px-4 py-3 shadow-md max-w-[230px]">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground leading-tight">
                      Portfolio & CV Reviews
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      By vetted industry experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
