import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-[#c9a962]">Parfums</span> TRC
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Venta de perfumes Árabes, Diseñador, Nicho. Mayoreo y Menudeo. Envíos a todo México.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c9a962] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c9a962] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/+528682353290" className="text-gray-400 hover:text-[#c9a962] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a962]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Inicio</a></li>
              <li><a href="/catalogo" className="text-gray-400 hover:text-white transition-colors text-sm">Catálogo</a></li>
              <li><a href="/mas-vendidos" className="text-gray-400 hover:text-white transition-colors text-sm">Más Vendidos</a></li>
              <li><a href="/decants" className="text-gray-400 hover:text-white transition-colors text-sm">Decants</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a962]">Información</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Políticas de Envío</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a962]">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>WhatsApp: +52 868 235 3290</li>
              <li>Email: contacto@parfumstrc.com</li>
              <li>Horario: Lun - Sáb 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">Formas de pago</p>
            <div className="flex items-center space-x-4">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method) => (
                <div key={method} className="bg-white rounded px-3 py-1">
                  <span className="text-xs font-medium text-gray-800">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Parfums TRC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;