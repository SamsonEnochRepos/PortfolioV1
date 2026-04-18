"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SlideButton from "./SlideButton";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax effect on scroll for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/assets/closeupheropagepic.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlays: Gradient and Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
        <div className="absolute inset-0 backdrop-blur-[2px] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      </motion.div>

      {/* Giant Faded Text Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-black text-white whitespace-nowrap tracking-tighter"
        >
          Samson
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10 w-full h-full pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between min-h-[60vh] gap-12 lg:gap-8">
          
          {/* Left Column: Primary Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-1 w-full"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,106,43,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF6A2B] animate-pulse" />
              <span className="text-sm font-medium text-zinc-300">Available for Work</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]">
              Brand & UI/UX<br />
              Designer based<br />
              in Chennai
            </h1>
          </motion.div>

          {/* Right Column: Secondary Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex-none lg:w-[400px] w-full flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-md">
              Hi, I'm Samson Enoch P.J. — a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
            </p>
            <div className="flex justify-start lg:justify-end w-full">
               <SlideButton text="See my works" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
