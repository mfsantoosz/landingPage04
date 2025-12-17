import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import AutoScroll from "embla-carousel-auto-scroll"

import MakeLess from "@/assets/brands/logo1.svg"
import CoWorks from "@/assets/brands/logo2.svg"
import Greener from "@/assets/brands/logo3.svg"
import SAASToday from "@/assets/brands/logo4.svg"
import Dorfus from "@/assets/brands/logo5.svg"
import Askimat from "@/assets/brands/logo6.svg"

export default function BrandsSection() {
  const brands = [
    { src: MakeLess, alt: "MakeLess" },
    { src: CoWorks, alt: "CoWorks" },
    { src: Greener, alt: "Greener" },
    { src: SAASToday, alt: "SAASToday" },
    { src: Dorfus, alt: "Dorfus" },
    { src: Askimat, alt: "Askimat" },
  ]

  return (
    <section className="py-16 w-full overflow-hidden max-md:py-10">
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between gap-16 px-8">
        {brands.map((brand) => (
          <img
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            className="h-6 opacity-60 hover:opacity-100"
          />
        ))}
      </div>

      <div className="md:hidden">
        <Carousel
          className="w-screen"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1.2,
            }),
          ]}
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div className="flex justify-center">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-6 opacity-60"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
