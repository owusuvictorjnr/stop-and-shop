import { HomeCard } from "@/components/shared/home/home-cards";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import {
  getAllCategories,
  getProductsForCard,
} from "@/lib/actions/product.action";
import data from "@/lib/data";
import { toSlug } from "@/lib/utils";

export default async function Page() {
  const categories = (await getAllCategories()).slice(0, 4);

  const newArrival = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });

  const featured = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });

  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });

  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See all categories",
        href: "/search",
      },

      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg `,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "New Arrivals",
      items: newArrival,
      link: {
        text: "See all new arrivals",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "See all best sellers",
        href: "/search?tag=best-seller",
      },
    },
    {
      title: "Featured Products",
      items: featured,
      link: {
        text: "See all featured products",
        href: "/search?tag=featured",
      },
    },
  ];

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
      </div>
    </>
  );
}
