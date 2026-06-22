import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowUpRight, Search, Lock } from "lucide-react";
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

const categories = ["All", "Engineering", "Design", "UX"];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HEADER & JOURNAL INTRO ── */}
      <section className="relative pt-40 pb-16 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px)] bg-[size:120px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-10" />
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-border">
              Perspectives & Insights
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              The Journal.
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed font-medium">
              Deep dives into production web architecture, systematic user interface engineering, and the realities of shipping digital products.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-16 pt-6 border-t border-border/60">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:text-foreground border border-border/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-secondary/60 border border-border/40 rounded-xl pl-9 pr-4 py-2 text-xs font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:border-border transition-colors w-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES FEED ── */}
      <section className="py-15">
        <div className="max-w-6xl mx-auto px-6">
          <StackingCards offset={12} top={40}>
            {filteredPosts.map((post) => (
              /* REDIRECTION LOGIC: We point to an undefined /404 path to trigger the page */
              <Link
                to="/content-archived-or-unavailable"
                key={post.slug}
                className="group block bg-card/40 backdrop-blur-sm border border-border/60 rounded-3xl p-8 lg:p-10 mb-8 last:mb-0 hover:border-border transition-all duration-300 hover:shadow-2xl hover:shadow-black/[0.02] relative overflow-hidden"
              >
                {/* Visual Hint of "Locked" Content */}
                <div className="absolute top-4 right-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <Lock className="w-3 h-3 text-muted-foreground" />
                   <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Coming Soon</span>
                </div>

                <article>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-muted-foreground mb-4">
                    <span className="text-foreground tracking-wider uppercase bg-secondary px-2.5 py-1 rounded-md border border-border/20">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="font-medium">{post.date}</span>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="font-medium">{post.readTime}</span>
                  </div>

                  <div className="flex items-start justify-between gap-6 mb-4">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-muted-foreground transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <div className="shrink-0 w-8 h-8 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-background transition-colors" />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl font-medium">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* ── SUBSCRIPTION SECTION ── */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden bg-secondary/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display tracking-tighter text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Subscribe to the dispatch.
          </h2>
          <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto font-medium leading-relaxed">
            Get early technical updates and long-form breakdowns once a month directly in your inbox. No spam.
          </p>

          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2.5 bg-foreground text-background rounded-2xl px-5 py-3.5 mb-6 max-w-md mx-auto border border-foreground shadow-lg shadow-black/10"
              >
                <CheckCircle className="h-4 w-4 shrink-0" />
                <p className="text-xs font-bold">
                  Successfully added. Welcome aboard.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto p-1.5 bg-card border border-border/80 rounded-2xl shadow-xl shadow-black/[0.02]"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-xs font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] whitespace-nowrap"
            >
              Join List
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;