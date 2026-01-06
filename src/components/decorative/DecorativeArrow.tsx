"use client";

import { motion } from "framer-motion";

interface DecorativeArrowProps {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  size?: number;
  color?: string;
}

export default function DecorativeArrow({ 
  className = "", 
  direction = "right",
  size = 40,
  color = "#E87A20"
}: DecorativeArrowProps) {
  const rotations = {
    up: -90,
    down: 90,
    left: 180,
    right: 0
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Curvy arrow */}
      <motion.path
        d="M5 20C5 20 15 20 20 20C25 20 30 15 30 20C30 25 25 30 35 25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {/* Arrow head */}
      <motion.path
        d="M30 22L35 25L32 30"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </motion.svg>
  );
}

