import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar as CalendarIcon, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import BookCallSheet from "@/components/BookCallSheet";
import projPearlzStore from "@/assets/proj-pearlz-store.png";
import projStoreapp2 from "@/assets/proj-storeapp2.png";
import Oonsa from "@/assets/Oonsa.png";
import projOma from "@/assets/proj-oma.png";
import projPaywithpi from "@/assets/proj-paywithpi.png";
import post2dap from "@/assets/post-2dap.png";
import visaguard from "@/assets/visaguard.jpg";
import vgalanding from "@/assets/vgalanding.jpg";


const projects = [
  {
    title: "Visa Guard Africa Technologies Ltd",
    category: "DESIGN · DEVELOPMENT · FULL STACK · APP",
    description:
      "A secure visa platform designed to protect Africans from visa scams. Features real-time verification, fraud detection, and a seamless application tracking system.",
    year: "Comming Soon",
    tech: [
      "Figma",
      "React Native",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express",
    ],
    image: visaguard,
    link: null,
    caseStudySlug: "Visa-guard-africa App-Landing",
  },
  {
    title: "Visa Guard Landing Page",
    category: "DESIGN · DEVELOPMENT · FULL STACK · APP LANDING",
    description:
      "A secure visa platform designed to protect Africans from visa scams. Features real-time verification, fraud detection, and a seamless application tracking system.",
    year: "Comming Soon",
    tech: [
      "Figma",
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express",
    ],
    image: vgalanding,
    link: null,
    caseStudySlug: "Visa-guard-africa App-Landing",
  },
  {
    title: "Oonsa Event WebApp",
    category: "UI/UX DESIGN · BRANDING · WEBSITE ",
    description:
      "A modern event management app designed to simplify event discovery, ticketing, and planning. End-to-end UI/UX design from research to high-fidelity prototypes.",
    year: "2025",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    image: Oonsa,
    link: "https://oonsa.com",
    caseStudySlug: "Oonsa-event-Webapp",
  },
   {
    title: "Computer Village MarketPlace(CVMP)",
    category: "PRODUCT DESIGN · UIUX · APP",
    description:
      "A mobile marketplace app connecting buyers and sellers in Computer Village. Designed in Figma and built with Flutter for a seamless cross-platform experience.",
    year: "2025",
    tech: ["Flutter", "Figma", "Dart", "Firebase"],
    image: projStoreapp2,
    link: null,
    caseStudySlug: "CVMP App",
  },
  {
    title: "OMA Crypto Mining App",
    category: "UI/UX DESIGN · PRODUCT DESIGN · APP",
    description:
      "A custom crypto mining, gaming, and entertainment mobile app. Designed end-to-end with intuitive dashboards, growth analytics, and seamless user experiences.",
    year: "2023",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    image: projOma,
    link: null,
    caseStudySlug: "Oma-crypto App",
  },
  {
    title: "E-Commerce Skincare Website",
    category: "APP DESIGN · UI DESIGN - WEB DEVELOPMENT",
    description:
      "A full-featured e-commerce platform with seamless checkout, real-time products, and a custom CMS for product management. Built with React and Node.js.",
    year: "2025",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: projPearlzStore,
    link: "https://pearlz-store.vercel.app",
    caseStudySlug: "Pearlz-store Website",
  },
 
  {
    title: "Multiple Vendor Store (DAPSTORE)",
    category: "PRODUCT DESIGN · UIUX · APP",
    description:
      "A multiple vendor store, mobile marketplace app connecting buyers and sellers . Designed in Figma and built with Flutter for a seamless cross-platform experience.",
    year: "2025",
    tech: ["Flutter", "Figma", "Dart", "Firebase"],
    image: post2dap,
    link: null,
    caseStudySlug: "Dapstore App",
  },
  {
    title: "PayWithPi",
    category: "WEB DEVELOPMENT · FULL STACK · WEBSITE",
    description:
      "A Pi Network payment platform with wallet management, fund transfers, and an admin dashboard featuring sales analytics and order statistics.",
    year: "2024",
    tech: ["React", "TypeScript", "Firebase", "Node.js"],
    image: projPaywithpi,
    link: null,
    caseStudySlug: "Paywithpi Website",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 border-b ">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-6xl text-foreground leading-tight mb-4 font-extrabold">
              Project-Folio.
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              A curated collection of projects showcasing our expertise in web &
              app development, product design, and user experience across
              various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <StackingCards offset={5} top={10}>
            {projects.map((project) => (
              <article
                key={project.title}
                className="group grid lg:grid-cols-[1fr_2fr] gap-8 border border-border rounded-lg p-6 lg:p-8 bg-card hover:shadow-sm transition-shadow cursor-pointer"
              >
                <div className="bg-secondary aspect-[16/12] rounded-md flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-4xl font-bold text-primary">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-1xl lg:text-1xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-lg mb-4">
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
                  <div className="mt-4 flex flex-wrap gap-3">
                    {/* View Live */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        View Live <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-blue-600/50 text-white/70 px-5 py-2.5 rounded-md text-sm font-medium cursor-not-allowed">
                        View Live <ExternalLink className="w-4 h-4" />
                      </span>
                    )}

                    {/* View Case Study → navigates to /projects/case-study/:slug */}
                    <Link
                      to={`/projects/case-study/${project.caseStudySlug}`}
                      className="inline-flex items-center gap-2 border border-border text-foreground/80 hover:text-foreground hover:bg-secondary px-5 py-2.5 rounded-md text-xs font-medium transition-colors"
                    >
                      View Case Study
                    </Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl mb-3 font-extrabold">
              Have a Project In Mind?
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

export default Projects;
