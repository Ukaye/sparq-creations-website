"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  "BRAND STRATEGY",
  "PACKAGING DESIGN",
  "PRINT PRODUCTION",
  "CAMPAIGN CREATIVE",
  "MESSAGING",
  "VISUAL IDENTITY",
  "DIGITAL MARKETING",
  "BRAND CONSULTING",
];

interface ServiceTickerProps {
  variant?: "dark" | "light";
  speed?: number;
}

export default function ServiceTicker({ variant = "dark", speed = 30 }: ServiceTickerProps) {
  const textColor = variant === "dark" ? "text-sparq-white" : "text-sparq-dark";
  const borderColor = variant === "dark" ? "border-white/10" : "border-sparq-dark/10";

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <div 
      className={`${borderColor} border-y py-4 overflow-hidden`}
      style={{
        background: "linear-gradient(90deg, #E5FAFB 0.81%, #D1B686 25%, #F4ECBA 50%, #F6CAA2 75%, #E5FAFB 100%)",
        transform: "rotate(0deg)",
      }}
    >
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedServices.map((service, index) => (
          <div key={index} className="flex items-center gap-8">
            <span
              className={`${textColor} font-display text-lg md:text-xl font-bold tracking-wider`}
            >
              {service}
            </span>
            <Image
              src="/images/icon.svg"
              alt=""
              width={24}
              height={24}
              className="flex-shrink-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

