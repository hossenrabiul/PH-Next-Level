import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

const createPost = async (body, id: string) => {
  const data = {
    title: body.title,
    content: body.content,
    tags: body.tags,
    authorId: id,
  };
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPost = async ({
  search,
  tags,
}: {
  search: string | undefined;
  tags: string[] | [];
}) => {
  const addConditions: PostWhereInput[] = [];
  if (search) {
    addConditions.push({
      OR: [
        {
          title: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search as string,
          },
        },
        {
          tags: {
            has: search as string,
          },
        },
      ],
    });
  }
  if (tags?.length > 0) {
    addConditions.push({
      tags: {
        hasEvery: tags as string[],
      },
    });
  }

  //   Callling the database
  const results = await prisma.post.findMany({
    where: {
      AND: addConditions,
    },
  });
  return results;
};
export const postServices = {
  getAllPost,
  createPost,
};
