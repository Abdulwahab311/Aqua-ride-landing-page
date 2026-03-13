"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
  variant?: "white" | "gradient";
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = 48, variant = "gradient" }) => {
  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/logo.png"
        alt="AquaRide Logo"
        width={size}
        height={size}
        className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
        priority
      />
    </div>
  );
};

export default BrandLogo;
