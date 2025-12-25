import React from 'react';
import { ShieldCheck, Package, Plane } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      text: "Perfumes 100% Originales"
    },
    {
      icon: Package,
      text: "Distribuidores Oficiales de las Mejores Marcas"
    },
    {
      icon: Plane,
      text: "Envíos a todo México y USA"
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-4 p-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#c9a962]" />
              </div>
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;