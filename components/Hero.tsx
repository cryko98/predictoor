import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
        className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/dogbann.png')`
        }}
    >
      {/* Dark overlay to ensure text readability against the banner */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
              
              {/* Title */}
              <h1 className="text-6xl lg:text-9xl font-display font-black mb-8 text-white text-outline leading-[0.9] tracking-tighter drop-shadow-2xl uppercase">
                THE WHITE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">DOG</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-white font-bold mb-12 max-w-3xl leading-relaxed drop-shadow-md">
                We are the white dogs. Strong. Unstoppable. <br/>
                <span className="text-gray-300 border-b-2 border-white/50">Taking over the Solana blockchain.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
                    <button 
                        className="group relative bg-white hover:bg-gray-200 text-black font-display font-black text-xl px-10 py-5 uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] clip-path-polygon flex items-center justify-center cursor-not-allowed opacity-90"
                        disabled
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
                    >
                        LAUNCHING SOON
                        <span className="absolute inset-0 border-2 border-black/10 pointer-events-none" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}></span>
                    </button>
                    
                    <a 
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black/80 backdrop-blur-md text-white font-display font-black text-xl px-10 py-5 uppercase tracking-wider hover:bg-gray-900 transition-all border-2 border-white/20 hover:border-white shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
                        style={{ clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)' }}
                    >
                        Twitter (X)
                    </a>
              </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;