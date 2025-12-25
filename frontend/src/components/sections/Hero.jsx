import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-black">
      {/* Main Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&q=80"
          alt="Parfums TRC Banner"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-lg">
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Colección 2025</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                El Arte del
                <span className="block font-semibold">Perfume</span>
              </h2>
              <p className="text-gray-400 text-base mb-10 leading-relaxed">
                Perfumes Árabes y de Diseñador. Fragancias exclusivas al mejor precio.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/catalogo"
                  className="inline-flex items-center px-8 py-4 bg-[#c9a962] text-black text-sm font-medium tracking-wider uppercase hover:bg-[#d4b872] transition-all"
                >
                  Explorar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;