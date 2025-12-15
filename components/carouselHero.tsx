"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselHero() {
    return (
        <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>

                <CarouselItem>
                    <div className="p-4">
                        <Image
                            src="/images/slide1.jpg"
                            alt="Slide 1"
                            width={1200}
                            height={500}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="p-4">
                        <Image
                            src="/images/slide2.jpg"
                            alt="Slide 2"
                            width={1200}
                            height={500}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="p-4">
                        <Image
                            src="/images/slide3.jpg"
                            alt="Slide 3"
                            width={1200}
                            height={500}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                </CarouselItem>

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
