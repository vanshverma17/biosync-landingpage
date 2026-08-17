import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

const stats = [
  { value: 99.99, label: 'Synthesis Accuracy %', suffix: '%' },
  { value: 12.5, label: 'TB Sequences Processed', suffix: 'k' },
  { value: 450, label: 'Active Bioreactors', suffix: '+' },
  { value: 0.05, label: 'Mutation Rate %', suffix: '%' }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-white font-sans tracking-tight">
      {count % 1 !== 0 && count > 0 ? count.toFixed(2) : Math.floor(count)}{suffix}
    </span>
  );
};

export const Statistics = () => {
  return (
    <section id="impact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-sans tracking-widest uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            System Impact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Global <span className="text-secondary text-gradient">Scale</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cyber-400 text-lg md:text-xl leading-relaxed"
          >
            Our infrastructure is actively synthesizing the materials needed to power a sustainable economy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 rounded-3xl border border-white/5 flex flex-col items-center gap-4 hover:border-white/10 transition-colors hover:shadow-[0_0_30px_rgba(99,102,241,0.05)]"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="h-px w-12 bg-primary/50 my-2" />
              <span className="text-cyber-400 font-medium tracking-wide">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
