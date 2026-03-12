"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Droplets } from "lucide-react";
import Script from "next/script";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";

// Section components
import Hero from "@/components/sections/Hero";
import AppShowcase from "@/components/sections/AppShowcase";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Features from "@/components/sections/Features";
import BusinessPortal from "@/components/sections/BusinessModel";
import DownloadApp from "@/components/sections/DownloadApp";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AquaRide",
    "url": "https://aquaride.com",
    "logo": "https://aquaride.com/logo.png",
    "description": "On-demand water tanker delivery platform Connecting customers and drivers in real-time.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aquaride.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="bg-mesh min-h-screen">
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <section id="home">
                <Hero />
              </section>
              <AppShowcase />
              <section id="about">
                <AboutUs />
              </section>
              <section id="services">
                <Services />
              </section>
              <ProblemSolution />
              <section id="process">
                <ProcessSteps />
              </section>
              <section id="features">
                <Features />
              </section>
              <BusinessPortal />
              <DownloadApp />
              <section id="faq">
                <FAQ />
              </section>
              <section id="contact">
                <Contact />
              </section>

              {/* Call to Action Section */}
              <section className="py-32 px-6">
                <div className="max-w-[1750px] mx-auto">
                  <motion.div 
                    whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                    className="relative p-10 md:p-20 rounded-[40px] md:rounded-[60px] bg-primary overflow-hidden text-center shadow-[0_40px_80px_-20px_rgba(0,102,255,0.6)]"
                  >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[100px] rounded-full -mr-40 -mt-20" />
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-8 uppercase leading-[1.1]">READY TO STREAMLINE <br className="hidden md:block" /> YOUR WATER SUPPLY?</h2>
                      <p className="text-white/80 max-w-xl mx-auto font-medium text-lg mb-12">
                        Join thousands of households and businesses already using AquaRide for fast, reliable, and transparent water delivery.
                      </p>
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mt-4">
                        {/* Interactive QR Portal */}
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="relative group cursor-none"
                        >
                          <div className="absolute -inset-8 bg-white/10 blur-3xl rounded-full animate-pulse group-hover:bg-[#00B4D8]/20 transition-colors" />
                          <div className="relative glass-premium p-8 rounded-[40px] shadow-2xl border-white/20">
                            <div className="w-48 h-48 bg-white rounded-3xl p-4 flex items-center justify-center relative overflow-hidden">
                              {/* QR Code Placeholder (Stylized) */}
                              <div className="w-full h-full border-4 border-[#03045E]/10 rounded-xl relative">
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-2">
                                  {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className={`rounded-sm ${Math.random() > 0.4 ? 'bg-[#03045E]' : 'bg-transparent'}`} />
                                  ))}
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#00B4D8] rounded-lg flex items-center justify-center">
                                  <div className="w-6 h-6 bg-[#00B4D8] rounded-sm animate-pulse" />
                                </div>
                              </div>
                            </div>
                            <div className="mt-6">
                              <span className="text-white font-black tracking-[0.2em] text-xs uppercase animate-pulse">Scan to Order</span>
                            </div>
                          </div>
                          
                          {/* Pulsing Ring */}
                          <div className="absolute -inset-2 border-2 border-[#0076FE]/30 rounded-[50px] animate-[ping_3s_linear_infinite]" />
                        </motion.div>

                        {/* 3D-esque Preview Card */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="relative pt-6 md:pt-10"
                        >
                          <div className="glass-premium p-6 rounded-[35px] border-white/20 shadow-2xl w-[250px] md:w-[280px] md:-rotate-6 md:group-hover:rotate-0 transition-transform duration-500 scale-90 md:scale-100">
                            <div className="bg-white/90 rounded-2xl p-4 border border-white/50 mb-4 shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#00B4D8] rounded-xl flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                                </div>
                                <div>
                                  <div className="text-[10px] font-black text-[#03045E] uppercase tracking-tighter">Live Alert</div>
                                  <div className="text-xs font-bold text-[#03045E]/60">Tanker #4202 nearby</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 relative h-24 bg-white/10 rounded-2xl overflow-hidden border border-white/10 group/card shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                              <motion.div 
                                initial={{ height: "15%" }}
                                animate={{ height: ["15%", "80%", "15%"] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#00B4D8] to-cyan-300 opacity-40"
                              />
                              
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                <motion.div
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <Droplets className="text-white/60 drop-shadow-md" size={24} />
                                </motion.div>
                                <div className="text-[10px] font-black tracking-[0.25em] text-white uppercase text-center drop-shadow-md">Smart Refill <br /> Syncing</div>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse" />
                                  <span className="text-[9px] font-black text-white/80 uppercase">Purity 99.9%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Floating Bubbles around the card */}
                          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-white/20 animate-bounce" />
                          <div className="absolute bottom-10 left-0 w-2 h-2 rounded-full bg-white/40 animate-pulse delay-700" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
