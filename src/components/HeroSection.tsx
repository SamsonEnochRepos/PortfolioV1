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
      {/* Background Image filling the window */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/Heropage.png"
          alt="Hero Portrait"
          fill
          priority
          className="object-cover object-center lg:object-top"
          quality={100}
        />
        {/* Subtle subtle fade to merge into background cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[10vh] bg-gradient-to-b from-zinc-950/20 to-transparent" />
      </motion.div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-20 w-full h-full pt-28 md:pt-32 pb-40 md:pb-48 flex flex-col justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-12 md:gap-16 lg:gap-8 mt-10 md:mt-12 lg:mt-16">
          
          {/* Left Column: Primary Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-1 w-full max-w-xl lg:max-w-md"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md mb-6 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#FF6A2B] animate-pulse" />
              <span className="text-xs font-semibold text-white/90">Available for Work</span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-white tracking-tight leading-[1.1] drop-shadow-md">
              Brand & UI/UX<br className="hidden md:block" />
              <span className="md:hidden"> </span>Designer based<br className="hidden md:block" />
              <span className="md:hidden"> </span>in Chennai
            </h1>
          </motion.div>

          <div className="hidden lg:block flex-1" />

          {/* Right Column: Secondary Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex-1 w-full max-w-xl lg:max-w-sm flex flex-col items-start text-left mt-0 lg:mt-[15vh]"
          >
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-6 md:mb-8 leading-relaxed font-medium drop-shadow-md">
              Hi, I'm Samson Enoch P.J. — a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
            </p>
            <div className="flex justify-start w-full">
               <SlideButton text="See my works" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Giant Foreground Text with Clamp to prevent wild overlapping */}
      <div className="absolute -bottom-2 md:-bottom-2 lg:-bottom-6 left-0 right-0 text-center pointer-events-none z-30 flex justify-center overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="text-[clamp(4.5rem,18vw,14rem)] font-bold text-white leading-[0.8] tracking-tighter"
        >
          Samson
        </motion.h1>
      </div>

    </section>
  );
}
