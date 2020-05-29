import React from 'react';

import Header from './Components/Header';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';

const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <p className="footer__credits">- Copyright williamh.io © 2020 -</p>
        <p className="footer__credits">Designed and coded from scratch.</p>
      </footer>
    </>
  );
};

export default Main;
