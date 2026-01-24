import { env } from "@/env";
import { cookies } from "next/headers";

//* No Dynamic and NO {cache : no-store} : SSG -> static page
//* {cache : no-store} : SSR -> Dynamic page
//* next : {revalidate : 10} : ISR -> mix between static and dynamic
export interface paramsType {
  isFeatured?: boolean;
  search?: string;
}
export interface optionsType {
  cache ?: string,
  revalidate ?: number,
}
export const blogService = {
  getBlogPost: async function (params?: paramsType, options? : optionsType) {
    try {
      const storeCookie = await cookies();
      const url = new URL(`${env.API_URL}/post`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if(value != null && value != undefined && value != ""){
              url.searchParams.append(key, value)
          }
        });
      }
      
      const res = await fetch(url, {
        headers: {
          cookie: storeCookie.toString(),
        },
        next: { revalidate: 10 },
      });

      const data = await res.json();
      return { data: data };
    } catch (error: any) {
      return { data: null, err: { message: error.message } };
    }
  },
};
