import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

const caseStudies = [
  {
    slug: "visa-guard-africa",
    title: "Visa Guard Africa Technologies LTD",
    client: "Visa Guard Africa",
    industry: "Travel Tech · Fintech",
    duration: "20 Weeks",
    year: "2026",
    summary:
      "Serving as Product Manager and Product Designer, I led Visa Guard Africa from concept to launch working hands-on with my development team across strategy, UX research, UI design, and full product development to simplify visa processing across the African continent.",
    challenge:
      "Visa applicants across Africa faced fragmented, opaque, and stressful application processes with no unified platform for tracking status, verifying documents, or understanding eligibility. The market had no trusted, Africa-focused visa technology solution.",
    solution:
      "Owned the full product lifecycle from market research and product strategy to UI/UX design and development oversight. Shipped a secure platform with a multi-country visa eligibility engine, document verification, real-time application tracking, and an applicant dashboard. Coordinated the development team sprint by sprint from design handoff through to launch.",
    results: [
      { metric: "Countries Covered", value: "5+" },
      { metric: "Application Time", value: "-65%" },
      { metric: "Doc Accuracy", value: "+90%" },
      { metric: "Product Launch", value: "On Time" },
    ],
    tech: [
      "Figma",
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
    ],
  },
  {
    slug: "computer-village-marketplace",
    title: "Computer Village Marketplace",
    client: "Computer Village Lagos",
    industry: "E-Commerce · Tech Retail",
    duration: "14 Weeks",
    year: "2024-2025",
    summary:
      "Designed a fully responsive digital marketplace for Computer Village Nigeria's largest technology hub bridging the gap between Lagos' bustling offline tech market and a modern, seamless online shopping experience.",
    challenge:
      "Computer Village operated entirely offline, with thousands of vendors and no unified digital presence. Buyers had no way to browse, compare, or purchase products online. Vendor management was manual, inconsistent, and hard to scale.",
    solution:
      "Built a multi-vendor marketplace with individual vendor storefronts, real-time product listings, smart search and category filtering, a secure checkout flow, and an admin dashboard for inventory and order management. Designed a clean, accessible UI optimised for both desktop and mobile users across Nigeria.",
    results: [
      { metric: "Vendors Onboarded", value: "200+" },
      { metric: "Mobile Experience", value: "100%" },
      { metric: "Search Accuracy", value: "+85%" },
      { metric: "Checkout Time", value: "-60%" },
    ],
    tech: ["Figma", "FigJam", "Prototyping", "Design System", "User Research"],
  },
  {
    slug: "oonsa-event-discovery-planning",
    title: "Oonsa Event Discovery & Planning",
    client: "Oonsa",
    industry: "Events · SaaS",
    duration: "10 Weeks",
    year: "2025",
    summary:
      "Led the end-to-end product design for Oonsa an event discovery and planning management platform for the web. Designed an intuitive experience that empowers both event planners and attendees to discover, manage, and attend events seamlessly.",
    challenge:
      "Event planners lacked a centralised tool to manage the full event lifecycle from creation and promotion to ticketing and guest coordination. Attendees struggled to discover relevant events in one place. Existing solutions were either too complex or too basic.",
    solution:
      "Conducted user research and competitive analysis, then designed the complete web product from wireframes to high-fidelity UI. Delivered a clean planner dashboard covering event creation, vendor coordination, guest management, budget tracking, and real-time analytics alongside a polished public-facing event discovery interface for attendees.",
    results: [
      { metric: "Design Screens", value: "60+" },
      { metric: "Planner Efficiency", value: "+70%" },
      { metric: "User Onboarding", value: "-55%" },
      { metric: "Design-Dev Handoff", value: "Seamless" },
    ],
    tech: ["Figma", "FigJam", "Prototyping", "Design System", "User Research"],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-20" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">Case Studies</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] font-extrabold tracking-tight mb-6">
              General Project Case-Study.
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              In-depth look at select projects the challenges, the process, and
              the measurable outcomes delivered for each client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-border"
          >
            {[
              { n: "5", label: "Core Services" },
              { n: "50+", label: "Projects Shipped" },
              { n: "4+", label: "Years Active" },
              { n: "100%", label: "Remote-Friendly" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-extrabold text-foreground">{s.n}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-10">
            {caseStudies.map((cs, idx) => (
              <motion.article
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
              >
                {/* Top bar */}
                <div className="bg-secondary/50 border-b border-border px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xm font-bold text-foreground">
                      {cs.title}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cs.client} · {cs.industry} · {cs.duration}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {cs.year}
                  </span>
                </div>

                <div className="p-8 lg:p-10 space-y-10">
                  {/* Summary */}
                  <p className="text-foreground leading-relaxed text-sm max-w-3xl">
                    {cs.summary}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        The Solution
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Key Results
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {cs.results.map((r) => (
                        <div
                          key={r.metric}
                          className="bg-secondary/40 rounded-md p-4 text-center"
                        >
                          <p className="font-display text-2xl font-bold text-foreground">
                            {r.value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {r.metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
              Ready When You Are
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let's Build Something Real.
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
              Let us discuss how we can deliver measurable impact for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs font-bold rounded-xl hover:bg-background/90 transition-all hover:-translate-y-0.5"
              >
                Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
