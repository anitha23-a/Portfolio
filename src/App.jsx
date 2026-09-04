import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen font-sans relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
