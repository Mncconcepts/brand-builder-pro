import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks. Clean architecture, responsive layouts, and performant code that scales.",
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "End-to-end product design from research and wireframing to high-fidelity prototypes. User-centered design that drives engagement.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and seamless user experiences. Design systems, component libraries, and interaction design that feels natural.",
  },
  {
    number: "04",
    title: "Design Consulting",
    description:
      "Strategic design guidance for teams and products. Audits, design reviews, and actionable recommendations to elevate your digital presence.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Services
          </p>
          <h2 className="font-display text-4xl font-semibold text-foreground">
            What I <span className="italic">do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 lg:p-10 group hover:bg-secondary/30 transition-colors"
            >
              <span className="text-xs font-medium text-accent tracking-wider">
                {service.number}
              </span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-3 mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
