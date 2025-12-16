import React, { useEffect, useState } from 'react';
import { getMarkets, createMarket, voteMarket } from '../services/marketService';
import { PredictionMarket as MarketType } from '../types';
import { Plus, TrendingUp, DollarSign, Loader2 } from 'lucide-react';
import { isSupabaseConfigured } from '../services/supabaseClient';

const MarketCard: React.FC<{ market: MarketType; onVote: (id: string, option: 'YES' | 'NO') => void; isVoting: boolean }> = ({ market, onVote, isVoting }) => {
  const totalVotes = market.yesVotes + market.noVotes;
  const yesPercentage = totalVotes === 0 ? 50 : Math.round((market.yesVotes / totalVotes) * 100);
  const noPercentage = 100 - yesPercentage;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all group">
      
      <div className="mb-4">
        <h3 className="text-lg font-bold text-black leading-tight group-hover:text-blue-600 transition-colors">
          {market.question}
        </h3>
      </div>

      <div className="flex gap-2 mb-4">
        {/* Yes Button */}
        <button 
            disabled={isVoting}
            onClick={() => onVote(market.id, 'YES')}
            className="flex-1 bg-green-50 hover:bg-green-100 disabled:opacity-50 border border-green-200 rounded-lg p-2 flex justify-between items-center transition-colors group/btn"
        >
            <span className="text-green-700 font-bold text-sm group-hover/btn:scale-105 transition-transform">Yes</span>
            <span className="text-green-700 font-bold text-sm">{yesPercentage}%</span>
        </button>
        {/* No Button */}
        <button 
            disabled={isVoting}
            onClick={() => onVote(market.id, 'NO')}
            className="flex-1 bg-red-50 hover:bg-red-100 disabled:opacity-50 border border-red-200 rounded-lg p-2 flex justify-between items-center transition-colors group/btn"
        >
            <span className="text-red-700 font-bold text-sm group-hover/btn:scale-105 transition-transform">No</span>
            <span className="text-red-700 font-bold text-sm">{noPercentage}%</span>
        </button>
      </div>

      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div 
            className="h-full bg-green-500 rounded-full" 
            style={{ width: `${yesPercentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 font-mono font-medium">
        <div className="flex items-center gap-1">
            <DollarSign size={12} className="text-gray-400" />
            <span>Vol: ${market.totalVolume.toLocaleString()}</span>
        </div>
        <div>
            {totalVotes} Votes
        </div>
      </div>
    </div>
  );
};

const CreateMarketModal: React.FC<{ isOpen: boolean; onClose: () => void; onSubmit: (q: string) => void; isCreating: boolean }> = ({ isOpen, onClose, onSubmit, isCreating }) => {
    const [question, setQuestion] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white border border-gray-100 w-full max-w-md rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-black text-black mb-1">Create New Market</h2>
                <p className="text-gray-500 mb-4 text-sm">What do you want to predict?</p>
                
                <textarea 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 transition-all placeholder:text-gray-400"
                    rows={3}
                    placeholder="Ask a question (e.g., Will SOL flip ETH?)"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={isCreating}
                />
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} disabled={isCreating} className="px-4 py-2 text-gray-500 hover:text-black transition-colors font-medium">Cancel</button>
                    <button 
                        disabled={!question.trim() || isCreating}
                        onClick={() => {
                            onSubmit(question);
                            setQuestion('');
                        }} 
                        className="bg-black text-white font-bold px-6 py-2 rounded-lg hover:bg-zinc-800 disabled:opacity-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                        {isCreating && <Loader2 size={16} className="animate-spin" />}
                        {isCreating ? 'Creating...' : 'Create'}
                    </button>
                </div>
            </div>
        </div>
    );
}

const PredictionMarket: React.FC = () => {
  const [markets, setMarkets] = useState<MarketType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchData = async () => {
    try {
        const data = await getMarkets();
        setMarkets(data);
    } catch (e) {
        console.error("Failed to fetch markets", e);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleVote = async (id: string, option: 'YES' | 'NO') => {
    // Optimistic update could go here, but for simplicity we wait for DB
    setActionLoading(true);
    await voteMarket(id, option);
    await fetchData(); // Refresh data
    setActionLoading(false);
  };

  const handleCreate = async (question: string) => {
    setActionLoading(true);
    await createMarket(question);
    await fetchData();
    setActionLoading(false);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-2 flex items-center gap-2 tracking-tight drop-shadow-md">
                    <TrendingUp className="text-white" size={32} />
                    LIVE PREDICTIONS
                </h2>
                <div className="flex items-center gap-2">
                    <p className="text-white/90 text-lg font-medium drop-shadow-sm">Community voted odds backed by $predictoor</p>
                    {!isSupabaseConfigured() && (
                        <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded font-bold uppercase">Demo Mode</span>
                    )}
                </div>
            </div>
            
            <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl font-bold border-2 border-transparent hover:border-black/10"
            >
                <Plus size={18} />
                Create Market
            </button>
        </div>

        {loading ? (
            <div className="flex justify-center py-20">
                <Loader2 className="text-white animate-spin" size={48} />
            </div>
        ) : markets.length === 0 ? (
            <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-xl text-white font-bold">No markets yet.</p>
                <p className="text-white/70">Be the first to predict the future!</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {markets.map(market => (
                    <MarketCard 
                        key={market.id} 
                        market={market} 
                        onVote={handleVote} 
                        isVoting={actionLoading}
                    />
                ))}
            </div>
        )}

      </div>
      <CreateMarketModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCreate}
        isCreating={actionLoading} 
      />
    </section>
  );
};

export default PredictionMarket;