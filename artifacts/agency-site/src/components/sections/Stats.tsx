import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "10k+", label: "Discord Members" },
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Passion-Driven" },
];

export function Stats() {
  return (
    <section className="py-16 relative overflow-hidden bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-6xl font-display font-bold mb-2 text-primary">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}