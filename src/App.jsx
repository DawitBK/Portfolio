import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Capabilities from './components/Capabilities';
import Lifecycle from './components/Lifecycle';
import Work from './components/Work';
import Demos from './components/Demos';
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
        <Capabilities />
        <Lifecycle />
        <Work />
        <Demos />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
