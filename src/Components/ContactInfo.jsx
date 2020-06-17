import React, { useState } from 'react';

const ContactInfo = () => {
  const [copy, setCopy] = useState(false);

  const emailName = 'hi';
  const emailProvider = 'williamh';
  const emailDomain = 'io';

  const stringToCopy = `${emailName}@${emailProvider}.${emailDomain}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(stringToCopy);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <>
      <h5 className="section__subtitle section__subtitle--margin">
        let's get in touch
      </h5>
      <ul className="contact__info">
        <li className="contact__item">
          I’m currently accepting freelance work. Feel free to reach out, I’ll
          gladly get back to you as soon as possible.
        </li>
        <li className="contact__item">
          Send me an email at{' '}
          <span
            onClick={copyToClipboard}
            className="contact__email"
          >{`${stringToCopy}`}</span>{' '}
          <span className="contact__email--copy">
            {copy ? '(copied!)' : '(click to copy)'}
          </span>
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
      <hr className="content__separator"></hr>
    </>
  );
};

export default ContactInfo;
