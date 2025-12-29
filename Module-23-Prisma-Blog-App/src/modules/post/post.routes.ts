import { Router } from "express";
import { postController } from "./post.controller";

const route = Router()

route.post('/create', postController.createPost)
export const postRoute = route;