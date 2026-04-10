"use client";

import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative pt-20 pb-56 sm:pb-64 md:pb-80 lg:pb-96 xl:pb-[350px] overflow-hidden flex flex-col items-center"
      style={{ background: 'linear-gradient(186.67deg, #01B7E7 -22.96%, #1DBCDC 36.33%)' }}
    >

      {/* Content */}
      <div className="relative z-40 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-10">

        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 md:gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-[1px] bg-white/40"
          />
          <span className="text-white italic tracking-wider text-sm md:text-[20px] text-center" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>Ghana&apos;s #1 Water Tanker Delivery</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-[1px] bg-white/40"
          />
        </motion.div>

        {/* Live Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
          className="bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 flex items-center justify-center gap-2 text-white text-[13px] mb-8 md:mb-10"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <span className="font-medium">We are live in Ghana, download and enjoy</span>
          <img src="/assets/location-pin.svg" alt="Location" className="w-4 h-4 object-contain" />
          <span className="font-bold text-[#FBBF24]">Accra . Kumasi . Takoradi</span>
          <span className="text-sm">🇬🇭</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[28px] md:text-[44px] lg:text-[52px] text-white leading-[1.15] mb-5 md:mb-6 italic"
          style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}
        >
          Clean Water, Delivered <span className="text-[#FBBF24]">Fast & Safe</span>
          <br />
          Across Ghana.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/90 text-[14px] md:text-[16px] max-w-2xl mx-auto leading-[1.7] mb-8 md:mb-12 font-normal px-2"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Tankers deliver clean water to your home, school, or business — on demand or on your schedule, anywhere in Accra, Kumasi and Takoradi.
        </motion.p>

        {/* Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 relative z-50"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0F172B] text-white px-5 py-3 rounded-[12px] flex items-center gap-3 transition-colors border border-white/10"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-medium text-white/70 leading-tight tracking-wider">Download on the</span>
              <span className="text-[15px] font-bold leading-tight">App Store</span>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0F172B] text-white px-5 py-3 rounded-[12px] flex items-center gap-3 transition-colors border border-white/10"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <svg viewBox="0 0 512 512" className="w-5 h-5">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#34A853"/>
              <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" fill="#4285F4"/>
              <path d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" fill="#FBBC04"/>
              <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#EA4335"/>
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-medium text-white/70 leading-tight tracking-wider uppercase">Get it on</span>
              <span className="text-[15px] font-bold leading-tight">Google Play</span>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Hero Images */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[20%] sm:h-[25%] md:h-[30%] lg:h-[35%] xl:h-[40%] pointer-events-none z-20">
        <div className="max-w-[1400px] mx-auto h-full relative">
          {/* Left: Man with hose */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 60 }}
            className="absolute bottom-0 left-0 w-[140px] sm:w-[220px] md:w-[280px] lg:w-[340px] xl:w-[400px]"
          >
            <img
              src="/assets/mane.png"
              alt="AquaRide Driver"
              className="w-full h-auto object-contain object-bottom"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </motion.div>

          {/* Right: Tanker Truck */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 60 }}
            className="absolute bottom-2 right-0 w-[180px] sm:w-[280px] md:w-[380px] lg:w-[500px] xl:w-[650px]"
          >
            <img
              src="/assets/trucker.png"
              alt="AquaRide Truck"
              className="w-full h-auto object-contain object-bottom"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Soft Edge / Wave */}
      <div className="absolute bottom-[-1px] left-0 right-0 w-full z-30 pointer-events-none">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="w-full h-auto fill-white mt-20">
          <path fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Background Soft Wave (Opacity layer) */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none opacity-30">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-[#FDFDFD]">
          <path fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,234.7C840,245,960,235,1080,213.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
