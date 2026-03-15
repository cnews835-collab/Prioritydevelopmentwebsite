import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const categories = ["All", "Roblox", "Discord", "Web"];

const projects = [
  {
    id: 1,
    title: "Coming Soon",
    description: "Past Roblox project — details dropping soon.",
    category: "Roblox",
    tag: "Game Dev",
    featured: true,
    placeholder: true,
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Discord bot or server setup — details coming.",
    category: "Discord",
    tag: "Bot Dev",
    featured: false,
    placeholder: true,
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Roblox scripting or experience — details coming.",
    category: "Roblox",
    tag: "Scripting",
    featured: false,
    placeholder: true,
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Web tool or dashboard — details coming.",
    category: "Web",
    tag: "Web Dev",
    featured: false,
    placeholder: true,
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Community Discord server — details coming.",
    category: "Discord",
    tag: "Community",
    featured: false,
    placeholder: true,
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "Roblox UI / experience — details coming.",
    category: "Roblox",
    tag: "UI Design",
    featured: false,
    placeholder: true,
  },
];

const tagColors: Record<string, string> = {
  "Game Dev": "bg-blue-100 text-blue-700",
  "Bot Dev": "bg-indigo-100 text-indigo-700",
  "Scripting": "bg-cyan-100 text-cyan-700",
  "Web Dev": "bg-emerald-100 text-emerald-700",
  "Community": "bg-violet-100 text-violet-700",
  "UI Design": "bg-sky-100 text-sky-700",
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (proj) => activeCategory === "All" || proj.category === activeCategory
  );

  const featured = filteredProjects.find((p) => p.featured);
  const rest = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase tracking-widest text-sm mb-3"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight"
            >
              Projects &{" "}
              <span className="text-primary">Builds</span>
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* Featured Card */}
            {featured && (
              <div className="mb-6">
                <PlaceholderCard project={featured} large />
              </div>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((project) => (
                  <PlaceholderCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center gap-3 text-muted-foreground"
        >
          <Clock className="w-4 h-4" />
          <span className="text-sm">Past works will be added here soon — stay tuned.</span>
        </motion.div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function PlaceholderCard({ project, large = false }: { project: Project; large?: boolean }) {
  const tagClass = tagColors[project.tag] ?? "bg-gray-100 text-gray-600";

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
        large ? "md:flex-row min-h-[260px]" : "min-h-[220px]"
      }`}
    >
      {/* Placeholder visual */}
      <div
        className={`relative bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center ${
          large ? "md:w-1/2 min-h-[200px]" : "h-36"
        }`}
      >
        <div className="flex flex-col items-center gap-2 opacity-30 select-none">
          <div className="w-12 h-12 rounded-xl bg-primary/30" />
          <div className="w-20 h-2 rounded-full bg-primary/20" />
          <div className="w-14 h-2 rounded-full bg-primary/10" />
        </div>
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${tagClass}`}>
          {project.tag}
        </span>
      </div>

      {/* Text content */}
      <div className={`flex flex-col justify-between p-6 ${large ? "md:w-1/2" : ""}`}>
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`font-display font-bold text-foreground ${large ? "text-2xl" : "text-lg"}`}>
              {project.title}
            </h3>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-200">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{project.category} · Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
