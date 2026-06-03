import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterText from "@/components/TypewriterText";
import BookCallSheet from "@/components/BookCallSheet";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  Star,
  Sparkles,
} from "lucide-react";

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

function useCountUp(target: number, duration = 1800, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
}

function AnimatedStat({
  value,
  label,
  triggered,
}: {
  value: string;
  label: string;
  triggered: boolean;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const count = useCountUp(numeric, 1800, triggered);
  return (
    <div className="text-center group">
      <p className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-none">
        {triggered ? `${count}${suffix}` : `0${suffix}`}
      </p>
      <p className="text-xs text-muted-foreground mt-2 uppercase tracking-tight font-medium">
        {label}
      </p>
    </div>
  );
}

/* ─── data ── */
const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const trustedAvatars = [
  { src: "/cc1.png", name: "Oonsa" },
  { src: "/cc2.png", name: "Oonsa" },
];

const featuredServices = [
  {
    number: "01",
    title: "Web & App Development",
    desc: "Modern, scalable websites & applications built with the latest technologies.",
    image: "/hero-tech-design.jpg",
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
    desc: "Intuitive interfaces and seamless experiences across all devices.",
    image: "/post-2dap.png",
    bullets: [
      "Interface & interaction design",
      "Design systems & component libraries",
      "Responsive & accessible layouts",
      "Brand-aligned visual language",
    ],
  },
];

const featuredProjects = [
  {
    title: "Multiple Vendor Store CVMP",
    category: "App Design",
    year: "2025",
    image: "/proj-storeapp2.png",
    tags: ["Mobile", "E-Commerce"],
    color: "from-orange-500/20 to-yellow-500/10",
  },
  {
    title: "Visa Guard Africa",
    category: "Product Design & Development",
    year: "2026",
    image: "/visaguard.jpg",
    tags: ["Web App", "Fintech"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Oonsa Event Webapp",
    category: "UI/UX Design",
    year: "2025",
    image: "/Oonsa.png",
    tags: ["Web", "Events"],
    color: "from-purple-500/20 to-pink-500/10",
  },
];

const testimonials = [
  {
    quote:
      "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "John Chukwudi Eze",
    role: "FOUNDER, Visa Guard Africa",
  },
  {
    quote:
      "Delivered a stunning website that perfectly captures our brand. Professional, responsive, and a pleasure to work with.",
    name: "Oonsa",
    role: "Founder, Oonsa Event WebApp",
  },
  {
    quote:
      "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
];

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center pt-8">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm group cursor-default select-none overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-xs font-small text-primary tracking-tight uppercase">
                  Design & Development
                </span>
              </div>
            </div>

            <h1 className="font-Display text-6xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter text-foreground mb-4">
              <TypewriterText
                text="Creating Digital Experiences That Work."
                speed={55}
                startDelay={200}
              />
            </h1>

            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-8">
              Mncconcepts helps businesses create powerful web applications and
              thoughtful digital experiences that drive growth and engagement.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 text-sm font-semibold rounded-lg hover:bg-secondary transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {trustedAvatars.map((av, i) => (
                  <div
                    key={av.name}
                    className="relative w-9 h-9 rounded-full border-2 border-background overflow-hidden shadow-md ring-1 ring-border/30"
                    style={{
                      marginLeft: i === 0 ? 0 : "-10px",
                      zIndex: trustedAvatars.length - i,
                    }}
                    title={av.name}
                  >
                    <SkeletonImage
                      src={av.src}
                      alt={av.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="relative w-9 h-9 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-md"
                  style={{ marginLeft: "-10px", zIndex: 0 }}
                >
                  +12
                </div>
              </div>

              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                </div>
                <p className="text-xs text-muted-foreground leading-tight">
                  Trusted by{" "}
                  <span className="font-semibold text-foreground">
                    30+ clients
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-2xl border border-border/40 bg-secondary/20 backdrop-blur-sm -z-10" />
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 -z-10" />

            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border/60 shadow-1xl">
              <SkeletonImage
                src="/proj-oma.png"
                alt="Featured project preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-6 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-m backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span><ArrowUpRight className="w-4 h-4" /></span>
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

            <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-2 shadow-l">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-foreground">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div ref={statsRef} className="font-display max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AnimatedStat
                  value={stat.value}
                  label={stat.label}
                  triggered={statsInView}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-2">
                What We Do
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground font-extrabold">
                Services & Expertise.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all self-start md:self-auto"
            >
              View All Services <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-xm hover:shadow-l hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-48 bg-secondary overflow-hidden">
                  <SkeletonImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-muted-foreground/70 tracking-widest uppercase bg-background/60 backdrop-blur-sm border border-border/40 px-2 py-1 rounded-md">
                    {service.number}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <button
                      type="button"
                      className="w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    >
                      Book Service
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-2">
                Recent Work
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight font-extrabold text-foreground">
                Featured Projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all self-start md:self-auto"
            >
              View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Link
                  to="/projects"
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xm hover:-translate-y-1.5 transition-all duration-300 h-full"
                >
                  <div
                    className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.color}`}
                  >
                    <SkeletonImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4 text-foreground" />
                    </div>

                    <div className="absolute bottom-3 left-3 text-[10px] font-bold text-muted-foreground bg-background/70 backdrop-blur-sm border border-border/40 px-2 py-1 rounded-md">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between mt-auto pt-1 border-t border-border/50">
                      <p className="text-xs text-muted-foreground font-medium">
                        {project.category}
                      </p>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-2">
              Client Reviews
            </p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground font-extrabold">
              Testimonials.
            </h2>
          </motion.div>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/60 mb-4">
              Let's Collaborate
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Need Any Of Our Services?
            </h2>
            <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
              Let's discuss how we can help bring your vision to life with clean
              code and thoughtful design.
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

export default Index;
