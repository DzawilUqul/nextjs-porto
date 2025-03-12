"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <header
          className={`fixed top-0 w-full md:py-[20px] xl:py-[20px] z-50 transition-all duration-500 ${
            isScrolled && `bg-white bg-opacity-30 backdrop-blur-xl shadow-sm`
          }`}
        >
          <div className="container mx-auto">
            <div className="flex max-md:py-4 flex-row max-md:justify-between lg:flex-row items-center gap-4 lg:justify-between">
              {/* Logo */}
              <Logo />
              <div className="flex max-md:hidden items-center gap-12">
                {/* Navigations & Socials */}
                <Nav
                  containerStyles="xl:flex"
                  listStyles="flex gap-5 max-lg:gap-0"
                  linkStyles="text-primary w-[80px] h-[40px] flex text-center items-center justify-center font-primary text-2xl tracking-[1.4px] transition-all duration-300 cursor-pointer hover:text-violet-700 hover:scale-150"
                />
              </div>
              <Socials
                containerStyles="flex max-md:hidden items-center gap-2"
                iconStyles="text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full"
              />
              <div className="hidden max-md:block">
                <Hamburger
                  size={24}
                  duration={0.5}
                  distance="md"
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-300">
            <Nav
              containerStyles="flex flex-col items-center gap-8"
              listStyles="flex flex-col items-center gap-6"
              linkStyles="text-primary text-2xl font-primary tracking-wide transition-all duration-300 cursor-pointer hover:text-violet-700"
              closeNav={closeNav}
            />
            <Socials
              containerStyles="flex gap-4 mt-8"
              iconStyles="text-base w-[40px] h-[40px] bg-primary text-white flex items-center justify-center rounded-full"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
