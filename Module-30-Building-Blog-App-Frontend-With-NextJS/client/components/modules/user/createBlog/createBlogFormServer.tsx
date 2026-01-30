import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { toast } from "sonner";

const AUTH_URL = env.API_URL;
const CreateBlogFormServer = () => {
  const createBlog = async (FormData: FormData) => {
    "use server";
    try {
      const title = FormData.get("title") as string;
      const content = FormData.get("content") as string;
      const tags = FormData.get("tags") as string;
      const data = {
        title,
        content,
        tags: tags
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item != ""),
      };
      const storeCookie = await cookies();
      const res = await fetch(`${AUTH_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: storeCookie.toString(),
        },
        body: JSON.stringify(data),
      });
      // Instantly update the UI data
      if(res.ok){
        revalidateTag("blogPosts", "max")
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Blog</CardTitle>
          <CardDescription>Write Your Blog Here</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="blog-form" action={createBlog}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter the post title"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="content">Content</FieldLabel>
                <Textarea
                  name="content"
                  placeholder="Enter Blog Content"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="tags">Tags (Coma Separate) </FieldLabel>
                <Input
                  type="text"
                  name="tags"
                  placeholder="Enter Tags"
                  required
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <button type="submit" form="blog-form" className="w-full">
            Submit
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateBlogFormServer;
