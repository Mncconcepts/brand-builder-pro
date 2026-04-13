import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development · UI Design",
    description:
      "A full-featured e-commerce platform with seamless checkout, real-time inventory, and a custom CMS for product management.",
    year: "2024",
    color: "bg-secondary",
  },
  {
    title: "SaaS Dashboard",
    category: "Product Design · Frontend",
    description:
      "Analytics dashboard for a B2B SaaS product. Complex data visualizations made intuitive through thoughtful design and interaction patterns.",
    year: "2024",
    color: "bg-card",
  },
  {
    title: "Brand Identity System",
    category: "Design System · Branding",
    description:
      "Comprehensive design system including component library, typography guidelines, and brand assets for a fintech startup.",
    year: "2023",
    color: "bg-secondary",
  },
  {
    title: "Mobile Banking App",
    category: "UI/UX Design · Prototype",
    description:
      "End-to-end design for a mobile banking experience. User research, wireframes, and high-fidelity prototypes tested with real users.",
    year: "2023",
    color: "bg-card",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Projects
          </p>
          <h2 className="font-display text-4xl font-semibold text-foreground">
            Selected <span className="italic">work</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid lg:grid-cols-[1fr_2fr] gap-8 border border-border rounded-sm p-6 lg:p-8 hover:border-accent/30 transition-colors cursor-pointer"
            >
              {/* Project image placeholder */}
              <div className={`${project.color} aspect-[16/10] rounded-sm flex items-center justify-center`}>
                <span className="font-display text-3xl font-semibold text-muted-foreground/30">
                  {project.year}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {project.description}
                </p>
                <span className="inline-block mt-5 text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 self-start group-hover:border-accent group-hover:text-accent transition-colors">
                  View Case Study
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
