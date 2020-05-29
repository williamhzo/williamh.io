import React from 'react';

const Contact = () => {
  const emailName = 'hi';
  const emailProvider = 'williamh';
  const emailDomain = 'io';

  const copyToClipboard = () => {};

  return (
    <section className="contact">
      <h4 className="contact__title">
        want to<br></br>say hi?
      </h4>
      <div className="contact__wrapper">
        <ul className="contact__info">
          <li className="contact__item">
            I’m currently accepting freelance work. Feel free to reach out, I’ll
            gladly get back to you as soon as possible.
          </li>
          <li className="contact__item">
            Send me an email at{' '}
            <span className="contact__email">{`${emailName}@${emailProvider}.${emailDomain}`}</span>{' '}
            <span>(click to copy)</span>
          </li>
          <li className="contact__item">
            Stalk me on{' '}
            <a
              href="https://www.linkedin.com/in/williamhermozo/"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or check out my code on{' '}
            <a
              href="https://www.github.com/williamhzo/"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </li>
        </ul>
        <hr className="projects__separator"></hr>
      </div>
    </section>
  );
};

export default Contact;
