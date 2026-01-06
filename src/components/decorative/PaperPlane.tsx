"use client";

import { motion } from "framer-motion";

interface PaperPlaneProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function PaperPlane({ 
  className = "", 
  size = 60,
  color = "#E87A20"
}: PaperPlaneProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      initial={{ opacity: 0, x: -20, y: 20 }}
      animate={{ 
        opacity: 1, 
        x: [0, 10, 0],
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        d="M5 30L55 5L40 55L30 35L5 30Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M30 35L55 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Trail dots */}
      <motion.circle
        cx="10"
        cy="45"
        r="2"
        fill={color}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      />
      <motion.circle
        cx="18"
        cy="50"
        r="1.5"
        fill={color}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      <motion.circle
        cx="25"
        cy="53"
        r="1"
        fill={color}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
    </motion.svg>
  );
}

