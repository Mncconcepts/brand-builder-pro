import { motion } from "framer-motion";
import { useState, FormEvent, useRef } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const budget = budgetRef.current?.value || "";
    const message = messageRef.current?.value || "";

    setSubmitting(true);
    toast.loading("Sending your message...", { id: "contact-form" });
    await new Promise((r) => setTimeout(r, 400));

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ABudget: ${budget}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.open(
      `mailto:clintonnweze111@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`,
      "_self",
    );

    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message ready to send! Your email client should open now.", {
      id: "contact-form",
    });
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
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Have a project in mind or want to discuss a potential
              collaboration? I'd love to hear from you. Fill out the form below
              or reach out directly.
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
                  <a
                    href="mailto:clintonnweze111@gmail.com"
                    className="text-foreground font-medium hover:text-muted-foreground transition-colors"
                  >
                    clintonnweze111@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <a
                    href="tel:+2349020495756"
                    className="text-foreground font-medium hover:text-muted-foreground transition-colors"
                  >
                    +234 902 049 5756
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">
                    Available Worldwide · Remote
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Availability</p>
                  <p className="text-foreground font-medium">
                    Currently accepting new projects
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Follow Me
                </p>
                <div className="flex gap-4 text-sm">
                  {["GitHub", "LinkedIn", "Twitter", "Facebook"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <BookCallSheet
                  trigger={
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Book A Call Session
                    </button>
                  }
                />
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
                    Thank you for reaching out. I'll review your message and get
                    back to you within 24-48 hours.
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
                        ref={nameRef}
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
                        ref={emailRef}
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
                      ref={subjectRef}
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Budget Range
                    </label>
                    <select
                      ref={budgetRef}
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a range</option>
                      <option>$500 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000 - $10,000</option>
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
                      ref={messageRef}
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Message"}
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
              FAQs
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
