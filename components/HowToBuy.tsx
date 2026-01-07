import React from 'react';
import { Wallet, ArrowRight, Coins, Search, CheckCircle } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const ca = "5SvGEbqYZ2thWTPSTBAscjUhQ2S4zcKhzTtC4TYzpump";

  const steps = [
    {
      icon: <Wallet className="text-purple-400" size={32} />,
      title: "Create Wallet",
      desc: "Download Phantom or your preferred Solana wallet."
    },
    {
      icon: <Coins className="text-yellow-400" size={32} />,
      title: "Get SOL",
      desc: "Buy SOL from an exchange and send it to your wallet."
    },
    {
      icon: <Search className="text-blue-400" size={32} />,
      title: "Go to Pump.fun",
      desc: "Connect your wallet to pump.fun."
    },
    {
      icon: <CheckCircle className="text-green-400" size={32} />,
      title: "Swap for $LOCKIN",
      desc: "Paste the CA and confirm the swap."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-outline uppercase">
                HOW TO LOCK IN
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
                Join the movement on Pump.fun in 4 simple steps.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl relative overflow-hidden group hover:bg-white/20 transition-all">
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                        {idx + 1}
                    </div>
                    <div className="bg-black/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70 font-medium">{step.desc}</p>
                </div>
            ))}
        </div>

        <div className="mt-12 bg-black/40 backdrop-blur border border-white/20 rounded-2xl p-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="flex-1">
                <p className="text-sm text-gray-400 font-mono mb-1 uppercase tracking-wider">Contract Address (CA)</p>
                <p className="text-white font-mono font-bold break-all">{ca}</p>
            </div>
            <a 
                href="https://pump.fun/5SvGEbqYZ2thWTPSTBAscjUhQ2S4zcKhzTtC4TYzpump" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
                Buy Now <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default HowToBuy;