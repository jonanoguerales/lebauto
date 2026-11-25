---
name: spec-driven-development
description: Flujo SDD + TDD del proyecto. Úsala al empezar cualquier funcionalidad nueva o cambio de comportamiento: primero la spec en specs/, luego los tests, luego el código.
---

# Spec-Driven Development (SDD) + TDD

1. **Spec primero** — crea o actualiza `specs/NNN-<feature>.md` con la plantilla de abajo.
   La spec es la fuente de verdad: si el código y la spec discrepan, se corrige uno de los dos a propósito.
2. **Tests desde los criterios** — cada criterio de aceptación `AC-x` se convierte en al menos
   un test (Vitest) que lo nombra: `it('AC-2: ...')`. Deben fallar antes de implementar.
3. **Implementación mínima** hasta que los tests pasen, siguiendo `pods-architecture` y
   `supabase-best-practices`. Consulta APIs con `context7-docs`.
4. **Verificación** — `npm run lint && npm run typecheck && npm test && npm run build`, y prueba manual en el navegador.
5. **Cerrar la spec** — marca el estado `Implementada` y anota desviaciones.

## Plantilla

```md
# NNN — <Título>
Estado: Borrador | Aprobada | Implementada

## Contexto
Por qué existe y qué problema resuelve.

## Requisitos
- R1 ...

## Criterios de aceptación
- AC-1 Dado ..., cuando ..., entonces ...

## Contratos
Tipos, endpoints, tablas afectadas.

## Fuera de alcance
```
