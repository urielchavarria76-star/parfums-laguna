import React, { useEffect, useRef } from 'react';

const AnimatedBeams = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let beams = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBeam = () => {
      return {
        x: Math.random() * canvas.width,
        y: -100,
        width: Math.random() * 3 + 1,
        height: Math.random() * 200 + 100,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 60 + 30, // Gold tones (30-90)
      };
    };

    const initBeams = () => {
      beams = [];
      for (let i = 0; i < 15; i++) {
        const beam = createBeam();
        beam.y = Math.random() * canvas.height;
        beams.push(beam);
      }
    };

    const drawBeam = (beam) => {
      const gradient = ctx.createLinearGradient(
        beam.x,
        beam.y,
        beam.x,
        beam.y + beam.height
      );
      gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 60%, 0)`);
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 70%, 60%, ${beam.opacity})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 60%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(beam.x, beam.y, beam.width, beam.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam, index) => {
        beam.y += beam.speed;

        if (beam.y > canvas.height + 100) {
          beams[index] = createBeam();
        }

        drawBeam(beam);
      });

      // Add occasional new beam
      if (Math.random() < 0.02 && beams.length < 20) {
        beams.push(createBeam());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initBeams();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initBeams();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default AnimatedBeams;
