"use client"
import AnimatedText from '@/components/AnimatedText'
import Cards from '@/components/Cards/Cards'
import React from 'react'

const journey = () => {
  return (
    <div className='container mx-auto py-36'>
      <AnimatedText text='My Professional Journey' textStyles='h2 mb-[30px] text-center'/>
      <Cards sliced={false} />
    </div>
  )
}

export default journey