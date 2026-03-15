import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-2">
              <img
                src={`${import.meta.env.BASE_URL}images/about-art.png`}
                alt="Priority Development team vibe"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/30 blur-[60px] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Not a Company. <br className="hidden md:block" />
              Just a <span className="text-primary">Side Project.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Priority Development is a passion-driven side project built by a small group of developers and creators who love Roblox, Discord, and the web. No corporate fluff — just people who enjoy building cool things together.
              </p>
              <p>
                We work on Roblox games, Discord bots, community servers, and web tools whenever we get the chance. Everything we make comes from genuine interest, and we're always looking for likeminded people to collaborate with.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-background bg-primary/40 flex items-center justify-center text-xs font-bold text-white">PD</div>
                <div className="w-12 h-12 rounded-full border-2 border-background bg-cyan-500/40 flex items-center justify-center text-xs font-bold text-white">RB</div>
                <div className="w-12 h-12 rounded-full border-2 border-background bg-indigo-500/40 flex items-center justify-center text-xs font-bold text-white">DC</div>
                <div className="w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-bold text-white z-10">+</div>
              </div>
              <div className="text-sm font-medium">
                <span className="text-white">Small team, big ideas</span>
                <br />
                <span className="text-muted-foreground">Always open to collaborators</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
