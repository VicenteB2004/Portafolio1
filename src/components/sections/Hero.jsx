import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Hero = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const manifestoRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 0.1 }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0 },
      '-=0.7'
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      '-=0.7'
    )
    .fromTo(
      manifestoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      '-=0.7'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0 },
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex flex-col justify-between pt-36 pb-16 px-6 md:px-16 max-w-7xl mx-auto border-b border-border-subtle"
    >
      {/* Eyebrow / Metadatos */}
      <div 
        ref={badgeRef} 
        className="flex items-center gap-3 font-mono text-xs tracking-widest text-text-muted uppercase"
      >
        <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
        <span>[01 // PORTFOLIO 2026]</span>
      </div>

      {/* Bloque Tipográfico Principal */}
      <div className="my-auto py-12">
        <h1 
          ref={titleRef} 
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tightest text-text-main leading-none uppercase mb-4"
        >
          Vicente <br />
          <span className="text-text-muted font-normal">Benavides</span>
        </h1>

        <div 
          ref={subtitleRef} 
          className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-6"
        >
          <p className="font-mono text-base md:text-xl text-accent font-medium tracking-tight">
            Ingeniero en Software
          </p>
          <span className="hidden md:inline text-border-subtle">•</span>
          <p className="font-mono text-base md:text-xl text-text-muted tracking-tight">
            Desarrollador Web & Cloud
          </p>
        </div>

        <p 
          ref={manifestoRef} 
          className="mt-8 text-lg md:text-2xl text-text-muted font-light max-w-2xl leading-relaxed tracking-editorial"
        >
          Desarrollamos productos digitales con interfaces limpias y una ingeniería bien pensada.
        </p>
      </div>

      {/* Footer del Hero / CTA */}
      <div 
        ref={ctaRef} 
        className="flex items-center justify-between pt-8 border-t border-border-subtle/50"
      >
        <a 
          href="#projects" 
          className="group inline-flex items-center gap-4 text-sm font-mono text-text-main tracking-widest uppercase transition-colors hover:text-accent focus:outline-none focus:text-accent"
        >
          <span>Explore Projects</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>

        <div className="hidden sm:block font-mono text-xs text-text-muted">
          LOC: ECUADOR // LATAM
        </div>
      </div>
    </section>
  );
};