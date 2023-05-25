import * as z from 'zod';


export const registerSchema = z.object({
    name: z.string().max(45).nonempty("Nome é obrigatório"),
    email: z.string().email('Email é obrigatório').max(45),
    password: z
      .string().nonempty('Senha é obrigatória')
      .min(8, 'É necessário uma senha de pelo menos 8 caracteres')
      .regex(/(?=.*?[0-9])/i, 'É necessário pelo menos um número.')
      .regex(/(?=.*?[#?!@$%^&*-])/i, 'É necessário pelo menos um caractere especial'),
      phone: z
      .string().nonempty("Telefone é obrigatório")
      .min(8, 'É necessário pelo menos 8 caracteres para o telefone')
    .max(13, 'O telefone deve ter no máximo 13 caracteres'),})

export type RegisterInfo = z.infer<typeof registerSchema>;


