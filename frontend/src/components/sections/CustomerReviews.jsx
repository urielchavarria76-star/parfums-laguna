import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { reviews } from '../../data/mock';

const CustomerReviews = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Opiniones <span className="text-[#c9a962]">100% Reales</span> de Nuestros Clientes
          </h2>
          <p className="text-gray-400 mt-4">
            Miles de amantes de los perfumes ya compraron en <span className="text-[#c9a962] font-bold">PARFUMS TRC</span> y esto es lo que opinan.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#c9a962] text-[#c9a962]" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">858</span>
            <span className="text-gray-400">Reseñas Verificadas</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-2 mb-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#c9a962] hover:text-black transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#c9a962] hover:text-black transition-colors flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Reviews Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="flex-shrink-0 w-[300px] bg-[#111] rounded-xl p-6 snap-start"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#c9a962] mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                {review.text}
              </p>

              {/* Image */}
              {review.image && (
                <div className="mb-4">
                  <img 
                    src={review.image} 
                    alt="Review"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
                <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;