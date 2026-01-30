"use server";
import { env } from "@/env";
import { blogService } from "@/services/blog.service";
import { blogPost } from "@/types/blogType";
import { updateTag } from "next/cache";

export const blogAction = async () => {
  const { data } = await blogService.getBlogPost();
  return data;
};

export const createBlog = async (blogData: blogPost) => {
  const res = await blogService.createBlog(blogData);
  if(res.data?.success){
      updateTag("blogPosts")
    }
  return res;
};
