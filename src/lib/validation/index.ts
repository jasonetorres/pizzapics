import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'nah too short' }),
    username: z.string().min(2, { message: 'nah too short' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'too short '}),
  })

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'too short '}),
  })