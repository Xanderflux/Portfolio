import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import GitHubActivity from './components/Github/Github';

function App() {
  const pageTransition = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  return (
    <ThemeProvider>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        className="min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Skills />
          <GitHubActivity />          
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;