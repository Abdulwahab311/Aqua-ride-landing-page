"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, Clock } from "lucide-react";

const DeliveryModes = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F8FDFF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#1FAFBE] text-[11px] font-black uppercase tracking-[0.2em] mb-4"
          >
            DELIVERY OPTIONS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-[42px] font-black text-[#0A2540] font-manrope"
          >
            Choose Your Delivery Mode
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Standard Delivery Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
          >
            <div className="relative h-48 md:h-72 overflow-hidden bg-gradient-to-b from-white via-white/80 to-[#2D4560]">
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/truck-standard.png"
                    alt="Standard Delivery Truck"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-[#4DB9DB] px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg z-10">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="text-[12px] font-black text-white">Standard</span>
              </div>
            </div>
            
            <div className="p-6 md:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl md:text-[34px] font-black text-[#0A2540] mb-3 md:mb-4 font-manrope leading-tight">Standard Delivery</h3>
              <p className="text-[#0A254099] mb-8 leading-relaxed font-medium">
                Reliable water delivery, scheduled at your convenience. Perfect for household needs.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Domestic Scheduling", "Reliable Matching", "Verified water providers", "Predictable Pricing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#0A2540BF] font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#1FAFBE]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="mt-auto w-full py-4 px-8 rounded-2xl border-2 border-[#1FAFBE] text-[#1FAFBE] bg-[#1FAFBE1A] font-black uppercase tracking-wider text-sm  transition-all duration-300">
                Standard Delivery
              </button>
            </div>
          </motion.div>

          {/* Urgent Delivery Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(31,175,190,0.3)] flex flex-col group transition-all duration-500 hover:-translate-y-2"
            style={{ background: "linear-gradient(169.76deg, #01B7E7 -44.22%, #1DBCDC 87.65%)" }}
          >
            <div className="relative h-48 md:h-72 overflow-hidden bg-gradient-to-b from-white via-white/80 to-[#2D4560]">
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/truck.png"
                    alt="Urgent Delivery Truck"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-[#FBC116] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-10 border border-white/20">
                <Zap className="w-4 h-3 text-[#0A2540] fill-[#0A2540]" />
                <span className="text-[10px] font-black uppercase text-[#0A2540]">Urgent</span>
              </div>
            </div>
            
            <div className="p-6 md:p-10 flex-1 flex flex-col text-white">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#FBC116] fill-[#FBC116]" />
                <h3 className="text-2xl md:text-[34px] font-black font-manrope leading-tight">Urgent Delivery</h3>
              </div>
              <p className="text-white/80 mb-8 leading-relaxed font-medium">
                Priority service within approximately 30 minutes. Because water can't wait.
              </p>
              
              <div className="bg-[#FCD116]  rounded-2xl p-5 mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center">
                  <Clock className="w-10 h-10 text-[#0A2540] stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-[#0A2540] leading-none mb-1.5">Estimated Arrival</span>
                  <div className="text-3xl font-black text-[#0A2540] tracking-tight leading-none">
                    {"~"} 30 Minutes
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {["Priority Dispatching", "Live Tanker Tracking", "Instant checkout", "Guaranteed fresh water"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="mt-auto w-full py-4 px-8 rounded-2xl bg-yellow-400 text-[#0A2540] font-black uppercase tracking-wider text-sm hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Order Urgent Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModes;
