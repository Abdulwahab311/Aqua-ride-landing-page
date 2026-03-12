"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageSquare, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00B4D8]/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 text-[#00B4D8] text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <MessageSquare className="w-3.5 h-3.5" />
              Get in Touch
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-[#03045E] tracking-tighter uppercase leading-[0.9] mb-10">
              Let's Start a <br />
              <span className="text-[#00B4D8]">Conversation</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg">
              Have questions about our water delivery ecosystem? Our team is here to help you flow smoothly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#00B4D8] transition-colors">
                  <Phone className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-[#03045E] mb-2">Call Us</h4>
                <p className="text-slate-500 font-medium">+233 24 000 0000</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#00B4D8] transition-colors">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-[#03045E] mb-2">Email Us</h4>
                <p className="text-slate-500 font-medium">hello@aquaride.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8] to-primary opacity-5 blur-[100px] -z-10" />
            <div className="bg-white/80 backdrop-blur-2xl p-10 md:p-14 rounded-[50px] border border-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B4D8]/10 rounded-bl-[100px]" />
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#00B4D8] ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/5 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#00B4D8] ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/5 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#00B4D8] ml-2">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/5 transition-all outline-none resize-none"
                  />
                </div>
                <button className="w-full py-5 bg-[#03045E] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#00B4D8] transition-all duration-500 shadow-xl shadow-[#03045E]/20 group">
                  SEND MESSAGE
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
