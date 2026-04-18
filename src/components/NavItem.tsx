"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function NavItem({ label, href, onClick }: NavItemProps) {
  return (
    <motion.div variants={itemVariants} className="overflow-hidden">
      <Link
        href={href}
        onClick={onClick}
        className="group relative inline-block text-4xl sm:text-5xl md:text-6xl font-black text-white/80 hover:text-white transition-colors duration-300 py-3 sm:py-4"
      >
        <span className="relative z-10 block transition-all duration-300 ease-out group-hover:scale-105 group-hover:tracking-widest">
          {label}
        </span>
        
        {/* Subtle underline underline highlight interaction */}
        <span className="absolute bottom-1 left-0 h-1 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
      </Link>
    </motion.div>
  );
}
