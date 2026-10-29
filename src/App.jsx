import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';
import Certifications from './sections/Certifications.jsx';
import Process from './sections/Process.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    // reducedMotion="user" makes every Framer animation respect the OS setting.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Process />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
