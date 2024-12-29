import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { photos } from '@/data/photos-data'

export default function page() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {photos.map((photo) => (
            <Link className='group' href={`/photos/${photo.id}`} key={photo.id}>
              <Image
                className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]'
                src={photo.src}
                alt={photo.alt}
                width={200}
                height={200}
              ></Image>
              <h3 className='mt-4 text-sm text-gray-700 line-clamp-1'>
                {photo.product_name}
              </h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {photo.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
