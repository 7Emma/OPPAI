import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamPhotos from "../../Datas/teamPhotos";

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-défilement
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === teamPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? teamPhotos.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === teamPhotos.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Carousel principal */}
      <div
        className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-orange-500/30"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {teamPhotos.map((photo) => (
            <div
              key={photo.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">{photo.title}</h4>
                <p className="text-gray-300">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Photo précédente"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Photo suivante"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {teamPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-400 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Aller à la photo ${index + 1}`}
            />
          ))}
        </div>

        {/* Compteur */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-mono">
          {currentIndex + 1} / {teamPhotos.length}
        </div>
      </div>

      {/* Miniatures */}
      <div className="mt-6 grid grid-cols-6 gap-3">
        {teamPhotos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => goToSlide(index)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-orange-400 scale-105"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-orange-400/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
