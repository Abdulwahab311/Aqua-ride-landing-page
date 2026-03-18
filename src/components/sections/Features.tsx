"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Calendar, BarChart3, MapPin, Clock, Navigation } from "lucide-react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const customerFeatures = [
    { title: "Instant Tanker Ordering", desc: "Request a tanker in seconds by selecting your location and priority.", icon: Zap },
    { title: "Priority Delivery", desc: "Choose Standard or Urgent (30-min) service based on your needs.", icon: Clock },
    { title: "Live GPS Tracking", desc: "Watch your tanker move in real-time with dynamic ETA updates.", icon: MapPin },
    { title: "Consumption Dashboard", desc: "Track total liters delivered and manage your water usage history.", icon: BarChart3 }
  ];

  const driverFeatures = [
    { title: "Online/Offline Control", desc: "Full control over working hours. Toggle status to accept orders.", icon: Clock },
    { title: "Live Order Requests", desc: "Instant feed with pickup location, distance, price ($2.5 base fee), and priority.", icon: Zap },
    { title: "Smart Navigation", desc: "Built-in route guidance and automated phase-based management.", icon: Navigation },
    { title: "Earnings Analytics", desc: "Insights into daily performance, weekly goals, and total revenue.", icon: BarChart3 }
  ];

  return (
    <section id="features" className="py-12 relative overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase text-[#03045E]">
              DUAL <span className="text-[#00B4D8]">ECOSYSTEM</span>
            </h2>
            <p className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Dedicated experiences tailored for both customers and tanker partners.</p>
          </div>
          <div className="p-2 glass border-slate-200 rounded-2xl flex gap-2">
            <button 
              onClick={() => setActiveTab("customer")}
              className={`px-8 py-3 rounded-xl font-black text-sm transition-all cursor-pointer ${activeTab === "customer" ? "bg-primary text-white shadow-xl" : "text-foreground/40 hover:text-foreground"}`}
            >
              CUSTOMER APP
            </button>
            <button 
              onClick={() => setActiveTab("driver")}
              className={`px-8 py-3 rounded-xl font-black text-sm transition-all cursor-pointer ${activeTab === "driver" ? "bg-primary text-white shadow-xl" : "text-foreground/40 hover:text-foreground"}`}
            >
              DRIVER APP
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {(activeTab === "customer" ? customerFeatures : driverFeatures).map((f, i) => (
              <div key={i} className="p-8 glass rounded-[40px] hover:border-primary/50 transition-all border-slate-200 bg-white">
                <f.icon className="text-primary w-10 h-10 mb-8" />
                <h3 className="text-2xl font-black mb-4 text-foreground">{f.title}</h3>
                <p className="text-foreground/50 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;
