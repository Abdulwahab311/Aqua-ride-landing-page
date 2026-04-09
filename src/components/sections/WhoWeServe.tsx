"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sectors = [
  {
    title: "Homes",
    emoji: "🏠",
    desc: "Clean water for your family every day",
    image: "/assets/serve-family.jpg",
    color: "#1FAFBE",
    tagBg: "bg-[#1FAFBE]/90"
  },
  {
    title: "Schools",
    emoji: "🏫",
    desc: "Safe water for children that learn",
    image: "/assets/serve-hospital.jpg",
    color: "#006B3D",
    tagBg: "bg-[#006B3D]/90"
  },
  {
    title: "Hospitals",
    emoji: "🏥",
    desc: "Reliable supply for critical care",
    image: "/assets/serve-hospital.jpg",
    color: "#CE1126",
    tagBg: "bg-[#CE1126]/90"
  },
  {
    title: "Businesses",
    emoji: "🏢",
    desc: "Bulk delivery for offices & shops",
    image: "/assets/serve-commercial.jpg",
    color: "#FCD116",
    tagBg: "bg-[#FCD116]/90"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="py-16 md:py-24 px-4 md:px-6 bg-[#F0F9FB] overflow-hidden text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#1FAFBE] text-[11px] font-black uppercase tracking-[0.2em] mb-4"
          >
            WHO WE SERVE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-[52px] font-black text-[#0A2540] mb-6 font-manrope"
          >
            Water For Everyone in Ghana
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A254099] max-w-2xl mx-auto font-medium leading-relaxed"
          >
            From families in Accra to hospitals in Kumasi — AquaRide serves all.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-white transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] cursor-pointer"
              style={{ borderBottom: `4px solid ${sector.color}1A` }}
            >
              {/* Image Top Half */}
              <div className="relative h-[140px] md:h-[200px] w-full overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Sector-Specific Bottom Gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 opacity-70"
                  style={{ background: `linear-gradient(to top, ${sector.color} 0%, transparent 100%)` }}
                />

                {/* Sector Tag on Image */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 shadow-lg">
                  <span className="text-base">{sector.emoji}</span>
                  <span className="text-white font-black text-sm tracking-tight">{sector.title}</span>
                </div>
              </div>

              {/* Text Bottom Half */}
              <div className="p-4 pb-5 md:p-8 md:pb-10 text-left bg-white relative">
                {/* Colored Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-0 left-0 h-1"
                  style={{ backgroundColor: sector.color }}
                />
                <p className="text-[#0A2540BF] text-[15px] font-medium leading-[1.6]">
                  {sector.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServe;
