import { z } from "zod"

export const sellCarSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().min(5),
  brand: z.string().min(1),
  model: z.string().min(1),
  year: z.string().min(4),
  kilometers: z.string().min(1),
  fuel: z.string().min(1),
  comments: z.string().optional(),
})

export type SellCarFormData = z.infer<typeof sellCarSchema>

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio."),
  surnames: z.string().min(2, "Los apellidos son obligatorios."),
  email: z.email("Email inválido."),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos."),
  message: z.string().min(10, "Es necesario un mensaje de al menos 10 caracteres, con lo que nos ayudes a entender mejor tu consulta."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Los campos numéricos opcionales llegan como "" (o null) desde el formulario: se tratan como vacíos.
// El tipo de entrada se fija al del esquema interno para que react-hook-form tipe bien el campo (Zod 4
// infiere `unknown` como entrada de `z.preprocess`).
const emptyAsUndefined = <T extends z.ZodType>(schema: T) =>
  z.preprocess<unknown, T, z.input<T>>(
    (val: unknown) => (val === "" || val === null ? undefined : val),
    schema,
  );

export const chargerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  brand: z.string().optional(),
  power_kw: z.coerce.number<number>().positive("La potencia debe ser un número positivo."),
  connector_type: z.string().min(1, "El tipo de conector es obligatorio."),
  price_eur: z.coerce.number<number>().positive("El precio debe ser un número positivo."),
  installation_cost_eur: emptyAsUndefined(
    z.coerce.number<number>().nonnegative("El coste de instalación no puede ser negativo.").optional()
  ),
  features: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
  image_url: z.preprocess(
    (val: string | undefined) => (val === "" ? undefined : val),
    z.url("Debe ser una URL válida.").optional()
  ),
  category: z.enum(["home", "community", "business"], {
    error: (issue) =>
      issue.input === undefined ? "La categoría es obligatoria." : undefined,
  }),
  efficiency: emptyAsUndefined(
    z.coerce.number<number>().min(0).max(100, "La eficiencia debe estar entre 0 y 100.").optional()
  ),
  dimensions: z.string().optional(),
  weight_kg: emptyAsUndefined(
    z.coerce.number<number>().nonnegative("El peso no puede ser negativo.").optional()
  ),
  warranty_years: emptyAsUndefined(
    z.coerce.number<number>().int("Los años de garantía deben ser un número entero.").nonnegative("Los años de garantía no pueden ser negativos.").optional()
  ),
  compatibility_notes: z.string().optional(),
});

export type ChargerFormValues = z.infer<typeof chargerSchema>;
export type ChargerFormInput = z.input<typeof chargerSchema>;
