
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://menlwsftveyzcpamywjv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbmx3c2Z0dmV5emNwYW15d2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTUxNzgsImV4cCI6MjA1NzM3MTE3OH0.eIY6V5oGR3prV8qAAj_WyqBzFyHoJrafque3_c9ifrY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
