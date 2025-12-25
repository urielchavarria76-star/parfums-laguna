import React, { useState } from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { perfumes } from '../../data/mock';

const tabs = [
  { id: 'vendidos', label: 'Todos' },
  { id: 'lanzamientos', label: 'Nuevos' },
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
        return perfumes.filter(p => [28, 29, 30, 31, 22, 23, 24, 25].includes(p.id));
      default:
        return perfumes.slice(0, 12);
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Nuestra Colección</p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Fragancias Exclusivas
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm tracking-wider uppercase transition-all pb-2 border-b-2 ${
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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayPrice = product.bottlePrice || product.decant10ml;

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#0a0a0a] mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={() => onAddToCart(product)}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-white text-black text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Agregar
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-white text-sm font-light mb-2 line-clamp-1 group-hover:text-[#c9a962] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#c9a962] text-sm">
          ${displayPrice?.toLocaleString()} MXN
        </p>
      </div>
    </div>
  );
};

export default ProductGrid;