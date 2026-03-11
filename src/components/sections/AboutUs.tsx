"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, HelpCircle } from "lucide-react";

const AboutUs = () => {
  const problems = [
    "Finding available tanker drivers quickly is a struggle.",
    "Uncertain and difficult to estimate delivery times.",
    "Limited transparency in pricing and delivery status.",
    "Inability to track tanker location in real-time.",
    "Drivers waste time looking for customers manually."
  ];

  return (
    <section id="about-us" className="py-32 px-6 relative overflow-hidden bg-slate-50">
      <div className="max-w-[1750px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black tracking-widest uppercase mb-6">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase text-[#03045E] leading-[1.1]">
              MODERNIZING <span className="text-[#00B4D8]">WATER DELIVERY</span> FOR EVERYONE
            </h2>
            <p className="text-lg text-foreground/70 font-medium mb-8 leading-relaxed">
              AquaRide is a modern on-demand water tanker delivery platform. We are designed to streamline and digitize water tanker services by connecting customers who need water with professional tanker drivers in real-time.
            </p>
            <p className="text-lg text-foreground/70 font-medium mb-12 leading-relaxed italic border-l-4 border-[#00B4D8] pl-6">
              "Our goal is to make water delivery as simple, fast, and reliable as ordering a ride through your favorite ride-hailing app."
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-black text-[#03045E] uppercase tracking-tight mb-6 flex items-center gap-3">
                <HelpCircle className="text-[#00B4D8]" />
                Problems We Solve
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="text-[#00B4D8] w-5 h-5 mt-1 shrink-0" />
                    <span className="text-sm font-bold text-foreground/60">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] bg-gradient-to-br from-[#0076FE] to-[#00B4D8] overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="glass-premium p-10 rounded-[40px] text-center border-white/30">
                        <h3 className="text-3xl font-black text-white mb-4">DRIVING THE FUTURE</h3>
                        <p className="text-white/80 font-medium">Empowering both customers and partners with a transparent, technology-driven marketplace.</p>
                    </div>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00B4D8]/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#03045E]/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
