"use client";
import { createBlog } from "@/app/actions/blog.action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { blogPost } from "@/types/blogType";
import { useForm } from "@tanstack/react-form";

import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  title: z.string().min(4, "Title muse be more than 3 character"),
  content: z.string().min(8, "Content must be more that 8 character"),
  tags: z.string(),
});

const CreateBlogFormClient = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      tags: "",
    },
    validators: {
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating Post ...", {
        position: "top-right",
      });

      const data: blogPost = {
       
        ...value,
        tags: value.tags
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item != ""),
      };

      const res = await createBlog(data);
    //   console.log(res.data);
      if (res.error) {
        toast.error(res.error.message, { id: toastId });
      } else if (!res.data.success) {
        toast.warning(res.data.message, { id: toastId });
      } else if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
      }
    },
  });
  return (
    <div className="w-full sm:max-w-md mx-auto">
      <Card className="">
        <CardHeader>
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>
            Provide your information below to create Blog
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="blog-form"
            onSubmit={(e) => {
              (e.preventDefault(), form.handleSubmit());
            }}
          >
            <FieldGroup>
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="title">Title</FieldLabel>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Enter blog title"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              ></form.Field>
              <form.Field
                name="content"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="content">Content</FieldLabel>
                      <Textarea
                        id="content"
                        name="content"
                        placeholder="Enter blog Content"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              ></form.Field>
              <form.Field
                name="tags"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="tags">
                        Tags (Coma separated)
                      </FieldLabel>
                      <Input
                        id="tags"
                        name="tags"
                        placeholder="Enter blog tags"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              ></form.Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <button form="blog-form" className="w-full">
            Submit
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateBlogFormClient;
