import React from 'react';

import Header from './Components/Header';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Main;
