"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Beams = ({ beamCount = 12 }) => {
  const beams = Array.from({ length: beamCount }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    duration: 8 + Math.random() * 8,
    delay: Math.random() * 4,
    repeatDelay: Math.random() * 2,
    width: 1 + Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      
      {/* SVG Beams */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold gradient for beams */}
          <linearGradient id="beamGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(201, 169, 98, 0)" />
            <stop offset="30%" stopColor="rgba(201, 169, 98, 0.4)" />
            <stop offset="50%" stopColor="rgba(201, 169, 98, 0.8)" />
            <stop offset="70%" stopColor="rgba(201, 169, 98, 0.4)" />
            <stop offset="100%" stopColor="rgba(201, 169, 98, 0)" />
          </linearGradient>
          
          {/* Warm gold gradient */}
          <linearGradient id="beamGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 215, 140, 0)" />
            <stop offset="30%" stopColor="rgba(255, 215, 140, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 215, 140, 0.6)" />
            <stop offset="70%" stopColor="rgba(255, 215, 140, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 215, 140, 0)" />
          </linearGradient>

          {/* Amber gradient */}
          <linearGradient id="beamGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0)" />
            <stop offset="30%" stopColor="rgba(245, 158, 11, 0.25)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.5)" />
            <stop offset="70%" stopColor="rgba(245, 158, 11, 0.25)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="beamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {beams.map((beam) => (
          <motion.line
            key={beam.id}
            x1={`${beam.initialX}%`}
            y1="-10%"
            x2={`${beam.initialX}%`}
            y2="110%"
            stroke={`url(#beamGradient${(beam.id % 3) + 1})`}
            strokeWidth={beam.width}
            filter="url(#beamGlow)"
            initial={{ 
              opacity: 0,
              pathLength: 0,
            }}
            animate={{ 
              opacity: [0, 0.8, 0.8, 0],
              pathLength: [0, 1],
              x1: [`${beam.initialX}%`, `${beam.initialX + (Math.random() - 0.5) * 20}%`],
              x2: [`${beam.initialX}%`, `${beam.initialX + (Math.random() - 0.5) * 10}%`],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              repeatDelay: beam.repeatDelay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#c9a962] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Beams;
