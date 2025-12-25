import React from 'react';

const Hero = () => {
  return (
    <section className="relative">
      {/* Main Banner */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img
          src="https://oudroma.com/cdn/shop/files/pagina1_1_3600x.jpg?v=1764983122"
          alt="OudRoma Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Descubre el
                <span className="text-[#c9a962]"> Arte </span>
                del Perfume
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Perfumes Árabes, Diseñador y Nicho al mejor precio. Envíos a todo México.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/catalogo"
                  className="inline-flex items-center px-8 py-3 bg-[#c9a962] text-black font-semibold rounded hover:bg-[#d4b872] transition-all hover:scale-105"
                >
                  Ver Catálogo
                </a>
                <a
                  href="/mas-vendidos"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-all"
                >
                  Más Vendidos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Banner - Promo */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src="https://oudroma.com/cdn/shop/files/banner_escalonado_dek_3600x.jpg?v=1763588998"
          alt="Promociones OudRoma"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;