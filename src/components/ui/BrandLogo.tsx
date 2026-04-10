"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/assets/Navlogo1.png"
        alt="AquaRide Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default BrandLogo;
