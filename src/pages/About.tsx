import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, ArrowUpRight, CheckCircle2, Code2, Palette, Zap, Trophy, Users, MessageSquare, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

const skillGroups = [
  {
    label: "Frontend",
    color: "text-foreground",
    bg: "bg-secondary/50",
    border: "border-border",
    skills: ["React / Next.js", "React Native", "Flutter", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "text-foreground",
    bg: "bg-secondary/50",
    border: "border-border",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    label: "Design",
    color: "text-foreground",
    bg: "bg-secondary/50",
    border: "border-border",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
  },
  {
    label: "Workflow",
    color: "text-foreground",
    bg: "bg-secondary/50",
    border: "border-border",
    skills: ["Git & CI/CD", "Agile / Scrum", "REST & GraphQL", "Python"],
  },
];

const experience = [
  {
    role: "Lead Product Designer & PM",
    company: "Visa Guard Africa Technologies Ltd",
    period: "Present",
    type: "Full-time",
    description:
      "Leading product design for startups and established brands. Creating user-centered designs, conducting user research, building prototypes, and delivering scalable design systems that drive business outcomes.",
    icon: Palette,
    accent: "text-foreground",
    accentBg: "bg-secondary",
    accentBorder: "border-border",
  },
  {
    role: "Product Designer",
    company: "Computer Village Marketplace (CVMP)",
    period: "2025",
    type: "Contract",
    description:
      "Designed intuitive interfaces for e-commerce, SaaS, and fintech products. Led user research sessions, created wireframes and high-fidelity prototypes, and collaborated with engineering to ensure pixel-perfect implementation.",
    icon: Code2,
    accent: "text-foreground",
    accentBg: "bg-secondary",
    accentBorder: "border-border",
  },
  {
    role: "UI/UX Designer",
    company: "Multiple Vendor Store (DAPSTORE)",
    period: "2024–2025",
    type: "Full-time",
    description:
      "Started as a web designer creating marketing pages, quickly transitioned into product design roles. Built user flows, designed component libraries, and learned to code to better communicate with developers.",
    icon: Zap,
    accent: "text-foreground",
    accentBg: "bg-secondary",
    accentBorder: "border-border",
  },
];

const values = [
  {
    title: "Quality Over Quantity",
    description: "Every project gets our full attention. We don't take on more than we can deliver at the highest standard.",
    icon: Trophy,
  },
  {
    title: "Clear Communication",
    description: "Regular updates, honest timelines, and clear documentation. No surprises, no jargon — just straight talk.",
    icon: MessageSquare,
  },
  {
    title: "User-First Thinking",
    description: "Good design starts with understanding the people who will use it. Research and empathy drive every decision.",
    icon: Users,
  },
  {
    title: "Clean, Maintainable Code",
    description: "Code that is easy to read, test, and extend. Built for the long term, not just the deadline.",
    icon: Layers,
  },
];

const metrics = [
  { value: "4+",  label: "Years of Experience" },
  { value: "50+", label: "Projects Completed"  },
  { value: "30+", label: "Happy Clients"        },
  { value: "100%",label: "Remote-Friendly"      },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] opacity-20" />
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-secondary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
              <span className="text-xs font-semibold text-foreground tracking-wide uppercase">Our Story</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
                  We Build.
                  <br />
                  We Design.
                  <br />
                  <span className="text-muted-foreground">We Ship.</span>
                </h1>
              </div>
              <div className="pb-2">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  We are a multidisciplinary creative team with over 4 years of experience bridging
                  the gap between design and development. We collaborate with startups and established
                  brands to craft digital products that are both visually compelling and technically robust.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 text-sm font-bold rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5"
                  >
                    Work With Us <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <BookCallSheet
                    trigger={
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-secondary transition-all hover:-translate-y-0.5"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 mt-14 pt-10 border-t border-border divide-x divide-border"
          >
            {metrics.map((m) => (
              <div key={m.label} className="text-center py-4 px-2">
                <p className="font-display text-3xl font-extrabold text-foreground tracking-tight">{m.value}</p>
                <p className="text-[11px] text-muted-foreground mt-1 font-medium uppercase tracking-widest">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH + SKILLS ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">Our Approach</p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-8">
                Design & Code,<br />in Harmony.
              </h2>
              <div className="space-y-5">
                {[
                  "Our approach combines design thinking with clean, maintainable code. We believe great products emerge when aesthetics and engineering work in harmony — not in opposition.",
                  "Every pixel has a purpose, every line of code tells a story. We focus on creating digital experiences that not only look beautiful but perform flawlessly under real-world conditions.",
                  "Whether it's a complex web application, a brand identity, or a product prototype, we bring the same level of care and craftsmanship to every project.",
                ].map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-foreground shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">Technical Stack</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">Core Skills</h3>
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest mb-2.5 text-muted-foreground">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-secondary text-foreground cursor-default hover:bg-foreground hover:text-background transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
            <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">Our Journey</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">Work History.</h2>
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
                        <p className="text-sm text-muted-foreground font-medium mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border">
                          {exp.type}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">{exp.period}</span>
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
            <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">What Drives Us</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">How We Work.</h2>
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
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Let's Connect</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Interested in Working With Us?
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-10">
              We are always open to new opportunities and collaborations. Let's build something great together.
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