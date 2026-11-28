import type { Message } from "@/common/components/FormMessage";

type SearchParams = Record<string, string | string[] | undefined>;

// Convierte los searchParams que deja encodedRedirect (?error=…, ?success=…, ?message=…) en un Message.
export function toFormMessage({ error, success, message }: SearchParams): Message | null {
  if (typeof error === "string") return { error };
  if (typeof success === "string") return { success };
  if (typeof message === "string") return { message };
  return null;
}
