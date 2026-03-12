"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, TrendingUp, Users, ShieldCheck } from "lucide-react";

const BusinessPortal = () => {
  const models = [
    {
      title: "Marketplace Orchestration",
      desc: "We don't own tankers. We digitalize the ecosystem by connecting supply and demand through smart matching.",
      icon: LayoutGrid,
    },
    {
      title: "Revenue Streams",
      desc: "Commission-based earnings from every delivery, plus priority service surcharges and subscriptions.",
      icon: TrendingUp,
    },
    {
      title: "Partner Growth",
      desc: "Drivers reduce idle time and find customers faster, increasing their daily productivity and income.",
      icon: Users,
    },
    {
      title: "Secure Operations",
      desc: "Built-in transparency with tracked phases ensure every drop is accounted for and delivered safely.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="business-portal" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-[1750px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-[0.9] text-[#03045E]">
                Orchestrating <br />
                <span className="text-[#00B4D8] tracking-[-0.05em]">Essential Utilities</span>
              </h2>
              <p className="text-lg text-[#03045E]/60 max-w-xl leading-relaxed mb-12 font-medium">
                AquaRide operates as a digital intermediary, transforming fragmented water delivery into a structured, high-efficiency marketplace.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-foreground/70 font-bold uppercase tracking-widest text-sm">
                  <div className="w-10 h-[1px] bg-primary" />
                  Our Mission
                </div>
                <p className="text-foreground/40 max-w-lg italic">
                  "To simplify and modernize water delivery services by making them efficient, transparent, and accessible, transforming traditional services into a smart digital marketplace."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {models.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-slate-200 rounded-[40px] shadow-sm hover:shadow-xl hover:border-primary transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-3 text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPortal;
