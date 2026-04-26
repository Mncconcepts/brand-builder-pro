import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterText from "@/components/TypewriterText";
import BookCallSheet from "@/components/BookCallSheet";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroVideo from "@/assets/hero-typing-v2.mp4.asset.json";

function useCountUp(
  target: number,
  duration: number = 1800,
  triggered: boolean = false,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
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
  // Parse numeric part and suffix (e.g. "4+" → 4, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const count = useCountUp(numeric, 1800, triggered);

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-foreground">
        {triggered ? `${count}${suffix}` : `0${suffix}`}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const featuredServices = [
  {
    number: "01",
    title: "Web & App Development",
    desc: "Modern, scalable websites & applications built with the latest technologies.",
    image: "/proj-paywithpi.png",
    bullets: [
      "React / Next.js applications",
      "ReactNative / flutter-Dart",
      "TypeScript & clean architecture",
      "API & third-party integrations",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "Product Design",
    desc: "User-centered design that drives engagement and business results.",
    image: "/proj-storeapp2.png",
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
    image: "/proj-oma.png",
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
    title: "Multiple Vendor Store",
    category: "App Design",
    year: "2025",
  },
  {
    title: "Visa Guard Africa Technologies",
    category: "Product Design, Development",
    year: "2026",
  },
  {
    title: "Oonsa Event Planning Webapp",
    category: "UIUX Design",
    year: "2025",
  },
];

const testimonials = [
  {
    quote:
      "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    quote:
      "Delivered a stunning website that perfectly captures our brand. Professional, responsive, and a pleasure to work with.",
    name: "Michael Chen",
    role: "Founder, DesignLab",
  },
  {
    quote:
      "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
];

// const homeFaqs = [
//   {
//     q: "What Services Do You Offer?",
//     a: "I specialize in web development, product design, and UI/UX design — from initial strategy and wireframes to fully shipped, production-ready applications.",
//   },
//   {
//     q: "How Long Does A Typical Project Take?",
//     a: "Most engagements run 2-8 weeks depending on scope. After our intro call I'll share a detailed timeline with milestones.",
//   },
//   {
//     q: "Do You Work With International Clients?",
//     a: "Yes — I collaborate remotely with clients worldwide and adapt comfortably to different time zones.",
//   },
//   {
//     q: "What Is Your Pricing Model?",
//     a: "Projects are typically scoped as fixed-price engagements. For ongoing work, monthly retainers are also available.",
//   },
// ];

const Index = () => {
  // Ref + inView for the stats section
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-8">
        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs sm:text-2xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
              Development-Design
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              <TypewriterText
                text="Creating Digital Experiences That Work."
                speed={55}
                startDelay={250}
              />
            </h1>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
              Mncconcepts help businesses create powerful web applications and
              thoughtful digital experiences that drive growth and engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-block bg-primary text-primary-foreground px-7 py-3 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-block border border-border text-foreground px-7 py-3 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] h-full overflow-hidden rounded-xl">
              <img src="/proj-oma.png" alt="" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats — count-up triggered when scrolled into view */}
      <section className="border-y border-border bg-secondary/30">
        <div ref={statsRef} className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* ── Services Preview ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
                Our Services
              </p>
              <h2 className="font-display text-4xl text-foreground font-extrabold">
                Services & Expertise.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors self-start md:self-auto"
            >
              View All Services →
            </Link>
          </motion.div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm flex flex-col"
              >
                <div className="w-full h-44 bg-secondary overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-50 h-50 object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 text-xs tracking-widest uppercase">
                      {service.title}
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">
                    {service.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-7 flex-1">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-[7px] text-xs w-1 h-1 shrink-0 bg-foreground rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <button
                      type="button"
                      className="w-full text-center text-sm font-medium py-3 rounded-md bg-background border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
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

   
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
                Recent Work
              </p>
              <h2 className="font-display text-4xl font-bold text-foreground">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 transition-colors self-start xs:self-auto"
            >
              View All Projects →
            </Link>
          </motion.div>

          <StackingCards offset={20} top={100}>
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                to="/projects"
                className="group flex items-center justify-between border border-border bg-card rounded-lg px-8 py-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-display text-xm font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </Link>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
              Testimonials
            </p>
            <h2 className="font-display text-4xl text-foreground font-extrabold">
              Testimonials
            </h2>
          </motion.div>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl mb-3 font-extrabold">
              Need Any Of Our Services?
            </h2>
            <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
              Let's discuss how we can help bring your vision to life with clean
              code and thoughtful design.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
              >
                Start A Conversation
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
                  >
                    <CalendarIcon className="h-4 w-4" />
                    Book A Call Session
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
