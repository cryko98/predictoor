import { PredictionMarket } from '../types';
import { supabase, isSupabaseConfigured } from './supabaseClient';

const STORAGE_KEY = 'meme_oracle_markets';

// Fallback seed data
const SEED_DATA: PredictionMarket[] = [
  {
    id: '1',
    question: 'Will Bitcoin hit $100k before 2025?',
    yesVotes: 1250,
    noVotes: 420,
    totalVolume: 50000,
    createdAt: Date.now(),
  },
  {
    id: '2',
    question: 'Is this memecoin going to the moon?',
    yesVotes: 9999,
    noVotes: 12,
    totalVolume: 120000,
    createdAt: Date.now() - 100000,
  }
];

// --- Helper for LocalStorage (Fallback) ---
const getLocalMarkets = (): PredictionMarket[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA));
    return SEED_DATA;
  }
  return JSON.parse(stored);
};

// --- Main Async Functions ---

export const getMarkets = async (): Promise<PredictionMarket[]> => {
  if (isSupabaseConfigured() && supabase) {
    const { data, error } = await supabase
      .from('markets')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    // Map snake_case DB columns to camelCase TS types if necessary
    // Assuming table columns are: id, question, yes_votes, no_votes, total_volume, created_at
    return data.map((item: any) => ({
      id: item.id,
      question: item.question,
      yesVotes: item.yes_votes,
      noVotes: item.no_votes,
      totalVolume: item.total_volume,
      createdAt: item.created_at,
    }));
  }

  // Fallback
  return new Promise(resolve => {
    setTimeout(() => resolve(getLocalMarkets()), 500); // Simulate network delay
  });
};

export const createMarket = async (question: string): Promise<void> => {
  if (isSupabaseConfigured() && supabase) {
    const { error } = await supabase
      .from('markets')
      .insert([{ 
        question, 
        yes_votes: 0, 
        no_votes: 0, 
        total_volume: 0 
      }]);
    
    if (error) console.error("Create error:", error);
    return;
  }

  // Fallback
  const markets = getLocalMarkets();
  const newMarket: PredictionMarket = {
    id: crypto.randomUUID(),
    question,
    yesVotes: 0,
    noVotes: 0,
    totalVolume: 0,
    createdAt: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newMarket, ...markets]));
};

export const voteMarket = async (id: string, option: 'YES' | 'NO', amount: number = 10): Promise<void> => {
  if (isSupabaseConfigured() && supabase) {
    // Note: In a production app, use an RPC function to increment atomically.
    // For this simple version, we read-modify-write (susceptible to race conditions but easier to setup).
    
    const { data: current } = await supabase.from('markets').select('*').eq('id', id).single();
    
    if (current) {
      const updates = {
        yes_votes: option === 'YES' ? current.yes_votes + 1 : current.yes_votes,
        no_votes: option === 'NO' ? current.no_votes + 1 : current.no_votes,
        total_volume: current.total_volume + amount
      };
      
      await supabase.from('markets').update(updates).eq('id', id);
    }
    return;
  }

  // Fallback
  const markets = getLocalMarkets();
  const updated = markets.map(m => {
    if (m.id === id) {
      return {
        ...m,
        yesVotes: option === 'YES' ? m.yesVotes + 1 : m.yesVotes,
        noVotes: option === 'NO' ? m.noVotes + 1 : m.noVotes,
        totalVolume: m.totalVolume + amount
      };
    }
    return m;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};