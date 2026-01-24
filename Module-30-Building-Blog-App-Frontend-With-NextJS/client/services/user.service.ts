import { env } from "@/env";
import { cookies } from "next/headers";

export const userService = {
  getSesstion: async function () {
    try {
      const storeCookie = await cookies();

      const res = await fetch(`${env.AUTH_URL}/get-session`, {
        headers: {
          Cookie: storeCookie.toString(),
          catch: "not-store", // data catch kore rakhio na
        },
      });
      const session = await res.json();
      if (!session) {
        return { data: null, error: { message: "No session found" } };
      }
      return { data: session, error: null };
    } catch (error: any) {
      console.log(error.message);
      return {
        data: null,
        error: { message: "Something Went Wrong", err: error.message },
      };
    }
  },
};
