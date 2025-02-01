import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { useMediaQuery } from 'react-responsive'
import Nav from './Nav'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import Socials from './Socials'


const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)' 
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };

      if (!isMobile) {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  // Only render the component if mounted on the client side
  if (!isMounted) return null;

  return (
    <div className='fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent'>
      {/* Menu */}
      <AnimatePresence>
        {showMenu && showMenuButton && (
          // putih2
            <motion.div className='fixed w-full max-w-md md:max-w-none h-[500px] bottom-10 xl:bottom-10 px-4 pointer-events-auto'>
              <div className='bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg'>
                <Nav
                  containerStyles='md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left'
                  listStyles='flex flex-col justify-center gap-4'
                  // linkStyles='font-primary text-4xl text-primary cursor-pointer hover:text-secondary hover:scale-125'
                  linkStyles={`font-primary text-4xl cursor-pointer tracking-[1.4px] transition-all duration-300 cursor-pointer ${!isMobile ?'hover:scale-125 hover:text-violet-400': ''}`}
                  spy={true}
                />
                {/* info */}
                <div className='hidden md:flex mx-auto'>
                  <div>
                    <div className='flex gap-12 mb-0'>
                      {/* Location */}
                      <div className='flex flex-col'>
                        <div className='font-semibold text-[28px] text-accent mb-5'>
                          <FiMapPin className='text-violet-500 text-4xl'/>
                        </div>
                        <p className='font-bold'>Location</p>
                        <p>Semarang, Indonesia</p>
                      </div>
                      {/* Phone */}
                      <div className='flex flex-col'>
                        <div className='font-semibold text-[28px] text-accent mb-5'>
                          <FiPhoneCall className='text-violet-500 text-4xl'/>
                        </div>
                        <p className='font-bold'>Phone</p>
                        <p>+6281249652160</p>
                      </div>
                      {/* Email */}
                      <div className='flex flex-col'>
                        <div className='font-semibold text-[28px] text-accent mb-5'>
                          <FiMail className='text-violet-500 text-4xl'/>
                        </div>
                        <p className='font-bold'>Email</p>
                        <p>dzawilu@gmail.com</p>
                      </div>
                    </div>
                    <Socials 
                      containerStyles='flex gap-2 mt-10' 
                      iconStyles='text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full'/>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      {/* Menu Button */}
      {/* Render button on mobile without animation */}
      {isMobile ? (
        <div className='fixed z-50 bottom-16 pointer-events-auto'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='bg-violet-500 shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none'>
            <CgMenuGridR className='text-4xl text-white'/>
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
              }}
              className='fixed z-50 bottom-16 pointer-events-auto'
            >
              {/* ungu */}
              <button
                onClick={() => setShowMenu(!showMenu)}
                className='bg-violet-500 shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none'>
                <CgMenuGridR className='text-4xl text-white'/>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

export default FixedMenu