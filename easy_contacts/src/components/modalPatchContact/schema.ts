import * as z from "zod";

export const contact = z.object({
  name: z.string().max(45).nonempty("Nome é obrigatório"),
  email: z.string().email("Email é obrigatório").max(45),
  phone: z
    .string()
    .nonempty("Telefone é obrigatório")
    .min(8, "É necessário pelo menos 8 caracteres para o telefone")
    .max(13, "O telefone deve ter no máximo 13 caracteres"),
});

export const patchContact=contact.partial();

export type UpdateContactInfo = z.infer<typeof patchContact>;
