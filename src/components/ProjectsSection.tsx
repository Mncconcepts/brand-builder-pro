import { motion } from "framer-motion";

const projects = [
  {
    title: "Computer Village Marketplace",
    category: "Web Development · UI/UX Design",
    description:
      "Designed and developed a fully responsive digital marketplace for Computer Village — Nigeria's largest technology hub. The platform features vendor storefronts, real-time product listings, smart search and filtering, secure checkout, and an admin dashboard for inventory and order management. Built to bridge the gap between Lagos' offline tech market and a modern online shopping experience.",
    year: "2024",
    color: "bg-secondary",
  },
  {
    title: "Event Planner Management System",
    category: "Product Design · Web Application",
    description:
      "End-to-end design and development of an event planning management platform that streamlines the full event lifecycle — from client briefs and vendor coordination to budget tracking, guest management, and post-event reporting. Features an intuitive dashboard for planners, real-time collaboration tools, automated reminders, and a client-facing portal for seamless communication and approvals.",
    year: "2024",
    color: "bg-card",
  },
  {
    title: "Visa Guard Africa Technologies",
    category: "Product Management · Design & Development",
    description:
      "Led product management, design, and development for Visa Guard Africa — a platform simplifying visa processing and travel documentation across the African continent. Responsibilities spanned end-to-end product strategy, UX research, high-fidelity UI design, and frontend development. Delivered a secure, user-friendly application with document verification, real-time application tracking, and a multi-country visa eligibility engine.",
    year: "2023",
    color: "bg-secondary",
  },
  {
    title: "Muntipe vendor store- Dapstore",
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
