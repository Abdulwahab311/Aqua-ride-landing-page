"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Target, HelpCircle, X } from "lucide-react";

const AboutUs = () => {
  const problems = [
    { title: "Zero Availability", desc: "Finding available tanker drivers quickly is a major struggle in traditional systems.", type: "problem" },
    { title: "Opaque Tracking", desc: "Limited transparency in pricing and inability to track tanker location in real-time.", type: "problem" },
    { title: "Smart Ecosystem", desc: "A tech-driven marketplace connecting supply and demand through smart matching.", type: "solution" },
    { title: "Secure Ops", desc: "Built-in transparency ensures every drop is accounted for and delivered safely.", type: "solution" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-[1750px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <Target className="w-3.5 h-3.5" />
              Our Mission
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase text-[#03045E] leading-[1.1]">
              MODERNIZING <br className="hidden md:block" />
              <span className="text-[#00B4D8]">WATER DELIVERY</span> <br className="hidden md:block" />
              FOR EVERYONE
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-500 font-medium mb-10 leading-relaxed max-w-xl">
              AquaRide is a digital-first platform designed to streamline water tanker services. We connect households and businesses with professional drivers in real-time.
            </motion.p>
            
            <motion.div variants={itemVariants} className="relative p-7 rounded-[35px] bg-slate-50/50 border border-slate-100 mb-12 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00B4D8] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <p className="text-base md:text-lg text-slate-600 font-bold leading-relaxed italic relative z-10">
                "Our goal is to make water delivery as simple, fast, and reliable as ordering a ride through your favorite app."
              </p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h4 variants={itemVariants} className="text-lg font-black text-[#03045E] uppercase tracking-tight flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <HelpCircle size={20} />
                </div>
                Problems We Solve
              </motion.h4>
              
              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problems.map((item, i) => (
                  <motion.div 
                    variants={itemVariants}
                    key={i} 
                    className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 ${item.type === 'solution' ? 'bg-primary/5 border-primary/20 shadow-primary/5 hover:border-primary/40' : 'bg-slate-50 border-slate-100 hover:border-red-500/20'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.type === 'solution' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
                        {item.type === 'solution' ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </div>
                    <div>
                      <span className="text-sm font-black text-slate-700 block mb-1 uppercase tracking-tight">{item.title}</span>
                      <span className="text-[12px] font-medium text-slate-500 leading-snug">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[50px] md:rounded-[70px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,118,254,0.2)] relative group">
                <div className="absolute inset-0 bg-slate-900">
                    <img 
                        src="/assets/tanker_showcase.png" 
                        alt="AquaRide Tanker" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 translate-y-4 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="glass-premium p-6 md:p-10 rounded-[35px] md:rounded-[45px] border-white/20 backdrop-blur-2xl">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="h-1 bg-[#00B4D8] mb-4 md:mb-6"
                        />
                        <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 tracking-tighter uppercase">DRIVING THE FUTURE</h3>
                        <p className="text-white/70 font-medium text-sm md:text-lg leading-relaxed">Empowering both customers and partners with a transparent, technology-driven marketplace.</p>
                    </div>
                </div>
            </div>
            
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00B4D8]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
