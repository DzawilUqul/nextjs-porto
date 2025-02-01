import React from 'react'
import AnimatedText from './AnimatedText'
import Image from 'next/image'

const getAge = () => {
  const birthDate = new Date('2000-12-05')
  const currentDate = new Date()
  const age = currentDate.getFullYear() - birthDate.getFullYear()
  const month = currentDate.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
    return age - 1
  }
  return age
}

const About = () => {
  return (
    <section className='relative xl:pt-10 pb-24' id='about'>
      <div className='container mx-auto h-full'>
        {/* Self Image */}
        <div className='flex items-center justify-center xl:hidden'>
          <Image 
            src={"/assets/hero/lanyard.png"}
            alt=''
            quality={100}
            priority
            width={380}
            height={380}
          />
        </div>
        <div className='h-full flex items-center justify-center'>
          <div className='hidden xl:flex flex-1'>
            <div className='relative w-full max-w-[380px] ml-24'>
              {/* shape */}
              <div className='xl:w-[160px] h-[160px] bg-indigo-300 absolute -left-5 -top-5 -z-10'></div>
              {/* Image Background */}
              <div className='rounded-tl-[8px] rounded-tr-[120px] w-full bg-indigo-50 min-h-[480px] flex items-end justify-center'>
                  <Image
                    src='/assets/hero/dzawil_lanyard.png'
                    alt={'Dzawil Uqul'}
                    fill
                    className='object-contain'
                  />
                {/* <div className='flex flex-row items-center justify-center space-x-2 mt-10 w-40 h-40 bg-red-400'>
                  jkawdhjkjwahdkawjhkjawh
                </div> */}
              </div>
            </div>
          </div>
          <div className='text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6'>
              <div>
                <AnimatedText text='My Name is Dzawil Uqul' textStyles='h2 mb-2 mt-5'/>
                <p className='text-lg mb-5'>Fullstack Dev | Game Development | Artificial Intelligent | Data Science.</p>
                <p className='max-w-[680px] mx-auto xl:mx-0 mb-10 text-justify'>
                  I am an Informatics Engineering student with a passion for technology and innovation. 
                  My expertise spans three exciting fields: web development, game development, and artificial intelligence (AI), 
                  particularly in computer vision. With hands-on experience in crafting responsive web applications using modern frameworks, 
                  developing engaging games with C# and Unity, and researching deep learning for advanced image processing, 
                  I aim to create impactful projects that combine creativity and cutting-edge technology.
                </p>
                {/* Info Item */}
                <div className='flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center'>
                  {/* Item 1 */}
                  <div className='max-w-max'>
                    <div className='uppercase font-bold text-primary'>Age</div>
                    <p>{getAge()}</p>
                  </div>
                  {/* Item 2 */}
                  <div className='max-w-max'>
                    <div className='uppercase font-bold text-primary'>Live in</div>
                    <p>Semarang, Indonesia</p>
                  </div>
                  {/* Item 3 */}
                  <div className='max-w-max'>
                    <div className='uppercase font-bold text-primary'>Email</div>
                    <p>dzawilu@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About