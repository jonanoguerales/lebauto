import { describe, expect, it } from "vitest";
import { toSafeInternalPath } from "./safeInternalPath";

// T-02a (D-15): el redirect de forgotPasswordAction solo acepta rutas internas.
describe("toSafeInternalPath (T-02a, D-15)", () => {
  it.each(["//x", "/\\x", "/\tx", "/\n/x", "\\\\x", "https://x", "", " /dashboard", "/a b",
    "/..//evil.com", "/.//evil.com", "/a/..//evil.com", "/%2e%2e//evil.com", "/.///evil", "/%2E/x", "/a/.."])(
    "rechaza %j",
    (raw) => {
      expect(toSafeInternalPath(raw)).toBeNull();
    },
  );

  it("acepta rutas internas y conserva la query", () => {
    expect(toSafeInternalPath("/dashboard")).toBe("/dashboard");
    expect(toSafeInternalPath("/sign-in?error=x")).toBe("/sign-in?error=x");
  });

  it("rechaza null y undefined", () => {
    expect(toSafeInternalPath(null)).toBeNull();
    expect(toSafeInternalPath(undefined)).toBeNull();
  });
});
