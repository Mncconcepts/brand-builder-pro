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
  PenTool 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

const skillGroups = [
  {
    label: "Frontend Dev",
    icon: Monitor,
    skills: ["React / Next.js", "React Native", "TypeScript", "Tailwind CSS", "App Architecture"],
  },
  {
    label: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express APIs", "PostgreSQL", "MongoDB", "Server Setup"],
  },
  {
    label: "Design & UX",
    icon: PenTool,
    skills: ["Figma", "UI/UX Design", "Design Systems", "User Research", "Prototyping"],
  },
  {
    label: "Workflow & Tools",
    icon: Terminal,
    skills: ["Git & CI/CD", "Agile & Scrum", "REST & GraphQL", "Performance Tuning"],
  },
];

const experience = [
  {
    role: "Lead Product Designer & Project Manager",
    company: "Visa Guard Africa Technologies Ltd",
    period: "Present",
    type: "Full-time",
    description:
      "I lead the design and development process to turn big ideas into polished products. I guide teams to build secure, easy-to-use platforms, design flexible design systems, and manage timelines so projects are delivered smoothly and on time.",
    icon: Palette,
  },
  {
    role: "Product Designer",
    company: "Computer Village Marketplace (CVMP)",
    period: "2025",
    type: "Contract",
    description:
      "Designed clean and intuitive interfaces for active online marketplaces and e-commerce platforms. I focused on understanding user habits to make shopping online simple, and worked closely with developers to make sure designs looked exactly as planned.",
    icon: Code2,
  },
  {
    role: "UI/UX Designer",
    company: "Multiple Vendor Store (DAPSTORE)",
    period: "2024-2025",
    type: "Full-time",
    description:
      "Created smart design libraries and marketing websites that helped build a consistent look for the brand. I learned to code frontend interfaces to help bridge the gap between design and final development.",
    icon: Zap,
  },
];

const values = [
  {
    title: "Quality Over Speed",
    description: "We don't rush or cut corners. Every product we design and build is engineered to look beautiful and work perfectly for the long run.",
    icon: Trophy,
  },
  {
    title: "Honest & Open Talk",
    description: "No confusing technical jargon. We keep you in the loop with regular, straightforward updates and clear project timelines.",
    icon: MessageSquare,
  },
  {
    title: "People Come First",
    description: "Great design starts with the people who will actually use it. We do the research to make sure your users find your app helpful and easy.",
    icon: Users,
  },
  {
    title: "Clean, Reliable Code",
    description: "We write clean, organized, and modern code that is easy to update, test, and expand as your business grows.",
    icon: Layers,
  },
];

const metrics = [
  { value: "04+",  label: "Years of Experience" },
  { value: "50+", label: "Products Launched"  },
  { value: "30+", label: "Happy Partners" },
  { value: "100%",label: "Remote Friendly" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-28 border-b border-border overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,black,transparent)] opacity-15" />
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-secondary/40 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-[0.2em] uppercase">Who We Are</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                  Beautiful Design.
                  <br />
                  Solid Engineering.
                  <br />
                  <span className="text-muted-foreground">Real Results.</span>
                </h1>
              </div>
              <div className="lg:pt-2">
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  We are a dedicated team that loves bringing ideas to life through thoughtful design and 
                  clean code. Over the past four years, we have helped startups and established businesses 
                  build digital products that are friendly to use, beautiful to look at, and technically sound.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm font-semibold rounded-xl hover:opacity-95 transition-all hover:-translate-y-0.5"
                  >
                    Start a Project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <BookCallSheet
                    trigger={
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-6 py-3.5 text-sm font-semibold rounded-xl hover:bg-secondary transition-all hover:-translate-y-0.5"
                      >
                        <CalendarIcon className="w-4 h-4" /> Book a Call
                      </button>
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 mt-20 pt-12 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border"
          >
            {metrics.map((m) => (
              <div key={m.label} className="text-center py-6 px-4 md:first:pl-0 md:last:pr-0">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">{m.value}</p>
                <p className="text-[10px] text-muted-foreground mt-2 font-semibold uppercase tracking-[0.15em]">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CORE THESIS & TECHNICAL TOOLKIT ── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-28">
            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Approach</p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-8">
                How design and development work together.
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  "We believe your designs should fit perfectly with how your system works under the hood. Our custom-made designs look great on phones, tablets, and computers.",
                  "A product that looks amazing but is slow and buggy won't succeed. That is why we pay equal attention to making sure our code is robust, fast, and easy to maintain.",
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">What We Use</p>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">Skills & Tools.</h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                  We use a modern and reliable set of tools to design, build, and deploy fast digital products.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {skillGroups.map((group, groupIdx) => {
                  const Icon = group.icon;
                  return (
                    <motion.div
                      key={group.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.08, duration: 0.5 }}
                      className="group bg-secondary/15 border border-border/50 rounded-2xl p-6 hover:bg-secondary/30 hover:border-border transition-all duration-300"
                    >
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-4 h-4 text-foreground" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">{group.label}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-border/60 bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
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

      {/* ── PROFESSIONAL TIMELINE ── */}
      <section className="py-32 bg-secondary/20 border-y border-border relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Our History</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">Work Experience.</h2>
          </motion.div>

          <div className="relative space-y-0">
            {/* Timeline spine */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-border/80 hidden md:block" />

            {experience.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative flex flex-col md:flex-row gap-6 md:gap-10 pb-16 last:pb-0"
                >
                  <div className="relative shrink-0 w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center z-10 transition-transform duration-300 md:group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 pt-1 pb-4 md:pb-8 border-b border-border last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 sm:self-start">
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border">
                          {exp.type}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground tracking-wider">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl group-hover:text-foreground transition-colors duration-300">
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
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Our Core Pillars</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">What We Believe In.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative bg-card border border-border rounded-2xl p-7 flex flex-col gap-6 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-muted-foreground/20 tracking-wider">
                    0{i + 1}
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

      {/* ── FRIENDLY CTA ── */}
      <section className="py-28 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50 mb-4">Let's Work together</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to bring your idea to life?
            </h2>
            <p className="opacity-60 text-sm max-w-lg mx-auto leading-relaxed mb-10">
              We are always open to new opportunities and exciting collaborations. Let's start talking about your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-sm font-bold rounded-xl hover:opacity-95 transition-all hover:-translate-y-0.5"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 border-2 border-background/20 text-background px-8 py-3.5 text-sm font-bold rounded-xl hover:bg-background/10 transition-all hover:-translate-y-0.5"
                  >
                    <CalendarIcon className="h-4 w-4" /> Book a Call Session
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