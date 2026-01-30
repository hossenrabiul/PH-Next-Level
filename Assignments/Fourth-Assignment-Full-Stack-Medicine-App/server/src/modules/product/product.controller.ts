import type { Request, Response } from "express";
import { productService } from "./product.service";
import { createProductSchema } from "../../types/product";

const create = async (req: Request, res: Response) => {
  try {
    const result = createProductSchema.safeParse(req.body);
    console.log(result);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.message
      });
    }
    // const data = await productService.create();

    res.status(203).json({
      success: true,
      message: "Product created successfully",
      //   data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create Product !",
      err: error.message,
    });
  }
};

export const productController = {
  create,
};
