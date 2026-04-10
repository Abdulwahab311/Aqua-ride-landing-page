"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Zap,
  RefreshCcw
} from "lucide-react";

const services = [
  {
    title: "Standard Delivery",
    desc: "Reliable water delivery scheduled at your convenience.",
    icon: Clock,
    color: "text-white",
    bgColor: "bg-[#2DB1DB]",
    delay: 0.1
  },
  {
    title: "Urgent Delivery",
    desc: "Priority service within approximately 30 minutes for critical needs.",
    icon: Zap,
    color: "text-white",
    bgColor: "bg-[#CE1126]",
    delay: 0.2
  },
  {
    title: "Weekly Refills",
    desc: "Automated weekly water delivery for your household or business.",
    image: "/assets/Iconsj.png",
    color: "text-black",
    bgColor: "bg-[#FCD116]",
    delay: 0.3
  },
  {
    title: "Monthly Schedules",
    desc: "Set up your monthly water supply and never run out again.",
    icon: RefreshCcw,
    color: "text-white",
    bgColor: "bg-[#006B3D]",
    delay: 0.4
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const CoreServices = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1FAFBE] text-[11px] font-black uppercase tracking-[0.2em] mb-4"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[52px] font-black text-[#0A2540] mb-6 font-manrope"
          >
            DELIVERY OPTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A254099] max-w-2xl mx-auto font-medium leading-relaxed font-inter"
          >
            Choose the delivery option that best fits your needs. From urgent deliveries to subscription plans, we&apos;ve got you covered with GWCL-verified water.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1200px] mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-[32px] transition-shadow duration-300 group text-left flex flex-col items-start hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer w-full max-w-[284px] mx-auto h-[304px]"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                className={`${service.bgColor} ${service.color} p-4 rounded-xl mb-6 shadow-md`}
              >
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-6 h-6 object-contain" />
                ) : service.icon ? (
                  <service.icon className="w-6 h-6" />
                ) : null}
              </motion.div>
              <h3 className="text-lg font-black text-[#0A2540] mb-3 uppercase tracking-tight font-manrope">{service.title}</h3>
              <p className="text-[#0A254080] text-[13px] font-medium leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
