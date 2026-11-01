-- TÂM AN: schema khởi đầu cho lịch tụng kinh.
-- Chạy trong Supabase SQL Editor. Bật RLS và chỉ cho người dùng thao tác dữ liệu của chính họ.
create table if not exists public.chant_schedule (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  chant_date date not null,
  chant_time text not null check (chant_time in ('Sáng','Trưa','Chiều','Tối')),
  sutra_title text not null,
  created_at timestamptz not null default now()
);

alter table public.chant_schedule enable row level security;

create policy "Users can read their own chant schedule"
on public.chant_schedule for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can add their own chant schedule"
on public.chant_schedule for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own chant schedule"
on public.chant_schedule for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own chant schedule"
on public.chant_schedule for delete
to authenticated
using (auth.uid() = user_id);

create index if not exists chant_schedule_user_date_idx
on public.chant_schedule (user_id, chant_date);
