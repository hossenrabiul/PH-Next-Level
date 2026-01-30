import { Router } from "express";
import { productController } from "./product.controller";

const route = Router();

route.post("/", productController.create);

export const productRoute = route;
