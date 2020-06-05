import React, { useState } from 'react';

const Contact = () => {
  const [copy, setCopy] = useState(false);

  // const emailName = 'hi';
  // const emailProvider = 'williamh';
  // const emailDomain = 'io';
  const emailName = 'hi';
  const emailProvider = 'williamh';
  const emailDomain = 'io';

  const stringToCopy = `${emailName}@${emailProvider}.${emailDomain}`;

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(stringToCopy); // short and latest version for the code below
      setCopy(true);
    } else {
      const el = document.createElement('textarea'); // Create a <textarea> element
      el.value = stringToCopy; // Set its value to the string that you want copied
      el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
      el.style.position = 'absolute';
      el.style.left = '-9999px'; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
      }
      setCopy(true);
    }
  };

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
            <span
              onClick={copyToClipboard}
              className="contact__email"
            >{`${emailName}@${emailProvider}.${emailDomain}`}</span>{' '}
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
        <hr className="projects__separator"></hr>
      </div>
    </section>
  );
};

export default Contact;
