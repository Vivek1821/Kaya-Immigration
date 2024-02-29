import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xddjiwsnmnbspxjumson.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZGppd3NubW5ic3B4anVtc29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMjg2MTUsImV4cCI6MjAyNDgwNDYxNX0.UswIcVYy8zZq7GusRYeWMCYlfNc6CcK8-U7QvNqDzuY"
);

export default supabase;
