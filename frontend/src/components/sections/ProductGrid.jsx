import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { perfumes } from '../../data/mock';

const tabs = [
  { id: 'vendidos', label: 'Más Vendidos' },
  { id: 'lanzamientos', label: 'Lanzamientos' },
  { id: 'hombre', label: 'Hombre' },
  { id: 'mujer', label: 'Mujer' }
];

const ProductGrid = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('vendidos');

  const getFilteredProducts = () => {
    switch(activeTab) {
      case 'hombre':
        return perfumes.filter(p => p.category === 'hombre');
      case 'mujer':
        return perfumes.filter(p => p.category === 'mujer');
      case 'lanzamientos':
        // Show the newest products (Jean Lowe Immortel, Sceptre Malachite, Jean Lowe Matière, etc)
        return perfumes.filter(p => [15, 16, 17, 4, 6].includes(p.id));
      default:
        return perfumes.slice(0, 12);
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          LO MÁS <span className="text-[#c9a962]">DESTACADO</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#c9a962] text-black'
                  : 'bg-[#1a1a1a] text-white hover:bg-[#333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="/catalogo"
            className="inline-flex items-center px-8 py-3 border-2 border-[#c9a962] text-[#c9a962] font-semibold rounded hover:bg-[#c9a962] hover:text-black transition-all"
          >
            Ver todo
          </a>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const displayPrice = product.bottlePrice || product.decant10ml;
  const originalPrice = product.originalPrice || (displayPrice * 1.6);

  return (
    <div 
      className="group relative bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#c9a962]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 bg-[#c9a962] text-black text-xs font-bold rounded-full">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Add Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onAddToCart(product)}
            className="px-6 py-3 bg-[#c9a962] text-black font-semibold rounded-lg hover:bg-[#d4b872] transition-colors flex items-center gap-2"
          >
            <ShoppingCart size={18} />
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
            <span className="text-white text-sm">{product.rating}</span>
            <span className="text-gray-500 text-xs">/ 5.0</span>
            <span className="text-gray-500 text-xs">({product.reviews})</span>
          </div>
        )}

        {/* Name */}
        <h3 className="text-white font-medium text-sm mb-3 line-clamp-2 min-h-[40px] group-hover:text-[#c9a962] transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-[#c9a962] font-bold text-lg">
            ${displayPrice?.toLocaleString()} MXN
          </span>
          {originalPrice && (
            <span className="text-gray-500 text-sm line-through">
              ${Math.round(originalPrice).toLocaleString()} MXN
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;