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
                alt="Creative process abstract art" 
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
              We Don't Just Create Art. <br className="hidden md:block" />
              We Craft <span className="text-primary">Legacies.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded on the principle that digital art should evoke emotion and inspire action, [Agency Name] is a premium commission agency serving clients worldwide.
              </p>
              <p>
                Our curated team of specialist artists and designers work collaboratively to ensure every brushstroke, pixel, and vector aligns perfectly with your vision. Whether you need a singular breathtaking illustration or a comprehensive brand identity, we deliver excellence.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-6">
              <div className="flex -space-x-4">
                {/* agency team members generic avatars */}
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Team member" className="w-12 h-12 rounded-full border-2 border-background object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Team member" className="w-12 h-12 rounded-full border-2 border-background object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Team member" className="w-12 h-12 rounded-full border-2 border-background object-cover" />
                <div className="w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-bold text-white z-10">
                  +12
                </div>
              </div>
              <div className="text-sm font-medium">
                <span className="text-white">Elite Artists</span>
                <br />
                <span className="text-muted-foreground">Ready for your project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
