import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  HelpCircle,
  CheckCircle2,
  ChartAreaIcon,
  MessageCircle,
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
    a: "Most projects take between 2-8 weeks depending on scope. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients worldwide and am comfortable with remote collaboration across time zones.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Primarily React, TypeScript, Node.js, and modern CSS frameworks. We also work with Figma for design and various backend technologies.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes, We offer maintenance packages to keep your project updated, secure, and running smoothly after launch.",
  },
];

const socials = [
  { name: "GitHub", url: "https://github.com/Mncconcepts" },
  { name: "LinkedIn", url: "https://linkedin.com/in/miracle-nweze-52aab330b" },
  { name: "Facebook", url: "https://facebook.com/miracle.nweze.524" },
];

const Contact = () => {
  // Formspree Integration
  const [state, handleSubmit] = useForm("xqewyonl");
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Picked up from the "Configure & Book" flow on the homepage services section
  const prefillService = searchParams.get("service") ?? "";
  const prefillScope = searchParams.get("scope") ?? "";
  const prefillTimeline = searchParams.get("timeline") ?? "";
  const prefillNotes = searchParams.get("notes") ?? "";
  const hasPrefill = Boolean(prefillService);

  const prefillSubject = hasPrefill ? `${prefillService} — new inquiry` : "";
  const prefillMessage = hasPrefill
    ? [
        `Service: ${prefillService}`,
        prefillScope
          ? `Scope: ${prefillScope}${prefillTimeline ? ` (${prefillTimeline})` : ""}`
          : null,
        prefillNotes ? `\nNotes:\n${prefillNotes}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  const clearPrefill = () => navigate("/contact", { replace: true });

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

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 border-b border-border/60 overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-25" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">
                Contact Us
              </span>
            </div>

            <h1 className="font-display text-balance max-w-3xl text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1.08] font-extrabold tracking-tight mb-4">
              Get in Touch. Let's Talk About Your Project.
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              Have a project in mind or want to discuss a potential
              collaboration? We would love to hear from you. Fill out the form
              below or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
            {/* Left Column: Info & Booking */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between space-y-10"
            >
              <div className="p-8 sm:p-10 rounded-3xl border border-border/80 bg-card/50 backdrop-blur-sm shadow-xs">
                <h2 className="text-lg font-bold text-foreground mb-6 pb-4 border-b border-border/60">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary/80 rounded-xl text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:clintonnweze111@gmail.com"
                        className="text-foreground text-sm font-semibold hover:text-primary transition-colors"
                      >
                        clintonnweze111@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary/80 rounded-xl text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                        Phone
                      </p>
                      <a
                        href="tel:+2349020495756"
                        className="text-foreground text-sm font-semibold hover:text-primary transition-colors"
                      >
                        +234 902 049 5756
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary/80 rounded-xl text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-foreground text-sm font-semibold">
                        Available Worldwide · Remote
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary/80 rounded-xl text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                        Availability
                      </p>
                      <p className="text-foreground text-sm font-semibold">
                        Currently accepting new projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <p className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
                    Follow Us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-secondary/60 text-xs font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xs"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Chat Card */}
              <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="text-center sm:text-left">
                  <h3 className="text-base font-bold text-foreground mb-1">
                    Prefer a direct conversation?
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Skip the form and chat with me directly on WhatsApp.
                  </p>
                </div>
                <a
                  href="https://wa.me/2349020495756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3.5 text-xs font-semibold rounded-xl hover:bg-foreground/90 transition-all duration-300 shrink-0 shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card border border-border/80 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
                {isSuccessfullySubmitted ? (
                  <div className="h-full min-h-[460px] flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-2 shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6 leading-relaxed">
                        Thank you for reaching out. We have received your
                        message and will get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccessfullySubmitted(false)}
                      className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors bg-secondary/80 px-5 py-3 rounded-xl"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    {hasPrefill && (
                      <div className="mb-6 flex items-start justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3.5">
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            Picking up your {prefillService} request
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {prefillScope && `${prefillScope} scope`}
                            {prefillTimeline && ` · ${prefillTimeline}`} — we've
                            pre-filled the details below. Just add your contact
                            info.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={clearPrefill}
                          className="text-[11px] font-semibold text-muted-foreground hover:text-foreground underline underline-offset-4 shrink-0"
                        >
                          Clear
                        </button>
                      </div>
                    )}

                    <form
                      key={searchParams.toString()}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {hasPrefill && (
                        <input
                          type="hidden"
                          name="service_context"
                          value={prefillService}
                        />
                      )}

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-foreground tracking-wide uppercase">
                            Your Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-foreground tracking-wide uppercase">
                            Email Address{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          Subject <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          defaultValue={prefillSubject}
                          placeholder="What is this regarding?"
                          className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          Budget Range{" "}
                          <span className="text-muted-foreground font-normal lowercase">
                            (Optional)
                          </span>
                        </label>
                        <select
                          name="budget"
                          className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs cursor-pointer"
                        >
                          <option value="">Select an estimated budget</option>
                          <option value="$500 - $2,500">$500 - $2,500</option>
                          <option value="$2,500 - $5,000">
                            $2,500 - $5,000
                          </option>
                          <option value="$5,000 - $10,000">
                            $5,000 - $10,000
                          </option>
                          <option value="$10,000+">$10,000+</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          defaultValue={prefillMessage}
                          placeholder="Tell me about your project, goals, and timeline..."
                          className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-xs"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground py-4 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/20 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        {state.submitting
                          ? "Sending Message..."
                          : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border/60 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-background mb-4 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold text-foreground tracking-wide uppercase">
                Got Questions?
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Everything you need to know about working together and project
              delivery.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/80 rounded-2xl px-6 shadow-xs overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground py-5 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-5 leading-relaxed">
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
