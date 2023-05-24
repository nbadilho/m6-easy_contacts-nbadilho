import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email é obrigatório'),
  password: z.string().nonempty('Senha é obrigatória')})


export type LoginInfo = z.infer<typeof loginSchema>;