import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Compass,
  Rocket,
  Code2,
  Palette,
  Zap,
  Trophy,
  Users,
  MessageSquare,
  Layers,
  Monitor,
  Database,
  Terminal,
  PenTool,
  CalendarDays,
  FolderCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

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

/* ─── data ─── */
const approachPillars = [
  {
    icon: Compass,
    title: "Design & Strategy",
    description:
      "We start with research and product strategy, mapping user needs and business goals before a single screen gets designed. Every decision has a reason behind it.",
    tags: ["User research", "Product strategy", "UX & UI design"],
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Clean, scalable code that mirrors the design intent exactly. We build with modern frameworks so what ships matches what was designed, pixel for pixel.",
    tags: ["Modern frameworks", "Scalable code", "Design fidelity"],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We don't disappear after launch. Ongoing iteration, monitoring, and support keep the product improving long after the first release date.",
    tags: ["Deployment", "Monitoring", "Ongoing iteration"],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    icon: Monitor,
    description:
      "Building fast, accessible interfaces that hold up from first prototype to production traffic.",
    skills: [
      "React / Next.js",
      "React Native",
      "Flutter",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    icon: Database,
    description:
      "Reliable APIs and data infrastructure engineered to handle real-world load without surprises.",
    skills: [
      "Node.js",
      "Express",
      "Fast-Api",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    label: "Design",
    icon: PenTool,
    description:
      "Systems-driven design that stays consistent as a product's surface area grows.",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
  },
  {
    label: "Workflow",
    icon: Terminal,
    description:
      "The processes and tooling that keep delivery predictable, from commit to release.",
    skills: ["Git & CI/CD", "Agile / Scrum", "REST & GraphQL", "Python"],
  },
];

const experience = [
  {
    role: "Software Developer & Lead Product Designer",
    company: "SUPERSONIC Dynamic Services B.V.",
    period: "Present",
    type: "Full-Time",
    description:
      "Co-leading the design and frontend development of a next-generation moving and freight haulage platform for the Netherlands. Spearheading product strategy, UI/UX design, design systems, and responsive web experiences while collaborating on scalable frontend architecture and digital workflows. The platform delivers professional moving and freight haulage services powered by precision logistics, real-time operations, and carbon-neutral fleet solutions, creating a seamless, technology-driven relocation experience for individuals, families, and businesses.",
    icon: Code2,
  },
  {
    role: "Lead Product Designer & Product Manager",
    company: "Visa Guard Africa Technologies Ltd",
    period: "Present",
    type: "Full-Time",
    description:
      "Leading product design and strategy for a visa security platform dedicated to protecting Africans from travel and immigration scams. Designed intuitive experiences for verified agent onboarding, secure visa applications, fraud detection workflows, and travel safety features while building scalable design systems and collaborating closely with engineering to deliver a reliable, high-security digital product.",
    icon: Palette,
  },
  {
    role: "Product Designer",
    company: "Oonsa Event WebApp",
    period: "2025",
    type: "Contract",
    description:
      "Designed a modern event discovery and ticketing platform that enables users to explore local experiences, purchase tickets, manage bookings, and seamlessly connect with events across Australia through an intuitive and user-centered digital experience.",
    icon: CalendarDays,
  },
  {
    role: "Product Designer",
    company: "Computer Village Marketplace (CVMP)",
    period: "2025",
    type: "Contract",
    description:
      "Designed a B2B classified marketplace connecting verified technology buyers, sellers, wholesalers, and service providers. Led UX research, wireframing, prototyping, design system creation, and high-fidelity interfaces for product listings, vendor management, messaging, and transaction workflows while collaborating with engineering for seamless implementation.",
    icon: Palette,
  },
  {
    role: "UI/UX Designer",
    company: "Multiple Vendor Store (DAPSVERSE)",
    period: "2025",
    type: "Internship",
    description:
      "Designed a modern multi-vendor commerce platform, covering both the mobile application and marketing landing page. Led UX research, user flows, design system creation, and high-fidelity UI design for vendor management, product listings, payments, orders, inventory, and customer experiences while collaborating with developers to ensure responsive, pixel-perfect implementation.",
    icon: Zap,
  },
];

const values = [
  {
    title: "Quality Over Quantity",
    description:
      "Every project gets our full attention. We don't take on more than we can deliver at the highest standard.",
    icon: Trophy,
  },
  {
    title: "Clear Communication",
    description:
      "Regular updates, honest timelines, and clear documentation. No surprises, no jargon just straight talk.",
    icon: MessageSquare,
  },
  {
    title: "User-First Thinking",
    description:
      "Good design starts with understanding the people who will use it. Research and empathy drive every decision.",
    icon: Users,
  },
  {
    title: "Clean, Maintainable Code",
    description:
      "Code that is easy to read, test, and extend. Built for the long term, not just the deadline.",
    icon: Layers,
  },
];

const metrics = [
  { value: "4+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Remote-Friendly" },
];

const trustedBy = [
  "SUPERSONIC Dynamic Services",
  "Visa Guard Africa",
  "Oonsa Events",
  "Computer Village Marketplace",
  "DAPSVERSE",
];

/* ─── shared section heading ─── */
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 mb-4">
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

const About = () => {
  const [openExperience, setOpenExperience] = useState<number | null>(0);
  const currentRoles = experience.filter((e) => e.period === "Present").length;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_30%_0%,black,transparent)] opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">
                About the Team
              </span>
            </div>

            {/* Split hero: narrative on the left, a real photo on the right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-14 items-center">
              <div className="lg:col-span-7">
                <h1 className="font-display text-[2.75rem] leading-[1.01] sm:text-7xl lg:text-7xl font-extrabold text-foreground tracking-tight text-balance mb-6">
                  Design-Strategy, <br />
                  <span className="text-muted-foreground">Development,</span>
                  <br />
                  Launch-Support.
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  A multidisciplinary creative team with over 4 years bridging
                  design and development. We partner with startups and
                  established brands to ship digital products that look as good
                  as they run.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-9 py-3.5 text-sm font-bold rounded-xl shadow-sm hover:shadow-xs transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Work With Us
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-9 py-3.5 text-sm font-semibold rounded-xl hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[2rem] border border-border/40 bg-secondary/20 backdrop-blur-sm -z-10" />
                  <div className="group relative aspect-[16/10] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-l">
                    <div className="w-full h-full grayscale-[35%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105">
                      <SkeletonImage
                        src="/profile3.jpg"
                        alt="The team working together"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-2 shadow-l">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-semibold text-foreground">
                      Available for work
                    </span>
                  </div>

                  <div className="absolute -bottom-5 -left-3 sm:-left-6 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-md">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-border flex items-center justify-center">
                      <FolderCheck className="w-4 h-4 text-foreground" />
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
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 mt-16 sm:mt-20 border-t border-l border-border rounded-tl-2xl"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border-r border-b border-border px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight tabular-nums leading-none">
                  {m.value}
                </p>
                <p className="text-[10px] text-muted-foreground mt-2.5 font-semibold uppercase tracking-wide">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-10 border-b border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground shrink-0">
            Teams we've built with
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display text-sm sm:text-[15px] font-bold tracking-tight text-foreground/55 hover:text-foreground transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading eyebrow="How We Work" title="Our Approach." />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground leading-relaxed max-w-md"
            >
              Great products emerge when aesthetics and engineering work in
              harmony. Every pixel has a purpose, every line of code tells a
              story here's how a project moves from idea to something real.
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute top-6 left-[3.5rem] right-[3.5rem] h-px bg-border" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {approachPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-background border border-border shadow-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                      <span className="font-display text-sm font-extrabold text-foreground transition-colors duration-300 group-hover:text-background">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-7 h-[calc(100%-4.25rem)] flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:border-foreground/30 group-hover:shadow-l">
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-5">
                        <Icon className="w-4 h-4 text-foreground" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {pillar.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
                        {pillar.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70 border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL STACK ── */}
      <section className="py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 sm:mb-14">
            <SectionHeading
              eyebrow="Technical Stack"
              title="Core Skills."
              description="The tools and disciplines we use to take products from first sketch to production."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative rounded-2xl border border-border bg-card p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-l"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-foreground/5 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                        <Icon className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-background" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {group.label}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      {group.skills.length} skills
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] font-semibold tracking-tight px-3 py-1.5 rounded-lg border border-border bg-background text-foreground/80 transition-colors group-hover:border-foreground/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-24 sm:py-28 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Track Record"
                title="Industry Experience."
                description="Selected roles across logistics, travel security, events and commerce platforms."
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-2 gap-3 max-w-xs"
              >
                <div className="rounded-xl border border-border bg-card px-4 py-3.5">
                  <p className="font-display text-2xl font-extrabold text-foreground leading-none">
                    {experience.length}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mt-1.5">
                    Roles
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card px-4 py-3.5">
                  <p className="font-display text-2xl font-extrabold text-foreground leading-none">
                    {currentRoles}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mt-1.5">
                    Current
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-3">
            {experience.map((exp, i) => {
              const Icon = exp.icon;
              const isOpen = openExperience === i;
              const isCurrent = exp.period === "Present";
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={`rounded-2xl border bg-card overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-foreground/25 shadow-xm"
                      : "border-border hover:border-foreground/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenExperience(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 sm:gap-5 text-left px-5 py-5 sm:px-7 sm:py-6 hover:bg-secondary/30 transition-colors"
                  >
                    <div
                      className={`shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-foreground border-foreground"
                          : "bg-foreground/5 border-border"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isOpen ? "text-background" : "text-foreground"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0 grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-start sm:items-center">
                      <div className="min-w-0">
                        <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border">
                          {exp.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                          {isCurrent && (
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                          )}
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mx-5 sm:mx-7 pt-5 pb-6 border-t border-border">
                          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="What We Stand For"
                title="Our Principles."
                description="The standards we hold ourselves to on every project, big or small."
              />
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border rounded-tl-2xl overflow-hidden">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group border-r border-b border-border p-7 sm:p-8 hover:bg-secondary/40 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-foreground/5 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                      <Icon className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-background" />
                    </div>
                    <span className="font-display text-sm font-extrabold text-muted-foreground/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)] opacity-[0.06]" />
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
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tighter mb-3">
              Interested in Working With Us?
            </h2>
            <p className="opacity-60 text-sm max-w-lg mx-auto leading-5 mb-9">
              We are always open to new opportunities and collaborations. Send
              us messages let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
