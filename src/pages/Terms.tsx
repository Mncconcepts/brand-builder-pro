import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-20" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Legal
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-6xl lg:text-6xl text-balance font-extrabold tracking-tighter leading-[0.95] mb-4">
              Terms & Privacy.
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-3">
              The terms that govern our design and development services, and how
              we handle information collected through this website.
            </p>
            <p className="text-xs text-muted-foreground/70 font-medium">
              Last updated: {LAST_UPDATED}
            </p>
          </motion.div>

          {/* Disclaimer callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 flex items-start gap-3 rounded-xl border border-border bg-secondary/40 px-5 py-4 max-w-2xl"
          >
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              This page is a general template for a design and development
              studio. It's a starting point, not legal advice have it reviewed
              by a qualified professional for your jurisdiction before
              publishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DOCUMENT TABS ── */}
      <section className="pt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex border border-border rounded-xl bg-card p-1 gap-1">
            {(Object.keys(docs) as DocKey[]).map((key) => {
              const doc = docs[key];
              const Icon = doc.icon;
              const active = activeDoc === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDoc(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {doc.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT BODY ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Mobile scroll-spy strip */}
          <div className="lg:hidden -mx-6 px-6 mb-10 overflow-x-auto">
            <div className="flex gap-2 w-max pb-1">
              {sections.map((s, i) => {
                const active = activeSectionId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <span className={active ? "opacity-70" : "opacity-40"}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
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
                  {docs[activeDoc].label}
                </p>
                <div className="flex flex-col">
                  {sections.map((s, i) => {
                    const active = activeSectionId === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className={`text-left flex items-start gap-3 py-3 pl-4 border-l-2 transition-colors ${
                          active
                            ? "border-foreground"
                            : "border-border/60 hover:border-foreground/30"
                        }`}
                      >
                        <span
                          className={`font-display text-xs mt-0.5 shrink-0 tabular-nums transition-colors ${
                            active
                              ? "text-foreground"
                              : "text-muted-foreground/40"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-sm font-semibold leading-snug transition-colors ${
                            active ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {s.title}
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
                    Questions? Contact us{" "}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
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
                  className={`scroll-mt-28 py-10 ${
                    idx !== 0 ? "border-t border-border/60" : "pt-0"
                  }`}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display text-sm font-bold text-primary tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      {s.title}
                    </h2>
                  </div>

                  <div className="max-w-2xl space-y-4">
                    {s.blocks.map((block, bIdx) =>
                      block.type === "p" ? (
                        <p
                          key={bIdx}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {block.text}
                        </p>
                      ) : (
                        <ul key={bIdx} className="space-y-2.5">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="w-1 h-1 rounded-full bg-foreground/40 mt-2 shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ),
                    )}
                  </div>
                </motion.article>
              ))}

              {/* Closing contact note */}
              <div className="mt-4 pt-10 border-t border-border/60">
                <div className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-base text-balance font-bold text-foreground mb-1">
                      Have a question about these terms?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We're happy to clarify anything before you start a project
                      with us.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-bold rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shrink-0"
                  >
                    Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
