import * as z from "zod";


export const contact = z.object({
  name: z.string().max(45).optional().or(z.literal("")),
  email: z
    .string()
    .email("Formato válido de email obrigatório")
    .max(45)
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(8, "É necessário pelo menos 8 caracteres para o telefone")
    .max(13, "O telefone deve ter no máximo 13 caracteres")
    .optional()
    .or(z.literal("")),
});

export type UpdateContactInfo = z.infer<typeof contact>;
