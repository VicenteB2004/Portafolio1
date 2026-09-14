import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROJECTS } from '../../data/projects';
import { ProjectGallery } from '../UI/ProjectGallery';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  const toggleProject = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  useGSAP(() => {
    const projectRows = gsap.utils.toArray('.project-row');
    
    gsap.fromTo(
      projectRows,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-b border-border-subtle"
    >
      <div className="flex items-center justify-between mb-16 font-mono text-xs tracking-widest text-text-main uppercase">
        <span>[ 02 PROYECTOS SELECCIONADOS ]</span>
        <span>[{PROJECTS.length} UNIDADES]</span>
      </div>

      <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
        {PROJECTS.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <article 
              key={project.id} 
              className="project-row group transition-colors duration-300 hover:bg-bg-surface/50"
            >
              <button
                onClick={() => toggleProject(project.id)}
                aria-expanded={isExpanded}
                className="w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none focus:text-accent cursor-pointer"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-accent font-medium">
                    {project.id}
                  </span>
                  <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-text-main group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs text-text-main">
                  <span className="hidden sm:inline">{project.category}</span>
                  <span className="text-accent text-base">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
              </button>

              {isExpanded && (
                <div className="pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm animate-fadeIn">
                  {/* Resumen e Impacto */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                        Resumen
                      </h3>
                      <p className="text-text-main font-normal leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                        Contribución y Arquitectura
                      </h3>
                      <p className="text-text-main font-normal leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                        Impacto y Métricas
                      </h3>
                      <p className="text-text-main font-normal leading-relaxed">
                        {project.impact}
                      </p>
                    </div>

                    {/* Galería Dinámica Integrada */}
                    <ProjectGallery images={project.gallery} title={project.title} />
                  </div>

                  {/* Stack Técnico y Links */}
                  <div className="md:col-span-5 flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-border-subtle pt-6 md:pt-0 md:pl-8">
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                        Tecnologías
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span 
                            key={tech} 
                            className="font-mono text-xs px-2.5 py-1 bg-bg-card border border-border-subtle text-text-main rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider pt-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline flex items-center gap-1"
                        >
                          Demo En Vivo ↗
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-main hover:text-accent flex items-center gap-1 transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};