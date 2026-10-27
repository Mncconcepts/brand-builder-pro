import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  ArrowRight,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

/* ─── Skeleton Component ─── */
const SkeletonImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer/Skeleton Effect */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-muted/20"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

/* ─── data ─── */
const caseStudies = [
  {
    slug: "visa-guard-africa",
    title: "Visa Guard Africa Technologies LTD",
    client: "Visa Guard Africa",
    industry: "Travel Safety · Fintech",
    duration: "20 Weeks",
    year: "2026",
    image: "/visaguard.jpg",
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
    testimonial: {
      quote:
        "Working with this team was a game-changer for our product. The attention to detail and technical expertise exceeded our expectations.",
      name: "John Chukwudi Eze",
      role: "Founder, Visa Guard Africa",
    },
  },
  {
    slug: "computer-village-marketplace",
    title: "Computer Village Marketplace",
    client: "Computer Village Lagos",
    industry: "B2B · Classified",
    duration: "14 Weeks",
    year: "2024-2025",
    image: "/proj-storeapp22.png",
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
    image: "/case-oonsa.svg",
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
    testimonial: {
      quote:
        "Delivered a stunning website that perfectly captures our brand. Professional, responsive, and a pleasure to work with.",
      name: "Oonsa",
      role: "Founder, Oonsa Event WebApp",
    },
  },
];

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const heroStats = [
  { n: "5", label: "Core Services" },
  { n: "50+", label: "Projects Shipped" },
  { n: "4+", label: "Years Active" },
  { n: "100%", label: "Remote-Friendly" },
];

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

  const getProjectUrl = (cs: (typeof caseStudies)[0]) => {
    const params = new URLSearchParams({
      notes: `I'd like to discuss a project similar to the ${cs.client} case study.`,
    });
    return `/contact?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Case Studies
              </span>
            </div> */}

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-balance font-extrabold tracking-tighter leading-[0.97] mb-5">
              Selected Work,{" "}
              <span className="text-muted-foreground">In Depth.</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              A closer look at select projects: the challenge each client faced,
              how it was solved, and the outcomes delivered.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Read the Case Studies <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 text-sm font-semibold rounded-xl hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                All Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 mt-14 sm:mt-16 border-t border-l border-border rounded-tl-2xl"
          >
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="border-r border-b border-border px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-none">
                  {s.n}
                </p>
                <p className="text-xs text-muted-foreground font-medium mt-2.5">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="py-14 sm:py-16 border-b border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
            At a glance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs, i) => (
              <motion.button
                key={cs.slug}
                type="button"
                onClick={() => scrollToSection(cs.slug)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group text-left rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-l"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-sm font-bold text-primary">
                    {numerals[i]}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="font-display text-4xl font-extrabold text-foreground tabular-nums leading-none">
                  {cs.results[0].value}
                </p>
                <p className="text-[11px] text-muted-foreground mt-2 uppercase tracking-wide">
                  {cs.results[0].metric}
                </p>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-bold text-foreground">
                    {cs.client}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {cs.industry}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="work" className="scroll-mt-20 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Mobile scroll-spy strip */}
          <div className="lg:hidden sticky top-16 z-30 -mx-6 px-6 py-3 mb-8 bg-background/85 backdrop-blur-md border-b border-border">
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {caseStudies.map((cs, i) => {
                const active = activeSlug === cs.slug;
                return (
                  <button
                    key={cs.slug}
                    type="button"
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
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
                        type="button"
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
                        <span className="min-w-0">
                          <span
                            className={`block text-sm font-semibold leading-snug transition-colors ${
                              active
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {cs.client}
                          </span>
                          <span className="block text-[10px] text-muted-foreground/70 mt-0.5">
                            {cs.industry}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Have something similar in mind?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:gap-2.5 transition-all"
                  >
                    Start a project <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 flex flex-col gap-10 sm:gap-14">
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
                  className="scroll-mt-32 rounded-3xl border border-border bg-card overflow-hidden shadow-xm"
                >
                  {/* Cover */}
                  <div className="relative aspect-[16/8] w-full overflow-hidden bg-secondary border-b border-border">
                    <SkeletonImage
                      src={cs.image}
                      alt={`${cs.client} case study cover`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/85 backdrop-blur-sm border border-border/40 font-display text-xs font-bold text-foreground">
                      {numerals[idx]}
                    </span>
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-foreground bg-background/85 backdrop-blur-sm border border-border/40 px-3 py-1.5 rounded-full">
                      {cs.year}
                    </span>
                  </div>

                  <div className="p-6 sm:p-10">
                    {/* Title */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
                      {cs.industry}
                    </p>
                    <h2 className="font-display text-balance leading-tight text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-2 max-w-2xl">
                      {cs.title}
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                      {cs.client}
                    </p>

                    {/* Project facts */}
                    <dl className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-border rounded-tl-xl overflow-hidden mb-10">
                      {[
                        { k: "Client", v: cs.client },
                        { k: "Industry", v: cs.industry },
                        { k: "Year", v: cs.year },
                        { k: "Duration", v: cs.duration },
                      ].map((f) => (
                        <div
                          key={f.k}
                          className="border-r border-b border-border px-4 py-4"
                        >
                          <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                            {f.k}
                          </dt>
                          <dd className="text-xs font-semibold text-foreground leading-snug">
                            {f.v}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* Headline stat + summary */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 pl-5 sm:pl-6 border-l-2 border-primary mb-12">
                      <div className="shrink-0">
                        <p className="font-display text-5xl sm:text-6xl font-extrabold text-foreground tabular-nums leading-none">
                          {cs.results[0].value}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-2 uppercase tracking-wide max-w-[10rem]">
                          {cs.results[0].metric}
                        </p>
                      </div>
                      <p className="text-foreground/90 leading-relaxed text-sm max-w-lg pt-1">
                        {cs.summary}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-12">
                      {[
                        { label: "The Challenge", body: cs.challenge, n: "01" },
                        { label: "The Solution", body: cs.solution, n: "02" },
                      ].map((block) => (
                        <div
                          key={block.label}
                          className="rounded-2xl border border-border bg-background p-6"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">
                              {block.label}
                            </h3>
                            <span className="font-display text-xs font-extrabold text-muted-foreground/40">
                              {block.n}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {block.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mb-12">
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        Results
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {cs.results.map((r, ri) => (
                          <div
                            key={r.metric}
                            className={`rounded-2xl border p-5 ${
                              ri === 0
                                ? "bg-foreground text-background border-foreground"
                                : "bg-background border-border"
                            }`}
                          >
                            <p className="font-display text-2xl sm:text-3xl font-extrabold tabular-nums leading-none">
                              {r.value}
                            </p>
                            <p
                              className={`text-[11px] mt-2.5 leading-snug ${
                                ri === 0
                                  ? "text-background/60"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {r.metric}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client testimonial */}
                    {cs.testimonial && (
                      <figure className="relative rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8 mb-12">
                        <Quote className="w-6 h-6 text-primary/60 mb-4" />
                        <blockquote className="font-display text-base sm:text-lg font-semibold text-foreground leading-snug tracking-tight">
                          {cs.testimonial.quote}
                        </blockquote>
                        <figcaption className="mt-5 flex items-center gap-3">
                          <span className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                            {cs.testimonial.name.charAt(0)}
                          </span>
                          <span>
                            <span className="block text-xs font-bold text-foreground">
                              {cs.testimonial.name}
                            </span>
                            <span className="block text-[11px] text-muted-foreground">
                              {cs.testimonial.role}
                            </span>
                          </span>
                        </figcaption>
                      </figure>
                    )}

                    {/* Tech + CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-8 border-t border-border">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          Tools & Methods
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cs.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[11px] font-semibold tracking-tight px-3 py-1.5 rounded-lg border border-border bg-background text-foreground/75"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        to={getProjectUrl(cs)}
                        className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-xs font-bold rounded-xl hover:bg-foreground/90 transition-all active:scale-[0.98] shrink-0"
                      >
                        Start a similar project
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 sm:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)] opacity-[0.06]" />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-background/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-background/10 blur-3xl pointer-events-none" />

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
            <h2 className="font-display text-balance lg:text-6xl text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
              Let's Build Something Real.
            </h2>
            <p className="opacity-60 text-sm max-w-md mx-auto leading-relaxed mb-9">
              Let us discuss how we can deliver measurable impact for your
              business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs font-bold rounded-xl hover:bg-background/90 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
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
