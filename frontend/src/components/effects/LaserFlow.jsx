"use client";
import React, { useEffect, useRef } from "react";
import "./LaserFlow.css";

const LaserFlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create a particle/laser line
    const createParticle = () => {
      const y = Math.random() * canvas.height;
      return {
        x: -200,
        y: y,
        length: 100 + Math.random() * 200,
        speed: 2 + Math.random() * 4,
        width: 1 + Math.random() * 2,
        hue: 35 + Math.random() * 20, // Gold tones (35-55)
        opacity: 0.3 + Math.random() * 0.4,
        curve: (Math.random() - 0.5) * 0.5,
      };
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 30; i++) {
        const p = createParticle();
        p.x = Math.random() * (canvas.width + 400) - 200;
        particles.push(p);
      }
    };

    // Draw a single laser particle
    const drawParticle = (p) => {
      const gradient = ctx.createLinearGradient(
        p.x,
        p.y,
        p.x + p.length,
        p.y
      );
      
      gradient.addColorStop(0, `hsla(${p.hue}, 70%, 60%, 0)`);
      gradient.addColorStop(0.1, `hsla(${p.hue}, 70%, 60%, ${p.opacity * 0.5})`);
      gradient.addColorStop(0.3, `hsla(${p.hue}, 80%, 70%, ${p.opacity})`);
      gradient.addColorStop(0.5, `hsla(${p.hue}, 90%, 80%, ${p.opacity})`);
      gradient.addColorStop(0.7, `hsla(${p.hue}, 80%, 70%, ${p.opacity})`);
      gradient.addColorStop(0.9, `hsla(${p.hue}, 70%, 60%, ${p.opacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${p.hue}, 70%, 60%, 0)`);

      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      
      // Draw curved line
      const midX = p.x + p.length / 2;
      const curveY = p.y + p.curve * 50;
      ctx.quadraticCurveTo(midX, curveY, p.x + p.length, p.y);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = p.width;
      ctx.lineCap = "round";
      ctx.stroke();

      // Add glow effect
      ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, 0.5)`;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        // Update position
        p.x += p.speed;
        p.y += Math.sin(p.x * 0.01) * 0.3; // Slight wave motion

        // Reset particle when it goes off screen
        if (p.x > canvas.width + 200) {
          particles[index] = createParticle();
        }

        drawParticle(p);
      });

      // Occasionally add new particles
      if (Math.random() < 0.03 && particles.length < 40) {
        particles.push(createParticle());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="laser-flow-container">
      <canvas ref={canvasRef} className="laser-flow-canvas" />
      
      {/* Ambient glow */}
      <div className="laser-flow-glow glow-1" />
      <div className="laser-flow-glow glow-2" />
      <div className="laser-flow-glow glow-3" />
    </div>
  );
};

export default LaserFlow;
