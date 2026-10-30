import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Plus,
  Minus,
  Layers,
  MessagesSquare,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

/* ─── data ─── */
const WHATSAPP_NUMBER = "2349020495756";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web & App Development",
    tagline: "Ship fast. Scale further.",
    description:
      "Full-stack web applications and mobile apps built with modern frameworks. Clean architecture, responsive layouts, and performant code that scales with your business.",
    features: [
      "React / Next.js",
      "Node.js & Express",
      "Flutter / React Native",
      "TypeScript",
      "API Integration",
      "Performance Optimization",
      "Dart",
    ],
    accent: "from-foreground/5 to-transparent",
    accentBorder: "border-foreground/10",
    accentText: "text-foreground",
    accentBg: "bg-foreground/5",
  },
  {
    number: "02",
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
    accent: "from-foreground/5 to-transparent",
    accentBorder: "border-foreground/10",
    accentText: "text-foreground",
    accentBg: "bg-foreground/5",
  },
  {
    number: "03",
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
    accent: "from-foreground/5 to-transparent",
    accentBorder: "border-foreground/10",
    accentText: "text-foreground",
    accentBg: "bg-foreground/5",
  },
  {
    number: "04",
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
    accent: "from-foreground/5 to-transparent",
    accentBorder: "border-foreground/10",
    accentText: "text-foreground",
    accentBg: "bg-foreground/5",
  },
  {
    number: "05",
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
    accent: "from-foreground/5 to-transparent",
    accentBorder: "border-foreground/10",
    accentText: "text-foreground",
    accentBg: "bg-foreground/5",
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

/* ─── service card ─── */
function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const featured = index === 0;
  const previewTags = service.features.slice(0, 4);
  const extra = service.features.length - previewTags.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09 }}
      className={`group/card relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-l ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left group block p-6 sm:p-8"
      >
        {/* Icon + number */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground group-hover:scale-105">
            <Icon className="w-5 h-5 text-foreground transition-colors duration-300 group-hover:text-background" />
          </div>
          <div className="flex items-center gap-2">
            {featured && (
              <span className="text-[9px] font-bold uppercase tracking-widest text-foreground bg-foreground/5 border border-border px-2.5 py-1 rounded-full">
                Core offering
              </span>
            )}
            <span className="font-display text-sm font-extrabold text-muted-foreground/40 tracking-tight">
              {service.number}
            </span>
          </div>
        </div>

        {/* Title + tagline */}
        <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-muted-foreground mb-4">
          {service.tagline}
        </p>

        <p
          className={`text-sm text-muted-foreground leading-relaxed mb-6 ${
            featured ? "max-w-2xl" : "line-clamp-3"
          }`}
        >
          {service.description}
        </p>

        {/* Tag preview */}
        <div className="flex flex-wrap gap-1.5">
          {previewTags.map((f) => (
            <span
              key={f}
              className="font-mono text-[10px] font-semibold tracking-tight px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70 border border-border transition-colors group-hover:border-foreground/20"
            >
              {f}
            </span>
          ))}
          {extra > 0 && (
            <span className="font-mono text-[10px] font-semibold tracking-tight px-2.5 py-1 rounded-md text-muted-foreground border border-dashed border-border">
              +{extra} more
            </span>
          )}
        </div>

        {/* Expand affordance */}
        <div className="flex items-center justify-between pt-5 mt-6 border-t border-border">
          <span className="text-[11px] font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
            {open ? "Hide details" : "View details"}
          </span>
          <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center transition-colors group-hover:border-foreground/30">
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </span>
        </div>
      </button>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
          <div
            className={`rounded-xl bg-gradient-to-br ${service.accent} border border-border p-5`}
          >
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Tech & Capabilities
              </p>
              <ul
                className={`grid grid-cols-1 ${featured ? "sm:grid-cols-2" : ""} gap-2`}
              >
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-xs rounded-lg border border-border/60 bg-background/50 px-3 py-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-foreground" />
                    <span className="font-mono text-foreground/80 tracking-tight">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex w-full items-center justify-center gap-2 text-xs font-bold px-5 py-3 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all active:scale-[0.98]"
            >
              Book This Service <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>
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

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to discuss a project with you.",
  )}`;

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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                  What We Offer
                </span>
              </div> */}

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-balance font-extrabold tracking-tighter leading-[0.97] mb-5">
                Services Built for{" "}
                <span className="text-muted-foreground">Real Outcomes.</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
                From concept to launch, we provide end-to-end services covering
                every aspect of building successful digital products with
                clarity, craft, and accountability.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>

            {/* Services at a glance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:block lg:col-span-5 relative"
            >
              <div className="absolute -inset-3 rounded-3xl border border-border/40 bg-secondary/20 backdrop-blur-sm -z-10" />
              <div className="rounded-2xl border border-border bg-card shadow-l overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-foreground/[0.02]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Services at a glance
                  </p>
                  <span className="text-[10px] font-bold text-foreground/60">
                    {services.length} Core
                  </span>
                </div>
                <ul className="p-2">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.number}>
                        <a
                          href="#services"
                          className="group flex items-center gap-4 rounded-xl px-3 py-3 hover:bg-secondary transition-colors"
                        >
                          <span className="w-9 h-9 shrink-0 rounded-lg bg-foreground/5 border border-border flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:border-foreground">
                            <Icon className="w-4 h-4 text-foreground transition-colors group-hover:text-background" />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-bold text-foreground truncate">
                              {s.title}
                            </span>
                            <span className="block text-[11px] text-muted-foreground truncate">
                              {s.tagline}
                            </span>
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            transition={{ delay: 0.35, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 mt-14 sm:mt-16 border-t border-l border-border rounded-tl-2xl"
          >
            {[
              { n: "5", label: "Core Services" },
              { n: "50+", label: "Projects Shipped" },
              { n: "4+", label: "Years Active" },
              { n: "100%", label: "Remote Active" },
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

      {/* ── TOOLS BAND ── */}
      <section className="py-10 border-b border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground shrink-0">
            Tools & technologies we ship with
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] font-semibold tracking-tight px-3 py-1.5 rounded-full border border-border bg-card text-foreground/75 hover:border-foreground/30 hover:text-foreground transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="scroll-mt-20 py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Core digital solutions"
            title="Technical Expertise."
            description="Pick a single service or combine them. Open any card to see exactly what's covered."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {services.map((service, i) => (
              <ServiceRow key={service.number} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="pb-24 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border rounded-tl-2xl overflow-hidden">
            {whyUs.map((item, i) => {
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

      {/* ── HOW WE WORK ── */}
      <section
        id="process"
        className="scroll-mt-20 py-24 sm:py-32 bg-secondary/30 border-y border-border relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-0 pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-20" />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-foreground/40" />
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                    How We Work
                  </p>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance text-foreground font-extrabold leading-[1.02] mb-5">
                  A Clear Process, Every Time.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Four phases, clear deliverables and regular check-ins. You
                  always know what's happening, what's next and what we need
                  from you.
                </p>

                {/* Timeline overview */}
                {/* <div className="rounded-2xl border border-border bg-card p-5 mb-8 max-w-md">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Typical timeline
                  </p>
                  <div className="grid grid-cols-4 gap-1.5 mb-3">
                    {process.map((p) => (
                      <div key={p.step} className="space-y-2">
                        <div className="h-1 rounded-full bg-foreground" />
                        <p className="text-[10px] font-bold text-foreground leading-tight">
                          {p.title}
                        </p>
                        <p className="text-[9px] text-muted-foreground leading-tight">
                          {p.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Start with Discovery <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: vertical timeline */}
          <div className="lg:col-span-7">
            <ol className="relative">
              {/* track */}
              <div className="absolute left-[27px] top-6 bottom-6 w-px bg-border" />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[27px] top-6 bottom-6 w-px bg-foreground origin-top"
              />

              {process.map((p, i) => (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative flex gap-5 sm:gap-6 pb-6 last:pb-0"
                >
                  <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                    <span className="font-display text-sm font-extrabold text-foreground transition-colors duration-300 group-hover:text-background">
                      {p.step}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:border-foreground/30 hover:shadow-xm">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground">
                        {p.title}
                      </h3>
                      <span className="shrink-0 text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                        {p.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-5 border-t border-border">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          What we do
                        </p>
                        <ul className="space-y-2">
                          {p.activities.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-xs text-foreground/80 leading-snug"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/50 shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          You get
                        </p>
                        <ul className="space-y-2">
                          {p.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-xs text-foreground/80 leading-snug"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-foreground shrink-0 -mt-px" />
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

      {/* ── PRICING ── */}
      <section id="pricing" className="scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            center
            eyebrow="Transparent Pricing"
            title="Investment Tiers"
            description="Clear starting points for every stage. Every project is scoped to your goals before any work begins."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {pricing.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  tier.featured
                    ? "bg-foreground text-background border-foreground shadow-2md lg:scale-[1.03]"
                    : "bg-card border-border hover:border-foreground/40 hover:shadow-l"
                }`}
              >
                {tier.featured && (
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] opacity-[0.07]" />
                )}

                {tier.featured && tier.badge && (
                  <div className="absolute top-0 right-6 bg-background text-foreground text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-b-lg">
                    {tier.badge}
                  </div>
                )}

                <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-5 opacity-60">
                    {tier.name}
                  </p>
                  <div className="mb-3">
                    <span className="text-[10px] opacity-50 block mb-1">
                      {tier.priceNote}
                    </span>
                    <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
                      {tier.price}
                    </div>
                  </div>
                  <p className="text-sm mb-7 leading-relaxed opacity-60">
                    {tier.description}
                  </p>

                  <div
                    className={`h-px w-full mb-7 ${tier.featured ? "bg-background/15" : "bg-border"}`}
                  />

                  <ul className="space-y-3.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-xs opacity-85"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={getPlanContactUrl(tier)}
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] ${
                      tier.featured
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {tier.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Included with every project */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            <span className="font-bold uppercase tracking-widest text-[10px] text-foreground">
              Every project includes
            </span>
            {["Kickoff call", "Regular check-ins", "Launch support"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-foreground" />
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </section>

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
                description="Quick answers to what clients ask us most. Can't find yours? Send us a message."
              />
              <Link
                to="/contact"
                className="-mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all"
              >
                Ask a question <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
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
                Available for new projects
              </span>
            </div>
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
              Let's Build Something Real.
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
              Tell us what you're working on. We'll get back within 24 hours
              with a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs font-bold rounded-xl hover:bg-background/90 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-3.5 text-xs font-bold rounded-xl hover:border-background/55 hover:bg-background/10 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
