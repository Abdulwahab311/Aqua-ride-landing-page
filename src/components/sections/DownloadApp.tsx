"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Smartphone, Droplets, ShieldCheck, Zap } from "lucide-react";

const DownloadApp = () => {
  return (
    <section id="download" className="py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00B4D8]/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-[1750px] mx-auto px-6">
        <div className=" glass-premium p-8 md:p-24 rounded-[40px] md:rounded-[60px] border-white/20 shadow-xl relative overflow-hidden bg-white/40 backdrop-blur-3xl">
          {/* Section Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase mb-8"
            >
              <Smartphone className="w-4 h-4" />
              Available on iOS & Android
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase text-[#03045E] leading-[1.1]">
              WATER DELIVERY <br /> <span className="text-[#00B4D8]">IN YOUR POCKET</span>
            </h2>
            
            <p className="text-lg text-foreground/50 font-medium leading-relaxed mb-12">
              Join the ecosystem that's redefining how cities access water. Experience seamless ordering, real-time tracking, and transparent pricing on the AquaRide mobile app.
            </p>

            {/* Store Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 px-6 md:px-10 py-4 md:py-6 bg-[#00B4D8] text-white rounded-[25px] md:rounded-[30px] shadow-2xl hover:shadow-[#03045E]/40 transition-all duration-300 w-full md:w-auto"
              >
                <Apple size={32} className="text-white group-hover:scale-110 transition-transform" />
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none mb-1">Download on the</div>
                  <div className="text-lg md:text-xl font-black leading-none">App Store</div>
                </div>
              </motion.a>

              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 px-6 md:px-10 py-4 md:py-6 bg-white border-2 border-slate-100 text-[#03045E] rounded-[25px] md:rounded-[30px] shadow-xl hover:shadow-primary/20 transition-all duration-300 w-full md:w-auto"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 text-[#00B4D8] group-hover:scale-110 transition-transform" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.65,16.21C19.11,16.48 19.5,16.48 19.9,16.21L21.3,15.4C21.7,15.17 22,14.65 22,14.07C22,13.5 21.7,13 21.3,12.75L16.81,10.12M14.69,12.87L3.92,2.38C4.15,2.27 4.41,2.21 4.69,2.21C5.07,2.21 5.44,2.32 5.77,2.5L14.69,7.74M14.69,16.26L5.77,21.5C5.44,21.68 5.07,21.79 4.69,21.79C4.41,21.79 4.15,21.73 3.92,21.62L14.69,11.13V12.87Z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#03045E]/50 leading-none mb-1">Get it on</div>
                  <div className="text-lg md:text-xl font-black leading-none">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* App Download Visual - More relevant to the "download" context */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative max-w-[480px] mx-auto group mt-16"
            >
              {/* Refined Glowing Background instead of harsh shadow */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000" />
              
              {/* Glass Container to mask image corners */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
                <img 
                  src="/assets/app_download_visual.png" 
                  alt="AquaRide app download progress illustration" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>

              {/* Decorative Pulsing Accents */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 blur-2xl rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#00B4D8]/10 blur-2xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>

          {/* Feature Highlights beneath buttons */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-200/50">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-[22px] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-black text-[#03045E] uppercase tracking-tight mb-3">Instant Booking</h4>
              <p className="text-sm text-foreground/50 font-bold uppercase tracking-wider">Order in under 30 seconds</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-[22px] flex items-center justify-center text-[#00B4D8] mb-6 group-hover:bg-[#00B4D8] group-hover:text-white transition-all duration-500">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-black text-[#03045E] uppercase tracking-tight mb-3">Verified Partners</h4>
              <p className="text-sm text-foreground/50 font-bold uppercase tracking-wider">Safe & professional drivers</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-[22px] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Droplets size={32} />
              </div>
              <h4 className="text-xl font-black text-[#03045E] uppercase tracking-tight mb-3">Smart Refills</h4>
              <p className="text-sm text-foreground/50 font-bold uppercase tracking-wider">Automated scheduling alerts</p>
            </div>
          </div>
          
          {/* Liquid Mask Decoration */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
