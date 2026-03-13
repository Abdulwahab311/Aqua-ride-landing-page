"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";
import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Features", id: "features" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-and-conditions" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.filter(item => item.id).map(item => document.getElementById(item.id!));
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
      if (window.scrollY < 100) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${(isScrolled || mobileMenuOpen || !isHomePage) ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200" : "py-6 bg-transparent"}`}>
      <div className="max-w-[1750px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 cursor-pointer group">
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-8 h-8 relative flex items-center justify-center transition-transform group-hover:scale-110"
          >
            <BrandLogo size={32} />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-xl font-bold tracking-tight text-[#00B4D8]"
          >
            Aqua Ride
          </motion.span>
        </Link>

        <div className={`hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled || !isHomePage ? "text-slate-500" : "text-white"}`}>
          {navItems.map((item) => (
            <Link
              key={item.id || item.name}
              href={item.id ? `/#${item.id}` : item.href!}
              className={`relative py-2 transition-all duration-300 hover:text-[#00B4D8] ${activeSection === item.id ? "text-[#00B4D8]" : ""} ${!isScrolled ? "drop-shadow-md" : ""}`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B4D8] rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            className={`lg:hidden cursor-pointer transition-colors duration-500 ${isScrolled || mobileMenuOpen || !isHomePage ? "text-slate-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu className={!isScrolled && isHomePage ? "drop-shadow-md" : ""} />}
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
            <div className="p-8 flex flex-col gap-8 text-center font-black uppercase tracking-[0.2em] text-xs">
              {navItems.map((item) => (
                <Link
                  key={item.id || item.name}
                  href={item.id ? `/#${item.id}` : item.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${activeSection === item.id ? "text-[#00B4D8]" : "text-slate-600"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
