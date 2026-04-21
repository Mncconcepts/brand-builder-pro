import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import projPearlzStore from "@/assets/proj-pearlz-store.png";
import projStoreapp2 from "@/assets/proj-storeapp2.png";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "APP DESIGN · UI DESIGN - WEB DEVELOPMENT",
    description:
      "A full-featured e-commerce platform with seamless checkout, real-time inventory, and a custom CMS for product management. Built with React and Node.js.",
    year: "2025",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: projPearlzStore,
  },
  {
    title: "SaaS Dashboard",
    category: "Product Design · Frontend",
    description:
      "Analytics dashboard for a B2B SaaS product. Complex data visualizations made intuitive through thoughtful design and interaction patterns.",
    year: "2025",
    tech: ["React", "TypeScript", "D3.js", "Tailwind"],
    image: projStoreapp2,
  },
  {
    title: "Brand Identity System",
    category: "Design System · Branding",
    description:
      "Comprehensive design system including component library, typography guidelines, and brand assets for a fintech startup.",
    year: "2023",
    tech: ["Figma", "Storybook", "React", "CSS"],
    image: null,
  },
  {
    title: "Mobile Banking App",
    category: "UI/UX Design · Prototype",
    description:
      "End-to-end design for a mobile banking experience. User research, wireframes, and high-fidelity prototypes tested with real users.",
    year: "2023",
    tech: ["Figma", "Protopie", "User Testing"],
    image: null,
  },
  {
    title: "Real Estate Platform",
    category: "Full Stack · Product Design",
    description:
      "Property listing and management platform with map integration, virtual tours, and an intelligent search system.",
    year: "2022",
    tech: ["Next.js", "MongoDB", "Mapbox", "AWS"],
    image: null,
  },
  {
    title: "Health & Fitness App",
    category: "UI/UX · Frontend",
    description:
      "Fitness tracking application with workout plans, progress analytics, and social features for community engagement.",
    year: "2022",
    tech: ["React Native", "Firebase", "Chart.js"],
    image: null,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Projects
            </p>
            <h1 className="font-display text-5xl sm:text-6xl text-foreground leading-tight mb-6 font-extrabold">
              Selected <span className="italic">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A curated collection of projects showcasing my expertise in web development, 
              product design, and user experience across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <StackingCards offset={24} top={100}>
            {projects.map((project) => (
              <article
                key={project.title}
                className="group grid lg:grid-cols-[1fr_2fr] gap-8 border border-border rounded-lg p-6 lg:p-8 bg-card shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="bg-secondary aspect-[16/10] rounded-md flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-4xl font-bold text-muted-foreground/20">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4 font-extrabold">
            Have a project in mind?
          </h2>
          <p className="text-primary-foreground/60 mb-8">
            Let's discuss how I can help bring your idea to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
