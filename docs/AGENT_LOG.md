# Registro del equipo de agentes

Una entrada por tarea `T-NN` (formato en `CLAUDE.md`).

## T-00 · Infraestructura del equipo de agentes
- Hecha por el Orquestador (sin bucle Develop ⇄ Testing): CLAUDE.md, agentes, skills, Context7, spec 001.

## T-00b · Recrear la base de datos de Supabase
- Spec: specs/002-base-de-datos.md (AC-1 … AC-9)
- Vuelta 1 · Develop: migraciones 0001-0003 (esquema, pgvector, RLS catálogo público + admin, bucket), check-rls (57/57), seed idempotente (12 coches, 22 características, 6 cargadores), upload-storage, make-admin, 40 tests · Testing: PASS
- Pendiente del humano: `SUPABASE_SECRET_KEY` + `pnpm db:upload-storage` (AC-7); decidir cobertura de filtros del seed (AC-6)
- Nota: Context7 no estaba disponible para los subagentes en esta sesión (MCP de `.mcp.json` sin aprobar)
- Cierre (2026-11-25): fotos subidas (AC-7 ✔), admin dado de alta, cobertura del seed aceptada por el humano (AC-6 ✔).

## T-01 · Dependencias, scripts y herramientas
- Spec: docs/REFACTOR_PLAN.md (T-01, AC-1 … AC-8); comportamiento a conservar: specs/001-lebauto.md
- Vuelta 1 · Develop: Next 16.4.6, React 19.3.1, TS 5.9, Zod 4, recharts 3, lucide 1.x, Supabase al día; fuera 15 dependencias muertas (+embla-carousel); `<ViewTransition>` de React en lugar de next-view-transitions; scripts lint/typecheck/test/test:e2e + Playwright mínimo; Zod 4 en validations (+7 tests); SVG de marcas en SocialIcons; cliente HF perezoso para que el build no falle · Testing: FAIL (D-24/D-26: transición sin prefers-reduced-motion; D-26: guías MWG sin listar)
- Vuelta 2 · Develop: regla reduced-motion para ::view-transition-* en global.css y guías MWG listadas · Testing: PASS
- Decisión del humano: los 42 errores de lint heredados pasan a T-01b; se mantienen los SVG de redes sociales
- Pendiente: menú móvil pierde el foco al navegar (T-22); fijar dependencias secundarias con `^`; `console.time` en getHFEmbedding (al mover a core/ai)
- Commit: 29b6bd8

## T-01b.1 · Lint en verde (1/3): `any` y purity
- Spec: brief del Orquestador (AC-1 … AC-6); comportamiento a conservar: specs/001-lebauto.md
- Vuelta 1 · Develop: 19 `no-explicit-any` fuera (CarRow/CarRowWithRelations, PageProps en páginas, catch con instanceof Error, toast tipado), sidebar con useState; destapados 2 bugs de tipos (filtros URL como string, null→undefined en mapper); +3 tests de mappers; lint 42→22 · Testing: PASS
- Pendiente: `/api/chat` devuelve error.message al cliente (T-11); fetchFilteredCars sin mapper (T-07); CarRow desde tipos `Database` (T-05/T-13)
- Commit: 3482aa4

## T-01b.2 · Lint en verde (2/3): set-state-in-effect en hooks, home, header, chatbot
- Spec: brief del Orquestador (AC-1 … AC-6); comportamiento a conservar: specs/001-lebauto.md
- Vuelta 1 · Develop: useSyncExternalStore (useMediaQuery, carousel), cálculo en render (SavingsCalculator + calculateSavings con tests), «ajustar estado durante el render» (Nvbar, ChatBotPopupWrapper, SellCarForm), LocationsSection a Server Component, setState solo asíncrono en secciones de la home; MWG: form-factor-adaptation, carousel; lint 22→11 · Testing: PASS (CLS medido 0, sin errores de hidratación)
- Pendiente: SavingsCalculator no se usa (decidir); cargas de la home a Server Component con 'use cache' (pods/Fase 4); skeletons de CarSkeleton 20–90 px más bajos que el contenido (D-22, pods)
- Commit: 3b88b78

## T-01b.3 · Lint en verde (3/3): set-state-in-effect en ficha, catálogo y dashboard
- Spec: brief del Orquestador (AC-1 … AC-7); comportamiento a conservar: specs/001-lebauto.md
- Vuelta 1 · Develop: cuota en render (calculateMonthlyPayment + tests), CarGallery con estado en handlers y prevImages, selectAllModelsState derivado, loader diferido sin setter síncrono, key en ChargerFormDialog (chargerFormDefaults + tests) y Date.now en el submit, ImageManagerDialog con prevOpen/prevVehicle; `pnpm lint` 0 errores · Testing: PASS
- Decisión del Orquestador: los tests nuevos no cuentan en el tope de ~300 líneas (296 sin tests)
- Pendiente: D-35 en CarGallery/CarFilters/CatalogClient/ChargerFormDialog (pods T-07/T-08/T-12); diálogos del dashboard sin probar en navegador (e2e con admin, D-34); miniaturas invisibles sin JS (T-08)
- Commit: f32410f

## T-01b · Lint en verde — cerrada: `pnpm lint` 0 errores (42 → 0) en 3 encargos

## T-01c · Calculadora de ahorro en la portada
- Spec: specs/001-lebauto.md (AC-1: la portada muestra la calculadora de ahorro); decisión del humano: tras la sección de vehículos eléctricos
- Vuelta 1 · Develop: SavingsCalculator en `/` (sigue ○, HTML con cifras por defecto), sliders con aria-labelledby/aria-valuetext y área táctil de 44 px, SavingsNumberField con parseo seguro (sin NaN) y error con aria-invalid/aria-describedby, formatCurrency/formatPrice es-ES con tests; MWG: slider, forms · Testing: PASS
- Decisión del Orquestador: diff de ~360 líneas sin tests aceptado (una sola unidad: reescritura de un componente)
- Pendiente: el modo oscuro no existe aún (Tailwind 3 purga `.dark`), revisar contraste dark en T-03; thumb invisible sin JS e indicador de pestaña activa (T-04); región aria-live global para errores (T-04); zoom bloqueado en layout (T-02)
- Commit: cc7d307

## T-02a · Next 16: proxy, PageProps, viewport, reactCompiler y typedRoutes
- Spec: docs/REFACTOR_PLAN.md (T-02, AC-1 … AC-8); comportamiento a conservar: specs/001-lebauto.md
- Vuelta 1 · Develop: middleware → `src/proxy.ts` (matcher `/dashboard/:path*`, `/sign-in`), PageProps en cargadores/[slug] y sign-in (+formMessage con tests), sin `--turbopack`, `reactCompiler` y `typedRoutes` (as Route solo en enlaces a páginas inexistentes), `export const viewport` sin bloqueo de zoom, validación del redirect de forgotPassword · Testing: FAIL (D-15: `/\t/evil.com` salta el filtro)
- Vuelta 2 · Develop: `toSafeInternalPath` con `new URL` y comprobación de origen + tests · Testing: FAIL (D-15: `/..//evil.com` normaliza a `//evil.com`)
- Vuelta 3 · Develop: rechazo de segmentos `.`/`..` (también `%2e`) y revalidación del valor devuelto · Testing: PASS (fuzz de 2,47 M entradas sin salidas del host)
- Pendiente: decisión del humano sobre enlaces a páginas inexistentes (footer, `/renting/oferta/{id}`, `/vehiculos/{id}`); cookies del proxy en redirecciones, `redirect_to` de /auth/callback y D-13 en el layout del dashboard (T-17); `<main>` anidados en la ficha (T-08)
- Commit: 8405c3c

## T-02b · Next 16: activar cacheComponents
- Spec: docs/REFACTOR_PLAN.md (T-02, AC-1 … AC-8); comportamiento a conservar: specs/001-lebauto.md
- Vuelta 1 · Develop: `cacheComponents: true`; `revalidate` → `'use cache'` + `cacheLife('minutes')` (listado y fichas de cargadores, ficha de coche); año del footer cacheado (`cacheLife('days')`); `instant = false` en fichas `[slug]` (usePathname del Navbar) y `/sign-in` (error visible sin JS); VehicleFormDialog en `<Suspense>` · Testing: PASS (comparado con d5ff1a7 con y sin JS; sin «Transition was skipped»)
- Pendiente (Fase 4): quitar los `instant = false`; `cacheTag` e invalidación (D-36); cliente de Supabase de servidor anónimo en lugar de `createBrowserClient` (D-11); decidir `partialPrefetching`; `null` cacheado 1 min si Supabase falla; catálogo y fichas sin contenido sin JS (ya pasaba); conflicto `<Suspense>` en streaming + `<ViewTransition>`; e2e: filtrar elementos visibles (páginas anteriores ocultas en el DOM)
- Commit: baee2b8

## T-02c · Enlaces internos sin 404
- Spec: specs/001-lebauto.md (AC-33 nuevo, AC-30)
- Vuelta 1 · Develop: Footer (Tasación → /gestion-de-venta, Financiación y Garantía → /contacto, fuera FAQ y legales, rejilla a 3 columnas), simulador de financiación → /contacto («Pregúntanos»), «Me interesa» del renting → /contacto, vehículos recientes → /dashboard/vehiculos; sin `as Route` en literales · Testing: PASS
- Observaciones: cuando haya páginas de financiación/garantía, enlazarlas o cambiar el texto; redirecciones de actions.ts a /sign-up, /forgot-password y /protected/reset-password (inalcanzables) → T-17; enlaces sociales con `href="#"` y sin 44 px (D-23) → T-03 o tarea de contenido; RecentVehicles enlazará a cada coche cuando exista la edición por id.
- Commit: 71e7e83

## T-03 · Tailwind 4
- Spec: specs/001-lebauto.md (conservar AC-30, AC-31 y breakpoints propios)
- Vuelta 1 · Develop: codemod `@tailwindcss/upgrade`; configuración en `src/styles/global.css` (`@theme`, `@custom-variant` dark/max500/short, `@utility container`, tokens shadcn en oklch con `@theme inline`); `@tailwindcss/postcss`; `tw-animate-css`; fuera `tailwind.config.ts`, autoprefixer y tailwind-scrollbar (`custom-scrollbar` rehecha con `scrollbar-color`); capa `tailwind-v3-compat.css` (borde, cursor, `space-*`); animaciones propias solo con `prefers-reduced-motion: no-preference`; `flex-wrap` en los botones de `/contacto` (desbordaban 2 px a 375). (El primer Develop se cortó dos veces por la suspensión del Mac; un segundo Develop terminó la misma entrega.) · Testing: PASS (paridad verificada compilando la v3: tokens ≤0,87/255 por canal, breakpoints, container, `space-*`)
- Observaciones: spinners (`Loader2`) y skeletons no se animan, igual que en la v3 (`animate-spin/pulse: initial`) → reactivarlos con motion-safe en T-04/T-22; tw-animate-css sin reduced motion → T-04/T-22; contraste del scrollbar 1,5:1 → T-22; `--bg-primary`, `animate-fade-in` y `bg-grid-white` no existen (de antes); CarGallery 342, gestion-de-venta 309 y CatalogClient 306 líneas → dividir en T-07/T-08/T-10; retirar `tailwind-v3-compat.css` cuando los `space-*` pasen a gap; `hover:` de la v4 solo con `(hover:hover)`.
- Commit: 59d1783
