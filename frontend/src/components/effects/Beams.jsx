"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Beams = () => {
  // Generate beam paths with curves
  const beams = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() - 0.5) * 30;
      const controlX1 = startX + (Math.random() - 0.5) * 20;
      const controlX2 = endX + (Math.random() - 0.5) * 20;
      
      return {
        id: i,
        d: `M ${startX} -5 C ${controlX1} 25, ${controlX2} 75, ${endX} 105`,
        width: 0.3 + Math.random() * 1.5,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.5,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Beams container */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Multiple gold gradients */}
          <linearGradient id="goldBeam1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(201, 169, 98, 0)" />
            <stop offset="10%" stopColor="rgba(201, 169, 98, 0.1)" />
            <stop offset="40%" stopColor="rgba(201, 169, 98, 0.6)" />
            <stop offset="50%" stopColor="rgba(255, 215, 140, 0.9)" />
            <stop offset="60%" stopColor="rgba(201, 169, 98, 0.6)" />
            <stop offset="90%" stopColor="rgba(201, 169, 98, 0.1)" />
            <stop offset="100%" stopColor="rgba(201, 169, 98, 0)" />
          </linearGradient>

          <linearGradient id="goldBeam2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0)" />
            <stop offset="20%" stopColor="rgba(245, 158, 11, 0.2)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.7)" />
            <stop offset="80%" stopColor="rgba(245, 158, 11, 0.2)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
          </linearGradient>

          <linearGradient id="goldBeam3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="30%" stopColor="rgba(255, 230, 180, 0.15)" />
            <stop offset="50%" stopColor="rgba(255, 230, 180, 0.5)" />
            <stop offset="70%" stopColor="rgba(255, 230, 180, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Render beams */}
        {beams.map((beam, index) => (
          <motion.path
            key={beam.id}
            d={beam.d}
            stroke={`url(#goldBeam${(index % 3) + 1})`}
            strokeWidth={beam.width}
            fill="none"
            filter="url(#glow)"
            initial={{ 
              pathLength: 0,
              opacity: 0,
            }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, beam.opacity, beam.opacity, 0],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 1],
            }}
          />
        ))}
      </svg>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              background: `radial-gradient(circle, rgba(201, 169, 98, ${0.15 - i * 0.02}) 0%, transparent 70%)`,
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-[#c9a962] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px 2px rgba(201, 169, 98, 0.6)',
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              y: [0, -50],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Beams;
