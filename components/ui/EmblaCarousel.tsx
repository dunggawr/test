"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
    info_testimonials: any
    options?: EmblaOptionsType
    scrollPrev?: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { info_testimonials, options, scrollPrev } = props
    const customOptions: EmblaOptionsType = { skipSnaps: true, duration: 350, ...options }
    const [emblaRef, emblaApi] = useEmblaCarousel(customOptions)

    useEffect(() => {
        if (emblaApi) {
            if (scrollPrev) {
                const interval = setInterval(() => {
                    emblaApi.scrollNext()
                }, 11000)

                interval
                return () => {
                    clearInterval(interval);
                }
            }
            else {
                const interval = setInterval(() => {
                    emblaApi.scrollPrev()
                }, 11000)

                interval
                return () => {
                    clearInterval(interval);
                }
            }
        }
    }, [emblaApi, scrollPrev]);

    return (
        <div className="overflow-hidden h-full w-full lg:w-auto" ref={emblaRef}>
            <div className="flex h-full lg:mt-0 lg:flex-col">
                {info_testimonials && Array.isArray(info_testimonials) && info_testimonials.map((item: any) => (
                    <div
                        className="relative touch-pan-x touch-pinch-zoom flex-[0_0_50%] lg:flex-[0_0_100%] w-[146px] h-[316px] lg:w-[230px] lg:h-[384px] xl:w-[280px] xl:h-[538px] lg:mt-6 mx-2 lg:mx-0"
                        key={item?.image}
                    >
                        <Image
                            fill
                            style={{ objectFit: "cover" }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}` as string}
                            alt="image"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmblaCarousel