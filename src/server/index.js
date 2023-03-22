import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vufenhqimkvryweilgyx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZmVuaHFpbWt2cnl3ZWlsZ3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NjY2OTUsImV4cCI6MTk5NDQ0MjY5NX0.Vh5FcxLQDEGoU6NydEIhCaLyH_g0xA59WeWajnxwGb8"
);