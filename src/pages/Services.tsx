import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, Zap, Palette, Code2, Lightbulb, Pen, ChevronDown } from "lucide-react";

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

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your business, goals, target audience, and technical requirements through in-depth consultation.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Defining scope, creating project timelines, wireframes, and establishing the technical architecture.",
    duration: "Week 1-2",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Iterative design and development with regular check-ins to ensure alignment with your vision.",
    duration: "Week 3-10",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Thorough testing, deployment, and ongoing support to ensure your product thrives post-launch.",
    duration: "Week 11+",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$900",
    priceNote: "Starting from",
    description: "Perfect for small businesses needing a professional web presence.",
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
    price: "$3,000",
    priceNote: "Starting from",
    description: "For growing businesses that need a comprehensive digital solution.",
    features: [
      "Multi-page website",
      "Figma custom design",
      "Advanced SEO",
      "CMS integration",
      "3 rounds of revisions",
      "12 weeks delivery",
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
    description: "For complex projects requiring full-stack development and design.",
    features: [
      "Web application",
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

/* ── expandable service row ── */
function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09 }}
      className="border-b border-border last:border-0"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className="flex items-center gap-6 py-7 px-2 hover:px-4 transition-all duration-300">
          {/* Number */}
          <span className="text-[10px] font-bold text-muted-foreground/40 tracking-widest w-8 shrink-0">
            {service.number}
          </span>

          {/* Icon bubble - Reduced size */}
          <div className={`w-9 h-9 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="w-4 h-4 text-foreground" />
          </div>

          {/* Title + tagline */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-display text-sm tracking-tight sm:text-1xl font-bold text-foreground group-hover:text-muted-foreground transition-colors">
                {service.title}
              </h3>
              <span className="text-xs text-muted-foreground font-medium hidden sm:block">
                — {service.tagline}
              </span>
            </div>
          </div>

          {/* Tags preview */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {service.features.slice(0, 3).map((f) => (
              <span key={f} className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-foreground/5 text-foreground border border-border">
                {f}
              </span>
            ))}
          </div>

          {/* Chevron */}
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className={`mx-2 mb-6 rounded-2xl bg-gradient-to-br ${service.accent} border border-border p-6 sm:p-8`}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                Book This Service <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                What's Included
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-foreground" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-20" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">What We Offer</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] font-extrabold tracking-tight mb-6">
              Services Built for Real Outcomes.
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              From concept to launch, we provide end-to-end services covering every aspect of
              building successful digital products — with clarity, craft, and accountability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-border"
          >
            {[
              { n: "5", label: "Core Services" },
              { n: "50+", label: "Projects Shipped" },
              { n: "4+", label: "Years Active" },
              { n: "100%", label: "Remote-Friendly" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-extrabold text-foreground">{s.n}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ROWS ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Our Disciplines</p>
            <h2 className="font-display text-4xl font-extrabold text-foreground">What We Do Best</h2>
          </motion.div>

          <div className="divide-y divide-border border-t border-border rounded-2xl overflow-hidden bg-card/20 border shadow-sm px-2">
            {services.map((service, i) => (
              <ServiceRow key={service.number} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 bg-foreground/[0.02] border-y border-border relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">How We Work</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold">
              A Clear Process, <br/> Every Time.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-6 left-[3.5rem] right-[3.5rem] h-px bg-border" />

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:bg-foreground group-hover:text-background transition-all duration-300 relative z-10">
                    <span className="font-display text-sm font-extrabold">{p.step}</span>
                  </div>
                  <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60 border border-border px-2 py-0.5 rounded-full mb-3">
                    {p.duration}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">Transparent Pricing</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-extrabold mb-4">
              Investment Tiers
            </h2>
          </motion.div>

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
                    ? "bg-foreground text-background border-foreground shadow-2xl scale-[1.02]"
                    : "bg-card border-border hover:border-foreground"
                }`}
              >
                {tier.featured && tier.badge && (
                  <div className="absolute top-0 right-6 bg-background text-foreground text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-b-lg">
                    {tier.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 opacity-60`}>
                    {tier.name}
                  </p>
                  <div className="mb-2">
                    <span className="text-[10px] opacity-50 block">{tier.priceNote}</span>
                    <div className="font-display text-4xl font-extrabold tracking-tight">
                      {tier.price}
                    </div>
                  </div>
                  <p className="text-sm mb-8 leading-relaxed opacity-60">
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-xs opacity-80">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-2 text-xs font-bold py-3.5 rounded-xl transition-all ${
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
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
              Ready When You Are
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let's Build Something Real.
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-10">
              Tell us what you're working on. We'll get back within 24 hours with a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs font-bold rounded-xl hover:bg-background/90 transition-all hover:-translate-y-0.5"
              >
                Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;