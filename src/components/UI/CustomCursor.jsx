import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Detectar si el dispositivo soporta hover (evitar en móviles/tablets)
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Animación ultrasónica sin re-renders usando gsap.quickTo
    const xDot = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3.out' });
    const yDot = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3.out' });

    const xFollower = gsap.quickTo(follower, 'x', { duration: 0.4, ease: 'power3.out' });
    const yFollower = gsap.quickTo(follower, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xFollower(e.clientX);
      yFollower(e.clientY);
    };

    // Ampliar cursor al pasar sobre elementos interactivos
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea');

      if (isInteractive) {
        gsap.to(follower, {
          scale: 2.2,
          backgroundColor: 'rgba(226, 88, 34, 0.15)',
          borderColor: '#E25822',
          duration: 0.2
        });
      } else {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(244, 244, 245, 0.3)',
          duration: 0.2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Punto central del cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Anillo de seguimiento (Follower) */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-text-main/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-150"
      />
    </>
  );
};