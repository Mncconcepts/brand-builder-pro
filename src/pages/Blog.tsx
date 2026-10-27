import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  ArrowUpRight,
  ArrowRight,
  Search,
  Lock,
  X,
  ImageOff,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Skeleton Component (with graceful fallback if an image fails) ─── */
const SkeletonImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer/Skeleton Effect */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-muted/20"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary">
          <ImageOff className="w-5 h-5 text-muted-foreground/40" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
};

/* ─── data ─── */
const posts = [
  {
    slug: "modern-web-architecture-2026",
    title: "Modern Web Architecture: What Actually Matters in 2026",
    excerpt:
      "An opinionated guide to choosing the right tools, patterns, and trade-offs when building production web applications today.",
    category: "Engineering",
    date: "Mar 12, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "design-systems-small-teams",
    title: "Building Design Systems for Small Teams Without the Overhead",
    excerpt:
      "You don't need a 500-component library. Here's how to create a pragmatic, lightweight design system that actually ships.",
    category: "Design",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ux-lessons-from-failed-products",
    title: "5 UX Lessons I Learned From Products That Failed",
    excerpt:
      "Failure is the best teacher. A candid look at the design mistakes I've made — and what I'd do differently today.",
    category: "UX",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "typescript-patterns-react",
    title: "TypeScript Patterns That Make React Code Cleaner",
    excerpt:
      "Practical type patterns, utility types, and conventions that reduce bugs and improve developer experience in React projects.",
    category: "Engineering",
    date: "Jan 22, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "client-communication-freelance",
    title: "How I Communicate With Clients to Avoid Scope Creep",
    excerpt:
      "Frameworks and templates I use for proposals, check-ins, and change requests that keep projects on track and profitable.",
    category: "Business",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "performance-budgets-real-world",
    title: "Performance Budgets in the Real World",
    excerpt:
      "How to set, measure, and enforce performance budgets without slowing down your team or sacrificing user experience.",
    category: "Engineering",
    date: "Dec 18, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
  },
];

// Built from the posts so every category (including Business) can be filtered
const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

const avgReadTime = Math.round(
  posts.reduce((sum, p) => sum + parseInt(p.readTime, 10), 0) / posts.length,
);

const blogStats = [
  { n: String(posts.length), label: "Articles" },
  { n: String(categories.length - 1), label: "Topics" },
  { n: `~${avgReadTime} min`, label: "Average read" },
  { n: "Monthly", label: "Newsletter" },
];

// Every post links here until the article pages are live
const UNAVAILABLE_PATH = "/content-archived-or-unavailable";

const newsletterPerks = [
  "Early technical updates",
  "Long-form breakdowns",
  "Once a month, no spam",
];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  useEffect(() => {
    if (!subscribed) return;
    const t = window.setTimeout(() => setSubscribed(false), 5000);
    return () => window.clearTimeout(t);
  }, [subscribed]);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesQuery =
      !normalizedQuery ||
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.excerpt.toLowerCase().includes(normalizedQuery) ||
      post.category.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  const [featuredPost, ...restPosts] = filteredPosts;

  const clearFilters = () => {
    setActiveCategory("All");
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HEADER & JOURNAL INTRO ── */}
      <section className="relative pt-32 sm:pt-40 pb-14 sm:pb-16 border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-foreground tracking-wide uppercase">
                Perspectives & Insights
              </span>
            </div> */}

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-balance font-extrabold tracking-tighter leading-[0.97] mb-5">
              Software Development{" "}
              <span className="text-muted-foreground">Blogs.</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Deep dives into production web architecture, systematic user
              interface engineering, and the realities of shipping digital
              products.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 mt-12 sm:mt-14 border-t border-l border-border rounded-tl-2xl"
          >
            {blogStats.map((s) => (
              <div
                key={s.label}
                className="border-r border-b border-border px-5 py-5 sm:px-7 sm:py-6"
              >
                <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-none">
                  {s.n}
                </p>
                <p className="text-xs text-muted-foreground font-medium mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TOOLBAR ── */}
      <section className="sticky top-16 z-30 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Filter articles by topic"
            className="flex gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              const count =
                cat === "All"
                  ? posts.length
                  : posts.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    active
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:text-foreground border border-border/40"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-[10px] font-semibold ${
                      active ? "opacity-60" : "opacity-50"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full bg-secondary/60 border border-border/60 rounded-xl pl-10 pr-9 py-2.5 text-xs font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── ARTICLES FEED ── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md mx-auto py-16"
            >
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center mx-auto mb-5">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                No articles found
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Nothing matches your search yet. Try a different keyword or
                browse all topics.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs font-bold rounded-xl hover:bg-foreground/90 transition-all active:scale-[0.98]"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <>
              <p className="text-xs text-muted-foreground font-medium mb-8">
                Showing{" "}
                <span className="font-bold text-foreground">
                  {filteredPosts.length}
                </span>{" "}
                {filteredPosts.length === 1 ? "article" : "articles"}
                {activeCategory !== "All" && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-bold text-foreground">
                      {activeCategory}
                    </span>
                  </>
                )}
              </p>

              {/* Featured post */}
              {featuredPost && (
                <motion.div
                  key={`featured-${featuredPost.slug}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8 sm:mb-10"
                >
                  <Link
                    to={UNAVAILABLE_PATH}
                    className="group grid lg:grid-cols-2 rounded-3xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/25 hover:shadow-l"
                  >
                    <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-secondary">
                      <div className="absolute inset-0 grayscale-[45%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105">
                        <SkeletonImage
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-center pb-6">
                        <div className="flex items-center gap-2 text-white">
                          <Lock className="w-3 h-3" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                      <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-foreground bg-background/85 backdrop-blur-sm border border-border/40 px-3 py-1.5 rounded-full">
                        Featured
                      </span>
                    </div>

                    <article className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-muted-foreground mb-5">
                        <span className="text-primary tracking-wider uppercase bg-primary/10 px-2.5 py-1 rounded-md">
                          {featuredPost.category}
                        </span>
                        <span className="font-medium">{featuredPost.date}</span>
                        <span className="text-muted-foreground/40">•</span>
                        <span className="inline-flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.1] text-balance mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl">
                        {featuredPost.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all">
                          Read article <ArrowRight className="w-4 h-4" />
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                          <Lock className="w-3 h-3" /> Coming soon
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )}

              {/* Post grid */}
              {restPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {restPosts.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        delay: (i % 3) * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full"
                    >
                      <Link
                        to={UNAVAILABLE_PATH}
                        className="group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-l"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                          <div className="absolute inset-0 grayscale-[45%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105">
                            <SkeletonImage
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-center pb-5">
                            <div className="flex items-center gap-2 text-white">
                              <Lock className="w-3 h-3" />
                              <span className="text-[9px] font-bold uppercase tracking-widest">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-foreground bg-background/85 backdrop-blur-sm border border-border/40 px-2.5 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <article className="flex flex-col flex-1 p-5 sm:p-6">
                          <div className="flex items-center gap-2.5 text-[11px] text-muted-foreground font-medium mb-3">
                            <span>{post.date}</span>
                            <span className="text-muted-foreground/40">•</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="font-display text-lg font-bold text-foreground tracking-tight leading-snug mb-2.5 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                            {post.excerpt}
                          </p>

                          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/70">
                            <span className="text-xs font-semibold text-foreground">
                              Read article
                            </span>
                            <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-background transition-colors" />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── SUBSCRIPTION SECTION ── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-foreground text-background overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_30%_30%,black,transparent)] opacity-[0.06] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-background/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-background/10 blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 sm:p-12 lg:p-14">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-background/15 bg-background/5 backdrop-blur-sm mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-[11px] font-semibold text-background/80">
                    Monthly newsletter
                  </span>
                </div>
                <h2 className="font-display text-balance tracking-tighter text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.05]">
                  Subscribe to Our Newsletter.
                </h2>
                <p className="opacity-60 text-sm max-w-md leading-relaxed mb-7">
                  Get early technical updates and long-form breakdowns once a
                  month directly in your inbox. No spam.
                </p>
                <ul className="space-y-2.5">
                  {newsletterPerks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2.5 text-xs font-medium text-background/80"
                    >
                      <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <AnimatePresence>
                  {subscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      role="status"
                      className="flex items-center gap-2.5 bg-background text-foreground rounded-2xl px-5 py-3.5 mb-4 shadow-lg"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                      <p className="text-xs font-bold">
                        Successfully added. Welcome aboard.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2 p-1.5 bg-background/10 border border-background/20 rounded-2xl backdrop-blur-sm"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-background text-foreground px-6 py-3 text-xs font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] whitespace-nowrap"
                  >
                    Join List
                  </button>
                </form>
                <p className="text-[11px] text-background/45 mt-3 px-1.5">
                  We respect your inbox. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;