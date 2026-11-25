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
