import React from 'react'
import Logo from './Logo'
import Socials from './Socials'
import Nav from './Nav'

const PillNavbar = () => {
  return (
    <header className='w-full xl:py-[30px] z-50 fixed top-0 bg-white bg-opacity-30 backdrop-blur-xl'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-4 lg:justify-between'>
          {/* Logo */}
          <Logo />
            <div className='flex items-center gap-12'>
              {/* Navigations & Socials */}
                <Nav
                  containerStyles='hidden xl:flex'
                  listStyles='flex gap-6'
                  linkStyles='text-primary w-[80px] h-[40px] flex text-center items-center justify-center font-primary text-2xl tracking-[1.4px] transition-all duration-300 cursor-pointer hover:text-violet-700 hover:scale-150'
                />
            </div>
            <Socials
              containerStyles='flex items-center gap-2'
              iconStyles='text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full'
            />
        </div>
      </div>
    </header>
  )
}

export default PillNavbar