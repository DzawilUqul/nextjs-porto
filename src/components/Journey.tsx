import React from 'react'
import AnimatedText from './AnimatedText'
import Cards from './Cards/Cards'

const Journey = () => {
  return (
    <section id='journey'>
      <div className='container mx-auto'>
        <AnimatedText text='My Professional Journey' textStyles='h2 mb-[30px] text-center'/>
        <Cards sliced />
      </div>
      <div className="flex justify-center">
        {/* go to /journey */}
        <button className='btn btn-accent bg-violet-500' onClick={() => window.location.href = '/journey'}>
          More Journey
        </button>
      </div>
    </section>
  )
}

export default Journey