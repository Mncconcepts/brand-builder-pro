import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackingCards from "@/components/StackingCards";

const posts = [
  {
    slug: "modern-web-architecture-2026",
    title: "Modern Web Architecture: What Actually Matters in 2026",
    excerpt:
      "An opinionated guide to choosing the right tools, patterns, and trade-offs when building production web applications today.",
    category: "Engineering",
    date: "Mar 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "design-systems-small-teams",
    title: "Building Design Systems for Small Teams Without the Overhead",
    excerpt:
      "You don't need a 500-component library. Here's how to create a pragmatic, lightweight design system that actually ships.",
    category: "Design",
    date: "Feb 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ux-lessons-from-failed-products",
    title: "5 UX Lessons I Learned From Products That Failed",
    excerpt:
      "Failure is the best teacher. A candid look at the design mistakes I've made — and what I'd do differently today.",
    category: "UX",
    date: "Feb 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "typescript-patterns-react",
    title: "TypeScript Patterns That Make React Code Cleaner",
    excerpt:
      "Practical type patterns, utility types, and conventions that reduce bugs and improve developer experience in React projects.",
    category: "Engineering",
    date: "Jan 22, 2026",
    readTime: "10 min read",
  },
  {
    slug: "client-communication-freelance",
    title: "How I Communicate With Clients to Avoid Scope Creep",
    excerpt:
      "Frameworks and templates I use for proposals, check-ins, and change requests that keep projects on track and profitable.",
    category: "Business",
    date: "Jan 5, 2026",
    readTime: "5 min read",
  },
  {
    slug: "performance-budgets-real-world",
    title: "Performance Budgets in the Real World",
    excerpt:
      "How to set, measure, and enforce performance budgets without slowing down your team or sacrificing user experience.",
    category: "Engineering",
    date: "Dec 18, 2026",
    readTime: "9 min read",
  },
];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    // Auto-dismiss after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
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
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Blogs.
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Writing about web development, product design, and the lessons
              learned from building digital products for real businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <StackingCards offset={20} top={100}>
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-xs transition-shadow cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xm font-semibold text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-4xl font-extrabold mb-4">
            Stay In The Loop
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Get occasional updates on new articles, projects, and insights. No
            spam, unsubscribe anytime.
          </p>

          {/* Success banner */}
          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center gap-3 bg-primary-foreground/15 border border-primary-foreground/25 rounded-lg px-5 py-4 mb-6 max-w-md mx-auto"
              >
                <CheckCircle className="h-5 w-5 text-primary-foreground shrink-0" />
                <p className="text-sm font-medium text-primary-foreground">
                  You're subscribed! Thanks for joining.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <button
              type="submit"
              className="bg-primary-foreground text-primary px-6 py-3 text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
