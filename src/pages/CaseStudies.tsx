import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";

const caseStudies = [
  {
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "RetailCo",
    industry: "E-Commerce",
    duration: "12 Weeks",
    year: "2024",
    summary:
      "A complete redesign and rebuild of a legacy e-commerce platform, resulting in a 40% increase in conversion rates and 60% improvement in page load times.",
    challenge:
      "The client's existing platform was built on outdated technology with poor mobile experience. Cart abandonment was at 78% and page load times averaged 6 seconds.",
    solution:
      "Built a modern React-based storefront with server-side rendering, optimized checkout flow, and real-time inventory management. Implemented a component-driven design system for consistency.",
    results: [
      { metric: "Conversion Rate", value: "+40%" },
      { metric: "Page Load Time", value: "1.2s" },
      { metric: "Cart Abandonment", value: "-35%" },
      { metric: "Mobile Revenue", value: "+65%" },
    ],
    tech: ["React", "Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "DataFlow Inc.",
    industry: "B2B SaaS",
    duration: "8 Weeks",
    year: "2024",
    summary:
      "Designed and developed a real-time analytics dashboard that simplified complex data into actionable insights, reducing user onboarding time by 50%.",
    challenge:
      "Users were overwhelmed by the volume of data and couldn't find the metrics that mattered. The existing interface required extensive training to navigate.",
    solution:
      "Conducted user research to identify key workflows, then designed an intuitive dashboard with customizable widgets, smart defaults, and guided onboarding flows.",
    results: [
      { metric: "Onboarding Time", value: "-50%" },
      { metric: "Daily Active Users", value: "+80%" },
      { metric: "Support Tickets", value: "-45%" },
      { metric: "NPS Score", value: "72" },
    ],
    tech: ["React", "TypeScript", "D3.js", "WebSocket", "Figma"],
  },
  {
    slug: "fintech-design-system",
    title: "Fintech Design System",
    client: "PaySecure",
    industry: "Fintech",
    duration: "16 Weeks",
    year: "2023",
    summary:
      "Created a comprehensive design system and component library that unified the product experience across 4 applications and reduced design-to-dev handoff time by 70%.",
    challenge:
      "Four product teams working independently with inconsistent UI patterns, duplicated components, and no shared design language. Design debt was slowing feature delivery.",
    solution:
      "Audited all existing interfaces, established design tokens, built a Storybook-powered component library, and created documentation for designers and developers.",
    results: [
      { metric: "Handoff Time", value: "-70%" },
      { metric: "UI Consistency", value: "95%" },
      { metric: "Dev Velocity", value: "+40%" },
      { metric: "Components", value: "120+" },
    ],
    tech: ["Figma", "React", "Storybook", "CSS Variables", "Jest"],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Case Studies
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-foreground leading-tight mb-6">
              Results That <span className="italic">Speak</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              In-depth look at select projects — the challenges, the process, and
              the measurable outcomes delivered for each client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-10">
          {caseStudies.map((cs, idx) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
            >
              {/* Top bar */}
              <div className="bg-secondary/50 border-b border-border px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cs.client} · {cs.industry} · {cs.duration}
                  </p>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {cs.year}
                </span>
              </div>

              <div className="p-8 lg:p-10 space-y-10">
                {/* Summary */}
                <p className="text-foreground leading-relaxed text-lg max-w-3xl">
                  {cs.summary}
                </p>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Want similar results?
          </h2>
          <p className="text-primary-foreground/60 mb-8">
            Let's discuss how I can deliver measurable impact for your business.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
            >
              Start a Conversation
            </Link>
            <BookCallSheet
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book A Call Session
                </button>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
