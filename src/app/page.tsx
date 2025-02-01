"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
// import NoSsr from "@/components/NoSsr";
// import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Work from "@/components/Works/Works";
import { useEffect } from "react";

export default function Home() {
  // Locomotive Scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      {/* <NoSsr> */}
        {/* <FixedMenu /> */}
      {/* </NoSsr> */}
      <Services />
      <About />
      <Journey />
      <Work loadMoreButton/>
      <Testimonial />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
