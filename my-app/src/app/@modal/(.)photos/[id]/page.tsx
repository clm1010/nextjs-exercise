'use client'
import React from 'react'
import Image from 'next/image'
import { photos } from '@/data/photos-data'
// import { useRouter } from 'next/navigation'

interface IParams {
  params: { id: string }
}

export default function Page({ params }: IParams) {
  const photo = photos.find((photo) => photo.id === +params.id) // +id converts the string to a number
  // const router = useRouter()
  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault()
    window.history.back()
  }

  return (
    <div
      className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]'
      onClick={handleGoBack}
    >
      <Image
        className='rounded-lg block '
        src={photo?.src || ''}
        alt={photo?.alt || ''}
        width={300}
        height={300}
        onClick={(e) => e.stopPropagation()}
      ></Image>
    </div>
  )
}
