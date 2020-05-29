import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">
          William<br></br>Hermozo
        </h1>
        <h2 className="header__title">
          I’m a Front-End Developer & Web Designer.
        </h2>
        <h3 className="header__subtitle">
          I design & code meaningful, user-centered applications for the modern
          web.
        </h3>
        <ul className="header__links">
          <li className="header__items">email</li>
          <li className="header__items">linkedin</li>
          <li className="header__items">github</li>
          <li className="header__items">twitter</li>
        </ul>
      </header>
      <main className="main">
        <section className="projects">
          <h4>
            selected<br></br>projects.
          </h4>
          <div className="projects__wrapper">
            <h5 className="projects__title">freely</h5>
            <p className="projects__description">
              React.js, Node.js, Express, MongoDB
            </p>
            <hr className="projects__separator"></hr>
          </div>
          <div className="projects__wrapper">
            <h5 className="projects__title">freely</h5>
            <p className="projects__description">
              React.js, Node.js, Express, MongoDB
            </p>
            <hr className="projects__separator"></hr>
          </div>
          <div className="projects__wrapper">
            <h5 className="projects__title">freely</h5>
            <p className="projects__description">
              React.js, Node.js, Express, MongoDB
            </p>
            <hr className="projects__separator"></hr>
          </div>
          <h4 className="about">
            about<br></br>me.
          </h4>
          <div className="about__wrapper">
            <h5 className="about__title">in a nutshell</h5>
            <p className="about__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about__description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <h4 className="contact">
            want to<br></br>say hi?
          </h4>
          <div className="contact__wrapper">
            <ul className="contact__info">
              <li className="contact__item">
                I’m currently accepting freelance work. Feel free to reach out,
                I’ll gladly get back to you ASAP.
              </li>
              <li className="contact__item">
                Send me an email at{' '}
                <input
                  className="contact__email"
                  readOnly="readonly"
                  placeholder="hi@williamh.io"
                ></input>{' '}
                <span>(click to copy)</span>
              </li>
              <li className="contact__item">
                Stalk me on{' '}
                <Link to="/" className="contact__link">
                  LinkedIn
                </Link>{' '}
                or check out my code on{' '}
                <Link to="/" className="contact__link">
                  GitHub
                </Link>
                .
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__credits">- Copyright williamh.io © 2020 -</p>
        <p className="footer__credits">Designed and coded from scratch.</p>
      </footer>
    </>
  );
};

export default Main;
