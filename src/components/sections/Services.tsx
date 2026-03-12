"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, Calendar, Navigation, MapPin, Search } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Delivery Options",
      icon: Clock,
      items: [
        { name: "Normal Delivery", desc: "Reliable water delivery scheduled at your convenience." },
        { name: "Urgent Delivery", desc: "Priority service within approximately 30 minutes for critical needs.", highlight: true }
      ]
    },
    {
      title: "Subscription Plans",
      icon: Calendar,
      items: [
        { name: "Weekly Refills", desc: "Automated weekly water delivery for your household or business." },
        { name: "Monthly Schedules", desc: "Set up your recurring water supply and never run out again." }
      ]
    },
    {
      title: "Real-Time Tracking",
      icon: Navigation,
      items: [
        { name: "Live GPS Map", desc: "Watch the tanker move toward your location step-by-step." },
        { name: "Dynamic ETA", desc: "Estimated arrival times that adjust based on traffic and speed." }
      ]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white relative">
      <div className="max-w-[1750px] mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase text-[#03045E] leading-[1.1]">
              COMPLETE <span className="text-[#00B4D8]">SERVICE</span> SUITE
            </h2>
            <p className="text-[#00B4D8] font-bold tracking-[0.2em] uppercase text-xs italic">
              "Effortless water management at your fingertips."
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#03045E]">
                <Search size={20} />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#00B4D8] flex items-center justify-center text-white shadow-lg">
                <MapPin size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-[24px] bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <category.icon className="text-primary group-hover:text-white transition-colors duration-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#03045E] uppercase tracking-tight">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-8 rounded-[35px] border transition-all duration-500 hover:shadow-xl ${item.highlight ? 'bg-primary text-white border-primary shadow-[0_20px_40px_-10px_rgba(0,102,255,0.4)]' : 'bg-slate-50 border-slate-100 hover:border-primary/30'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className={`text-xl font-black tracking-tight uppercase ${item.highlight ? 'text-white' : 'text-[#03045E]'}`}>{item.name}</h4>
                      {item.highlight && <Zap size={20} className="text-yellow-400 fill-yellow-400" />}
                    </div>
                    <p className={`font-medium leading-relaxed ${item.highlight ? 'text-white/80' : 'text-foreground/50'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Callout */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 p-10 md:p-16 rounded-[50px] bg-[#00B4D8] text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,180,216,0.3)] group"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full -mr-40 -mt-20" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl lg:w-1/2">
                    <span className="text-white/80 font-black tracking-widest uppercase text-[10px] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">Innovation First</span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mt-6 uppercase leading-[1.1]">Dual Application <br /> Architecture</h3>
                    <p className="text-white/90 mt-6 font-medium text-lg leading-relaxed">
                        AquaRide operates through dedicated applications for both Customers and Drivers, synchronized by a shared backend infrastructure for zero-delay operations.
                    </p>
                    
                    {/* Feature Dots */}
                    <div className="flex gap-6 mt-10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-wider opacity-60">Customer Portal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse delay-700" />
                            <span className="text-[10px] font-black uppercase tracking-wider opacity-60">Driver Interface</span>
                        </div>
                    </div>
                </div>

                {/* Impressive Sync Visualization */}
                <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full max-w-[450px] aspect-square"
                    >
                        <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75 animate-pulse" />
                        <img 
                            src="/assets/dual_app_visual.png" 
                            alt="Dual App Sync" 
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-1000"
                        />
                        
                        {/* Decorative Sync Rings */}
                        <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-[spin_12s_linear_infinite] scale-[1.1]" />
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] scale-[1.2]" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
