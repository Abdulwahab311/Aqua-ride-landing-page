"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Struggle to find available tankers quickly",
    "Uncertain and estimated delivery times",
    "Limited transparency in pricing",
    "No way to track real-time location"
  ];

  return (
    <section id="problem" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-[1750px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-[#03045E] uppercase flex items-center justify-center gap-4">
            WHY <span className="text-[#00B4D8]">AQUADRIDE</span>?
          </h2>
          <p className="text-[#00B4D8] font-bold tracking-[0.2em] uppercase text-xs">Traditional water booking is broken. We're here to fix it.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="p-12 rounded-[40px] bg-red-500/[0.03] border border-red-500/10"
          >
            <h3 className="text-2xl font-black mb-8 text-red-500 uppercase tracking-widest">The Traditional Challenges</h3>
            <div className="space-y-6">
              {[
                "Struggle to find available tanker drivers quickly",
                "Uncertain and difficult delivery time estimates",
                "Limited transparency in pricing and delivery status",
                "Unable to track tanker location in real-time"
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <X className="text-red-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-lg font-medium text-foreground/60">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="p-12 rounded-[40px] bg-primary/[0.03] border border-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-mesh opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 text-primary uppercase tracking-widest">The AquaRide Way</h3>
              <div className="space-y-6">
                {[
                  "Tech-driven marketplace connecting supply & demand",
                  "Automated matching with nearby drivers",
                  "Real-time GPS tracking for full transparency",
                  "Organized ecosystem for Household & Business needs"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground">{s}</p>
                  </div>
                ))}
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
