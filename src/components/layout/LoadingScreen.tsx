"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

const LoadingScreen = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [drops, setDrops] = useState<{ id: number; left: string; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Ambient falling drops
    const newDrops = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    }));
    setDrops(newDrops);

    // Trigger splash after drop falls
    const timer = setTimeout(() => setShowSplash(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-b from-[#00B4D8] to-[#2196F3] overflow-hidden"
    >
      {/* Ambient Rain */}
      <div className="absolute inset-0 pointer-events-none">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.3, 0] }}
            transition={{ 
              duration: drop.duration, 
              repeat: Infinity, 
              delay: drop.delay, 
              ease: "linear" 
            }}
            style={{ 
              left: drop.left, 
              width: `${drop.size}px`, 
              height: `${drop.size * 3}px` 
            }}
            className="absolute bg-white/20 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Main Animation Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        
        {/* Falling Drop & Ripple Area */}
        <div className="relative mb-8 h-32 w-32 flex items-center justify-center">
          {/* Central Falling Droplet */}
          {!showSplash && (
            <motion.div
              initial={{ y: -400, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.13, 1, 0.23, 1] }}
              className="absolute top-0"
            >
              <BrandLogo size={60} variant="white" />
            </motion.div>
          )}

          {/* Impact Ripples */}
          <AnimatePresence>
            {showSplash && (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute border-4 border-white/40 rounded-full w-24 h-24"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: 4.5, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                  className="absolute border-2 border-white/20 rounded-full w-24 h-24"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <BrandLogo size={80} variant="white" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Brand Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={showSplash ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          AquaRide Ghana
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showSplash ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/90 text-sm md:text-base max-w-md leading-relaxed mb-12"
        >
          Never again fear water shortages with smart, instant delivery
        </motion.p>

        {/* Dot Wave Loader */}
        <AnimatePresence>
          {showSplash && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-2"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Liquid Wave Base */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] h-64 -z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[300%] h-full opacity-40"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            animate={{
              x: ["-33.3%", "0%"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="opacity-20"
          />
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="white"
            animate={{
              x: ["0%", "-33.3%"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="opacity-10"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
