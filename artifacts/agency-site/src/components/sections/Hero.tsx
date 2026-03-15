import { motion } from "framer-motion";
import { ArrowRight, Gamepad2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-glow.png`}
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <Gamepad2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white/80">Roblox · Discord · Web</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6"
        >
          Priority <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 text-glow">Development</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          A passionate side project building Roblox experiences, Discord bots & communities, and web projects — just for the love of it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto group px-8 py-4 rounded-full font-bold text-white bg-primary hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(30,127,232,0.3)] hover:shadow-[0_0_40px_rgba(30,127,232,0.5)]"
          >
            Join Our Discord
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white glass-panel hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
