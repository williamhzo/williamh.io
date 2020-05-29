import React from 'react';

// components
import Header from './Components/Header';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// styles
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Header.scss';
import './styles/Projects.scss';
import './styles/About.scss';
import './styles/Contact.scss';
import './styles/Footer.scss';

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
