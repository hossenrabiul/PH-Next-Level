import { Request, Response } from "express";
import { postServices } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const id = req?.user?.id;
    const result = await postServices.createPost(req.body, id as string);
    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllPost = async (req: Request, res: Response) => {
  const { search } = req.query;
  try {
    // searchTYpe
    const searchType = typeof search === "string" ? search : undefined;
    // split all tags
    const tags = req.query.tag ? (req.query.tag as string).split(",") : [];
    // tagsTYpe
    const tagsType = typeof search === "string" ? tags : [];


    // Callng the service
    const result = await postServices.getAllPost({
      search: searchType,
      tags: tagsType,
    });
    res.status(200).json({
      success: true,
      message: "Retrived all posts successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const postController = {
  createPost,
  getAllPost,
};
