import { motion } from "framer-motion";
import { Palette, UserCircle, Hexagon, Image as ImageIcon, Frame, Wand2 } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Commission Art",
    description: "Bespoke illustrations tailored to your specifications, from fan art to original concepts."
  },
  {
    icon: <UserCircle className="w-8 h-8" />,
    title: "Character Design",
    description: "Unique and memorable character concepts for games, comics, and storytelling."
  },
  {
    icon: <Hexagon className="w-8 h-8" />,
    title: "Brand Identity",
    description: "Cohesive visual systems that make your brand stand out in a crowded market."
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Illustration",
    description: "High-quality editorial and commercial illustrations that tell a compelling story."
  },
  {
    icon: <Frame className="w-8 h-8" />,
    title: "Digital Portraits",
    description: "Stunningly realistic or stylized digital portraits of people, pets, or characters."
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Logo Design",
    description: "Memorable marks that serve as the perfect cornerstone for your brand's identity."
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
            Our Creative <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            From concept to final polish, we offer a comprehensive suite of creative services to bring any vision to reality.
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
