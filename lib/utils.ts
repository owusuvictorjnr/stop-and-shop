import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : int;
};

export const toSlug = (text: string): string => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-word, non-whitespace, and non-hyphen characters
    .replace(/\s+/g, "-") // Replace whitespace with hyphens
    .replace(/^-+|-+$/g, ""); // Trim leading and trailing hyphens
};
