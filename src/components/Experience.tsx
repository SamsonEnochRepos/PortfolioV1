"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Low Code Developer Intern",
    company: "Zoho MENA",
    location: "Dubai, UAE",
    date: "June 2025",
    description: "Focusing on enterprise modules, role-based functional dashboards, and advanced Deluge scripting to automate complex workflows.",
    icon: Briefcase,
  },
  {
    role: "Frontend Developer Intern",
    company: "Nissan Middle East",
    location: "Dubai, UAE",
    date: "July 2024 - Aug 2024",
    description: "Developed and maintained static HTML/JS interfaces and architected the internal SharePoint division site for streamlined employee access.",
    icon: Briefcase,
  },
  {
    role: "BTech Information Technology",
    company: "St. Joseph's College Of Engineering",
    location: "Chennai, India",
    date: "2024 - 2028",
    description: "Pursuing undergraduate degree with a strong focus on software engineering, artificial intelligence, and systems architecture.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-white" />
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="mb-16 last:mb-0 relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-21px] top-1 bg-black p-2 border-2 border-zinc-700 rounded-full">
                <exp.icon className="w-5 h-5 text-zinc-300" />
              </div>

              <div className="group bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 font-medium">
                      <span className="text-zinc-300">{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-full text-sm font-medium text-zinc-300">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
