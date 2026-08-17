import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ChevronRight, Dna } from 'lucide-react';

const ThreeCanvas = lazy(() => import('./ThreeCanvas').then(m => ({ default: m.ThreeCanvas })));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* 3D canvas fades at bottom via mask — extends 200px past section so no hard cut */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: '-200px',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)'
        }}
      >
        <Suspense fallback={null}>
          <ThreeCanvas />
        </Suspense>
      </div>
      {/* Radial glow — also masked so it doesn't produce a hard bottom edge */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          top: 0, left: 0, right: 0, bottom: '-200px',
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(99,102,241,0.18) 0%, transparent 70%)',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)'
        }}
      />

      {/* Empty space for spacing if needed */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* Typography & CTAs */}
        <div className="flex flex-col justify-center text-left max-w-3xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-sans tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SYSTEM ACTIVE v2.4
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Next-Gen <br />
            <span className="text-gradient">Biotechnology</span> <br />
            Synthesis.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cyber-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            Pioneering the intersection of artificial intelligence and genetic engineering. 
            We build molecular pipelines for a sustainable future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="relative overflow-hidden bg-primary text-background font-bold text-lg px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 transition-all duration-300 group">
              Start Simulation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300">
              <Dna className="w-5 h-5 text-secondary" />
              View Research
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
