import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Work from './components/Work';
import Demos from './components/Demos';
import Approach from './components/Approach';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Work />
        <Demos />
        <Approach />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
