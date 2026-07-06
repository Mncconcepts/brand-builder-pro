import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Calendar as CalendarIcon,
  ArrowUpRight,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import BookCallSheet from "@/components/BookCallSheet";

// Asset Imports
import projPearlzStore from "@/assets/proj-pearlz-store.png";
import Oonsa from "@/assets/Oonsa.png";
import projOma from "@/assets/proj-oma.png";
import projPaywithpi from "@/assets/proj-paywithpi.png";
import post2dap from "@/assets/post-2dap.png";
import visaguard from "@/assets/visaguard.jpg";
import vgalanding from "@/assets/vgalanding2.jpg";
import logoo1 from "@/assets/logoo1.png";
import logoo0 from "@/assets/logoo0.png";
import logoo3 from "@/assets/logoo3.png";
import logoo4 from "@/assets/logoo4.png";
import projstoreapp22 from "@/assets/proj-storeapp22.png";
import supersonic from "@/assets/supersonic.png";

const projects = [
  {
    title: "Supersonic Dynamic Services B.V",
    category: "DESIGN · DEVELOPMENT · FULLSTACK-WEBSITE",
    description:
      "The Next-Generation Moving & Freight Haulage Service. Professional moving and freight haulage services powered by precision logistics and carbon-neutral fleet - experience the most seamless relocation and freight haulage services in the Netherlands.",
    year: "2026",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
    ],
    image: supersonic,
    link: null,
    caseStudySlug: "Supersonic-Dynamic-Services",
  },
  {
    title: "Visa Guard Africa Technologies Ltd",
    category: "DESIGN · DEVELOPMENT · FULL STACK · APP",
    description:
      "A secure visa platform designed to protect Africans from visa scams. Features real-time verification, fraud detection, and a seamless application tracking system.",
    year: "Coming Soon",
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
    title: "Visa Guard Africa Landing Page",
    category: "DESIGN · DEVELOPMENT · FULL STACK · APP LANDING - WEB",
    description:
      "A secure visa platform designed to protect Africans from visa scams. Features real-time verification, fraud detection, and a seamless application tracking system.",
    year: "Coming Soon",
    tech: ["Figma", "React", "Node.js", "TypeScript", "MongoDB", "Express"],
    image: vgalanding,
    link: "https://waitlist.visaguardafrica.com",
    caseStudySlug: "Visa-guard-africa App-Landing",
  },

  {
    title: "Oonsa Event WebApp",
    category: "UI/UX DESIGN · WEB-APP",
    description:
      "An all-in-one event app designed to make discovering local experiences, buying tickets, and planning events simple and stress-free across Australia.",
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
      "A mobile marketplace app connecting buyers and sellers in Computer Village. Designed in Figma and built with Flutter.",
    year: "2025",
    tech: ["Flutter", "Figma", "Dart", "Firebase"],
    image: projstoreapp22,
    link: "https://cvmarket.ng",
    caseStudySlug: "CVMP App",
  },
  {
    title: "OMA Crypto Mining App",
    category: "UI/UX DESIGN · PRODUCT DESIGN · APP",
    description:
      "A custom crypto mining, gaming, and entertainment mobile app. Designed end-to-end with intuitive dashboards.",
    year: "2025",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    image: projOma,
    link: null,
    caseStudySlug: "Oma-crypto App",
  },
  {
    title: "E-Commerce Skincare Website",
    category: "APP DESIGN · UI DESIGN - WEB DEVELOPMENT",
    description:
      "A full-featured e-commerce platform with seamless checkout and real-time products. Built with React and Node.js.",
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
      "A multiple vendor store, mobile marketplace app connecting buyers and sellers.",
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
      "A Pi Network payment platform with wallet management and an admin dashboard.",
    year: "2024",
    tech: ["React", "TypeScript", "Firebase", "Node.js"],
    image: projPaywithpi,
    link: null,
    caseStudySlug: "Paywithpi Website",
  },
  {
    title: "QuickBoostNG Branding",
    category: "BRANDING · LOGO DESIGN · IDENTITY",
    description:
      "A bold and dynamic visual identity crafted for an automated Social Media Marketing (SMM) service provider. Engineered to project speed, growth, and digital authority.",
    year: "2026",
    tech: ["Illustrator", "Photoshop", "Figma"],
    image: logoo1,
    link: "https://quickboostng.com",
    caseStudySlug: "QuickBoostNG-Logo-Design",
  },
  {
    title: "SmartBoost Identity",
    category: "BRANDING · LOGO DESIGN · IDENTITY",
    description:
      "An ultra-modern brand asset system and logo layout designed for an advanced social media growth engine, matching precision analytics with clean aesthetics.",
    year: "2026",
    tech: ["Illustrator", "Photoshop", "Branding"],
    image: logoo0,
    link: null,
    caseStudySlug: null,
  },
  {
    title: "ReinsEvents Visual Identity",
    category: "BRANDING · LOGO DESIGN · MANAGEMENT",
    description:
      "A sophisticated and elegant logo mark designed for a high-end corporate and social event organizer. Built to represent seamless planning, execution, and hospitality.",
    year: "2025",
    tech: ["Illustrator", "Photoshop", "CorelDraw"],
    image: logoo3,
    link: null,
    caseStudySlug: null,
  },
  {
    title: "Chuex Footies Identity",
    category: "BRANDING · LOGO DESIGN · PRODUCT DESIGN",
    description:
      "A sleek, raw, and artisanal brand identifier created for a bespoke shoe making business, capturing craftsmanship, durability, and premium footwear fashion.",
    year: "2026",
    tech: ["Illustrator", "Photoshop", "Figma"],
    image: logoo4,
    link: null,
    caseStudySlug: null,
  },
];

const categories = ["All", "Web", "Mobile", "Logo"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (title: string) => {
    setLoadedImages((prev) => ({ ...prev, [title]: true }));
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeCategory === "All") return matchesSearch;

    // Custom filter logic
    if (activeCategory === "Web")
      return matchesSearch && project.category.toLowerCase().includes("web");
    if (activeCategory === "Mobile")
      return matchesSearch && project.category.toLowerCase().includes("app");
    if (activeCategory === "Logo")
      return (
        matchesSearch && project.category.toLowerCase().includes("branding")
      );

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_100%)]" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">
                Selected Projects
              </span>
            </div>
            <h1 className="font-display text-balance text-6xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.9] mb-8">
              All Selected <br />
              <span className="text-muted-foreground/40"> Projects. </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="pb-12 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-15">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <StackingCards offset={5} top={10}>
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group grid lg:grid-cols-[1fr_2fr] gap-8 border border-border rounded-xl p-6 lg:p-8 bg-card hover:shadow-sm transition-shadow cursor-pointer mb-10"
                >
                  <div className="relative bg-secondary aspect-[19/12] rounded-md flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <>
                        {/* ── SKELETON LOADING SHIMMER ANIMATION ── */}
                        {!loadedImages[project.title] && (
                          <div className="absolute inset-0 bg-muted/60 overflow-hidden z-10 rounded-md">
                            <div
                              className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
                              style={{ backgroundSize: "200% 100%" }}
                            />
                          </div>
                        )}
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          onLoad={() => handleImageLoad(project.title)}
                          className={`w-full  h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                            loadedImages[project.title]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                        />
                      </>
                    ) : (
                      <span className="font-display text-4xl font-bold text-primary">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xm font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
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
                        <span className="inline-flex items-center gap-2 bg-muted/50 text-muted-foreground px-5 py-2.5 rounded-md text-sm font-medium cursor-not-allowed">
                          In Progress <ExternalLink className="w-4 h-4" />
                        </span>
                      )}

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
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
              Interested in Working Together?
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
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

export default Projects;
