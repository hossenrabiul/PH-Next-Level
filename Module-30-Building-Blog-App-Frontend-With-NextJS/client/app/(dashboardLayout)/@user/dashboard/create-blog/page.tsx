import CreateBlogFormClient from "@/components/modules/user/createBlog/createBlogFormClient";
import { blogService } from "@/services/blog.service";
import React from "react";
const CreateBlog = async () => {
  const { data } = await blogService.getBlogPost();
  // console.log(data.data);
  return (
    <div>
      <CreateBlogFormClient />
      <div>
        {data.data.data.map((item, idx: string) => {
          return <div key={idx}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default CreateBlog;
