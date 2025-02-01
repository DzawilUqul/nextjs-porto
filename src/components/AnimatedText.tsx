"use client"
import { animate, delay, motion } from 'framer-motion'
import React from 'react'

const letterAnimation = {
  initial: {
    y: "100%",
    opacity: 0
  },
  animate: (i: [number]) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.2, 0, 0.1, 1],
      delay: i[0]
    }
  })
}

const getLetter = (name: string) => {
  const letters: React.JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    return letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    )
  });
  return letters;
}

interface AnimatedTextProps {
  text: string
  textStyles: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, textStyles}) => {
  return (
    <div className={`${textStyles}`}>{getLetter(text)}</div>
  )
}

export default AnimatedText