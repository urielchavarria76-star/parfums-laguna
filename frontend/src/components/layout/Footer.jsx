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
              <li><a href="#productos" className="text-gray-500 hover:text-white transition-colors text-sm">Catálogo</a></li>
              <li><a href="https://wa.me/528712584098?text=Hola%20Uriel%2C%20me%20interesa%20un%20perfume%20de%20Parfums%20TRC" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-wider uppercase text-gray-400 mb-4">Contacto</h3>
            <p className="text-gray-500 text-sm mb-2">Uriel Chavarria</p>
            <p className="text-gray-500 text-sm mb-2">WhatsApp: +52 871 258 4098</p>
            <a href="mailto:urielchavarria0610@icloud.com" className="text-gray-500 hover:text-[#c9a962] text-sm transition-colors">
              urielchavarria0610@icloud.com
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="mailto:urielchavarria0610@icloud.com" className="text-gray-500 hover:text-[#c9a962] transition-colors" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a href="https://wa.me/528712584098?text=Hola%20Uriel%2C%20me%20interesa%20un%20perfume%20de%20Parfums%20TRC" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#c9a962] transition-colors" title="WhatsApp">
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