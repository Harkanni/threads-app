import * as z from "zod"

export const  ThreadValidation = z.object({
    profile_photo: z.string().nonempty(),
    name: z.string().min(3, { message: 'Minimum 3 characters'}).max(30),
    accountId: z.string(),
})

export const  CommentValidation = z.object({
   profile_photo: z.string().nonempty(),
   name: z.string().min(3, { message: 'Minimum 3 characters'}).max(30),
   accountId: z.string(),
})