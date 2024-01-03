import { z } from "zod";
import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

const loginSchema = z.object({
  email: z.string().min(1, {
    message: "This field is required"
  }).email(),
  password: z.string().min(1, {
    message: "This field is required"
  }).trim()
})

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData())

    const result = loginSchema.safeParse(formData)
    if (!result.success) {
      const { fieldErrors: errors } = result.error.flatten()
      delete formData.password
      return fail(400, { errors, data: formData })
    }

    throw redirect(303, "/home")
  }
}
