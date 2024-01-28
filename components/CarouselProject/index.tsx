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
import { cn } from "@/lib/utils";

interface CarouselProps {
  desktopGif?: string[] | null;
  mobileGif?: string[] | null;
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

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "text-accent cursor-pointer scale-125 transition-all hover:scale-150",
          mobileGif?.length === undefined && "hidden sm:block"
        )}
        aria-label="modal"
      >
        <i>
          <IoMdPhotos />
        </i>
      </DialogTrigger>
      <DialogContent className="p-16 sm:p-0">
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
