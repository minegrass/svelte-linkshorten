import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());

    try {
      await locals.pb.collection("users").create(data);
      await locals.pb.collection("users").requestVerification(data.email);
    } catch (e: any) {
      //   console.log(e);
      console.log(JSON.stringify(e.data));
      return fail(e.status, { error: e.message });
    }
    throw redirect(303, "/auth/signin");
  },
};
