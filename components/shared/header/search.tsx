import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";

const categories = [
  "men",
  "women",
  "kids",
  "accessories",
  "Art",
  "Collectibles",
  "Domain Names",
  "Music",
  "Photography",
  "Sports",
  "Trading Cards",
  "Utility",
  "Virtual Worlds",
];
export default async function Search() {
  return (
    <form action="search" method="GET" className="flex items-stretch h-10">
      <Select name="category">
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
          <SelectValue placeholder="All" />
        </SelectTrigger>

        <SelectContent position="popper">
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem value={category} key={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="search"
        name="q"
        placeholder={`Search Site ${APP_NAME}`}
        className="h-full rounded-none flex-1 dark:border-gray-200 bg-gray-100 text-black text-base"
      />

      <button
        type="submit"
        className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-none h-full px-3 py-2"
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </form>
  );
}
