# 002 — Recrear la base de datos de Supabase
Estado: Implementada (AC-7 pendiente de ejecutar: falta `SUPABASE_SECRET_KEY`; AC-6 con cobertura parcial de valores de filtro, pendiente de decisión del humano)

## Contexto
El proyecto Supabase original (pausado el 11-08-2025) no se puede restaurar y **no hay backup de la base de datos**:
solo existe el backup de Storage (`~/Documents/mwqlcfaptwgoylhdngmb.storage.zip`: bucket `car-images`, 11 fotos en
5 carpetas `cars/<uuid>/`; la carpeta `chargers/` está vacía). Hay un proyecto Supabase nuevo y vacío (variables en
`.env.local`: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `DATABASE_URL` en el pooler 6543 y
`DATABASE_URL_SESSION` en el 5432). Hay que **reconstruir el esquema a partir del código** actual (que es el contrato)
y cargar **datos de demostración** para que la app vuelva a funcionar. Es la tarea T-00b del plan, que adelanta T-13.

## Requisitos
- R1 El esquema se deduce del código actual: `src/app/supabase/supabase.ts`, `src/utils/mappers.ts`,
  `src/lib/definitions.ts`, `src/lib/validations.ts`, `src/lib/supabase/fetchFilteredCars.ts`,
  `src/utils/carDocuments.ts`, `src/utils/chatbot.ts` y los componentes que lean columnas.
- R2 Todo el esquema en migraciones SQL versionadas (`supabase/migrations/`), aplicadas con `pnpm db:migrate`.
- R3 Seguridad desde el principio: RLS en todas las tablas con el modelo «catálogo público + escritura de admin»
  (skill `supabase-best-practices`), y el bucket con lectura pública y escritura de admin.
- R4 Datos de demostración realistas (mercado español) cargados con un script idempotente.
- R5 Las fotos del backup se reutilizan para los coches de demostración.
- R6 La app actual (Next 15, todavía sin refactorizar) funciona contra la base nueva sin cambiar su código de datos.

## Criterios de aceptación
- AC-1 `pnpm db:migrate` sobre la base vacía crea, sin errores y de forma reaplicable (no vuelve a aplicar lo ya
  aplicado): `cars`, `car_images`, `features`, `car_features`, `chargers`, `documentos` (pgvector, `vector(384)`,
  única por `car_id`), la función `match_documentos(p_query_embedding, p_match_threshold, p_match_count)` que devuelve
  `id, content, similarity` (y lo que use `chatbot.ts`), `admins` + `is_admin()`, y el bucket `car-images`.
- AC-2 Las columnas, nombres y tipos coinciden con lo que lee y escribe el código (snake_case de `mapCarToDB`,
  campos de `chargerSchema`, `slug` único en `cars` y `chargers`, columnas del concesionario de la ficha si el código
  las lee). Restricciones razonables (`not null`, `check` de rangos, `category in ('home','community','business')`).
- AC-3 FKs con `on delete cascade` (imágenes, características y documento de un coche se borran con él) e índices
  para las consultas reales: `slug`, filtros del catálogo (`brand`, `fuel`, `price`, `year`, `mileage`, `body_type`…),
  FKs, y el índice vectorial de `documentos`.
- AC-4 RLS activado en todas las tablas: `anon` y `authenticated` **leen** `cars`, `car_images`, `features`,
  `car_features`, `chargers`; **solo `is_admin()`** inserta, actualiza y borra. `documentos` no se lee directamente
  como `anon` (solo vía `match_documentos`). Storage: lectura pública de `car-images`, escritura solo admin.
  Grants explícitos a `anon`/`authenticated` donde haga falta (Data API).
- AC-5 `pnpm db:check-rls` comprueba AC-4 dentro de una transacción con rollback, como `anon`, como usuario normal y
  como admin, y sale con código ≠ 0 si algo falla.
- AC-6 `pnpm db:seed-demo` (idempotente) carga: ≥ 12 coches que cubran todos los valores de filtro (varias marcas,
  combustibles incluido «Eléctrico» con ≥ 4 eléctricos para la portada, carrocerías, colores, ubicaciones, rangos de
  precio/año/km, puertas, plazas, etiquetas DGT), ~20 características asignadas, ≥ 6 cargadores de las 3 categorías,
  todos con `slug`. Los 5 coches cuyas fotos están en el backup reutilizan **su UUID de carpeta como `id`** y sus
  fotos; el resto usa fotos de `public/coches/`. Los datos describen el coche que se ve en la foto.
- AC-7 Las fotos del backup se suben al bucket `car-images` del proyecto nuevo con las mismas rutas
  (`cars/<uuid>/<fichero>`) y las URLs de `car_images.image_url` apuntan a ellas (construidas desde
  `NEXT_PUBLIC_SUPABASE_URL`). La subida no usa nunca claves en el código de la app.
- AC-8 Con la base nueva, la app actual muestra el catálogo con datos, la ficha de un coche con su galería y los
  cargadores. (`next.config.ts` permite el host de imágenes del proyecto nuevo.)
- AC-9 Hay una forma documentada de dar de alta al administrador (el humano crea el usuario en Supabase Auth y un
  comando/SQL lo añade a `admins` por email).

## Contratos
- `supabase/migrations/0001_schema.sql`, `0002_rls.sql`, `0003_storage.sql` (o la división que se justifique).
- `scripts/seed-demo.ts`, `scripts/check-rls.ts`, `scripts/upload-storage.ts` (o equivalente) + tests de su lógica pura.
- `package.json`: scripts `db:migrate`, `db:check-rls`, `db:seed-demo`, `db:upload-storage`, `db:make-admin`.

## Fuera de alcance
- Generar los embeddings de `documentos` (necesita la clave de Hugging Face): se hará en T-24 con un script de reindexado.
- Refactorizar el código de la app (Fases 1-2).
