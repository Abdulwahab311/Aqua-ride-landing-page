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
      className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden bg-white"
    >
      {/* Branded Aqua Drops (Parallax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
              color: 'var(--color-primary)',
            }}
          >
            <Droplets size={drop.size} fill="currentColor" className="opacity-40" />
          </motion.div>
        ))}
      </div>

      {/* Rising Tank Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden block">
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
            className="absolute rounded-full border border-primary/20 bg-primary/5"
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1750px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 xl:gap-20 items-center">
        {/* Left Content */}
        <motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 px-6 py-2.5 bg-[#F0F9FF] border border-[#E0F2FE] rounded-full w-fit mb-10 shadow-sm"
          >
            <div className="w-2.5 h-2.5 bg-[#00B4D8] animate-pulse rounded-full shadow-[0_0_10px_rgba(0,180,216,0.5)]" />
            <span className="text-[#00B4D8] font-bold tracking-[0.15em] uppercase text-xs">
              Aqua Ride Delivery - Water Tanker Orchestration
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] leading-[1.1] sm:leading-[0.9] mb-8 uppercase flex flex-col text-[#03045E]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-2"
            >
              <span className="text-[#00B4D8]">Aqua</span>
              <span 
                className="text-white relative tracking-tight"
                style={{ 
                  WebkitTextStroke: '1.5px #E2E8F0',
                  textShadow: '0 0 30px rgba(226, 232, 240, 0.4), 0 0 10px rgba(0, 180, 216, 0.1)'
                }}
              >
                Ride
              </span>
            </motion.div>
            <div className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-2 mt-2">
              <span 
                className="text-white relative tracking-tight"
                style={{ 
                  WebkitTextStroke: '1.5px #E2E8F0',
                  textShadow: '0 0 30px rgba(226, 232, 240, 0.4), 0 0 10px rgba(0, 180, 216, 0.1)'
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
                      ease: [0.16, 1, 0.3, 1] // Premium easing
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
            className="text-xl text-foreground/50 max-w-xl leading-relaxed mb-12 font-medium tracking-tight"
          >
            AquaRide modernizes the water tanker ecosystem. We digitize water delivery by connecting customers with reliable tanker partners in real-time, making water access as simple as ordering a ride.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              animate={{
                x: mousePos.x * 0.1,
                y: mousePos.y * 0.1,
              }}
              className="group relative w-full sm:w-auto px-10 py-5 bg-[#00B4D8] text-white rounded-2xl font-black overflow-hidden active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(0,180,216,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(0,180,216,0.6)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 lowercase first-letter:uppercase">
                book a tanker now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </motion.button>
            <button className="w-full sm:w-auto px-10 py-5 glass border-slate-200/60 text-foreground hover:bg-slate-50 rounded-2xl font-black flex items-center justify-center gap-3 transition-all active:scale-95 shadow-sm hover:shadow-md cursor-pointer">
              <Play className="w-5 h-5 fill-[#00B4D8] text-[#00B4D8]" /> WATCH DEMO
            </button>
          </div>

          {/* New App Section */}
          <div className="mb-16">
            <p className="text-sm font-bold text-foreground/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-slate-200"></span>
              Experience the full ecosystem on mobile
            </p>
            <div className="flex flex-row items-center gap-2 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide no-scrollbar">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-1 sm:flex-none items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group min-w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00B4D8]" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.36 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-foreground/40 leading-none uppercase tracking-tighter">Download on the</span>
                  <span className="text-sm font-black text-foreground leading-tight">App Store</span>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-1 sm:flex-none items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group min-w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00B4D8]" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.65,16.21C19.11,16.48 19.5,16.48 19.9,16.21L21.3,15.4C21.7,15.17 22,14.65 22,14.07C22,13.5 21.7,13 21.3,12.75L16.81,10.12M14.69,12.87L3.92,2.38C4.15,2.27 4.41,2.21 4.69,2.21C5.07,2.21 5.44,2.32 5.77,2.5L14.69,7.74M14.69,16.26L5.77,21.5C5.44,21.68 5.07,21.79 4.69,21.79C4.41,21.79 4.15,21.73 3.92,21.62L14.69,11.13V12.87Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-foreground/40 leading-none uppercase tracking-tighter">Get it on</span>
                  <span className="text-sm font-black text-foreground leading-tight">Google Play</span>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:flex items-center gap-4 sm:gap-8 mobile-stats-fix">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-[#03045E]">500+</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#00B4D8]/60">Partners</span>
            </div>
            <div className="w-px h-8 sm:h-10 bg-slate-200 justify-self-center sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-[#03045E]">50k+</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#00B4D8]/60">Deliveries</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div className="flex flex-col col-start-3 row-start-1">
              <span className="text-2xl sm:text-3xl font-black text-[#03045E]">4.9/5</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#00B4D8]/60">Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - 3D Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateX: mousePos.y * 2,
            rotateY: -mousePos.x * 2,
          }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            rotateX: { type: "spring", stiffness: 100, damping: 30 },
            rotateY: { type: "spring", stiffness: 100, damping: 30 }
          }}
          className="relative block mt-20 lg:mt-0 perspective-1000 preserve-3d scale-90 sm:scale-100"
        >
          {/* 3D Phone Frame */}
          <div className="relative z-10 w-[320px] h-[650px] mx-auto bg-slate-900 rounded-[3.5rem] p-2 dark:shadow-[0_0_50px_rgba(0,0,0,0.3)] border-[8px] border-slate-800 flex items-center justify-center overflow-hidden group/phone shadow-2xl">
            {/* modern Dynamic Island Notch with expanding animation */}
            <motion.div 
              animate={{ 
                width: isIslandExpanded ? 220 : 110,
                height: isIslandExpanded ? 35 : 28 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-full z-40 flex items-center justify-center overflow-hidden px-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isIslandExpanded ? 1 : 0 }}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Live Order • Tanker #4202</span>
              </motion.div>
            </motion.div>
            
            {/* Dynamic Glass Reflection Sweep */}
            <motion.div
              animate={{ x: mousePos.x * 30 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-40 pointer-events-none"
              style={{ width: '200%', left: '-50%' }}
            />

            {/* App Interface Container */}
            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative flex flex-col group-hover/phone:scale-[0.99] transition-transform duration-700">
              
              {/* Header */}
              <div className="pt-8 pb-4 px-6 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-md z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <BrandLogo size={24} />
                  </div>
                  <span className="font-bold tracking-tight text-sm uppercase text-[#00B4D8]">Aqua Ride</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden" />
              </div>

              {/* Map/Main Content */}
              <div className="flex-1 relative bg-slate-50 overflow-hidden">
                {/* Stylized Grid Background (Map Placeholder) */}
                <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(#0061E3 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />
                
                {/* Animated Route Line */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M 60 400 L 120 350 L 180 300 L 250 250"
                    fill="transparent"
                    stroke="#00B4D8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                {/* Pulsing Destination Pin */}
                <motion.div 
                   className="absolute top-[240px] left-[240px] z-20"
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <MapPin className="text-secondary w-6 h-6 -translate-y-1/2" />
                </motion.div>

                {/* Moving Tanker Icon */}
                <motion.div
                  initial={{ x: 50, y: 390 }}
                  animate={{ 
                    x: [50, 110, 170, 240], 
                    y: [390, 340, 290, 240] 
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-20"
                >
                  <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-primary/20">
                    <Truck className="text-primary w-5 h-5" />
                  </div>
                </motion.div>

                {/* Tracking Overlay */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] z-20">
                  <div className="bg-white/90 backdrop-blur-xl border border-slate-100 p-4 rounded-2xl shadow-sm text-center">
                    <div className="text-[8px] font-black uppercase tracking-widest text-foreground/30 mb-1">Track Your Delivery</div>
                    <div className="text-xs font-black text-foreground">Tanker #4202 • On the Way</div>
                  </div>
                </div>
              </div>

              {/* Bottom Control */}
              <div className="p-6 bg-white border-t border-slate-100 z-20">
                <div className="bg-[#00B4D8] h-12 rounded-xl flex items-center justify-center text-white font-black text-xs uppercase tracking-widest">
                  Contact Driver
                </div>
              </div>
            </div>
          </div>

          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 blur-[120px] rounded-full -z-10" />
        </motion.div>
      </div>

      {/* Liquid Wave Base */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] h-32 -z-10 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[200%] h-full"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="var(--color-primary)"
            animate={{
              x: ["-50%", "0%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="opacity-20"
          />
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="var(--color-primary)"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="opacity-10"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
