import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://pbs.twimg.com/media/G-FrM3_XAAAoHyU?format=png&name=900x900" 
                    alt="Lock In Character" 
                    className="w-full h-auto"
                />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg uppercase">
                THE PROPHECY
            </h2>
            <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                    The official <span className="text-green-400 font-bold bg-black/40 px-2 py-1 rounded">pump.fun</span> page has signaled it to the world.
                </p>
                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed border-l-4 border-green-500 pl-6 italic bg-white/5 py-4 rounded-r-xl">
                    "This is the next multi-million dollar coin."
                </p>
                <p className="text-lg text-white/80">
                    The charts don't lie. The community is forming. The target is locked. 
                    Are you ready to stop fading and start winning?
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;