import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* 1. Image Area - Cyberpunk border style */}
        <div className="w-full max-w-lg mx-auto mb-12 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.4)] border-4 border-green-400/50 transform hover:scale-[1.02] transition-transform duration-500 bg-black">
            <img 
                src="https://pbs.twimg.com/media/G-FfKyTWcAAeT8A?format=jpg&name=small" 
                alt="The Great LOCK-IN Visual" 
                className="w-full h-auto object-cover block opacity-90 hover:opacity-100 transition-opacity"
            />
        </div>

        {/* 2. Text Content */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <div className="mb-8 animate-bounce">
             <span className="px-6 py-2 rounded-none -skew-x-12 bg-green-500 text-black text-lg font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black">
                $lockin
             </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-9xl font-display font-black mb-6 text-white text-outline leading-[0.9] tracking-tighter drop-shadow-2xl uppercase">
            THE GREAT <br/>
            <span className="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]">LOCK-IN</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white font-bold mb-12 max-w-3xl leading-relaxed drop-shadow-md bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            Focus. Determination. Victory. <br/>
            <span className="text-green-400">It is time to lock in.</span>
          </p>

          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center">
                <a 
                    href="https://pump.fun/5SvGEbqYZ2thWTPSTBAscjUhQ2S4zcKhzTtC4TYzpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-green-500 hover:bg-green-400 text-black font-display font-black text-xl px-12 py-5 uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] clip-path-polygon"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
                >
                    Buy on Pump.fun
                    <span className="absolute inset-0 border-2 border-white/40 pointer-events-none" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}></span>
                </a>
                <a 
                    href="https://dexscreener.com/solana/5SvGEbqYZ2thWTPSTBAscjUhQ2S4zcKhzTtC4TYzpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black text-white font-display font-black text-xl px-12 py-5 uppercase tracking-wider hover:bg-gray-900 transition-all border-2 border-green-500/50 hover:border-green-400 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)' }}
                >
                    View Chart
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;