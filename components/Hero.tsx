import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* 1. Image Area - Clean, Sharp, No Blur */}
        <div className="w-full max-w-5xl mx-auto mb-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/30 transform hover:scale-[1.01] transition-transform duration-500">
            <img 
                src="https://pbs.twimg.com/media/G8TVwV2XgAcGbug?format=jpg&name=large" 
                alt="The Predictoor Visual" 
                className="w-full h-auto object-cover block"
            />
        </div>

        {/* 2. Text Content - Strictly below the image */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="mb-6 animate-bounce">
             <span className="px-5 py-2 rounded-full bg-black text-white text-sm font-bold uppercase tracking-wider shadow-lg border-2 border-white">
                $predictoor
             </span>
          </div>

          {/* Title - Black text with white outline (text-shadow) */}
          <h1 className="text-5xl md:text-8xl font-black mb-6 text-black text-outline leading-tight tracking-tight drop-shadow-xl">
            THE PREDICTOOR
          </h1>
          
          <p className="text-xl md:text-2xl text-white font-bold mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            The oracle has spoken. Bet on the timeline. <br/>
            Win big with the most accurate memecoin on the block.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
            <button className="bg-black text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-zinc-800 transition-all shadow-xl hover:scale-105 hover:-translate-y-1 border-2 border-white/20">
                Start Predicting
            </button>
            <a 
                href="https://dexscreener.com/solana/9ftnbzpAP4SUkmHMoFuX4ofvDXCHxbrTXKiSFL4Wpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg border-2 border-white hover:border-gray-300 flex items-center justify-center"
            >
                View Chart
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;