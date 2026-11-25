---
name: pods-architecture
description: Reglas de la arquitectura por pods del proyecto (scenes, pods, core, common, layouts, barrels, container/component, viewModel/mappers) adaptada a Next.js 16 con Server Components. Úsala antes de crear o mover cualquier fichero en src/.
---

# Arquitectura por pods (Next.js 16 + RSC)

Basada en la arquitectura de Lemoncode («Componentes de nivel superior»): **Component** = estado + ciclo de
vida + render; **Container** = binding con la fuente de datos; **Barrel** = qué exponemos a niveles superiores.

```
src/
  app/        → "scenes": rutas de Next.js (route groups (site) (dashboard) (auth)). Finas: params → <XContainer/>.
  layouts/    → marcos de página: site (navbar + footer + chat), dashboard (sidebar + header), auth (centrado).
  pods/       → una carpeta por funcionalidad, autocontenida.
  core/       → infraestructura compartida: supabase, auth, mail, ai, env. Todo con `import 'server-only'`
                salvo el cliente de navegador.
  common/     → piezas reutilizables sin dominio: components/ui (shadcn), components, hooks, helpers.
```

## Anatomía de un pod (`src/pods/<nombre>/`)
| Fichero | Responsabilidad |
|---|---|
| `api/` | Acceso a datos: consultas Supabase (`*.api.ts`, `server-only`), Server Actions (`*.actions.ts`, `'use server'`) y modelos de la API/BD (`*.api-model.ts`). Único sitio que habla con Supabase o `fetch`. |
| `<pod>.container.tsx` | **Server Component `async`** (por defecto). Recibe params/searchParams ya resueltos, llama a `api/`, mapea a VM y pasa el VM al componente. Aquí van `'use cache'`, `cacheTag`, `<Suspense>`. |
| `<pod>.component.tsx` | Presentación: recibe el ViewModel por props y pinta. Server Component salvo que necesite interactividad. Sin acceso a datos. |
| `components/` | Subcomponentes privados del pod. Las **islas** interactivas llevan `'use client'` y son lo más pequeñas posible (un filtro, la galería, un diálogo). |
| `<pod>.vm.ts` | ViewModel: tipos que necesita la UI (no los de la BD). |
| `<pod>.mappers.ts` | Funciones puras api-model → VM (y VM/form → api-model). Con tests (`*.mappers.test.ts`). |
| `<pod>.schema.ts` | Esquemas Zod de formularios/entradas (compartidos entre la isla de cliente y la Server Action). |
| `<pod>.hooks.ts` | Hooks propios del pod (opcional, solo en islas de cliente). |
| `index.ts` | **Barrel**: exporta solo lo público (normalmente el container y, si hace falta, su skeleton). |

### Diferencia con la arquitectura original (React SPA)
En la SPA el container era un componente de cliente que hacía `fetch` en un efecto. Con RSC **el container es
de servidor** y lee los datos antes de pintar: nada de `useEffect` + `fetch` para cargar datos. Si una parte
necesita estado de cliente (filtros, formulario), el container de servidor renderiza una **isla** de cliente y
le pasa el VM por props; las escrituras vuelven al servidor por Server Actions del `api/` del pod.

## Reglas
1. Fuera de un pod se importa **solo** desde su barrel: `import { CarCatalogContainer } from '@/pods/car-catalog'`.
2. Un pod no importa de otro pod. Lo compartido sube a `common/` (UI) o `core/` (dominio/infra).
3. Las páginas de `app/` no contienen lógica: resuelven `params`/`searchParams` (tipados con `PageProps<'/ruta'>`)
   y renderizan un container. `generateMetadata` llama a la misma función de `api/` (cacheada con `cache()` o
   `'use cache'`) para no consultar dos veces.
4. Los route handlers (`app/api/**/route.ts`) son finos: validan con Zod y delegan en `core/` o en el `api/` de un pod.
5. `core/` no importa de `pods/` ni de `app/`. Código de servidor marcado con `import 'server-only'`.
6. Mapper y VM antes que el componente: la UI nunca depende del shape de la BD.
7. Estilos con Tailwind 4 y componentes de `common/components/ui` (skill `tailwind-shadcn`).
8. Nombres de carpetas en kebab-case (`car-catalog`), ficheros `<pod>.<rol>.ts(x)`; componentes en PascalCase.

## Pods de Lebauto
`home` · `car-catalog` · `car-detail` · `charger-list` · `charger-detail` · `renting` · `sell-car` · `contact`
· `chatbot` · `sign-in` · `dashboard-overview` · `dashboard-vehicles` · `dashboard-chargers` · `dashboard-features`.
