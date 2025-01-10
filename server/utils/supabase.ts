import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://your-supabase-url.supabase.co"; // Nahraď svou URL
const SUPABASE_KEY = "your-anon-key"; // Nahraď svým API klíčem

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
