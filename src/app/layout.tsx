import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Samson Enoch P.J. | Portfolio",
  description: "Building intelligent systems. No fluff, no filler — just results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-400 font-sans selection:bg-white/10 selection:text-white" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
