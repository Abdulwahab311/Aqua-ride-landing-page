"use client";

import React from "react";
import { Linkedin, Facebook, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

const Footer = () => {
  return (
    <footer className="py-24 px-6 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="max-w-[1750px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
        {/* Brand Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <BrandLogo size={36} />
            <span className="text-2xl font-bold tracking-tight text-[#03045E]">Aqua Ride</span>
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
              { icon: Youtube, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-[#00B4D8]/10 hover:border-[#00B4D8] group transition-all duration-300 shadow-sm"
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-[#00B4D8] transition-colors" />
              </a>
            ))}
            <a 
              href="#" 
              className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-[#00B4D8]/10 hover:border-[#00B4D8] group transition-all duration-300 shadow-sm"
            >
               <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#00B4D8] transition-colors">
                  <path d="M12.525.02c1.31-.032 2.617-.023 3.914.03 1.394.07 2.783.204 4.155.452.124.022.25.05.378.08.188.044.382.112.564.208.21.11.394.262.543.454.148.192.247.414.288.65.04.234.033.472.003.708-.03.236-.092.464-.182.68-.09.214-.212.414-.356.598-.144.184-.312.345-.51.482-.194.137-.412.243-.646.315-.234.072-.48.106-.728.1-.248-.006-.49-.05-.72-.132-.23-.082-.442-.204-.63-.36-.188-.156-.345-.347-.463-.56-.118-.213-.193-.45-.224-.698-.03-.248-.023-.5.01-.746.033-.246.1-.48.2-.705.1-.225.234-.43.398-.613.164-.183.356-.33.568-.435.212-.105.442-.164.678-.172.236-.008.47.026.69.1l.144-.067c-1.285-.23-2.585-.357-3.89-.384-1.31-.027-2.617-.02-3.92.02v.005c-1.31.027-2.617.023-3.92.012-1.394-.01-2.787-.03-4.18-.06v-.025z"/>
               </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1750px] mx-auto mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[11px] font-bold uppercase tracking-[0.1em]">
        <span>© 2026 Aqua Ride. All Rights Reserved.</span>
        <div className="flex gap-10">
          <a href="#" className="hover:text-[#00B4D8] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#00B4D8] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#00B4D8] transition-colors">For Investors</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
