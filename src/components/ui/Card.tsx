"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "dark" | "light" | "glass";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "dark", hover = true, children, className = "", ...props }, ref) => {
    const baseStyles = "rounded-2xl overflow-hidden transition-all duration-300";
    
    const variants = {
      dark: "bg-sparq-dark/80 border border-white/10",
      light: "bg-sparq-cream border border-sparq-cream-dark",
      glass: "bg-white/5 backdrop-blur-md border border-white/10",
    };

    const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;

