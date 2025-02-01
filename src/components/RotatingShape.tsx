"use client";
import { motion } from "framer-motion";

import { ReactNode } from "react";

interface RotatingShapeProps {
  content: ReactNode;
  direction: string;
  duration: number;
}

const RotatingShape: React.FC<RotatingShapeProps> = ({ content, direction, duration }) => {
  const rotatingAnimation = {
    rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    }
  };

  return (
    <motion.div animate={rotatingAnimation}>
      {content}
    </motion.div>
  )
}

export default RotatingShape