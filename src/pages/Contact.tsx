import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Most projects take between 2-8 weeks depending on scope. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work with clients worldwide and am comfortable with remote collaboration across time zones.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Primarily React, TypeScript, Node.js, and modern CSS frameworks. I also work with Figma for design and various backend technologies.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes, I offer maintenance packages to keep your project updated, secure, and running smoothly after launch.",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contact
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-foreground leading-tight mb-6">
              Let's work <span className="italic">together</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Have a project in mind or want to discuss a potential collaboration? 
              I'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 text-sm mb-12">
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <a href="mailto:hello@yourdomain.com" className="text-foreground font-medium hover:text-muted-foreground transition-colors">
                    hello@yourdomain.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-foreground font-medium hover:text-muted-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Available Worldwide · Remote</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Availability</p>
                  <p className="text-foreground font-medium">Currently accepting new projects</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Follow Me
                </p>
                <div className="flex gap-4 text-sm">
                  {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((s) => (
                    <a key={s} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {submitted ? (
                <div className="bg-card border border-border rounded-lg p-12 text-center">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    Message sent successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll review your message and get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project inquiry"
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Budget Range
                    </label>
                    <select className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a range</option>
                      <option>Under $2,500</option>
                      <option>$2,500 – $5,000</option>
                      <option>$5,000 – $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              FAQ
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Common <span className="italic">questions</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-border py-6"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
