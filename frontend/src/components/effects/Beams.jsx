"use client";
import React, { useMemo } from "react";
import "./Beams.css";

const Beams = () => {
  // Generate curved beam paths
  const beamPaths = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => {
      const startX = Math.random() * 100;
      const startY = -10;
      const endX = startX + (Math.random() - 0.5) * 40;
      const endY = 110;
      const cp1X = startX + (Math.random() - 0.5) * 30;
      const cp1Y = 30 + Math.random() * 20;
      const cp2X = endX + (Math.random() - 0.5) * 30;
      const cp2Y = 70 + Math.random() * 20;
      
      return {
        id: i,
        path: `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`,
        delay: i * 0.2,
        duration: 3 + Math.random() * 2,
        width: 0.8 + Math.random() * 1.2,
        colorIndex: i % 3,
      };
    });
  }, []);

  return (
    <div className="beams-container">
      {/* Ambient glow background */}
      <div className="ambient-glow" />
      
      {/* SVG Beams */}
      <svg
        className="beams-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold gradient */}
          <linearGradient id="beam-gold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="rgba(201, 169, 98, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 215, 140, 0.9)" />
            <stop offset="80%" stopColor="rgba(201, 169, 98, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          {/* Amber gradient */}
          <linearGradient id="beam-amber" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="rgba(245, 158, 11, 0.3)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.8)" />
            <stop offset="80%" stopColor="rgba(245, 158, 11, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          {/* White-gold gradient */}
          <linearGradient id="beam-white" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="50%" stopColor="rgba(255, 240, 200, 0.7)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="beam-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Render beam paths */}
        {beamPaths.map((beam) => {
          const gradients = ['beam-gold', 'beam-amber', 'beam-white'];
          return (
            <path
              key={beam.id}
              d={beam.path}
              stroke={`url(#${gradients[beam.colorIndex]})`}
              strokeWidth={beam.width}
              fill="none"
              filter="url(#beam-glow)"
              className="beam-path"
              style={{
                animationDelay: `${beam.delay}s`,
                animationDuration: `${beam.duration}s`,
              }}
            />
          );
        })}
      </svg>
      
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      {/* Sparkles */}
      <div className="sparkles-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Beams;
