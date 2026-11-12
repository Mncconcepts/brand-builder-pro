import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Rocket,
  Code2,
  Palette,
  Zap,
  Lightbulb,
  Pen,
  Trophy,
  Users,
  MessageSquare,
  Layers,
  Monitor,
  Database,
  Terminal,
  PenTool,
  Target,
  Eye,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

const COMPANY = "mnconcepts";
const LINKEDIN_URL = "https://www.linkedin.com/company/mncconcepts";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

function SectionHeader({
  title,
  description,
  tone = "light",
  action,
}: {
  title: string;
  description?: string;
  tone?: "light" | "dark";
  action?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className="mb-12 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2
          className={`font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl ${
            dark ? "text-background" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-xl text-base leading-6 sm:text-lg sm:leading-7 ${
              dark ? "text-background/75" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </Reveal>
  );
}

function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {loop.map((name, i) => (
          <div key={name + i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-xl font-bold tracking-tight text-foreground/60 transition-colors hover:text-foreground sm:px-12 sm:text-2xl">
              {name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ═════════════ Data ═════════════ */
const metrics = [
  { value: "4+", label: "Years in business" },
  { value: "50+", label: "Products delivered" },
  { value: "30+", label: "Clients served" },
  { value: "99%", label: "Client satisfaction" },
];

const trustedBy = [
  "SUPERSONIC DYAMIC SERVICES B.V.",
  "VISA GUARD AFRICA TECHNOLOGIES LTD",
  "OONSA EVENTS",
  "CV MARKETPLACE",
  "DAPSVERSE",
  "OMA",
];

const facts = [
  { label: "Company", value: COMPANY },
  { label: "What we do", value: "Product design and software development" },
  { label: "Who we serve", value: "Startups and established brands" },
  {
    label: "How we work",
    value: "Remote-first, with clients across time zones",
  },
  { label: "Experience", value: "4+ years, 50+ products delivered" },
];

const principles = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "To help businesses turn ideas into dependable digital products through clear thinking, careful design and clean engineering.",
  },
  {
    icon: Eye,
    title: "Our vision",
    description:
      "To be the studio growing companies across Africa and beyond trust first when a product needs to be built properly.",
  },
];

const offerings = [
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "Websites, web apps and mobile apps built to be fast, secure and easy to scale.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "Research, flows and prototypes that turn a business goal into a product people understand.",
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    description:
      "Clear interfaces and design systems that stay consistent as your product grows.",
  },
  {
    icon: Lightbulb,
    title: "Design Consulting",
    description:
      "Audits, reviews and practical recommendations for teams that already have a product.",
  },
  {
    icon: Pen,
    title: "Logo & Brand Design",
    description:
      "Visual identities and brand assets that make your business easy to recognise.",
  },
];

const engagements = [
  {
    client: "SUPERSONIC Dynamic Services B.V.",
    sector: "Logistics",
    region: "Netherlands",
    status: "Ongoing",
    description:
      "Design and frontend development for a moving and freight haulage platform, covering product strategy, UI/UX, a design system and responsive web experiences.",
    scope: ["Product strategy", "UI/UX", "Design system", "Frontend"],
  },
  {
    client: "Visa Guard Africa Technologies Ltd",
    sector: "Travel security",
    region: "Africa",
    status: "Ongoing",
    description:
      "Product design and strategy for a visa security platform that protects travellers from immigration scams, including verified agent onboarding, secure applications and fraud-detection workflows.",
    scope: ["Product design", "Strategy", "Design system"],
  },
  {
    client: "Oonsa Event WebApp",
    sector: "Events & ticketing",
    region: "Australia",
    status: "2025",
    description:
      "An event discovery and ticketing platform where people explore local experiences, buy tickets and manage their bookings.",
    scope: ["Product design", "UX", "UI"],
  },
  {
    client: "Computer Village Marketplace (CVMP)",
    sector: "B2B marketplace",
    region: "Nigeria",
    status: "2025",
    description:
      "A B2B classified marketplace connecting verified technology buyers, sellers, wholesalers and service providers, with listings, vendor management, messaging and transaction flows.",
    scope: ["UX research", "Prototyping", "Design system"],
  },
  {
    client: "Multiple Vendor Store (DAPSVERSE)",
    sector: "Commerce",
    region: "Nigeria",
    status: "2025",
    description:
      "A multi-vendor commerce platform with a mobile app and marketing site, covering vendor management, product listings, payments, orders and inventory.",
    scope: ["Mobile app", "Landing page", "UI design"],
  },
];

const approach = [
  {
    icon: Compass,
    title: "Design & Strategy",
    description:
      "We start with research and product strategy, mapping user needs and business goals before any screen is designed.",
    tags: ["User research", "Product strategy", "UX & UI design"],
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Clean, scalable code built with modern frameworks, so what ships matches what was designed.",
    tags: ["Modern frameworks", "Scalable code", "Design fidelity"],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We stay on after launch with monitoring, fixes and iteration, so the product keeps improving.",
    tags: ["Deployment", "Monitoring", "Ongoing iteration"],
  },
];

const values = [
  {
    icon: Trophy,
    title: "Quality over quantity",
    description:
      "Every project gets our full attention. We take on only what we can deliver to a high standard.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "Regular updates, honest timelines and plain-language documentation. No surprises.",
  },
  {
    icon: Users,
    title: "User-first thinking",
    description:
      "Good design starts with the people who will use it. Research and empathy drive our decisions.",
  },
  {
    icon: Layers,
    title: "Maintainable code",
    description:
      "Code that is easy to read, test and extend, built for the long term and not just the deadline.",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    icon: Monitor,
    description:
      "Fast, accessible interfaces that hold up from prototype to production traffic.",
    skills: [
      "React / Next.js",
      "React Native",
      "Flutter",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    icon: Database,
    description:
      "Reliable APIs and data infrastructure built for real-world load.",
    skills: [
      "Node.js",
      "Express",
      "Fast-Api",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    label: "Design",
    icon: PenTool,
    description:
      "Systems-driven design that stays consistent as a product grows.",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
  },
  {
    label: "Workflow",
    icon: Terminal,
    description:
      "Processes and tooling that keep delivery predictable, from commit to release.",
    skills: ["Git & CI/CD", "Agile / Scrum", "REST & GraphQL", "Python"],
  },
];

/* ═════════════ Page ═════════════ */
const About = () => {
  const primaryBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-sm active:scale-[0.98]";
  const ghostBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary active:scale-[0.98]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/1 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
          <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2 border-x border-border/70" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              <motion.h1
                variants={rise}
                className="font-display text-balance text-[2.5rem] font-black leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl"
              >
                A digital product studio businesses can rely on.
              </motion.h1>
              <motion.p
                variants={rise}
                className="mt-6 max-w-xl text-base leading-6 text-muted-foreground sm:text-lg sm:leading-7"
              >
                {COMPANY} brings product design and software engineering under
                one roof. For over four years we have helped startups and
                established brands plan, design, build and launch web and mobile
                products that look good and run well.
              </motion.p>
              <motion.div
                variants={rise}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link to="/contact" className={primaryBtn}>
                  Work with us <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ghostBtn}
                >
                  <LinkedInIcon className="h-4 w-4" /> Follow on LinkedIn
                </a>
              </motion.div>
            </motion.div>

            {/* Company fact sheet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-border bg-card/95 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <p className="font-display text-base font-bold text-foreground">
                    Our Company Info.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    At a glance.
                  </span>
                </div>
                <dl className="divide-y divide-border">
                  {facts.map((f) => (
                    <div
                      key={f.label}
                      className="grid grid-cols-[110px_1fr] gap-4 px-6 py-4 sm:grid-cols-[130px_1fr]"
                    >
                      <dt className="text-sm text-muted-foreground">
                        {f.label}
                      </dt>
                      <dd className="text-[15px] font-semibold leading-6 text-foreground">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-[110px_1fr] gap-4 px-6 py-4 sm:grid-cols-[130px_1fr]">
                    <dt className="text-sm text-muted-foreground">Follow us</dt>
                    <dd>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground underline-offset-4 hover:underline"
                      >
                        <LinkedInIcon className="h-4 w-4" /> {COMPANY} on
                        LinkedIn
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
            className="mt-16 grid grid-cols-2 border-t border-l border-border bg-card/60 backdrop-blur md:grid-cols-4"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border-r border-b border-border px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="font-display text-3xl font-extrabold leading-none tracking-tight text-foreground tabular-nums sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2.5 text-sm font-medium text-muted-foreground sm:text-base">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CLIENT MARQUEE ═══════════ */}
      <section
        aria-label="Companies we've worked with"
        className="border-y border-border bg-secondary/30 py-8 sm:py-10"
      >
        <p className="mb-6 text-center text-base font-medium text-muted-foreground">
          Trusted by growing teams and brands
        </p>
        <Marquee items={trustedBy} />
      </section>

      {/* ═══════════ WHO WE ARE ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              Who we are.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                {COMPANY} is a multidisciplinary team of designers and
                engineers. We work with founders and product teams who need a
                partner that can think through the problem, design the solution
                and build it properly.
              </p>
              <p>
                Because strategy, design and development sit in one team,
                nothing is lost between handoffs. What gets designed is what
                gets built, and the people who built it stay available after
                launch.
              </p>
              <p>
                We work remotely with clients across time zones, using regular
                check-ins and written updates so you always know where your
                project stands.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className={primaryBtn}>
                Explore our services <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className={ghostBtn}>
                See our work
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:col-span-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground">
                      <Icon className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-background" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-muted-foreground sm:text-base">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                  <Globe2 className="h-5 w-5 text-foreground" />
                </div>
                <p className="text-[15px] leading-7 text-foreground/85 sm:text-base">
                  Clients in Africa, Europe and Australia, served by a
                  remote-first team.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE DO (dark) ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            tone="dark"
            title="What we do."
            description="Five services that cover a product from first idea to a live, supported release."
            action={
              <Link
                to="/services"
                className="group inline-flex shrink-0 items-center gap-1.5 self-start border-b border-background/40 pb-0.5 text-sm font-semibold text-background transition-all hover:border-background md:self-auto"
              >
                View all services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i * 0.07}>
                  <div className="group h-full rounded-2xl border border-background/15 bg-background/[0.06] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-background/40">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-background/20 bg-background/10 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-background">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-background/75 sm:text-base">
                      {o.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ SELECTED ENGAGEMENTS ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="Selected client work."
            description="A look at the industries we have worked in and what we delivered for each client."
            action={
              <Link
                to="/projects"
                className="group inline-flex shrink-0 items-center gap-1.5 self-start border-b border-foreground/30 pb-0.5 text-sm font-semibold text-foreground transition-all hover:border-foreground md:self-auto"
              >
                View all projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-2">
            {engagements.map((e, i) => (
              <Reveal
                key={e.client}
                delay={(i % 2) * 0.08}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-sm sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {e.sector}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                      {e.region}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      {e.status === "Ongoing" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                      )}
                      {e.status}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug text-foreground sm:text-2xl">
                    {e.client}
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-muted-foreground sm:text-base">
                    {e.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {e.scope.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW WE WORK ═══════════ */}
      <section className="border-y border-border bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="How we work."
            description="Great products come from design and engineering working together. This is how a project moves from idea to launch."
          />
          <div className="relative">
            <div className="pointer-events-none absolute top-6 right-[10%] left-[10%] hidden h-px bg-border sm:block" />
            <div className="grid gap-5 sm:grid-cols-3">
              {approach.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal key={a.title} delay={i * 0.1}>
                    <div className="group relative">
                      <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background font-display text-sm font-extrabold text-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                        0{i + 1}
                      </div>
                      <div className="flex h-[calc(100%-4.25rem)] flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-foreground/25 group-hover:shadow-sm">
                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary">
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {a.title}
                        </h3>
                        <p className="mt-2 mb-6 flex-1 text-[15px] leading-7 text-muted-foreground sm:text-base">
                          {a.description}
                        </p>
                        <div className="flex flex-wrap gap-2 border-t border-border pt-5">
                          {a.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border bg-secondary/60 px-3 py-1 text-sm font-medium text-foreground/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid overflow-hidden border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="group h-full border-r border-b border-border p-6 transition-colors duration-300 hover:bg-secondary/50 sm:p-7">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground">
                      <Icon className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-background" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CAPABILITIES ═══════════ */}
      <section className="border-y border-border bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            title="Capabilities and tools."
            description="The technologies and disciplines we use to take products from first sketch to production."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.label} delay={(i % 2) * 0.08}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-sm sm:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground">
                        <Icon className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-background" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {g.label}
                      </h3>
                    </div>
                    <p className="mb-6 text-[15px] leading-7 text-muted-foreground sm:text-base">
                      {g.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm font-medium text-foreground/85"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-background/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-background/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-background/85">
                Available for new projects
              </span>
            </div>
            <h2 className="font-display text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Let's talk about your product.
            </h2>
            <p className="mx-auto mt-5 mb-10 max-w-lg text-base leading-7 text-background/75 sm:text-lg sm:leading-8">
              Tell us what you are building. We reply within 24 hours with a
              clear next step, or follow {COMPANY} on LinkedIn for company news.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.98]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-background/30 px-8 py-3.5 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:border-background/60 hover:bg-background/10 active:scale-[0.98] sm:w-auto"
                  >
                    <CalendarIcon className="h-4 w-4" /> Book a call
                  </button>
                }
              />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-background/30 px-8 py-3.5 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:border-background/60 hover:bg-background/10 active:scale-[0.98]"
              >
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
