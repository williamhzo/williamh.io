import React from 'react';

// components
import Cursor from './Components/Cursor';
import Header from './Components/Sections/Header';
import AllProjects from './Components/Sections/AllProjects';
import About from './Components/Sections/About';
import Contact from './Components/Sections/Contact';
import Footer from './Components/Sections/Footer';

// styles
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Projects.scss';
import './styles/About.scss';
import './styles/Contact.scss';
import './styles/Footer.scss';

function App() {
  return (
    <section className="app">
      <Cursor />
      <Header />
      <main className="main">
        <AllProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </section>
  );
}

export default App;
