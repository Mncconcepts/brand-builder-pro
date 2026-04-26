import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";
import { toast } from "sonner";
import { useForm } from "@formspree/react";
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

// Define your social media links here
const socials = [
  { name: "GitHub", url: "https://github.com/Mncconcepts" },
  { name: "LinkedIn", url: "https://linkedin.com/in/miracle-nweze-52aab330b" },
  { name: "Facebook", url: "https://facebook.com/miracle.nweze.524" },
];

const Contact = () => {
  // Formspree Integration
  const [state, handleSubmit] = useForm("xqewyonl");
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  // Handle toast notifications based on Formspree state
  useEffect(() => {
    if (state.submitting) {
      toast.loading("Sending your message...", { id: "contact-form" });
    }

    if (state.succeeded) {
      toast.success("Message sent successfully!", { id: "contact-form" });
      setIsSuccessfullySubmitted(true);
    }

    if (state.errors) {
      toast.error("Failed to send message. Please try again.", {
        id: "contact-form",
      });
    }
  }, [state.submitting, state.succeeded, state.errors]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight mb-3">
              Contact Us
              <br className="hidden sm:block" />
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Have a project in mind or want to discuss a potential
              collaboration? we would love to hear from you. Fill out the form below
              or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-20 pt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xm font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary rounded-lg text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:clintonnweze111@gmail.com"
                        className="text-foreground text-sm font-medium hover:text-primary transition-colors "
                      >
                        clintonnweze111@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary rounded-lg text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+2349020495756"
                        className="text-foreground font-medium hover:text-primary transition-colors text-sm"
                      >
                        +234 902 049 5756
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary rounded-lg text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Location
                      </p>
                      <p className="text-foreground font-medium text-sm">
                        Available Worldwide · Remote
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary rounded-lg text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Availability
                      </p>
                      <p className="text-foreground font-medium text-sm">
                        Currently accepting new projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-xs font-extrabold text-foreground mb-4 uppercase tracking-wider">
                    Follow Us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-secondary text-xs font-semibold text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <BookCallSheet
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center justify-between w-full sm:w-auto gap-4 bg-foreground text-background px-6 py-4 text-sm font-semibold rounded-xl hover:bg-foreground/90 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        Book A Call Session
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  }
                />
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card border border-border/25 rounded-3xl p-8 sm:p-10 shadow-sm">
                {isSuccessfullySubmitted ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-2">
                      <Send className="w-8 h-8 ml-1" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                        Thank you for reaching out. we have received your message
                        and will get back to you as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccessfullySubmitted(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="w-full bg-background rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="What is this regarding?"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Budget Range{" "}
                        <span className="text-muted-foreground font-normal">
                          (Optional)
                        </span>
                      </label>
                      <select
                        name="budget"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a range</option>
                        <option>$500 - $2,500</option>
                        <option>$2,500 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, and timeline..."
                        className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground py-4 text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
