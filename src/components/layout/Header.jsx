export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-16 py-6 flex justify-between items-center transition-all duration-300">
      {/* Brand Logo / Identifier */}
      <a 
        href="#" 
        aria-label="Vicente Benavides - Inicio"
        className="font-mono text-xs md:text-sm font-medium tracking-widest text-text-main uppercase hover:text-accent transition-colors"
      >
        VB <span className="text-text-muted">// 2026</span>
      </a>

      {/* Primary Navigation */}
      <nav aria-label="Navegación principal">
        <ul className="flex items-center gap-6 md:gap-10 font-mono text-xs tracking-wider text-text-muted uppercase">
          <li>
            <a 
              href="#projects" 
              className="hover:text-text-main transition-colors duration-200 focus:outline-none focus:text-accent"
            >
              [ Work ]
            </a>
          </li>
          <li>
            <a 
              href="#tech" 
              className="hover:text-text-main transition-colors duration-200 focus:outline-none focus:text-accent"
            >
              [ Stack ]
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="hover:text-text-main transition-colors duration-200 focus:outline-none focus:text-accent"
            >
              [ About ]
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};