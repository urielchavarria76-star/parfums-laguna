import React from 'react';
import { X, ChevronRight } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Más Vendidos', href: '/mas-vendidos' },
    { name: 'Decants', href: '/decants' },
    { name: 'Hombre', href: '/hombre' },
    { name: 'Mujer', href: '/mujer' },
    { name: 'Perfumes Árabes', href: '/arabes' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-[#0f0f0f] z-50 transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#333]">
          <h2 className="text-xl font-bold text-white">
            <span className="text-[#c9a962]">Parfums</span> TRC
          </h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#c9a962] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-between px-6 py-4 text-white hover:bg-[#1a1a1a] hover:text-[#c9a962] transition-colors"
              onClick={onClose}
            >
              <span className="font-medium">{item.name}</span>
              <ChevronRight size={18} className="text-gray-500" />
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#333]">
          <a
            href="https://wa.me/+528682353290"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;