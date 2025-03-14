
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://menlwsftveyzcpamywjv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbmx3c2Z0dmV5emNwYW15d2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTUxNzgsImV4cCI6MjA1NzM3MTE3OH0.eIY6V5oGR3prV8qAAj_WyqBzFyHoJrafque3_c9ifrY';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
