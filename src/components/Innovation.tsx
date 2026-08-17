import { motion } from 'framer-motion';
import { Network, Microscope, Cpu, Database, Dna } from 'lucide-react';

const features = [
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "Neural Sequencing",
    description: "Advanced mapping of molecular pathways using deep learning algorithms.",
    glow: "from-primary/20 via-transparent to-transparent",
    position: "left-[50%] top-0" // Top
  },
  {
    icon: <Microscope className="w-6 h-6 text-secondary" />,
    title: "Precision Synthesis",
    description: "Atom-by-atom assembly of custom synthetic proteins.",
    glow: "from-secondary/20 via-transparent to-transparent",
    position: "left-[100%] top-[50%]" // Right
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Quantum Biocomputing",
    description: "Ultra-fast genomic simulation using integrated quantum states.",
    glow: "from-primary/20 via-transparent to-transparent",
    position: "left-[50%] top-[100%]" // Bottom
  },
  {
    icon: <Database className="w-6 h-6 text-secondary" />,
    title: "Bio-Data Vault",
    description: "Secure, decentralized storage of genetic intellectual property.",
    glow: "from-secondary/20 via-transparent to-transparent",
    position: "left-0 top-[50%]" // Left
  }
];

export const Innovation = () => {
  return (
    <section id="research" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-sans tracking-widest uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Research & <span className="text-gradient">Innovation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cyber-400 text-lg md:text-xl leading-relaxed"
          >
            Our proprietary synthesis engine breaks the boundaries of traditional biology, 
            offering unprecedented control over molecular structures at the quantum level.
          </motion.p>
        </div>

        {/* MOBILE LAYOUT (Stack) */}
        <div className="flex flex-col gap-6 lg:hidden">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel w-full p-8 rounded-2xl border border-white/[0.05] relative group overflow-hidden flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-cyber-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (Orbital Ring) */}
        <div className="hidden lg:flex justify-center items-center relative h-[800px] mt-10">
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Central Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-48 rounded-full bg-primary/20 blur-2xl absolute"
            />
            <div className="w-28 h-28 rounded-full border border-primary/40 bg-background/90 backdrop-blur-xl flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
              <Dna className="w-12 h-12 text-primary animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
          </div>

          {/* Rotating Ring Container */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="relative w-[500px] h-[500px] rounded-full border border-white/[0.08]"
          >
            {/* Concentric Decorative Rings */}
            <div className="absolute inset-[30px] rounded-full border border-secondary/20 border-dashed opacity-50" />
            <div className="absolute inset-[60px] rounded-full border border-primary/10 border-solid opacity-30" />

            {/* Orbiting Cards */}
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`absolute ${feature.position} w-0 h-0 flex items-center justify-center z-30`}
              >
                {/* Counter-rotating Card */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="w-[320px]"
                >
                  <div className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 border border-white/[0.05] hover:border-white/[0.15] relative group overflow-hidden flex flex-col items-center text-center shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:-translate-y-2 cursor-default">
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg bg-background/50 backdrop-blur-sm relative z-10">
                      {feature.icon}
                    </div>
                    
                    {/* Text */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-cyber-400 text-sm leading-relaxed group-hover:text-cyber-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
