import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Calendar as CalendarIcon,
  ArrowUpRight,
  Search,
  LayoutGrid,
  List,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

// Asset Imports
import projPearlzStore from "@/assets/proj-pearlz-store.png";
import Oonsa from "@/assets/Oonsa.png";
import projOma from "@/assets/proj-oma.png";
import post2dap from "@/assets/post-2dap.png";
import visaguard from "@/assets/visaguard.jpg";
import vgalanding2 from "@/assets/vgalanding2.jpg";
import logoo1 from "@/assets/logoo11.jpg";
import logoo0 from "@/assets/logoo0.jpg";
import logoo33 from "@/assets/logoo33.jpg";
import logoo4 from "@/assets/logoo4.jpg";
import projstoreapp22 from "@/assets/proj-storeapp22.png";
import supersonic from "@/assets/sds000.jpeg";
import xerai from "@/assets/xerai.jpg";

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
    link: "https://supersonicdynamicservices.nl/",
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
    caseStudySlug: "QuickBoostNG-Logo-Design",
  },
  {
    title: "ReinasEvents Visual Identity",
    category: "BRANDING · LOGO DESIGN · MANAGEMENT",
    description:
      "A sophisticated and elegant logo mark designed for a high-end corporate and social event organizer. Built to represent seamless planning, execution, and hospitality.",
    year: "2025",
    tech: ["Illustrator", "Photoshop", "CorelDraw"],
    image: logoo33,
    link: null,
    caseStudySlug: "QuickBoostNG-Logo-Design",
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
    caseStudySlug: "QuickBoostNG-Logo-Design",
  },
  {
    title: "Xerai Studios Identity",
    category: "BRANDING · LOGO DESIGN · PRODUCT DESIGN",
    description:
      "A sleek, raw, and professional brand identifier created for a portfolio reviewing platform for creatives who want clarity in the tech industry, to secure better job placement and roles, capturing quality reviews from industries professionals, fast response, and expert feedback.",
    year: "2026",
    tech: ["Illustrator", "Photoshop", "Figma"],
    image: xerai,
    link: null,
    caseStudySlug: "QuickBoostNG-Logo-Design",
  },
];

type Project = (typeof projects)[number];

const categories = ["All", "Web", "Mobile App", "Logos"];

const matchesCategory = (project: Project, category: string) => {
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

/* ---------- small helpers ---------- */

// "DESIGN · DEVELOPMENT · FULL STACK" -> ["DESIGN", "DEVELOPMENT", "FULL STACK"]
const splitCategory = (category: string) =>
  category
    .split("·")
    .map((c) => c.trim())
    .filter(Boolean);

// Which of the filter groups a project belongs to (used for the small label on each card)
const groupsFor = (project: Project) =>
  categories.slice(1).filter((c) => matchesCategory(project, c));

const ProjectImage = ({
  project,
  loaded,
  onLoad,
  className = "",
}: {
  project: Project;
  loaded: boolean;
  onLoad: () => void;
  className?: string;
}) => (
  <div className={`relative overflow-hidden bg-secondary ${className}`}>
    {project.image ? (
      <>
        {!loaded && (
          <div className="absolute inset-0 z-10 bg-muted/60">
            <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent" />
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={onLoad}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      </>
    ) : (
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-display text-4xl font-bold text-primary">
          {project.year}
        </span>
      </div>
    )}
    <span className="absolute right-3 top-3 z-20 rounded-full border border-border/60 bg-background/90 px-2.5 py-1 text-[10px] font-bold text-foreground backdrop-blur-sm">
      {project.year}
    </span>
  </div>
);

const TechChips = ({ tech, max = 3 }: { tech: string[]; max?: number }) => (
  <div className="flex flex-wrap gap-1.5">
    {tech.slice(0, max).map((t) => (
      <span
        key={t}
        className="rounded-md border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
      >
        {t}
      </span>
    ))}
    {tech.length > max && (
      <span className="rounded-md border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        +{tech.length - max}
      </span>
    )}
  </div>
);

const Actions = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-3">
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        View Live <ExternalLink className="h-3.5 w-3.5" />
      </a>
    )}
    {project.caseStudySlug && (
      <Link
        to={`/projects/case-study/${project.caseStudySlug}`}
        className={`inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          project.link ? "" : "ml-0"
        }`}
      >
        Case Study <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    )}
  </div>
);

/* ---------- page ---------- */

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (title: string) => {
    setLoadedImages((prev) => ({ ...prev, [title]: true }));
  };

  const matchesSearch = (project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return matchesSearch(project);
    return matchesSearch(project) && matchesCategory(project, activeCategory);
  });

  // Count per tab (respects the current search text)
  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((cat) => [
          cat,
          projects.filter(
            (p) =>
              matchesSearch(p) &&
              (cat === "All" ? true : matchesCategory(p, cat)),
          ).length,
        ]),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchQuery],
  );

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden pb-10 pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_100%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <h1 className="font-display -mt-3 text-balance text-[2.75rem] font-extrabold leading-[1.01] tracking-tight text-foreground sm:text-7xl lg:text-7xl">
              All Selected
              <br />
              <span className="text-muted-foreground/40"> Projects. </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {projects.length}
              </span>{" "}
              projects across web, mobile and branding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="border-b border-border/40 pb-8">
        <div className="mx-auto max-w-6xl space-y-5 px-6">
          {/* Category tabs with counts */}
          <div
            role="tablist"
            aria-label="Project categories"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-transparent text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                      active
                        ? "bg-background/20 text-background"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search + view toggle */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                aria-label="Search projects"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-secondary/50 py-2.5 pl-10 pr-10 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <p className="text-xs text-muted-foreground" aria-live="polite">
                Showing {filteredProjects.length} of {projects.length}
              </p>
              <div
                role="group"
                aria-label="Change layout"
                className="inline-flex rounded-full border border-border bg-secondary/50 p-1"
              >
                {(
                  [
                    { id: "grid", label: "Grid view", Icon: LayoutGrid },
                    { id: "list", label: "List view", Icon: List },
                  ] as const
                ).map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setView(id)}
                    aria-label={label}
                    aria-pressed={view === id}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      view === id
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          {filteredProjects.length > 0 ? (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                  : "flex flex-col gap-4"
              }
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const loaded = !!loadedImages[project.title];
                  const tags = splitCategory(project.category);

                  /* ----- LIST ROW ----- */
                  if (view === "list") {
                    return (
                      <motion.article
                        key={project.title}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex flex-col gap-5 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm sm:flex-row sm:items-center"
                      >
                        <ProjectImage
                          project={project}
                          loaded={loaded}
                          onLoad={() => handleImageLoad(project.title)}
                          className="aspect-[5/3] w-full shrink-0 rounded-lg sm:w-56"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="mb-1.5 line-clamp-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {project.category}
                          </p>
                          <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                            {project.title}
                          </h3>
                          <p className="mb-3 mt-1.5 line-clamp-2 text-sm leading-5 text-muted-foreground">
                            {project.description}
                          </p>
                          <TechChips tech={project.tech} max={4} />
                        </div>
                        <div className="sm:shrink-0">
                          <Actions project={project} />
                        </div>
                      </motion.article>
                    );
                  }

                  /* ----- GRID CARD (3 per row on desktop) ----- */
                  return (
                    <motion.article
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{
                        duration: 0.45,
                        delay: (index % 3) * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-foreground/30 hover:shadow-sm"
                    >
                      <ProjectImage
                        project={project}
                        loaded={loaded}
                        onLoad={() => handleImageLoad(project.title)}
                        className="aspect-[5/3]"
                      />

                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex flex-wrap items-center gap-1.5">
                          {groupsFor(project).map((g) => (
                            <span
                              key={g}
                              className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground"
                            >
                              {g}
                            </span>
                          ))}
                        </div>

                        <h3 className="font-display mb-2 text-lg font-bold leading-snug text-foreground">
                          {project.title}
                        </h3>

                        <p className="mb-4 line-clamp-3 text-sm leading-5 text-muted-foreground">
                          {project.description}
                        </p>

                        <p className="mb-4 line-clamp-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground/80">
                          {tags.join(" · ")}
                        </p>

                        <div className="mb-6">
                          <TechChips tech={project.tech} />
                        </div>

                        <div className="mt-auto border-t border-border/60 pt-4">
                          <Actions project={project} />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border py-20 text-center">
              <p className="text-muted-foreground">
                No projects found matching your criteria.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-foreground/50"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold text-background/80">
                Available for new projects
              </span>
            </div>
            <h2 className="font-display mb-1 text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">
              Interested in Working With Us?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-5 opacity-60">
              We are always open to new opportunities and collaborations. Send
              us messages let's build something great together.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Get in Touch <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-background/30 px-8 py-3.5 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:border-background/55"
                  >
                    <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-background/10 transition-transform duration-300 ease-out group-hover:scale-x-100" />
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