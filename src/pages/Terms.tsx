import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ShieldCheck, Info, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COMPANY_NAME = "mncconcepts";
const GOVERNING_LAW = "Nigeria";
const LAST_UPDATED = "September 3, 2026";

type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

type LegalSection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

const p = (text: string): ContentBlock => ({ type: "p", text });
const list = (items: string[]): ContentBlock => ({ type: "list", items });

const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    blocks: [
      p(
        `These Terms of Service ("Terms") govern your access to and use of this website and any design or development services provided by ${COMPANY_NAME} ("we", "us", "our"). By browsing this website, submitting a project inquiry, or engaging our services, you agree to be bound by these Terms.`,
      ),
      p(
        "If you do not agree with any part of these Terms, please do not use this website or engage our services.",
      ),
    ],
  },
  {
    id: "services",
    title: "Our Services",
    blocks: [
      p("Depending on the engagement, our services may include:"),
      list([
        "UI/UX and product design",
        "Website and application development",
        "Brand identity and design systems",
        "Ongoing support, maintenance, and consulting",
      ]),
      p(
        'The specific scope, deliverables, timeline, and fees for a project are defined in a separate written proposal or agreement (a "Project Agreement") accepted by both parties before work begins. These Terms apply alongside, and do not replace, that agreement.',
      ),
    ],
  },
  {
    id: "process",
    title: "Project Process & Timelines",
    blocks: [
      p(
        "Project timelines are estimates based on the scope agreed at the start of an engagement. Timelines may shift due to delayed feedback, incomplete materials, scope changes, or circumstances outside our reasonable control. We'll communicate any material delay as soon as we're aware of it.",
      ),
    ],
  },
  {
    id: "payment",
    title: "Fees & Payment",
    blocks: [
      p(
        "Fees are outlined in the Project Agreement for each engagement. Unless otherwise stated:",
      ),
      list([
        "An upfront deposit is required before work begins",
        "The remaining balance is due at agreed milestones or on completion",
        "Late payments may pause active work until resolved",
        "Fees are exclusive of applicable taxes unless stated otherwise",
      ]),
    ],
  },
  {
    id: "revisions",
    title: "Revisions & Change Requests",
    blocks: [
      p(
        "Each Project Agreement includes a defined number of revision rounds. Requests beyond the agreed scope, or changes made after a phase has already been approved, may be treated as a separate change request and billed at our standard rate.",
      ),
    ],
  },
  {
    id: "responsibilities",
    title: "Client Responsibilities",
    blocks: [
      p(
        "Timely delivery depends on the client's participation throughout the project. This includes:",
      ),
      list([
        "Providing accurate content, brand assets, and account access when needed",
        "Giving timely feedback at each review stage",
        "Approving deliverables and milestones within a reasonable timeframe",
      ]),
      p(
        "Delays in any of the above may extend the project timeline accordingly.",
      ),
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    blocks: [
      p(
        "Upon full and final payment, ownership of the final approved deliverables transfers to the client, with the following exceptions:",
      ),
      list([
        "Pre-existing tools, frameworks, code libraries, or internal design systems we owned before the engagement",
        "Third-party assets, fonts, stock imagery, or licensed software used in the project, which remain subject to their original licenses",
      ]),
      p(
        "We retain the right to display completed work in our portfolio and marketing materials, unless the client requests otherwise in writing under a confidentiality agreement.",
      ),
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Tools & Licenses",
    blocks: [
      p(
        "Projects may rely on third-party platforms, libraries, plugins, hosting providers, or paid tools. Unless otherwise agreed, the client is responsible for any ongoing subscription or licensing costs associated with these after project handoff.",
      ),
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    blocks: [
      p(
        "Both parties agree to keep confidential any non-public business, technical, or financial information shared during the engagement, and to use it only for the purposes of the project.",
      ),
    ],
  },
  {
    id: "warranties",
    title: "Warranties & Disclaimers",
    blocks: [
      p(
        'We aim to deliver work to a high professional standard. Except as expressly agreed in writing, services and deliverables are provided "as is" without warranties of any kind, express or implied, including any warranty of fitness for a particular purpose.',
      ),
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      p(
        "To the fullest extent permitted by law, our total liability arising from an engagement is limited to the total fees paid by the client for the project giving rise to the claim. We are not liable for indirect, incidental, or consequential damages, including loss of profits or data.",
      ),
    ],
  },
  {
    id: "termination",
    title: "Termination",
    blocks: [
      p(
        "Either party may terminate an engagement with written notice as specified in the Project Agreement. Upon termination, the client remains responsible for payment for all work completed up to the termination date.",
      ),
    ],
  },
  {
    id: "law",
    title: "Governing Law",
    blocks: [
      p(
        `These Terms are governed by the laws of ${GOVERNING_LAW}, without regard to its conflict of law principles.`,
      ),
    ],
  },
  {
    id: "changes-terms",
    title: "Changes to These Terms",
    blocks: [
      p(
        "We may update these Terms from time to time. Continued use of our services or this website after changes take effect constitutes acceptance of the revised Terms.",
      ),
    ],
  },
];

const privacySections: LegalSection[] = [
  {
    id: "intro",
    title: "Introduction",
    blocks: [
      p(
        `This Privacy Policy explains how ${COMPANY_NAME} ("we", "us", "our") collects, uses, and protects information when you visit this website or engage our services.`,
      ),
    ],
  },
  {
    id: "collect",
    title: "Information We Collect",
    blocks: [
      p("We may collect the following types of information:"),
      list([
        "Details you provide directly, such as your name, email address, company, and project brief, through contact forms or booking tools",
        "Technical information collected automatically, such as browser type, device information, and general usage data, through analytics tools",
      ]),
    ],
  },
  {
    id: "use",
    title: "How We Use Your Information",
    blocks: [
      p(
        "We use collected information to respond to inquiries, prepare proposals, deliver services, communicate about ongoing projects, and improve this website. We do not sell personal information to third parties.",
      ),
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    blocks: [
      p(
        "This website may use cookies or similar technologies to understand how visitors use the site and to improve the browsing experience. You can manage or disable cookies through your browser settings at any time.",
      ),
    ],
  },
  {
    id: "sharing",
    title: "Data Sharing",
    blocks: [
      p(
        "We may share information with trusted third-party service providers who help us operate our business such as hosting, scheduling, or analytics providers only to the extent necessary for them to perform their services. We do not share your information with third parties for their own marketing purposes.",
      ),
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    blocks: [
      p(
        "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, or resolve disputes.",
      ),
    ],
  },
  {
    id: "security",
    title: "Data Security",
    blocks: [
      p(
        "We take reasonable technical and organizational measures to protect information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      ),
    ],
  },
  {
    id: "rights",
    title: "Your Rights",
    blocks: [
      p(
        "Depending on your location, you may have rights to access, correct, or request deletion of your personal information, or to object to certain processing. You can exercise these rights by reaching out through our contact page.",
      ),
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    blocks: [
      p(
        "This website and our services are not directed at children under 16, and we do not knowingly collect personal information from children.",
      ),
    ],
  },
  {
    id: "changes-privacy",
    title: "Changes to This Policy",
    blocks: [
      p(
        'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision.',
      ),
    ],
  },
];

type DocKey = "terms" | "privacy";

const docs: Record<
  DocKey,
  { label: string; icon: typeof FileText; sections: LegalSection[] }
> = {
  terms: { label: "Terms of Service", icon: FileText, sections: termsSections },
  privacy: {
    label: "Privacy Policy",
    icon: ShieldCheck,
    sections: privacySections,
  },
};

const Terms = () => {
  const [activeDoc, setActiveDoc] = useState<DocKey>("terms");
  const [activeSectionId, setActiveSectionId] = useState(termsSections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sections = docs[activeDoc].sections;

  // Reading progress for the thin bar at the top of the page
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Progress through the current document's sections (sidebar)
  const activeIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === activeSectionId),
  );

  useEffect(() => {
    setActiveSectionId(sections[0].id);
  }, [activeDoc]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) setActiveSectionId(id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeDoc]);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progressX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
      />

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/1 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
          <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2 border-x border-border/70" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Legal
              </span>
            </div>

            <h1 className="font-display mb-4 text-balance text-5xl font-extrabold leading-[0.98] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
              Terms & Privacy.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The terms that govern our design and development services, and how
              we handle information collected through this website.
            </p>
          </motion.div>

          {/* Document facts */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-border"
          >
            {[
              { k: "Last updated", v: LAST_UPDATED },
              { k: "Governing law", v: GOVERNING_LAW },
              {
                k: "Sections",
                v: `${sections.length} in ${docs[activeDoc].label}`,
              },
            ].map((f, i) => (
              <div
                key={f.k}
                className={`px-6 py-5 ${i !== 0 ? "border-t border-border sm:border-t-0" : ""}`}
              >
                <dt className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {f.k}
                </dt>
                <dd className="text-base font-semibold text-foreground">
                  {f.v}
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* Disclaimer callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            role="note"
            className="mt-4 flex max-w-3xl items-start gap-3 rounded-xl border border-border border-l-4 border-l-primary bg-secondary/40 px-5 py-4"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
            <p className="text-sm leading-relaxed text-foreground/80">
              This page is a general template for a design and development
              studio. It's a starting point, not legal advice have it reviewed
              by a qualified professional for your jurisdiction before
              publishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DOCUMENT TABS ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div
            role="tablist"
            aria-label="Legal documents"
            className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {(Object.keys(docs) as DocKey[]).map((key) => {
              const doc = docs[key];
              const Icon = doc.icon;
              const active = activeDoc === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveDoc(key)}
                  className={`relative -mb-px flex shrink-0 items-center gap-2.5 border-b-2 px-5 py-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    active
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {doc.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold leading-none tabular-nums ${
                      active
                        ? "bg-foreground text-background"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {doc.sections.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT BODY ── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Mobile section strip */}
          <div className="lg:hidden sticky top-16 z-30 -mx-6 mb-8 overflow-x-auto border-b border-border bg-background/90 px-6 py-3 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2">
              {sections.map((s, i) => {
                const active = activeSectionId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`tabular-nums ${active ? "opacity-80" : "opacity-60"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-14 lg:grid-cols-12">
            {/* Sticky index — desktop only */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    On this page
                  </p>
                  <p className="text-xs font-semibold tabular-nums text-muted-foreground">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(sections.length).padStart(2, "0")}
                  </p>
                </div>

                {/* Section progress */}
                <div className="mb-5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-foreground transition-all duration-300"
                    style={{
                      width: `${((activeIndex + 1) / sections.length) * 100}%`,
                    }}
                  />
                </div>

                <nav
                  aria-label={`${docs[activeDoc].label} sections`}
                  className="flex flex-col gap-0.5"
                >
                  {sections.map((s, i) => {
                    const active = activeSectionId === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        aria-current={active ? "true" : undefined}
                        className={`flex items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                          active ? "bg-secondary" : "hover:bg-secondary/60"
                        }`}
                      >
                        <span
                          className={`font-display mt-px shrink-0 text-sm tabular-nums transition-colors ${
                            active
                              ? "font-bold text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-sm leading-snug transition-colors ${
                            active
                              ? "font-semibold text-foreground"
                              : "font-medium text-muted-foreground"
                          }`}
                        >
                          {s.title}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-8 border-t border-border pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-all hover:gap-2.5"
                  >
                    Questions? Contact us{" "}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <div className="mb-8">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  {docs[activeDoc].label}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Last updated {LAST_UPDATED}
                </p>
              </div>

              <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {sections.map((s, idx) => (
                  <motion.article
                    key={s.id}
                    id={s.id}
                    data-id={s.id}
                    ref={(el) => {
                      sectionRefs.current[s.id] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="scroll-mt-28 px-6 py-8 sm:px-10 sm:py-10"
                  >
                    <div className="sm:grid sm:grid-cols-[3.5rem_1fr] sm:gap-x-4">
                      <span className="font-display mb-2 block text-sm font-bold tabular-nums text-primary sm:mb-0 sm:pt-1.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-display mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                          {s.title}
                        </h3>

                        <div className="max-w-2xl space-y-4">
                          {s.blocks.map((block, bIdx) =>
                            block.type === "p" ? (
                              <p
                                key={bIdx}
                                className="text-base leading-7 text-foreground/80"
                              >
                                {block.text}
                              </p>
                            ) : (
                              <ul
                                key={bIdx}
                                className="space-y-3 rounded-xl border border-border bg-background px-5 py-4"
                              >
                                {block.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span className="text-base leading-7 text-foreground/80">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Closing contact note */}
              <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-border bg-secondary/40 p-6 sm:flex-row sm:items-center sm:p-8">
                <div>
                  <h3 className="font-display mb-1 text-balance text-lg font-bold text-foreground">
                    Have A Question About These Terms?
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    We're happy to clarify anything before you start a project
                    with us.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Get in Touch <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
