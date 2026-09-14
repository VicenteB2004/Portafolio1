import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.about-content',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-b border-border-subtle"
    >
      {/* Eyebrow de Sección */}
      <div className="flex items-center justify-between mb-16 font-mono text-xs tracking-widest text-text-main uppercase">
        <span>[ 04 SOBRE MÍ & PERFIL ]</span>
        <span>[ INGENIERÍA & NUBE ]</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start about-content">
        {/* Columna Izquierda: Fotografía de Perfil */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group max-w-sm">
            <div className="relative aspect-square bg-bg-surface border border-border-subtle overflow-hidden rounded-sm">
              <img
                src="/profile.webp"
                alt="Vicente Benavides - Software Engineer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="mt-2 font-mono text-[10px] text-text-main flex justify-between uppercase">
              <span>FIG. 01 — PERFIL TÉCNICO</span>
              <span>SOFTWARE ENGINEER</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-main uppercase leading-tight">
              Ingeniero <br />
              <span className="text-accent font-normal">Sistemas & Nube</span> <br />
              Software.
            </h2>
            <div className="pt-2 font-mono text-xs text-accent font-semibold">
              DESARROLLADOR WEB & CLOUD
            </div>
          </div>
        </div>

        {/* Columna Derecha: Prosa de Perfil de Software Engineer */}
        <div className="lg:col-span-7 space-y-8 text-sm md:text-base font-normal text-text-main leading-relaxed lg:pt-4">
          <p className="text-text-main font-normal text-base md:text-lg">
            Soy estudiante de Ingeniería de Software enfocado en la construcción de soluciones digitales integrales. Mi trabajo no se limita al cliente o la interfaz; abarco desde la arquitectura web y móvil hasta la gestión de infraestructura y despliegue en la nube.
          </p>

          <p>
            Diseño aplicaciones web y móviles responsivas combinando código limpio (Clean Architecture)[cite: 1], consumo de APIs y gestión de datos con servicios Cloud en plataformas como AWS y Microsoft Azure[cite: 1]. Aplico prácticas modernas de desarrollo para garantizar escalabilidad, seguridad y entregas continuas optimizadas.
          </p>

          {/* Pilares de Competencias Técnicas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-subtle font-mono text-xs">
            <div className="space-y-2">
              <span className="text-accent uppercase tracking-widest block font-semibold">
                01 / Desarrollo Web & Móvil
              </span>
              <p className="text-text-main font-sans text-xs leading-normal">
                Frontend responsivo, componentes modulares, Clean Architecture en Flutter y consumo eficiente de APIs REST/NoSQL[cite: 1].
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-accent uppercase tracking-widest block font-semibold">
                02 / Infraestructura & Nube
              </span>
              <p className="text-text-main font-sans text-xs leading-normal">
                Despliegue y configuración de servicios en AWS y Azure, contenerización con Docker y automatización CI/CD[cite: 1].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};