"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";

// Hero loads immediately -- above the fold
import Hero from "@/components/sections/Hero";

// Skeleton loaders for dynamic sections
import {
  SkeletonSection,
  SkeletonHeroBlock,
  SkeletonBanner,
} from "@/components/ui/Skeleton";

// Below-the-fold sections -- dynamically imported for performance
const QuickServices = dynamic(
  () => import("@/components/sections/QuickServices"),
  { loading: () => <SkeletonSection cards={3} /> }
);

const GetStarted = dynamic(
  () => import("@/components/sections/GetStarted"),
  { loading: () => <SkeletonHeroBlock /> }
);

const AppShowcase = dynamic(
  () => import("@/components/sections/AppShowcase"),
  { ssr: false, loading: () => <SkeletonHeroBlock /> }
);

const DeliveryModes = dynamic(
  () => import("@/components/sections/DeliveryModes"),
  { ssr: false, loading: () => <SkeletonSection cards={2} /> }
);

const CoreServices = dynamic(
  () => import("@/components/sections/CoreServices"),
  { loading: () => <SkeletonSection cards={3} /> }
);

const WhoWeServe = dynamic(
  () => import("@/components/sections/WhoWeServe"),
  { loading: () => <SkeletonSection cards={4} /> }
);

const CallToAction = dynamic(
  () => import("@/components/sections/CallToAction"),
  { loading: () => <SkeletonBanner /> }
);

const TechnologyApps = dynamic(
  () => import("@/components/sections/TechnologyApps"),
  { ssr: false, loading: () => <SkeletonHeroBlock /> }
);

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false, loading: () => <SkeletonSection cards={3} /> }
);

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
    "@type": "LocalBusiness",
    "@id": "https://aquaride.com",
    "name": "AquaRide",
    "url": "https://aquaride.com",
    "logo": "https://aquaride.com/brand/logo.png",
    "image": "https://aquaride.com/brand/og-image.png",
    "description": "Ghana's leading on-demand water tanker delivery platform. Order GWCL certified clean water in Accra, Kumasi & Takoradi with real-time tracking and scheduled refills.",
    "telephone": "+233-000-000-000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressRegion": "Greater Accra",
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.6037,
      "longitude": -0.1870
    },
    "areaServed": [
      { "@type": "City", "name": "Accra" },
      { "@type": "City", "name": "Kumasi" },
      { "@type": "City", "name": "Takoradi" }
    ],
    "serviceType": [
      "On-Demand Water Delivery",
      "Bulk Water Delivery",
      "Emergency Water Delivery",
      "Scheduled Water Refills"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [],
    "potentialAction": {
      "@type": "OrderAction",
      "target": "https://aquaride.com",
      "name": "Order Water Delivery"
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
              <Hero />
              <QuickServices />
              <GetStarted />
              <AppShowcase />
              <DeliveryModes />
              <CoreServices />
              <WhoWeServe />
              <CallToAction />
              <TechnologyApps />
              <Testimonials />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
