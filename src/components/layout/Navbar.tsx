"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "../ui/BrandLogo";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Who we serve", href: "#who-we-serve" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[1920px] mx-auto py-4 md:py-6 px-6 md:px-12 text-white transition-all duration-500 ${
        scrolled ? "bg-[#0A2540]/90 backdrop-blur-xl shadow-2xl py-3 md:py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <BrandLogo size={32} />
          <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md">AquaRide</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-[13px] text-[#FFFFFF] font-medium hover:text-white transition-colors drop-shadow-sm cursor-pointer relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FBBF24] transition-all duration-300 group-hover:w-full rounded-full" />
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+2330302000000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center gap-2 w-[120px] h-[40px] rounded-full border-1 border-[#FFFFFF] text-white text-[13px] hover:bg-white/10 transition-colors drop-shadow-sm"
          >
            <Phone className="w-[14px] h-[14px]" />
            <span>Call Now</span>
          </motion.a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#" className="hidden sm:flex items-center justify-center w-[120px] h-[40px] rounded-full bg-[#FBBF24] text-[#050F1A] text-[13px] font-bold hover:bg-[#FCD34D] transition-all shadow-lg hover:shadow-xl">
              Sign in
            </Link>
          </motion.div>

          {/* Hamburger Button - Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0A2540]/95 backdrop-blur-xl border-t border-white/10 px-8 py-6 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-white/90 text-base font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <a href="tel:+2330302000000" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white text-sm hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link href="#" className="text-center px-8 py-3 rounded-xl bg-[#FBBF24] text-[#050F1A] text-sm font-bold hover:bg-[#FCD34D] transition-all">
                Sign in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
