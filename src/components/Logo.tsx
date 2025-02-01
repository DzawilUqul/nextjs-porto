import React from 'react'
import Link from 'next/link'

const Logo = ({light = false}) => {
  const colorClass = light ? 'text-white' : 'text-primary'

  return (
    <Link href="/" className='font-primary text-3xl tracking-[2px]'>
      <span className={colorClass}>Dzawil Uqul</span>
    </Link>
  )
}

export default Logo