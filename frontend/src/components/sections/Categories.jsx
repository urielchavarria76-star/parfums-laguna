import React from 'react';
import { categories } from '../../data/mock';

const Categories = () => {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Comprar por <span className="text-[#c9a962]">Categoría</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/${category.slug}`}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg group-hover:text-[#c9a962] transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c9a962] rounded-xl transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;