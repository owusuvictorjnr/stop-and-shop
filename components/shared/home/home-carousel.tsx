"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function HomeCarousel({
  items,
}: {
  items: {
    image: string;
    url: string;
    title: string;
    buttonCaption: string;
  }[];
}) {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  return (
    <Carousel
      dir="ltr"
      plugins={[plugin.current]}
      className="w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title} className="">
            <Link href={item.url}>
              <div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute w-1/3 top-1/2 left-16 md:left-32 transform -translate-y-1/2">
                  <h2 className="text-xl md:text-6xl font-bold mb-4 text-primary">
                    {item.title}
                  </h2>

                  <Button className="hidden md:block">
                    {item.buttonCaption}
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:left-12" />
      <CarouselNext className="right-0 md:right-12" />
    </Carousel>
  );
}