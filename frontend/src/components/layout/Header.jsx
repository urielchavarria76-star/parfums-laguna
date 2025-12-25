import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { announcements } from '../../data/mock';

const Header = ({ cartCount, onCartClick, onMenuClick }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#1a1a1a] text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...announcements, ...announcements, ...announcements].map((text, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium">
              <span className="text-[#c9a962] mr-2">•</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black sticky top-0 z-50 border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white hover:text-[#c9a962] transition-colors"
              onClick={onMenuClick}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                <span className="text-[#c9a962]">Parfums</span> TRC
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-[#c9a962] transition-colors text-sm font-medium">
                Inicio
              </a>
              <a href="/catalogo" className="text-white hover:text-[#c9a962] transition-colors text-sm font-medium">
                Catálogo
              </a>
              <a href="/decants" className="text-white hover:text-[#c9a962] transition-colors text-sm font-medium">
                Decants
              </a>
              <a href="/mas-vendidos" className="text-white hover:text-[#c9a962] transition-colors text-sm font-medium">
                Más Vendidos
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-[#1a1a1a] text-white px-4 py-2 rounded-l-md border border-[#333] focus:outline-none focus:border-[#c9a962] w-48 text-sm"
                      autoFocus
                    />
                    <button 
                      onClick={() => setSearchOpen(false)}
                      className="bg-[#c9a962] text-black px-3 py-2 rounded-r-md hover:bg-[#d4b872] transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setSearchOpen(true)}
                    className="text-white hover:text-[#c9a962] transition-colors"
                  >
                    <Search size={22} />
                  </button>
                )}
              </div>

              {/* User */}
              <button className="hidden md:block text-white hover:text-[#c9a962] transition-colors">
                <User size={22} />
              </button>

              {/* Cart */}
              <button 
                onClick={onCartClick}
                className="text-white hover:text-[#c9a962] transition-colors relative"
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#c9a962] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;