import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const Header = ({ cartCount, onCartClick, onMenuClick }) => {
  return (
    <header className="bg-black sticky top-0 z-50 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-[#c9a962] transition-colors"
            onClick={onMenuClick}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-xl font-light text-white tracking-wider">
              <span className="text-[#c9a962]">Parfums</span> TRC
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">
              Inicio
            </a>
            <a href="/catalogo" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">
              Catálogo
            </a>
            <a href="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">
              Contacto
            </a>
          </nav>

          {/* Cart */}
          <button 
            onClick={onCartClick}
            className="text-white hover:text-[#c9a962] transition-colors relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c9a962] text-black text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
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