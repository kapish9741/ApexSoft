// src/App.jsx
import { Routes, Route } from 'react-router-dom';

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
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <header className="sticky top-4 w-screen z-50 mb-10">
        <Header />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main className="w-screen flex justify-center flex-col items-center">
              <section className='flex flex-col justify-center items-center w-screen min-h-[70vh] gap-10'>
                <Hero />
                <AnimatedBeam />
              </section>
              <section className='flex flex-col justify-center items-center w-screen min-h-[70vh] gap-30'>
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
