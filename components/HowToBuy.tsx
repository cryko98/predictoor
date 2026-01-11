import React from 'react';
import { Wallet, ArrowRight, Coins, Search, CheckCircle, Clock } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const ca = "COMING SOON";

  const steps = [
    {
      icon: <Wallet className="text-white" size={32} />,
      title: "Create Wallet",
      desc: "Download Phantom or your preferred Solana wallet."
    },
    {
      icon: <Coins className="text-gray-300" size={32} />,
      title: "Get SOL",
      desc: "Buy SOL from an exchange and send it to your wallet."
    },
    {
      icon: <Search className="text-white" size={32} />,
      title: "Wait for Launch",
      desc: "Follow our X account for the official launch announcement."
    },
    {
      icon: <CheckCircle className="text-gray-300" size={32} />,
      title: "Swap for $WHITEDOG",
      desc: "Once live, paste the CA and join the pack."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-outline uppercase">
                JOIN THE PACK
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
                Prepare your wallets. The White Dog is coming.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                        {idx + 1}
                    </div>
                    <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 font-medium">{step.desc}</p>
                </div>
            ))}
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-center md:text-left shadow-2xl">
            <div className="flex-1">
                <p className="text-sm text-gray-400 font-mono mb-1 uppercase tracking-wider">Contract Address (CA)</p>
                <p className="text-white font-mono font-bold text-xl tracking-widest flex items-center justify-center md:justify-start gap-2">
                    <Clock size={20} className="animate-pulse" /> {ca}
                </p>
            </div>
            <button 
                disabled
                className="bg-white/20 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 cursor-not-allowed opacity-70"
            >
                Market Not Live <ArrowRight size={18} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default HowToBuy;