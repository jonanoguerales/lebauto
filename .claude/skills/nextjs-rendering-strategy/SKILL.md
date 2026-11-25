---
name: nextjs-rendering-strategy
description: Decide y comprueba cómo se renderiza cada ruta de Lebauto en Next.js 16 con Cache Components (estática, PPR con huecos dinámicos, cacheada con 'use cache', SSR dinámico o isla de cliente). Úsala antes de crear o tocar una ruta, un layout, un Server/Client Component o cualquier lectura de cookies(), headers(), searchParams o datos de Supabase.
---

# Estrategia de renderizado (Next.js 16 + Cache Components)

Fuente: documentación del paquete instalado (`node_modules/next/dist/docs/01-app/`: guías de
`cache-components`, `use cache`, `cacheTag`, `cacheLife`, `updateTag`, streaming) y Context7 (`/vercel/next.js`).
Para adoptar o afinar la caché, sigue además las skills `next-cache-components-adoption` y
`next-cache-components-optimizer`.

## Modelo mental
Con `cacheComponents: true` (`next.config.ts`), **cada ruta es un shell estático** pre-renderizado y lo que
depende de la petición (cookies, headers, searchParams, datos sin cachear) va en **huecos dinámicos dentro de
`<Suspense>`** (Partial Prerendering). Los datos que son iguales para todos se cachean con `'use cache'` y se
invalidan por etiqueta (`cacheTag`) cuando el dashboard los modifica (`updateTag` en la Server Action).

> ⚠️ Lección del Recetario (T-03): con Cache Components, un formulario enviado **sin JavaScript** que devolvía
> un error del servidor respondió sin `<html>` (página en blanco). En Lebauto los formularios públicos (contacto,
> vender coche, login) **deben probarse sin JS en el caso de error** en cuanto se active `cacheComponents`.
> Si falla, se resuelve en la tarea (p. ej. Server Action que redirige con el error en la URL, o la ruta del
> formulario fuera del shell PPR) y se documenta aquí. No se desactiva Cache Components sin preguntar al humano.

## Regla de decisión
1. ¿Contenido **igual para todos** y que cambia poco? → **Estático**. Si lee de Supabase, la función de datos
   lleva `'use cache'` + `cacheTag(...)` + `cacheLife(...)`. Usa el cliente de Supabase **sin cookies** (anon,
   lectura pública por RLS): dentro de `'use cache'` no se pueden leer `cookies()`.
2. ¿Depende de la **URL** (filtros del catálogo) o de **quién eres** (dashboard)? → hueco **dinámico** dentro de
   `<Suspense fallback={<Skeleton/>}>`; el resto de la página sigue siendo shell estático.
3. ¿Hace falta **interactividad** en el navegador? → **isla** `'use client'` pequeña dentro de una página de
   servidor. Nunca una página entera de cliente.
4. **Nunca** se piden datos desde el navegador con `useEffect`/`fetch` para pintar la página.
5. Los formularios funcionan sin JavaScript (D-21): JS solo mejora (pendiente, optimista, transiciones).

## Decisión por ruta

| Ruta | Renderizado | Detalle |
|---|---|---|
| `/` | Estática | Secciones «eléctricos» y «cargadores» con datos `'use cache'` + `cacheTag('cars')` / `cacheTag('chargers')`. Sin `useEffect`. |
| `/renting`, `/contacto`, `/gestion-de-venta`, `not-found` | Estáticas | Los formularios son islas; envían por Server Action. |
| `/coches-segunda-mano?…` | PPR | Cabecera, filtros (opciones cacheadas) y layout en el shell; **resultados** en `<Suspense>` leyendo `searchParams` y filtrando **en el servidor**. |
| `/coches-segunda-mano/[slug]` | Estática por slug | `generateStaticParams` + datos `'use cache'` con `cacheTag('car:<id>')`, `cacheLife('hours')`. `generateMetadata` reutiliza la misma función. `notFound()` si no existe. |
| `/cargadores`, `/cargadores/[slug]` | Estáticas | Igual que arriba con `cacheTag('chargers')` / `cacheTag('charger:<id>')`. |
| `/sign-in` | Estática | La redirección «con sesión → /dashboard» la hace `proxy.ts`. |
| `/dashboard/**` | Dinámica | Layout del dashboard comprueba usuario + admin en el servidor y hace streaming; tablas en `<Suspense>`. Mutaciones con Server Actions + `updateTag`. |
| `/api/chat` | Route handler dinámico | Zod + límite de peticiones. |

## Organización
- Route groups: `src/app/(site)/`, `src/app/(auth)/`, `src/app/(dashboard)/`.
- El layout raíz solo pone `<html>`, metadatos, `viewport`, fuentes y estilos: **no lee la sesión**.
- `src/proxy.ts`: `matcher` limitado a `/dashboard/:path*` y `/sign-in` (las páginas públicas no pagan `getUser()`).

## Cómo se comprueba (Testing, D-28)
- `pnpm build` y revisar la tabla de rutas: contenido estático (○), PPR (◐) para el catálogo, dashboard dinámico.
  Si una ruta que debería ser estática sale dinámica, es FAIL: encuentra qué lee la petición.
- Buscar `'use client'` en el diff: cada uno debe ser una isla justificada.
- Buscar `useEffect` con `fetch`/Supabase: no debe haber carga de datos desde el cliente.
- Tamaño del JS de cliente: skill `next-bundle-optimizer` (modo auditoría).
