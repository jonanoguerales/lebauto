---
name: tailwind-shadcn
description: Reglas de estilos de Lebauto con Tailwind CSS 4 y shadcn/ui (tokens en @theme, cn(), cómo añadir o actualizar componentes, dark mode, breakpoints propios, cuándo un componente debe ser isla de cliente). Úsala antes de escribir o cambiar clases, estilos, tokens o componentes de UI.
---

# Tailwind CSS 4 + shadcn/ui

Consulta siempre la documentación actual con Context7 (`tailwindcss` v4, `shadcn/ui`), porque Tailwind 4 cambió
mucho respecto a la v3 (no hay `tailwind.config.ts`, la configuración es CSS).

## 1. Configuración (CSS-first)
- Todo en `src/app/globals.css`:
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  @custom-variant dark (&:where(.dark, .dark *));

  @theme {
    --breakpoint-xxs: 22rem;   /* breakpoints propios del proyecto */
    --breakpoint-xs: 30rem;
    --color-brand: oklch(…);
  }
  :root { --background: oklch(…); --foreground: oklch(…); /* tokens de shadcn */ }
  .dark { --background: oklch(…); … }
  @theme inline { --color-background: var(--background); … }
  ```
- PostCSS con `@tailwindcss/postcss` (sin `autoprefixer`: Tailwind 4 ya lo hace).
- Plugins v4 con `@plugin "…"` en el CSS (p. ej. `@tailwindcss/forms` solo si de verdad se usa).
- Colores en **oklch**. Nada de hex/rgb sueltos en componentes: si un color se repite, es un token.

## 2. Componentes shadcn
- Viven en `src/common/components/ui/` (alias en `components.json`). Se añaden o actualizan con
  `pnpm dlx shadcn@latest add <componente>`; no se copian a mano de otro proyecto.
- Versión para React 19: sin `forwardRef` (`ref` es una prop), con `data-slot`. Si un componente generado
  queda obsoleto, se **regenera**, no se parchea.
- Se pueden editar (son nuestros), pero los cambios de marca van en tokens, no en cada componente.
- Variantes con `cva` (`class-variance-authority`); combinar clases siempre con `cn()` de `@/common/helpers/cn`.
- Iconos: `lucide-react`, importados de uno en uno.

## 3. Cliente o servidor
- Los componentes shadcn basados en Radix con estado (Dialog, DropdownMenu, Select, Popover, Tabs, Accordion,
  Toast, Carousel, Sheet, Tooltip) son **de cliente**: úsalos dentro de islas pequeñas, no conviertas la página
  entera en cliente para poder usarlos.
- Button, Card, Badge, Input, Label, Table, Separator, Skeleton funcionan en Server Components.
- Antes de usar un componente de Radix, valora el elemento nativo (`<dialog>`, `<details>`, `popover`,
  `<select>`) según `modern-web-guidance`: menos JS y funciona sin hidratar.

## 4. Buenas prácticas
- Mobile-first: estilos base para 375 px y `sm:`/`md:`/`lg:` hacia arriba. Sin scroll horizontal.
- Container queries (`@container`, `@sm:`) para tarjetas que cambian según su hueco (grid/lista del catálogo).
- Animaciones con `motion-safe:` / `motion-reduce:` (respeta `prefers-reduced-motion`).
- Dark mode con la clase `.dark` en `<html>` y los tokens; contraste comprobado en ambos.
- Orden de clases consistente (layout → caja → tipografía → color → estados); si una lista de clases se repite
  en 3+ sitios, extrae un componente o una variante `cva`.

## Checklist
- [ ] Sin `tailwind.config.*`; tokens en `@theme`.
- [ ] Componentes de `src/common/components/ui`, generados con `shadcn@latest`.
- [ ] Islas de cliente solo donde hay componentes con estado.
- [ ] 375 px sin scroll horizontal, contraste claro/oscuro y `motion-safe`.
