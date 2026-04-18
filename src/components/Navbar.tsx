"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About me", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact me", href: "#" },
];

const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socialIcons = [
  { icon: GithubIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: TwitterIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-6 md:left-8 z-50"
      >
        <div className="flex items-center gap-4 bg-zinc-800/80 backdrop-blur-xl border border-white/10 rounded-full pl-4 pr-2 py-2 shadow-2xl">
          
          {/* Logo area */}
          <a href="#" className="flex items-center gap-2 group">
            {/* Custom SVG or styled logo, using a styled circle as placeholder */}
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-[#FF6A2B] to-[#b34011] group-hover:shadow-[0_0_15px_rgba(255,106,43,0.5)] transition-all">
              <div className="w-4 h-4 rounded-full border border-white/50 border-r-transparent"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white pr-4 mix-blend-difference">
              Samson
            </span>
          </a>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:bg-white/10 rounded-full transition-colors group relative"
          >
            <span className="w-5 h-[2px] bg-white rounded-full group-hover:bg-[#FF6A2B] transition-colors" />
            <span className="w-5 h-[2px] bg-white rounded-full group-hover:bg-[#FF6A2B] transition-colors" />
            <span className="w-5 h-[2px] bg-white rounded-full group-hover:bg-[#FF6A2B] transition-colors" />
          </button>
        </div>
      </motion.header>

      {/* Popover Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            {/* Dark overlay backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20, x: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20, x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformOrigin: "top left" }}
              className="absolute top-8 left-6 md:left-8 w-72 lg:w-80 bg-[#2D2D2D]/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl pointer-events-auto overflow-hidden flex flex-col"
            >
              {/* Header inside popover */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-[#FF6A2B] to-[#b34011]">
                    <div className="w-4 h-4 rounded-full border border-white/50 border-r-transparent"></div>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">
                    Samson
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors group"
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-6 py-6 flex flex-col gap-1">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                    onClick={() => setIsOpen(false)}
                    className="group relative text-2xl font-semibold text-zinc-300 py-2 w-full text-left overflow-hidden rounded-xl px-4 hover:bg-white/5 transition-colors"
                  >
                    <motion.span
                      className="relative z-10 inline-block group-hover:text-[#FF6A2B] transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.a>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="p-6 pt-4 mt-auto border-t border-white/5 flex items-center gap-4">
                {socialIcons.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
