"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AppShowcase = () => {
  const features = [
    {
      title: "Real-time Confirmation",
      description: "Experience total reliability with verified delivery confirmation and driver details for every order.",
      image: "/assets/image1.png",
      accent: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Precision Driver Interface",
      description: "Our drivers use high-precision mapping to ensure urgent deliveries reach their destination on time.",
      image: "/assets/image2.png",
      accent: "from-blue-600/20 to-indigo-600/20"
    },
    {
      title: "Seamless ordering",
      description: "Pinpoint your location and connect with the nearest available tanker in just a few taps.",
      image: "/assets/image3.png",
      accent: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-12 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1750px] mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-xs uppercase tracking-[0.2em]"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Digital Ecosystem
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-[#03045E] mb-8 tracking-tighter uppercase leading-[0.95]"
          >
            The Future of <br className="hidden md:block" /> 
            <span className="text-[#00B4D8]">Water Orchestration</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Experience a seamless, digitally-driven flow that connects customers and drivers in one powerful platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 items-start px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              {/* Image Card */}
              <div className="relative mb-12 w-full max-w-[280px] aspect-[9/18.5] mx-auto">
                <motion.div 
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_50px_-10px_rgba(0,102,255,0.1)] group-hover:shadow-[0_40px_80px_-15px_rgba(0,102,255,0.15)] transition-all duration-700 relative border border-slate-100"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                </motion.div>
                
                {/* Visual Flair Elements */}
                <div className={`absolute -inset-12 bg-gradient-to-tr ${feature.accent} opacity-40 group-hover:opacity-60 blur-[80px] transition-opacity duration-700 -z-10`} />
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-4 border border-slate-100 z-20 group-hover:rotate-12 transition-transform duration-500"
                >
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${feature.accent.replace('/20', '')} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center font-black text-primary text-xl">
                    0{index + 1}
                  </div>
                </motion.div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-2xl font-black text-[#03045E] mb-4 uppercase tracking-tight flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-[#00B4D8]" />
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-medium leading-[1.7] text-lg pl-13">
                  {index === 0 ? "Experience total reliability with verified delivery confirmation and driver details for every order, starting at just $2.5." : feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
