import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Users,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProcessStep {
  phase: string;
  description: string;
}

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  year: string;
  overview: string;
  role: string;
  duration: string;
  team: string;
  tech: string[];
  problem: string;
  solution: string;
  process: ProcessStep[];
  outcomes: string[];
  challenges: string;
  learnings: string;
  link?: string | null;
  accentColor: string;
  accentBg: string;
}


const caseStudies: CaseStudyData[] = [
  {
    slug: "visa-guard-africa",
    title: "Visa Guard Africa Technologies Ltd",
    category: "DESIGN · DEVELOPMENT · FULL STACK · APP",
    tagline:
      "Protecting Africans from visa fraud — one verified application at a time.",
    year: "Coming Soon",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-600",
    tech: [
      "Figma",
      "React Native",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express",
    ],
    overview:
      "Visa scams are rampant across Africa, costing applicants thousands of dollars and devastating life opportunities. Visa Guard Africa is our most ambitious undertaking — a secure, full-stack platform built to verify travel visa agencies, track applications in real time, and flag fraudulent actors before any damage is done.",
    role: "Product Design · Full Stack Development",
    duration: "Ongoing (2025 - Present)",
    team: "3 Engineers · 2 Designers · 1 Product Manager",
    problem:
      "Millions of Africans fall victim to visa scams annually. Fake agencies collect fees, submit falsified documents, and vanish — leaving applicants banned, broke, and without recourse. There was no centralised, trustworthy platform that could verify agencies, track applications, and alert users in real time.",
    solution:
      "We designed and are building a platform with three core pillars: (1) Agency Verification — a government-linked database of licensed visa consultants; (2) Real-Time Application Tracking — applicants get live status updates at every embassy stage; (3) Fraud Detection Engine — ML-assisted flagging of suspicious agency patterns, combined with a community-driven report system.",
    process: [
      {
        phase: "Discovery & Research",
        description:
          "We conducted 40+ interviews with applicants who had been scammed and 15 interviews with legitimate visa consultants. We mapped pain points across the entire visa journey — from agency selection to embassy submission.",
      },
      {
        phase: "Information Architecture",
        description:
          "We structured three distinct user flows: applicants, verified agencies, and platform administrators. Each has a tailored dashboard with role-specific permissions and data visibility.",
      },
      {
        phase: "Design System",
        description:
          "We built a trust-first design system in Figma — using deep blues and institutional greens to evoke security and credibility. Every component was stress-tested for accessibility and low-bandwidth environments common across Africa.",
      },
      {
        phase: "Development (In Progress)",
        description:
          "The backend is being built in Node.js with MongoDB for flexible document storage. React Native powers the cross-platform mobile app. A TypeScript-first codebase ensures type safety at scale.",
      },
    ],
    outcomes: [
      "40+ user interviews completed, shaping every design decision",
      "Design system with 80+ reusable components in Figma",
      "Full information architecture covering 3 user roles",
      "MVP backend APIs 60% complete",
      "Pilot program planned with 2 licensed Nigerian visa agencies",
    ],
    challenges:
      "The most complex challenge is integrating with government embassy databases — many of which have no public API. We are currently working with legal partners to establish data-sharing agreements and building a manual verification fallback in the interim.",
    learnings:
      "Building for vulnerable users demands an unusually high standard of trust design. Every label, every empty state, every error message must communicate safety. This project has fundamentally changed how we think about designing for high-stakes environments.",
    link: null,
  },
  {
    slug: "oonsa-event-app",
    title: "Oonsa Event App",
    category: "UI/UX DESIGN · BRANDING · WEBSITE",
    tagline: "Making event discovery and ticketing feel effortless.",
    year: "2025",
    accentColor: "text-violet-600",
    accentBg: "bg-blue-600",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    overview:
      "Oonsa is a modern event management platform designed to simplify how people discover, book, and experience events across Nigeria and beyond. We led the full UI/UX design — from initial research through high-fidelity prototypes and developer handoff.",
    role: "UI/UX Design · Branding · Website Design",
    duration: "4 months (2025)",
    team: "2 Designers · 1 Brand Strategist",
    problem:
      "Event discovery in Nigeria was fragmented — spread across WhatsApp broadcasts, Instagram flyers, and word-of-mouth. There was no unified platform with reliable ticketing, event details, and post-event engagement. Users were frustrated by last-minute information and failed payments.",
    solution:
      "We designed Oonsa as a one-stop event companion: browse curated events by category, purchase tickets with one tap, get QR-code entry passes, and follow your favourite organisers. The design prioritises speed and trust — two things users told us they needed most.",
    process: [
      {
        phase: "User Research",
        description:
          "We ran 25 user interviews and 3 focus groups across Lagos and Abuja. Key insight: users trust events more when they can see attendee counts and organiser reputation scores in real time.",
      },
      {
        phase: "Competitive Analysis",
        description:
          "We audited Eventbrite, Eventbee, and local alternatives. Our opportunity was clear: no competitor offered a mobile-first experience tailored to the cultural nuances of Nigerian events.",
      },
      {
        phase: "Wireframing & Prototyping",
        description:
          "We produced 120+ screens in Figma across onboarding, discovery, event detail, checkout, and organiser dashboards. Three rounds of usability testing shaped the final flows.",
      },
      {
        phase: "Visual Design & Branding",
        description:
          "Oonsa's visual identity uses a warm, energetic palette with bold typography to capture the excitement of live events. Every illustration and icon was custom-designed for the brand.",
      },
    ],
    outcomes: [
      "120+ high-fidelity screens across mobile and web",
      "Complete design system with tokens, components, and documentation",
      "3 rounds of usability testing with 48 participants",
      "Organiser dashboard with event analytics and ticket management",
      "App launched at oonsa.com with active users",
    ],
    challenges:
      "Designing for a multi-stakeholder product — where attendees, organisers, and admins all have conflicting needs — required constant prioritisation. We used jobs-to-be-done frameworks to ensure every screen served at least one clear user goal.",
    learnings:
      "Cultural context is everything in product design. Nigerian events have unique social dynamics — group ticket purchases, last-minute RSVPs, and organiser reputation systems — that don't exist in Western event apps. We had to unlearn global patterns and design locally.",
    link: "https://oonsa.com",
  },
  {
    slug: "pearlz-store",
    title: "E-Commerce Skincare Website",
    category: "APP DESIGN · UI DESIGN · WEB DEVELOPMENT",
    tagline:
      "A skincare shopping experience as smooth as the products it sells.",
    year: "2025",
    accentColor: "text-blue-500",
    accentBg: "bg-blue-600",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    overview:
      "Pearlz Store is a full-featured e-commerce platform for a premium skincare brand. We designed and developed the entire experience — from product browsing and cart management to Stripe-powered checkout and a custom CMS for inventory. The result is a conversion-optimised storefront that reflects the brand's luxury positioning.",
    role: "App Design · UI Design · Full Stack Web Development",
    duration: "3 months (2025)",
    team: "1 Designer · 2 Engineers",
    problem:
      "The client was selling skincare products through Instagram DMs — a process that was slow, error-prone, and impossible to scale. They needed a professional storefront that could handle inventory, payments, and customer relationships automatically.",
    solution:
      "We built a React-powered storefront with a Node.js backend, PostgreSQL database, and Stripe integration. The design uses soft, luminous aesthetics to reinforce the brand's premium feel. A custom admin dashboard gives the client full control over products, orders, and customer data.",
    process: [
      {
        phase: "Brand & Visual Direction",
        description:
          "We began with a brand workshop to extract the client's aesthetic vision — pearl whites, soft golds, and clean minimalism. These became the foundation of the entire design language.",
      },
      {
        phase: "UX Architecture",
        description:
          "We mapped the full purchase journey from landing page to order confirmation. Every step was designed to reduce friction and increase conversion — with particular attention to mobile checkout flows.",
      },
      {
        phase: "Frontend Development",
        description:
          "Built in React with a component library designed for the brand. Product filtering, cart persistence, and real-time stock indicators were prioritised based on user research.",
      },
      {
        phase: "Backend & Payments",
        description:
          "A Node.js API handles orders, product management, and customer accounts. Stripe integration covers card payments, webhooks, and automatic receipt generation. PostgreSQL ensures reliable data storage.",
      },
    ],
    outcomes: [
      "Full e-commerce platform live at pearlz-store.vercel.app",
      "Stripe checkout with 99.8% uptime since launch",
      "Admin CMS allowing non-technical product management",
      "40% increase in average order value vs Instagram-based sales",
      "Mobile-first design achieving sub-2s load times",
    ],
    challenges:
      "Translating a luxury brand identity into a fast, performant web experience required careful trade-offs between rich visuals and load performance. We used image optimisation pipelines and lazy loading to maintain both beauty and speed.",
    learnings:
      "E-commerce design is fundamentally about reducing doubt. Every product image, every review, every delivery detail exists to answer an unspoken customer question: 'Can I trust this?' We now design e-commerce with that lens from day one.",
    link: "https://pearlz-store.vercel.app",
  },
  {
    slug: "cvmp",
    title: "Computer Village MarketPlace (CVMP)",
    category: "PRODUCT DESIGN · UIUX · APP",
    tagline: "Bringing Nigeria's largest tech market to your fingertips.",
    year: "2025",
    accentColor: "text-blue-500",
    accentBg: "bg-blue-600",
    tech: ["Flutter", "Figma", "Dart", "Firebase"],
    overview:
      "Computer Village in Lagos is Africa's largest open-air technology market — but navigating it is chaotic. CVMP is a mobile marketplace app that connects buyers with verified sellers, enabling product discovery, price comparison, and purchase negotiations in one seamless cross-platform experience.",
    role: "Product Design · UI/UX · Mobile App Design",
    duration: "5 months (2025)",
    team: "2 Designers · 2 Flutter Developers",
    problem:
      "Buyers visiting Computer Village had no way to compare prices across hundreds of shops, verify seller credibility, or browse available stock before arriving. Sellers had no digital presence and lost customers to competitors with better visibility. The entire market ran on physical foot traffic alone.",
    solution:
      "We designed and are building a Flutter app that gives every Computer Village seller a verified digital storefront. Buyers can browse products by category, compare prices across sellers, read reviews, and initiate purchase negotiations — all before stepping into the market.",
    process: [
      {
        phase: "On-Ground Research",
        description:
          "We spent two weeks physically in Computer Village, interviewing 35 sellers and 50 buyers. We mapped the informal systems, trust mechanisms, and negotiation rituals that make the market work — and designed around them, not against them.",
      },
      {
        phase: "Seller Onboarding Design",
        description:
          "The biggest challenge was designing for sellers with limited smartphone experience. We created a guided onboarding flow in both English and pidgin with visual-first interfaces that minimise reading requirements.",
      },
      {
        phase: "Product Architecture",
        description:
          "We structured a flexible product taxonomy that handles the unique categories of Computer Village — from laptop components to surveillance cameras — with smart search and filter systems.",
      },
      {
        phase: "Flutter Development",
        description:
          "Cross-platform development in Flutter ensures the app runs flawlessly on both Android (dominant in the market) and iOS. Firebase powers real-time inventory updates and push notifications.",
      },
    ],
    outcomes: [
      "150+ screens designed across buyer and seller flows",
      "Seller onboarding completion rate of 78% in usability testing",
      "Custom product taxonomy covering 200+ Computer Village categories",
      "Flutter app with offline-first architecture for low-connectivity environments",
      "Pilot with 20 verified Computer Village sellers in progress",
    ],
    challenges:
      "Designing for a market with strong offline social dynamics was uniquely complex. Features like price negotiation and trust verification had to be reimagined for a digital context without losing the human, relational feel of the original market.",
    learnings:
      "The most impactful design work happens when you deeply understand and respect the existing system you're digitising. Computer Village isn't broken — it's just unscalable. Our job was to amplify what works, not replace it.",
    link: null,
  },
  {
    slug: "oma-crypto",
    title: "OMA Crypto Mining App",
    category: "UI/UX DESIGN · PRODUCT DESIGN · APP",
    tagline: "Making crypto mining accessible, visual, and rewarding.",
    year: "2023",
    accentColor: "text-blue-500",
    accentBg: "bg-blue-600",
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    overview:
      "OMA is a mobile-first crypto mining, gaming, and entertainment platform designed to make cryptocurrency accessible to everyday users. We led the complete product design — creating intuitive dashboards, animated mining visualisations, growth analytics, and a reward ecosystem that keeps users engaged.",
    role: "UI/UX Design · Product Design · Mobile App",
    duration: "6 months (2023)",
    team: "2 Designers",
    problem:
      "Crypto mining apps are notoriously complex — filled with technical jargon, confusing interfaces, and anxiety-inducing dashboards. OMA's target audience was everyday users with little crypto experience. The challenge was making mining feel accessible, rewarding, and even fun.",
    solution:
      "We built OMA's design around three emotions: curiosity, progress, and reward. Animated mining visualisations show users their rigs working in real time. Progress bars and milestone systems gamify the earning process. A clean analytics dashboard makes performance data legible even to crypto newcomers.",
    process: [
      {
        phase: "User Persona Development",
        description:
          "We identified three core personas: the curious newcomer, the casual miner, and the growth-focused power user. Every design decision was filtered through at least one of these lenses.",
      },
      {
        phase: "Gamification Strategy",
        description:
          "We integrated gaming mechanics — streaks, badges, mining milestones, and referral rewards — to drive daily active usage. The reward system was designed to feel generous and motivating without misleading users about expected returns.",
      },
      {
        phase: "Dashboard Design",
        description:
          "The mining dashboard uses real-time data visualisations to communicate hash rate, earnings, and network status. We ran 4 iterations of the analytics layout before landing on a design that tested well with newcomers.",
      },
      {
        phase: "Motion & Microinteractions",
        description:
          "Mining is inherently invisible — it happens on servers, not in the user's hands. We made it visible through custom Lottie animations and particle effects that react to mining intensity, creating a sense of activity and momentum.",
      },
    ],
    outcomes: [
      "Complete product design across 90+ screens",
      "Gamification system with 12 milestone tiers and badge rewards",
      "Custom animated mining visualisations in Lottie format",
      "Analytics dashboard tested with 30 users — 94% comprehension rate",
      "Design handed off with full Figma component library and spec documentation",
    ],
    challenges:
      "Balancing transparency with excitement was a constant tension. Crypto returns are unpredictable, so we had to design engaging, optimistic interfaces without making promises the platform couldn't keep. Every growth metric was carefully framed to be accurate, not aspirational.",
    learnings:
      "Designing for crypto taught us that emotion drives adoption more than information. Users don't need to understand how mining works — they need to feel that it's working for them. Simplicity, visibility, and reward loops do more than any technical explanation.",
    link: null,
  },
  {
    slug: "paywithpi",
    title: "PayWithPi",
    category: "WEB DEVELOPMENT · FULL STACK · WEBSITE",
    tagline: "Bringing real-world utility to the Pi Network ecosystem.",
    year: "2022",
    accentColor: "text-blue-500",
    accentBg: "bg-blue-600",
    tech: ["React", "TypeScript", "Firebase", "Node.js"],
    overview:
      "PayWithPi is a full-stack payment platform built on the Pi Network, enabling users to transfer Pi cryptocurrency, manage wallets, and complete purchases within a growing merchant ecosystem. The platform includes a consumer-facing app and a comprehensive admin dashboard with sales analytics and order management.",
    role: "Full Stack Web Development · UI Design",
    duration: "4 months (2022)",
    team: "2 Engineers · 1 Designer",
    problem:
      "Despite Pi Network's large user base, there were almost no platforms enabling real-world Pi transactions. Pi holders had cryptocurrency with no practical spending utility. Merchants had no tools to accept Pi payments or track order history.",
    solution:
      "We built PayWithPi as a two-sided platform: a consumer wallet and payment app, and a merchant dashboard with full order analytics. The platform handles Pi transfers, purchase flows, transaction history, and administrative controls — all built on Firebase for real-time data synchronisation.",
    process: [
      {
        phase: "Platform Architecture",
        description:
          "We designed a dual-interface system from the ground up — a lightweight consumer PWA optimised for mobile use, and a full desktop admin dashboard for merchants and platform administrators.",
      },
      {
        phase: "Wallet & Payment UX",
        description:
          "The wallet interface was designed around trust and clarity. Balance displays, transaction histories, and transfer confirmations were all A/B tested to minimise user anxiety around financial transactions.",
      },
      {
        phase: "Admin Dashboard",
        description:
          "The admin interface provides real-time sales data, order management, user analytics, and transaction monitoring. Charts were built with Recharts, dynamically reflecting Firebase data streams.",
      },
      {
        phase: "Security & Reliability",
        description:
          "All transactions are verified through Pi Network's SDK before processing. We implemented Firebase security rules, rate limiting, and audit logging to ensure platform integrity.",
      },
    ],
    outcomes: [
      "Live platform at paywith-pi.vercel.app",
      "Wallet system supporting send, receive, and transaction history",
      "Admin dashboard with real-time sales and order analytics",
      "Firebase backend handling 500+ concurrent sessions",
      "Pi SDK integration with end-to-end payment verification",
    ],
    challenges:
      "The Pi Network SDK was still in early development during our build, with limited documentation and frequent API changes. We built abstraction layers around all SDK calls to isolate our codebase from upstream changes — a decision that saved weeks of rework.",
    learnings:
      "Building on emerging blockchain ecosystems requires exceptional flexibility. We learned to architect for change — loose coupling, clear abstraction boundaries, and thorough internal documentation became non-negotiable practices that we now apply to every project.",
    link: "https://paywith-pi.vercel.app",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-foreground tracking-tight">
    {children}
  </h2>
);

const CaseStudySheet = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold text-foreground">
            Case study not found.
          </p>
          <Link to="/projects" className="text-black-600 underline text-xs">
            ← Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 pb-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
          </motion.div>

          {/* Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className={`text-xs font-bold tracking-widest uppercase mb-3 ${study.accentColor}`}
          >
            {study.category}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-3xl sm:text-3xl font-extrabold text-foreground leading-tight mb-4"
          >
            {study.title}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className={`border-l-4 pl-4 mb-8 ${study.accentColor}`}
          >
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
              "{study.tagline}"
            </p>
          </motion.div>

          {/* Meta cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="grid text-xs grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              {
                icon: <Target className="w-3.5 h-3.5" />,
                label: "Role",
                value: study.role,
              },
              {
                icon: <Clock className="w-3.5 h-3.5" />,
                label: "Timeline",
                value: study.duration,
              },
              {
                icon: <Users className="w-3.5 h-3.5" />,
                label: "Team",
                value: study.team,
              },
              {
                icon: <Calendar className="w-3.5 h-3.5" />,
                label: "Year",
                value: study.year,
              },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-card border border-border rounded-lg p-3"
              >
                <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                  {m.icon}
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {m.label}
                  </span>
                </div>
                <p className="text-xs font-medium text-foreground leading-snug">
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Tech stack */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="flex flex-wrap gap-2 mt-3">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-foreground bg-secondary border border-border px-3 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Overview</SectionLabel>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </motion.div>

          {/* Problem / Solution side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-secondary/30 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-red-500" />
                <h3 className="text-xs font-bold text-foreground tracking-wide uppercase">
                  The Problem
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {study.problem}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-xl border border-border bg-secondary/30 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className={`w-4 h-4 ${study.accentColor}`} />
                <h3 className="text-xs font-bold text-foreground tracking-wide uppercase">
                  Our Solution
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {study.solution}
              </p>
            </motion.div>
          </div>

          {/* Process */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Our Process</SectionLabel>
            <div className="mt-6 space-y-0">
              {study.process.map((step, i) => (
                <motion.div
                  key={step.phase}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.3}
                  className="flex gap-4 group"
                >
                  {/* Timeline spine */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 z-10 ${study.accentBg}`}
                    >
                      {i + 1}
                    </div>
                    {i < study.process.length - 1 && (
                      <div className="w-px flex-1 bg-border my-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div
                    className={`pb-6 ${i === study.process.length - 1 ? "pb-0" : ""}`}
                  >
                    <h4 className="text-sm font-bold text-foreground mb-1.5">
                      {step.phase}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <SectionLabel>Outcomes & Impact</SectionLabel>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {study.outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                  className="flex items-start gap-2.5 bg-secondary/50 p-3.5 rounded-lg border border-border"
                >
                  <span className="text-xs text-foreground font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Learnings */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold text-foreground tracking-wide uppercase mb-2">
                Challenges
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {study.challenges}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h3 className="text-sm font-bold text-foreground tracking-wide uppercase mb-2">
                Key Learnings
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {study.learnings}
              </p>
            </motion.div>
          </div>

          {/* External Link */}
          {study.link && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-4 flex justify-center sm:justify-start"
            >
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-bold transition-opacity hover:opacity-90 ${study.accentBg}`}
              >
                Visit Live Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudySheet;
