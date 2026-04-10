"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

import { motion } from "framer-motion";
import BrandLogo from "../ui/BrandLogo";

const Footer = () => {
  return (
    <footer className="relative bg-[#050F1A] text-slate-300 font-sans overflow-hidden">
      {/* Top Colorful Lines */}
      <div className="flex h-3 w-full">
        <div className="flex-1 bg-[#E53935]" />
        <div className="flex-1 bg-[#FBBF24]" />
        <div className="flex-1 bg-[#4CAF50]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
        >
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <BrandLogo size={36} />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight text-white">
                  Aqua<span className="text-[#00B4D8]">Ride</span>
                </span>
                <span className="text-[#FCD116] text-[12px] leading-[12px] italic mt-1 tracking-[0px]" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
                  Water Tanker Delivery
                </span>
              </div>
            </div>

            <p className="text-[#FFFFFF80] text-sm mb-8 leading-loose max-w-[340px]">
              Safe, GWCL-verified water delivered to homes, schools, and businesses across Ghana. Proudly serving Ghana 🇬🇭
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[#FFFFFF80]">+233 (0) 302 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[#FFFFFF80]">hello@aquaride.com.gh</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[#FFFFFF80]">Airport City, Accra, Ghana</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block"></div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
            <div className="flex flex-col">
              <h4 className="font-semibold text-white mb-6 text-[15px]">Services</h4>
              <div className="flex flex-col gap-4 text-sm text-[#FFFFFF80]">
                <a href="#delivery-modes" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200">Urgent Delivery</a>
                <a href="#delivery-modes" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200">Standard Delivery</a>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-white mb-6 text-[15px]">Company</h4>
              <div className="flex flex-col gap-4 text-sm text-[#FFFFFF80]">
                <a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200">How It Works</a>
                <a href="#who-we-serve" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200">Who we serve</a>
              </div>
            </div>

            <div className="flex flex-col mt-8 md:mt-0">
              <h4 className="font-semibold text-white mb-6 text-[15px]">Support</h4>
              <div className="flex flex-col gap-4 text-sm text-[#FFFFFF80]">
                <a href="#download" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200">Download App</a>
                <a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200">Contact Us</a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-slate-800/60 my-10" />

        {/* Serving Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center"
        >
          <span className="text-slate-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-6">Serving</span>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {["📍 Accra", "📍 Kumasi", "📍 Takoradi", "📍 Tema", "📍 Cape Coast"].map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex items-center gap-2 bg-[#0C1520] border border-[#00B4D8]/20 rounded-full px-5 py-2.5 hover:border-[#00B4D8]/50 transition-colors cursor-default"
              >
                <span className="text-sm font-medium text-[#00B4D8]">{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="w-full h-px bg-slate-800/60 my-10" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500/80 text-[13px] text-center md:text-left">
            © 2026 AquaRide Ghana Ltd. All rights reserved. • Proudly serving Ghana 🇬🇭
          </p>

          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-[16px] bg-[#09121D] border border-white/10 flex items-center justify-center text-[#FFFFFF80] hover:text-white hover:bg-[#0D1A27] transition-all"
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
