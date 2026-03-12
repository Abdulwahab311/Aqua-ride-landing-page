"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Clock, Truck, MapPin, Droplets } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

const Hero = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [drops, setDrops] = React.useState<{ id: number; left: string; delay: number; duration: number; size: number; layer: number }[]>([]);
  const [bubbles, setBubbles] = React.useState<{ id: number; left: string; delay: number; duration: number; size: number }[]>([]);
  const [isIslandExpanded, setIsIslandExpanded] = React.useState(false);
  const [wordIndex, setWordIndex] = React.useState(0);
  const words = ["Supply", "Delivery", "Service", "Ecosystem"];

  React.useEffect(() => {
    // Branded Aqua Drops (Falling)
    const newDrops = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 3 + Math.random() * 6,
      size: 12 + Math.random() * 8,
      layer: i % 3,
    }));
    setDrops(newDrops);

    // Rising Tank Bubbles (Atmosphere)
    const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      size: 4 + Math.random() * 6,
    }));
    setBubbles(newBubbles);

    const interval = setInterval(() => {
      setIsIslandExpanded(prev => !prev);
      setTimeout(() => setIsIslandExpanded(false), 4000);
    }, 8000);

    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Standardized at 3s for professional feel

    return () => {
      clearInterval(interval);
      clearInterval(wordTimer);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePos({ x: moveX, y: moveY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/water.MP4" type="video/mp4" />
        </video>
        {/* Subtle Overlay only if needed for text readability, but leaning towards clear video as requested */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Branded Aqua Drops (Parallax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            animate={{ 
              y: ["0vh", "110vh"],
              opacity: drop.layer === 0 ? [0, 0.6, 0] : [0, 0.3, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ 
              duration: drop.duration,
              repeat: Infinity,
              delay: drop.delay,
              ease: "linear"
            }}
            className={`absolute ${drop.layer === 0 ? 'z-20 scale-100' : drop.layer === 1 ? 'z-0 scale-75 blur-[1px]' : '-z-30 scale-50 blur-[3px] opacity-20'}`}
            style={{
              left: drop.left,
              color: '#00B4D8',
            }}
          >
            <Droplets size={drop.size} fill="currentColor" className="opacity-40" />
          </motion.div>
        ))}
      </div>

      {/* Rising Tank Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden block z-20">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ 
              y: "-10vh",
              opacity: [0, 0.3, 0],
              x: [0, 20, -20, 0]
            }}
            transition={{ 
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full border border-white/20 bg-white/5"
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-30 flex flex-col items-center text-center">
        {/* Content */}
        <motion.div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit mb-10 shadow-xl"
          >
            <div className="w-2.5 h-2.5 bg-[#00B4D8] animate-pulse rounded-full shadow-[0_0_10px_rgba(0,180,216,0.5)]" />
            <span className="text-white font-bold tracking-[0.15em] uppercase text-xs">
              Aqua Ride Delivery - Water Tanker Orchestration
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.1] sm:leading-[0.9] mb-8 uppercase flex flex-col text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6 gap-y-2"
            >
              <span className="text-[#00B4D8]">Aqua</span>
              <span 
                className="text-transparent relative tracking-tight"
                style={{ 
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.8)',
                  textShadow: '0 0 30px rgba(0, 180, 216, 0.4)'
                }}
              >
                Ride
              </span>
            </motion.div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6 gap-y-2 mt-2">
              <span 
                className="text-transparent relative tracking-tight"
                style={{ 
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.8)',
                }}
              >
                Water
              </span>
              <div className="relative inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIndex]}
                    initial={{ y: "40%", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-40%", opacity: 0, filter: "blur(10px)" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="text-[#00B4D8] whitespace-nowrap"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/70 max-w-2xl leading-relaxed mb-16 font-medium tracking-tight mx-auto"
          >
            AquaRide modernizes the water tanker ecosystem. We digitize water delivery by connecting customers with reliable tanker partners in real-time.
          </motion.p>

          {/* Mouse Scroller */}
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="group flex flex-col items-center gap-4 cursor-pointer mb-16"
          >
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] group-hover:text-[#00B4D8] transition-colors">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1.5 flex justify-center group-hover:border-[#00B4D8] transition-colors">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-white/40 rounded-full group-hover:bg-[#00B4D8] transition-colors"
              />
            </div>
          </motion.button>

          <div className="flex items-center justify-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white">500+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00B4D8]">Partners</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white">50k+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00B4D8]">Deliveries</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white">4.9/5</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00B4D8]">Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
// 