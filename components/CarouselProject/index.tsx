import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { IoMdPhotos } from "react-icons/io";

import { useEffect, useState } from "react";

interface CarouselProps {
  desktopGif?: string[];
  mobileGif?: string[];
}

const CarouselProject: React.FC<CarouselProps> = ({
  desktopGif,
  mobileGif,
}) => {
  // CAROUSEL
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
  }, [api]);

  console.log("api", api);
  console.log("count", count);
  return (
    <Dialog>
      <DialogTrigger aria-label="modal">
        <i className="text-white cursor-pointer scale-125 transition-all hover:scale-150">
          <IoMdPhotos />
        </i>
      </DialogTrigger>
      <DialogContent className="p-20">
        {/* DESKTOP */}
        <Carousel
          setApi={setApi}
          className="hidden max-w-6xl sm:block"
          onClick={(e) => e.stopPropagation()}
        >
          <CarouselContent>
            {desktopGif?.map((source, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center">
                  <Image
                    className="rounded-2xl sm:rounded-none"
                    src={source}
                    alt={source}
                    width={1200}
                    height={720}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* MOBILE */}
        <Carousel
          setApi={setApi}
          className="block max-w-6xl sm:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <CarouselContent>
            {mobileGif?.map((source, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center">
                  <Image
                    className="rounded-2xl sm:rounded-none"
                    src={source}
                    alt={source}
                    width={1200}
                    height={720}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default CarouselProject;
