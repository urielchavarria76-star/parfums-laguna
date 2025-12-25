import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-light mb-4">
              <span className="text-[#c9a962]">Parfums</span> TRC
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fragancias exclusivas al mejor precio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm tracking-wider uppercase text-gray-400 mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-500 hover:text-white transition-colors text-sm">Inicio</a></li>
              <li><a href="/catalogo" className="text-gray-500 hover:text-white transition-colors text-sm">Catálogo</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-wider uppercase text-gray-400 mb-4">Contacto</h3>
            <p className="text-gray-500 text-sm mb-4">WhatsApp: +52 871 258 4098</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#c9a962] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/+528712584098" className="text-gray-500 hover:text-[#c9a962] transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-center text-gray-600 text-xs">
            © 2025 Parfums TRC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;