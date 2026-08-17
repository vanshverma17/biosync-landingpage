import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4",
        scrolled ? "glass-panel" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Hexagon className="w-8 h-8 text-primary" strokeWidth={1.5} />
          <span className="font-sans font-bold text-xl tracking-wide uppercase">BioSync</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Research', 'Technology', 'Services', 'Impact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-cyber-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="relative group overflow-hidden rounded-md px-6 py-2 bg-primary/10 border border-primary/30 text-primary font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-300">
            <span className="relative z-10">Access Portal</span>
            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out z-0" />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 glass-panel border-t border-white/10 p-4 md:hidden flex flex-col gap-4">
          {['Research', 'Technology', 'Services', 'Impact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-cyber-300 hover:text-white px-4 py-2" onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};
