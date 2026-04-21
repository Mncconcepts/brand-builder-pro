import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";

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
    role: "Lead Product Designer (VISA GUARD AFRICA TECHNOLOGIES LTD)",
    company: "Mncconcepts",
    period: "2022 – Present",
    description:
      "Leading product design for startups and established brands. Creating user-centered designs, conducting user research, building prototypes, and delivering scalable design systems that drive business outcomes.",
  },
  {
    role: "Product Designer (CVMP)",
    company: "Tech Agency",
    period: "2021 – 2022",
    description:
      "Designed intuitive interfaces for e-commerce, SaaS, and fintech products. Led user research sessions, created wireframes and high-fidelity prototypes, and collaborated with engineering to ensure design implementation.",
  },
  {
    role: "UI/UX Designer (DAPSTORE)",
// ... keep existing code
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Values
            </p>
            <h2 className="font-display text-4xl text-foreground font-extrabold">
              How I <span className="italic">Work</span>
            </h2>
          </motion.div>
// ... keep existing code
      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4 font-extrabold">
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
