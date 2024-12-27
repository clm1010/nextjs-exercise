import React from 'react'
import Hero from '@/components/hero'
import img3 from '~@/reliability.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reliability'
}

export default function Performance() {
  return (
    <Hero imgUrl={img3} altTxt={'Reliability Image'} content={'Reliability'} />
  )
}
