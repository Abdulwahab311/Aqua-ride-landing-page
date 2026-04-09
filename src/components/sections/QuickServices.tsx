"use client";

import React from "react";
import { Zap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Urgent Delivery",
    subtitle: "Within ~30 minutes",
    icon: Zap,
    tag: "FAST",
    emoji: "🔥",
    bgColor: "bg-[#CE112614]", // 25% opacity red
    tagColor: "bg-[#CE1126]", // Soft red
    iconBg: "bg-[#CE1126]", // Red
    textColor: "text-[#1F2937]",
    borderColor: "border-[#CE112614]",
    hoverShadow: "hover:shadow-red-100",
  },
  {
    title: "Schedule Delivery",
    subtitle: "Pick your date & time",
    icon: Calendar,
    tag: "POPULAR",
    emoji: "📅",
    bgColor: "bg-[#1FAFBE14]", // 25% opacity blue
    tagColor: "bg-[#1FAFBE]", // Soft blue
    iconBg: "bg-[#1FAFBE]", // Blue
    textColor: "text-[#1F2937]",
    borderColor: "border-[#1FAFBE14]",
    hoverShadow: "hover:shadow-blue-100",
  },
  {
    title: "Track Order",
    subtitle: "Live GPS updates",
    icon: MapPin,
    tag: "LIVE",
    emoji: "📍",
    bgColor: "bg-[#006B3F14]", // 25% opacity green
    tagColor: "bg-[#006B3F]", // Soft green
    iconBg: "bg-[#006B3F]", // Green
    textColor: "text-[#1F2937]",
    borderColor: "border-[#006B3F14]",
    hoverShadow: "hover:shadow-green-100",
  },
];

const QuickServices = () => {
  return (
    <section className="relative bg-[#F7FBFD] py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${service.bgColor} ${service.borderColor} border-[1.5px] rounded-[16px] p-6 md:p-8 flex items-center gap-4 md:gap-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden group transition-all duration-300 ${service.hoverShadow} hover:shadow-2xl cursor-pointer`}
            >
              {/* Icon Container */}
              <div className={`${service.iconBg} p-3 md:p-4 rounded-[16px] text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon 
                  className="w-6 h-6 md:w-7 md:h-7" 
                  fill={index === 0 ? "currentColor" : "none"} 
                  stroke="currentColor" 
                  strokeWidth={2} 
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0 pr-20 md:pr-24">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-bold ${service.textColor} text-base md:text-[16px] text-[#0A2540] tracking-tight leading-tight whitespace-nowrap`}>
                    <span className="mr-1.5 md:mr-2 text-lg md:text-xl">{service.emoji}</span>
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#0A254099] text-[15.2px] md:text-[15.2px] font-medium leading-normal opacity-80 truncate">
                  {service.subtitle}
                </p>
              </div>

              {/* Tag */}
              <div className={`absolute top-3 right-3 md:top-5 md:right-5 ${service.tagColor} text-white text-[8px] md:text-[10px] font-black px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm tracking-wider uppercase whitespace-nowrap z-10`}>
                {service.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
