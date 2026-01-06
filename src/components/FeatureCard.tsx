"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function FeatureCard({
  title,
  description,
  image,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1C1C1C] rounded-sm overflow-hidden group shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="p-5 pb-3">
        <h3 className="font-sans text-base font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}
