"use client"

import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Page: React.FC = () => {

  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem ><img src="https://i.postimg.cc/R08L8zdc/bird-2.jpg" alt="" /></CarouselItem>
          <CarouselItem><img src="https://i.postimg.cc/R08L8zdc/bird-2.jpg" alt="" /></CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Page;
