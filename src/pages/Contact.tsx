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
  ArrowUpRight,
  Send,
  HelpCircle,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSheet from "@/components/BookCallSheet";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";
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
    a: "Absolutely. We work with clients worldwide and we are comfortable with remote collaboration across time zones.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Primarily React, Nextjs, TypeScript, Node.js, Tailwind and modern CSS frameworks. We also work with Figma for design and various backend technologies.",
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

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "clintonnweze111@gmail.com",
    href: "mailto:clintonnweze111@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 902 049 5756",
    href: "tel:+2349020495756",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide · Remote",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Currently accepting new projects",
    href: null,
  },
];

const highlights = [
  { icon: Clock, text: "We reply within 24 hours" },
  { icon: MapPin, text: "Remote · Worldwide" },
  { icon: CheckCircle2, text: "Currently accepting new projects" },
];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const labelClass = "block text-sm font-semibold text-foreground";

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
      <section className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/1 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
          <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2 border-x border-border/70" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Contact
              </span>
            </div>

            <h1 className="font-display mb-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Get in Touch. Let's Talk About Your Project.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have a project in mind or want to discuss a potential
              collaboration? We would love to hear from you. Fill out the form
              below or reach out directly.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="border-t border-border pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            {/* Left Column: Interactive Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
                {isSuccessfullySubmitted ? (
                  <div
                    role="status"
                    className="flex h-full min-h-[460px] flex-col items-center justify-center space-y-6 text-center"
                  >
                    <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div>
                      <h3 className="font-display mb-3 text-2xl font-bold text-foreground">
                        Message Sent Successfully!
                      </h3>
                      <p className="mx-auto mb-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                        Thank you for reaching out. We have received your
                        message and will get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccessfullySubmitted(false)}
                      className="rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8 border-b border-border pb-6">
                      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                        Send us a message
                      </h2>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        Fields marked with{" "}
                        <span className="text-primary">*</span> are required.
                      </p>
                    </div>

                    {hasPrefill && (
                      <div className="mb-6 flex items-start justify-between gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3.5">
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Picking up your {prefillService} request
                          </p>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                            {prefillScope && `${prefillScope} scope`}
                            {prefillTimeline && ` · ${prefillTimeline}`} — we've
                            pre-filled the details below. Just add your contact
                            info.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={clearPrefill}
                          className="shrink-0 text-[13px] font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
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

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className={labelClass}>
                            Your Name <span className="text-primary">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className={inputClass}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className={labelClass}>
                            Email Address{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className={inputClass}
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-sm text-destructive"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className={labelClass}>
                          Subject <span className="text-primary">*</span>
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          required
                          defaultValue={prefillSubject}
                          placeholder="What is this regarding?"
                          className={inputClass}
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget" className={labelClass}>
                          Budget Range{" "}
                          <span className="font-normal text-muted-foreground">
                            (Optional)
                          </span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className={`${inputClass} cursor-pointer`}
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
                        <label htmlFor="message" className={labelClass}>
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          defaultValue={prefillMessage}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className={`${inputClass} resize-none`}
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-sm text-destructive"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Send className="h-4 w-4" />
                        {state.submitting
                          ? "Sending Message..."
                          : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right Column: Info, Booking & WhatsApp */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-display mb-2 text-xl font-bold text-foreground">
                  Contact Information
                </h2>

                <ul className="divide-y divide-border">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4 py-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0">
                        <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="break-words text-[15px] font-semibold text-foreground transition-colors hover:text-primary"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-[15px] font-semibold text-foreground">
                            {value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 border-t border-border pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Follow Us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary"
                      >
                        {s.name}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book a call */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="font-display mb-1 text-lg font-bold text-foreground">
                  Prefer to talk it through?
                </h3>
                <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">
                  Book a call session and we'll discuss your project live.
                </p>
                <BookCallSheet
                  trigger={
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary"
                    >
                      <CalendarIcon className="h-4 w-4" /> Book A Call Session
                    </button>
                  }
                />
              </div>

              {/* WhatsApp Direct Chat Card */}
              <div className="rounded-2xl bg-foreground p-6 text-background sm:p-8">
                <h3 className="font-display mb-1 text-lg font-bold">
                  Prefer a direct conversation?
                </h3>
                <p className="mb-5 text-[15px] leading-relaxed text-background/80">
                  Skip the form and chat with us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/2349020495756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-background/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-secondary/20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Got Questions?
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
                Everything you need to know about working together and project
                delivery.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="overflow-hidden rounded-2xl border border-border bg-card px-6"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
