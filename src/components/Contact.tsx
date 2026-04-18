"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-zinc-900 bg-zinc-950/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
                Let&apos;s build <br /> something <span className="text-zinc-500">amazing.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-md">
                Looking for a developer who can bridge the gap between design, engineering, and artificial intelligence? Let&apos;s connect.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:samson6906@gmail.com"
                className="group flex items-center gap-4 text-xl font-medium text-white w-fit"
              >
                <div className="p-4 bg-zinc-900 rounded-full border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="group-hover:text-zinc-300 transition-colors">samson6906@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/samsonenochpj"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-xl font-medium text-white w-fit"
              >
                <div className="p-4 bg-zinc-900 rounded-full border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="group-hover:text-zinc-300 transition-colors">samsonenochpj</span>
              </a>

              <div className="flex items-center gap-4 text-lg font-medium text-zinc-400">
                <div className="p-4 rounded-full border border-transparent">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-zinc-800 p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="scope" className="text-sm font-medium text-zinc-400 ml-1">Project Scope</label>
                <select
                  id="scope"
                  required
                  defaultValue=""
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a scope</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="fullstack">Full-Stack Application</option>
                  <option value="ai">AI Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-4 mt-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "idle" ? (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                ) : status === "submitting" ? (
                  "Sending..."
                ) : (
                  "Message Sent!"
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
