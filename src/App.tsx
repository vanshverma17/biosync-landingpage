import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Innovation } from './components/Innovation';
import { Technology } from './components/Technology';
import { Services } from './components/Services';
import { Statistics } from './components/Statistics';
import { Footer } from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    // Background gradient shifting based on scroll progress
    gsap.to(mainRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    // Cleanup GSAP ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <main 
      ref={mainRef}
      className="min-h-screen bg-background text-cyber-300 font-sans relative overflow-x-hidden"
    >
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(99,102,241,0.12)_0%,_rgba(3,2,8,1)_30%,_rgba(6,182,212,0.08)_100%)] pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Innovation />
        <Technology />
        <Services />
        <Statistics />
        <Footer />
      </div>
    </main>
  );
}

export default App;
