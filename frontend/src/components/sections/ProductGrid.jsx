import React, { useState, useEffect, useRef } from 'react';
import { perfumes } from '../../data/mock';

const tabs = [
  { id: 'vendidos', label: 'Todos' },
  { id: 'lanzamientos', label: 'Nuevos' },
  { id: 'hombre', label: 'Hombre' },
  { id: 'mujer', label: 'Mujer' }
];

const ProductGrid = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('vendidos');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getFilteredProducts = () => {
    switch(activeTab) {
      case 'hombre':
        return perfumes.filter(p => p.category === 'hombre');
      case 'mujer':
        return perfumes.filter(p => p.category === 'mujer');
      case 'lanzamientos':
        return perfumes.filter(p => [42, 43, 44, 45, 46, 37, 38, 39, 40, 41, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57].includes(p.id));
      default:
        return perfumes; // Show ALL perfumes
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="productos" ref={sectionRef} className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Nuestra Colección</p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Fragancias Exclusivas
          </h2>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm tracking-wider uppercase transition-all duration-300 pb-2 border-b-2 hover:scale-110 ${
                activeTab === tab.id
                  ? 'text-[#c9a962] border-[#c9a962]'
                  : 'text-gray-500 border-transparent hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAddToCart, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayPrice = product.bottlePrice || product.decant10ml;
  const originalPrice = product.originalPrice;
  const discount = originalPrice ? Math.round((1 - displayPrice / originalPrice) * 100) : 0;

  return (
    <div 
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={`relative aspect-square overflow-hidden bg-[#0a0a0a] mb-4 transition-all duration-500 ${isHovered ? 'shadow-2xl shadow-[#c9a962]/20' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-contain p-6 transition-all duration-700 ${isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'}`}
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 animate-pulse">
            -{discount}%
          </div>
        )}
        
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#c9a962]/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Quick Add Button */}
        <button
          onClick={() => onAddToCart(product)}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-white text-black text-xs tracking-wider uppercase font-medium transition-all duration-500 hover:bg-[#c9a962] hover:scale-105 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Agregar
        </button>
      </div>

      {/* Info */}
      <div className="text-center px-2">
        <h3 className={`text-white text-sm font-light mb-2 line-clamp-1 transition-all duration-300 ${isHovered ? 'text-[#c9a962]' : ''}`}>
          {product.name}
        </h3>
        
        {/* Description */}
        <p className={`text-gray-500 text-xs mb-3 line-clamp-2 transition-all duration-500 ${isHovered ? 'text-gray-400' : ''}`}>
          {product.description}
        </p>
        
        {/* Price Section with Discount */}
        <div className="space-y-1">
          {originalPrice && (
            <p className="text-gray-500 text-xs line-through">
              ${originalPrice.toLocaleString()} MXN
            </p>
          )}
          <p className={`text-[#c9a962] font-semibold transition-all duration-300 ${isHovered ? 'scale-110 text-lg' : 'text-base'}`}>
            ${displayPrice?.toLocaleString()} MXN
          </p>
          {discount > 0 && (
            <p className="text-green-500 text-xs font-medium animate-pulse">
              ¡Ahorra {discount}%!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;