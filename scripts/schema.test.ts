import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const DIR = path.join(process.cwd(), "supabase", "migrations");
const SQL = readdirSync(DIR)
  .filter((f) => f.endsWith(".sql"))
  .sort()
  .map((f) => readFileSync(path.join(DIR, f), "utf8"))
  .join("\n")
  .toLowerCase();

const createdTables = [...SQL.matchAll(/create table (?:if not exists )?public\.(\w+)/g)].map((m) => m[1]);

describe("002 · AC-1/AC-3/AC-4 · migraciones", () => {
  it("crea todas las tablas del contrato", () => {
    for (const table of ["cars", "car_images", "features", "car_features", "chargers", "documentos", "admins"]) {
      expect(createdTables).toContain(table);
    }
  });

  it("activa RLS en cada tabla que crea (y en schema_migrations)", () => {
    for (const table of [...createdTables, "schema_migrations"]) {
      expect(SQL).toContain(`alter table public.${table} enable row level security`);
    }
  });

  it("documentos usa vector(384), es única por coche y tiene índice HNSW", () => {
    expect(SQL).toMatch(/embedding extensions\.vector\(384\)/);
    expect(SQL).toMatch(/car_id uuid not null unique references public\.cars \(id\) on delete cascade/);
    expect(SQL).toMatch(/using hnsw \(embedding extensions\.vector_cosine_ops\)/);
  });

  it("las FKs hacia cars borran en cascada", () => {
    const fks = [...SQL.matchAll(/references public\.cars \(id\)([^,\n]*)/g)].map((m) => m[1]);
    expect(fks.length).toBeGreaterThanOrEqual(3);
    for (const rest of fks) expect(rest).toContain("on delete cascade");
  });

  it("las funciones security definer fijan search_path vacío", () => {
    const definers = SQL.split("create or replace function").filter((f) => f.includes("security definer"));
    expect(definers.length).toBeGreaterThanOrEqual(2);
    for (const fn of definers) expect(fn).toContain("set search_path = ''");
  });

  it("anon no tiene grants sobre documentos ni admins", () => {
    expect(SQL).not.toMatch(/grant [^;]* on public\.documentos to [^;]*anon/);
    expect(SQL).not.toMatch(/grant [^;]* on public\.admins to/);
  });
});
