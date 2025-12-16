import { createClient } from '@supabase/supabase-js';

// FONTOS: Cseréld ki ezeket a saját Supabase adataidra!
// Ha ezek üresek maradnak, az alkalmazás visszaáll a "Demo módra" (localStorage).
const SUPABASE_URL = ''; 
const SUPABASE_ANON_KEY = '';

export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

export const isSupabaseConfigured = () => !!supabase;