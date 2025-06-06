// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AnimatedBeam from './components/AnimatedBeam';
import Hero from './components/Hero';
import Login from './components/Login';
import KeyFacts from './components/KeyFacts';
import Sponsers from './components/Sponsers';
import About from './components/pages/About';
import WorldMap from './components/WorldMap';
import Contact from './components/pages/Contact';

const Blog = () => <div className="p-10 text-white">Blog Page</div>;

function App() {
  // Add useEffect for responsive viewport height on mobile devices
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);
    
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <>
      <header className="sticky top-4 w-full max-w-screen z-50 mb-10 px-4">
        <Header />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full flex justify-center flex-col items-center overflow-x-hidden">
              <section className='flex flex-col justify-center items-center w-full min-h-[70vh] gap-10 px-4'>
                <Hero />
                <AnimatedBeam />
              </section>
              <section className='flex flex-col justify-center items-center w-full min-h-[70vh] gap-10 md:gap-30 px-4'>
                <KeyFacts />
                <Sponsers />
                <WorldMap />
              </section>
            </main>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
