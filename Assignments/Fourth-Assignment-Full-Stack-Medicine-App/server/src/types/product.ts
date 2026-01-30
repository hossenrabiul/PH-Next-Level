import z from "zod";

export interface Product {
  name: string;
  description?: string;
  stock: number;
  price: number;
}
export const createProductSchema =  z.object({
    name : z.string().min(1, "Name is required"),
    stock : z.number().int().nonnegative("Stock must be more than 1"),
    price : z.number("Price is reqired")
})