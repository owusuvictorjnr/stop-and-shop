import { cwd } from "process";
import { connectToDB } from ".";
import data from "../data";
import Product from "./models/product.model";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;
    await connectToDB(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);

    console.log({
      createdProducts,
      message: "Products created successfully",
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create products");
  }
};

main();
