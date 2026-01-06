"use client";

import { motion } from "framer-motion";

interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

export default function Sparkle({ 
  className = "", 
  size = 24, 
  color = "#E87A20",
  delay = 0 
}: SparkleProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.5, 1],
        scale: [0.5, 1, 0.8, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill={color}
      />
    </motion.svg>
  );
}

