import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The level of detail they brought to our character designs was astounding. They didn't just draw them; they brought them to life.",
    author: "Sarah Jenkins",
    role: "Art Director, Nova Studios"
  },
  {
    text: "Working with this agency was seamless. They understood our brand vision immediately and delivered a visual identity that perfectly captures our essence.",
    author: "Marcus Chen",
    role: "Founder, Zenith Tech"
  },
  {
    text: "I commissioned a digital portrait and the result exceeded all my expectations. True professionals who master their craft.",
    author: "Elena Rodriguez",
    role: "Independent Author"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Client <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-white mb-8 relative z-10 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <div className="font-bold text-white font-display">{item.author}</div>
                <div className="text-sm text-primary">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
