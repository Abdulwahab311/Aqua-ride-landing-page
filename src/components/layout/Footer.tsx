"use client";

import React from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
    { icon: Facebook, label: "Facebook" },
  ];

  return (
    <footer className="py-24 px-6 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="max-w-[1750px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <BrandLogo size={32} />
            <span className="text-2xl font-bold tracking-tight text-[#00B4D8]">Aqua Ride</span>
          </div>
          <p className="text-foreground/40 max-w-sm font-medium leading-relaxed mb-10">
            Modernizing water delivery through technology. Making every drop count with real-time orchestration.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a 
                key={label} 
                href="#" 
                className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-[#00B4D8]/10 hover:border-[#00B4D8] group transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span className="sr-only">{label}</span>
                <Icon className="w-5 h-5 text-foreground/20 group-hover:text-[#00B4D8] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-sm mb-8 text-foreground">Platform</h4>
          <div className="flex flex-col gap-4 text-foreground/40 font-bold text-sm">
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Business Model</a>
            <a href="#" className="hover:text-primary transition-colors">Driver Portal</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-sm mb-8 text-foreground">Company</h4>
          <div className="flex flex-col gap-4 text-foreground/40 font-bold text-sm">
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-primary transition-colors">Mission</a>
            <a href="#" className="hover:text-primary transition-colors">Careers</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1750px] mx-auto mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em]">
        <span>© 2026 Aqua Ride Ghana. All Rights Reserved.</span>
        <div className="flex gap-8">
          <span>Kuala Lumpur, MY</span>
          <span>Dubai, UAE</span>
          <span>London, UK</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
