import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BookCallSheet from "@/components/BookCallSheet";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Star,
  Clock,
  FolderCheck,
  Users,
  Award,
  CheckCircle2,
  X,
  Palette,
  Layout,
  Eye,
  BellRing,
} from "lucide-react";

/* ═════════════ Motion presets ═════════════ */
const EASE = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═════════════ Small building blocks ═════════════ */
const SkeletonImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-muted/30 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted/40" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
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

function SectionHeader({
  title,
  description,
  href,
  linkLabel,
  center = false,
  tone = "light",
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  center?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-5 sm:mb-16 ${
        center
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className="max-w-2xl">
        <h2
          className={`font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl ${
            dark ? "text-background" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-6 ${
              dark ? "text-background/75" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          to={href}
          className={`group inline-flex shrink-0 items-center gap-1.5 self-start border-b pb-0.5 text-sm font-semibold transition-all md:self-auto ${
            dark
              ? "border-background/40 text-background hover:border-background"
              : "border-foreground/30 text-foreground hover:border-foreground"
          }`}
        >
          {linkLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </Reveal>
  );
}

function Modal({
  open,
  onClose,
  label,
  maxWidth = "sm:max-w-lg",
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  maxWidth?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        >
          <div
            onClick={onClose}
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-border bg-card shadow-lg sm:rounded-3xl ${maxWidth}`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalHeader({
  kicker,
  title,
  onClose,
}: {
  kicker: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-6 py-5">
      <div className="min-w-0">
        <p className="mb-1 text-xs font-semibold text-primary">{kicker}</p>
        <h3 className="font-display text-xl font-bold text-foreground">
          {title}
        </h3>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

/* Infinite right-to-left marquee */
function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {loop.map((name, i) => (
          <div key={name + i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-xl font-bold tracking-tight text-foreground/60 transition-colors hover:text-foreground sm:px-12 sm:text-2xl">
              {name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* Count-up stats */
function useCountUp(target: number, triggered: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, duration]);
  return count;
}

function Stat({
  value,
  label,
  icon: Icon,
  triggered,
}: {
  value: string;
  label: string;
  icon: typeof Clock;
  triggered: boolean;
}) {
  const m = value.match(/^(\d+)(.*)$/);
  const n = useCountUp(m ? parseInt(m[1], 10) : 0, triggered);
  return (
    <div className="border-r border-b border-background/15 p-6 sm:p-8">
      <Icon className="mb-6 h-5 w-5 text-background/50" strokeWidth={1.75} />
      <p className="font-display text-4xl font-extrabold leading-none tracking-tight text-background sm:text-5xl">
        {n}
        {m?.[2]}
      </p>
      <p className="mt-3 text-base font-medium text-background/75">{label}</p>
    </div>
  );
}

/* ═════════════ Data ═════════════ */
const WHATSAPP_NUMBER = "2349020495756";

const stats = [
  { value: "4+", label: "Years experience", icon: Clock },
  { value: "50+", label: "Projects delivered", icon: FolderCheck },
  { value: "30+", label: "Happy clients", icon: Users },
  { value: "99%", label: "Client satisfaction", icon: Award },
];

const trustedAvatars = [
  { src: "/cc1.png", name: "Client 1" },
  { src: "/cc2.png", name: "Client 2" },
];

const trustedBy = [
  "SUPERSONIC DYNAMIC SERVICES B.V.",
  "VISA GUARD AFRICA",
  "OONSA EVENTS",
  "CV MARKETPLACE",
  "DAPSVERSE",
  "OMA",
];

const featuredServices = [
  {
    number: "01",
    title: "Web & App Development",
    desc: "Fast, scalable websites and applications built with modern technology.",
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
    desc: "Clear interfaces and smooth experiences across every device.",
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
    duration: "Week 1",
    description:
      "We learn your business, goals, audience and technical needs through an in-depth consultation.",
  },
  {
    step: "02",
    title: "Planning",
    duration: "Week 1-2",
    description:
      "Scope, timelines, wireframes and architecture are agreed before building starts.",
  },
  {
    step: "03",
    title: "Design & Build",
    duration: "Week 3-10",
    description:
      "Iterative design and development with regular check-ins to stay aligned with your vision.",
  },
  {
    step: "04",
    title: "Launch & Support",
    duration: "Week 11+",
    description:
      "Thorough testing, deployment and ongoing support so your product thrives after launch.",
  },
];

const featuredProjects = [
  {
    title: "Multiple Vendor Store CVMP",
    desc: "A multi-vendor marketplace app where sellers list products and buyers browse and contact them directly.",
    category: "App Design",
    year: "2025",
    image: "/proj-storeapp22.png",
    tags: ["Mobile", "B2B", "Classified"],
  },
  {
    title: "Visa Guard Africa",
    desc: "A web platform that helps travellers stay informed and protected through every step of their visa journey.",
    category: "Product Design & Development",
    year: "2026",
    image: "/visaguard.jpg",
    tags: ["Web app", "Fintech", "Travel safety"],
  },
  {
    title: "Supersonic Dynamic Services",
    desc: "A modern website for a haulage and moving company that presents its services clearly and makes quotes easy to request.",
    category: "Development & Product Design",
    year: "2026",
    image: "/sds000.jpeg",
    tags: ["Logistics", "Haulage & moving"],
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

const courses = [
  {
    icon: Palette,
    title: "Product Design",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    image: "/course2.jpeg",
    desc: "A guided, project-based track covering research, wireframing, prototyping and high-fidelity UI, taught the way we work with clients.",
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
    placeholder: "Type here...",
    required: false,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  /* Service modal */
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState("growth");
  const [inquiryNote, setInquiryNote] = useState("");
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);

  /* Course modal */
  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [courseStep, setCourseStep] = useState(0);
  const [courseDir, setCourseDir] = useState(1);
  const [courseAnswers, setCourseAnswers] = useState<Record<string, string>>(
    {},
  );
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  const [heroProject, ...otherProjects] = featuredProjects;

  const openServiceModal = (i: number) => {
    setActiveService(i);
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
    window.setTimeout(() => navigate(`/contact?${params.toString()}`), 550);
  };

  const handleCourseWhatsApp = (course: Course) => {
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

  const openCourseModal = (i: number) => {
    setActiveCourse(i);
    setCourseStep(0);
    setCourseDir(1);
    setCourseAnswers({});
    setIsOpeningWhatsApp(false);
  };
  const closeCourseModal = () => {
    setActiveCourse(null);
    setIsOpeningWhatsApp(false);
  };
  const setCourseAnswer = (id: string, value: string) =>
    setCourseAnswers((prev) => ({ ...prev, [id]: value }));

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
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsOpeningWhatsApp(false);
      closeCourseModal();
    }, 500);
  };

  const primaryBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-sm active:scale-[0.98]";
  const ghostBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary active:scale-[0.98]";

  const headlineWords = [
    "Digital",
    "products",
    "that",
    "work",
    "for",
    "your",
    "business.",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/1 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
          <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2 border-x border-border/70" />
          {/* closing line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={rise}>
              <a
                href=""
                className="group mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 py-1.5 pr-4 pl-1.5 text-sm backdrop-blur transition-colors hover:border-primary/40"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BellRing className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium text-foreground">
                  Design, Development, Launch, Support.
                </span>
              </a>
            </motion.div>

            <h1 className="font-display text-balance text-5xl font-black leading-[1.03] tracking-tighter text-foreground sm:text-7xl lg:text-7xl">
              {headlineWords.map((w, i) => (
                <span
                  key={i}
                  className="mr-[0.25em]  overflow-hidden align-bottom"
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + i * 0.07,
                      ease: EASE,
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={rise}
              className="mt-6 max-w-lg text-base leading-5 text-muted-foreground sm:text-lg"
            >
              We handle strategy, design, development and launch, so you get a
              fast, reliable product your customers enjoy using.
            </motion.p>

            <motion.div
              variants={rise}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Link to="/projects" className={primaryBtn}>
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className={ghostBtn}>
                Start a Project
              </Link>
            </motion.div>

            <motion.div
              variants={rise}
              className="mt-10 flex items-center gap-4 border-t border-border/70 pt-6"
            >
              <div className="flex items-center">
                {trustedAvatars.map((av, i) => (
                  <div
                    key={av.name}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-background ring-1 ring-border/40"
                    style={{ marginLeft: i === 0 ? 0 : -12 }}
                  >
                    <SkeletonImage
                      src={av.src}
                      alt={av.name}
                      className="h-full w-full"
                    />
                  </div>
                ))}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-bold text-primary-foreground"
                  style={{ marginLeft: -12 }}
                >
                  +12
                </div>
              </div>
              <div>
                <div className="mb-0.5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by{" "}
                  <span className="font-semibold text-foreground">
                    30+ clients
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="relative mx-auto hidden w-full lg:block lg:max-w-none"
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl sm:-inset-4" />
            <div className="aspect-[5/4] overflow-hidden rounded-2xl border border-border/60 shadow-sm lg:aspect-square">
              <SkeletonImage
                src="/profile33.jpeg"
                alt="Featured project preview"
                className="h-full w-full"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-sm backdrop-blur sm:-left-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FolderCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  50+ projects
                </p>
                <p className="text-xs text-muted-foreground">Delivered</p>
              </div>
            </motion.div>

            <div className="absolute -top-3 right-3 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3.5 py-2 shadow-sm backdrop-blur sm:-right-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-foreground">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CLIENT MARQUEE ═══════════ */}
      <section
        aria-label="Companies we've worked with"
        className="border-y border-border bg-secondary/30 py-8 sm:py-10"
      >
        {/* <p className="mb-2 text-center text-xs font-medium text-muted-foreground">
          Trusted by growing teams and brands
        </p> */}
        <Marquee items={trustedBy} />
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="Services We Offer."
            description="Everything you need to take a product from first idea to a live, scalable release."
            href="/services"
            linkLabel="View all services"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.1} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-sm">
                  <div className="relative h-52 overflow-hidden bg-secondary">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                      <SkeletonImage
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-5 text-muted-foreground">
                      {s.desc}
                    </p>
                    <ul className="mt-5 mb-6 flex-1 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[15px] text-foreground/85"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => openServiceModal(i)}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-background py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                    >
                      Book this service <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SHIPPED PRODUCTS ═══════════ */}
      <section
        id="work"
        className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            tone="dark"
            title="Products running in production."
            description="Real platforms used every day, from marketplaces to logistics and travel safety."
            href="/projects"
            linkLabel="View all projects"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {[heroProject, ...otherProjects].map((p, i) => {
              const featured = i === 0;
              return (
                <Reveal
                  key={p.title}
                  delay={i * 0.1}
                  className={featured ? "lg:col-span-2" : ""}
                >
                  <Link
                    to="/projects"
                    className={`group flex h-full flex-col overflow-hidden border border-background/15 bg-background/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-background/40 hover:shadow-sm ${
                      featured ? "rounded-3xl lg:flex-row" : "rounded-2xl"
                    }`}
                  >
                    <div
                      className={`relative shrink-0 overflow-hidden ${
                        featured
                          ? "aspect-[16/10] lg:aspect-auto lg:min-h-[400px] lg:w-[58%]"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
                        <SkeletonImage
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full"
                        />
                      </div>
                      <span className="absolute top-4 left-4 rounded-full border border-border/40 bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                        {p.year}
                      </span>
                      <span className="absolute top-4 right-4 flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-background/90 opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-foreground" />
                      </span>
                    </div>
                    <div
                      className={`flex flex-1 flex-col gap-3 p-6 ${featured ? "lg:justify-center lg:gap-4 lg:p-10" : ""}`}
                    >
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium text-background"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3
                        className={`font-display font-bold leading-snug tracking-tight text-background ${featured ? "text-2xl lg:text-4xl" : "text-xl"}`}
                      >
                        {p.title}
                      </h3>
                      <p className="text-base leading-7 text-background/75">
                        {p.desc}
                      </p>
                      <p className="mt-auto border-t border-background/15 pt-4 text-sm font-medium text-background/60">
                        {p.category}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section
        id="process"
        className="border-y border-border bg-secondary/40 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="A clear process, every time."
            description="Four phases, clear deliverables and regular check-ins, so you always know what's next."
            href="/services"
            linkLabel="See the full process"
          />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute top-6 right-[12%] left-[12%] hidden h-px bg-border lg:block" />
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary font-display text-base font-extrabold text-foreground transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      {p.step}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <SectionHeader
            tone="dark"
            title="Numbers that back the work."
            description="Years of shipping real products for real clients, measured after handover and not just at kickoff."
          />
          <div
            ref={statsRef}
            className="grid grid-cols-2 border-t border-l border-background/15 md:grid-cols-4"
          >
            {stats.map((s) => (
              <Stat key={s.label} {...s} triggered={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COURSES ═══════════ */}
      <section
        id="courses"
        className="border-y border-border bg-secondary/40 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="Learn from people who ship."
            description="Hands-on, project-based courses taught by the team building products in production."
            href="/courses"
            linkLabel="View all courses"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <Reveal key={course.title} delay={i * 0.1} className="h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-sm">
                    <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                        <SkeletonImage
                          src={course.image}
                          alt={`${course.title} course preview`}
                          className="h-full w-full"
                        />
                      </div>
                      <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-background/80 text-primary backdrop-blur">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/85 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {course.level}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
                        {course.desc}
                      </p>
                      <ul className="mt-5 mb-6 flex-1 space-y-2.5">
                        {course.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[15px] text-foreground/85"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2.5 border-t border-border/60 pt-5">
                        <button
                          type="button"
                          onClick={() => openCourseModal(i)}
                          className={`${primaryBtn} flex-1 py-3`}
                        >
                          <Eye className="h-4 w-4" /> View course details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCourseWhatsApp(course)}
                          aria-label={`Chat about ${course.title} on WhatsApp`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-500 active:scale-95"
                        >
                          <WhatsAppIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="What clients say."
            description="Founders and teams who trusted us with their product."
          />
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-background/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-background/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-background/85">
                Available for new projects
              </span>
            </div>
            <h2 className="font-display text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Let's build something real.
            </h2>
            <p className="mx-auto mt-5 mb-10 max-w-md text-base leading-relaxed text-background/70">
              Interested in working with us? Send a message and we'll reply
              within 24 hours with a clear path forward.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-sm active:scale-[0.98]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-background/30 px-8 py-3.5 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:border-background/60 hover:bg-background/10 active:scale-[0.98] sm:w-auto"
                  >
                    <CalendarIcon className="h-4 w-4" /> Book a call
                  </button>
                }
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-background/30 px-8 py-3.5 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:border-background/60 hover:bg-background/10 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* ═══════════ SERVICE MODAL ═══════════ */}
      <Modal
        open={activeService !== null}
        onClose={closeServiceModal}
        label="Configure service"
      >
        {activeService !== null && (
          <>
            <ModalHeader
              kicker="Configure your project"
              title={featuredServices[activeService].title}
              onClose={closeServiceModal}
            />
            <div className="space-y-6 overflow-y-auto px-6 py-6">
              <div>
                <p className="mb-3 text-sm font-semibold text-foreground">
                  Choose your scope
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {scopeTiers.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTier(t.id)}
                      className={`rounded-xl border px-3 py-3 text-left transition-all duration-200 ${
                        selectedTier === t.id
                          ? "border-primary/50 bg-primary/10"
                          : "border-border hover:border-primary/25"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold ${selectedTier === t.id ? "text-primary" : "text-foreground"}`}
                      >
                        {t.label}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {t.timeline}
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
                    className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {scopeTiers.find((t) => t.id === selectedTier)?.blurb}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-foreground">
                  What's included
                </p>
                <ul className="space-y-2.5">
                  {featuredServices[activeService].bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label
                  htmlFor="inquiry-note"
                  className="mb-3 block text-sm font-semibold text-foreground"
                >
                  Anything specific?{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="inquiry-note"
                  value={inquiryNote}
                  onChange={(e) => setInquiryNote(e.target.value)}
                  rows={3}
                  placeholder="Type here..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>

              <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={closeServiceModal}
                  className="flex-1 rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleContinueToContact}
                  disabled={isSubmittingInquiry}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmittingInquiry ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      Preparing your brief...
                    </>
                  ) : (
                    <>
                      Continue to contact <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                The contact form will be pre-filled so you don't have to repeat
                yourself.
              </p>
            </div>
          </>
        )}
      </Modal>

      {/* ═══════════ COURSE MODAL ═══════════ */}
      <Modal
        open={!!activeCourseData}
        onClose={closeCourseModal}
        label={
          activeCourseData
            ? `${activeCourseData.title} course details`
            : "Course details"
        }
        maxWidth="sm:max-w-xl"
      >
        {activeCourseData && (
          <>
            <ModalHeader
              kicker={
                courseStep === 0
                  ? "Course details"
                  : courseStep === reviewStep
                    ? "Review & enroll"
                    : `Question ${courseStep} of ${courseQuestions.length}`
              }
              title={activeCourseData.title}
              onClose={closeCourseModal}
            />

            <div className="h-1 w-full shrink-0 bg-secondary">
              <motion.div
                className="h-full bg-primary"
                initial={false}
                animate={{
                  width: `${(courseStep / (totalCourseSteps - 1)) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={courseStep}
                  initial={{ opacity: 0, x: courseDir * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: courseDir * -24 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  {courseStep === 0 && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {activeCourseData.level}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {activeCourseData.duration}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {activeCourseData.overview}
                      </p>

                      <div>
                        <p className="mb-3 text-sm font-semibold text-foreground">
                          What you'll learn
                        </p>
                        <ul className="space-y-2.5">
                          {activeCourseData.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-3 text-sm font-semibold text-foreground">
                          Week by week
                        </p>
                        <ol className="divide-y divide-border overflow-hidden rounded-xl border border-border">
                          {activeCourseData.curriculum.map((item) => (
                            <li
                              key={item.topic}
                              className="flex items-start gap-3 px-4 py-3.5"
                            >
                              <span className="w-20 shrink-0 pt-0.5 text-xs font-bold text-primary">
                                {item.weeks}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-foreground">
                                  {item.topic}
                                </p>
                                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                                  {item.detail}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="rounded-xl border border-border bg-background px-4 py-3">
                          <p className="mb-1 text-sm font-semibold text-foreground">
                            Who it's for
                          </p>
                          <p className="text-xs leading-snug text-muted-foreground">
                            {activeCourseData.audience}
                          </p>
                        </div>
                        <div className="rounded-xl border border-border bg-background px-4 py-3">
                          <p className="mb-1 text-sm font-semibold text-foreground">
                            How it works
                          </p>
                          <p className="text-xs leading-snug text-muted-foreground">
                            {activeCourseData.format}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Ready? Answer a few quick questions and we'll send your
                        details straight to our WhatsApp.
                      </p>
                    </div>
                  )}

                  {currentQuestion && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-display text-lg font-bold leading-snug text-foreground">
                          {currentQuestion.label}
                        </h4>
                        {currentQuestion.helper && (
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
                            setCourseAnswer(currentQuestion.id, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              goNextCourseStep();
                            }
                          }}
                          placeholder={currentQuestion.placeholder}
                          aria-label={currentQuestion.label}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                        />
                      )}

                      {currentQuestion.kind === "note" && (
                        <textarea
                          value={courseAnswers[currentQuestion.id] ?? ""}
                          onChange={(e) =>
                            setCourseAnswer(currentQuestion.id, e.target.value)
                          }
                          rows={4}
                          placeholder={currentQuestion.placeholder}
                          aria-label={currentQuestion.label}
                          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                        />
                      )}

                      {currentQuestion.kind === "choice" && (
                        <div
                          role="radiogroup"
                          aria-label={currentQuestion.label}
                          className="grid gap-2 sm:grid-cols-2"
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
                                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                                  selected
                                    ? "border-primary/50 bg-primary/10"
                                    : "border-border hover:border-primary/25"
                                }`}
                              >
                                <span
                                  className={`text-sm font-semibold ${selected ? "text-primary" : "text-foreground"}`}
                                >
                                  {option}
                                </span>
                                <span
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                    selected
                                      ? "border-primary bg-primary"
                                      : "border-border"
                                  }`}
                                >
                                  {selected && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                                  )}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {courseStep === reviewStep && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-display text-lg font-bold leading-snug text-foreground">
                          Looks good? Let's chat.
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          The button below opens WhatsApp with your answers
                          already written. Just press send.
                        </p>
                      </div>
                      <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border">
                        <div className="flex items-start justify-between gap-4 px-4 py-3">
                          <dt className="shrink-0 text-sm text-muted-foreground">
                            Course
                          </dt>
                          <dd className="text-right text-sm font-semibold text-foreground">
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
                              <dt className="shrink-0 text-sm text-muted-foreground">
                                {q.short}
                              </dt>
                              <dd className="min-w-0 break-words text-right text-sm font-semibold text-foreground">
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

            <div className="shrink-0 border-t border-border bg-card px-6 py-4">
              <div className="flex flex-col-reverse gap-2 sm:flex-row">
                {courseStep === 0 ? (
                  <button
                    type="button"
                    onClick={closeCourseModal}
                    className="flex-1 rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    Close
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goBackCourseStep}
                    disabled={isOpeningWhatsApp}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary disabled:opacity-60"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                )}

                {courseStep < reviewStep ? (
                  <button
                    type="button"
                    onClick={goNextCourseStep}
                    disabled={!canContinueCourse()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {courseStep === 0 ? "Start enrollment" : "Continue"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCourseEnroll}
                    disabled={isOpeningWhatsApp}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
                  >
                    {isOpeningWhatsApp ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="h-4 w-4" /> Continue on
                        WhatsApp
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Index;
