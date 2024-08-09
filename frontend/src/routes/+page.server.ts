import { getShortLink } from "$lib/myUtils.js";
import { fail, redirect } from "@sveltejs/kit";
import { nanoid } from "nanoid";

export const load = async ({ locals }) => {
  if (!locals.user) {
    return redirect(303, "/auth/signin");
  }
  let top10Links;
  try {
    top10Links = await locals.pb.collection("links").getFullList(10, {
      sort: "-click",
      filter: `createdBy="${locals.user?.id}"`,
    });
  } catch (e: any) {
    console.log(e);
    return fail(e.status, { error: e.message });
  }
  return {
    top10Links: structuredClone(top10Links),
  };
};

export const actions = {
  createShortLink: async ({ locals, request }) => {
    const data = await request.formData();

    try {
      let link = data.get("link");
      // if link dont have http infront of it, add it
      if (
        !link?.toString().startsWith("http") &&
        !link?.toString().startsWith("https")
      ) {
        link = `http://${link}`;
      }

      const shortSlug = await nanoid(8);

      await locals.pb.collection("links").create({
        link,
        shortSlug,
        createdBy: locals.user?.id,
      });

      return {
        shortLink: getShortLink(shortSlug),
        link,
      };
    } catch (e: any) {
      console.log(e);
      return fail(e.status, { error: e.message });
    }
  },
};
