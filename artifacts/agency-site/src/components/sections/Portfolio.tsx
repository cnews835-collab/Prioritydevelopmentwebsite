import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const mainTabs = ["All", "Roblox", "Discord", "Web"] as const;
type MainTab = (typeof mainTabs)[number];

const subTabs: Partial<Record<MainTab, string[]>> = {
  Roblox: ["All", "Maps", "Architecture", "Scripting", "UI Design", "Game Systems"],
  Discord: ["All", "Bots", "Server Setup", "Community"],
  Web: ["All", "Websites", "Dashboards", "Tools"],
};

type Project = {
  id: number;
  title: string;
  description: string;
  category: MainTab;
  subCategory: string;
  tag: string;
  featured: boolean;
};

const projects: Project[] = [
  // Roblox
  { id: 1,  title: "Coming Soon", description: "An open-world map build — details dropping soon.", category: "Roblox", subCategory: "Maps", tag: "Maps", featured: true },
  { id: 2,  title: "Coming Soon", description: "Architectural showcase in Roblox Studio.", category: "Roblox", subCategory: "Architecture", tag: "Architecture", featured: false },
  { id: 3,  title: "Coming Soon", description: "Custom Luau scripting system — details coming.", category: "Roblox", subCategory: "Scripting", tag: "Scripting", featured: false },
  { id: 4,  title: "Coming Soon", description: "Roblox UI redesign — details coming.", category: "Roblox", subCategory: "UI Design", tag: "UI Design", featured: false },
  { id: 5,  title: "Coming Soon", description: "Core game systems — economy, data stores, etc.", category: "Roblox", subCategory: "Game Systems", tag: "Game Systems", featured: false },
  { id: 6,  title: "Coming Soon", description: "Environment map and terrain work.", category: "Roblox", subCategory: "Maps", tag: "Maps", featured: false },
  // Discord
  { id: 7,  title: "Coming Soon", description: "Custom Discord bot — details coming.", category: "Discord", subCategory: "Bots", tag: "Bots", featured: true },
  { id: 8,  title: "Coming Soon", description: "Full Discord server setup from scratch.", category: "Discord", subCategory: "Server Setup", tag: "Server Setup", featured: false },
  { id: 9,  title: "Coming Soon", description: "Community management & growth — details soon.", category: "Discord", subCategory: "Community", tag: "Community", featured: false },
  // Web
  { id: 10, title: "Coming Soon", description: "Website project — details coming.", category: "Web", subCategory: "Websites", tag: "Websites", featured: true },
  { id: 11, title: "Coming Soon", description: "Dashboard or admin tool — details soon.", category: "Web", subCategory: "Dashboards", tag: "Dashboards", featured: false },
  { id: 12, title: "Coming Soon", description: "Developer tooling or web utility.", category: "Web", subCategory: "Tools", tag: "Tools", featured: false },
];

const tagColors: Record<string, string> = {
  "Maps":         "bg-green-100 text-green-700",
  "Architecture": "bg-amber-100 text-amber-700",
  "Scripting":    "bg-cyan-100 text-cyan-700",
  "UI Design":    "bg-sky-100 text-sky-700",
  "Game Systems": "bg-blue-100 text-blue-700",
  "Bots":         "bg-indigo-100 text-indigo-700",
  "Server Setup": "bg-violet-100 text-violet-700",
  "Community":    "bg-purple-100 text-purple-700",
  "Websites":     "bg-emerald-100 text-emerald-700",
  "Dashboards":   "bg-teal-100 text-teal-700",
  "Tools":        "bg-rose-100 text-rose-700",
};

export function Portfolio() {
  const [activeMain, setActiveMain] = useState<MainTab>("All");
  const [activeSub, setActiveSub] = useState("All");

  const handleMainChange = (tab: MainTab) => {
    setActiveMain(tab);
    setActiveSub("All");
  };

  const filtered = projects.filter((p) => {
    if (activeMain !== "All" && p.category !== activeMain) return false;
    if (activeSub !== "All" && p.subCategory !== activeSub) return false;
    return true;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  const currentSubTabs = activeMain !== "All" ? subTabs[activeMain] : undefined;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
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
            Projects & <span className="text-primary">Builds</span>
          </motion.h2>
        </div>

        {/* Main tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleMainChange(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeMain === tab
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sub-tabs — only visible when a specific main tab is active */}
        <AnimatePresence mode="wait">
          {currentSubTabs && (
            <motion.div
              key={activeMain}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-wrap gap-2 mb-10 pl-1 border-l-2 border-primary/30 ml-1"
            >
              {currentSubTabs.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSub(sub)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                    activeSub === sub
                      ? "bg-foreground text-background border-foreground"
                      : "bg-white border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No sub-tabs selected gap */}
        {!currentSubTabs && <div className="mb-10" />}

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMain}-${activeSub}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-muted-foreground gap-3">
                <Clock className="w-6 h-6" />
                <p className="text-sm">Nothing here yet — past works coming soon.</p>
              </div>
            ) : (
              <>
                {/* Featured card */}
                {featured && (
                  <div className="mb-5">
                    <ProjectCard project={featured} large />
                  </div>
                )}
                {/* Grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((p) => (
                      <ProjectCard key={p.id} project={p} />
                    ))}
                  </div>
                )}
              </>
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

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const tagClass = tagColors[project.tag] ?? "bg-gray-100 text-gray-600";
  return (
    <div
      className={`group relative flex flex-col justify-between bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
        large ? "md:flex-row min-h-[240px]" : "min-h-[210px]"
      }`}
    >
      {/* Visual placeholder */}
      <div
        className={`relative bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center ${
          large ? "md:w-2/5 min-h-[180px]" : "h-32"
        }`}
      >
        <div className="flex flex-col items-center gap-2 opacity-25 select-none">
          <div className="w-10 h-10 rounded-xl bg-primary/40" />
          <div className="w-16 h-1.5 rounded-full bg-primary/30" />
          <div className="w-10 h-1.5 rounded-full bg-primary/20" />
        </div>
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${tagClass}`}>
          {project.tag}
        </span>
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-between p-6 ${large ? "md:w-3/5" : ""}`}>
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`font-display font-bold text-foreground ${large ? "text-xl" : "text-base"}`}>
              {project.title}
            </h3>
            <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center shrink-0 text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-200">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3 h-3 shrink-0" />
          <span>{project.category} · {project.subCategory} · Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
