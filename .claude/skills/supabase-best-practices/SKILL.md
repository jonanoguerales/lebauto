---
name: supabase-best-practices
description: Reglas para la base de datos y la autenticación con Supabase (Postgres, RLS, Auth con @supabase/ssr en Next.js 16). Úsala antes de crear o cambiar tablas, políticas, migraciones, consultas, el login o el proxy de sesión.
---

# Supabase: base de datos y autenticación

Consulta siempre la documentación actual (skill `context7-docs` y `node_modules/@supabase/ssr/`).

## 1. Esquema y migraciones
- Todo cambio de esquema en un fichero nuevo `supabase/migrations/NNNN_descripcion.sql`. Nunca edites una
  migración ya aplicada; `pnpm db:migrate` aplica las pendientes y las registra.
- Nombres en `snake_case` y plural. PK `uuid default gen_random_uuid()`. Fechas `timestamptz default now()`.
- Restricciones en la base de datos, no solo en la app: `not null`, `check` (longitudes, rangos), enums o `check in (...)`.
- Listas ordenadas pequeñas que se leen enteras pueden ir en `jsonb` o `text[]`; si hay que
  filtrar o buscar por ellas, a columna o tabla propia.

## 2. Row Level Security (obligatorio)
- `alter table … enable row level security;` en **todas** las tablas expuestas.
- **Modelo de Lebauto:** catálogo público + administración. No hay datos «propios» de cada usuario.
  - Lectura pública (`anon, authenticated`) de `cars`, `car_images`, `car_features`, `features`, `chargers`
    (solo filas publicadas si existe la columna).
  - Escritura (`insert/update/delete`) solo para administradores. Los admins se definen en una tabla
    `public.admins (user_id uuid primary key references auth.users on delete cascade)` y una función
    `security definer` estable:
  ```sql
  create function public.is_admin() returns boolean language sql stable security definer set search_path = ''
    as $$ select exists (select 1 from public.admins where user_id = (select auth.uid())) $$;
  create policy "cars_select_public" on public.cars for select to anon, authenticated using (true);
  create policy "cars_insert_admin"  on public.cars for insert to authenticated with check ((select public.is_admin()));
  create policy "cars_update_admin"  on public.cars for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
  create policy "cars_delete_admin"  on public.cars for delete to authenticated using ((select public.is_admin()));
  ```
  - `documentos` (embeddings del chatbot): sin lectura directa para `anon`; solo a través de la función
    `match_documentos` y escritura de admin.
  - **Storage:** políticas del bucket de imágenes con lectura pública y escritura solo `is_admin()`.
- `(select auth.uid())` / `(select public.is_admin())` en vez de llamarlas a secas: Postgres las evalúa una vez por consulta.
- La **service role key** salta RLS: nunca en la app ni en el navegador.

## 3. Índices y consultas
- Diseña cada índice desde la consulta real: igualdad primero, luego orden. Ej.: catálogo filtrado por marca y ordenado
  por precio → `(brand, price)`; búsqueda por `slug` → índice único.
- Búsqueda por texto en español: columna generada `tsvector` con `to_tsvector('spanish', …)` + índice GIN, o
  `ilike` con índice `pg_trgm` si son pocos datos. Documenta la elección.
- Selecciona solo las columnas necesarias; pagina con `range()` o por cursor.

## 4. Autenticación en Next.js 16
- `@supabase/ssr`: un cliente de **servidor** (cookies de `next/headers`) y, solo si hace falta, uno de navegador.
- `src/proxy.ts` (el antiguo middleware) refresca la sesión, **solo** en `/dashboard/:path*` y `/sign-in`
  (las páginas públicas no necesitan sesión y así no pagan la llamada a Auth).
- **Proteger en el servidor:** en las páginas y Server Actions privadas, `supabase.auth.getUser()` (valida el JWT
  contra Supabase) y `redirect('/sign-in')` si no hay usuario. No confíes en `getSession()` para autorizar.
- Login con Server Actions + Zod; mensajes de error claros y en español, sin revelar si un email existe.

## 5. Variables de entorno
- Públicas (navegador): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (hoy; migrar a
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` si se rota a las nuevas claves de Supabase).
- Solo servidor / scripts: `DATABASE_URL` (pooler en modo transaction, puerto 6543) para las migraciones.
  Con `postgres-js`: `prepare: false` y `max_pipeline: 1` (el pooler deja colgadas las consultas encadenadas).

## Checklist
- [ ] RLS activado y políticas por operación, probadas como `anon`, usuario normal y admin (`pnpm db:check-rls`).
- [ ] Migración nueva, aplicada, e índices justificados por consultas.
- [ ] Páginas privadas comprobadas con `getUser()` en el servidor.
