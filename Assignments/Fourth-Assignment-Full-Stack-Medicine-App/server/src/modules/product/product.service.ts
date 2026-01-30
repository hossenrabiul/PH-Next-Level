import { prisma } from "../../lib/prisma";
import type { Product } from "../../types/product";

const create = async (body: Product) => {
  const { name, description, stock, price } = body;
  const data = {
    name,
    description,
    stock,
    price,
  };
  const product = await prisma.medicine.create({ data });

  return product;
};

export const productService = {
  create,
};
