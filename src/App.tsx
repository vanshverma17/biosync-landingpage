import { useEffect, useRef, Suspense, lazy } from 'react';
const Navbar = lazy(() => import('./components/Navbar').then(m => ({ default: m.Navbar })));
const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const Innovation = lazy(() => import('./components/Innovation').then(m => ({ default: m.Innovation })));
const Technology = lazy(() => import('./components/Technology').then(m => ({ default: m.Technology })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Statistics = lazy(() => import('./components/Statistics').then(m => ({ default: m.Statistics })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
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
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-primary">Loading...</div>}>
          <Navbar />
          <Hero />
          <Innovation />
          <Technology />
          <Services />
          <Statistics />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
