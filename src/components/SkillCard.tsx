"use client";

import { motion, type MotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";
import type { Skill } from "./skillsData";

interface SkillCardProps {
  skill: Skill;
  index: number;
  sectionScrollYProgress?: MotionValue<number>;
}

export default function SkillCard({ skill, index, sectionScrollYProgress }: SkillCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState("");

  const localScroll = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scrollYProgress = sectionScrollYProgress ?? localScroll.scrollYProgress;

  const parallaxRange = useMemo(() => {
    const base = 5;
    const variance = (index % 4) * 2;
    return base + variance;
  }, [index]);

  const iconY = useSpring(
    useTransform(scrollYProgress, [0, 1], [parallaxRange, -parallaxRange]),
    { stiffness: 220, damping: 28, mass: 0.6 }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Subtle float effect, much more restricted than before
    const moveX = x * 0.05;
    const moveY = y * 0.05;
    
    setTransform(`translate(${moveX}px, ${moveY}px) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <motion.a
      href={skill.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover="true"
      style={{
        transform: transform !== "" ? transform : "translate(0,0) scale(1)",
        transition: transform !== "" ? "transform 0.1s ease-out" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="group relative flex flex-col justify-between w-full h-[260px] rounded-[2rem] bg-[#1c1c1c] p-6 lg:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.2)] md:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] will-change-transform overflow-hidden"
    >
      {/* Top Right Cutout Wrapper (Matches Section BG #0b0b0b) */}
      <div className="absolute top-0 right-0 w-[5rem] h-[5rem] bg-[#0b0b0b] rounded-bl-[1.75rem] z-20 flex items-start justify-end p-2.5 pointer-events-none">
        
        {/* Actual Button */}
        <div className="bg-black border border-white/5 rounded-full w-12 h-12 flex items-center justify-center pointer-events-auto transition-colors duration-300 group-hover:bg-white">
          <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors duration-300" />
        </div>

        {/* Left concave corner */}
        <div 
          className="absolute top-0 -left-[1.5rem] w-[1.5rem] h-[1.5rem] bg-transparent pointer-events-none"
          style={{
            borderTopRightRadius: '1.5rem',
            boxShadow: '12px -12px 0 0 #0b0b0b'
          }}
        ></div>

        {/* Bottom concave corner */}
        <div 
          className="absolute -bottom-[1.5rem] right-0 w-[1.5rem] h-[1.5rem] bg-transparent pointer-events-none"
          style={{
            borderTopRightRadius: '1.5rem',
            boxShadow: '12px -12px 0 0 #0b0b0b'
          }}
        ></div>
      </div>

      {/* Subtle Glow on Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/5 transition-colors duration-500 group-hover:border-white/[0.08]" />
      
      {/* Icon Area */}
      <div className="relative z-10 w-fit">
        <motion.div
          style={{ y: iconY }}
          className="h-20 w-20 rounded-[1.4rem] bg-[#111111] grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.3)] mb-6 transition-transform duration-500 group-hover:scale-105"
        >
          {skill.icon}
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-1.5 px-2.5 py-1 w-fit rounded-full bg-white/[0.03] border border-white/[0.05]">
          <span className="text-[11px] text-zinc-500 leading-none">✱</span>
          <span className="text-[9px] font-bold tracking-[0.15em] text-zinc-400 uppercase leading-none mt-0.5">
            {skill.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-100 line-clamp-3 leading-snug">
          {skill.name}
        </h3>
      </div>
    </motion.a>
  );
}
