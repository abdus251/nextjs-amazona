'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function HomeCarousel({
  items,
}: {
  items: {
    image: string
    url: string
    title: string
    buttonCaption: string
  }[]
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      dir='ltr'
      plugins={[plugin.current]}
      className='w-full mx-auto'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={item.url}>
              <div className='flex flex-col md:flex-row items-center justify-center  p-6 bg-black text-white  overflow-hidden'>
                {/* ✅ Left side: text & button */}
                <div className='flex flex-col gap-4 w-full md:w-1/2 md:pl-8'>
                  <h2 className='text-2xl md:text-5xl font-bold text-primary drop-shadow-lg'>
                    {item.title}
                  </h2>

                  <Button
                    variant='default'
                    className='text-base font-semibold w-fit'
                  >
                    {item.buttonCaption}
                  </Button>
                </div>

                {/* ✅ Right side: image */}
                <div className='relative w-full md:w-1/4  h-64 mt-6 md:mt-0'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover rounded-xl'
                    priority
                  />
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* ✅ Navigation arrows */}
      <CarouselPrevious className='left-2 md:left-12' />
      <CarouselNext className='right-2 md:right-12' />
    </Carousel>
  )
}
