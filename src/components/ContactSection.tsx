import { motion } from "framer-motion";
import { useState, FormEvent, useRef } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import BookCallSheet from "@/components/BookCallSheet";
import { toast } from "sonner";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value || "";

    setSubmitting(true);
    toast.loading("Sending your message...", { id: "contact-section" });
    await new Promise((r) => setTimeout(r, 400));

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.open(`mailto:clintonnweze111@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, "_self");

    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message ready to send! Your email client should open now.", { id: "contact-section" });
  };

  return (
    <section id="contact" className="py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Contact
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
              Let's work <span className="italic">together</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Have a project in mind or just want to chat? I'm always open to discussing 
              new opportunities, collaborations, or creative ideas.
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <a href="mailto:clintonnweze111@gmail.com" className="text-foreground font-medium hover:text-accent transition-colors">
                  clintonnweze111@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Available Worldwide · Remote</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Social</p>
                <div className="flex gap-4">
                  <a href="#" className="text-foreground font-medium hover:text-accent transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-foreground font-medium hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-foreground font-medium hover:text-accent transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-foreground font-medium hover:text-accent transition-colors">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <BookCallSheet
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                  >
                    <CalendarIcon className="h-4 w-4" />
                    Book A Call Session
                  </button>
                }
              />
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="bg-background border border-border rounded-sm p-10 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Message sent!
                </h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
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
                      placeholder="Your name"
                      ref={nameRef}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    ref={messageRef}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-foreground text-background py-3 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
