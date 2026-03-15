import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Characters", "Branding", "Illustration"];

const projects = [
  {
    id: 1,
    title: "Cyber Neon Hunter",
    category: "Characters",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
  },
  {
    id: 2,
    title: "Aura Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
  },
  {
    id: 3,
    title: "The Lost Forest",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
  },
  {
    id: 4,
    title: "Apex Warrior",
    category: "Characters",
    image: "https://images.unsplash.com/photo-1620586937107-16091448b111?w=800&q=80"
  },
  {
    id: 5,
    title: "Echo Tech Logo",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80"
  },
  {
    id: 6,
    title: "Starlight City",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?w=800&q=80"
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    proj => activeCategory === "All" || proj.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground tracking-tight"
            >
              Featured <span className="text-primary">Masterpieces</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              A selection of our finest commissions and projects across various disciplines.
            </motion.p>
          </div>
          
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
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-white shadow-sm border border-border"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-accent font-semibold mb-2 tracking-wide uppercase text-sm">{project.category}</span>
                  <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}