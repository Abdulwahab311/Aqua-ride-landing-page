"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200" : "py-6 bg-transparent"}`}>
      <div className="max-w-[1750px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-8 h-8 relative flex items-center justify-center"
          >
            <BrandLogo size={32} />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-2xl font-bold tracking-tight text-[#00B4D8]"
          >
            Aqua Ride
          </motion.span>
        </div>

        <div className={`hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest transition-colors duration-500 ${isScrolled ? "text-foreground/50" : "text-white"}`}>
          {["About Us", "Services", "How it Works", "Features", "Business Portal"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
              className={`hover:text-[#00B4D8] transition-all duration-300 cursor-pointer ${!isScrolled ? "drop-shadow-[0_2px_4px_rgba(0,0,0,1)] hover:scale-105" : ""}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            className={`lg:hidden cursor-pointer transition-colors duration-500 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu className={!isScrolled ? "drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" : ""} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white backdrop-blur-2xl border-b border-slate-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6 text-center font-bold uppercase tracking-widest text-sm">
              {["About Us", "Services", "How it Works", "Features", "Business Portal"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/70 hover:text-primary cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
