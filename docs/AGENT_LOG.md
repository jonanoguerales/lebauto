# Registro del equipo de agentes

Una entrada por tarea `T-NN` (formato en `CLAUDE.md`).

## T-00 · Infraestructura del equipo de agentes
- Hecha por el Orquestador (sin bucle Develop ⇄ Testing): CLAUDE.md, agentes, skills, Context7, spec 001.

## T-00b · Recrear la base de datos de Supabase
- Spec: specs/002-base-de-datos.md (AC-1 … AC-9)
- Vuelta 1 · Develop: migraciones 0001-0003 (esquema, pgvector, RLS catálogo público + admin, bucket), check-rls (57/57), seed idempotente (12 coches, 22 características, 6 cargadores), upload-storage, make-admin, 40 tests · Testing: PASS
- Pendiente del humano: `SUPABASE_SECRET_KEY` + `pnpm db:upload-storage` (AC-7); decidir cobertura de filtros del seed (AC-6)
- Nota: Context7 no estaba disponible para los subagentes en esta sesión (MCP de `.mcp.json` sin aprobar)
