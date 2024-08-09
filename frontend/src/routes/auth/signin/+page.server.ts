import { fail, redirect } from "@sveltejs/kit";
import {superValidate} from "sveltekit-superforms";
import {formSchema} from "./schema";
import {zod} from "sveltekit-superforms/adapters";
import {z} from "zod";

export const load = async ()=>{
  return {
    form: await superValidate(zod(formSchema)),
  }
}

export const actions = {
  login: async ({ locals, request }) => {
    const data = await request.formData();

    try {
      const user = await locals.pb
        .collection("users")
        .authWithPassword(data.get("email"), data.get("password"));
      if (!user.record.verified) {
        locals.pb.authStore.clear();
        return fail(400, {
          error: "Please verify your email",
        });
      }
    } catch (e: any) {
      console.log(e);
      return fail(e.status, { error: e.message, data: e.data });
    }
    throw redirect(303, "/auth/signin");
  },

  resetPassword: async ({ locals, request }) => {
    const data = await request.formData();

    try {
      await locals.pb
        .collection("users")
        .requestPasswordReset(data.get("email"));
    } catch (e: any) {
      console.log(e);
      return fail(e.status, { error: e.message });
    }

    return {
      success: "Password reset email sent",
    };
  },
};
