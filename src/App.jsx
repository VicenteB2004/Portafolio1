import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechMatrix } from './components/sections/TechMatrix';
import { AboutSection } from './components/sections/AboutSection';
import { CustomCursor } from './components/UI/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-main selection:bg-accent selection:text-white font-sans antialiased">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <TechMatrix />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}