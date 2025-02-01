// components/NoSsr.jsx

import dynamic from 'next/dynamic'
import React from 'react'

const NoSsr = (props: React.PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})