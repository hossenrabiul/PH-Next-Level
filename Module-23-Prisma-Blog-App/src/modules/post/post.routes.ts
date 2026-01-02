import { Router } from "express";
import { postController } from "./post.controller";
import { auth } from "../../middlewares/auth";

const route = Router()
route.get('/', auth('ADMIN'), postController.getAllPost)
route.post('/create',auth("ADMIN"), postController.createPost)
export const postRoute = route;