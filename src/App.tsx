import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <div className="min-h-screen relative">
      <MatrixRain />
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <main className="container mx-auto px-4 py-16 space-y-32">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <motion.div
          className="fixed bottom-8 right-8 text-sm text-editor-text/50 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Built with React + TypeScript
        </motion.div>
      </div>
    </div>
  );
}

export default App;