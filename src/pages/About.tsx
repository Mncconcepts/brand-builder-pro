import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

const approachPillars = [
  {
    icon: Compass,
    title: "Design & Strategy",
    description:
      "We start with research and product strategy, mapping user needs and business goals before a single screen gets designed. Every decision has a reason behind it.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Clean, scalable code that mirrors the design intent exactly. We build with modern frameworks so what ships matches what was designed, pixel for pixel.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We don't disappear after launch. Ongoing iteration, monitoring, and support keep the product improving long after the first release date.",
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
      "Firebase",
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

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [openExperience, setOpenExperience] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_45%_at_30%_0%,black,transparent)] opacity-[0.15]" />
          <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-foreground/[0.04] blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">
                About the Team
              </span>
            </div>

            {/* 12-col grid: headline gets more room than copy, so it doesn't feel like a forced 50/50 split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 items-end">
              <div className="lg:col-span-7">
                <h1 className="font-display text-[2.75rem] leading-[1.01] sm:text-7xl lg:text-7xl font-extrabold text-foreground tracking-tight text-balance">
                  Design-Strategy, <br />
                  <span className="text-muted-foreground">Development,</span>
                  <br />
                  Launch-Support.
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pl-6 lg:border-border">
                <p className="text-sm sm:text-[13.5px] text-muted-foreground leading-relaxed mb-5 max-w-md">
                  A multidisciplinary creative team with over 4 years bridging
                  design and development. We partner with startups and
                  established brands to ship digital products that look as good
                  as they run.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-10 py-3 text-sm font-bold rounded-xl shadow-sm hover:shadow-xs transition-all hover:-translate-y-0.5"
                  >
                    Work With Us
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 sm:mt-16 rounded-xl border border-border bg-foreground/[0.02] overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`text-center sm:text-left py-6 px-5 ${
                    i % 2 === 0 ? "border-r border-border" : ""
                  } ${i < 2 ? "border-b sm:border-b-0 border-border" : ""} ${
                    i > 0 ? "sm:border-l sm:border-r-0" : ""
                  }`}
                >
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight tabular-nums">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1.5 font-semibold uppercase tracking-wide">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-bold tracking-wide uppercase text-muted-foreground mb-2">
              How We Work
            </p>
            <h2 className="font-display text-balance text-4xl lg:text-6xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.05] mb-3 max-w-2xl">
              Our Approach.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-14">
              Great products emerge when aesthetics and engineering work in
              harmony. Every pixel has a purpose, every line of code tells a
              story here's how a project moves from idea to something real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {approachPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-background p-8 flex flex-col gap-5"
                  >
                    <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECHNICAL STACK (interactive tabs) ── */}
      {/* <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <p className="text-[10px] font-bold tracking-wide uppercase text-muted-foreground mb-2">
                  Technical Stack
                </p>
                <h3 className="font-display lg:text-6xl text-4xl sm:text-5xl font-extrabold text-foreground">
                  Core Skills.
                </h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-5">
                We use a modern toolkit to build scalable, high-performance
                digital solutions.
              </p>
            </div>

            <div className="border border-border rounded-2xl bg-card overflow-hidden">
              <div
                role="tablist"
                aria-label="Skill categories"
                className="flex flex-wrap border-b border-border"
              >
                {skillGroups.map((group, i) => {
                  const Icon = group.icon;
                  const active = activeSkill === i;
                  return (
                    <button
                      key={group.label}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveSkill(i)}
                      className={`flex items-center gap-2 px-5 sm:px-6 py-4 text-xs font-extrabold uppercase tracking-widest border-b-2 -mb-px transition-colors ${
                        active
                          ? "border-foreground text-foreground bg-secondary/40"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {group.label}
                    </button>
                  );
                })}
              </div>

              <div className="p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg">
                      {skillGroups[activeSkill].description}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroups[activeSkill].skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-semibold px-3.5 py-2 rounded-lg border border-border bg-background text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ── EXPERIENCE (accordion) ── */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[10px] font-bold tracking-wide uppercase text-muted-foreground mb-2">
              Track Record
            </p>
            <h2 className="font-display lg:text-6xl text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">
              Industry Experience.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="border border-border rounded-2xl bg-card overflow-hidden"
          >
            {experience.map((exp, i) => {
              const Icon = exp.icon;
              const isOpen = openExperience === i;
              return (
                <div
                  key={exp.role + exp.company}
                  className={i !== 0 ? "border-t border-border" : ""}
                >
                  <button
                    onClick={() => setOpenExperience(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-5 text-left px-6 py-6 sm:px-8 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-foreground flex items-center justify-center">
                      <Icon className="w-4 h-4 text-background" />
                    </div>

                    <div className="flex-1 min-w-0 grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-start sm:items-center">
                      <div className="min-w-0">
                        <h3 className="font-display text-base sm:text-lg font-bold text-foreground truncate">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border">
                          {exp.type}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
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
                        <p className="text-sm text-muted-foreground leading-relaxed px-6 sm:px-8 pb-7 pl-[4.75rem] max-w-6xl">
                          {exp.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      {/* <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[10px] font-bold tracking-wide uppercase text-muted-foreground mb-2">
              How We Work
            </p>
            <h2 className="font-display lg:text-6xl text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">
              Execution Process.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-border"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 py-8 border-b border-border items-start"
                >
                  <div className="sm:col-span-1">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                  <h3 className="sm:col-span-3 font-display text-lg font-bold text-foreground leading-snug">
                    {v.title}
                  </h3>
                  <p className="sm:col-span-8 text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
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
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">
              Interested in Working With Us?
            </h2>
            <p className="opacity-60 text-sm max-w-lg mx-auto leading-relaxed mb-8">
              We are always open to new opportunities and collaborations. Let's
              build something great together.
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
