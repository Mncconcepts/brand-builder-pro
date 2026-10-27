import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterText from "@/components/TypewriterText";
import BookCallSheet from "@/components/BookCallSheet";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  ArrowLeft,
  Star,
  Clock,
  FolderCheck,
  Users,
  Award,
  ChevronDown,
  CheckCircle2,
  X,
  Palette,
  Layout,
  Eye,
  ArrowRight,
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
    <div>
      <p className="font-display text-4xl sm:text-5xl font-extrabold text-background tracking-tight leading-none">
        {triggered ? `${count}${suffix}` : `0${suffix}`}
      </p>
      <p className="text-xs text-background/55 mt-2.5 tracking-tight font-medium">
        {label}
      </p>
    </div>
  );
}

/* ─── shared section header ─── */
function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-5"
    >
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-foreground/40" />
          <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance text-foreground font-extrabold leading-[1.02]">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-lg">
            {description}
          </p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          to={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all self-start md:self-auto shrink-0"
        >
          {linkLabel} <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </motion.div>
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
      "Measured after handover, not just at kickoff quality that holds once we're gone.",
  },
];

const trustedAvatars = [
  { src: "/cc1.png", name: "Oonsa" },
  { src: "/cc2.png", name: "Oonsa" },
];

const trustedBy = [
  "SUPERSONIC Dynamic Services",
  "Visa Guard Africa",
  "Oonsa Events",
  "Computer Village Marketplace",
  "DAPSVERSE",
  "OMA",
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

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, audience and technical requirements through in-depth consultation.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Scope, timelines, wireframes and the technical architecture are defined before building starts.",
    duration: "Week 1-2",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Iterative design and development with regular check-ins to keep everything aligned with your vision.",
    duration: "Week 3-10",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Thorough testing, deployment and ongoing support so your product thrives after launch.",
    duration: "Week 11+",
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
    image: "/visaguard.jpg",
    tags: ["WebApp", " FINTECH", "TRAVEL SAFETY"],
    color: "from-primary/10 to-transparent",
  },
  {
    title: "Supersonic Dynamic Services",
    category: "Development & Product Design",
    year: "2026",
    image: "/sds000.jpeg",
    tags: ["Logistics", "Haulage-Moving service"],
    color: "from-foreground/5 to-primary/10",
  },
];

const testimonials = [
  {
    quote:
      "Working with this team was a game-changer for our product. Their attention to detail, technical expertise, and commitment to delivering high-quality results exceeded our expectations at every stage of the project. From the initial planning to the final implementation, they demonstrated a clear understanding.",
    name: "John Chukwudi Eze",
    role: "FOUNDER, Visa Guard Africa",
  },
  {
    quote:
      "Delivered a stunning website that perfectly captures our brand identity and communicates our vision effectively. The team demonstrated exceptional professionalism, creativity, and technical expertise throughout the entire process.",
    name: "Oonsa",
    role: "Founder, Oonsa Event WebApp",
  },
  {
    quote:
      "Working with this team was a great experience. They understood our vision for Supersonic Dynamic Services and translated it into a professional, modern website that reflects our brand, services, and commitment to excellence. Their attention to detail and dedication throughout the project were impressive.",
    name: "Eng. Hillary Nweze",
    role: "Founder, Supersonic Dynamic Services B.V.NL",
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
    image: "/blog3.jpg",
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
    image: "/blog7.jpg",
  },
  {
    title: "How I Communicate With Clients to Avoid Scope Creep",
    excerpt:
      "Frameworks and templates I use for proposals, check-ins, and change requests that keep projects on track and profitable.",
    category: "Business",
    date: "Jun 2026",
    readTime: "8 min read",
    image: "/blog9.jpg",
  },
  {
    title: "Modern Web Architecture: What Actually Matters in 2026",
    excerpt:
      "An opinionated guide to choosing the right tools, patterns, and trade-offs when building production web applications today.",
    category: "Engineering",
    date: "Jul 2026",
    readTime: "6 min read",
    image: "/blog3.jpg",
  },
];

const courses = [
  {
    icon: Palette,
    title: "Product Design",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    image: "/course2.jpeg",
    desc: "A guided, project-based track covering research, wireframing, prototyping and high-fidelity UI taught the way we actually work with clients.",
    bullets: [
      "User research & personas",
      "Wireframes to high-fidelity UI",
      "Design systems & handoff",
      "Portfolio-ready case study",
    ],
    overview:
      "Over eight weeks you will design one real product from the first user interview to the final developer handoff. You learn the same process we use on paid client work: understand the problem, structure the solution, design it, test it and hand it over. You finish with a portfolio-ready case study you can show to employers or clients.",
    audience:
      "Beginners, career switchers and designers who want a client-ready process.",
    format: "Project-based, taught step by step with feedback on your work.",
    curriculum: [
      {
        weeks: "Weeks 1-2",
        topic: "Research & problem framing",
        detail: "User interviews, personas and journey maps.",
      },
      {
        weeks: "Weeks 3-4",
        topic: "Structure & wireframes",
        detail:
          "User flows, information architecture and low-fidelity screens.",
      },
      {
        weeks: "Weeks 5-6",
        topic: "High-fidelity UI & prototyping",
        detail: "Typography, colour, components and interactive prototypes.",
      },
      {
        weeks: "Week 7",
        topic: "Design systems & handoff",
        detail: "Reusable components and clean specs for developers.",
      },
      {
        weeks: "Week 8",
        topic: "Testing & case study",
        detail: "Usability testing and a portfolio-ready write-up.",
      },
    ],
    goals: [
      "Start a design career",
      "Build a stronger portfolio",
      "Design my own product",
      "Upskill for my current job",
    ],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    level: "Intermediate → Advanced",
    duration: "8 weeks",
    image: "/course1.jpeg",
    desc: "Go deep on React, state management and the interaction details that separate good frontend work from great frontend work.",
    bullets: [
      "React, Vite, TypeScript & hooks",
      "State management patterns",
      "Animation & micro-interactions",
      "Performance & accessibility",
    ],
    overview:
      "This course takes you past tutorials and into how production frontends are really built. You work with React and TypeScript, structure state properly, add polished motion and make your apps fast and accessible. You finish by shipping a capstone application you can put in your portfolio.",
    audience:
      "Developers who already know HTML, CSS and basic JavaScript and want to level up.",
    format:
      "Project-based, taught step by step with code reviews on your work.",
    curriculum: [
      {
        weeks: "Weeks 1-2",
        topic: "React & TypeScript foundations",
        detail: "Components, hooks and typing patterns that scale.",
      },
      {
        weeks: "Weeks 3-4",
        topic: "State & data fetching",
        detail: "State management patterns and working with APIs.",
      },
      {
        weeks: "Weeks 5-6",
        topic: "Animation & micro-interactions",
        detail:
          "Motion, transitions and interaction details that feel polished.",
      },
      {
        weeks: "Week 7",
        topic: "Performance & accessibility",
        detail: "Faster load times and interfaces everyone can use.",
      },
      {
        weeks: "Week 8",
        topic: "Capstone project",
        detail: "Build and ship a production-style application.",
      },
    ],
    goals: [
      "Land a frontend role",
      "Build my own product",
      "Level up at my current job",
      "Freelance with confidence",
    ],
  },
];

type Course = (typeof courses)[number];

type CourseQuestion = {
  id: string;
  short: string;
  label: string;
  helper?: string;
  kind: "text" | "choice" | "note";
  options?: string[];
  placeholder?: string;
  required: boolean;
};

const buildCourseQuestions = (course: Course): CourseQuestion[] => [
  {
    id: "name",
    short: "Name",
    label: "What's your name?",
    helper: "So we know who we're talking to on WhatsApp.",
    kind: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "level",
    short: "Experience",
    label: `What's your current level in ${course.title}?`,
    helper: "Be honest, this helps us place you correctly.",
    kind: "choice",
    options: [
      "Complete beginner",
      "I know the basics",
      "Intermediate",
      "Advanced",
    ],
    required: true,
  },
  {
    id: "goal",
    short: "Goal",
    label: "What do you want out of this course?",
    kind: "choice",
    options: course.goals,
    required: true,
  },
  {
    id: "hours",
    short: "Weekly time",
    label: "How many hours a week can you commit?",
    helper: "Most students do best with at least 6 hours.",
    kind: "choice",
    options: ["3-5 hours", "6-10 hours", "10+ hours"],
    required: true,
  },
  {
    id: "device",
    short: "Equipment",
    label: "Do you have a laptop and stable internet?",
    kind: "choice",
    options: [
      "Yes, both",
      "Laptop, but internet is unstable",
      "Internet only, no laptop yet",
      "Not yet",
    ],
    required: true,
  },
  {
    id: "note",
    short: "Notes",
    label: "Anything else we should know?",
    helper: "Optional. Questions, preferred start date, special requests.",
    kind: "note",
    placeholder: "type here...",
    required: false,
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

  /* Course popup state */
  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [courseStep, setCourseStep] = useState(0);
  const [courseDir, setCourseDir] = useState(1);
  const [courseAnswers, setCourseAnswers] = useState<Record<string, string>>(
    {},
  );
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  const [heroProject, ...otherProjects] = featuredProjects;
  const [featuredPost, ...restPosts] = blogPosts;

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

  const handleCourseBook = (course: (typeof courses)[number]) => {
    const params = new URLSearchParams({
      course: course.title,
      interest: "Course Enrollment",
      level: course.level,
    });
    navigate(`/contact?${params.toString()}`);
  };

  // Course WhatsApp quick-reach button
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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to discuss a project with you.",
  )}`;

  /* ─── Course popup logic ─── */
  const activeCourseData = activeCourse !== null ? courses[activeCourse] : null;
  const courseQuestions = activeCourseData
    ? buildCourseQuestions(activeCourseData)
    : [];
  const reviewStep = courseQuestions.length + 1;
  const totalCourseSteps = courseQuestions.length + 2;
  const currentQuestion =
    courseStep >= 1 && courseStep <= courseQuestions.length
      ? courseQuestions[courseStep - 1]
      : null;

  const canContinueCourse = () => {
    if (courseStep === 0 || courseStep === reviewStep) return true;
    if (!currentQuestion) return false;
    if (!currentQuestion.required) return true;
    return (courseAnswers[currentQuestion.id] ?? "").trim().length > 0;
  };

  const openCourseModal = (index: number) => {
    setActiveCourse(index);
    setCourseStep(0);
    setCourseDir(1);
    setCourseAnswers({});
    setIsOpeningWhatsApp(false);
  };

  const closeCourseModal = () => {
    setActiveCourse(null);
    setIsOpeningWhatsApp(false);
  };

  const setCourseAnswer = (id: string, value: string) => {
    setCourseAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const goNextCourseStep = () => {
    if (!canContinueCourse() || courseStep >= reviewStep) return;
    setCourseDir(1);
    setCourseStep((s) => s + 1);
  };

  const goBackCourseStep = () => {
    if (courseStep <= 0) return;
    setCourseDir(-1);
    setCourseStep((s) => s - 1);
  };

  const handleCourseEnroll = () => {
    if (!activeCourseData) return;
    setIsOpeningWhatsApp(true);

    const lines = [
      `Hi! I'd like to enroll in the ${activeCourseData.title} course (${activeCourseData.duration}).`,
      "",
      ...courseQuestions
        .filter((q) => (courseAnswers[q.id] ?? "").trim())
        .map((q) => `${q.short}: ${courseAnswers[q.id].trim()}`),
      "",
      "Please share the next steps. Thank you!",
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsOpeningWhatsApp(false);
      closeCourseModal();
    }, 500);
  };

  const productHighlights = [
    "Expert Reviewers",
    "Quality Feedbacks",
    "Timely Support",
    "Fast Response",
  ];

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

  useEffect(() => {
    if (activeCourse === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCourseModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeCourse]);

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
            {/* <div className="mb-6 flex items-center gap-3">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm group cursor-default select-none overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-extra-small text-primary tracking-tight uppercase">
                  Design & Development
                </span>
              </div>
            </div> */}

            <h1 className="font-Display text-balance text-7xl sm:text-6xl lg:text-7xl font-black leading-[1.01] tracking-tighter text-foreground mb-5">
              <TypewriterText
                text="Creating Digital Experiences That Work."
                speed={55}
                startDelay={200}
              />
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mb-8">
              From strategy and design to development and deployment, we craft
              world-class web applications and digital solutions that empower
              businesses to innovate and scale.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-border/70 max-w-md">
              <div className="flex items-center">
                {trustedAvatars.map((av, i) => (
                  <div
                    key={av.name + i}
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

      <section className="py-9 border-y border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground shrink-0">
            Teams we've built with
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2.5">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display uppercase text-sm sm:text-[15px] font-bold tracking-tight text-foreground/50 hover:text-foreground transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.06]" />
        <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full bg-background/[0.05] blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-32 right-0 w-[360px] h-[360px] rounded-full bg-background/[0.04] blur-[100px] pointer-events-none" />

        <div
          ref={statsRef}
          className="font-display max-w-6xl mx-auto px-6 py-20 sm:py-24 relative"
        >
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-background/40" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-background/50">
                  Track Record
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-background">
                By The Numbers.
              </h2>
            </div>
            <p className="hidden sm:block text-xs text-background/45 max-w-[190px] text-right leading-4">
              Tap any figure to see what's behind it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-background/15">
            {stats.map((stat, i) => {
              const isOpen = expandedStat === i;
              const Icon = stat.icon;
              return (
                <motion.button
                  type="button"
                  key={stat.label}
                  onClick={() => setExpandedStat(isOpen ? null : i)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  aria-expanded={isOpen}
                  className={`group relative text-left border-r border-b border-background/15 p-6 sm:p-7 transition-colors duration-300 focus-visible:outline-none focus-visible:bg-background/[0.07] ${
                    isOpen
                      ? "bg-background/[0.07]"
                      : "hover:bg-background/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6 sm:mb-8">
                    <Icon
                      className="w-4 h-4 text-background/40 group-hover:text-background/75 transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-background/40 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-background/75" : ""
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
                        animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs text-background/55 leading-relaxed overflow-hidden pt-4 border-t border-background/15"
                      >
                        {stat.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Services
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Services We Offer."
            description="Everything you need to take a product from first idea to a live, scalable release."
            href="/services"
            linkLabel="View All Services"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-xm hover:shadow-l hover:-translate-y-1 hover:border-foreground/20 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-52 bg-secondary overflow-hidden">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <SkeletonImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-muted-foreground/70 tracking-widest uppercase bg-background/60 backdrop-blur-sm border border-border/40 px-2 py-1 rounded-md">
                    {service.number}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-5 mb-5">
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
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-3 rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 active:scale-[0.98]"
                  >
                    Book This Service <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          How we work
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="How We Work"
            title="A Clear Process, Every Time."
            description="Four phases, clear deliverables and regular check-ins, so you always know what's next."
            href="/services"
            linkLabel="See Full Process"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border rounded-tl-2xl overflow-hidden bg-card">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border-r border-b border-border p-6 sm:p-7 hover:bg-secondary/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="w-11 h-11 rounded-xl bg-foreground/5 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                    <span className="font-display text-sm font-extrabold text-foreground transition-colors duration-300 group-hover:text-background">
                      {p.step}
                    </span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                    {p.duration}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Courses section — "View Details" opens the enrollment popup
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Learn & Earn"
            title="Featured Courses."
            description="Hands-on, project-based tracks taught by the team building products in production."
            href="/courses"
            linkLabel="View All Courses"
          />

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
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xm hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <SkeletonImage
                        src={course.image}
                        alt={`${course.title} course preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-background/70 backdrop-blur-sm border border-border/40 text-primary">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-foreground bg-background/80 backdrop-blur-sm border border-border/40 px-2.5 py-1.5 rounded-full">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5 sm:p-6 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {course.level}
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
                        onClick={() => openCourseModal(i)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground px-4 py-3.5 text-xs font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Course Details
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

      {/* ═══════════════════════════════════════════════════════
          Shipped Products — one featured case study as a split
          card, two supporting pieces below.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Production Based"
            title="Shipped Products."
            description="Digital products running in production today, from marketplaces to logistics and travel safety."
            href="/projects"
            linkLabel="View All Projects"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {featuredProjects.map((project, i) => {
              const isFeatured = i === 0;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={isFeatured ? "lg:col-span-2" : ""}
                >
                  <Link
                    to="/projects"
                    className={`group relative flex flex-col h-full bg-card border border-border overflow-hidden transition-all duration-500 hover:border-foreground/25 hover:shadow-2md hover:-translate-y-1 ${
                      isFeatured ? "rounded-3xl lg:flex-row" : "rounded-2xl"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-gradient-to-br ${project.color} ${
                        isFeatured
                          ? "aspect-[15/9] sm:aspect-[14/8] lg:aspect-auto lg:w-[58%] lg:min-h-[420px] shrink-0"
                          : "aspect-[3/1.9] sm:aspect-[3/1.9]"
                      }`}
                    >
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                        <SkeletonImage
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="absolute top-4 left-4 text-[10px] font-bold text-foreground bg-background/85 backdrop-blur-sm border border-border/40 px-2.5 py-1 rounded-full">
                        {project.year}
                      </div>

                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm border border-border/30 flex items-center justify-center opacity-0 scale-75 -rotate-45 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-400 ease-out">
                        <ArrowUpRight className="w-4 h-4 text-foreground" />
                      </div>
                    </div>

                    <div
                      className={`p-5 sm:p-6 flex flex-col gap-3 flex-1 ${
                        isFeatured ? "lg:p-10 lg:justify-center lg:gap-4" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3
                        className={`font-display font-bold text-foreground group-hover:text-primary transition-colors leading-snug ${
                          isFeatured
                            ? "text-xl sm:text-2xl lg:text-3xl tracking-tight"
                            : "text-base"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm text-balance  text-muted-foreground leading-5">
                        List of digital products shipped and running on
                        production successfully: websites & applications.
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                        <p className="text-xs text-muted-foreground font-semibold">
                          {project.category}
                        </p>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Testimonials — carousel itself is untouched.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-foreground/40" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                  Client Reviews
                </p>
              </div>
              <h2 className="font-display lg:text-6xl text-4xl sm:text-5xl tracking-tight text-foreground font-extrabold leading-[1.02]">
                Testimonials.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <p className="hidden sm:block text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  30+ Customers
                </span>{" "}
                trust our work
              </p>
            </div>
          </motion.div>

          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Blog — editorial index: one featured story, compact
          list rows.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Insights"
            title="From The Blogs."
            description="Notes on design, development, engineering and the decisions behind the products we build."
            href="/blog"
            linkLabel="Visit Blog"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Featured story */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xm transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <SkeletonImage
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-8 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-[11px] text-muted-foreground">
                    {featuredPost.date}
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

            {/* Supporting list */}
            <div className="lg:col-span-2 flex flex-col rounded-2xl border border-border bg-card px-5 sm:px-6 divide-y divide-border">
              {restPosts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to="/blog"
                    className="group flex items-start gap-4 py-5"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden">
                      <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                        <SkeletonImage
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-primary">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="hidden sm:block text-xs text-muted-foreground leading-snug line-clamp-1">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                        {post.date}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Xerai-Studios launch
          ═══════════════════════════════════════════════════════ */}
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
                      className="absolute inset-0 m-auto w-4 h-4 sm:w-[18px] sm:h-[18px] text-background drop-shadow-sm"
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

                <h2 className="font-display text-2xl sm:text-4xl text-balance lg:text-[2.4rem] font-medium tracking-tight leading-[1.12] text-foreground">
                  <span className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-[3rem]">
                    New Product Launch! <br />
                  </span>{" "}
                  Get Ready For Our New Product Launch{" "}
                  <strong className="text-gray-500 text-3xl tracking-tighter sm:text-4xl lg:text-[2.4rem]">
                    Xerai-Studios.
                  </strong>
                </h2>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed text-balance ">
                  Our new portfolio and CV reviewing platform, built for
                  creators who want clarity and expert feedback to secure better
                  job opportunities and role.
                </p>

                <div className="mt-6 flex flex-wrap gap-1">
                  {productHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full cursor-pointer border border-border bg-background/60 text-foreground px-3 py-2 text-xs font-normal tracking-tight hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
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

      {/* ═══════════════════════════════════════════════════════
          Final CTA — same actions and handlers, refined visuals.
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)] opacity-[0.06]" />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-background/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-background/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-background/15 bg-background/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold text-background/80">
                Available for new projects
              </span>
            </div>

            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
              Let's Build Something Real.
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
              Intrested in working with us? Send us messages. We'll get back
              within 24 hours with a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-2md active:scale-[0.98]"
              >
                Get in Touch{" "}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 border-background/30 text-background px-8 py-3.5 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:border-background/55"
                  >
                    <span className="absolute inset-0 -z-10 bg-background/10 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <CalendarIcon className="h-3.5 w-3.5" /> Book A Call Session
                  </button>
                }
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-3.5 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:border-background/55 hover:bg-background/10 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
              </a>
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
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 disabled:opacity-70"
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

      {/* ─── Course popup: overview → step-by-step questions → WhatsApp ─── */}
      <AnimatePresence>
        {activeCourseData && (
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
              onClick={closeCourseModal}
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeCourseData.title} course details`}
              className="relative w-full sm:max-w-xl max-h-[92vh] flex flex-col bg-card border border-border rounded-t-2xl sm:rounded-2xl shadow-2md overflow-hidden"
            >
              {/* Header */}
              <div className="shrink-0 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    {courseStep === 0
                      ? "Course Details"
                      : courseStep === reviewStep
                        ? "Review & Enroll"
                        : `Question ${courseStep} of ${courseQuestions.length}`}
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {activeCourseData.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeCourseModal}
                  aria-label="Close"
                  className="w-8 h-8 shrink-0 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="shrink-0 h-1 w-full bg-secondary">
                <motion.div
                  className="h-full bg-primary"
                  initial={false}
                  animate={{
                    width: `${(courseStep / (totalCourseSteps - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={courseStep}
                    initial={{ opacity: 0, x: courseDir * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: courseDir * -24 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* ── Step 0: detailed overview ── */}
                    {courseStep === 0 && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            {activeCourseData.level}
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {activeCourseData.duration}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {activeCourseData.overview}
                        </p>

                        <div>
                          <p className="text-xs font-semibold text-foreground mb-3">
                            What you'll learn
                          </p>
                          <ul className="space-y-2">
                            {activeCourseData.bullets.map((b) => (
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
                          <p className="text-xs font-semibold text-foreground mb-3">
                            Week by week
                          </p>
                          <ol className="border border-border rounded-xl divide-y divide-border overflow-hidden">
                            {activeCourseData.curriculum.map((item) => (
                              <li
                                key={item.topic}
                                className="flex items-start gap-3 px-4 py-3"
                              >
                                <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-wider text-primary pt-0.5">
                                  {item.weeks}
                                </span>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold text-foreground">
                                    {item.topic}
                                  </p>
                                  <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                                    {item.detail}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="rounded-xl border border-border bg-background px-4 py-3">
                            <p className="text-xs font-bold text-foreground mb-1">
                              Who it's for
                            </p>
                            <p className="text-[11px] text-muted-foreground leading-snug">
                              {activeCourseData.audience}
                            </p>
                          </div>
                          <div className="rounded-xl border border-border bg-background px-4 py-3">
                            <p className="text-xs font-bold text-foreground mb-1">
                              How it works
                            </p>
                            <p className="text-[11px] text-muted-foreground leading-snug">
                              {activeCourseData.format}
                            </p>
                          </div>
                        </div>

                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          Ready? Answer a few quick questions and we'll send
                          your details straight to our WhatsApp.
                        </p>
                      </div>
                    )}

                    {/* ── Steps 1..n: one question at a time ── */}
                    {currentQuestion && (
                      <div className="space-y-5">
                        <div>
                          <h4 className="font-display text-lg font-bold text-foreground leading-snug">
                            {currentQuestion.label}
                          </h4>
                          {currentQuestion.helper && (
                            <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                              {currentQuestion.helper}
                            </p>
                          )}
                        </div>

                        {currentQuestion.kind === "text" && (
                          <input
                            type="text"
                            autoFocus
                            value={courseAnswers[currentQuestion.id] ?? ""}
                            onChange={(e) =>
                              setCourseAnswer(
                                currentQuestion.id,
                                e.target.value,
                              )
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                goNextCourseStep();
                              }
                            }}
                            placeholder={currentQuestion.placeholder}
                            aria-label={currentQuestion.label}
                            className="w-full text-sm rounded-xl border border-border bg-background px-3.5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40"
                          />
                        )}

                        {currentQuestion.kind === "note" && (
                          <textarea
                            value={courseAnswers[currentQuestion.id] ?? ""}
                            onChange={(e) =>
                              setCourseAnswer(
                                currentQuestion.id,
                                e.target.value,
                              )
                            }
                            rows={4}
                            placeholder={currentQuestion.placeholder}
                            aria-label={currentQuestion.label}
                            className="w-full text-xs rounded-xl border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 resize-none"
                          />
                        )}

                        {currentQuestion.kind === "choice" && (
                          <div
                            role="radiogroup"
                            aria-label={currentQuestion.label}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                          >
                            {currentQuestion.options?.map((option) => {
                              const selected =
                                courseAnswers[currentQuestion.id] === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  role="radio"
                                  aria-checked={selected}
                                  onClick={() =>
                                    setCourseAnswer(currentQuestion.id, option)
                                  }
                                  className={`flex items-center justify-between gap-3 text-left rounded-xl border px-3.5 py-3 transition-all duration-200 ${
                                    selected
                                      ? "border-primary/50 bg-primary/10 shadow-xs"
                                      : "border-border hover:border-primary/20"
                                  }`}
                                >
                                  <span
                                    className={`text-xs font-semibold ${
                                      selected
                                        ? "text-primary"
                                        : "text-foreground"
                                    }`}
                                  >
                                    {option}
                                  </span>
                                  <span
                                    className={`w-4 h-4 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                                      selected
                                        ? "border-primary bg-primary"
                                        : "border-border"
                                    }`}
                                  >
                                    {selected && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                                    )}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* ── Final step: review ── */}
                    {courseStep === reviewStep && (
                      <div className="space-y-5">
                        <div>
                          <h4 className="font-display text-lg font-bold text-foreground leading-snug">
                            Looks good? Let's chat.
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                            Tapping the button below opens WhatsApp with your
                            answers already written, so you only need to press
                            send.
                          </p>
                        </div>

                        <dl className="border border-border rounded-xl divide-y divide-border overflow-hidden">
                          <div className="flex items-start justify-between gap-4 px-4 py-3">
                            <dt className="text-[11px] text-muted-foreground shrink-0">
                              Course
                            </dt>
                            <dd className="text-xs font-semibold text-foreground text-right">
                              {activeCourseData.title} ·{" "}
                              {activeCourseData.duration}
                            </dd>
                          </div>
                          {courseQuestions.map((q) => {
                            const value = (courseAnswers[q.id] ?? "").trim();
                            if (!value) return null;
                            return (
                              <div
                                key={q.id}
                                className="flex items-start justify-between gap-4 px-4 py-3"
                              >
                                <dt className="text-[11px] text-muted-foreground shrink-0">
                                  {q.short}
                                </dt>
                                <dd className="text-xs font-semibold text-foreground text-right break-words min-w-0">
                                  {value}
                                </dd>
                              </div>
                            );
                          })}
                        </dl>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer actions */}
              <div className="shrink-0 border-t border-border bg-card px-6 py-4">
                <div className="flex flex-col-reverse sm:flex-row gap-2">
                  {courseStep === 0 ? (
                    <button
                      type="button"
                      onClick={closeCourseModal}
                      className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-all duration-200"
                    >
                      Close
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={goBackCourseStep}
                      disabled={isOpeningWhatsApp}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-all duration-200 disabled:opacity-60"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>
                  )}

                  {courseStep < reviewStep ? (
                    <button
                      type="button"
                      onClick={goNextCourseStep}
                      disabled={!canContinueCourse()}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {courseStep === 0 ? "Start Enrollment" : "Continue"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCourseEnroll}
                      disabled={isOpeningWhatsApp}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 disabled:opacity-70"
                    >
                      {isOpeningWhatsApp ? (
                        <>
                          <span className="w-3.5 h-3.5 text-xs rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <WhatsAppIcon className="w-4 h-4" />
                          Continue on WhatsApp
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
