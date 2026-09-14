import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SKILLS_MATRIX } from '../../data/skills';

gsap.registerPlugin(useGSAP);

export const TechMatrix = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Re-anima el panel de contenido cuando cambia la categoría activa
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [activeCategory]);

  return (
    <section 
      id="tech" 
      ref={containerRef}
      className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-b border-border-subtle"
    >
      {/* Eyebrow de Sección */}
      <div className="flex items-center justify-between mb-16 font-mono text-xs tracking-widest text-text-muted uppercase">
        <span>[ 03 // TECHNICAL MATRIX ]</span>
        <span>[ ARCHITECTURE & STACK ]</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Selector de Dominios (Navegación Lateral) */}
        <div className="lg:col-span-5 space-y-2">
          {SKILLS_MATRIX.map((item, index) => {
            const isActive = activeCategory === index;

            return (
              <button
                key={item.category}
                onClick={() => setActiveCategory(index)}
                aria-selected={isActive}
                role="tab"
                className={`w-full text-left p-4 font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-200 border-l-2 flex items-center justify-between focus:outline-none ${
                  isActive
                    ? 'border-accent bg-bg-surface text-text-main font-medium pl-6'
                    : 'border-border-subtle text-text-muted hover:text-text-main hover:border-text-muted'
                }`}
              >
                <span>{item.category}</span>
                <span className="text-xs text-text-muted">
                  0{index + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel de Detalle del Dominio Seleccionado */}
        <div 
          ref={contentRef}
          className="lg:col-span-7 bg-bg-surface border border-border-subtle p-8 md:p-12 rounded-sm space-y-8"
        >
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
              // Domain Overview
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main">
              {SKILLS_MATRIX[activeCategory].category}
            </h3>
            <p className="mt-3 text-text-muted font-light leading-relaxed text-sm md:text-base">
              {SKILLS_MATRIX[activeCategory].description}
            </p>
          </div>

          <div className="border-t border-border-subtle pt-8">
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
              // Core Technologies & Competencies
            </span>

            <div className="flex flex-wrap gap-3">
              {SKILLS_MATRIX[activeCategory].skills.map((skill) => (
                <div
                  key={skill}
                  className="font-mono text-xs md:text-sm px-4 py-2 bg-bg-primary border border-border-subtle text-text-main rounded-sm flex items-center gap-2 group hover:border-accent transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-accent/60 group-hover:bg-accent rounded-full transition-colors" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};