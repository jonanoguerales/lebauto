---
name: context7-docs
description: Consultar la documentación oficial y actualizada de cualquier librería (Next.js, React, Supabase, Zod, Vitest...) con el MCP Context7 antes de usar su API. Úsala siempre que vayas a escribir código contra una librería externa o dudes de una firma.
---

# Documentación al día con Context7

Los modelos se entrenan con versiones antiguas. Este proyecto usa versiones recientes
(Next.js 16, React 19, Zod 4, Supabase SSR), así que **no adivines APIs**.

## Cómo
El MCP está declarado en `.mcp.json` (servidor `context7`, sin claves).
1. `resolve-library-id` con el nombre de la librería (p. ej. `@supabase/ssr`).
2. `get-library-docs` con ese id y un `topic` concreto (`indexes`, `route handlers`, `structured output`).
3. Usa lo que devuelva; si choca con lo que "recuerdas", gana la documentación.

## Además
- Next.js 16 trae su documentación dentro de `node_modules/next/dist/docs/` (ver `AGENTS.md`).
  Léela para rutas, caché, `proxy.ts` y configuración de segmentos.
- Para HTML/CSS/JS de cliente, usa también la skill `modern-web-guidance` de Google.

## Librerías clave del proyecto
| Área | Librería |
|---|---|
| Framework | `next` 16, `react` 19 |
| Datos y auth | `@supabase/supabase-js`, `@supabase/ssr` (además: `node_modules/@supabase/ssr/README.md`) |
| Validación | `zod` (v4) |
| Estilos y UI | `tailwindcss` (v4), `shadcn/ui`, `radix-ui`, `lucide-react` |
| Gráficos y carrusel | `recharts`, `embla-carousel-react` |
| Email | `nodemailer` |
| IA | `@huggingface/inference` (embeddings), OpenRouter (API compatible con OpenAI) |
| Tests | `vitest`, `@playwright/test` |
