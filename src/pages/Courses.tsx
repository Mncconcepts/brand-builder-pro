import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Palette,
  Code2,
  Layout,
  Server,
  Eye,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  BellRing,
  Clock,
  Users,
  FolderCheck,
  Award,
  MessagesSquare,
  Plus,
  Minus,
  X,
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

const WHATSAPP_NUMBER = "2349020495756"; // 09020495756 in international format

/* ─── data ─── */
const courses = [
  {
    icon: Palette,
    category: "design",
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
    category: "development",
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
  {
    icon: Code2,
    category: "development",
    title: "Full Stack Web Development",
    level: "Beginner → Intermediate",
    duration: "24 weeks",
    image: "/course-fullstack.svg",
    desc: "Full-stack fundamentals from your first component to a deployed, database-backed application.",
    bullets: [
      "HTML, CSS & modern JavaScript",
      "Git-Github Version control",
      "React fundamentals",
      "APIs & databases",
      "SEO-Performance Optimisations",
      "Securing a domain - Deploying a live project",
    ],
    overview:
      "A complete beginner-friendly journey from your first line of HTML to a live, database-backed web application on your own domain. You learn the front end, the back end and everything that connects them, building real projects at every stage so the skills actually stick.",
    audience:
      "Beginners and career switchers who want to build and ship complete web applications.",
    format:
      "Project-based, taught step by step with feedback on every project.",
    curriculum: [
      {
        weeks: "Weeks 1-4",
        topic: "Web foundations",
        detail: "HTML, CSS and responsive layouts from scratch.",
      },
      {
        weeks: "Weeks 5-8",
        topic: "Modern JavaScript & Git",
        detail: "Core language skills, version control and GitHub workflow.",
      },
      {
        weeks: "Weeks 9-14",
        topic: "React fundamentals",
        detail: "Components, hooks, routing and state in real projects.",
      },
      {
        weeks: "Weeks 15-19",
        topic: "APIs & databases",
        detail: "Build and consume APIs and store data properly.",
      },
      {
        weeks: "Weeks 20-22",
        topic: "SEO & performance",
        detail: "Make your applications fast and easy to find.",
      },
      {
        weeks: "Weeks 23-24",
        topic: "Domain & deployment",
        detail: "Secure a domain and launch a live project.",
      },
    ],
    goals: [
      "Become a full stack developer",
      "Switch careers into tech",
      "Build my own web product",
      "Freelance with confidence",
    ],
  },
  {
    icon: Server,
    category: "development",
    title: "Backend Development",
    level: "Intermediate → Advanced",
    duration: "12 weeks",
    image: "/course-backend.svg",
    desc: "Design and ship the systems behind the interface APIs, databases, auth and infrastructure that hold up in production.",
    bullets: [
      "REST & API design",
      "Databases & data modeling",
      "Authentication & security",
      "Deployment & infrastructure basics",
    ],
    overview:
      "Learn to build the systems that power great products: clean APIs, well-modelled databases, secure authentication and reliable deployments. You work on a real backend project from the first endpoint to production, learning the decisions that keep systems stable as they grow.",
    audience:
      "Developers with some programming experience who want to build reliable server-side systems.",
    format:
      "Project-based, taught step by step with code reviews on your work.",
    curriculum: [
      {
        weeks: "Weeks 1-2",
        topic: "Server fundamentals",
        detail: "How the web works, HTTP and structuring a server project.",
      },
      {
        weeks: "Weeks 3-5",
        topic: "REST & API design",
        detail: "Routes, validation, error handling and clean API structure.",
      },
      {
        weeks: "Weeks 6-8",
        topic: "Databases & data modeling",
        detail: "Designing schemas, relationships and efficient queries.",
      },
      {
        weeks: "Weeks 9-10",
        topic: "Authentication & security",
        detail: "Sign-in flows, sessions and protecting your endpoints.",
      },
      {
        weeks: "Weeks 11-12",
        topic: "Deployment & infrastructure",
        detail: "Ship your backend and keep it running reliably.",
      },
    ],
    goals: [
      "Land a backend role",
      "Build APIs for my own product",
      "Level up at my current job",
      "Move toward full stack",
    ],
  },
];

type Course = (typeof courses)[number];

const filters = [
  { id: "all", label: "All Courses" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
];

const whyLearn = [
  {
    icon: Users,
    title: "Taught by practitioners",
    description:
      "Learn from the same team building and shipping products in production every day.",
  },
  {
    icon: FolderCheck,
    title: "100% project-based",
    description:
      "Every track is built around real projects, so you learn by doing, not by watching.",
  },
  {
    icon: MessagesSquare,
    title: "Feedback on your work",
    description:
      "Get reviews on what you build, so you know what to fix and how to improve.",
  },
  {
    icon: Award,
    title: "Portfolio-ready results",
    description:
      "Finish with work you can show to employers and clients, not just a certificate of attendance.",
  },
];

const enrollSteps = [
  {
    step: "01",
    title: "Pick your track",
    description:
      "Browse the courses and open any one to see the full week-by-week breakdown.",
  },
  {
    step: "02",
    title: "Answer a few questions",
    description:
      "Tell us your level, goals and availability in a quick step-by-step form.",
  },
  {
    step: "03",
    title: "Chat with us on WhatsApp",
    description:
      "Your answers go straight to us so we can guide you on the right next step.",
  },
  {
    step: "04",
    title: "Start learning",
    description:
      "Join the next cohort and begin building real projects from week one.",
  },
];

const faqs = [
  {
    q: "Who are these courses for?",
    a: "Each track lists the level it suits. Product Design and Full Stack are beginner-friendly, while Frontend and Backend are built for people who already have some experience.",
  },
  {
    q: "How are the courses taught?",
    a: "Every track is hands-on and project-based. You build real work throughout and receive feedback on it, rather than only watching lessons.",
  },
  {
    q: "When does the next cohort start?",
    a: "Cohorts open soon. Open any course, answer the quick questions and send them to us on WhatsApp to be first in line when dates are confirmed.",
  },
  {
    q: "Do I need my own laptop?",
    a: "Yes, a laptop and a reliable internet connection are needed to build projects. We ask about this during enrollment so we can advise you if you're not sure.",
  },
  {
    q: "How do I enroll?",
    a: "Open the course you're interested in, tap Start Enrollment, answer the short questions and continue on WhatsApp. We'll reply with the next steps.",
  },
];

const productHighlights = [
  "Expert Reviewers",
  "Quality Feedbacks",
  "Timely Support",
  "Fast Response",
];

/* ─── Course enrollment questions (asked step by step in the popup) ─── */
type CourseQuestion = {
  id: string;
  short: string; // label used in the review + WhatsApp message
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

/* ─── shared section heading ─── */
function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 sm:mb-14 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <div
        className={`inline-flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
      >
        <span className="w-6 h-px bg-foreground/40" />
        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance font-extrabold text-foreground leading-[1.02]">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ─── faq item ─── */
function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: (typeof faqs)[0];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border bg-card transition-colors duration-300 ${
        open
          ? "border-foreground/25"
          : "border-border hover:border-foreground/20"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
      >
        <span className="font-display text-sm sm:text-base font-bold text-foreground">
          {item.q}
        </span>
        <span
          className={`w-7 h-7 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
            open
              ? "bg-foreground text-background border-foreground"
              : "border-border text-muted-foreground"
          }`}
        >
          {open ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /* Course popup state */
  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [courseStep, setCourseStep] = useState(0); // 0 = overview, 1..n = questions, last = review
  const [courseDir, setCourseDir] = useState(1);
  const [courseAnswers, setCourseAnswers] = useState<Record<string, string>>(
    {},
  );
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  const visibleCourses = courses
    .map((course, index) => ({ course, index }))
    .filter(
      ({ course }) =>
        activeFilter === "all" || course.category === activeFilter,
    );

  // Course WhatsApp quick-reach button
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

  const waitlistUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! Please add me to the waitlist for your next course cohort.",
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

      {/* ── HERO ── */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Courses We Offer
              </span>
            </div> */}

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-balance font-extrabold tracking-tighter leading-[0.97] mb-5">
              Courses &{" "}
              <span className="text-muted-foreground">Mentorship Program.</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              Hands-on, project-based tracks taught by the same team building
              products in production. Cohorts open soon, book your spot to be
              first in line.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Browse Courses <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={waitlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4" /> Join the Waitlist
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 mt-14 sm:mt-16 border-t border-l border-border rounded-tl-2xl"
          >
            {[
              { n: "4", label: "Learning tracks" },
              { n: "8-24", label: "Weeks per track" },
              { n: "100%", label: "Project-based" },
              { n: "Soon", label: "Next cohort opens" },
            ].map((s) => (
              <div
                key={s.label}
                className="border-r border-b border-border px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-none">
                  {s.n}
                </p>
                <p className="text-xs text-muted-foreground font-medium mt-2.5">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section
        id="courses"
        className="scroll-mt-20 relative py-24 sm:py-28 bg-secondary/30 border-b border-border overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)] opacity-30" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-foreground/40" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                  Learn & Earn
                </p>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance font-extrabold text-foreground leading-[1.02]">
                Choose Your Track.
              </h2>
            </motion.div>

            {/* Filter tabs */}
            <div
              role="tablist"
              aria-label="Filter courses"
              className="inline-flex self-start md:self-auto p-1 rounded-xl border border-border bg-card"
            >
              {filters.map((f) => {
                const active = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                      active
                        ? "bg-foreground text-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {visibleCourses.map(({ course, index }, i) => {
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
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <SkeletonImage
                        src={course.image}
                        alt={`${course.title} course preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent pointer-events-none" />
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
                        onClick={() => openCourseModal(index)}
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

      {/* ── WHY LEARN WITH US ── */}
      <section className="py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why learn with us"
            title="Learn The Way We Actually Work."
            description="No filler. Every track is built around real work, real feedback and results you can show."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border rounded-tl-2xl overflow-hidden">
            {whyLearn.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group border-r border-b border-border p-6 sm:p-7 hover:bg-secondary/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                    <Icon className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-background" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW ENROLLMENT WORKS ── */}
      <section className="py-24 sm:py-28 bg-gradient-to-b from-secondary/40 via-background to-secondary/20 border-y border-border/80 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-15" />

        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="How enrollment works"
            title="From Interest To Day One."
            description="Four simple steps. No long forms, no waiting around."
          />

          <div className="relative mt-12 sm:mt-16">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
              {enrollSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative flex flex-col h-full bg-card/60 backdrop-blur-sm border border-border/70 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border/80 shadow-xs flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-105 ring-1 ring-primary/10">
                      <span className="font-display text-sm font-extrabold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                        {s.step}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground/60 tracking-widest uppercase">
                      Step 0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <div className="h-0.5 w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full opacity-80" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── XERAI LAUNCH ── */}
      {/* <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-sm transition-shadow duration-500"
          >
            <div className="grid md:grid-cols-2">
      
              <div className="order-1 md:order-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2.5 w-fit mt-3 mb-5">
    
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
                  Get Ready For Our New Product Launch -{" "}
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
                      className="rounded-full border border-border cursor-pointer bg-background/60 text-foreground px-3 py-2 text-xs font-normal tracking-tight hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
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
      </section> */}

      {/* ── FAQ ── */}
      <section
        id="faq"
        className="scroll-mt-20 py-24 sm:py-28 bg-secondary/30 border-y border-border"
      >
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQ"
                title="Good Questions."
                description="Quick answers to what students ask us most. Can't find yours? Send us a message."
              />
              <a
                href={waitlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="-mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all"
              >
                Ask on WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <FaqItem
                  item={item}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="relative py-20 sm:py-28 bg-foreground text-background overflow-hidden">
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
                Cohorts opening soon
              </span>
            </div>
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
              Ready To Start Learning?
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
              Join the waitlist and be first to know when the next cohort opens.
              We'll reply with a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs font-bold rounded-xl hover:bg-background/90 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Browse Courses <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={waitlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-3.5 text-xs font-bold rounded-xl hover:border-background/55 hover:bg-background/10 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> Join the Waitlist
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

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
                        <div className="relative aspect-[16/7] w-full rounded-xl overflow-hidden border border-border bg-secondary">
                          <SkeletonImage
                            src={activeCourseData.image}
                            alt={`${activeCourseData.title} course preview`}
                            className="w-full h-full object-cover"
                          />
                        </div>

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
                                <span className="w-20 shrink-0 text-[10px] font-bold uppercase tracking-wider text-primary pt-0.5">
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

export default Courses;
