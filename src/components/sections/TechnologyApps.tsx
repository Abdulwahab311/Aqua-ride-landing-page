"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Truck, TabletSmartphone, Navigation2, BarChart3, CheckSquare, Route, Bell, Wifi, ArrowLeft, ArrowRight } from "lucide-react";

const TechnologyApps = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-white">
      {/* Top cyan accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#1FAFBE] origin-left"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1FAFBE] text-[11px] font-black uppercase tracking-[0.25em] mb-4 w-[127px] h-[20px] mx-auto"
          >
            TECHNOLOGY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[44px] font-black text-[#0A2540] font-manrope leading-tight"
          >
            Built for Speed.{" "}
            <span className="text-[#1FAFBE]">Designed for Ghana.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A254099] text-sm md:text-base mt-4 max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Two powerful apps. One seamless ecosystem. Built for Ghanaian networks and everyday users.
          </motion.p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center justify-items-center">
          {/* Customer App Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            whileHover={{ y: -5 }}
            className="bg-[#E8F8FB] rounded-[20px] md:rounded-[24px] p-6 md:p-8 border border-[#D0F0F6] transition-shadow duration-300 hover:shadow-xl w-[325px] h-[359px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="bg-[#1FAFBE] w-11 h-11 rounded-xl flex items-center justify-center mb-6"
            >
              <Smartphone className="w-5 h-5 text-white" />
            </motion.div>
            <h3 className="text-[#0A2540] text-lg font-black mb-2 font-manrope">Customer App</h3>
            <p className="text-[#0A254099] text-sm mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Everything a Ghanaian household or business needs to stay hydrated.
            </p>

            <ul className="space-y-4">
              {[
                { icon: TabletSmartphone, text: "Order water instantly" },
                { icon: Navigation2, text: "Track delivery live" },
                { icon: BarChart3, text: "Manage usage history" },
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1FAFBE]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#1FAFBE]" />
                  </div>
                  <span className="text-[#0A2540] text-sm font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connected Center Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="flex flex-col items-center justify-center py-4"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(31,175,190,0.3)", "0 0 0 15px rgba(31,175,190,0)", "0 0 0 0 rgba(31,175,190,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-[#0A2540] shadow-xl flex items-center justify-center mb-3"
            >
              <Wifi className="w-7 h-7 text-[#1FAFBE]" />
            </motion.div>
            <span className="text-[#0A2540] text-xs font-bold tracking-wide">Connected</span>
            <span className="text-[#0A254066] text-[10px] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>Real-time sync</span>

            {/* Arrows with gradient line */}
            <div className="flex items-center gap-3 mt-2">
              <motion.div animate={{ x: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowLeft className="w-5 h-5 text-[#1FAFBE]" />
              </motion.div>
              <div className="w-24 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #1FAFBE 0%, #FCD116 100%)' }} />
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5 text-[#FCD116]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Driver App Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            whileHover={{ y: -5 }}
            className="rounded-[20px] md:rounded-[24px] p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl w-[325px] h-[359px]"
            style={{ background: "linear-gradient(135deg, #1DABBA 0%, #1DBCDC 60%, #1FAFBE 100%)" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="bg-[#FCD116] w-11 h-11 rounded-xl flex items-center justify-center mb-6"
            >
              <Truck className="w-5 h-5 text-[#0A2540]" />
            </motion.div>
            <h3 className="text-white text-lg font-black mb-2 font-manrope">Driver App</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Empowering drivers across Accra, Kumasi & Takoradi to earn more, deliver faster.
            </p>

            <ul className="space-y-4">
              {[
                { icon: CheckSquare, text: "Accept jobs nearby" },
                { icon: Route, text: "Navigate smart routes" },
                { icon: Bell, text: "Update delivery status" },
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FCD116] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#0A2540]" />
                  </div>
                  <span className="text-white text-sm font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyApps;
