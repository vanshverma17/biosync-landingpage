import { Hexagon, ArrowRight, ShieldAlert } from 'lucide-react';

// Custom Brand SVGs to replace missing Lucide brand icons
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-black/60 pt-32 pb-12 border-t border-white/5 relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">

          {/* Brand & Socials */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Hexagon className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <span className="font-sans font-bold text-3xl tracking-wide uppercase">BioSync</span>
            </div>
            <p className="text-cyber-400 max-w-md mb-10 text-lg leading-relaxed">
              Engineering the next generation of biological systems for a sustainable planetary future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyber-400 hover:text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyber-400 hover:text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyber-400 hover:text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                <GitHubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Premium Form */}
          <div className="w-full max-w-lg ml-auto">
            <div className="glass-panel p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
              {/* Subtle hover glow on form */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <ShieldAlert className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-white tracking-tight">Request Access Protocol</h3>
                </div>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Corporate Email"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-cyber-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Institution / Company"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-cyber-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      required
                    />
                  </div>
                  <button className="relative w-full overflow-hidden bg-primary text-background font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 transition-all duration-300 mt-2">
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Authorization <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                  <p className="text-center text-xs font-sans text-cyber-500 uppercase tracking-widest mt-2">
                    Level 4 Clearance Required
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-cyber-500 text-sm font-sans tracking-wider">
          <p>&copy; 2026 BIOSYNC CORP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-primary transition-colors">TERMS</a>
            <a href="#" className="hover:text-primary transition-colors">SECURITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
