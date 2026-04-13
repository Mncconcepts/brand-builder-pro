import { motion } from "framer-motion";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "UI/UX Design",
  "Responsive Design",
  "REST & GraphQL APIs",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_1.5fr] gap-16"
        >
          {/* Left */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              About
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground leading-tight">
              Designer who codes,
              <br />
              developer who <span className="italic text-accent">designs</span>.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a multidisciplinary creative who bridges the gap between design and 
              development. Over the past 4 years, I've worked with startups and established 
              brands to craft digital products that are both visually compelling and 
              technically robust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines design thinking with clean, maintainable code. I believe 
              great products emerge when aesthetics and engineering work in harmony — not 
              in opposition. Every pixel has a purpose, every line of code tells a story.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <p className="text-sm font-medium text-foreground mb-4">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground border border-border px-4 py-1.5 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
