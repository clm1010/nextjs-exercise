import React from 'react'
import Image from 'next/image'
import { photos } from '@/data/photos-data'

interface IParams {
  params: { id: string }
}
export default async function Page({ params }: IParams) {
  const { id } = await params
  const photo = photos.find((photo) => photo.id === +id) // +id converts the string to a number

  return (
    <div className='container mx-auto pt-8'>
      <Image
        className='rounded-lg block '
        src={photo?.src || ''}
        alt={photo?.alt || ''}
        width={400}
        height={400}
      ></Image>

      <div className='border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-8'>
        <p>
          <strong>Title:&nbsp;</strong>
          {photo?.product_name}
        </p>
        <p>
          <strong>Price:&nbsp;</strong>
          {photo?.price}
        </p>
        <p>
          <strong>Desc:&nbsp;</strong>
          {photo?.alt}
        </p>
      </div>
    </div>
  )
}
