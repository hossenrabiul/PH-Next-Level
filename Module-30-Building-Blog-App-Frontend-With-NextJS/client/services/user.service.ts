import { cookies } from "next/headers";
const AUTH_URL = process.env.AUTH_UR
export const userService = {
  
  getSesstion: async function () {
    try {
      const storeCookie = await cookies();

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          cookie: storeCookie.toString(),
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
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
