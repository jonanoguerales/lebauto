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
  name: z.string().min(2),
  surnames: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
})