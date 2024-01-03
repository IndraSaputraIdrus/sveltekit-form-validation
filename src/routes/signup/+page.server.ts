import { z } from "zod"
import type { Actions } from "./$types"
import { fail, redirect } from "@sveltejs/kit"

const registerSchema = z.object({
  username: z.string().min(1, {
    message: "Username field is requred"
  }).trim(),
  email: z.string().min(1, {
    message: "Email field is required"
  }).email(),
  password: z.string().min(1, {
    message: "Password field is required"
  }).trim(),
  confirmPassword: z.string().min(1, {
    message: "Confirm Password field is required"
  }).trim(),
  terms: z.enum(["on"], {
    required_error: "You must accept the terms and policy"
  })
}).superRefine(({password, confirmPassword}, ctx) => {
  if(confirmPassword !== password){
    ctx.addIssue({
      code: "custom",
      message: "Password and Confirm Password don't match",
      path: ["password"]
    })
    ctx.addIssue({
      code: "custom",
      message: "Password and Confirm Password don't match",
      path: ["confirmPassword"]
    })
  }
})

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData())

    const result = registerSchema.safeParse(formData)

    if (!result.success) {
      const { fieldErrors: errors } = result.error.flatten()
      delete formData.password
      delete formData.confirmPassword

      return fail(400, { errors, data: formData })
    }


    throw redirect(303, "/")
  }
}
