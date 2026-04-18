# 🧠 Permanent Context & Memory for Gemini

## 🚀 Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS 
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🎨 Design System & Aesthetics
This project strictly adheres to a **premium, high-end cinematic design**. The goal is to always "WOW" the user.
- **Theme**: Ultra-modern Dark Mode heavily relying on `zinc-900` and `zinc-950`.
- **Brand Accent**: Vibrant Orange (`#FF6A2B`).
- **Typography**: Oversized, bold, and highly legible typography. Often utilizing dynamic scaling (e.g. `clamp()`) to ensure letters wrap cleanly on smaller devices without structured overlaps.
- **Effects**: Premium details like glassmorphism (`bg-white/5` with `backdrop-blur-md`), subtle pulse animations, glowing orange auras on hover, and smooth edge-gradients overlapping photography.

## 🧱 Component Guidelines
- **Responsive by Default**: Every component and layout must be built flawlessly for all platforms and screen sizes (Mobile, Tablet, and Desktop). Strictly use Tailwind's responsive prefixes (e.g. `sm:`, `md:`, `lg:`) and dynamic scaling (`clamp()`) to ensure layouts fluidly adapt without overlapping.
- **Framer Motion**: Always favor micro-animations on interactive elements (`whileHover`, `whileTap`, `transition={{ type: "spring" }}`).
- **Client/Server boundaries**: Any file importing `framer-motion` or using `useRef`/`useState` must have `"use client";` placed explicitly at the top of the file.
- **Performance**: High fidelity does not mean bloated performance. Stick to modern React patterns, avoid re-rendering entire layout-trees, and leverage `next/image` with proper layout algorithms (`fill`, `object-cover`) to ensure sharp visuals.

## 🎯 Project Info
- **Subject**: Personal portfolio for Samson Enoch P.J.
- **Title**: Brand & UI/UX Designer based in Chennai.
- **CTA Focus**: Interactive slider buttons and dynamic "Available for work" badges.
