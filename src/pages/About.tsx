import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    role: "Senior Web Developer & Designer",
    company: "Freelance",
    period: "2022 – Present",
    description:
      "Working with startups and established businesses to build scalable web applications and design systems. Leading end-to-end product development from research to deployment.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Agency",
    period: "2021 – 2022",
    description:
      "Built responsive, high-performance web applications for clients across e-commerce, SaaS, and fintech industries. Collaborated with design and backend teams.",
  },
  {
    role: "Junior Developer & Designer",
    company: "Digital Studio",
    period: "2020 – 2021",
    description:
      "Started career building WordPress sites and marketing pages. Quickly transitioned into React development and product design roles.",
  },
];

const values = [
  {
    title: "Quality Over Quantity",
    description: "Every project gets my full attention. I don't take on more than I can deliver at the highest standard.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, honest timelines, and clear documentation. No surprises, no jargon.",
  },
  {
    title: "User-First Thinking",
    description: "Good design starts with understanding the people who will use it. Research and empathy drive every decision.",
  },
  {
    title: "Clean, Maintainable Code",
    description: "Code that's easy to read, test, and extend. Built for the long term, not just the deadline.",
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
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              About Me
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-foreground leading-tight mb-6">
              Designer who codes,
              <br />
              developer who <span className="italic">designs</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm a multidisciplinary creative with over 4 years of experience bridging the gap 
              between design and development. I work with startups and established brands to 
              craft digital products that are visually compelling and technically robust.
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
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                My <span className="italic">approach</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My approach combines design thinking with clean, maintainable code. I believe 
                  great products emerge when aesthetics and engineering work in harmony — not 
                  in opposition.
                </p>
                <p>
                  Every pixel has a purpose, every line of code tells a story. I focus on creating 
                  digital experiences that not only look beautiful but perform flawlessly under real-world conditions.
                </p>
                <p>
                  Whether it's a complex web application, a brand identity, or a product prototype, 
                  I bring the same level of care and craftsmanship to every project.
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
                <p className="font-semibold text-foreground">B.Sc. Computer Science</p>
                <p className="text-sm text-muted-foreground mt-1">University Name · 2016 – 2020</p>
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
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Work <span className="italic">history</span>
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
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
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
            <h2 className="font-display text-4xl font-semibold text-foreground">
              How I <span className="italic">work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-primary-foreground/60 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
