import React, { useState } from 'react';
import { Wallet, ArrowRight, Coins, Search, CheckCircle, Copy, Check } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const ca = "HNHNHcornzS5NsMegJA8wq2Ao68xVmKrHDRFif6pump";
  const [copied, setCopied] = useState(false);
  const raydiumUrl = `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${ca}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      title: "Go to Raydium",
      desc: "Connect your wallet to Raydium.io to start trading."
    },
    {
      icon: <CheckCircle className="text-gray-300" size={32} />,
      title: "Swap for $WHITEDOG",
      desc: "Paste the CA below and swap SOL for $WHITEDOG."
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
                The White Dog is LIVE. Secure your bag now.
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
            <div className="flex-1 w-full">
                <p className="text-sm text-gray-400 font-mono mb-1 uppercase tracking-wider">Contract Address (CA)</p>
                <div 
                    onClick={handleCopy}
                    className="group cursor-pointer bg-black/40 hover:bg-black/60 transition-colors rounded-lg p-3 flex items-center justify-between border border-white/10"
                >
                    <p className="text-white font-mono font-bold text-sm md:text-lg tracking-widest truncate mr-2">
                        {ca}
                    </p>
                    <div className="text-white/50 group-hover:text-white">
                         {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                    </div>
                </div>
            </div>
            <a 
                href={raydiumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
            >
                Buy on Raydium <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default HowToBuy;