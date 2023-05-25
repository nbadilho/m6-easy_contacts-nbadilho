import * as z from "zod";

export const userSchema = z
  .object({
    name: z.string().max(45).optional(),
    email: z.string().email().max(45).optional(),
    password: z
      .string()
      .min(8, "É necessário uma senha de pelo menos 8 caracteres")
      .regex(/(?=.*?[0-9])/i, "É necessário pelo menos um número.")
      .regex(
        /(?=.*?[#?!@$%^&*-])/i,
        "É necessário pelo menos um caractere especial"
      )
      .optional(),
    phone: z
      .string()
      .min(8, "É necessário pelo menos 8 caracteres para o telefone")
      .max(13, "O telefone deve ter no máximo 13 caracteres")
      .optional(),
  })
  .partial();

export type UpdateUserInfo = z.infer<typeof userSchema>;
