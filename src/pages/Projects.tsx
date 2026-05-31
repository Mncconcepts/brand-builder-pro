import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar as CalendarIcon, BookOpen, ArrowUpRight } from "lucide-react";
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
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_100%)]" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-border">
              Portfolio
            </span>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Selected <br />
              <span className="text-muted-foreground/40">Works.</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed font-medium">
              Bridging the gap between aesthetic design and technical excellence. A curated list of digital products and web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-15">
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
                    <span className="font-barlow text-4xl font-bold text-primary">
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

      {/* ── CTA ── */}
           <section className="py-24 bg-foreground text-background relative overflow-hidden">
             <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Let's Connect</p>
                 <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                   Interested in Working With Us?
                 </h2>
                 <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-10">
                   We are always open to new opportunities and collaborations. Let's build something great together.
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
