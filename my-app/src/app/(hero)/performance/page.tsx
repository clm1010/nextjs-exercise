import React from 'react'
import Hero from '@/components/hero'
import img2 from '~@/performance.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance'
}

export default function Performance() {
  return (
    <Hero imgUrl={img2} altTxt={'Performance Image'} content={'Performance'} />
  )
}
