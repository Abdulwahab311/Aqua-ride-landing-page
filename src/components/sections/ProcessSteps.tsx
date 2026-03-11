"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Clock, Truck } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    { 
      title: "Place Your Order", 
      desc: "Select location and choose between Normal or 30-min Urgent delivery priority.", 
      icon: MapPin, 
      color: "from-blue-400 to-primary" 
    },
    { 
      title: "Driver Matching", 
      desc: "System detects nearby drivers and assigns your order to the first to accept.", 
      icon: Zap, 
      color: "from-primary to-secondary" 
    },
    { 
      title: "Live Tracking", 
      desc: "Track location, route, and dynamic ETA in real-time as the tanker moves.", 
      icon: Clock, 
      color: "from-secondary to-accent" 
    },
    { 
      title: "Delivery Phases", 
      desc: "Monitor lifecycle stages: Accept, En Route, Arrived, and Complete.", 
      icon: Truck, 
      color: "from-accent to-blue-600" 
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-[1750px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-[#03045E]">
            A SMART <span className="text-[#00B4D8]">ECOSYSTEM</span>
          </h2>
          <p className="text-[#00B4D8] font-bold tracking-[0.2em] uppercase text-xs italic">"Water delivery redefined by Aqua Ride."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 glass border-slate-200 rounded-[40px] relative group hover:border-primary transition-colors"
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                <step.icon className="text-white w-10 h-10" />
              </div>
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Phase 0{i + 1}</div>
              <h3 className="text-2xl font-black mb-4 text-foreground">{step.title}</h3>
              <p className="text-foreground/50 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
