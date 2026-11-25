# Base de datos (Supabase)

El esquema se reconstruyó desde el código (spec `specs/002-base-de-datos.md`) porque no había backup de la
base de datos. Todo está en `supabase/migrations/` y se aplica con scripts de `scripts/`.

## Variables (`.env.local`)

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | La app (navegador y servidor). |
| `DATABASE_URL` | Scripts: migraciones, seed, RLS y altas de admin (Connect → Transaction pooler, puerto 6543). |
| `SUPABASE_SECRET_KEY` | Solo `pnpm db:upload-storage` (Project Settings → API Keys → Secret keys). Nunca en `src/`. |

## Puesta en marcha de un proyecto vacío

```bash
pnpm install
pnpm db:migrate          # tablas, RLS, función match_documentos y bucket car-images
pnpm db:check-rls        # comprueba la RLS como anon, usuario y admin (en una transacción que se deshace)
pnpm db:upload-storage   # sube las fotos de supabase/seed/storage/car-images/ al bucket (necesita SUPABASE_SECRET_KEY)
pnpm db:seed-demo        # 12 coches, 22 características y 6 cargadores de demostración (se puede repetir)
```

`pnpm db:migrate` solo aplica las migraciones que faltan (las registra en `public.schema_migrations`).
Para cambiar el esquema, crea un fichero nuevo `supabase/migrations/NNNN_descripcion.sql`; nunca edites uno aplicado.

## Dar de alta al administrador

Solo los usuarios de la tabla `public.admins` pueden crear, editar o borrar coches, características,
cargadores y fotos (la RLS lo comprueba con `public.is_admin()`).

1. En el panel de Supabase: **Authentication → Users → Add user → Create new user**. Escribe el email y una
   contraseña segura y marca **Auto Confirm User**.
2. En el proyecto:
   ```bash
   pnpm db:make-admin persona@dominio.es
   ```
   El comando busca el usuario por email en Supabase Auth y lo añade a `public.admins`. Si el usuario no
   existe, avisa y no cambia nada. Se puede repetir sin efectos.
3. Entra en `/sign-in` con ese email y contraseña.

Alternativa sin el script (SQL Editor del panel):

```sql
insert into public.admins (user_id)
select id from auth.users where lower(email) = lower('persona@dominio.es')
on conflict (user_id) do nothing;
```

Para quitar a un administrador: `delete from public.admins where user_id = (select id from auth.users where email = '…');`

## Modelo de seguridad

- `cars`, `car_images`, `features`, `car_features` y `chargers`: lectura pública (`anon` y `authenticated`);
  insertar, actualizar y borrar solo `is_admin()`.
- `documentos` (embeddings del chatbot): sin acceso directo para `anon`; el chatbot usa la función
  `match_documentos` (`security definer`). Solo los administradores leen y escriben la tabla.
- `admins` y `schema_migrations`: RLS activada y sin permisos para `anon`/`authenticated`.
- Bucket `car-images`: público para ver las fotos por URL; subir, reemplazar y borrar solo administradores.
