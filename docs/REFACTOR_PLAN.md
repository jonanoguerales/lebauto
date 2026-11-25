# Plan de refactor de lebauto → Next.js 16 + React 19, pods y equipo de agentes

## Contexto
`lebauto-master` es la web de un concesionario de coches de segunda mano y vehículos eléctricos. Tiene catálogo con filtros, ficha de coche, cargadores, renting, venta de coche, contacto, chatbot guiado y un dashboard de administración con Supabase. Se hizo hace un año con Next 15.2 y tiene problemas:

- **Dependencias:** `react: "latest"`; 14 paquetes sin usar (next-auth, langchain, openai, postgres, bcrypt, pdf-parse…); `pnpm` instalado como dependencia de la app.
- **Datos:** una capa de datos de 753 líneas en `src/app/supabase/supabase.ts` que usa el cliente de **navegador** también en el servidor; consultas N+1 en `fetchCars`; el filtrado está repetido en el servidor y en el cliente.
- **Renderizado:** 82 ficheros `"use client"`, con datos cargados en `useEffect` en la home y en el dashboard. No hay invalidación de caché. El middleware llama a `getUser()` en cada página pública.
- **Seguridad:** `/api/chat` es público y sin límite; los emails meten HTML sin escapar; hay open redirects en `auth/callback` y `forgotPasswordAction`; el dashboard escribe con la clave anon desde el navegador.
- **Calidad:** no hay lint, tests ni git. El dashboard usa datos mock. Hay ficheros de hasta 879 líneas.

**Objetivo:** dejarlo como el Recetario, con Next 16 y React 19.2+, arquitectura por pods (diapositivas de Lemoncode), Tailwind 4 + shadcn, Supabase con RLS y migraciones, tests y el equipo **Orquestador → develop ⇄ testing** con skills y Context7.

**Decisiones tomadas:**
- Tailwind 4 + shadcn.
- Refactor in situ, por fases.
- Se mantiene el proveedor de IA actual (OpenRouter + Hugging Face).
- Se copia el sistema de agentes del Recetario, con push a GitHub.

---

## Fase 0 — Infraestructura del equipo de agentes (la primera tarea la hago yo)
Se copia de `~/Documents/prueba-speed-paradigm/recetario` y se adapta a lebauto.

1. `git init`, añadir `.gitignore` (más `.env*`, `.next`, `test-results`), hacer un commit "baseline" del estado actual y crear un repo privado en GitHub (te confirmaré el nombre antes de crearlo y de hacer el primer push).
2. **`CLAUDE.md` (Orquestador):** el mismo flujo (spec → develop → testing → bucle de 3 vueltas como máximo → `docs/AGENT_LOG.md` → commit + push). Cambian la sección "Proyecto" (stack: Tailwind 4 + shadcn en lugar de CSS Modules; pnpm) y los comandos.
3. **`AGENTS.md`:** el bloque `nextjs-agent-rules` (lo regenera `next dev` 16).
4. **`.claude/agents/develop.md` y `testing.md`:** copiados con estos cambios:
   - En "UI", D-20…D-26 pasan a decir "Tailwind 4 + componentes shadcn en `src/common/components/ui`" en lugar de CSS Modules.
   - Se añaden directrices nuevas para lebauto:
     - **D-15:** emails con el HTML escapado y sin open redirects.
     - **D-16:** endpoints públicos (chat, leads) con validación Zod, honeypot y límite de peticiones.
     - **D-29:** imágenes siempre con `next/image` y `sizes`, y las fuentes con `next/font`.
     - **D-35:** ningún fichero de más de ~300 líneas.
5. **`.claude/skills/`:** se copian del Recetario:
   - `pods-architecture`, `supabase-best-practices`, `spec-driven-development`, `ux-loading-and-motion`, `nextjs-rendering-strategy`, `context7-docs`.
   - `modern-web-guidance` y las oficiales de Next: `next-bundle-optimizer`, `next-dev-loop`, `next-cache-components-adoption`, `next-cache-components-optimizer`. Estas se reinstalan con `npx skills add … --copy` para fijarlas en `skills-lock.json`.
   - Se ajusta `pods-architecture`: en Next 16 el **container es un Server Component async** que carga los datos y solo las islas interactivas son `'use client'`. La skill del Recetario dice que el container es `'use client'`, y eso está obsoleto con RSC.
   - Se crea una skill nueva, **`tailwind-shadcn`**: tokens en `@theme`, `cn()`, cómo añadir componentes con `npx shadcn@latest add` y cuándo hacer una isla de cliente.
6. **`.mcp.json`** con Context7 (igual que en el Recetario). **`.env.example`** con los nombres de variables (sin valores): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SITE_URL`, `DATABASE_URL`, `HUGGINGFACE_API_KEY`, `OPENROUTER_API_KEY`, `CORREO_*`.
7. **`specs/001-lebauto.md`:** la spec del comportamiento actual que hay que conservar, con criterios `AC-n` por funcionalidad (catálogo y filtros, ficha, cargadores, renting, venta, contacto, chatbot, login, CRUD del dashboard). Es la red de seguridad del refactor.

A partir de aquí, cada tarea `T-NN` la ejecuta el Orquestador con develop ⇄ testing.

## Fase 1 — Actualizar la plataforma (T-01 … T-04)
- **T-01 Dependencias:**
  - Fijar versiones: `next@16.x`, `react`/`react-dom@19.2+`, `@types/react@19`, `typescript@5.9`, `zod@4`, `@supabase/ssr` y `supabase-js` en la última versión, `recharts@3`, `lucide-react` en la última versión.
  - **Quitar:** next-auth, postgres (pasa a devDep para los scripts de migración), bcrypt, formidable, node-fetch, langchain, `@langchain/*`, openai, `@huggingface/transformers`, pdf-parse, pdfjs-dist, react-markdown, remark-gfm, `@heroicons/react`, `pnpm`, `next-view-transitions` (se sustituye por `<ViewTransition>` de React).
  - Mover las herramientas de build a devDependencies.
  - Añadir: `server-only`, `vitest`, `@playwright/test`, `eslint@9`, `eslint-config-next@16`, `tsx`, `babel-plugin-react-compiler`.
  - Scripts: `lint`, `typecheck` (`next typegen && tsc --noEmit`), `test`, `test:e2e`, `db:migrate`, `db:check-rls`. Copiar `scripts/migrate.ts`, `check-rls.ts` y `rls-check.ts` del Recetario.
- **T-02 Cambios incompatibles de Next 16:**
  - `src/middleware.ts` → `src/proxy.ts`, con el matcher limitado a `/dashboard/:path*` y `/sign-in`, para que las páginas públicas no esperen a `getUser()`.
  - `params`/`searchParams` como `Promise` tipadas con `PageProps<'/ruta'>` (typegen), quitando los `any` y los `Promise.resolve`.
  - Turbopack ya es el bundler por defecto, así que se quita `--turbopack`.
  - `next.config.ts`: `cacheComponents: true`, `reactCompiler: true`, `typedRoutes: true` e `images.remotePatterns` leyendo el host de la variable de entorno.
  - `viewport` como export del layout raíz (se quita el `<head>` manual y `user-scalable=no`).
- **T-03 Tailwind 4:**
  - Ejecutar `npx @tailwindcss/upgrade`, mover la configuración a `@theme` en `globals.css` (con los breakpoints `xxs`, `xs`, `max500` y `short`) y usar `@tailwindcss/postcss`.
  - `tailwindcss-animate` → `tw-animate-css`. Los colores HSL pasan a oklch.
  - Borrar `tailwind.config.ts` y `autoprefixer`.
- **T-04 shadcn:** reinstalar los 26 componentes de `ui/` con `shadcn@latest` (versión para React 19, sin `forwardRef`, con `data-slot`) y actualizar `components.json` a los nuevos alias (`@/common/components/ui`, `@/common/helpers`).

## Fase 2 — Reestructurar en pods (T-05 … T-12)
Estructura objetivo, según las diapositivas:
```
src/
  app/            → scenes (rutas finas: params → <XContainer/>), route groups (site)(dashboard)(auth)
  layouts/        → site (Navbar + Footer + chat), dashboard (Sidebar + Header), auth (centered)
  core/           → supabase/{server,browser,proxy}.ts · auth/get-user.ts (cache) · mail/ · ai/{embeddings,rag}.ts · env.ts (Zod) — todo 'server-only'
  common/         → components/ui (shadcn) · components/{SubmitButton,FormMessage,Pagination,ContactButtons} · hooks/{useDebouncedValue,useMediaQuery} · helpers/{cn,slug,format-price}
  pods/
    home/ car-catalog/ car-detail/ charger-list/ charger-detail/ renting/ sell-car/ contact/ chatbot/
    sign-in/ dashboard-overview/ dashboard-vehicles/ dashboard-chargers/ dashboard-features/
```
Cada pod contiene `api/` (consultas de Supabase o server actions, con `*.api-model.ts`), `*.container.tsx` (servidor), `*.component.tsx`, `*.vm.ts`, `*.mappers.ts` (con tests), `components/` y el barrel `index.ts`.

Qué hay que mover, de forma representativa:
- `src/app/supabase/supabase.ts` se reparte en el `api/` de cada pod.
- `src/app/actions/actions.ts` se reparte en los pods `sell-car/api`, `contact/api`, `chatbot/api` y `sign-in/api`. El transporter de nodemailer, que se crea 5 veces, pasa a un único `core/mail`. Las plantillas de email van a su propio fichero.
- `src/features/*` → `pods/*`. `features/header` → `layouts/site`.
- `src/utils/mappers.ts` → los `*.mappers.ts` de cada pod.
- Los 3 hooks de debounce se unifican en `useDebouncedValue`, y los 3 hooks responsive en `useMediaQuery`.
- Se parten los ficheros gigantes:
  - `VehicleFormDialog` (879 líneas): secciones del formulario más un esquema Zod compartido.
  - `CarFilters` (659 líneas): un componente por filtro, con el estado en la URL.
  - `ChargerFormDialog` y `CarGallery`.
- Se corrigen typos (`ElectricShargers` y `Nvbar`).

Orden: un pod por tarea, empezando por `car-catalog` y `car-detail`, que son el núcleo del negocio. Después vienen los demás pods públicos y por último el dashboard.

## Fase 3 — Datos y Supabase (T-13 … T-17)
- **T-13 Migración baseline:** volcar el esquema actual (`cars`, `car_images`, `car_features`, `features`, `chargers`, `documentos`, `match_documentos`, storage) en `supabase/migrations/0001_baseline.sql`. Después, `0002_rls.sql` con RLS: lectura pública de catálogo y cargadores, y escritura solo para el rol admin. Se usa una tabla `admins` o un claim, y lo comprobará `db:check-rls`. Por último, índices para los filtros (brand, price, year, km, fuel, slug).
- **T-14 Consultas:**
  - En el servidor, siempre el cliente de `core/supabase/server.ts`.
  - Quitar el N+1 con un select con joins: `cars(*, car_images(*), car_features(features(*)))`.
  - Fusionar `fetchCarById` con `fetchCarDetailsBySlug`.
  - Filtrar **solo en el servidor** desde `searchParams`, con paginación por `range()`. Se eliminan `useFilterStore.applyFilters` y la segunda llamada a `fetchCars()` de `LoadingContent.tsx`.
- **T-15 Mutaciones del dashboard:**
  - Server Actions con Zod, autorización del admin en el servidor (`core/auth`) y `updateTag()`/`revalidateTag()` del catálogo o del coche afectado.
  - Las imágenes se suben con signed upload URLs.
  - Se corrige el bug de `deleteCar`, que borra de `car_documents` en lugar de `documentos`.
- **T-16 Dashboard real:** el overview muestra estadísticas reales de la base de datos en lugar de los mocks de `SalesChart`, `VehicleDistributionChart` y `RecentVehicles`.
- **T-17 Auth:** solo Supabase Auth.
  - Se borran las acciones muertas de sign-up y reset que apuntaban a `/protected`, o se rehacen si las quieres.
  - Se validan los `redirect_to` y se elimina el cliente duplicado de `signInAction` y de `AuthButton`.

## Fase 4 — Renderizado y caché con Next 16 (T-18 … T-20)
Siguiendo las skills `nextjs-rendering-strategy` y `next-cache-components-*`:

| Ruta | Estrategia |
|---|---|
| `/`, `/renting`, `/contacto`, `/gestion-de-venta`, `not-found` | Estáticas (○). Las secciones "eléctricos" y "cargadores" de la home pasan a `'use cache'` con `cacheTag('cars')`, sin `useEffect`. |
| `/coches-segunda-mano` | Shell estático + `<Suspense>` con skeleton; los resultados son dinámicos según `searchParams` (PPR). |
| `/coches-segunda-mano/[slug]`, `/cargadores/[slug]` | `generateStaticParams` + `'use cache'` + `cacheTag('car:'+id)` y `cacheLife('hours')`. Metadata y página comparten la consulta. |
| `/dashboard/**` | SSR dinámico con streaming. Se comprueba el usuario en el layout del dashboard (no en el layout raíz). |

- Las islas `'use client'` quedan solo en filtros, galería, simulador de financiación, chatbot, diálogos y gráficos. El objetivo es bajar de 82 a unas 25.
- Se ejecuta `next-bundle-optimizer` y se cargan con `next/dynamic` los paquetes pesados: recharts, el mapa y embla.

## Fase 5 — React 19 y UX (T-21 … T-23)
- **Formularios:** `useActionState` + `useFormStatus` + `<form action>`, que funcionan sin JS. Los errores por campo son accesibles. `useOptimistic` en las tablas del dashboard. React Compiler evita los `useMemo`/`useCallback` manuales.
- **Navegación:** `<ViewTransition>` de React en lugar de `next-view-transitions`. framer-motion → `motion` solo donde aporte (el menú curvo); el resto con CSS y `prefers-reduced-motion`.
- **Modern Web Guidance:** `<dialog>`/popover nativos donde se pueda, `next/image` con `sizes` en todas las imágenes (quedan `<img>` sueltos en `HeroSection`, `TestimonialsSection` y `MotorFilter`), LCP del hero con `preload`, accesibilidad, 375 px y skeletons con la forma del contenido.
- **SEO:** JSON-LD real (hoy tiene teléfono y dirección falsos). Se crea `/cargadores/cargador-opengraph.png`, que no existe, o se genera con `opengraph-image.tsx`. `sitemap.ts` y `robots.ts`.

## Fase 6 — IA y seguridad (T-24 … T-25)
- **T-24 IA (se mantienen OpenRouter y Hugging Face):**
  - `core/ai/` con `server-only`. La clave se lee de forma perezosa, porque hoy lanza un error al importar el módulo.
  - `/api/chat` con Zod, límite de peticiones y errores genéricos.
  - Decidir si se conecta el chatbot RAG a la UI. Hoy nadie llama a `/api/chat`, así que te preguntaré en ese momento.
  - Reindexar `documentos` al editar o borrar un coche.
- **T-25 Seguridad:**
  - Escapar el HTML de los emails, o usar React Email.
  - Honeypot y límite en los leads.
  - Quitar los 15 `console.log` (uno de ellos registra emails).
  - Variables de entorno validadas en `core/env.ts`.

## Fase 7 — Tests y cierre (T-26 …)
- **Vitest:** mappers, esquemas Zod, filtros desde `searchParams` y escapado de emails.
- **Playwright** (`e2e/`): un test por `AC-n` con interfaz (catálogo y filtros, ficha, formularios sin JS, login y CRUD del dashboard con un usuario de prueba `@example.net`, 375 px).
- Actualizar el README (que todavía menciona Prisma).

## Ficheros y recursos que se reutilizan
- Del Recetario: `CLAUDE.md`, `AGENTS.md`, `.claude/agents/{develop,testing}.md`, `.claude/skills/*`, `.mcp.json`, `skills-lock.json`, `scripts/{migrate,check-rls,rls-check}.ts`, `playwright.config.ts`, `vitest.config.mts` y `eslint.config.mjs`.
- De lebauto se conservan, movidos a su pod: `src/lib/supabase/{server,client,middleware}.ts` → `core/supabase`; `src/lib/chat-flows/*` y `chatFlow.ts` → `pods/chatbot`; `src/utils/{chatbot,getHFEmbedding,carDocuments}.ts` → `core/ai`; `src/lib/validations.ts` → los esquemas Zod de cada pod; `src/utils/slug.ts` → `common/helpers`.

## Verificación
Cada tarea se cierra con PASS de testing, que ejecuta:
- `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` y `pnpm test:e2e`.
- Revisión de la tabla de rutas de `next build`: las rutas estáticas con ○ y el catálogo con PPR.
- `pnpm db:check-rls` contra `DATABASE_URL`.
- Revisión manual con Playwright a 375 px y sin JS.

Al terminar cada fase:
- Lighthouse o Core Web Vitals de la home, el catálogo y la ficha, comparados con el baseline (LCP, INP, CLS y tamaño del JS de cliente).
- Las métricas de `next-bundle-optimizer`.
- Probar en el navegador los flujos completos: filtrar, abrir una ficha, enviar un lead y hacer el CRUD de un coche en el dashboard (comprobando que la ficha se invalida).

**Antes de empezar necesitaré de ti:** un `.env.local` con las claves (no está en la carpeta), un `DATABASE_URL` para el volcado del esquema y las migraciones, y el nombre del repo de GitHub.

---

## Seguimiento de tareas (lo actualiza el Orquestador)
- [x] T-00 Infraestructura del equipo de agentes (Fase 0)
- [ ] T-00b Recuperar Supabase: proyecto nuevo, restaurar backup de BD (`pg_restore`) y subir el backup de Storage; volcar el esquema a `supabase/migrations/0001_baseline.sql` (adelanta la primera parte de T-13)
- [ ] T-01 Dependencias, scripts y herramientas (lint, vitest, typecheck)
- [ ] T-02 Cambios incompatibles de Next 16 (proxy.ts, PageProps, next.config, viewport)
- [ ] T-03 Tailwind 4
- [ ] T-04 shadcn para React 19 + nuevos alias
- [ ] T-05 core/ (supabase, auth, mail, env) y common/ (helpers, hooks unificados)
- [ ] T-06 layouts/ (site, dashboard, auth)
- [ ] T-07 pod car-catalog (filtros por componente, estado en URL)
- [ ] T-08 pod car-detail
- [ ] T-09 pods charger-list y charger-detail
- [ ] T-10 pods home, renting
- [ ] T-11 pods sell-car, contact, chatbot, sign-in
- [ ] T-12 pods del dashboard (vehicles, chargers, features, overview)
- [ ] T-13 Migración baseline + RLS + índices + db:check-rls
- [ ] T-14 Consultas sin N+1 y filtrado solo en servidor
- [ ] T-15 Mutaciones del dashboard con Server Actions + updateTag (+ bug deleteCar)
- [ ] T-16 Dashboard con estadísticas reales
- [ ] T-17 Auth solo Supabase, redirects validados
- [ ] T-18 Cache Components en rutas públicas
- [ ] T-19 Catálogo PPR + fichas cacheadas
- [ ] T-20 Reducir islas de cliente + bundle optimizer
- [ ] T-21 Formularios React 19 (useActionState, sin JS)
- [ ] T-22 ViewTransition, motion, Modern Web Guidance, imágenes
- [ ] T-23 SEO (JSON-LD real, sitemap, robots, OG)
- [ ] T-24 IA (core/ai, /api/chat seguro, reindexado)
- [ ] T-25 Seguridad (escapado emails, honeypot, límites, console.log, env)
- [ ] T-26 Playwright e2e + README


> **Nota (2026-11-25):** el proyecto Supabase original (`Lebauto`, pausado el 11-08-2025) ya no se puede restaurar desde el dashboard. Hay que crear un proyecto nuevo y restaurar en él el backup de la base de datos y el de Storage (`~/Documents/mwqlcfaptwgoylhdngmb.storage.zip`, 14 ficheros). El host de imágenes de `next.config.ts` cambiará: se leerá de `NEXT_PUBLIC_SUPABASE_URL` (T-02).
>
> **Git:** el trabajo va en la rama `refactor/next16` de https://github.com/jonanoguerales/lebauto (repo **público**), que parte de `master`. Se integra en `master` con un PR al terminar cada fase.
