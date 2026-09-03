import { useState, useEffect, useRef } from "react";
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
    industry: "Travel Safety · Fintech",
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
    industry: "B2B · Classified",
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

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const CaseStudies = () => {
  const [activeSlug, setActiveSlug] = useState(caseStudies[0].slug);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute("data-slug");
            if (slug) setActiveSlug(slug);
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (slug: string) => {
    sectionRefs.current[slug]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Case Studies
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-6xl lg:text-6xl text-balance font-extrabold tracking-tighter leading-[0.95] mb-2">
              Selected Work, In Depth.
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              A closer look at select projects: the challenge each client faced,
              how it was solved, and the outcomes delivered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-wrap gap-6 mt-12 pt-5 border-t border-border"
          >
            {[
              { n: "5", label: "Core Services" },
              { n: "50+", label: "Projects Shipped" },
              { n: "4+", label: "Years Active" },
              { n: "100%", label: "Remote-Friendly" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-xl font-extrabold text-foreground">
                  {s.n}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Mobile scroll-spy strip */}
          <div className="lg:hidden -mx-6 px-6 mb-10 overflow-x-auto">
            <div className="flex gap-2 w-max pb-1">
              {caseStudies.map((cs, i) => {
                const active = activeSlug === cs.slug;
                return (
                  <button
                    key={cs.slug}
                    onClick={() => scrollToSection(cs.slug)}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <span className={active ? "opacity-70" : "opacity-40"}>
                      {numerals[i]}
                    </span>
                    {cs.client}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16">
            {/* Sticky index — desktop only */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-5">
                  Selected Work
                </p>
                <div className="flex flex-col">
                  {caseStudies.map((cs, i) => {
                    const active = activeSlug === cs.slug;
                    return (
                      <button
                        key={cs.slug}
                        onClick={() => scrollToSection(cs.slug)}
                        className={`text-left flex items-start gap-3 py-3.5 pl-4 border-l-2 transition-colors ${
                          active
                            ? "border-foreground"
                            : "border-border/60 hover:border-foreground/30"
                        }`}
                      >
                        <span
                          className={`font-display text-xs mt-0.5 shrink-0 transition-colors ${
                            active
                              ? "text-foreground"
                              : "text-muted-foreground/40"
                          }`}
                        >
                          {numerals[i]}
                        </span>
                        <span
                          className={`text-sm font-semibold leading-snug transition-colors ${
                            active ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {cs.client}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:gap-2.5 transition-all"
                  >
                    Start a project <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              {caseStudies.map((cs, idx) => (
                <motion.article
                  key={cs.slug}
                  id={cs.slug}
                  data-slug={cs.slug}
                  ref={(el) => {
                    sectionRefs.current[cs.slug] = el;
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`scroll-mt-28 py-14 lg:py-16 ${
                    idx !== 0 ? "border-t border-border/60" : "pt-0"
                  }`}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-display text-sm font-bold text-primary">
                      {numerals[idx]}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {cs.industry}
                    </span>
                    <span className="text-border">·</span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {cs.year} · {cs.duration}
                    </span>
                  </div>

                  <h2 className="font-display text-balance leading-tight text-2xl sm:text-4xl font-bold text-foreground mb-2 max-w-2xl">
                    {cs.title}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
                    {cs.client}
                  </p>

                  {/* Headline stat + summary, pulled out as the premium focal point */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 pl-5 sm:pl-6 border-l-2 border-primary mb-12">
                    <div className="shrink-0">
                      <p className="font-display text-5xl sm:text-6xl font-extrabold text-foreground tabular-nums leading-none">
                        {cs.results[0].value}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-2 uppercase tracking-wide max-w-[10rem]">
                        {cs.results[0].metric}
                      </p>
                    </div>
                    <p className="text-foreground/90 leading-relaxed text-sm max-w-md pt-1">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 mb-12">
                    <div>
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-3">
                        The Solution
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Remaining results, lean and horizontal */}
                  <div className="mb-10">
                    <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                      Additional Results
                    </h3>
                    <div className="flex flex-wrap gap-x-10 gap-y-5">
                      {cs.results.slice(1).map((r) => (
                        <div key={r.metric}>
                          <p className="font-display text-xl font-bold text-foreground tabular-nums">
                            {r.value}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-1">
                            {r.metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap text-xs leading-5 text-muted-foreground">
                    {cs.tech.map((t, i) => (
                      <span key={t}>
                        {t}
                        {i < cs.tech.length - 1 && (
                          <span className="text-border mx-2">-</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
              Ready When You Are
            </p>
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">
              Let's Build Something Real.
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
              Let us discuss how we can deliver measurable impact for your
              business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs font-bold rounded-xl hover:bg-background/90 transition-all hover:-translate-y-0.5"
              >
                Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 border-background/30 text-background px-8 py-3.5 text-xs font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:border-background/55"
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

export default CaseStudies;
