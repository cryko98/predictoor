import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm border-y border-white/10 relative overflow-hidden">
      {/* Background lightning hint */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                <img 
                    src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/dog.png" 
                    alt="The White Dog Character" 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-tighter">
                WE ARE THE <span className="text-gray-400">WHITE DOGS</span>
            </h2>
            <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                    In a world of fleeting memes and empty promises, a new power awakens.
                </p>
                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed border-l-4 border-white pl-6 italic bg-white/5 py-4 rounded-r-xl">
                    "We do not bark. We bite. We take over."
                </p>
                <p className="text-lg text-white/80">
                    The White Dog is not just a token; it is a symbol of dominance on the Solana blockchain. 
                    Strong character, unwavering community, and absolute conviction. The takeover begins now.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;