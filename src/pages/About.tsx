import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";
import BookCallSheet from "@/components/BookCallSheet";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "UI/UX Design",
  "Responsive Design",
  "REST & GraphQL APIs",
  "Git & CI/CD",
  "Agile / Scrum",
];

const experience = [
  {
    role: "Lead Product Designer (PM) (VISA GUARD AFRICA TECHNOLOGIES LTD)",
    company: "Visa Guard Africa (VGA)",
    period: "Present",
    description:
      "Leading product design for startups and established brands. Creating user-centered designs, conducting user research, building prototypes, and delivering scalable design systems that drive business outcomes.",
  },
  {
    role: "Product Designer (CVMP)",
    company: "Tech Agency",
    period: "2025",
    description:
      "Designed intuitive interfaces for e-commerce, SaaS, and fintech products. Led user research sessions, created wireframes and high-fidelity prototypes, and collaborated with engineering to ensure design implementation.",
  },
  {
    role: "UI/UX Designer (DAPSTORE)",
    company: "Digital Studio",
    period: "2024 - 2025",
    description:
      "Started as a web designer creating marketing pages, quickly transitioned into product design roles. Built user flows, designed component libraries, and learned to code to better communicate with developers.",
  },
];

const values = [
  {
    title: "Quality Over Quantity",
    description:
      "Every project gets my full attention. I don't take on more than I can deliver at the highest standard.",
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, honest timelines, and clear documentation. No surprises, no jargon.",
  },
  {
    title: "User-First Thinking",
    description:
      "Good design starts with understanding the people who will use it. Research and empathy drive every decision.",
  },
  {
    title: "Clean, Maintainable Code",
    description:
      "Code that's easy to read, test, and extend. Built for the long term, not just the deadline.",
  },
];

const About = () => {
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
            <p className="text-sm font-small tracking-widest uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-foreground leading-tight mb-6">
            About Us.
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              We are a multidisciplinary creative team with over 4 years of experience 
              bridging the gap between design and development. We collaborate with startups 
              and established brands to craft digital products that are both visually compelling and technically robust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Our approach combines design thinking with clean, maintainable
                  code. We believe great products emerge when aesthetics and
                  engineering work in harmony not in opposition.
                </p>
                <p>
                  Every pixel has a purpose, every line of code tells a story. We
                  focus on creating digital experiences that not only look
                  beautiful but perform flawlessly under real-world conditions.
                </p>
                <p>
                  Whether it's a complex web application, a brand identity, or a
                  product prototype, we bring the same level of care and
                  craftsmanship to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-12">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground border border-border px-4 py-2 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
                Education
              </h3>
              <div className="border border-border rounded-lg p-6">
                <p className="font-semibold text-foreground">
                  FULL-STACK WEB DEVELOPMENT
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Lagos state school of programming
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 mt-4">
                <p className="font-semibold text-foreground">
                  SOFTWARE DEVELOPMENT
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  University of the People · Present
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Experience
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Work History
            </h2>
          </motion.div>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-border py-8 first:pt-0 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Values
            </p>
            <h2 className="font-display text-4xl text-foreground font-extrabold">
              How We Work
            </h2>
          </motion.div>

          <StackingCards offset={20} top={100}>
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded-lg p-8 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4 font-extrabold">
            Interested in working together?
          </h2>
          <p className="text-primary-foreground/60 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
            >
              Get in Touch
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

export default About;
