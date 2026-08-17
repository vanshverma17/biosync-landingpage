import { motion } from 'framer-motion';

const pipelineSteps = [
  {
    id: 'analysis',
    num: '01',
    label: 'Sequence Analysis',
    title: 'AI-Driven Sequence Analysis',
    content: 'We ingest raw genetic data into our neural networks to identify optimal folding patterns and potential structural weaknesses before physical synthesis begins. This quantum-accelerated process maps billions of possibilities in seconds.',
  },
  {
    id: 'synthesis',
    num: '02',
    label: 'Base Synthesis',
    title: 'Automated Base Assembly',
    content: 'Using our proprietary bioreactors, custom oligonucleotides are synthesized with 99.99% accuracy. Our nano-assemblers work atom-by-atom to construct the desired genetic sequence, virtually eliminating off-target mutations.',
  },
  {
    id: 'validation',
    num: '03',
    label: 'Quality Validation',
    title: 'Quantum Quality Control',
    content: 'Every synthesized sequence undergoes rigorous structural validation using integrated quantum sensors. We guarantee perfect 3D alignment and molecular integrity before shipping any biological asset.',
  }
];

export const Technology = () => {
  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-sans tracking-widest uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Core Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Synthesis <span className="text-secondary text-gradient">Pipeline</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cyber-400 text-lg md:text-xl leading-relaxed"
          >
            Explore the three stages of our proprietary generation engine.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2 rounded-full" />

          {pipelineSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center mb-24 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Node marker */}
                <div className="absolute left-[28px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center font-sans text-xl font-bold text-primary shadow-[0_0_20px_rgba(6,182,212,0.4)] z-20">
                  {step.num}
                </div>

                {/* Content Panel */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right flex flex-col md:items-end' : 'md:pl-16 md:text-left flex flex-col md:items-start'}`}>
                  <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/[0.08] shadow-2xl relative overflow-hidden group hover:border-white/[0.15] transition-colors w-full text-left">
                    
                    {/* Watermark */}
                    <div className={`absolute -bottom-8 ${isEven ? '-left-6' : '-right-6'} text-[10rem] font-black text-white/[0.02] pointer-events-none font-sans leading-none tracking-tighter group-hover:text-white/[0.04] group-hover:-translate-y-4 transition-all duration-700`}>
                      {step.num}
                    </div>

                    <div className="relative z-10 flex flex-col">
                      <div className={`px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-sans tracking-widest uppercase mb-6 inline-flex items-center gap-2 self-start`}>
                        Phase {step.num}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-cyber-400 text-base md:text-lg leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other half of the timeline */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
