import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Fingerprint, FlaskConical, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Genome Assembly',
    description: 'Design and synthesize entire artificial genomes tailored for specific industrial applications.',
    icon: <Dna className="w-8 h-8" />,
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/50'
  },
  {
    title: 'Protein Engineering',
    description: 'Optimize enzymatic pathways using directed evolution guided by artificial intelligence.',
    icon: <Fingerprint className="w-8 h-8" />,
    color: 'from-secondary/20 to-secondary/5',
    border: 'border-secondary/50'
  },
  {
    title: 'Microbial Foundry',
    description: 'Scale-up production of engineered microbes for sustainable chemical manufacturing.',
    icon: <FlaskConical className="w-8 h-8" />,
    color: 'from-cyber-300/20 to-cyber-300/5',
    border: 'border-cyber-300/50'
  }
];

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-sans tracking-widest uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Enterprise Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Core <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cyber-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Hover over our core platforms to explore how we engineer the building blocks of life.
          </motion.p>
        </div>

        {/* Expanding Accordion */}
        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[500px]">
          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                layout
                onMouseEnter={() => setHoveredIndex(i)}
                onClick={() => setHoveredIndex(i)}
                animate={{
                  flex: isHovered ? 4 : 1
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative glass-panel rounded-3xl overflow-hidden cursor-pointer group flex flex-col transition-all duration-700 ease-out min-w-0 ${
                  isHovered ? `border ${service.border}` : 'border border-white/5 opacity-60 hover:opacity-100'
                }`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-opacity duration-700 ease-out pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                {/* Number Watermark */}
                <div className={`absolute -bottom-8 -right-4 text-[12rem] md:text-[16rem] font-black pointer-events-none transition-all duration-700 ease-out font-sans leading-none tracking-tighter ${isHovered ? 'scale-110 opacity-100 text-white/[0.03]' : 'scale-100 opacity-50 text-white/[0.01]'}`}>
                  0{i + 1}
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-6 md:p-10 h-full flex flex-col min-w-0">
                   
                  {/* Icon & Top Interaction Icon */}
                  <div className="flex justify-between items-start mb-auto">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 ease-out flex-shrink-0 ${isHovered ? 'bg-white/10 text-white shadow-xl scale-110' : 'bg-white/5 text-white/50'}`}>
                      {service.icon}
                    </div>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <motion.h3 
                      layout="position"
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className={`font-bold text-white mb-4 transition-all duration-700 ease-out ${isHovered ? 'text-3xl md:text-4xl whitespace-normal tracking-tight' : 'text-xl md:text-2xl truncate'}`}
                    >
                      {service.title}
                    </motion.h3>

                    <AnimatePresence mode="wait">
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-cyber-400 text-base md:text-lg leading-relaxed max-w-md pt-2">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
