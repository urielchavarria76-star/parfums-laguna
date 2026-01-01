import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const Header = ({ cartCount, onCartClick, onMenuClick }) => {
  return (
    <header className="bg-black sticky top-0 z-50 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-[#c9a962] transition-all duration-300 hover:scale-110"
            onClick={onMenuClick}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center group">
            <h1 className="text-xl font-light text-white tracking-wider transition-all duration-300 group-hover:scale-105">
              <span className="text-[#c9a962] transition-all duration-300 group-hover:text-[#d4b872]">Parfums</span> TRC
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="/" className="text-gray-400 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#productos" className="text-gray-400 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase relative group">
              Catálogo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://wa.me/528712584098?text=Hola%20Uriel%2C%20me%20interesa%20un%20perfume%20de%20Parfums%20TRC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Cart */}
          <button 
            onClick={onCartClick}
            className="text-white hover:text-[#c9a962] transition-all duration-300 relative group hover:scale-110"
          >
            <ShoppingCart size={20} className="transition-transform duration-300 group-hover:rotate-12" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c9a962] text-black text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;