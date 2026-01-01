import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black">
      {/* Main Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        
        {/* Animated Background Effects - Only in Hero */}
        <div className="hero-animation-container">
          {/* Shimmer light effect */}
          <div className="shimmer-light"></div>
          
          {/* Floating particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                }}
              />
            ))}
          </div>
          
          {/* Glowing orbs */}
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
          <div className="hero-orb orb-3"></div>
          
          {/* Light rays from top */}
          <div className="light-rays">
            <div className="ray ray-1"></div>
            <div className="ray ray-2"></div>
            <div className="ray ray-3"></div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&q=80"
          alt="Parfums TRC Banner"
          className="w-full h-full object-cover opacity-50 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-lg">
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Colección 2025
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                El Arte del
                <span className="block font-semibold text-gradient-animated">Perfume</span>
              </h2>
              <p className="text-gray-400 text-base mb-10 leading-relaxed animate-fadeInUp opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                Perfumes Árabes y de Diseñador. Fragancias exclusivas al mejor precio.
              </p>
              <div className="flex flex-wrap gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                <button
                  onClick={scrollToProducts}
                  className="btn-animated inline-flex items-center px-8 py-4 bg-[#c9a962] text-black text-sm font-medium tracking-wider uppercase hover:bg-[#d4b872] transition-all animate-glow"
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#c9a962] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
