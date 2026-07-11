import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  CheckCircle2,
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

const skillGroups = [
  {
    label: "Frontend",
    icon: Monitor,
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
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    label: "Design",
    icon: PenTool,
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
  },
  {
    label: "Workflow",
    icon: Terminal,
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
    company: "Multiple Vendor Store (DAPSTORE)",
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
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-border overflow-hidden">
        {/* Ambient backdrop — softer, layered instead of a flat grid */}
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
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">About the Team</span>
            </div>

            {/* 12-col grid: headline gets more room than copy, so it doesn't feel like a forced 50/50 split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 items-end">
              <div className="lg:col-span-7">
                <h1 className="font-display text-[2.75rem] leading-[1.03] sm:text-7xl lg:text-[5.25rem] font-extrabold text-foreground tracking-tight text-balance">
                  Discovery,{" "}
                  <span className="text-muted-foreground">Strategy,</span>
                  <br />
                  Engineering.
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border">
                <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-md">
                  A multidisciplinary creative team with over 4 years bridging
                  design and development. We partner with startups and
                  established brands to ship digital products that look as good
                  as they run.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    Work With Us
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <BookCallSheet
                    trigger={
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm font-bold rounded-lg hover:bg-secondary transition-all hover:-translate-y-0.5"
                      >
                        <CalendarIcon className="w-3.5 h-3.5" /> Book a Call
                      </button>
                    }
                  />
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

      {/* ── APPROACH + UPDATED MODERN CORE SKILLS ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-20">
            {/* Approach Block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">
                Our Approach
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-8">
                Design & Code, in Harmony.
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Our approach combines design thinking with clean, maintainable code. We believe great products emerge when aesthetics and engineering work in harmony.",
                  "Every pixel has a purpose, every line of code tells a story. We focus on creating digital experiences that perform flawlessly under real-world conditions.",
                ].map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MODERN CORE SKILLS SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Technical Stack
                  </p>
                  <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">
                    Core Skills.
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  We use a modern toolkit to build scalable, high-performance
                  digital solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillGroups.map((group, groupIdx) => {
                  const Icon = group.icon;
                  return (
                    <motion.div
                      key={group.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
                      className="group bg-secondary/30 border border-border/50 rounded-2xl p-6 hover:bg-secondary/50 hover:border-border transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                        <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">
                          {group.label}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-border bg-background/50 text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ── */}
      <section className="py-28 bg-secondary/30 border-y border-border relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">
              Our Journey
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">
              Industry Experience.
            </h2>
          </motion.div>

          <div className="relative space-y-0">
            <div className="absolute left-[26px] top-8 bottom-8 w-px bg-border hidden sm:block" />

            {experience.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="group relative flex gap-8 pb-14 last:pb-0"
                >
                  <div className="relative shrink-0 w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center z-10 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-background" />
                  </div>

                  <div className="flex-1 pt-1 pb-8 border-b border-border last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
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
                        <span className="text-sm font-semibold text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl group-hover:text-foreground transition-colors">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">
              How We Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">
            Execution Process.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-[11px] font-extrabold text-muted-foreground/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground transition-all duration-300">
                    <Icon className="w-4 h-4 text-foreground group-hover:text-background" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2 leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">
              Let's Connect
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Interested in Working With Us?
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-8">
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
    </div>
  );
};

export default About;
