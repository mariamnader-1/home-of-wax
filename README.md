# Home of Wax — Candle Supply Store

## Supabase SQL (run this first in Supabase → SQL Editor)

```sql
create table contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamp with time zone default now()
);
alter table contact_messages enable row level security;
create policy "Anyone can insert contact messages"
  on contact_messages for insert with check (true);
```

## Environment Variables (add in Vercel settings)
```
NEXT_PUBLIC_SUPABASE_URL=https://wuilzjddceuhgqegjtea.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```
