import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import projPearlzStore from "@/assets/proj-pearlz-store.png";
import projStoreapp2 from "@/assets/proj-storeapp2.png";
import projOonsa from "@/assets/proj-oonsa.png";
import projOma from "@/assets/proj-oma.png";

const projects = [
  {
    title: "E-Commerce Skincare Website",
    category: "APP DESIGN · UI DESIGN - WEB DEVELOPMENT",
    description:
      "A full-featured e-commerce platform with seamless checkout, real-time products, and a custom CMS for product management. Built with React and Node.js.",
    year: "2025",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: projPearlzStore,
  },
  {
    title: "Computer Village MarketPlace(CVMP)",
    category: "PRODUCT DESIGN · UIUX",
    description:
      "A mobile marketplace app connecting buyers and sellers in Computer Village. Designed in Figma and built with Flutter for a seamless cross-platform experience.",
    year: "2025",
    tech: ["Flutter", "Figma", "Dart", "Firebase"],
    image: projStoreapp2,
  },
  {
    title: "Oonsa Event App",
    category: "UI/UX DESIGN · BRANDING",
    description:
      "A modern event management app designed to simplify event discovery, ticketing, and planning. End-to-end UI/UX design from research to high-fidelity prototypes.",
    year: "2025",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    image: projOonsa,
  },
  {
    title: "OMA Crypto Mining App",
    category: "UI/UX DESIGN · PRODUCT DESIGN",
    description:
      "A custom crypto mining, gaming, and entertainment mobile app. Designed end-to-end with intuitive dashboards, growth analytics, and seamless user experiences.",
    year: "2023",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    image: projOma,
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
