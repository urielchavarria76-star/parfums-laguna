import React, { useState } from 'react';
import { perfumes } from '../../data/mock';

const DECANT_IMAGE = "https://customer-assets.emergentagent.com/job_oudroma-fragrances/artifacts/gzrl04dy_Imagen%20de%20WhatsApp%202025-12-25%20a%20las%2003.22.15_58fe861f.jpg";

// Calculate decant price: (10% of bottle price + materials) × 1.5 margin
const calculateDecantPrice = (bottlePrice) => {
  if (!bottlePrice) return null;
  const perfumeCost = bottlePrice * 0.10; // 10ml = 10% of 100ml bottle
  const materialsCost = 10; // $8 bottle + $2 printing
  const margin = 1.5; // 50% profit margin
  return Math.round((perfumeCost + materialsCost) * margin);
};

const DecantGrid = ({ onAddToCart }) => {
  const [hoveredId, setHoveredId] = useState(null);

  // Filter perfumes that have a bottle price (can be made into decants)
  const decantProducts = perfumes
    .filter(p => p.bottlePrice)
    .map(p => ({
      ...p,
      decantPrice: p.decant10ml || calculateDecantPrice(p.bottlePrice),
      isDecant: true
    }));

  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Prueba antes de comprar</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Decants 10ml
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Atomizadores de 10ml con etiqueta personalizada. Perfectos para probar fragancias antes de invertir en la botella completa.
          </p>
        </div>

        {/* Decant Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {decantProducts.map((product) => (
            <div 
              key={`decant-${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] mb-5">
                <img
                  src={DECANT_IMAGE}
                  alt={`Decant ${product.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick Add Button */}
                <button
                  onClick={() => onAddToCart({
                    ...product,
                    id: `decant-${product.id}`,
                    name: `Decant 10ml - ${product.name}`,
                    bottlePrice: product.decantPrice,
                    image: DECANT_IMAGE
                  })}
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-black text-white text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Agregar
                </button>

                {/* 10ml Badge */}
                <div className="absolute top-3 right-3 bg-[#c9a962] text-black text-xs font-medium px-2 py-1">
                  10ml
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-white text-sm font-light mb-2 line-clamp-1 group-hover:text-[#c9a962] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#c9a962] text-sm">
                  ${product.decantPrice?.toLocaleString()} MXN
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecantGrid;
