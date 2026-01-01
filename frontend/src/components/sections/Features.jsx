import React from 'react';
import { ShieldCheck, Package, Plane } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      text: "100% Originales"
    },
    {
      icon: Package,
      text: "Distribuidores Oficiales"
    },
    {
      icon: Plane,
      text: "Envíos a todo México"
    }
  ];

  return (
    <section className="bg-black py-12 border-t border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer animate-fadeInUp opacity-0"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="transition-all duration-500 group-hover:scale-125 group-hover:text-[#d4b872]">
                <feature.icon className="w-6 h-6 text-[#c9a962] mb-3 transition-all duration-300" />
              </div>
              <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-white">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;