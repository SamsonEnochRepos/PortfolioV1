"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface SlideButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function SlideButton({ text = "See my works", onClick, className = "" }: SlideButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={`relative flex items-center justify-between w-64 h-16 p-2 rounded-full overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-md transition-all shadow-xl group ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Fill Animation */}
      <motion.div
        className="absolute inset-0 bg-[#FF6A2B] origin-left rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      
      {/* Background Glow when hovered */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-[#FF6A2B]"
        initial={{ opacity: 0, filter: "blur(0px)" }}
        animate={{ opacity: isHovered ? 0.3 : 0, filter: isHovered ? "blur(16px)" : "blur(0px)" }}
        transition={{ duration: 0.3 }}
      />

      {/* Circle Knob */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md"
        animate={{ x: isHovered ? 192 : 0 }} // 256 (64*4) - 16 (p-2*2) - 48 (12*4) = 192. Actually w-64 is 256px. padding 8px * 2 = 16px. Knob is 48px. 256 - 16 - 48 = 192px.
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
      >
        <ArrowRight className="w-5 h-5 text-zinc-900" />
      </motion.div>

      {/* Button Text */}
      <motion.span
        className={`absolute inset-0 flex items-center justify-center font-bold text-lg pointer-events-none z-10 transition-colors duration-300 ${isHovered ? "text-white" : "text-zinc-300"}`}
        animate={{ x: isHovered ? -16 : 16 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}
