import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* 1. Image Area (Left) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                {/* Changed max-w-lg to max-w-2xl for larger image */}
                <div className="relative w-full max-w-2xl">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                    
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.3)] border-4 border-green-400/50 transform hover:scale-[1.02] transition-transform duration-500 bg-black/50 backdrop-blur-sm rotate-1 lg:-rotate-2 hover:rotate-0">
                        <img 
                            src="https://pbs.twimg.com/media/G-FfKyTWcAAeT8A?format=jpg&name=small" 
                            alt="The Great LOCK-IN Visual" 
                            className="w-full h-auto object-cover block"
                        />
                         {/* Overlay shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* 2. Text Content (Right) */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              <div className="mb-6 animate-bounce">
                 <span className="px-6 py-2 rounded-none -skew-x-12 bg-green-500 text-black text-lg font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black">
                    $lockin
                 </span>
              </div>

              {/* Title */}
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-display font-black mb-6 text-white text-outline leading-[0.9] tracking-tighter drop-shadow-2xl uppercase">
                THE GREAT <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">LOCK-IN</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white font-bold mb-10 max-w-xl leading-relaxed drop-shadow-md lg:mr-auto">
                The stars have aligned. Focus. Determination. Victory. <br/>
                <span className="text-green-400 border-b-2 border-green-500">It is time to lock in.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                    <a 
                        href="https://pump.fun/5SvGEbqYZ2thWTPSTBAscjUhQ2S4zcKhzTtC4TYzpump"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-green-500 hover:bg-green-400 text-black font-display font-black text-xl px-10 py-5 uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] clip-path-polygon flex items-center justify-center"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
                    >
                        Buy on Pump.fun
                        <span className="absolute inset-0 border-2 border-white/40 pointer-events-none" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}></span>
                    </a>
                    <a 
                        href="https://dexscreener.com/solana/5SvGEbqYZ2thWTPSTBAscjUhQ2S4zcKhzTtC4TYzpump"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black/80 backdrop-blur-md text-white font-display font-black text-xl px-10 py-5 uppercase tracking-wider hover:bg-gray-900 transition-all border-2 border-green-500/50 hover:border-green-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
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