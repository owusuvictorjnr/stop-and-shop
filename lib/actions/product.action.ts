"use server";

import { connectToDB } from "@/lib/db";
import Product from "@/lib/db/models/product.model";

//Get all categories
export async function getAllCategories() {
  await connectToDB();
  const categories = await Product.find({ isPublished: true }).distinct(
    "category"
  );
  return categories;
}

// Get all products
export async function getProductsForCard({
  tag,
  limit = 4,
}: {
  tag: string;
  limit?: number;
}) {
  await connectToDB();
  const products = await Product.find(
    {
      tags: { $in: [tag] },
      isPublished: true,
    },
    {
      name: 1,
      href: { $concat: ["/product/", "$slug"] },
      images: { $arrayElemAt: ["$images", 0] },
    }
  )
    .sort({ createdAt: "desc" })
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as {
    name: string;
    href: string;
    image: string;
  }[];
}
