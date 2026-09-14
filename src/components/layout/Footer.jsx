export const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary py-16 px-6 md:px-16 font-mono text-xs text-text-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Sign-off */}
        <div className="space-y-2">
          <p className="text-text-main tracking-tight font-sans text-sm font-medium">
            Designed & built by Vicente Benavides
          </p>
          <p className="text-text-muted">
            Software Engineering / Clean Interfaces & Systems
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 tracking-widest uppercase">
          <a
            href="https://github.com/VicenteB2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors focus:outline-none"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/vicente-arquimedes-chica-benavides-908b33327/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors focus:outline-none"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=crissbenavides9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail ↗
          </a>
        </div>
      </div>
    </footer>
  );
};