import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Calendar as CalendarIcon,
  ArrowUpRight,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

// Asset Imports
import projPearlzStore from "@/assets/proj-pearlz-store.png";
import Oonsa from "@/assets/Oonsa.png";
import projOma from "@/assets/proj-oma.png";
import projPaywithpi from "@/assets/proj-paywithpi.png";
import post2dap from "@/assets/post-2dap.png";
import visaguard from "@/assets/visaguard.jpg";
import vgalanding2 from "@/assets/vgalanding2.jpg";
import logoo1 from "@/assets/logoo1.png";
import logoo0 from "@/assets/logoo0.jpg";
import logoo3 from "@/assets/logoo3.jpg";
import logoo4 from "@/assets/logoo4.jpg";
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
    year: "2026",
    tech: [
      "Figma",
      "React Native",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express",
    ],
    image: visaguard,
    link: "https://waitlist.visaguardafrica.com",
    caseStudySlug: "Visa-guard-africa App-Landing",
  },
  {
    title: "Visa Guard Africa Landing Page",
    category: "DESIGN · DEVELOPMENT · FULL STACK · LANDING - WEB",
    description:
      "A secure visa platform designed to protect Africans from visa scams. Features real-time verification, fraud detection, and a seamless application tracking system.",
    year: "2026",
    tech: ["Figma", "React", "Node.js", "TypeScript", "MongoDB", "Express"],
    image: vgalanding2,
    link: "https://waitlist.visaguardafrica.com",
    caseStudySlug: "Visa-guard-africa App-Landing",
  },

  {
    title: "Oonsa Event WebApp",
    category: "UI/UX DESIGN · WEBAPP",
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
    link: "https://b2b.cvmarket.ng/",
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
    title: "Multiple Vendor Store (DAPVERSE)",
    category: "PRODUCT DESIGN · UIUX · APP",
    description:
      "A multiple vendor store, mobile marketplace app connecting buyers and sellers.",
    year: "2025",
    tech: ["Flutter", "Figma", "Dart"],
    image: post2dap,
    link: null,
    caseStudySlug: "Dapstore App",
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

const categories = ["All", "Web", "Mobile App", "Logos"];

const matchesCategory = (
  project: (typeof projects)[number],
  category: string,
) => {
  const cat = project.category.toLowerCase();
  switch (category) {
    case "Web":
      return (
        cat.includes("web") ||
        cat.includes("website") ||
        cat.includes("landing")
      );
    case "Mobile App":
      return cat.includes("app") && !cat.includes("webapp");
    case "Logos":
      return cat.includes("branding") || cat.includes("logo");
    default:
      return true;
  }
};

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
    return matchesSearch && matchesCategory(project, activeCategory);
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
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Selected Projects
              </span>
            </div>
            <h1 className="font-display text-6xl sm:text-6xl lg:text-6xl text-balance font-extrabold tracking-tighter leading-[0.95] mb-2">
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
            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col border border-border rounded-xl bg-card overflow-hidden hover:border-foreground/30 hover:shadow-sm transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative bg-secondary aspect-[5/3] overflow-hidden">
                    {project.image ? (
                      <>
                        {!loadedImages[project.title] && (
                          <div className="absolute inset-0 bg-muted/60 overflow-hidden z-10">
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
                          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                            loadedImages[project.title]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-4xl font-bold text-primary">
                          {project.year}
                        </span>
                      </div>
                    )}

                    {/* Year / status pill */}
                    <span className="absolute top-3 right-3 z-20 bg-background/90 backdrop-blur-sm border border-border/60 text-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground mb-2 line-clamp-1">
                      {project.category}
                    </p>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-5 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2.5 py-1 rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border/60">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-foreground transition-colors"
                        >
                          View Live{" "}
                          <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground/70">
                          In Progress
                        </span>
                      )}

                      {project.caseStudySlug && (
                        <Link
                          to={`/projects/case-study/${project.caseStudySlug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors ml-auto"
                        >
                          Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-background/15 bg-background/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold text-background/80">
                Available for new projects
              </span>
            </div>
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">
              Interested in Working With Us?
            </h2>
            <p className="opacity-60 text-sm max-w-lg mx-auto leading-relaxed mb-8">
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
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 border-background/30 text-background px-8 py-3.5 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:border-background/55"
                  >
                    <span className="absolute inset-0 -z-10 bg-background/10 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
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
