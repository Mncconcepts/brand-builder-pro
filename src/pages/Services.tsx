import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks. Clean architecture, responsive layouts, and performant code that scales with your business.",
    features: ["React / Next.js", "TypeScript", "API Integration", "Performance Optimization"],
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "End-to-end product design from research and wireframing to high-fidelity prototypes. User-centered design that drives engagement and conversion.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and seamless user experiences. Design systems, component libraries, and interaction design that feels natural and delightful.",
    features: ["Interface Design", "Design Systems", "Interaction Design", "Accessibility"],
  },
  {
    number: "04",
    title: "Design Consulting",
    description:
      "Strategic design guidance for teams and products. Audits, design reviews, and actionable recommendations to elevate your digital presence.",
    features: ["Design Audits", "Team Mentoring", "Brand Strategy", "Process Optimization"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business, goals, target audience, and technical requirements through in-depth consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Defining scope, creating project timelines, wireframes, and establishing the technical architecture.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Iterative design and development with regular check-ins to ensure alignment with your vision.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Thorough testing, deployment, and ongoing support to ensure your product thrives post-launch.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "From $2,500",
    description: "Perfect for small businesses needing a professional web presence.",
    features: ["Single page website", "Responsive design", "Basic SEO", "1 round of revisions", "2 week delivery"],
  },
  {
    name: "Professional",
    price: "From $5,000",
    description: "For growing businesses that need a comprehensive digital solution.",
    features: ["Multi-page website", "Custom design", "Advanced SEO", "CMS integration", "3 rounds of revisions", "4 week delivery"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex projects requiring full-stack development and design.",
    features: ["Web application", "Custom features", "API integration", "Design system", "Ongoing support", "Timeline TBD"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Services
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-foreground leading-tight mb-6">
              Solutions tailored to
              <br />
              your <span className="italic">needs</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From concept to launch, I provide end-to-end services that cover every aspect of 
              building successful digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 lg:p-10"
              >
                <span className="text-xs font-semibold text-muted-foreground tracking-wider">
                  {service.number}
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground mt-3 mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-foreground rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Process
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              How it <span className="italic">works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-display text-5xl font-bold text-border">{p.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Pricing
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Investment <span className="italic">tiers</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Transparent pricing to match your project scope. Every engagement includes a detailed proposal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-lg p-8 ${
                  tier.featured
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border"
                }`}
              >
                <h3 className="font-display text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="font-display text-3xl font-bold mb-3">{tier.price}</p>
                <p className={`text-sm mb-6 leading-relaxed ${tier.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-center gap-2 ${
                        tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full ${tier.featured ? "bg-primary-foreground" : "bg-foreground"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center text-sm font-medium py-3 rounded-md transition-colors ${
                    tier.featured
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
