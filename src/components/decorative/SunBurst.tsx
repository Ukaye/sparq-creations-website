"use client";

import { motion } from "framer-motion";

interface SunBurstProps {
  className?: string;
  size?: number;
}

export default function SunBurst({ className = "", size = 200 }: SunBurstProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {/* Sun rays */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const innerRadius = 40;
        const outerRadius = i % 2 === 0 ? 90 : 70;
        const x1 = 100 + innerRadius * Math.cos(angle);
        const y1 = 100 + innerRadius * Math.sin(angle);
        const x2 = 100 + outerRadius * Math.cos(angle);
        const y2 = 100 + outerRadius * Math.sin(angle);

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#E87A20"
            strokeWidth={i % 2 === 0 ? 3 : 2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        );
      })}
      {/* Center circle */}
      <circle cx="100" cy="100" r="35" fill="#E87A20" />
    </motion.svg>
  );
}

