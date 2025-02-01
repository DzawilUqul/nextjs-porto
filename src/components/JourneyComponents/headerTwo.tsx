import type { HeaderTwo } from '@/types/ContentTypes'
import React from 'react'

const HeaderTwo: React.FC<HeaderTwo> = ({ title }) => {
  return (
    <h2 className="h2 underline mt-10">{title}</h2>
  )
}

export default HeaderTwo