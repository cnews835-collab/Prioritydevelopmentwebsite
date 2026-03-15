import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 z-50 relative">
          <img src="/logo.png" alt="Priority Development Logo" className="w-10 h-10 object-contain" />
          <span className="font-display text-xl font-bold tracking-wide text-white">
            Priority Development
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(30,127,232,0.4)] transition-all duration-300"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-full text-lg font-bold bg-primary text-white"
              >
                Join Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
