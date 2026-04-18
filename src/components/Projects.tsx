"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "School Management System",
    description: "Automated workflows and real-time tracking for educational logistics and administration.",
    tag: "Logistics",
    metric: "+85%",
    metricLabel: "Workflow Efficiency",
    gradient: "from-blue-600/30 to-purple-600/30",
    blob: "bg-blue-600/20",
  },
  {
    title: "ARIS",
    description: "AI-driven Research Assistant leveraging advanced neural networks for deep analysis.",
    tag: "Artificial Intelligence",
    metric: "+150%",
    metricLabel: "Faster Research",
    gradient: "from-emerald-600/30 to-teal-600/30",
    blob: "bg-emerald-600/20",
  },
  {
    title: "IntelliTrack",
    description: "Railway optimization system utilizing AI for predictive maintenance and routing.",
    tag: "Analytics",
    metric: "-40%",
    metricLabel: "Downtime Reduction",
    gradient: "from-orange-600/30 to-red-600/30",
    blob: "bg-orange-600/20",
  },
  {
    title: "Nissan ISIT Platform",
    description: "Internal SharePoint division site and interactive web pages for automotive management.",
    tag: "Frontend",
    metric: "+120%",
    metricLabel: "User Engagement",
    gradient: "from-zinc-500/30 to-zinc-600/30",
    blob: "bg-zinc-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-zinc-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            Work
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Latest <br /> Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row bg-zinc-900/40 border border-zinc-800 rounded-[2rem] overflow-hidden hover:bg-zinc-900 transition-all duration-500 cursor-pointer"
            >
              {/* Left Side: Visual / Image Area */}
              <div className="md:w-[60%] h-[300px] md:h-[450px] relative p-8 md:p-12 flex flex-col justify-end overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800 shrink-0">
                {/* Simulated Image Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[2px]" />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl ${project.blob} transition-transform duration-700 group-hover:scale-125`} />
                
                {/* Overlay Metric */}
                <div className="relative z-10">
                  <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-1 drop-shadow-lg">
                    {project.metric}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-200 font-bold uppercase tracking-widest drop-shadow-md">
                    {project.metricLabel}
                  </p>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="md:w-[40%] p-8 md:p-16 flex flex-col justify-center bg-zinc-950/50">
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">
                    {project.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-full h-px bg-zinc-800 my-6" />
                
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
