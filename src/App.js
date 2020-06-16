import React from 'react';

// components
import Cursor from './Components/Cursor';
import Header from './Views/Header';
import Body from './Views/Body';
import Footer from './Views/Footer';

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
        <Body />
      </main>
      <Footer />
    </section>
  );
}

export default App;
