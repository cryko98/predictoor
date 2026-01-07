import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import MemeGenerator from './components/MemeGenerator';

// --- UTILITY COMPONENTS ---

// Scroll Reveal Component
const RevealOnScroll = ({ children, delay = 0 }: React.PropsWithChildren<{ delay?: number }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {children}
    </div>
  );
};

// Loading Screen Component
const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm min-h-screen">
            <div className="flex flex-col items-center">
                {/* Glitchy Text Effect */}
                <h1 className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter mb-8 animate-pulse drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">
                    LOCKING IN<span className="text-green-500">...</span>
                </h1>
                
                {/* Loading Bar */}
                <div className="w-64 md:w-96 h-2 bg-gray-900/50 rounded-full overflow-hidden border border-green-500/30">
                    <div className="h-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-[loadingBar_2s_ease-in-out_forwards] w-0"></div>
                </div>
                
                <p className="mt-4 text-green-400 font-mono text-sm animate-pulse">ESTABLISHING CONNECTION</p>
            </div>
            <style>{`
                @keyframes loadingBar {
                    0% { width: 0%; }
                    20% { width: 10%; }
                    40% { width: 50%; }
                    100% { width: 100%; }
                }
            `}</style>
        </div>
    );
};

// Background Marquee Component
const BackgroundTicker = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-between opacity-10 select-none">
      {[...Array(8)].map((_, rowIndex) => (
        <div 
            key={rowIndex} 
            className={`whitespace-nowrap flex gap-8 ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}
            style={{ animationDuration: `${20 + rowIndex * 5}s` }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[10vh] font-display font-black text-white/20 uppercase tracking-tighter">
              LOCK IN
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

// DexScreener Chart Component (Updated to Dark Mode)
const DexScreenerChart = () => {
    return (
        <section className="py-20 container mx-auto px-4">
             <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-outline uppercase">
                    LIVE CHART
                </h2>
                <div className="h-1 w-20 bg-green-500 mx-auto"></div>
            </div>
            
            <div className="w-full rounded-3xl overflow-hidden border-4 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)] bg-black">
                {/* Specific Styles for DexScreener Embed */}
                <style>{`
                    #dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}
                    @media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}
                    #dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}
                `}</style>
                <div id="dexscreener-embed">
                    {/* Changed theme to dark */}
                    <iframe src="https://dexscreener.com/solana/9WJhHEvDtW56Kto8SZ5ZRMJrcwsu7u8ssSzzqiAHhsgX?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
                </div>
            </div>
        </section>
    );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2200); // 2.2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <>
            <BackgroundTicker />
            <LoadingScreen />
        </>
    );
  }

  return (
    <div className="min-h-screen text-white font-sans selection:bg-green-500 selection:text-black relative animate-in fade-in duration-700">
      <BackgroundTicker />
      
      <div className="relative z-10">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <RevealOnScroll>
            <section id="about">
                <About />
            </section>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <section id="meme-generator">
                <MemeGenerator />
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="how-to-buy">
                <HowToBuy />
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="chart">
                <DexScreenerChart />
            </section>
          </RevealOnScroll>
        </main>
        
        <footer className="border-t border-green-500/20 py-12 bg-black/80 mt-10 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center text-white/80">
              <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="font-display italic text-white text-3xl drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] uppercase">THE GREAT LOCK-IN</span>
              </div>
              <p className="mb-2 font-medium tracking-wide">© 2026 All rights reserved.</p>
              <p className="text-sm opacity-50 mb-6 font-mono">Disclaimer: $lockin is a memecoin for entertainment purposes only.</p>
              
              <div className="flex justify-center items-center gap-2 pt-4 border-t border-white/10 w-full max-w-xs mx-auto">
                  <span className="text-sm font-bold text-white/60 uppercase">Web dev:</span>
                  <a 
                      href="https://t.me/Maximus00115" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-white transition-colors"
                      title="Contact Developer on Telegram"
                  >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                  </a>
              </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;