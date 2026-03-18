"use client";

import React from "react";
import { Linkedin, Facebook, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";

const Footer = () => {
  return (
    <footer className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="max-w-[1750px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
        {/* Brand Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <BrandLogo size={32} />
            <span className="text-xl font-bold tracking-tight text-[#00B4D8]">AquaRide</span>
          </div>
          <p className="text-slate-500 max-w-xs font-medium leading-relaxed">
            Making water delivery work for everyone.
          </p>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#00B4D8]">Contact</h4>
          <div className="space-y-6">
            <a href="mailto:hello@aquaride.com" className="flex items-center gap-4 group text-slate-600 hover:text-[#00B4D8] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00B4D8]/10 transition-colors">
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-[#00B4D8] transition-colors" />
              </div>
              <span className="font-medium">hello@aquaride.com</span>
            </a>
            <div className="flex items-start gap-4 text-slate-600">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-slate-400" />
              </div>
              <span className="font-medium leading-relaxed pt-2">
                Accra, Ghana
              </span>
            </div>
          </div>
        </div>

        {/* News Column */}
        <div className="flex flex-col">
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#00B4D8]">Latest News</h4>
          <p className="text-slate-500 font-medium text-xs mb-6 uppercase tracking-wider">Stay updated with our progress.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-6 pr-14 text-sm font-medium focus:outline-none focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/5 transition-all outline-none"
            />
            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#00B4D8] text-white rounded-xl flex items-center justify-center hover:bg-[#03045E] transition-colors shadow-lg shadow-[#00B4D8]/20">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Follow Us Column */}
        <div className="flex flex-col">
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#00B4D8]">Follow Us</h4>
          <div className="flex gap-4 items-center">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Instagram, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-[#00B4D8]/10 hover:border-[#00B4D8] group transition-all duration-300 shadow-sm"
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-[#00B4D8] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1750px] mx-auto px-6 mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[11px] font-bold uppercase tracking-[0.1em]">
        <span>© 2026 AquaRide. All Rights Reserved.</span>
        <div className="flex gap-10">
          <Link href="/privacy-policy" className="hover:text-[#00B4D8] transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-[#00B4D8] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
