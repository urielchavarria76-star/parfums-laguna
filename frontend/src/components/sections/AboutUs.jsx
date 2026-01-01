import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="bg-black py-20 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
            <span className="text-[#c9a962]">Parfums</span> TRC
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a962] mx-auto mt-4"></div>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-black rounded-lg overflow-hidden border border-[#2a2a2a] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl md:text-7xl font-light text-white mb-4">
                  <span className="text-[#c9a962]">P</span>TRC
                </div>
                <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">Est. 2024</p>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#c9a962]/20 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#c9a962]/20 rounded-lg"></div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-3">Nuestra Historia</p>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                Dos jóvenes, un sueño
              </h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              <span className="text-[#c9a962] font-medium">Parfums TRC</span> nació de la pasión de dos jóvenes emprendedores 
              que decidieron convertir su amor por las fragancias en un negocio. Lo que comenzó como un hobby 
              explorando perfumes árabes y de diseñador, se transformó en una misión: hacer accesibles las 
              mejores fragancias del mundo a precios justos.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Creemos que oler bien no debería ser un lujo inalcanzable. Por eso seleccionamos cuidadosamente 
              cada fragancia de nuestra colección, asegurándonos de ofrecer solo <span className="text-white">perfumes 100% originales</span> con 
              la mejor relación calidad-precio del mercado.
            </p>

            {/* Visit Us Box */}
            <div className="bg-gradient-to-r from-[#c9a962]/10 to-transparent border-l-4 border-[#c9a962] p-5 rounded-r-lg mt-8">
              <p className="text-[#c9a962] font-medium mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                ¿Quieres oler las fragancias?
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aunque no contamos con local propio, puedes <span className="text-white font-medium">oler todas nuestras fragancias 
                GRATIS</span> en <span className="text-[#c9a962]">Blvd. Rodríguez Triana</span>. 
                ¡Agenda tu cita por WhatsApp y descubre tu próximo perfume favorito!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2a2a2a] mt-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light text-[#c9a962]">50+</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Fragancias</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light text-[#c9a962]">100%</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Originales</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light text-[#c9a962]">⭐</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Calidad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#2a2a2a]">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Autenticidad Garantizada</h4>
            <p className="text-gray-500 text-sm">Todos nuestros perfumes son 100% originales. Sin imitaciones, sin réplicas.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Pasión por las Fragancias</h4>
            <p className="text-gray-500 text-sm">Amamos lo que hacemos y eso se refleja en cada recomendación personalizada.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Precios Accesibles</h4>
            <p className="text-gray-500 text-sm">Las mejores fragancias del mundo sin que tu cartera sufra.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
