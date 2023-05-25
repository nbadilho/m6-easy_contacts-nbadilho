import * as z from "zod";

export const userSchema = z.object({
  name: z.string().max(45).optional().or(z.literal("")),
  email: z
    .string()
    .email("Formato válido de email obrigatório")
    .max(45)
    .optional()
    .or(z.literal("")),
  password: z
    .string()
    .min(8, "É necessário uma senha de pelo menos 8 caracteres")
    .regex(/(?=.*?[0-9])/i, "É necessário pelo menos um número.")
    .regex(
      /(?=.*?[#?!@$%^&*-])/i,
      "É necessário pelo menos um caractere especial"
    )
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(8, "É necessário pelo menos 8 caracteres para o telefone")
    .max(13, "O telefone deve ter no máximo 13 caracteres")
    .optional()
    .or(z.literal("")),
});

export type UpdateUserInfo = z.infer<typeof userSchema>;
