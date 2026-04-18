"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import SkillCard from "@/components/SkillCard";
import { skillsData } from "@/components/skillsData";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 overflow-hidden bg-[#0b0b0b] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-start md:mb-24"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            Capabilities
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-7xl">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {Array.from(new Set(skillsData.map((s) => s.category))).map((category, catIndex) => {
            const categorySkills = skillsData.filter((s) => s.category === category);
            
            return (
              <div 
                key={category} 
                className="flex flex-col border-t border-white/5 pt-10 md:pt-14 first:border-0 first:pt-0"
              >
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8 md:mb-10">
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.08,
                      }}
                    >
                      <SkillCard skill={skill} index={index} sectionScrollYProgress={scrollYProgress} />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

