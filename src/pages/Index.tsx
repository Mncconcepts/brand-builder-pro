import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterText from "@/components/TypewriterText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-abstract.jpg";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const featuredServices = [
  {
    number: "01",
    title: "Web Development",
    desc: "Modern, scalable web applications built with the latest technologies.",
  },
  {
    number: "02",
    title: "Product Design",
    desc: "User-centered design that drives engagement and business results.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    desc: "Intuitive interfaces and seamless experiences across all devices.",
  },
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    year: "2024",
  },
  {
    title: "SaaS Dashboard",
    category: "Product Design",
    year: "2024",
  },
  {
    title: "Brand Identity System",
    category: "Design System",
    year: "2023",
  },
];

const testimonials = [
  {
    quote: "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    quote: "Delivered a stunning website that perfectly captures our brand. Professional, responsive, and a pleasure to work with.",
    name: "Michael Chen",
    role: "Founder, DesignLab",
  },
];

const homeFaqs = [
  {
    q: "What Services Do You Offer?",
    a: "I specialize in web development, product design, and UI/UX design — from initial strategy and wireframes to fully shipped, production-ready applications.",
  },
  {
    q: "How Long Does A Typical Project Take?",
    a: "Most engagements run 2–8 weeks depending on scope. After our intro call I'll share a detailed timeline with milestones.",
  },
  {
    q: "Do You Work With International Clients?",
    a: "Yes — I collaborate remotely with clients worldwide and adapt comfortably to different time zones.",
  },
  {
    q: "What Is Your Pricing Model?",
    a: "Projects are typically scoped as fixed-price engagements. For ongoing work, monthly retainers are also available.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Web Developer & Product Designer
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6">
              Building digital
              <br />
              products that
              <br />
              <span className="italic">perform</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
              I help businesses create powerful web applications and thoughtful digital experiences that drive growth and engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-block bg-primary text-primary-foreground px-7 py-3 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                View My Work
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
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="Abstract design composition"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                What I Do
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground">
                Services & <span className="italic">expertise</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors self-start md:self-auto"
            >
              View All Services →
            </Link>
          </motion.div>

          <StackingCards offset={20} top={100}>
            {featuredServices.map((service) => (
              <div
                key={service.number}
                className="bg-card border border-border rounded-lg p-8 shadow-sm"
              >
                <span className="text-xs font-semibold text-muted-foreground tracking-wider">
                  {service.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-3 mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Recent Work
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground">
                Featured <span className="italic">projects</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors self-start md:self-auto"
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
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                </div>
                <span className="text-sm text-muted-foreground">{project.year}</span>
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
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              What clients <span className="italic">say</span>
            </h2>
          </motion.div>

          <TestimonialsMarquee speed={35}>
            {testimonials.concat(testimonials).map((t, i) => (
              <blockquote
                key={`${t.name}-${i}`}
                className="bg-card border border-border rounded-lg p-8 h-full"
              >
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <footer>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </TestimonialsMarquee>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6">
              Ready to start your <span className="italic">project</span>?
            </h2>
            <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Let's discuss how I can help bring your vision to life with clean code and thoughtful design.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
