-- 0001 · Esquema de Lebauto reconstruido desde el código (spec 002, AC-1/AC-2/AC-3).
-- Contrato: src/utils/mappers.ts (cars en snake_case), src/lib/definitions.ts, src/lib/validations.ts
-- (chargerSchema), src/app/supabase/supabase.ts, src/utils/carDocuments.ts y src/utils/chatbot.ts.

create extension if not exists vector with schema extensions;

-- updated_at automático (función de trigger: no es invocable por RPC).
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

-- ── Coches ───────────────────────────────────────────────────────────────────
create table public.cars (
  id uuid primary key default gen_random_uuid(),
  brand text not null check (char_length(brand) between 1 and 60),
  model text not null check (char_length(model) between 1 and 80),
  variant text,
  condition text not null check (char_length(condition) between 1 and 30),
  price numeric(12, 2) not null check (price > 0),
  location text,
  year smallint not null check (year between 1900 and 2100),
  mileage integer not null check (mileage >= 0),
  body_type text not null default '',
  fuel text not null check (char_length(fuel) between 1 and 40),
  transmission text not null default '',
  environmental_tag text not null default '',
  drivetrain text,
  power integer check (power >= 0),
  engine_displacement integer check (engine_displacement >= 0),
  color text not null check (char_length(color) between 1 and 40),
  doors smallint not null check (doors between 1 and 9),
  seats smallint not null check (seats between 1 and 9),
  electric_range integer check (electric_range >= 0),
  battery_capacity numeric(5, 1) check (battery_capacity >= 0),
  charging_time numeric(5, 1) check (charging_time >= 0),
  fast_charge boolean not null default false,
  charging_port text,
  iva_deductible boolean not null default false,
  monthly_price numeric(10, 2) check (monthly_price >= 0),
  finance_price numeric(12, 2) check (finance_price >= 0),
  description text,
  -- createCar inserta primero y pone el slug después: nullable, pero único.
  slug text unique,
  -- Concesionario de la ficha (CarLocationInfo / CarLocationMap leen estas columnas).
  dealership_name text,
  dealership_address text,
  dealership_phone text,
  dealership_hours_weekdays text,
  dealership_hours_saturday text,
  dealership_hours_sunday_status text,
  latitude numeric(9, 6) check (latitude between -90 and 90),
  longitude numeric(9, 6) check (longitude between -180 and 180),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger cars_set_updated_at
  before update on public.cars
  for each row execute function public.set_updated_at();

-- Índices desde las consultas reales (fetchFilteredCars, fetchElectricVehicles, filtros del catálogo).
-- Igualdad / IN primero; marca + modelo van juntos en el filtro de marca y modelo.
create index cars_brand_model_idx on public.cars (brand, model);
create index cars_fuel_idx on public.cars (fuel);
create index cars_body_type_idx on public.cars (body_type);
create index cars_location_idx on public.cars (location);
create index cars_color_idx on public.cars (color);
-- Rangos (gte/lte).
create index cars_price_idx on public.cars (price);
create index cars_year_idx on public.cars (year);
create index cars_mileage_idx on public.cars (mileage);
-- doors / seats: muy poca selectividad (2-9); no compensa indexarlos.

create table public.car_images (
  id uuid primary key default gen_random_uuid(),
  car_id uuid not null references public.cars (id) on delete cascade,
  image_url text not null check (char_length(image_url) between 1 and 1000),
  created_at timestamptz not null default now(),
  -- También sirve de índice de la FK (car_id primero).
  unique (car_id, image_url)
);

-- ── Características (equipamiento) ───────────────────────────────────────────
create table public.features (
  id uuid primary key default gen_random_uuid(),
  name text not null unique check (char_length(name) between 1 and 80),
  created_at timestamptz not null default now()
);

create table public.car_features (
  car_id uuid not null references public.cars (id) on delete cascade,
  feature_id uuid not null references public.features (id) on delete cascade,
  primary key (car_id, feature_id)
);

create index car_features_feature_id_idx on public.car_features (feature_id);

-- ── Cargadores ───────────────────────────────────────────────────────────────
create table public.chargers (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 3 and 120),
  brand text,
  power_kw numeric(6, 2) not null check (power_kw > 0),
  connector_type text not null check (char_length(connector_type) >= 1),
  price_eur numeric(10, 2) not null check (price_eur > 0),
  installation_cost_eur numeric(10, 2) check (installation_cost_eur >= 0),
  features text[] not null default '{}',
  description text,
  image_url text,
  category text not null check (category in ('home', 'community', 'business')),
  slug text unique,
  efficiency numeric(5, 2) check (efficiency between 0 and 100),
  dimensions text,
  weight_kg numeric(6, 2) check (weight_kg >= 0),
  warranty_years smallint check (warranty_years >= 0),
  compatibility_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger chargers_set_updated_at
  before update on public.chargers
  for each row execute function public.set_updated_at();

create index chargers_category_idx on public.chargers (category);

-- ── Documentos del chatbot (RAG) ─────────────────────────────────────────────
-- Embeddings de sentence-transformers/all-MiniLM-L6-v2 → 384 dimensiones.
create table public.documentos (
  id bigint generated by default as identity primary key,
  car_id uuid not null unique references public.cars (id) on delete cascade,
  file_name text,
  content text not null,
  embedding extensions.vector(384) not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger documentos_set_updated_at
  before update on public.documentos
  for each row execute function public.set_updated_at();

-- Búsqueda por similitud coseno (match_documentos ordena por <=>).
create index documentos_embedding_hnsw_idx
  on public.documentos using hnsw (embedding extensions.vector_cosine_ops);

-- Búsqueda semántica para el chatbot. security definer: anon no lee documentos directamente,
-- solo por esta función (AC-4). search_path vacío y nombres cualificados.
create or replace function public.match_documentos(
  p_query_embedding extensions.vector(384),
  p_match_threshold double precision,
  p_match_count integer
)
returns table (
  id bigint,
  car_id uuid,
  file_name text,
  content text,
  similarity double precision
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    d.id,
    d.car_id,
    d.file_name,
    d.content,
    1 - (d.embedding operator(extensions.<=>) p_query_embedding) as similarity
  from public.documentos d
  where 1 - (d.embedding operator(extensions.<=>) p_query_embedding) > p_match_threshold
  order by d.embedding operator(extensions.<=>) p_query_embedding
  limit least(greatest(p_match_count, 0), 20);
$$;

-- Postgres y los privilegios por defecto de Supabase dan EXECUTE a todos: se limita a lo necesario.
revoke all on function public.set_updated_at() from public, anon, authenticated;
revoke all on function public.match_documentos(extensions.vector, double precision, integer)
  from public, anon, authenticated;
grant execute on function public.match_documentos(extensions.vector, double precision, integer)
  to anon, authenticated;
