import React from 'react'
import Hero from '@/components/hero'
import img4 from '~@/scale.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Performance() {
  return (
    <Hero imgUrl={img4} altTxt={'Scale Image'} content={'Scale'} />
  )
}
