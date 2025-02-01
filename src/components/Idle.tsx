"use client";
import { motion } from "framer-motion";

import { ReactNode } from "react";

interface IdleProps {
  content: ReactNode;
  duration: number;
  startPos: number;
  endPos: number;
}

const Idle: React.FC<IdleProps> = ({ content, duration, startPos, endPos }) => {
  const idleAnimation = {
    x: [startPos, 20, endPos],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    }
  };

  return (
    <motion.div animate={idleAnimation}>
      {content}
    </motion.div>
  )
}

export default Idle