import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 'home' }),
    }).catch((err) => console.log('Analytics ping silent catch:', err.message));
  }, []);

  return (
    <div className="min-h-screen bg-[#d01b1b] text-white selection:bg-white selection:text-[#d01b1b] font-sans relative">
      <AnimatePresence mode="wait">
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Process />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
