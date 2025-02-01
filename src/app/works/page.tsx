"use client"
import React from 'react'
import Work from "@/components/Works/Works";

const works = () => {
  return (
    <div className='py-12 h-full'>
      <Work loadMoreButton={false} />
    </div>
  )
}

export default works