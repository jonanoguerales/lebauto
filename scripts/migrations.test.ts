import { describe, expect, it } from "vitest";
import { selectPendingMigrations } from "./migrations";

describe("002 · AC-1 · selectPendingMigrations (no reaplica lo ya aplicado)", () => {
  it("devuelve solo los .sql no aplicados, en orden", () => {
    const files = ["0002_b.sql", ".gitkeep", "0001_a.sql", "0003_c.sql", "notas.md"];
    expect(selectPendingMigrations(files, ["0001_a.sql"])).toEqual(["0002_b.sql", "0003_c.sql"]);
  });

  it("devuelve una lista vacía si todo está aplicado", () => {
    expect(selectPendingMigrations(["0001_a.sql"], ["0001_a.sql"])).toEqual([]);
  });
});
