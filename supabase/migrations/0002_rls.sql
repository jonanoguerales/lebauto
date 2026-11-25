-- 0002 · Administradores, RLS y grants (spec 002, AC-1/AC-4).
-- Modelo de Lebauto: catálogo público + escritura solo de administradores (skill supabase-best-practices).

-- ── Administradores ──────────────────────────────────────────────────────────
create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = (select auth.uid()));
$$;

revoke all on function public.is_admin() from public, anon, authenticated;
-- Las políticas se evalúan con el rol de quien consulta: necesita poder ejecutarla.
grant execute on function public.is_admin() to anon, authenticated;

-- ── RLS en todas las tablas de public ────────────────────────────────────────
alter table public.cars enable row level security;
alter table public.car_images enable row level security;
alter table public.features enable row level security;
alter table public.car_features enable row level security;
alter table public.chargers enable row level security;
alter table public.documentos enable row level security;
alter table public.admins enable row level security;
-- Tabla de control de scripts/migrate.ts (la crea antes de aplicar migraciones): no es de la app,
-- RLS sin políticas y sin grants.
alter table public.schema_migrations enable row level security;

-- ── Grants explícitos (los privilegios por defecto de Supabase dan todo a anon/authenticated) ──
revoke all on public.cars, public.car_images, public.features, public.car_features, public.chargers,
  public.documentos, public.admins from anon, authenticated;
revoke all on table public.schema_migrations from anon, authenticated;

grant select on public.cars, public.car_images, public.features, public.car_features, public.chargers
  to anon, authenticated;
grant insert, update, delete on public.cars, public.car_images, public.features, public.car_features,
  public.chargers to authenticated;
-- documentos: anon sin acceso directo (solo match_documentos); authenticated pasa por RLS (solo admin).
grant select, insert, update, delete on public.documentos to authenticated;
-- admins: sin grants; solo se consulta mediante is_admin() (security definer).

-- ── Políticas del catálogo: lectura pública, escritura de admin ──────────────
do $$
declare
  t text;
begin
  foreach t in array array['cars', 'car_images', 'features', 'car_features', 'chargers'] loop
    execute format(
      'create policy %I on public.%I for select to anon, authenticated using (true)',
      t || '_select_public', t);
    execute format(
      'create policy %I on public.%I for insert to authenticated with check ((select public.is_admin()))',
      t || '_insert_admin', t);
    execute format(
      'create policy %I on public.%I for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()))',
      t || '_update_admin', t);
    execute format(
      'create policy %I on public.%I for delete to authenticated using ((select public.is_admin()))',
      t || '_delete_admin', t);
  end loop;
end;
$$;

-- ── documentos: solo admin (el upsert de carDocuments.ts hace .select() → necesita SELECT) ──
create policy documentos_select_admin on public.documentos
  for select to authenticated using ((select public.is_admin()));
create policy documentos_insert_admin on public.documentos
  for insert to authenticated with check ((select public.is_admin()));
create policy documentos_update_admin on public.documentos
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy documentos_delete_admin on public.documentos
  for delete to authenticated using ((select public.is_admin()));
