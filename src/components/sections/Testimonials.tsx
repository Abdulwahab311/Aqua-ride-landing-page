"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "AquaRide saved us during the dry season. I scheduled a delivery, and the tanker arrived in 15 minutes. My children have clean water every day now. Very reliable!",
    name: "Abena Mensah",
    role: "Homeowner · Accra, East Legon",
    avatar: "RM",
    avatarBg: "bg-[#1FAFBE]",
  },
  {
    quote:
      "We use AquaRide for our restaurant weekly. The subscription plan is affordable and the water is always GWCL-certified. Business is running smooth thanks to them.",
    name: "Kweku Asante",
    role: "Restaurant Owner · Kumasi, Adum",
    avatar: "KA",
    avatarBg: "bg-[#006B3F]",
  },
  {
    quote:
      "Our school used to struggle with water supply. Now with AquaRide, our children always have clean water. The drivers are professional and punctual. God bless them.",
    name: "Sister Patricia",
    role: "School Administrator · Takoradi, Effia",
    avatar: "SP",
    avatarBg: "bg-[#FCD116]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6" style={{ background: 'linear-gradient(180.24deg, #01B7E7 -45.16%, #1DBCDC 87.25%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* AquaRide label - left aligned */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#FFFFFF] text-[22.17px] font-bold tracking-wide mb-10 font-manrope"
        >
          AquaRide
        </motion.p>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FCD116] text-[11px] font-black uppercase tracking-[0.25em] mb-4"
          >
            REAL PEOPLE. REAL STORIES.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[44px] font-black text-white font-manrope leading-tight"
          >
            Trusted Across Ghana <span className="text-2xl">🇬🇭</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm mt-3"
          >
            Serving Accra, Kumasi, Takoradi
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-[#FFFFFF3B] border border-[#FFFFFF1A] rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col backdrop-blur-sm cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 + i * 0.05, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-4 h-4 text-[#FCD116] fill-[#FCD116]" />
                  </motion.div>
                ))}
              </div>

              <p className="text-[#FFFFFF] text-[13px] leading-[28.56px] italic font-normal mb-8 flex-1 font-inter">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-black`}
                >
                  {t.avatar}
                </motion.div>
                <div>
                  <p className="text-[#0A2540] text-sm font-bold">{t.name}</p>
                  <p className="text-[#0A254099] text-[11px]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
