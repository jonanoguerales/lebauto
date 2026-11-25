/** Returns the .sql migration files not yet applied, in name order (NNNN_ prefix). */
export function selectPendingMigrations(files: string[], applied: string[]): string[] {
  const appliedSet = new Set(applied);
  return files
    .filter((file) => file.endsWith(".sql") && !appliedSet.has(file))
    .sort();
}
