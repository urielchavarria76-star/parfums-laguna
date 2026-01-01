"use client";
import React from "react";
import "./Beams.css";

const Beams = () => {
  return (
    <div className="beams-container">
      {/* Gradient background base */}
      <div className="beams-gradient-bg" />
      
      {/* Main beams */}
      <div className="beams-wrapper">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="beam"
            style={{
              left: `${i * 5 + Math.random() * 3}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${1 + Math.random() * 3}px`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />

      {/* Moving light streaks */}
      <div className="light-streak streak-1" />
      <div className="light-streak streak-2" />
      <div className="light-streak streak-3" />

      {/* Sparkle particles */}
      <div className="sparkles">
        {[...Array(40)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Beams;
