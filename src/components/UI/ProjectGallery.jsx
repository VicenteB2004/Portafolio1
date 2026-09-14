import { useState, useRef } from 'react';
import gsap from 'gsap';

export const ProjectGallery = ({ images = [], title = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.15,
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' }
        );
      }
    });
  };

  const handlePrev = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.15,
      onComplete: () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' }
        );
      }
    });
  };

  return (
    <div className="space-y-3 pt-2">
      <div className="font-mono text-xs uppercase tracking-widest text-text-muted flex justify-between items-center">
        <span>// Visual Preview</span>
        {images.length > 1 && (
          <span>[{String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}]</span>
        )}
      </div>

      {/* Contenedor Adaptable con Altura Fija y Centrado */}
      <div className="relative h-[420px] w-full bg-bg-surface/80 border border-border-subtle rounded-sm overflow-hidden flex items-center justify-center p-4 group">
        <img
          ref={imageRef}
          src={images[currentIndex]}
          alt={`${title} - Preview ${currentIndex + 1}`}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Botones de Navegación */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-bg-primary/90 backdrop-blur-md px-2 py-1 border border-border-subtle rounded-sm z-10">
            <button
              onClick={handlePrev}
              aria-label="Imagen anterior"
              className="px-2 py-1 font-mono text-xs text-text-muted hover:text-accent transition-colors"
            >
              ←
            </button>
            <span className="text-border-subtle">|</span>
            <button
              onClick={handleNext}
              aria-label="Siguiente imagen"
              className="px-2 py-1 font-mono text-xs text-text-muted hover:text-accent transition-colors"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};