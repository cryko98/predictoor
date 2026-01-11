import React, { useState } from 'react';
import { Copy, Check, Menu, X as XIcon } from 'lucide-react';

const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Placeholder CA
  const ca = "COMING SOON";

  const handleCopy = () => {
    if (ca === "COMING SOON") return;
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'MEME AI', id: 'meme-generator' },
    { label: 'HOW TO BUY', id: 'how-to-buy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
                src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/dog.png" 
                alt="White Dog Logo" 
                className="w-10 h-10 rounded-full border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
            <span className="text-2xl md:text-3xl font-display italic tracking-wider text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                WHITE<span className="text-gray-400">DOG</span>
            </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
                <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white font-bold hover:text-gray-300 transition-colors uppercase tracking-widest text-sm relative group"
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </button>
            ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
            
            {/* Contract Address Box */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg pl-4 pr-3 py-1.5 shadow-inner backdrop-blur-sm">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">CA:</span>
                <span className="text-white text-sm font-mono font-medium truncate">{ca}</span>
            </div>

            {/* X Community Link */}
            <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white hover:bg-gray-200 text-black p-2.5 rounded-lg transition-transform hover:scale-105 shadow-lg border-2 border-transparent"
                title="Join Community"
            >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                {mobileMenuOpen ? <XIcon size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
             <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                    <button 
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-white font-display text-2xl uppercase tracking-wider hover:text-gray-400 text-left"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
             <div className="border-t border-white/10 pt-4">
                <span className="text-xs font-mono text-gray-400 mb-2 block">CONTRACT ADDRESS</span>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="text-white font-mono text-xs truncate mr-2">{ca}</span>
                </div>
            </div>
            <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-black font-bold py-3 text-center rounded-lg uppercase tracking-wider"
            >
                Join X Community
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;