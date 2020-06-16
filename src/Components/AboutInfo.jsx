import React from 'react';

const AboutInfo = () => {
  return (
    <>
      <h5 className="section__subtitle">in a nutshell</h5>
      <p className="about__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="about__description">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="about__description">
        If you don't read Latin, you can take a look at my resume{' '}
        <a
          href="/media/CV_William-HERMOZO-2020-min.pdf"
          className="about__link"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <hr className="content__separator"></hr>
    </>
  );
};

export default AboutInfo;
