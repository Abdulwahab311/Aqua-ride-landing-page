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

        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-foreground/50">
          {["How it Works", "Features", "Business Portal"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary transition-colors duration-300 cursor-pointer">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-8 py-3 bg-primary text-white text-sm font-black rounded-full hover:bg-primary/90 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer">
            GET THE APP
          </button>
          <button 
            className="lg:hidden text-foreground cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
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
              {["How it Works", "Features", "Business Portal"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/70 hover:text-primary cursor-pointer"
                >
                  {item}
                </a>
              ))}
              <button className="w-full py-4 bg-primary text-white rounded-2xl cursor-pointer">
                GET THE APP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
