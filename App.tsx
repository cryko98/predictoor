import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PredictionMarket from './components/PredictionMarket';

function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <PredictionMarket />
        
        {/* DexScreener Chart Section */}
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-black text-white mb-6 text-center text-outline drop-shadow-md">
            LIVE CHART
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/40 backdrop-blur-sm">
             {/* 
                Responsive padding-bottom logic translated from provided CSS:
                padding-bottom: 125% (mobile/default) -> pb-[125%]
                @media(min-width: 1400px) padding-bottom: 65% -> min-[1400px]:pb-[65%]
             */}
             <div className="relative w-full pb-[125%] min-[1400px]:pb-[65%]">
               <iframe 
                 src="https://dexscreener.com/solana/4huLC3CFz8LKDRSZifd7DHJPeZai3u3Fq7xme76z5GSz?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=light&chartStyle=0&chartType=usd&interval=15"
                 className="absolute w-full h-full top-0 left-0 border-0"
                 title="DexScreener Chart"
               ></iframe>
             </div>
          </div>
        </section>

      </main>
      
      <footer className="border-t border-white/20 py-12 bg-black/20 mt-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-white/80">
            <div className="flex justify-center items-center gap-2 mb-4">
                <span className="font-black italic text-white text-2xl drop-shadow-md">THE PREDICTOOR</span>
            </div>
            <p className="mb-2 font-medium">© 2025 All rights reserved.</p>
            <p className="text-sm opacity-70">Disclaimer: $predictoor is a memecoin for entertainment purposes only.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;