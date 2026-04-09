"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  Mail, 
  List, 
  MessageCircle, 
  Smartphone,
  MapPin
} from "lucide-react";

const features = [
  {
    title: "Dashboard",
    desc: "Your water usage & quick actions",
    icon: LayoutGrid,
    iconColor: "text-[#3B82F6]",
    bgColor: "bg-[#EFF6FF]",
    side: "left"
  },
  {
    title: "Manage Payments",
    desc: "Manage and record your payments history",
    icon: List,
    iconColor: "text-[#F59E0B]",
    bgColor: "bg-[#FFFBEB]",
    side: "left"
  },
  {
    title: "Urgent Delivery",
    desc: "Deliver priority water in 30 mins",
    icon: Mail,
    iconColor: "text-[#EF4444]",
    bgColor: "bg-[#FEF2F2]",
    side: "right"
  },
  {
    title: "Live Tracking",
    desc: "Track your order with Real-time GPS map",
    icon: MessageCircle,
    iconColor: "text-[#10B981]",
    bgColor: "bg-[#ECFDF5]",
    side: "right"
  }
];

const AppShowcase = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Full-Screen Background Water Splash */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none z-0">
        <Image 
          src="/assets/water-splash.png" 
          alt="Water background" 
          width={1800} 
          height={1000}
          className="w-full h-full object-contain scale-110"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#1FAFBE1F] text-[#0284C7] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-4"
          >
            <Smartphone className="w-3 h-3" />
            App Preview
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#1FAFBE] text-[11px] font-black uppercase tracking-[0.2em] mb-3"
          >
            MOBILE APP
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[44px] font-black text-[#0A2540] leading-tight max-w-2xl mx-auto font-manrope"
          >
            Designed for simplicity. <br />
            <span className="text-[#1FAFBE]">
              Built for everyday life in Ghana.
            </span>
          </motion.h2>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-24 mt-12 md:mt-16 max-w-7xl mx-auto px-0 md:px-4">
          
          {/* Left Features */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="space-y-10 lg:space-y-48 flex flex-col items-start">
              {features.filter(f => f.side === "left").map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-start text-left group w-fit"
                >
                  <div className={`${feature.bgColor} ${feature.iconColor} p-3.5 rounded-xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-[29.44px] font-black text-[#0A2540] mb-2 leading-none">{feature.title}</h3>
                  <p className="text-[#0A254099] text-[13px] font-medium leading-relaxed max-w-[220px]">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center Mobile App */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative flex justify-center z-20"
          >
            {/* Modern Phone Frame */}
            <div className="relative w-[280px] md:w-[320px] bg-[#0A2540] p-[7px] rounded-[52px] shadow-[0_45px_100px_-20px_rgba(0,107,174,0.35)] border-[1px] border-gray-400/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0A2540] rounded-b-2xl z-30"></div>
              <div className="relative overflow-hidden rounded-[45px] aspect-[9/19.5] bg-white ring-1 ring-black/5">
                <Image 
                  src="/assets/app-mockup.png" 
                  alt="App UI Screenshot" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="space-y-10 lg:space-y-48 flex flex-col items-start">
              {features.filter(f => f.side === "right").map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-start text-left group w-fit"
                >
                  <div className={`${feature.bgColor} ${feature.iconColor} p-3.5 rounded-xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-[29.44px] font-black text-[#0A2540] mb-2 leading-none">{feature.title}</h3>
                  <p className="text-[#0A254099] text-[13px] font-medium leading-relaxed max-w-[220px]">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
