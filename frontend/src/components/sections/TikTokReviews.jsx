import React from 'react';
import { Play } from 'lucide-react';

const TikTokReviews = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "https://oudroma.com/cdn/shop/files/preview_images/da35e50351984dc7aca8fe5c3ce75367.thumbnail.0000000000_600x.jpg?v=1749660781",
      views: "1.7k",
      isNew: true
    },
    {
      id: 2,
      thumbnail: "https://oudroma.com/cdn/shop/files/preview_images/a66d49a0ba8e4657ae4730545158bd69.thumbnail.0000000000_600x.jpg?v=1747859402",
      views: "100k",
      isNew: false
    },
    {
      id: 3,
      thumbnail: "https://oudroma.com/cdn/shop/files/preview_images/29af26ac59d9493e9e084880402a8844.thumbnail.0000000000_600x.jpg?v=1747859393",
      views: "57k",
      isNew: false
    },
    {
      id: 4,
      thumbnail: "https://oudroma.com/cdn/shop/files/preview_images/dd7c206db0994f54999e2c9adb3a78e5.thumbnail.0000000000_600x.jpg?v=1747859463",
      views: "45k",
      isNew: false
    },
    {
      id: 5,
      thumbnail: "https://oudroma.com/cdn/shop/files/preview_images/9e5e2249c2344158b5249f9fd8c84013.thumbnail.0000000000_600x.jpg?v=1747859480",
      views: "32k",
      isNew: false
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Con la confianza de los reseñadores más <span className="text-[#c9a962]">virales</span> de TikTok
          </h2>
          <p className="text-gray-400 mt-4">
            "Proveedor seguro y confiable" - <span className="text-[#c9a962]">@elgueydelosperfumes</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">"Perfumes árabes originales"</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt="TikTok Review"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>

              {/* New Badge */}
              {video.isNew && (
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                    NEW
                  </span>
                </div>
              )}

              {/* Views */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1">
                <Play className="w-4 h-4 text-white fill-white" />
                <span className="text-white text-sm font-medium">{video.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TikTokReviews;