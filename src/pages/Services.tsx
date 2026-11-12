import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Zap,
  Palette,
  Code2,
  Lightbulb,
  Pen,
  Plus,
  Minus,
  Layers,
  MessagesSquare,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

/* ═════════════ Motion ═════════════ */
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

/* ═════════════ Data ═════════════ */
const WHATSAPP_NUMBER = "2349020495756";

const services = [
  {
    number: "01",
    id: "web-app-development",
    icon: Code2,
    title: "Web & App Development",
    tagline: "Ship fast. Scale further.",
    description:
      "Full-stack websites, applications and mobile apps built with modern frameworks and technologies. Clean design and architecture, responsive layouts on all screens and devices, and performant code that scales with your business.",
    features: [
      "React / Next.js",
      "Node.js & Express",
      "Flutter / React Native",
      "TypeScript",
      "API Integration",
      "Performance Optimization",
      "Dart",
    ],
  },
  {
    number: "02",
    id: "product-design",
    icon: Palette,
    title: "Product Design",
    tagline: "From research to release.",
    description:
      "End-to-end product design from discovery and wireframing to high-fidelity prototypes. User-centered design that drives engagement, conversion, and delight.",
    features: [
      "User Research",
      "Discovery Workshops",
      "User Flows",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    number: "03",
    id: "ui-ux-design",
    icon: Zap,
    title: "UI/UX Design",
    tagline: "Interfaces that feel right.",
    description:
      "Intuitive interfaces and seamless user experiences. Design systems, component libraries, and interaction design that feels natural and delightful across every device.",
    features: [
      "Interface Design",
      "Design Systems",
      "Component Libraries",
      "Interaction Design",
      "Responsive Layouts",
      "Accessibility",
      "Prototyping",
    ],
  },
  {
    number: "04",
    id: "design-consulting",
    icon: Lightbulb,
    title: "Design Consulting",
    tagline: "Strategy that sticks.",
    description:
      "Strategic design guidance for teams and products. Audits, design reviews, and actionable recommendations that elevate your digital presence and align design with business goals.",
    features: [
      "Design Audits",
      "Team Mentoring",
      "Brand Strategy",
      "Process Optimization",
    ],
  },
  {
    number: "05",
    id: "logo-brand-design",
    icon: Pen,
    title: "Logo & Brand Design",
    tagline: "Marks that endure.",
    description:
      "Distinctive, memorable logos and visual identities crafted to communicate your brand's personality. From concept to final assets, every mark is built to last.",
    features: [
      "Brand Identity",
      "Logo Variants",
      "Style Guide",
      "Print & Digital Assets",
    ],
  },
];

const tools = [
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Flutter",
  "React Native",
  "Dart",
  "Tailwind CSS",
  "Vite",
];

const whyUs = [
  {
    icon: Layers,
    title: "End-to-end ownership",
    description:
      "Strategy, design, development and launch under one roof, so nothing gets lost between handoffs.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    description:
      "Regular check-ins, honest timelines and a reply within 24 hours. You always know where things stand.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Clean architecture and documented design systems that your team can keep building on after launch.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    description:
      "We stay available once you go live, so fixes and improvements don't wait for a new contract.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your business, goals, target audience, and technical requirements through in-depth consultation.",
    duration: "Week 1",
    activities: [
      "Kickoff call & stakeholder questions",
      "Goals, audience & competitor review",
      "Technical requirements gathering",
    ],
    deliverables: ["Project brief", "Scope outline", "Risks & assumptions"],
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Defining scope, creating project timelines, wireframes, and establishing the technical architecture.",
    duration: "Week 1-2",
    activities: [
      "Sitemap & user flows",
      "Wireframes for key screens",
      "Architecture & timeline planning",
    ],
    deliverables: ["Approved wireframes", "Technical plan", "Project timeline"],
  },
  {
    step: "03",
    title: "Design-Build",
    description:
      "Iterative design and development with regular check-ins to ensure alignment with your vision.",
    duration: "Week 3-10",
    activities: [
      "High-fidelity UI design",
      "Iterative development sprints",
      "Regular demos & check-ins",
    ],
    deliverables: [
      "Working builds to review",
      "Revision rounds per your plan",
      "Progress updates",
    ],
  },
  {
    step: "04",
    title: "Launch-Support",
    description:
      "Thorough testing, deployment, and ongoing support to ensure your product thrives post-launch.",
    duration: "Week 11+",
    activities: [
      "QA, testing & performance checks",
      "Deployment & go-live",
      "Post-launch monitoring",
    ],
    deliverables: ["Live product", "Handover walkthrough", "Ongoing support"],
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$900",
    priceNote: "Starting from",
    description:
      "Perfect for small businesses needing a professional web presence.",
    features: [
      "Single page website",
      "Responsive design",
      "Figma custom design",
      "Basic SEO setup",
      "1 round of revisions",
      "3 weeks delivery",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$3,500",
    priceNote: "Starting from",
    description:
      "For growing businesses that need a comprehensive digital solution.",
    features: [
      "Multi-page website-applications",
      "Figma custom design",
      "Advanced SEO",
      "CMS integration",
      "3 rounds of revisions",
      "16 weeks delivery",
      "Priority support",
    ],
    featured: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "Let's talk",
    description:
      "For complex projects requiring full-stack development and design.",
    features: [
      "Web and mobile applications",
      "Custom feature set",
      "API integration",
      "Design system",
      "Unlimited revisions",
      "Ongoing support",
    ],
    featured: false,
    cta: "Contact Us",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A Starter website usually ships in about 3 weeks. Larger multi-page products and apps take longer, and you'll get a clear timeline in your project plan once discovery is done.",
  },
  {
    q: "What do I need to get started?",
    a: "Just a short description of what you want to build, who it's for and any references you like. If you're still figuring it out, the discovery phase is there to help shape it.",
  },
  {
    q: "How do revisions work?",
    a: "Each plan includes a set number of revision rounds: one for Starter, three for Professional and unlimited for Enterprise. We collect feedback at agreed checkpoints so changes stay focused.",
  },
  {
    q: "Do you work with clients in other countries?",
    a: "Yes. We work 100% remotely with founders and teams across time zones, using regular calls and written updates to keep everyone aligned.",
  },
  {
    q: "Will I own the designs and code?",
    a: "Yes. Once the project is paid for and handed over, the designs and code built for you belong to you.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Launch & Support is a dedicated phase of every project. Professional includes priority support and Enterprise includes ongoing support.",
  },
];

const getPlanContactUrl = (tier: (typeof pricing)[0]) => {
  const params = new URLSearchParams({
    service: `${tier.name} Plan`,
    scope: tier.price,
    timeline: tier.priceNote,
    notes: `Included: ${tier.features.join(", ")}`,
  });
  return `/contact?${params.toString()}`;
};

/* ═════════════ Small components ═════════════ */
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
  tone = "light",
  center = false,
}: {
  title: string;
  description?: string;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`mb-12 sm:mb-16 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <h2
        className={`font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl ${
          dark ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-6 sm:text-lg sm:leading-7 ${
            dark ? "text-background/75" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
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
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
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
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="font-display text-base font-bold text-foreground sm:text-lg">
          {item.q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
            open
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-base leading-7 text-muted-foreground sm:px-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═════════════ Page ═════════════ */
const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to discuss a project with you.",
  )}`;

  const primaryBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-sm active:scale-[0.98]";
  const ghostBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary active:scale-[0.98]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/1 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
          <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2 border-x border-border/70" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              <motion.h1
                variants={rise}
                className="font-display text-balance text-5xl font-black leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl"
              >
                Digital product services for growing businesses.
              </motion.h1>
              <motion.p
                variants={rise}
                className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              >
                From concept to launch, we provide end-to-end services covering
                every part of building a successful digital product, with
                clarity, craft and accountability.
              </motion.p>
              <motion.div
                variants={rise}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link to="/contact" className={primaryBtn}>
                  Start a Project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="#pricing" className={ghostBtn}>
                  View Pricing
                </a>
              </motion.div>
            </motion.div>

            {/* Services at a glance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              className="hidden lg:col-span-5 lg:block"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card/95 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <p className="font-display text-base font-bold text-foreground">
                    Our services
                  </p>
                  <span className="text-sm font-medium text-muted-foreground">
                    {services.length} core services
                  </span>
                </div>
                <ul className="p-2">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.number}>
                        <a
                          href={`#${s.id}`}
                          className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-secondary"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary transition-colors group-hover:border-foreground group-hover:bg-foreground">
                            <Icon className="h-4 w-4 text-foreground transition-colors group-hover:text-background" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-base font-bold text-foreground">
                              {s.title}
                            </span>
                            <span className="block truncate text-sm text-muted-foreground">
                              {s.tagline}
                            </span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
            className="mt-14 grid grid-cols-2 border-t border-l border-border bg-card/60 backdrop-blur sm:mt-16 md:grid-cols-4"
          >
            {[
              { n: "5", label: "Core services" },
              { n: "50+", label: "Projects shipped" },
              { n: "4+", label: "Years active" },
              { n: "100%", label: "Remote delivery" },
            ].map((s) => (
              <div
                key={s.label}
                className="border-r border-b border-border px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="font-display text-3xl font-extrabold leading-none tracking-tight text-foreground sm:text-4xl">
                  {s.n}
                </p>
                <p className="mt-2.5 text-sm font-medium text-muted-foreground sm:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TECHNOLOGY MARQUEE ═══════════ */}
      <section
        aria-label="Technologies we work with"
        className="border-y border-border bg-secondary/30 py-8 sm:py-10"
      >
        <p className="mb-6 text-center text-base font-medium text-muted-foreground">
          Tools and technologies we ship with
        </p>
        <Marquee items={tools} />
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="Everything you need to build and launch."
            description="Choose a single service or combine them. Each one lists exactly what is covered."
          />

          <div className="space-y-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.number}>
                  <article
                    id={s.id}
                    className="group scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/25 hover:shadow-sm"
                  >
                    <div className="grid lg:grid-cols-12">
                      <div className="p-6 sm:p-8 lg:col-span-6 lg:p-10">
                        <div className="mb-6 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground">
                            <Icon className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-background" />
                          </div>
                          <span className="font-display text-base font-extrabold text-muted-foreground/60">
                            {s.number} /{" "}
                            {String(services.length).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 text-base font-semibold text-muted-foreground">
                          {s.tagline}
                        </p>
                        <p className="mt-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
                          {s.description}
                        </p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                          <Link
                            to={`/contact?service=${encodeURIComponent(s.title)}`}
                            className={primaryBtn}
                          >
                            Book this service{" "}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                          <a href="#pricing" className={ghostBtn}>
                            See pricing
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-border bg-secondary/40 p-6 sm:p-8 lg:col-span-6 lg:border-t-0 lg:border-l lg:p-10">
                        <p className="mb-4 text-base font-bold text-foreground">
                          What's included
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {s.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-3 rounded-xl border border-border/70 bg-background px-4 py-3 text-[15px] font-medium leading-6 text-foreground/90"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY US (dark) ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            tone="dark"
            title="Why businesses work with us."
            description="One accountable team, honest communication and work that is built to last."
          />
          <div className="grid border-t border-l border-background/15 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="group h-full border-r border-b border-background/15 p-6 transition-colors duration-300 hover:bg-background/[0.05] sm:p-7">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-background/20 bg-background/10 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-background">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-background/75">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section
        id="process"
        className="relative scroll-mt-20 overflow-hidden border-b border-border bg-secondary/40 py-20 sm:py-28"
      >
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                  A clear process, every time.
                </h2>
                <p className="mt-4 mb-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Four phases, clear deliverables and regular check-ins. You
                  always know what's happening, what's next and what we need
                  from you.
                </p>
                <Link to="/contact" className={primaryBtn}>
                  Start with Discovery <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative">
              <div className="absolute top-6 bottom-6 left-[27px] w-px bg-border" />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.6, ease: EASE }}
                className="absolute top-6 bottom-6 left-[27px] w-px origin-top bg-foreground"
              />
              {process.map((p, i) => (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative flex gap-5 pb-6 last:pb-0 sm:gap-6"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-background transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground">
                    <span className="font-display text-sm font-extrabold text-foreground transition-colors duration-300 group-hover:text-background">
                      {p.step}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/25 hover:shadow-sm sm:p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                        {p.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground">
                        {p.duration}
                      </span>
                    </div>
                    <p className="mb-5 text-[15px] leading-7 text-muted-foreground">
                      {p.description}
                    </p>

                    <div className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                      <div>
                        <p className="mb-3 text-sm font-bold text-foreground">
                          What we do
                        </p>
                        <ul className="space-y-2.5">
                          {p.activities.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2.5 text-sm leading-6 text-foreground/85"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 text-sm font-bold text-foreground">
                          You get
                        </p>
                        <ul className="space-y-2.5">
                          {p.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2.5 text-sm leading-6 text-foreground/85"
                            >
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            center
            title="Clear pricing for every stage."
            description="Transparent starting points. Every project is scoped to your goals before any work begins."
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {pricing.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    tier.featured
                      ? "border-foreground bg-foreground text-background shadow-sm lg:scale-[1.03]"
                      : "border-border bg-card hover:border-foreground/40 hover:shadow-sm"
                  }`}
                >
                  {tier.featured && (
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.07] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
                  )}

                  {tier.featured && tier.badge && (
                    <div className="absolute top-0 right-6 rounded-b-lg bg-background px-3 py-2 text-xs font-bold text-foreground">
                      {tier.badge}
                    </div>
                  )}

                  <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                    <p className="mb-5 text-base font-bold opacity-80">
                      {tier.name}
                    </p>
                    <div className="mb-3">
                      <span className="mb-1 block text-sm opacity-70">
                        {tier.priceNote}
                      </span>
                      <div className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                        {tier.price}
                      </div>
                    </div>
                    <p className="mb-7 text-[15px] leading-7 opacity-75">
                      {tier.description}
                    </p>

                    <div
                      className={`mb-7 h-px w-full ${tier.featured ? "bg-background/15" : "bg-border"}`}
                    />

                    <ul className="mb-8 flex-1 space-y-3.5">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-[15px] opacity-90"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={getPlanContactUrl(tier)}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all active:scale-[0.98] ${
                        tier.featured
                          ? "bg-background text-foreground hover:bg-background/90"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      {tier.cta} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground sm:text-base">
            <span className="font-bold text-foreground">
              Every project includes
            </span>
            {["Kickoff call", "Regular check-ins", "Launch support"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ),
            )}
          </Reveal>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section
        id="faq"
        className="scroll-mt-20 border-y border-border bg-secondary/40 py-20 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                  Good questions.
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Quick answers to what clients ask us most. Can't find yours?
                  Send us a message.
                </p>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-1.5 border-b border-foreground/30 pb-0.5 text-base font-semibold text-foreground transition-all hover:border-foreground"
                >
                  Ask a question
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-8">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <FaqItem
                  item={item}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
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
            <p className="mx-auto mt-5 mb-10 max-w-md text-base leading-7 text-background/75 sm:text-lg sm:leading-8">
              Tell us what you're working on. We'll get back within 24 hours
              with a clear path forward.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.98]"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-background/30 px-8 py-3.5 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:border-background/60 hover:bg-background/10 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
