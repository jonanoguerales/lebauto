import { z } from "zod"

export const sellCarSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
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
  email: z.string().email("Email inválido."),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos."),
  message: z.string().min(10, "Es necesario un mensaje de al menos 10 caracteres, con lo que nos ayudes a entender mejor tu consulta."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const chargerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  brand: z.string().optional(),
  power_kw: z.coerce.number().positive("La potencia debe ser un número positivo."),
  connector_type: z.string().min(1, "El tipo de conector es obligatorio."),
  price_eur: z.coerce.number().positive("El precio debe ser un número positivo."),
  installation_cost_eur: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number().nonnegative("El coste de instalación no puede ser negativo.").optional()
  ),
  features: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
  image_url: z.preprocess(
    (val) => (val === "" ? undefined : val), 
    z.string().url("Debe ser una URL válida.").optional()
  ),
  category: z.enum(["home", "community", "business"], {
    required_error: "La categoría es obligatoria.",
  }),
  efficiency: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number().min(0).max(100, "La eficiencia debe estar entre 0 y 100.").optional()
  ),
  dimensions: z.string().optional(),
  weight_kg: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number().nonnegative("El peso no puede ser negativo.").optional()
  ),
  warranty_years: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number().int("Los años de garantía deben ser un número entero.").nonnegative("Los años de garantía no pueden ser negativos.").optional()
  ),
  compatibility_notes: z.string().optional(),
});

export type ChargerFormValues = z.infer<typeof chargerSchema>;