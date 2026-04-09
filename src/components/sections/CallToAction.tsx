"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Background with Wave Texture */}
      <div className="absolute inset-0">
        <Image
          src="/assets/dark.jpg"
          alt="Water Texture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3BA9C5]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Logo Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl overflow-hidden"
        >
          <Image src="/assets/Icon.png" alt="AquaRide" width={40} height={40} className="w-10 h-10 object-contain" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white text-2xl md:text-[56px] font-black mb-4 font-manrope tracking-tight"
        >
          Never Run Out of Water Again.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-medium mb-12 flex items-center gap-2"
        >
          Fast. Reliable. Ghanaian. <span className="text-2xl">🇬🇭</span>
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="bg-[#0A2540] text-white px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10">
              <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current text-white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-white/60">Download on the</div>
                <div className="text-lg font-black leading-none">App Store</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="bg-[#0A2540] text-white px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10">
              <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-white">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-white/60">GET IT ON</div>
                <div className="text-lg font-black leading-none">Google Play</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Ghana Accent Bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-1 h-1.5 rounded-full overflow-hidden"
        >
          <div className="w-1/3 bg-[#CE1126]" />
          <div className="w-1/3 bg-[#FCD116]" />
          <div className="w-1/3 bg-[#006B3D]" />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
