import { env } from "@/env";
import { blogPost } from "@/types/blogType";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

//* No Dynamic and NO {cache : no-store} : SSG -> static page
//* {cache : no-store} : SSR -> Dynamic page
//* next : {revalidate : 10} : ISR -> mix between static and dynamic
export interface paramsType {
  isFeatured?: boolean;
  search?: string;
  page?: string;
  limit ?: string
}
export interface optionsType {
  cache?: string;
  revalidate?: number;
}

export const blogService = {
  getBlogPost: async function (params?: paramsType, options?: optionsType) {
    try {
      const storeCookie = await cookies();
      const url = new URL(`${env.API_URL}/post`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value != null && value != undefined && value != "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const res = await fetch(url, {
        headers: {
          cookie: storeCookie.toString(),
        },
        next: { tags: ["blogPosts"] },
      });

      const data = await res.json();
      return { data };
    } catch (error: any) {
      return { data: null, err: { message: error.message } };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${env.BACKEND_URL}/post/${id}`);
      const { data } = await res.json();
      return { data: data, err: null };
    } catch (error: any) {
      return {
        data: null,
        error: { message: "something went wrong", err: error?.message },
      };
    }
  },

  createBlog: async (blogData: blogPost) => {
    const storeCookie = await cookies();
    const res = await fetch(`${env.API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: storeCookie.toString(),
      },
      body: JSON.stringify(blogData),
    });
    const data = await res.json();
    if (data.error) {
      return { data: null, error: { message: data.message } };
    }
    return { data: data, error: null };
  },
};
