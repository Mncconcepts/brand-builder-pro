import { motion } from "framer-motion";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Web Developer & Product Designer
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6">
            Crafting digital
            <br />
            <span className="italic text-accent">experiences</span>
            <br />
            that matter.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
            With 4 years of experience building modern web applications and designing 
            products that users love. From concept to code, I bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block bg-foreground text-background px-7 py-3 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block border border-border text-foreground px-7 py-3 text-sm font-medium rounded-sm hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={heroImage}
              alt="Abstract design composition"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stats overlay */}
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 rounded-sm shadow-sm">
            <p className="font-display text-3xl font-semibold text-foreground">4+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
