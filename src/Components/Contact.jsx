import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h4 className="contact__title">
        want to<br></br>say hi?
      </h4>
      <div className="contact__wrapper">
        <ul className="contact__info">
          <li className="contact__item">
            I’m currently accepting freelance work. Feel free to reach out, I’ll
            gladly get back to you ASAP.
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
            <a href="/" className="contact__link">
              LinkedIn
            </a>{' '}
            or check out my code on{' '}
            <a href="/" className="contact__link">
              GitHub
            </a>
            .
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
