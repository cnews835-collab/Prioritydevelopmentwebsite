import { motion } from "framer-motion";
import { Gamepad2, Bot, Globe, Code2, Users, Wrench } from "lucide-react";

const services = [
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Roblox Game Dev",
    description: "Building unique Roblox experiences — from gameplay systems and UI to full game worlds and scripting."
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Discord Bots",
    description: "Custom Discord bots with moderation, economy, leveling, games, and anything else your community needs."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Projects",
    description: "Websites, dashboards, and web tools built to support communities, games, and creative projects."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Lua / Luau Scripting",
    description: "Clean, optimized Luau scripts for Roblox — systems, APIs, data stores, and more."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Setup",
    description: "Full Discord server setup — roles, channels, bots, and structure tailored for your community or game."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Tooling & Plugins",
    description: "Custom Roblox Studio plugins and developer tooling to speed up workflows and power up your team."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            What We <span className="text-primary">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We're a small team with big ambitions — building across Roblox, Discord, and the web as a passion-driven side project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass-panel hover:bg-card/80 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
