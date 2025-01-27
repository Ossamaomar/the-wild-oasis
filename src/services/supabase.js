
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://wxzgbmkegnfupqvooobo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emdibWtlZ25mdXBxdm9vb2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMzIzNDUsImV4cCI6MjA1MjYwODM0NX0.-rPo4Ilb_xUYdXZhxXoSk1ttDA2HOBCwXGx98R0MAms"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;